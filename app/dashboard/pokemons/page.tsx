import { PokemonGrid, PokemonsResponse, SimplePokemon } from "@/app/pokemons";

const getPokemons = async (
  limit = 20,
  offset = 0
): Promise<SimplePokemon[]> => {
  const data: PokemonsResponse = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
  ).then((res) => res.json());

  const pokemons = data.results.map((pokemon) => ({
    id: parseInt(pokemon.url.split("/").at(-2) || "1"),
    name: pokemon.name,
  }));
  return pokemons;
};

export default async function PokemonsPage() {
  const pokemons = await getPokemons(151);
  return (
    <div className="flex flex-col items-center justify-center w-full h-full bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-4">
      <h1 className="text-4xl font-bold">Pokemons</h1>
      <PokemonGrid pokemons={pokemons} />
    </div>
  );
}
