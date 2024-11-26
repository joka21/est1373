// app/components/Slider.tsx
'use client';
import { useState, useRef, useEffect } from 'react';

interface SlideContent {
  title: string;
  description: string;
  bgColor: string;
}

const slides: SlideContent[] = [
  {
    title: "Handgefertigte Unikate",
    description: "Einzigartige Stücke aus nachhaltiger Produktion",
    bgColor: "bg-deepTeal"
  },
  {
    title: "Bio-Baumwolle",
    description: "Regional angebaut, fair gehandelt",
    bgColor: "bg-seaGreen"
  },
  {
    title: "Zero Waste",
    description: "Nachhaltige Produktionsprozesse",
    bgColor: "bg-chartreuse"
  },
  {
    title: "Thüringer Tradition",
    description: "Seit 1373 in Handarbeit",
    bgColor: "bg-coral"
  },
  {
    title: "Faire Arbeitsbedingungen",
    description: "Soziale Verantwortung in der Produktion",
    bgColor: "bg-tangerine"
  },
  {
    title: "Lokale Partnerschaften",
    description: "Zusammenarbeit mit regionalen Herstellern",
    bgColor: "bg-deepTeal"
  },
  {
    title: "Recycling-Initiative",
    description: "Aus Alt mach Neu - Kreislaufwirtschaft",
    bgColor: "bg-seaGreen"
  },
  {
    title: "Qualität & Langlebigkeit",
    description: "Nachhaltig durch Beständigkeit",
    bgColor: "bg-chartreuse"
  }
];

export default function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideRef = useRef<HTMLDivElement>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const slidesPerView = 4; // Define the number of slides per view

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative max-w-[90rem] mx-auto overflow-hidden py-6 md:py-12">
      <div className="hidden md:block absolute left-4 top-1/2 z-10">
        <button 
          onClick={prevSlide}
          className="bg-white/10 hover:bg-white/20 text-white p-3 rounded-full"
        >
          ←
        </button>
      </div>
      <div className="hidden md:block absolute right-4 top-1/2 z-10">
        <button 
          onClick={nextSlide}
          className="bg-white/10 hover:bg-white/20 text-white p-3 rounded-full"
        >
          →
        </button>
      </div>
      
      <div 
        ref={slideRef}
        className="flex transition-transform duration-500 ease-out"
        style={{ transform: `translateX(-${currentIndex * (100/slidesPerView)}%)` }}
        onTransitionEnd={() => setIsAnimating(false)}
      >
        {[...slides, ...slides].map((slide, index) => (
          <div
            key={index}
            className={`flex-none w-full md:w-1/4 px-2`}
          >
            <div className={`${slide.bgColor} p-6 md:p-8 h-64 md:h-80 flex flex-col justify-between transition-all duration-300 hover:scale-[1.02] rounded-[5%]`}>
              <h3 className="text-xl md:text-2xl text-white font-light">{slide.title}</h3>
              <p className="text-sm md:text-base text-white/90">{slide.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}