import React from 'react';
import { PokemonList } from './components/pokemons/PokemonList';
import { POKEMONS } from './data/pokemons';

function App() {
  return (
    <div>
      <h1>Pokédex</h1>
      <PokemonList pokemons={POKEMONS} />
    </div>
  );
}

export default App;