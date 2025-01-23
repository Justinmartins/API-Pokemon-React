import React from 'react';
import { Pokemon } from './Pokemon';

export function PokemonList({ pokemons }) {
  if (pokemons.length === 0) {
    return <p>Aucun Pokémon trouvé</p>;
  }

  return (
    <div>
      {pokemons.map((pokemon) => (
        <Pokemon key={pokemon.id} pokemon={pokemon} />
      ))}
    </div>
  );
}