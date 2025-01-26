import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { usePokemons } from '../hooks/usePokemons';
import { LoadingSpinner } from '../components/LoadingSpinner';

export function PokemonDetail() {
  const { id } = useParams();
  const { pokemons, loading, error } = usePokemons();

  if (loading) return <LoadingSpinner />;
  if (error) return <div className="text-center text-white p-4">{error}</div>;

  const pokemon = pokemons.find((p) => p.id === parseInt(id));

  if (!pokemon) {
    return (
      <div className="container mx-auto px-4 py-8 text-center text-white">
        Pokémon non trouvé
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Link to="/" className="inline-flex items-center text-white hover:text-gray-200 mb-6">
        <span className="mr-2">←</span> Retour à la liste
      </Link>
      <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
        <div className="relative p-8 bg-gradient-to-br from-gray-100 to-gray-200">
          <img
            src={pokemon.image}
            alt={pokemon.name}
            className="w-64 h-64 mx-auto object-contain"
          />
          <span className="absolute top-4 right-4 text-2xl font-bold text-gray-400">
            #{String(pokemon.pokedexId).padStart(3, '0')}
          </span>
        </div>
        <div className="p-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{pokemon.name}</h1>
          <div className="flex flex-wrap gap-2 mb-8">
            {pokemon.apiTypes.map((type, index) => (
              <span
                key={index}
                className="px-4 py-2 text-white font-semibold rounded-full"
                style={{ backgroundColor: getTypeColor(type.name) }}
              >
                {type.name}
              </span>
            ))}
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {Object.entries(pokemon.stats).map(([stat, value]) => (
              <div key={stat} className="bg-gray-50 rounded-xl p-4">
                <div className="flex items-center gap-2 text-gray-600 mb-2">
                  <span className="font-medium">{formatStatName(stat)}</span>
                </div>
                <div className="text-3xl font-bold text-gray-900">{value}</div>
                <div className="mt-2 bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-red-500 rounded-full h-2"
                    style={{ width: `${(value / 255) * 100}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
          {pokemon.apiEvolutions?.length > 0 && (
            <div className="mt-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Évolutions</h2>
              <div className="flex flex-wrap gap-4">
                {pokemon.apiEvolutions.map((evolution) => (
                  <div key={evolution.pokedexId} className="text-center">
                    <div className="text-lg font-medium text-gray-900">{evolution.name}</div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function formatStatName(stat) {
  const translations = {
    HP: 'PV',
    attack: 'Attaque',
    defense: 'Défense',
    special_attack: 'Attaque Spé.',
    special_defense: 'Défense Spé.',
    speed: 'Vitesse',
  };
  return translations[stat] || stat;
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