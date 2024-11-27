// app/products/components/ProductOptions.tsx
'use client';

import { useState } from 'react';

interface ProductOptionsProps {
  attributes: Array<{
    name: string;
    options: string[];
  }>;
  variations: number[];
  onAddToCart: (selectedOptions: Record<string, string>) => void;
}

export function ProductOptions({ attributes, variations, onAddToCart }: ProductOptionsProps) {
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
      {/* Varianten */}
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

      {/* Menge */}
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

      {/* Warenkorb-Button */}
      <button
        onClick={handleAddToCart}
        className="w-full bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition-colors"
      >
        In den Warenkorb
      </button>
    </div>
  );
}