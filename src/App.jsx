import React, { useState } from 'react';
import { PokemonList } from './components/pokemons/PokemonList';
import { Input } from './components/forms/Input';
import { POKEMONS } from './data/pokemons';

function App() {
  const [searchValue, setSearchValue] = useState('');

  const filteredPokemons = POKEMONS.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Pokédex</h1>
      <Input
        value={searchValue}
        placeholder="Rechercher un Pokémon..."
        onChange={setSearchValue}
      />
      <PokemonList pokemons={filteredPokemons} />
    </div>
  );
}

export default App;