import WooCommerceAPI from '../../utils/woocommerce';
import Image from 'next/image';

export default async function Page({ 
  params 
}: { 
  params: { slug: string } 
}) {
  try {
    const response = await WooCommerceAPI.get('products', {
      params: {
        search: params.slug.replace(/-/g, ' ')
      }
    });

    const product = response.data[0];
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
          {/* Rest des Codes bleibt gleich */}
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

export const dynamic = 'force-dynamic';;