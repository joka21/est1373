'use client';

import React, { useState } from 'react';

const products = [
  { id: 1, name: "Eco-Baumwoll T-Shirt", price: 29.99, category: "est1373", description: "Weiches, atmungsaktives T-Shirt aus 100% Bio-Baumwolle." },
  { id: 2, name: "Recycelte Jeans", price: 79.99, category: "est1373", description: "Stylische Jeans aus recycelten Denimfasern und Bio-Baumwolle." },
  { id: 3, name: "Bio-Leinen Bluse", price: 59.99, category: "est1373", description: "Luftige Sommerbluse aus nachhaltig angebautem Leinen." },
  { id: 4, name: "Vintage Lederjacke", price: 129.99, category: "Second Hand", description: "Klassische Lederjacke aus den 80ern, sorgfältig aufbereitet." },
  { id: 5, name: "Upcycled Denim Rock", price: 49.99, category: "Second Hand", description: "Einzigartiger Rock aus umgearbeiteten Vintage-Jeans." },
  { id: 6, name: "Fair Trade Pullover", price: 69.99, category: "Andere Anbieter", description: "Kuscheliger Pullover aus fair gehandelter Wolle." },
  { id: 7, name: "Nachhaltige Sneaker", price: 89.99, category: "Andere Anbieter", description: "Sportliche Sneaker aus recycelten und veganen Materialien." },
  { id: 8, name: "Bambus Socken Set", price: 19.99, category: "est1373", description: "Weiches, antibakterielles Socken-Set aus Bambusfasern." },
  { id: 9, name: "Hanf Hoodie", price: 74.99, category: "Andere Anbieter", description: "Robuster, langlebiger Hoodie aus nachhaltigem Hanf." },
  { id: 10, name: "Vintage Seidenkleid", price: 99.99, category: "Second Hand", description: "Elegantes Seidenkleid aus den 50ern, perfekt erhalten." },
  { id: 11, name: "Eco-Badeanzug", price: 54.99, category: "est1373", description: "Formschöner Badeanzug aus recyceltem Nylon." },
  { id: 12, name: "Fairtrade Baumwollhemd", price: 64.99, category: "Andere Anbieter", description: "Klassisches Hemd aus fair gehandelter, Bio-Baumwolle." },
];

const ShopPage = () => {
  const [sortBy, setSortBy] = useState('name');

  const sortedProducts = [...products].sort((a, b) => {
    if (sortBy === 'price') {
      return a.price - b.price;
    }
    return a.name.localeCompare(b.name);
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Nachhaltiger Modeshop</h1>
      
      <div className="mb-6">
        <select 
          className="border border-gray-300 rounded-md p-2"
          onChange={(e) => setSortBy(e.target.value)}
          value={sortBy}
        >
          <option value="name">Nach Name sortieren</option>
          <option value="price">Nach Preis sortieren</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {sortedProducts.map((product) => (
          <div key={product.id} className="border rounded-lg p-4 flex flex-col">
            <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
            <p className="text-sm text-gray-600 mb-2">{product.category}</p>
            <p className="text-sm mb-4 flex-grow">{product.description}</p>
            <p className="text-lg font-bold mt-auto">{product.price.toFixed(2)} €</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopPage;