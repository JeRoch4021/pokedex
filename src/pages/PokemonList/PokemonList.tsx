import { PokemonThumbnail } from "@/components/PokemonThumbnail/PokemonThumbnail";
import { Avatar } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { Search } from "lucide-react";
import  { useState } from "react";
import { useGetPokemonList } from "./useGetPokemonList";

// const pokemons = [
//   { name: "Bulbasaur", id: 1 },
//   { name: "Ivysaur", id: 2 },
//   { name: "Venusaur", id: 3 },
//   { name: "Charmander", id: 4 },
//   { name: "Charmeleon", id: 5 },
//   { name: "Charizard", id: 6 },
//   { name: "Squirtle", id: 7 },
//   { name: "Wartortle", id: 8 },
//   { name: "Blastoise", id: 9 },
//   { name: "Caterpie", id: 10 },
//   { name: "Metapod", id: 11 },
//   { name: "Butterfree", id: 12 },
//   { name: "Weedle", id: 13 },
//   { name: "Kakuna", id: 14 },
//   { name: "Beedrill", id: 15 },
//   { name: "Pidgey", id: 16 },
//   { name: "Pidgeotto", id: 17 },
//   { name: "Pidgeot", id: 18 },
//   { name: "Rattata", id: 19 },
//   { name: "Raticate", id: 20 },
//   // Add more Pokémon as needed
// ];

export const PokemonList = () => {
  const [searchPokemon, setSearchPokemon] = useState("");

  // Filtrar los elementos del array antes de renderizar.
  // const filterPokemons = pokemons.filter((pokemon) =>
  //   pokemon.name.toLowerCase().includes(searchPokemon.toLowerCase())
  // );

  // Capturar los valores que el usuario va ingresando en input.
  const searcher = (e: any) => {
    setSearchPokemon(e.target.value)
  }

  const { data: pokemons } = useGetPokemonList();

  const pokemonNames: Array<string> = pokemons ? pokemons.map(pokemon => pokemon.name) : []

  return (
    <div className="flex flex-col h-full bg-red-600">
      <div className="flex flex-row px-4 py-2 items-center">
        <Avatar>
          <AvatarImage src="/src/assets/pokeball.png" />
          <AvatarFallback>P</AvatarFallback>
        </Avatar>
        <Label className="text-3xl m-2 text-white">Pokédex</Label>
      </div>
      <div className="px-4 py-2 mb-2">
        <div className="relative flex items-centers">
          <Search className="absolute right-3 bottom-3 text-red-600 pointer-events-none" />
          <Input className="bg-white rounded-full h-12" placeholder="Search" value={searchPokemon} onChange={searcher} />
        </div>
      </div>
      <div className="grow bg-white m-2 p-2 rounded-sm overflow-y-auto">
        <div className="grid grid-cols-3 gap-4 p-4 ">
          {pokemons?.map((pokemon, index) => (
              <PokemonThumbnail key={index} id={1} name={pokemon.name} imageUrl="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/1.png"/>
          ))}           
        </div>
      </div>
    </div>
  );
};


/*
import { useQueries } from '@tanstack/react-query';

// An async function to fetch a single user
const fetchUser = async (userId) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
  if (!res.ok) {
    throw new Error('Network response was not ok');
  }
  return res.json();
};

function UserList({ userIds }) { // e.g., userIds = [1, 2, 3]
  const userQueries = useQueries({
    queries: userIds.map((id) => {
      return {
        queryKey: ['user', id], // Unique key for each query
        queryFn: () => fetchUser(id),
      };
    }),
  });

  return (
    <div>
      <h2>User List</h2>
      <ul>
        {userQueries.map(({ data, isLoading, isError }, index) => {
          if (isLoading) {
            return <li key={userIds[index]}>Loading user {userIds[index]}...</li>;
          }
          if (isError) {
            return <li key={userIds[index]}>Error fetching user {userIds[index]}!</li>;
          }
          return <li key={data.id}>{data.name} ({data.email})</li>;
        })}
      </ul>
    </div>
  );
}
*/

