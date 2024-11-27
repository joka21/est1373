/// app/products/components/RelatedProducts.tsx
import Image from 'next/image';
import Link from 'next/link';
import WooCommerceAPI from '../utils/woocommerce';

interface RelatedProductsProps {
  currentProductId: number;
  categoryIds: number[];
}

async function getRelatedProducts(currentProductId: number, categoryIds: number[]) {
  try {
    const response = await WooCommerceAPI.get('products', {
      params: {
        category: categoryIds.join(','),
        exclude: [currentProductId],
        per_page: 4
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching related products:', error);
    return [];
  }
}

export async function RelatedProducts({ currentProductId, categoryIds }: RelatedProductsProps) {
  const relatedProducts = await getRelatedProducts(currentProductId, categoryIds);

  if (relatedProducts.length === 0) return null;

  return (
    <div className="mt-12">
      <h2 className="text-2xl font-bold mb-6">Ähnliche Produkte</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {relatedProducts.map((product: any) => (
          <Link 
            href={`/products/${product.id}`}
            key={product.id}
            className="group"
          >
            <div className="relative h-48 mb-2 rounded-lg overflow-hidden">
              <Image
                src={product.images[0]?.src || ''}
                alt={product.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-200"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
            </div>
            <h3 className="font-medium">{product.name}</h3>
            <div 
              className="text-gray-600"
              dangerouslySetInnerHTML={{ __html: product.price_html }}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}