import { Text, View } from "react-native";

export default function Card({ name }: { name: string }) {
  return (
    <View className="bg-white border border-gray-200 rounded-lg shadow-md p-4 m-2 max-w-s">
      <Text className="text-lg font-bold">{name}</Text>
    </View>
  );
}
