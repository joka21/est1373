import React from 'react';
import FashionHero from '@/components/FashionHero';
function Page() {
  return (
    <div className="min-h-screen bg-cream-100 text-gray-900 p-6" lang="de">
      <header>
        <h1 className="text-3xl font-bold mb-6 text-center">
        <FashionHero />
        </h1>
      </header>

      <main id="main-content" tabIndex={-1} role="main">
     

        <nav className="mt-8 text-center" aria-label="Hauptnavigation">
          <a 
            href="/shop" 
            className="bg-green-700 text-white py-2 px-6 rounded-full hover:bg-green-800 transition duration-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
            aria-label="Jetzt unseren Shop entdecken"
          >
            Jetzt entdecken
          </a>
        </nav>
      </main>
    </div>
  );
}

export default Page;

