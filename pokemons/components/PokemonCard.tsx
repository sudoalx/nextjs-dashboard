import Link from "next/link";
import Image from "next/image";
import { SimplePokemon } from "..";
import { IoHeartOutline } from "react-icons/io5";

interface Props {
  pokemon: SimplePokemon;
}

export const PokemonCard = ({ pokemon }: Props) => {
  const { id, name } = pokemon;
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
              href={`/dashboard/pokemon/${id}`}
              className="border rounded-full py-2 px-4 text-xs font-semibold text-gray-100"
            >
              More info
            </Link>
          </div>
        </div>
        <div className="">
          <button
            // onClick={() => console.log(`Mark as favorite ${name}`)}
            className="px-4 py-2 hover:bg-gray-600 flex items-center transition duration-300 ease-in-out"
          >
            <div className="text-red-600">
              <IoHeartOutline className="w-6 h-6" />
            </div>
            <div className="pl-3">
              <p className="text-sm font-medium text-gray-200 leading-none">
                Mark as favorite
              </p>
              <p className="text-xs text-gray-400">Click to mark as favorite</p>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};
