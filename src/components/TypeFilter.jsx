import React from 'react';

const POKEMON_TYPES = [
  { name: "Normal", image: "https://static.wikia.nocookie.net/pokemongo/images/f/fb/Normal.png" },
  { name: "Combat", image: "https://static.wikia.nocookie.net/pokemongo/images/3/30/Fighting.png" },
  { name: "Vol", image: "https://static.wikia.nocookie.net/pokemongo/images/7/7f/Flying.png" },
  { name: "Poison", image: "https://static.wikia.nocookie.net/pokemongo/images/0/05/Poison.png" },
  { name: "Sol", image: "https://static.wikia.nocookie.net/pokemongo/images/8/8f/Ground.png" },
  { name: "Roche", image: "https://static.wikia.nocookie.net/pokemongo/images/0/0b/Rock.png" },
  { name: "Insecte", image: "https://static.wikia.nocookie.net/pokemongo/images/7/7d/Bug.png" },
  { name: "Spectre", image: "https://static.wikia.nocookie.net/pokemongo/images/a/ab/Ghost.png" },
  { name: "Acier", image: "https://static.wikia.nocookie.net/pokemongo/images/c/c9/Steel.png" },
  { name: "Feu", image: "https://static.wikia.nocookie.net/pokemongo/images/3/30/Fire.png" },
  { name: "Eau", image: "https://static.wikia.nocookie.net/pokemongo/images/9/9d/Water.png" },
  { name: "Plante", image: "https://static.wikia.nocookie.net/pokemongo/images/c/c5/Grass.png" },
  { name: "Électrik", image: "https://static.wikia.nocookie.net/pokemongo/images/2/2f/Electric.png" },
  { name: "Psy", image: "https://static.wikia.nocookie.net/pokemongo/images/2/21/Psychic.png" },
  { name: "Glace", image: "https://static.wikia.nocookie.net/pokemongo/images/7/77/Ice.png" },
  { name: "Dragon", image: "https://static.wikia.nocookie.net/pokemongo/images/c/c7/Dragon.png" },
  { name: "Ténèbres", image: "https://static.wikia.nocookie.net/pokemongo/images/0/0e/Dark.png" },
  { name: "Fée", image: "https://static.wikia.nocookie.net/pokemongo/images/4/43/Fairy.png" }
];

function getTypeColor(type) {
  const colors = {
    Normal: '#A8A878',
    Combat: '#C03028',
    Vol: '#A890F0',
    Poison: '#A040A0',
    Sol: '#E0C068',
    Roche: '#B8A038',
    Insecte: '#A8B820',
    Spectre: '#705898',
    Acier: '#B8B8D0',
    Feu: '#F08030',
    Eau: '#6890F0',
    Plante: '#78C850',
    Électrik: '#F8D030',
    Psy: '#F85888',
    Glace: '#98D8D8',
    Dragon: '#7038F8',
    Ténèbres: '#705848',
    Fée: '#EE99AC'
  };
  return colors[type] || '#777777';
}

export function TypeFilter({ selectedTypes, onTypeChange }) {
  return (
    <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-6 transform hover:scale-[1.02] transition-all duration-300">
      <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">Types</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
        {POKEMON_TYPES.map((type) => (
          <button
            key={type.name}
            onClick={() => onTypeChange(type.name)}
            className={`relative group flex items-center justify-center p-3 rounded-lg transition-all duration-300 hover:-translate-y-1 ${
              selectedTypes.includes(type.name) 
                ? 'ring-4 ring-offset-2 ring-white shadow-lg scale-105' 
                : 'hover:shadow-xl'
            }`}
            style={{
              backgroundColor: getTypeColor(type.name),
              transform: selectedTypes.includes(type.name) ? 'scale(1.05)' : 'scale(1)'
            }}
          >
            <div className="flex flex-col items-center gap-2">
              <img 
                src={type.image} 
                alt={type.name}
                className="w-8 h-8 object-contain filter drop-shadow-md"
              />
              <span className="text-white font-bold text-sm tracking-wide shadow-text">
                {type.name}
              </span>
            </div>
            {selectedTypes.includes(type.name) && (
              <div className="absolute -top-2 -right-2 bg-white rounded-full p-1 shadow-lg">
                <span className="text-xs">✓</span>
              </div>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}