import { router } from "expo-router";
import { Image, Pressable, Text } from "react-native";
import type { PokemonDetail } from "../types";

export default function Card({ name, sprites }: PokemonDetail) {
  return (
    <Pressable
      className="bg-white border border-gray-200 rounded-lg shadow-md p-4 m-2 max-w-s items-center hover:bg-cyan-600 "
      onPress={() =>
        router.push({
          pathname: `/pokemon/${name}`,
        })
      }
    >
      <Text className="text-lg font-bold flex-1 text-center">{name}</Text>
      <Image
        source={{ uri: sprites.front_default }}
        className="w-20 h-20 mt-2"
      />
    </Pressable>
  );
}

// router.push({
//         pathname: "/pokemon/[name]",
//         params: { name: name, sprites: sprites },
//       })
