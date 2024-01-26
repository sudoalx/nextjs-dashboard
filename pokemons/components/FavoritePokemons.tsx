"use client";
import { useAppSelector } from "@/store";
import { SimplePokemon } from "../interfaces/simple-pokemon";

import { PokemonGrid } from "..";
import { IoHeartDislike } from "react-icons/io5";
import Link from "next/link";

export const FavoritePokemons = () => {
  const favorites: SimplePokemon[] = useAppSelector((state) =>
    Object.values(state.favpokemons.favorites)
  );

  return (
    <>
      {favorites.length === 0 ? (
        <FavoritesEmpty />
      ) : (
        <PokemonGrid pokemons={favorites} />
      )}
    </>
  );
};

export const FavoritesEmpty = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-4">
      <IoHeartDislike className="text-9xl text-gray-400 dark:text-gray-600" />
      <h2>
        No favorite pokemons yet.{" "}
        <Link href={"/dashboard/pokemons"} className="text-blue-500">
          Add favorites from the list!
        </Link>
      </h2>
    </div>
  );
};
