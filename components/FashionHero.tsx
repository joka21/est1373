import React from 'react';
import Image from 'next/image';

type ImageConfig = {
  src: string;
  mobileSrc: string;
  alt: string;
};

const FashionHero: React.FC = () => {
  const sideImages: ImageConfig[] = [
    { src: '/bilder/bild1.webp', mobileSrc: '/bilder/bild1.webp', alt: 'Fashion model 1' },
    { src: '/bilder/bild2.webp', mobileSrc: '/bilder/bild2.webp', alt: 'Fashion model 2' },
    { src: '/bilder/bild3.webp', mobileSrc: '/bilder/bild3.webp', alt: 'Fashion model 3' },
    { src: '/bilder/bild4.webp', mobileSrc: '/bilder/bild4.webp', alt: 'Fashion model 4' },
  ];

  const mainImage: ImageConfig = {
    src: '/bilder/hauptbild.webp',
    mobileSrc: '/bilder/MobilHauptbild.webp',
    alt: 'Main fashion model',
  };

  return (
    <div className="w-full flex flex-col items-center pt-4">
      <div className="mb-6 text-center relative w-full">
        <span className="absolute left-1/2 -translate-x-16 text-yellow-400">⭐</span>
        <span className="absolute right-1/2 translate-x-16 text-rose-400">🌺</span>
        <h2 className="text-4xl font-bold mx-auto">
          Make Your Fashion Look<br />
          More Charming
        </h2>
      </div>

      <div className="flex justify-center items-start mx-auto w-full">
        {/* Desktop Images - Lazy loaded */}
        <div className="hidden md:flex flex-col">
          {[0, 1].map((index) => (
            <div key={index} className="w-[400px] h-[300px] relative">
              <Image 
                src={sideImages[index].src}
                alt={sideImages[index].alt}
                width={400}
                height={300}
                className="object-cover"
                loading="lazy"
                quality={75}
                sizes="400px"
              />
            </div>
          ))}
        </div>

        {/* Main Image - Priority loaded */}
        <div className="w-full md:w-[500px] relative">
          {/* Mobile Image */}
          <div className="block md:hidden w-full h-[600px] relative">
            <Image 
              src={mainImage.mobileSrc}
              alt={mainImage.alt}
              width={640}
              height={960}
              priority
              className="object-cover"
              quality={85}
              sizes="100vw"
            />
          </div>
          
          {/* Desktop Image */}
          <div className="hidden md:block h-[800px] relative">
            <Image 
              src={mainImage.src}
              alt={mainImage.alt}
              width={500}
              height={800}
              priority
              className="object-cover"
              quality={85}
              sizes="500px"
            />
          </div>
        </div>

        {/* Desktop Images - Lazy loaded */}
        <div className="hidden md:flex flex-col">
          {[2, 3].map((index) => (
            <div key={index} className="w-[400px] h-[300px] relative">
              <Image 
                src={sideImages[index].src}
                alt={sideImages[index].alt}
                width={400}
                height={300}
                className="object-cover"
                loading="lazy"
                quality={75}
                sizes="400px"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="self-end mt-2 mr-4">
        <span className="text-gray-500">#2022</span>
      </div>
    </div>
  );
};

export default FashionHero;