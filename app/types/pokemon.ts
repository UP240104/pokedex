export type PokemonListItem = {
  name: string;
  url: string;
};

export type PokemonListResponse = {
  results: PokemonListItem[];
};

export type PokemonDetail = {
  id: number;
  name: string;
  sprites: {
    front_default: string;
  };
};