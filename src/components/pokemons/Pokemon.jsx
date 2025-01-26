import React from 'react';
import { Link } from 'react-router-dom';

export function Pokemon({ pokemon }) {
  return (
    <Link to={`/pokemon/${pokemon.id}`} className="block transform hover:scale-105 transition-transform duration-300">
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl">
        <div className="relative p-4 bg-gradient-to-br from-gray-100 to-gray-200">
          <img
            src={pokemon.image}
            alt={pokemon.name}
            className="w-40 h-40 mx-auto object-contain transform hover:scale-110 transition-transform duration-300"
          />
        </div>
        <div className="p-4">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-xl font-bold text-gray-900">{pokemon.name}</h2>
            <span className="text-sm font-semibold text-gray-500">#{String(pokemon.pokedexId).padStart(3, '0')}</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {pokemon.apiTypes.map((type, index) => (
              <span
                key={index}
                className="px-3 py-1 text-sm font-semibold text-white rounded-full shadow-md"
                style={{ backgroundColor: getTypeColor(type.name) }}
              >
                {type.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}

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
    Fée: '#EE99AC',
  };
  return colors[type] || '#777777';
}