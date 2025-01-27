import React, { useState } from 'react';
import { SearchBar } from '../components/SearchBar.jsx';
import { Gamepad } from 'lucide-react';
import { PokemonList } from '../components/PokemonList';
import { usePokemons } from '../hooks/usePokemons';

export function Home() {
  const { pokemons, loading, error } = usePokemons();
  const [searchTerm, setSearchTerm] = useState('');

  // filtrer les Pokémon en fonction du terme de recherche
  const filteredPokemons = pokemons.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // gestion de la recherche
  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  if (loading) return <div>Chargement en cours...</div>;
  if (error) return <div>Erreur : {error}</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 flex items-center justify-center shadow-text">
          <Gamepad className="w-10 h-10 mr-3 hover-bounce" />
          Mon Pokédex
        </h1>
        <p className="text-white text-lg opacity-90 shadow-text">
          Venez découvrir tous les Pokémons et leurs caractéristiques !
        </p>
      </div>
      <SearchBar onSearch={handleSearch} />
      <PokemonList pokemons={filteredPokemons} />
    </div>
  );
}