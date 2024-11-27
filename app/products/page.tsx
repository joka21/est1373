// app/products/page.tsx

interface WooCommerceProduct {
  id: number;
  name: string;
  price: string;
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
}

export default async function ProductsPage() {
  try {
    const res = await fetch('/api/products', {
      cache: 'no-store',
    });

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const products = (await res.json()) as WooCommerceProduct[];

    return (
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-6">Unsere Produkte</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div key={product.id} className="border rounded-lg shadow-sm overflow-hidden">
              {product.images[0] && (
                <img
                  src={product.images[0].src}
                  alt={product.images[0].alt || product.name}
                  className="w-full h-64 object-cover"
                />
              )}
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
                <div 
                  className="text-gray-600 mb-2"
                  dangerouslySetInnerHTML={{ __html: product.price_html }}
                />
                {product.attributes.length > 0 && (
                  <div className="mt-2">
                    {product.attributes.map((attr, index) => (
                      <div key={index} className="text-sm">
                        <span className="font-medium">{attr.name}: </span>
                        {attr.options.join(', ')}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  } catch (error) {
    console.error('Error loading products:', error);
    return (
      <div className="p-4">
        <h1 className="text-2xl font-bold text-red-500">Fehler beim Laden der Produkte</h1>
        <p className="text-gray-600">
          {error instanceof Error ? error.message : 'Ein unerwarteter Fehler ist aufgetreten'}
        </p>
      </div>
    );
  }
}