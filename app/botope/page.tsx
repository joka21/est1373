import React from 'react';

const Section: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <div className="mb-8">
    <h2 className="text-2xl font-bold mb-2">{title}</h2>
    <div className="text-gray-700">{children}</div>
  </div>
);

const Botope: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-5xl font-bold mb-6">Die Geschichte von Botope</h1>
      
      <div className="mb-8">
        <p className="text-xl text-gray-800">
          Botope ist ein einzigartiges Wesen auf einer besonderen Reise. Lsst uns seine Geschichte entdecken!
        </p>
      </div>
      
      <Section title="Wer ist Botope?">
        <p>Botope ist ein faszinierendes Mischwesen - ein bisschen Frosch, ein bisschen Ameise und ein bisschen etwas ganz Eigenes. Durch seine einzigartige Natur gehört er nirgendwo wirklich dazu und hat keine Artgenossen.</p>
      </Section>
      
      <Section title="Botopes Suche">
        <p>Botope beobachtet oft, wie andere Tiere mit ihren Artgenossen spielen und Zeit verbringen. Er sehnt sich danach, auch solche Beziehungen zu haben. So macht er sich auf die Suche nach seinen eigenen Artgenossen, nicht ahnend, dass es sie gar nicht gibt.</p>
      </Section>
      
      <Section title="Begegnungen auf der Reise">
        <p>Auf seiner Reise trifft Botope viele verschiedene Charaktere - Tiere und andere Wesen. Obwohl er bei ihnen keine Zugehörigkeit findet, hilft er ihnen bei ihren Problemen. Durch diese Hilfe werden wichtige Themen der Nachhaltigkeit angesprochen und Möglichkeiten aufgezeigt, wie jeder zum Schutz der Umwelt und einem besseren sozialen Miteinander beitragen kann.</p>
      </Section>
      
      <Section title="Eine unerwartete Entdeckung">
        <p>Am Ende seiner Reise stellt Botope fest, dass es gar nicht schlimm ist, keine eigene Art gefunden zu haben. Die Tiere und Wesen um ihn herum haben ihn liebgewonnen und bilden mit ihm gemeinsam eine vielfältige Gemeinschaft.</p>
      </Section>
      
      <Section title="Botopes Erkenntnis">
        <ul className="list-disc pl-5">
          <li>Er lernt, dass er wie die Natur selbst eine Mischung aus vielen Elementen ist, die nur zusammen funktionieren.</li>
          <li>Botope verkörpert Themen wie Vielfalt, ökologische Balance und Gemeinschaft durch Akzeptanz trotz Unterschieden.</li>
          <li>In der Geschichte ist Botope das verbindende Element zwischen den verschiedenen Tier- und Wesensgruppen.</li>
        </ul>
      </Section>
      
      <div className="mt-8 p-4 bg-green-100 rounded-lg">
        <p className="text-green-800 font-semibold">
          Botopes Geschichte lehrt uns, dass jeder von uns einzigartig ist und dennoch einen wichtigen Platz in der Gemeinschaft hat. Sie ermutigt uns, füreinander da zu sein und gemeinsam für eine nachhaltige und vielfältige Welt einzustehen.
        </p>
      </div>
    </div>
  );
};

export default Botope;