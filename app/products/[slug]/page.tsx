// app/products/[slug]/page.tsx

// @ts-nocheck
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
      return <div>Produkt nicht gefunden</div>;
    }

    return <div>Produktname: {product.name}</div>;
  } catch (error) {
    return <div>Fehler beim Laden</div>;
  }
}

export const dynamic = 'force-dynamic';