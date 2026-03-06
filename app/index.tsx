import { useEffect, useState } from "react";
import { ScrollView, View } from "react-native";
import Card from "./Components/Card";
import type {PokemonListItem, PokemonListResponse, PokemonDetail} from "./types";

export default function Index() {
  const [pokemons, setPokemons] = useState<PokemonDetail[]>([]);

  useEffect(() => {
    const getPokemons = async () => {
      const URL = "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0";
      const res = await fetch(URL, {
        method: "GET",
      });
      const data: PokemonListResponse = await res.json();
      const details = await Promise.all(
        data.results.map(async (p: PokemonListItem) => {
          const rs = await fetch(p.url);
          return await rs.json();
        }),
      );
      setPokemons(details);
    };
    getPokemons();
  }, []);

  return (
    <ScrollView className="flex-1 bg-white justify-center">
      <View className="w-full p-4 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {pokemons.map((pokemon, index) => (
          <Card
            key={index}
            name={pokemon.name}
            src={pokemon.sprites.front_default}
          />
        ))}
      </View>
    </ScrollView>
  );
}
