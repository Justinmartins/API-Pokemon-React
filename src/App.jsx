import { useState } from 'react'
import { Input } from './components/forms/Input'
import { CheckBox } from './components/forms/CheckBox'
import { Pokemon } from './components/pokemons/Pokemon'

//https://pokebuildapi.fr/api/v1
const POKEMONS = [

  {
    "id": 1,
    "pokedexId": 1,
    "name": "Bulbizarre",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
    "slug": "Bulbizarre",
    "stats": {
      "HP": 45,
      "attack": 49,
      "defense": 49,
      "special_attack": 65,
      "special_defense": 65,
      "speed": 45
    },
    "apiTypes": [
      {
        "name": "Poison",
        "image": "https://static.wikia.nocookie.net/pokemongo/images/0/05/Poison.png"
      },
      {
        "name": "Plante",
        "image": "https://static.wikia.nocookie.net/pokemongo/images/c/c5/Grass.png"
      }
    ],
    "apiGeneration": 1,
    "apiResistances": [
      {
        "name": "Normal",
        "damage_multiplier": 1,
        "damage_relation": "neutral"
      },
      {
        "name": "Combat",
        "damage_multiplier": 0.5,
        "damage_relation": "resistant"
      },
      {
        "name": "Vol",
        "damage_multiplier": 2,
        "damage_relation": "vulnerable"
      },
      {
        "name": "Poison",
        "damage_multiplier": 1,
        "damage_relation": "neutral"
      },
      {
        "name": "Sol",
        "damage_multiplier": 1,
        "damage_relation": "neutral"
      },
      {
        "name": "Roche",
        "damage_multiplier": 1,
        "damage_relation": "neutral"
      },
      {
        "name": "Insecte",
        "damage_multiplier": 1,
        "damage_relation": "neutral"
      },
      {
        "name": "Spectre",
        "damage_multiplier": 1,
        "damage_relation": "neutral"
      },
      {
        "name": "Acier",
        "damage_multiplier": 1,
        "damage_relation": "neutral"
      },
      {
        "name": "Feu",
        "damage_multiplier": 2,
        "damage_relation": "vulnerable"
      },
      {
        "name": "Eau",
        "damage_multiplier": 0.5,
        "damage_relation": "resistant"
      },
      {
        "name": "Plante",
        "damage_multiplier": 0.25,
        "damage_relation": "twice_resistant"
      },
      {
        "name": "Électrik",
        "damage_multiplier": 0.5,
        "damage_relation": "resistant"
      },
      {
        "name": "Psy",
        "damage_multiplier": 2,
        "damage_relation": "vulnerable"
      },
      {
        "name": "Glace",
        "damage_multiplier": 2,
        "damage_relation": "vulnerable"
      },
      {
        "name": "Dragon",
        "damage_multiplier": 1,
        "damage_relation": "neutral"
      },
      {
        "name": "Ténèbres",
        "damage_multiplier": 1,
        "damage_relation": "neutral"
      },
      {
        "name": "Fée",
        "damage_multiplier": 0.5,
        "damage_relation": "resistant"
      }
    ],
    "resistanceModifyingAbilitiesForApi": [],
    "apiEvolutions": [
      {
        "name": "Herbizarre",
        "pokedexId": 2
      }
    ],
    "apiPreEvolution": "none",
    "apiResistancesWithAbilities": []
  },
  {
    "id": 2,
    "pokedexId": 2,
    "name": "Herbizarre",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
    "slug": "Herbizarre",
    "stats": {
      "HP": 60,
      "attack": 62,
      "defense": 63,
      "special_attack": 80,
      "special_defense": 80,
      "speed": 60
    },
    "apiTypes": [
      {
        "name": "Poison",
        "image": "https://static.wikia.nocookie.net/pokemongo/images/0/05/Poison.png"
      },
      {
        "name": "Plante",
        "image": "https://static.wikia.nocookie.net/pokemongo/images/c/c5/Grass.png"
      }
    ],
    "apiGeneration": 1,
    "apiResistances": [
      {
        "name": "Normal",
        "damage_multiplier": 1,
        "damage_relation": "neutral"
      },
      {
        "name": "Combat",
        "damage_multiplier": 0.5,
        "damage_relation": "resistant"
      },
      {
        "name": "Vol",
        "damage_multiplier": 2,
        "damage_relation": "vulnerable"
      },
      {
        "name": "Poison",
        "damage_multiplier": 1,
        "damage_relation": "neutral"
      },
      {
        "name": "Sol",
        "damage_multiplier": 1,
        "damage_relation": "neutral"
      },
      {
        "name": "Roche",
        "damage_multiplier": 1,
        "damage_relation": "neutral"
      },
      {
        "name": "Insecte",
        "damage_multiplier": 1,
        "damage_relation": "neutral"
      },
      {
        "name": "Spectre",
        "damage_multiplier": 1,
        "damage_relation": "neutral"
      },
      {
        "name": "Acier",
        "damage_multiplier": 1,
        "damage_relation": "neutral"
      },
      {
        "name": "Feu",
        "damage_multiplier": 2,
        "damage_relation": "vulnerable"
      },
      {
        "name": "Eau",
        "damage_multiplier": 0.5,
        "damage_relation": "resistant"
      },
      {
        "name": "Plante",
        "damage_multiplier": 0.25,
        "damage_relation": "twice_resistant"
      },
      {
        "name": "Électrik",
        "damage_multiplier": 0.5,
        "damage_relation": "resistant"
      },
      {
        "name": "Psy",
        "damage_multiplier": 2,
        "damage_relation": "vulnerable"
      },
      {
        "name": "Glace",
        "damage_multiplier": 2,
        "damage_relation": "vulnerable"
      },
      {
        "name": "Dragon",
        "damage_multiplier": 1,
        "damage_relation": "neutral"
      },
      {
        "name": "Ténèbres",
        "damage_multiplier": 1,
        "damage_relation": "neutral"
      },
      {
        "name": "Fée",
        "damage_multiplier": 0.5,
        "damage_relation": "resistant"
      }
    ],
    "resistanceModifyingAbilitiesForApi": [],
    "apiEvolutions": [
      {
        "name": "Florizarre",
        "pokedexId": 3
      }
    ],
    "apiPreEvolution": {
      "name": "Bulbizarre",
      "pokedexIdd": 1
    },
    "apiResistancesWithAbilities": []
  }
]

