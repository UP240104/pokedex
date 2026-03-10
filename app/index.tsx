import { router } from "expo-router";
import { useEffect, useState } from "react";
import { Pressable, SafeAreaView, ScrollView, Text, View } from "react-native";
import Card from "./Components/Card";
import type {
  PokemonDetail,
  PokemonListItem,
  PokemonListResponse,
} from "./types";

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
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-row w-full justify-between items-center px-4 py-3 bg-white border-b border-gray-200">
        <Pressable
          onPress={() => router.push("/new-screen")}
          className="bg-blue-500 px-4 py-2 rounded-lg"
        >
          <Text className="text-white font-semibold">Cambiar</Text>
        </Pressable>

        <Pressable
          onPress={() => router.push("/pokemon/pikachu")}
          className="bg-gray-200 px-4 py-2 rounded-lg"
        >
          <Text className="text-gray-800 font-semibold">Otra vista</Text>
        </Pressable>
        <Pressable
          onPress={() => router.push("/pokemon/pikachu")}
          className="bg-gray-200 px-4 py-2 rounded-lg"
        >
          <Text className="text-gray-800 font-semibold">Otra vista</Text>
        </Pressable>
      </View>
      <ScrollView>
        <View className="w-full p-4 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {pokemons.map((pokemon, index) => (
            <Card key={index} {...pokemon} />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
