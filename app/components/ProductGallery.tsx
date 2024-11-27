// app/products/components/ProductGallery.tsx
'use client';

import { useState } from 'react';
import Image from 'next/image';

interface GalleryProps {
  images: Array<{
    src: string;
    alt: string;
  }>;
}

export function ProductGallery({ images }: GalleryProps) {
  const [selectedImage, setSelectedImage] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);

  return (
    <div className="space-y-4">
      {/* Hauptbild */}
      <div 
        className="relative h-[500px] overflow-hidden rounded-lg cursor-zoom-in"
        onMouseEnter={() => setIsZoomed(true)}
        onMouseLeave={() => setIsZoomed(false)}
      >
        <Image
          src={images[selectedImage].src}
          alt={images[selectedImage].alt}
          fill
          className={`object-cover transition-transform duration-200 ${
            isZoomed ? 'scale-150' : 'scale-100'
          }`}
          sizes="(max-width: 768px) 100vw, 50vw"
          priority
        />
      </div>

      {/* Thumbnail-Galerie */}
      <div className="flex gap-2 overflow-x-auto pb-2">
        {images.map((image, index) => (
          <button
            key={index}
            className={`relative w-20 h-20 flex-shrink-0 rounded-md overflow-hidden ${
              selectedImage === index ? 'ring-2 ring-blue-500' : ''
            }`}
            onClick={() => setSelectedImage(index)}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover"
              sizes="80px"
            />
          </button>
        ))}
      </div>
    </div>
  );
}