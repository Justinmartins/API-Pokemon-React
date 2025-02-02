import React, { useState, useMemo } from 'react';
import { Input } from '../components/forms/Input';
import { TypeFilter } from '../components/TypeFilter';
import { PokemonList } from '../components/pokemons/PokemonList';
import { LoadingSpinner } from '../components/LoadingSpinner';
import { usePokemons } from '../hooks/usePokemons';

export function SearchBar() {
  const [searchValue, setSearchValue] = useState("");
  const [selectedTypes, setSelectedTypes] = useState([]);
  const { pokemons, isLoading, error } = usePokemons(); // Utilisation du hook modifié

  const filteredPokemons = useMemo(() => {
    return pokemons.filter((pokemon) => {
      const matchesSearch = pokemon.name.toLowerCase().includes(searchValue.toLowerCase());
      const matchesTypes =
        selectedTypes.length === 0 ||
        selectedTypes.every(selectedType =>
          pokemon.apiTypes.some(pokemonType => pokemonType.name === selectedType)
        );
      return matchesSearch && matchesTypes;
    });
  }, [searchValue, selectedTypes, pokemons]);

  const handleTypeChange = (type) => {
    setSelectedTypes((prev) =>
      prev.includes(type)
        ? prev.filter((t) => t !== type)
        : [...prev, type]
    );
  };

  if (isLoading) return <LoadingSpinner />; // Changement de `loading` en `isLoading`
  if (error) return <div className="text-center text-white p-4 shadow-text">{error}</div>;

  return (
    <div className="space-y-8">
      <div className="max-w-xl mx-auto transform hover:scale-[1.02] transition-all duration-300">
        <Input
          value={searchValue}
          placeholder="Rechercher un Pokémon..."
          onChange={setSearchValue}
        />
      </div>
      
      <TypeFilter
        selectedTypes={selectedTypes}
        onTypeChange={handleTypeChange}
      />
      
      <PokemonList pokemons={filteredPokemons} />
    </div>
  );
}
