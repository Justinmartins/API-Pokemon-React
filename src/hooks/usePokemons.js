import { useState, useEffect } from 'react';

export function usePokemons() {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        const response = await fetch('https://pokebuildapi.fr/api/v1/pokemon');
        const data = await response.json();
        setPokemons(data);
        setLoading(false);
      } catch (err) {
        setError("il y a eu une erreur lors du chargement des Pokémon");
        setLoading(false);
      }
    };

    fetchPokemons();
  }, []);

  return { pokemons, loading, error };
}