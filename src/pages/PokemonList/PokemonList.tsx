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
  const [pokemon, setPokemon] = useState([]);

  // Filtrar los elementos del array antes de renderizar.
  // const filterPokemons = pokemons.filter((pokemon) =>
  //   pokemon.name.toLowerCase().includes(searchPokemon.toLowerCase())
  // );

  // Capturar los valores que el usuario va ingresando en input.
  const searcher = (e: any) => {
    setSearchPokemon(e.target.value)
  }

  const { data } = useGetPokemonList();
  console.log(data)

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
            {/* {filterPokemons.map(({ id, name }, index) => {
              const formatId = id.toString().padStart(3, "0");
              const imageURL = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${formatId}.png`

              return (<PokemonThumbnail key={index} id={id} name={name} imageUrl={imageURL}/>);

            })} */}
            
        </div>
      </div>
    </div>
  );
};
