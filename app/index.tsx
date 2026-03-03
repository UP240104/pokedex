import { useEffect, useState } from "react";
import { ScrollView } from "react-native";
import Card from "./Components/Card";

export default function Index() {
  const [pokemons, setPokemons] = useState([]);

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
    <ScrollView className="flex-1 bg-white" grid-cols-1 gap-4 p-4>
      {pokemons.map((pokemon) => (
        <Card key={pokemon.name} name={pokemon.name} />
      ))}
    </ScrollView>
  );
}
