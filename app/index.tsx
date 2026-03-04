import { useEffect, useState } from "react";
import { ScrollView, View } from "react-native";
import Card from "./Components/Card";

export default function Index() {
  const [pokemons, setPokemons] = useState<any>([]);

  useEffect(() => {
    const getPokemons = async () => {
      const URL = "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0";
      const res = await fetch(URL, {
        method: "GET",
      });
      const data = await res.json();
      setPokemons(data.results);
    };
    getPokemons();
  }, []);

  return (
    <ScrollView className="flex-1 bg-white justify-center">
      <View className="w-full p-4 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {pokemons.map((pokemon) => (
          <Card key={pokemon.name} name={pokemon.name} />
        ))}
      </View>
    </ScrollView>
  );
}
