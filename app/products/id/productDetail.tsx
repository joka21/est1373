// app/products/[id]/page.tsx
import { ProductGallery } from '../../components/ProductGallery';
import { ProductOptions } from '../../components/ProductOptions';
import { RelatedProducts } from '../../components/RelatedProducts';
import WooCommerceAPI from '../../utils/woocommerce';
import Link from 'next/link';

export default async function ProductDetailPage({
  params,
}: {
  params: { id: string };
}) {
  try {
    const response = await WooCommerceAPI.get(`products/${params.id}`);
    const product = response.data;

    return (
      <div className="container mx-auto px-4 py-8">
        <Link 
          href="/products" 
          className="text-blue-600 hover:text-blue-800 mb-4 inline-block"
        >
          ← Zurück zu allen Produkten
        </Link>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Bildergalerie */}
          <ProductGallery images={product.images} />

          {/* Produktdetails */}
          <div className="space-y-6">
            <h1 className="text-3xl font-bold">{product.name}</h1>
            
            <div 
              className="text-xl"
              dangerouslySetInnerHTML={{ __html: product.price_html }}
            />
            
            <div 
              className="prose max-w-none"
              dangerouslySetInnerHTML={{ __html: product.description }}
            />

            {/* Variantenauswahl und Warenkorb */}
            <ProductOptions 
              attributes={product.attributes}
              variations={product.variations}
              onAddToCart={(options) => {
                // Hier kommt später die Warenkorb-Logik
                console.log('Adding to cart:', options);
              }}
            />
          </div>
        </div>

        {/* Ähnliche Produkte */}
        <RelatedProducts 
          currentProductId={product.id}
          categoryIds={product.categories.map((cat: any) => cat.id)}
        />
      </div>
    );
  } catch (error) {
    console.error('Error loading product:', error);
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold text-red-500">
          Fehler beim Laden des Produkts
        </h1>
        <p className="text-gray-600">
          Das Produkt konnte nicht gefunden werden.
        </p>
        <Link 
          href="/products" 
          className="text-blue-600 hover:text-blue-800 mt-4 inline-block"
        >
          Zurück zu allen Produkten
        </Link>
      </div>
    );
  }
}