import WooCommerceAPI from '../../utils/woocommerce';
import Image from 'next/image';

interface WooCommerceImage {
  id: number;
  src: string;
  alt: string;
}

interface WooCommerceAttribute {
  id: number;
  name: string;
  options: string[];
}

interface WooCommerceProduct {
  id: number;
  name: string;
  price: string;
  regular_price: string;
  sale_price: string;
  images: WooCommerceImage[];
  description: string;
  price_html: string;
  attributes: WooCommerceAttribute[];
  on_sale: boolean;
}

type PageParams = {
  params: { slug: string }
}

// @ts-ignore: Unreachable code error
async function getUserProduct({ params }: PageParams): Promise<WooCommerceProduct | null> {
  const response = await WooCommerceAPI.get('products', {
    params: {
      search: params.slug.replace(/-/g, ' ')
    }
  });

  return response.data[0];
}

// @ts-ignore: Next.js PageProps type error
export default async function Page({ params }: { params: { slug: string } }) {
  try {
    const product = await getUserProduct({ params });

    if (!product) {
      return (
        <div className="p-4 max-w-7xl mx-auto">
          <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center">
            <h1 className="text-2xl font-bold text-red-600 mb-2">
              Produkt nicht gefunden
            </h1>
          </div>
        </div>
      );
    }

    return (
      <div className="p-4 max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Produktbilder */}
          <div className="space-y-4">
            <div className="relative aspect-square w-full overflow-hidden rounded-lg">
              {product.images?.[0] ? (
                <Image
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
              {product.on_sale && (
                <span className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded-md text-sm">
                  Angebot
                </span>
              )}
            </div>
            {/* Weitere Produktbilder */}
            <div className="grid grid-cols-4 gap-2">
              {product.images?.slice(1).map((image) => (
                <div key={image.id} className="relative aspect-square rounded-lg overflow-hidden">
                  <Image
                    src={image.src}
                    alt={image.alt || ''}
                    fill
                    sizes="(max-width: 768px) 25vw, 15vw"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Produktinformationen */}
          <div className="space-y-6">
            <h1 className="text-3xl font-bold">{product.name}</h1>
            
            <div 
              className="text-2xl font-semibold"
              dangerouslySetInnerHTML={{ __html: product.price_html }}
            />

            <div 
              className="prose prose-sm"
              dangerouslySetInnerHTML={{ __html: product.description }}
            />

            {product.attributes && product.attributes.length > 0 && (
              <div className="border-t pt-4">
                <h2 className="text-lg font-semibold mb-2">Produktoptionen</h2>
                {product.attributes.map((attribute) => (
                  <div key={attribute.id} className="mb-4">
                    <h3 className="font-medium">{attribute.name}</h3>
                    <div className="grid grid-cols-2 gap-2 mt-2">
                      {attribute.options.map((option, i) => (
                        <div 
                          key={`${attribute.id}-${i}`}
                          className="px-3 py-2 border rounded-md text-sm"
                        >
                          {option}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
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