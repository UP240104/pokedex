import { useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";

export default function Pokemon() {
  const { name } = useLocalSearchParams();

  return (
    <View>
      <Text>{name}</Text>
      <Text>{name}</Text>
    </View>
  );
}
