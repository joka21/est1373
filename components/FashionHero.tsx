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
    <section className="w-full max-w-6xl mx-auto px-4">
      {/* Header Section */}
      <div className="flex items-center justify-center gap-64 mb-4">
        <span className="text-yellow-400 animate-pulse">⭐</span>
        <span className="text-red-500 animate-pulse">🌺</span>
      </div>

      {/* Main Title */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold inline-block">
          Make Your Fashion Look<br />
          More Charming
        </h2>
      </div>

      {/* Image Grid - Centered Layout */}
      <div className="relative w-full max-w-4xl mx-auto">
        {/* Left Images */}
        <div className="absolute left-0 top-0 space-y-4 z-10">
          <div className="w-72 h-72 relative rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300">
            <Image 
              src={sideImages[0].src}
              alt={sideImages[0].alt}
              fill
              className="object-cover"
            />
          </div>
          <div className="w-72 h-72 relative rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300">
            <Image 
              src={sideImages[1].src}
              alt={sideImages[1].alt}
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Center Image */}
        <div className="mx-auto w-80 relative z-20" 
          style={{ 
            aspectRatio: '689/1200',
          }}>
          <Image 
            src={mainImage.src}
            alt={mainImage.alt}
            fill
            priority
            className="object-cover rounded-lg"
          />
        </div>

        {/* Right Images */}
        <div className="absolute right-0 top-0 space-y-4 z-10">
          <div className="w-72 h-72 relative rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300">
            <Image 
              src={sideImages[2].src}
              alt={sideImages[2].alt}
              fill
              className="object-cover"
            />
          </div>
          <div className="w-72 h-72 relative rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300">
            <Image 
              src={sideImages[3].src}
              alt={sideImages[3].alt}
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* Bottom Tag */}
      <div className="text-right mt-4">
        <span className="text-gray-500">#2022</span>
      </div>
    </section>
  );
};

export default FashionHero;