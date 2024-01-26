"use client";
import Link from "next/link";
import Image from "next/image";
import { SimplePokemon } from "..";
import { IoHeart, IoHeartOutline } from "react-icons/io5";
import { AppDispatch, useAppSelector } from "@/store";
import { useDispatch } from "react-redux";
import { toggleFavorite } from "@/store/pokemons/pokemons";

interface Props {
  pokemon: SimplePokemon;
}

export const PokemonCard = ({ pokemon }: Props) => {
  const { id, name } = pokemon;
  const isFavorite = useAppSelector(
    (state) => !!state.favpokemons.favorites[id]
  );
  const dispatch: AppDispatch = useDispatch();

  const onToggle = () => {
    dispatch(toggleFavorite(pokemon));
  };

  return (
    <div className="mx-auto right-0 mt-2 w-55">
      <div className="bg-gray-800 rounded overflow-hidden shadow-lg">
        <div className="flex flex-col items-center justify-center text-center p-6 bg-gray-900">
          <Image
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
            alt={name}
            width={100}
            height={100}
            className="w-32 h-32"
            priority={false}
          />
          <p className="pt-2 text-lg font-semibold text-gray-50 capitalize">
            {name}
          </p>
          <div className="mt-5">
            <Link
              href={`/dashboard/pokemons/${name}`}
              className="border rounded-full py-2 px-4 text-xs font-semibold text-gray-100 uppercase bg-gray-700 hover:bg-gray-600 transition duration-300 ease-in-out"
            >
              More info
            </Link>
          </div>
        </div>
        <div className="">
          <button
            onClick={onToggle}
            className="px-4 py-2 hover:bg-gray-600 flex items-center transition duration-300 ease-in-out w-full"
          >
            <div className="text-red-600">
              {isFavorite ? (
                <IoHeart className="w-6 h-6" />
              ) : (
                <IoHeartOutline className="w-6 h-6" />
              )}
            </div>
            <div className="pl-3 text-left">
              <p className="text-sm font-medium text-gray-200 leading-none">
                {isFavorite ? "Favorite" : "Mark as favorite"}
              </p>
              <p className="text-xs text-gray-400">
                {isFavorite
                  ? "Marked as favorite"
                  : "Click to mark as favorite"}
              </p>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};
