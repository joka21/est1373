'use client';

import React from 'react';

const BotopePage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8 bg-white text-black">
      <h1 className="text-4xl font-bold mb-6 text-center">Die Geschichte von Botope</h1>
      
      <div className="mb-8 text-center">
        <p className="text-xl">
          Botope ist ein einzigartiges Mischwesen - ein bisschen Frosch, ein bisschen Ameise und etwas ganz Eigenes.
          Folgen Sie seiner Reise der Selbstentdeckung und des Umweltbewusstseins.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Section title="Ein besonderes Wesen">
          Botope ist anders als alle anderen. Als Mischwesen aus Frosch, Ameise und etwas Undefinierbarem fühlt er sich nirgendwo richtig zugehörig. Diese Einzigartigkeit ist sowohl seine größte Stärke als auch seine größte Herausforderung.
        </Section>
        
        <Section title="Die Suche nach Zugehörigkeit">
          Getrieben von dem Wunsch, Artgenossen zu finden, macht sich Botope auf eine abenteuerliche Reise. Er beobachtet andere Tiere, die in Gemeinschaften leben, und hofft, irgendwo seine eigene Art zu entdecken.
        </Section>
        
        <Section title="Unerwartete Begegnungen">
          Auf seiner Reise trifft Botope verschiedene Tiere und Wesen. Obwohl er bei ihnen keine direkte Zugehörigkeit findet, lernt er von jedem etwas Wertvolles über sich selbst und die Welt um ihn herum.
        </Section>
        
        <Section title="Hilfsbereitschaft und Nachhaltigkeit">
          Bei jeder Begegnung hilft Botope den anderen bei ihren Problemen. Durch diese Interaktionen werden wichtige Themen der Nachhaltigkeit und des Umweltschutzes angesprochen. Botope lernt, wie jeder auf seine Weise zum Schutz der Natur beitragen kann.
        </Section>
        
        <Section title="Die Erkenntnis">
          Am Ende seiner Reise macht Botope eine wichtige Entdeckung: Es ist nicht schlimm, keine eigene Art zu haben. Die Vielfalt der Natur und die Verbindungen, die er geknüpft hat, machen ihn zu einem wertvollen Teil des großen Ganzen.
        </Section>
        
        <Section title="Eine neue Gemeinschaft">
          Botope erkennt, dass er wie die Natur selbst eine Mischung aus vielen Elementen ist. Er wird zum verbindenden Element zwischen verschiedenen Gruppen und findet so seine eigene, einzigartige Rolle in der Gemeinschaft.
        </Section>
      </div>
      
      <div className="mt-8 p-4 border border-gray-200 rounded-lg text-center">
        <p className="font-semibold">
          Botopes Story lehrt uns, dass jeder von uns einzigartig ist und dennoch einen wichtigen Platz in der Gemeinschaft hat.
          Sie ermutigt uns, füreinander da zu sein und gemeinsam für eine nachhaltige und vielfältige Welt einzustehen. los
        </p>
      </div>
    </div>
  );
};

const Section: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <div className="shadow-md rounded-lg p-4">
    <h2 className="text-2xl font-semibold mb-2">{title}</h2>
    <p>{children}</p>
  </div>
);

export default BotopePage;