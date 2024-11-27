// app/products/[id]/page.tsx
import WooCommerceAPI from '../../utils/woocommerce';
import Link from 'next/link';

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
    name: string;
    options: string[];
  }>;
  on_sale: boolean;
}

export default async function ProductDetailPage({
  params,
}: {
  params: { id: string };
}) {
  try {
    const response = await WooCommerceAPI.get(`products/${params.id}`);
    const product: WooCommerceProduct = response.data;

    return (
      <div className="container mx-auto px-4 py-8">
        <Link
          href="/products"
          className="text-blue-600 hover:text-blue-800 mb-6 inline-block"
        >
          ← Zurück zur Übersicht
        </Link>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Produktbilder */}
          <div className="space-y-4">
            {product.images?.map((image) => (
              /* eslint-disable-next-line @next/next/no-img-element */
              <img
                key={image.id}
                src={image.src}
                alt={image.alt || product.name}
                className="w-full rounded-lg shadow-md"
              />
            ))}
          </div>

          {/* Produktinformationen */}
          <div className="space-y-4">
            <h1 className="text-3xl font-bold">{product.name}</h1>
            
            {product.on_sale && (
              <span className="inline-block bg-red-500 text-white px-3 py-1 rounded-md text-sm">
                Angebot
              </span>
            )}

            <div 
              className="text-2xl font-semibold"
              dangerouslySetInnerHTML={{ __html: product.price_html }}
            />

            <div
              className="prose max-w-none"
              dangerouslySetInnerHTML={{ __html: product.description }}
            />

            {/* Produktvarianten */}
            {product.attributes?.length > 0 && (
              <div className="border-t pt-4 mt-4">
                <h2 className="text-xl font-semibold mb-4">Verfügbare Varianten</h2>
                {product.attributes.map((attr, index) => (
                  <div key={index} className="mb-4">
                    <h3 className="font-medium mb-2">{attr.name}</h3>
                    <div className="flex flex-wrap gap-2">
                      {attr.options.map((option, optIndex) => (
                        <span
                          key={optIndex}
                          className="px-3 py-1 bg-gray-100 rounded-full text-sm"
                        >
                          {option}
                        </span>
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
      <div className="container mx-auto px-4 py-8">
        <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center">
          <h1 className="text-2xl font-bold text-red-600 mb-4">
            Fehler beim Laden des Produkts
          </h1>
          <p className="text-gray-600 mb-4">
            {error instanceof Error ? error.message : 'Das Produkt konnte nicht gefunden werden'}
          </p>
          <Link
            href="/products"
            className="text-blue-600 hover:text-blue-800"
          >
            Zurück zur Übersicht
          </Link>
        </div>
      </div>
    );
  }
}

export const dynamic = 'force-dynamic';