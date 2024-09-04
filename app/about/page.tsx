import React from 'react';

function AboutPage() {
  return (
    <div className="min-h-screen bg-cream-100 text-gray-900 p-6" lang="de">
      <header>
        <h1 className="text-3xl font-bold mb-6 text-center">
          Über uns - Das Team von est1773
        </h1>
      </header>

      <main id="main-content" tabIndex={-1} role="main">
        <section aria-labelledby="subtitle">
          <h2 id="subtitle" className="text-xl font-semibold mb-4 text-center">
            Gemeinsam für nachhaltige Mode
          </h2>

          <div className="space-y-4 max-w-2xl mx-auto">
            <p>
              Wir sind ein Team aus jungen und erfahrenen Menschen. Was uns eint, ist die Faszination für eine grundlegende Idee: die Überzeugung, dass nachhaltige Mode ein wichtiger Baustein für eine bessere Zukunft ist.
            </p>

            <p>
              Was uns manchmal trennt, sind unterschiedliche Geschmäcker und Meinungen darüber, welcher der richtige Weg für unser Projekt ist. Doch wir reden miteinander, hören zu und akzeptieren, wenn jemand mehr Expertise in einem bestimmten Bereich hat.
            </p>

            <p>
              Am Ende emotionaler Diskussionen steht bei uns immer der gegenseitige Respekt.
            </p>

            <p className="font-semibold text-center">
              Wir sind das Team von est1773, und gemeinsam arbeiten wir engagiert an diesem Projekt.
            </p>
          </div>
        </section>

        <nav className="mt-8 text-center" aria-label="Weiterführende Links">
          <a
            href="/shop"
            className="bg-green-700 text-white py-2 px-6 rounded-full hover:bg-green-800 transition duration-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
            aria-label="Entdecken Sie unseren Shop"
          >
            Unseren Shop entdecken
          </a>
        </nav>
      </main>
    </div>
  );
}

export default AboutPage;
