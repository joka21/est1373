import React from 'react'

function Page() {
  return (
    <div className="min-h-screen bg-cream-100 text-gray-900 p-6" lang="de">
      <header>
        <h1 className="text-3xl font-bold mb-6 text-center">
          Herzlich willkommen bei est1373.de
        </h1>
      </header>
      
      <main>
        <section aria-labelledby="subtitle">
          <h2 id="subtitle" className="text-xl font-semibold mb-4 text-center">
            Wo Krefelder Tradition auf nachhaltige Mode trifft
          </h2>
          
          <div className="space-y-4 max-w-2xl mx-auto">
            <p tabIndex={0}>
              In einer Stadt mit einer langen Geschichte als &quot;Samt- und Seidenstadt&quot; entsteht eine neue Verbindung zwischen Vergangenheit und Zukunft. est1373.de ist nicht nur ein Marktplatz, sondern eine Plattform, die Krefelds textiles Erbe mit moderner, nachhaltiger Mode vereint.
            </p>
            
            <p tabIndex={0}>
              Unser Name, inspiriert vom Gründungsjahr Krefelds 1373, erinnert an die jahrhundertealte Tradition, die wir in die heutige Modewelt bringen. Bei uns finden Sie eine sorgfältige Auswahl an Kollektionen von bekannten Marken und jungen Designern, die alle Wert auf Qualität, Nachhaltigkeit und zeitlose Eleganz legen.
            </p>
            
            <p tabIndex={0}>
              Wir bieten nicht nur einzigartige, umweltbewusste Mode, sondern auch eine Gemeinschaft für alle, die die Geschichte hinter ihren Kleidungsstücken schätzen. Ob lokale Talente oder kreative Upcycling-Ideen – jedes Stück erzählt eine Geschichte von Handwerkskunst und Verantwortung.
            </p>
            
            <p tabIndex={0}>
              Entdecken Sie bei uns die Zukunft der Mode, die fest in der reichen Vergangenheit Krefelds verwurzelt ist. est1373.de – wo Tradition auf Innovation trifft und jeder Kauf ein Schritt in Richtung einer nachhaltigeren Zukunft ist.
            </p>
            
            <p className="font-semibold text-center" tabIndex={0}>
              Seien Sie Teil unserer Geschichte. Shoppen Sie bewusst. Leben Sie nachhaltig. Tragen Sie ein Stück Krefeld.
            </p>
          </div>
        </section>
        
        <nav className="mt-8 text-center" aria-label="Hauptnavigation">
          <a 
            href="/shop" 
            className="bg-green-700 text-white py-2 px-6 rounded-full hover:bg-green-800 transition duration-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
          >
            Jetzt entdecken
          </a>
        </nav>
      </main>
    </div>
  )
}

export default Page