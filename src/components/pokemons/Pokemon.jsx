import React from 'react';

export function Pokemon({ pokemon }) {
  return (
    <div>
      <h2>{pokemon.name}</h2>
      <img src={pokemon.image} alt={pokemon.name} />
      <p>Type(s): {pokemon.apiTypes.map((type) => type.name).join(', ')}</p>
    </div>
  );
}