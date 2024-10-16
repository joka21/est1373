'use client';

import React, { useState } from 'react';

const botopeMeetings = [
  { id: 1, character: "Frosch", lesson: "Anpassungsfähigkeit", story: "Botope lernt vom Frosch, sich verschiedenen Umgebungen anzupassen." },
  { id: 2, character: "Ameise", lesson: "Gemeinschaftssinn", story: "Die Ameisen zeigen Botope die Stärke der Zusammenarbeit." },
  { id: 3, character: "Eule", lesson: "Weisheit", story: "Die Eule lehrt Botope, dass Wissen und Verständnis wertvoll sind." },
  { id: 4, character: "Schmetterling", lesson: "Verwandlung", story: "Botope erfährt, dass Veränderung ein natürlicher Teil des Lebens ist." },
  { id: 5, character: "Biber", lesson: "Umweltgestaltung", story: "Der Biber zeigt, wie man die Umwelt positiv gestalten kann." },
  { id: 6, character: "Kolibri", lesson: "Effizienz", story: "Botope lernt vom Kolibri, Ressourcen effizient zu nutzen." },
  { id: 7, character: "Chamäleon", lesson: "Anpassung", story: "Das Chamäleon lehrt Botope, sich anzupassen, ohne sich selbst zu verlieren." },
  { id: 8, character: "Delfin", lesson: "Kommunikation", story: "Botope entdeckt die Bedeutung klarer Kommunikation." },
];

const BotopePage: React.FC = () => {
  const [sortBy, setSortBy] = useState<'character' | 'lesson'>('character');

  const sortedMeetings = [...botopeMeetings].sort((a, b) => {
    return a[sortBy].localeCompare(b[sortBy]);
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Botopes Abenteuer</h1>
      
      <div className="mb-8 text-center">
        <p className="text-xl">
          Botope ist ein einzigartiges Mischwesen - ein bisschen Frosch, ein bisschen Ameise und etwas ganz Eigenes.
          Auf seiner Reise trfft er verschiedene Charaktere und lernt wichtige Lektionen über Nachhaltigkeit und Gemeinschaft.
        </p>
      </div>
      
      <div className="mb-6">
        <select 
          className="border border-gray-300 rounded-md p-2"
          onChange={(e) => setSortBy(e.target.value as 'character' | 'lesson')}
          value={sortBy}
        >
          <option value="character">Nach Charakter sortieren</option>
          <option value="lesson">Nach Lektion sortieren</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sortedMeetings.map((meeting) => (
          <div key={meeting.id} className="border rounded-lg p-4 flex flex-col bg-green-50">
            <h2 className="text-xl font-semibold mb-2">{meeting.character}</h2>
            <p className="text-sm text-green-600 mb-2">Lektion: {meeting.lesson}</p>
            <p className="text-sm mb-4 flex-grow">{meeting.story}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 p-4 bg-green-100 rounded-lg text-center">
        <p className="text-green-800 font-semibold">
          Botopes Reise lehrt uns, dass jeder von uns einzigartig ist und dennoch einen wichtigen Platz in der Gemeinschaft hat.
          Seine Geschichte ermutigt uns, füreinander da zu sein und gemeinsam für eine nachhaltige und vielfältige Welt einzustehen.
        </p>
      </div>
    </div>
  );
};

export default BotopePage;