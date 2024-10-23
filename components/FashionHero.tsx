import React from 'react';
import Image from 'next/image';

type ImageConfig = {
  src: string;
  alt: string;
};

const FashionHero: React.FC = () => {
  const sideImages: ImageConfig[] = [
    { src: '/bilder/bild1.webp', alt: 'Fashion model 1' },
    { src: '/bilder/bild2.webp', alt: 'Fashion model 2' },
    { src: '/bilder/bild3.webp', alt: 'Fashion model 3' },
    { src: '/bilder/bild4.webp', alt: 'Fashion model 4' },
  ];

  const mainImage: ImageConfig = {
    src: '/bilder/hauptbild.webp',
    alt: 'Main fashion model',
  };

  return (
    <section className="w-[110%] -ml-[5%] max-w-7xl mx-auto px-4 pt-2">
      {/* Header Section */}
      <div className="flex items-center justify-between mb-4 px-8">
        <span className="text-yellow-400 animate-pulse">⭐</span>
        <span className="text-red-500 animate-pulse">🌺</span>
      </div>

      {/* Main Title */}
      <h2 className="text-4xl font-bold text-center mb-8 px-16 animate-fade-in">
        Make Your Fashion Look<br />
        More Charming
      </h2>

      {/* Image Grid */}
      <div className="grid grid-cols-3 gap-2">
        {/* Left Column */}
        <div className="space-y-2">
          <div className="bg-orange-100 rounded-lg p-2 aspect-square relative hover:scale-105 transition-transform duration-300">
            <Image 
              src={sideImages[0].src}
              alt={sideImages[0].alt}
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <div className="bg-orange-100 rounded-lg p-2 aspect-square relative hover:scale-105 transition-transform duration-300">
            <Image 
              src={sideImages[1].src}
              alt={sideImages[1].alt}
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>

        {/* Middle Column - Main Image */}
        <div className="-mx-4">
          <div className="bg-yellow-100 rounded-lg p-2 relative hover:scale-105 transition-transform duration-300" 
            style={{ 
              aspectRatio: '689/1200',
              minHeight: 'calc(100% + 1rem)'
            }}>
            <Image 
              src={mainImage.src}
              alt={mainImage.alt}
              fill
              priority
              className="object-cover rounded-lg"
            />
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-2 -ml-4">
          <div className="bg-purple-100 rounded-lg p-2 aspect-square relative hover:scale-105 transition-transform duration-300">
            <Image 
              src={sideImages[2].src}
              alt={sideImages[2].alt}
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <div className="bg-blue-100 rounded-lg p-2 aspect-square relative hover:scale-105 transition-transform duration-300">
            <Image 
              src={sideImages[3].src}
              alt={sideImages[3].alt}
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="text-right mt-2">
        <span className="text-gray-500">#2022</span>
      </div>
    </section>
  );
};

export default FashionHero;

