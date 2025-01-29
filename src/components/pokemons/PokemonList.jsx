import React from 'react';
import { Pokemon } from './Pokemon';

export function PokemonList({ pokemons }) {
  if (pokemons.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-white text-lg shadow-text">Aucun Pokémon trouvé</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
      {pokemons.map((pokemon) => (
        <Pokemon key={pokemon.id} pokemon={pokemon} />
      ))}
    </div>
  );
}