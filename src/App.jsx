import React, { useState } from 'react';
import { PokemonList } from './components/pokemons/PokemonList';
import { Input } from './components/forms/Input';
import { TypeFilter } from './components/TypeFilter';
import { usePokemons } from './hooks/usePokemons';
import { LoadingSpinner } from './components/LoadingSpinner';

function App() {
  const [searchValue, setSearchValue] = useState('');
  const [selectedTypes, setSelectedTypes] = useState([]);
  const { pokemons, loading, error } = usePokemons();

  const filteredPokemons = pokemons.filter((pokemon) => {
    const matchesSearch = pokemon.name.toLowerCase().includes(searchValue.toLowerCase());
    const matchesTypes =
      selectedTypes.length === 0 ||
      selectedTypes.every((type) =>
        pokemon.apiTypes.some((pokemonType) => pokemonType.name === type)
      );
    return matchesSearch && matchesTypes;
  });

  const handleTypeChange = (type) => {
    setSelectedTypes((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    );
  };

  if (loading) return <LoadingSpinner />;
  if (error) return <div className="text-center text-white p-4">{error}</div>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Pokédex</h1>
      <Input
        value={searchValue}
        placeholder="Rechercher un Pokémon..."
        onChange={setSearchValue}
      />
      <TypeFilter selectedTypes={selectedTypes} onTypeChange={handleTypeChange} />
      <PokemonList pokemons={filteredPokemons} />
    </div>
  );
}

export default App;