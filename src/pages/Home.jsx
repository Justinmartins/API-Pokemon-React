import React from 'react';
import { SearchBar } from '../components/SearchBar';
import { Gamepad } from 'lucide-react';

export function Home() {
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
      <SearchBar />
    </div>
  );
}