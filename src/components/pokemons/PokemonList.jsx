import React from 'react';
import { Pokemon } from './Pokemon';

export function PokemonList({ pokemons }) {
  if (pokemons.length === 0) {
    return <p className="text-white">Aucun Pokémon trouvé</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {pokemons.map((pokemon) => (
        <Pokemon key={pokemon.id} pokemon={pokemon} />
      ))}
    </div>
  );
}