const TYPES = [
  {
    "id": 37,
    "name": "Normal",
    "image": "https://static.wikia.nocookie.net/pokemongo/images/f/fb/Normal.png",
    "englishName": "normal"
  },
  {
    "id": 38,
    "name": "Combat",
    "image": "https://static.wikia.nocookie.net/pokemongo/images/3/30/Fighting.png",
    "englishName": "fighting"
  },
  {
    "id": 39,
    "name": "Vol",
    "image": "https://static.wikia.nocookie.net/pokemongo/images/7/7f/Flying.png",
    "englishName": "flying"
  },
  {
    "id": 40,
    "name": "Poison",
    "image": "https://static.wikia.nocookie.net/pokemongo/images/0/05/Poison.png",
    "englishName": "poison"
  },
  {
    "id": 41,
    "name": "Sol",
    "image": "https://static.wikia.nocookie.net/pokemongo/images/8/8f/Ground.png",
    "englishName": "ground"
  },
  {
    "id": 42,
    "name": "Roche",
    "image": "https://static.wikia.nocookie.net/pokemongo/images/0/0b/Rock.png",
    "englishName": "rock"
  },
  {
    "id": 43,
    "name": "Insecte",
    "image": "https://static.wikia.nocookie.net/pokemongo/images/7/7d/Bug.png",
    "englishName": "bug"
  },
  {
    "id": 44,
    "name": "Spectre",
    "image": "https://static.wikia.nocookie.net/pokemongo/images/a/ab/Ghost.png",
    "englishName": "ghost"
  },
  {
    "id": 45,
    "name": "Acier",
    "image": "https://static.wikia.nocookie.net/pokemongo/images/c/c9/Steel.png",
    "englishName": "steel"
  },
  {
    "id": 46,
    "name": "Feu",
    "image": "https://static.wikia.nocookie.net/pokemongo/images/3/30/Fire.png",
    "englishName": "fire"
  },
  {
    "id": 47,
    "name": "Eau",
    "image": "https://static.wikia.nocookie.net/pokemongo/images/9/9d/Water.png",
    "englishName": "water"
  },
  {
    "id": 48,
    "name": "Plante",
    "image": "https://static.wikia.nocookie.net/pokemongo/images/c/c5/Grass.png",
    "englishName": "grass"
  },
  {
    "id": 49,
    "name": "Électrik",
    "image": "https://static.wikia.nocookie.net/pokemongo/images/2/2f/Electric.png",
    "englishName": "electric"
  },
  {
    "id": 50,
    "name": "Psy",
    "image": "https://static.wikia.nocookie.net/pokemongo/images/2/21/Psychic.png",
    "englishName": "psychic"
  },
  {
    "id": 51,
    "name": "Glace",
    "image": "https://static.wikia.nocookie.net/pokemongo/images/7/77/Ice.png",
    "englishName": "ice"
  },
  {
    "id": 52,
    "name": "Dragon",
    "image": "https://static.wikia.nocookie.net/pokemongo/images/c/c7/Dragon.png",
    "englishName": "dragon"
  },
  {
    "id": 53,
    "name": "Ténèbres",
    "image": "https://static.wikia.nocookie.net/pokemongo/images/0/0e/Dark.png",
    "englishName": "dark"
  },
  {
    "id": 54,
    "name": "Fée",
    "image": "https://static.wikia.nocookie.net/pokemongo/images/4/43/Fairy.png",
    "englishName": "fairy"
  }
]

