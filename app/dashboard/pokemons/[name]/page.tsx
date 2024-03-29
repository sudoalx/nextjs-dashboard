import { Pokemon, PokemonsResponse, SimplePokemonName } from "@/pokemons";
import { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";

interface Props {
  params: {
    name: string;
  };
}

const getPokemons = async (
  limit = 20,
  offset = 0
): Promise<SimplePokemonName[]> => {
  try {
    const data: PokemonsResponse = await fetch(
      `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
    ).then((res) => res.json());

    const pokemons = data.results.map((pokemon) => ({
      name: pokemon.name,
    }));

    return pokemons;
  } catch (error) {
    console.error("Error fetching pokemons:", error);
    throw error;
  }
};

export async function generateStaticParams() {
  const pokemons = await getPokemons(150);
  return pokemons.map(({ name }) => ({
    name: name,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  try {
    const pokemon = await getPokemon(params.name);
    return {
      title: `Pokemon ${pokemon.name} | Dashboard`,
      description: `Pokemon ${pokemon.name} page`,
    };
  } catch (error) {
    return {
      title: `Pokemon | Dashboard`,
      description: `Pokemon page`,
    };
  }
}

const getPokemon = async (name: string): Promise<Pokemon> => {
  try {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`, {
      next: {
        revalidate: 60 * 60 * 30 * 6, // 6 months
      },
    });
    const pokemon = await res.json();
    return pokemon;
  } catch (error) {
    notFound();
  }
};

export default async function PokemonPage({ params }: Readonly<Props>) {
  const pokemon = await getPokemon(params.name);

  return (
    <div className="flex mt-5 flex-col items-center text-gray-300 dark:bg-gray-800 p-5">
      <div className="relative flex flex-col items-center rounded-[20px] w-full max-w-screen-md mx-auto bg-white dark:bg-gray-900 bg-clip-border shadow-lg p-3 animate__animated animate__fadeIn">
        <div className="mt-2 mb-8 w-full">
          <h1 className="px-2 text-xl font-bold text-slate-700 dark:text-white capitalize">
            #{pokemon.id} {pokemon.name}
          </h1>
          <div className="flex flex-col md:flex-row justify-center items-center">
            <Image
              src={pokemon.sprites.other?.dream_world.front_default ?? ""}
              width={150}
              height={150}
              alt={`Imagen del pokemon ${pokemon.name}`}
              className="mb-5 md:mr-8 md:mb-0"
            />

            <div>
              <h2 className="text-lg font-bold text-slate-700 dark:text-white">
                Abilities
              </h2>
              <div className="flex flex-wrap">
                {pokemon.moves.map((move) => (
                  <p
                    key={move.move.name}
                    className="mr-2 capitalize text-sm text-justify"
                  >
                    {move.move.name},
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-2 w-full">
          <div className="flex flex-col items-start justify-center rounded-2xl bg-gray-800 bg-clip-border px-3 py-4  drop-shadow-lg ">
            <p className="text-sm text-gray-300">Weight</p>
            <span className="text-base font-medium text-navy-700 flex">
              {pokemon.weight / 10} kg
            </span>
          </div>

          <div className="flex flex-col items-start justify-center rounded-2xl bg-gray-800 bg-clip-border px-3 py-4  drop-shadow-lg ">
            <p className="text-sm text-gray-300">Height</p>
            <span className="text-base font-medium text-navy-700 flex">
              {pokemon.height / 10} m
            </span>
          </div>

          <div className="flex flex-col items-start justify-center rounded-2xl bg-gray-800 bg-clip-border px-3 py-4  drop-shadow-lg ">
            <p className="text-sm text-gray-300">Types</p>
            <div className="text-base font-medium text-navy-700 flex">
              {pokemon.types.map((type) => (
                <p key={type.slot} className="mr-2 capitalize">
                  {type.type.name}
                </p>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-start justify-center rounded-2xl bg-gray-800 bg-clip-border px-3 py-4  drop-shadow-lg ">
            <p className="text-sm text-gray-300">Base Experience</p>
            <span className="text-base font-medium text-navy-700 flex">
              {pokemon.base_experience}
            </span>
          </div>

          <div className="flex flex-col items-start justify-center rounded-2xl bg-gray-800 bg-clip-border px-3 py-4  drop-shadow-lg ">
            <p className="text-sm text-gray-300">Regular Sprites</p>
            <div className="flex justify-center w-full">
              <Image
                src={pokemon.sprites.front_default}
                width={100}
                height={100}
                alt={`sprite ${pokemon.name}`}
              />

              <Image
                src={pokemon.sprites.back_default}
                width={100}
                height={100}
                alt={`sprite ${pokemon.name}`}
              />
            </div>
          </div>

          <div className="flex flex-col items-start justify-center rounded-2xl bg-gray-800 bg-clip-border px-3 py-4  drop-shadow-lg">
            <p className="text-sm text-gray-300">Shiny Sprites</p>
            <div className="flex justify-center w-full">
              <Image
                src={pokemon.sprites.front_shiny}
                width={100}
                height={100}
                alt={`sprite ${pokemon.name}`}
              />

              <Image
                src={pokemon.sprites.back_shiny}
                width={100}
                height={100}
                alt={`sprite ${pokemon.name}`}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
