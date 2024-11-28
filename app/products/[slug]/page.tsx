import WooCommerceAPI from '../../utils/woocommerce';
import { notFound } from 'next/navigation';
import Image from 'next/image';

// PageProps import entfernt, da er einen Fehler verursacht

interface WooCommerceProduct {
  id: number;
  name: string;
  price: string;
  regular_price: string;
  sale_price: string;
  images: Array<{
    id: number;
    src: string;
    alt: string;
  }>;
  description: string;
  price_html: string;
  attributes: Array<{
    id: number;
    name: string;
    options: string[];
  }>;
  on_sale: boolean;
}

interface Props {
  params: {
    slug: string;
  };
}

async function getProduct(slug: string): Promise<WooCommerceProduct> {
  const response = await WooCommerceAPI.get('products', {
    params: {
      search: slug.replace(/-/g, ' ')
    }
  });

  const product = response.data[0];
  if (!product) {
    notFound(); // notFound wird tatsächlich verwendet
  }

  return product;
}

export default async function Page({ params }: Props) {
  try {
    const product = await getProduct(params.slug);

    return (
      <div className="p-4 max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Produktbilder */}
          <div className="space-y-4">
            <div className="relative aspect-square w-full overflow-hidden rounded-lg">
              {product.images?.[0] ? (
                <Image  // Image wird tatsächlich verwendet
                  src={product.images[0].src}
                  alt={product.images[0].alt || product.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                  priority
                />
              ) : (
                <div className="w-full h-full bg-gray-100 flex items-center justify-center text-gray-400">
                  Kein Bild verfügbar
                </div>
              )}
              {/* Rest des Codes... */}
            </div>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error('Error loading product:', error);
    return (
      <div className="p-4 max-w-7xl mx-auto">
        <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center">
          <h1 className="text-2xl font-bold text-red-600 mb-2">
            Fehler beim Laden des Produkts
          </h1>
          <p className="text-gray-600 mb-4">
            {error instanceof Error ? error.message : 'Ein unerwarteter Fehler ist aufgetreten'}
          </p>
        </div>
      </div>
    );
  }
}

export const dynamic = 'force-dynamic';