function App() {
  return (
    <>
      <h1>API Pokémon</h1>
      <SearchBar />
    </>
  );
}

function SearchBar() {
  const [searchValue, setSearchValue] = useState("");
  const [selectedTypes, setSelectedTypes] = useState([]);

  const handleTypeChange = (type) => {
    setSelectedTypes((prev) =>
      prev.includes(type)
        ? prev.filter((t) => t !== type)
        : [...prev, type]
    );
  };

  const filteredPokemons = POKEMONS.filter((pokemon) => {
    const matchesSearch = pokemon.name.toLowerCase().includes(searchValue.toLowerCase());
    const matchesTypes =
      selectedTypes.length === 0 ||
      pokemon.apiTypes.some((type) => selectedTypes.includes(type.name));
    return matchesSearch && matchesTypes;
  });

  return (
    <div>
      <Input
        value={searchValue}
        placeholder="Chercher un Pokémon"
        onChange={(value) => setSearchValue(value)}
      />
      <TypeFilter types={TYPES} selectedTypes={selectedTypes} onTypeChange={handleTypeChange} />
      <PokemonList pokemons={filteredPokemons} />
    </div>
  );
}

function TypeFilter({ types, selectedTypes, onTypeChange }) {
  return (
    <div>
      <h3>Filtrer par type :</h3>
      {types.map((type) => (
        <CheckBox
          key={type.id}
          checked={selectedTypes.includes(type.name)}
          onChange={() => onTypeChange(type.name)}
          label={type.name}
        />
      ))}
    </div>
  );
}

function PokemonList({ pokemons }) {
  if (pokemons.length === 0) {
    return <p>Aucun Pokémon trouvé</p>;
  }

  return (
    <div>
      {pokemons.map((pokemon) => (
        <Pokemon key={pokemon.id} pokemon={pokemon} />
      ))}
    </div>
  );
}

export default App;

