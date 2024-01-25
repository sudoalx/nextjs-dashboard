"use client";
import { useAppSelector } from "@/store";
import { SimplePokemon } from "../interfaces/simple-pokemon";

import { PokemonGrid } from "..";

export const FavoritePokemons = () => {
  const favorites: SimplePokemon[] = useAppSelector((state) =>
    Object.values(state.favpokemons)
  );
  return <PokemonGrid pokemons={favorites} />;
};
