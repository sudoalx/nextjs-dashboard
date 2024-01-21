import { PokemonGrid, PokemonsResponse, SimplePokemon } from "@/pokemons";

const getPokemons = async (
  limit = 20,
  offset = 0
): Promise<SimplePokemon[]> => {
  try {
    const data: PokemonsResponse = await fetch(
      `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
    ).then((res) => res.json());

    const pokemons = data.results.map((pokemon) => ({
      id: parseInt(pokemon.url.split("/").at(-2) || "1"),
      name: pokemon.name,
    }));

    return pokemons;
  } catch (error) {
    console.error("Error fetching pokemons:", error);
    throw error;
  }
};

export default async function PokemonsPage() {
  const pokemons = await getPokemons(150);
  return (
    <div className="flex flex-col items-center justify-center w-full h-full bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-4">
      <div className="flex flex-col items-center justify-evenly w-full mb-4 md:flex-row md:items-center md:justify-around">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100">
          Pokemons List
        </h1>
        <span className="rounded-full bg-red-500 text-white px-2 py-1 text-xs font-bold">
          Static Generation
        </span>
      </div>

      <p className="text-gray-500">Total: {pokemons.length}</p>
      <PokemonGrid pokemons={pokemons} />
    </div>
  );
}
