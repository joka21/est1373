// app/components/Hero.tsx
import Image from 'next/image';

export default function Hero() {
  return (
    <div className="relative h-[85vh] md:h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        <Image 
          src="/hero.webp" 
          alt="Hero background" 
          fill
          quality={100}
          sizes="100vw"
          className="object-cover object-center md:object-[center_0%]"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>
      
      <div className="relative h-full max-w-[90rem] mx-auto px-4 flex flex-col justify-center">
        <h1 className="text-sm md:text-xl font-light text-white uppercase tracking-wider">
          Mode und Nachhaltigkeit: freitag, 1. oktober 1373 – am niederrhein wird eine neue stadt gegründet: krefeld
        </h1>
        <h2 className="pt-4 md:pt-8 text-4xl md:text-[8rem] leading-none font-light text-white">
        Wo frische Ideen
          <br />
          auf bewusstes Design treffen
        </h2>
      </div>
    </div>
  );
}