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
    <div className="w-full flex flex-col items-center pt-4">
      {/* Title Section with Icons */}
      <div className="mb-6 text-center relative w-full">
        <span className="absolute left-1/2 -translate-x-16 text-yellow-400">⭐</span>
        <span className="absolute right-1/2 translate-x-16 text-rose-400">🌺</span>
        <h2 className="text-4xl font-bold mx-auto">
          Make Your Fashion Look<br />
          More Charming
        </h2>
      </div>

      {/* Images Layout */}
      <div className="flex justify-center items-start mx-auto">
        {/* Left Column - Hidden on Mobile */}
        <div className="hidden md:flex flex-col">
          <div className="w-[400px] h-[300px] relative rounded-lg overflow-hidden">
            <Image 
              src={sideImages[0].src}
              alt={sideImages[0].alt}
              fill
              className="object-cover"
            />
          </div>
          <div className="w-[400px] h-[300px] relative rounded-lg overflow-hidden">
            <Image 
              src={sideImages[1].src}
              alt={sideImages[1].alt}
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Center Image - Responsive Size */}
        <div className="w-[320px] md:w-[500px] relative" 
          style={{ 
            height: '500px',
            '@media (min-width: 768px)': {
              height: '800px'
            }
          }}>
          <Image 
            src={mainImage.src}
            alt={mainImage.alt}
            fill
            priority
            className="object-cover"
          />
        </div>

        {/* Right Column - Hidden on Mobile */}
        <div className="hidden md:flex flex-col">
          <div className="w-[400px] h-[300px] relative rounded-lg overflow-hidden">
            <Image 
              src={sideImages[2].src}
              alt={sideImages[2].alt}
              fill
              className="object-cover"
            />
          </div>
          <div className="w-[400px] h-[300px] relative rounded-lg overflow-hidden">
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
      <div className="self-end mt-2 mr-4">
        <span className="text-gray-500">#2022</span>
      </div>
    </div>
  );
};

export default FashionHero;