"use client";
import { useAppSelector } from "@/store";
import { SimplePokemon } from "../interfaces/simple-pokemon";

import { PokemonGrid } from "..";
import { useState } from "react";

export const FavoritePokemons = () => {
  const favorites: SimplePokemon[] = useAppSelector((state) =>
    Object.values(state.favpokemons)
  );

  const [pokemons, setPokemons] = useState(favorites);

  return <PokemonGrid pokemons={pokemons} />;
};
