// ProductOptions.tsx
'use client';

import { useState } from 'react';

interface ProductOptionsProps {
  attributes: Array<{
    name: string;
    options: string[];
  }>;
  onAddToCart: (selectedOptions: Record<string, string>) => void;
}

export function ProductOptions({ attributes, onAddToCart }: ProductOptionsProps) {
  const [selectedOptions, setSelectedOptions] = useState<Record<string, string>>({});
  const [quantity, setQuantity] = useState(1);

  const handleOptionChange = (attributeName: string, value: string) => {
    setSelectedOptions(prev => ({
      ...prev,
      [attributeName]: value
    }));
  };

  const handleAddToCart = () => {
    onAddToCart({
      ...selectedOptions,
      quantity: quantity.toString()
    });
  };

  return (
    <div className="space-y-6">
      {attributes.map((attr, index) => (
        <div key={index} className="space-y-2">
          <label className="block font-medium">{attr.name}</label>
          <select 
            className="w-full p-2 border rounded-md"
            value={selectedOptions[attr.name] || ''}
            onChange={(e) => handleOptionChange(attr.name, e.target.value)}
          >
            <option value="">Bitte wählen</option>
            {attr.options.map((option, optIndex) => (
              <option key={optIndex} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      ))}

      <div className="space-y-2">
        <label className="block font-medium">Menge</label>
        <input
          type="number"
          min="1"
          value={quantity}
          onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value)))}
          className="w-full p-2 border rounded-md"
        />
      </div>

      <button
        onClick={handleAddToCart}
        className="w-full bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition-colors"
      >
        In den Warenkorb
      </button>
    </div>
  );
}

// RelatedProducts.tsx
import Image from 'next/image';
import Link from 'next/link';
import WooCommerceAPI from '../utils/woocommerce';

interface Product {
  id: number;
  name: string;
  images: Array<{ 
    src: string;
    alt?: string;
  }>;
  price_html: string;
}

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
    return response.data as Product[];
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
        {relatedProducts.map((product) => (
          <Link 
            href={`/products/${product.id}`}
            key={product.id}
            className="group"
          >
            <div className="relative h-48 mb-2 rounded-lg overflow-hidden">
              <Image
                src={product.images[0]?.src || '/placeholder.jpg'}
                alt={product.images[0]?.alt || product.name}
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

// page.tsx with Image component
import Image from 'next/image';

// Replace in your products grid
<div className="relative h-72">
  {product.images?.[0] ? (
    <Image
      src={product.images[0].src}
      alt={product.images[0].alt || product.name}
      fill
      className="object-cover group-hover:scale-105 transition-transform duration-300"
      sizes="(max-width: 768px) 100vw, 33vw"
    />
  ) : (
    <div className="w-full h-full bg-gray-100 flex items-center justify-center text-gray-400">
      Kein Bild verfügbar
    </div>
  )}
</div>