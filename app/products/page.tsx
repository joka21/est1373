// app/products/page.tsx
import WooCommerceAPI from '../utils/woocommerce';
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

export default async function ProductsPage() {
  try {
    const response = await WooCommerceAPI.get('products', {
      params: { per_page: 20 }
    });

    const products = response.data;

    return (
      <div className="p-4 max-w-7xl mx-auto">
        <h1 className="text-6xl font-bold mb-8">Unsere Produkte</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product: WooCommerceProduct) => (
            <Link 
              href={`/products/${product.id}`} 
              key={product.id}
              className="group block"
            >
              <article className="border rounded-lg shadow-sm overflow-hidden transition-shadow hover:shadow-md">
                <div className="relative h-72">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  {product.images?.[0] ? (
                    <img
                      src={product.images[0].src}
                      alt={product.images[0].alt || product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
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

                <div className="p-4 space-y-2">
                  <h2 className="text-lg font-semibold group-hover:text-blue-600 transition-colors">
                    {product.name}
                  </h2>
                  
                  <div 
                    className="text-gray-700"
                    dangerouslySetInnerHTML={{ __html: product.price_html }}
                  />

                  {product.attributes?.length > 0 && (
                    <div className="pt-2 border-t">
                      {product.attributes.map((attr, index) => (
                        <div key={index} className="text-sm text-gray-600">
                          <span className="font-medium">{attr.name}: </span>
                          <span className="text-gray-500">
                            {attr.options.length} Optionen
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    );
  } catch (error) {
    console.error('Error loading products:', error);
    return (
      <div className="p-4 max-w-7xl mx-auto">
        <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center">
          <h1 className="text-2xl font-bold text-red-600 mb-2">
            Fehler beim Laden der Produkte
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