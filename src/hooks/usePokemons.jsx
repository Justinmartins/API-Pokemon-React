import { useQuery } from '@tanstack/react-query';

export function usePokemons() {
  const { data: pokemons = [], error, isLoading} = useQuery({
    queryKey: ['pokemons'],
    queryFn: async () => {
      const response = await fetch('https://pokebuildapi.fr/api/v1/pokemon');
      if (!response.ok) {
        throw new Error("il y a eu une erreur lors du chargement des Pokémon");
      }
      return response.json();
    },
  });
  return { pokemons, isLoading, error };
}
