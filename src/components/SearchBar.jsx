import React, { useState } from 'react';
import { Input } from 'components/forms/Input'; 
export function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch(value); // transmet la valeur de recherche au comp parent
  };

  return (
    <div className="mb-8">
      <Input
        value={searchTerm}
        placeholder="Rechercher un Pokémon..."
        onChange={handleSearch}
      />
    </div>
  );
}