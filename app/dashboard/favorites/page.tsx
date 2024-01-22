import { PokemonGrid, PokemonsResponse, SimplePokemon } from "@/pokemons";

export const metadata = {
  title: "List of Pokemons",
  description: "List of Pokemons from the PokeAPI",
};

export default async function PokemonsPage() {
  return (
    <div className="flex flex-col items-center w-full h-full bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-4">
      <div className="flex flex-col items-center justify-evenly w-full mb-4 md:flex-row md:items-center md:justify-around">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100">
          Favorite Pokemons List
        </h1>
        <span className="rounded-full bg-red-500 text-white px-2 py-1 text-xs font-bold">
          Global State
        </span>
      </div>

      <PokemonGrid pokemons={[]} />
    </div>
  );
}
