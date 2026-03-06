import { Image, Text, View } from "react-native";

export default function Card({ name, src }: { name: string; src: string }) {
  console.log(src);
  return (
    <View className="bg-white border border-gray-200 rounded-lg shadow-md p-4 m-2 max-w-s hover:bg-cyan-600 items-center">
      <Text className="text-lg font-bold flex-1 text-center">{name}</Text>
      <Image
        source={{
          uri: src,
        }}
        className=" w-20 h-20 mt-2"
      />
    </View>
  );
}
