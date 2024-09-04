'use client';

import React, { useState } from 'react';

const ideas = [
  { id: 1, title: "Kleidertausch-Events", category: "Community", description: "Organisieren Sie regelmäßige Kleidertausch-Veranstaltungen, um die Wiederverwendung von Kleidung zu fördern." },
  { id: 2, title: "Reparatur-Workshops", category: "Bildung", description: "Bieten Sie Workshops an, in denen Kunden lernen, wie sie ihre Kleidung reparieren und pflegen können." },
  { id: 3, title: "Lokale Designerkooperationen", category: "Produktion", description: "Arbeiten Sie mit lokalen Designern zusammen, um exklusive, nachhaltige Kollektionen zu kreieren." },
  { id: 4, title: "Recycling-Programm", category: "Nachhaltigkeit", description: "Starten Sie ein Programm, bei dem Kunden alte Kleidung zurückgeben können, die dann recycelt wird." },
  { id: 5, title: "Virtuelle Anproben", category: "Technologie", description: "Implementieren Sie AR-Technologie für virtuelle Anproben, um unnötige Retouren zu reduzieren." },
  { id: 6, title: "Nachhaltigkeits-Blog", category: "Bildung", description: "Starten Sie einen Blog mit Tipps für nachhaltigen Modekonsum und Pflegeanleitungen für Kleidung." },
  { id: 7, title: "Carbon-Footprint-Anzeige", category: "Transparenz", description: "Zeigen Sie den CO2-Fußabdruck jedes Produkts an, um bewusste Kaufentscheidungen zu fördern." },
  { id: 8, title: "Miet-Service", category: "Geschäftsmodell", description: "Bieten Sie einen Service an, bei dem Kunden hochwertige, nachhaltige Mode für besondere Anlässe mieten können." },
];

const IdeasPage = () => {
  const [filter, setFilter] = useState('all');
  const [newIdea, setNewIdea] = useState({ title: '', category: '', description: '' });

  const filteredIdeas = filter === 'all' ? ideas : ideas.filter(idea => idea.category === filter);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Hier würde normalerweise die Logik zum Hinzufügen der neuen Idee stehen
    console.log("Neue Idee:", newIdea);
    setNewIdea({ title: '', category: '', description: '' });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Ideen für unser nachhaltiges Modeprojekt</h1>
      
      <div className="mb-6">
        <select 
          className="border border-gray-300 rounded-md p-2"
          onChange={(e) => setFilter(e.target.value)}
          value={filter}
        >
          <option value="all">Alle Kategorien</option>
          <option value="Community">Community</option>
          <option value="Bildung">Bildung</option>
          <option value="Produktion">Produktion</option>
          <option value="Nachhaltigkeit">Nachhaltigkeit</option>
          <option value="Technologie">Technologie</option>
          <option value="Transparenz">Transparenz</option>
          <option value="Geschäftsmodell">Geschäftsmodell</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredIdeas.map((idea) => (
          <div key={idea.id} className="border rounded-lg p-4 flex flex-col">
            <h2 className="text-xl font-semibold mb-2">{idea.title}</h2>
            <p className="text-sm text-gray-600 mb-2">{idea.category}</p>
            <p className="text-sm mb-4 flex-grow">{idea.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-4">Neue Idee hinzufügen</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Titel"
            className="w-full p-2 border rounded"
            value={newIdea.title}
            onChange={(e) => setNewIdea({...newIdea, title: e.target.value})}
            required
          />
          <input
            type="text"
            placeholder="Kategorie"
            className="w-full p-2 border rounded"
            value={newIdea.category}
            onChange={(e) => setNewIdea({...newIdea, category: e.target.value})}
            required
          />
          <textarea
            placeholder="Beschreibung"
            className="w-full p-2 border rounded"
            value={newIdea.description}
            onChange={(e) => setNewIdea({...newIdea, description: e.target.value})}
            required
          ></textarea>
          <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">Idee hinzufügen</button>
        </form>
      </div>
    </div>
  );
};

export default IdeasPage;