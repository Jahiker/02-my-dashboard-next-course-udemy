import Link from "next/link";
import { SimplePokemon } from "../interfaces/simple-pokemon";
import Image from "next/image";
import { IoHeartOutline } from "react-icons/io5";

interface Props {
  pokemon: SimplePokemon;
}

export const PokemonCard = ({ pokemon }: Props) => {
  const { id, name } = pokemon;
  return (
    <div className="mx-auto right-0 mt-2 w-60">
      <div className="bg-white rounded overflow-hidden shadow-lg flex flex-col">
        <div className="text-center p-6 bg-gray-800 border-b flex flex-col items-center">
          <figure className="w-[100px] h-[100px]">
            <Image
              key={pokemon.id}
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
              alt={pokemon.name}
              width={100}
              height={100}
              className="w-full h-full object-contain object-center"
              priority={false}
            ></Image>
          </figure>
          <p className="pt-2 text-lg font-semibold text-gray-50 capitalize">
            {name}
          </p>
          <div className="mt-5">
            <Link
              href={`/dashboard/pokemon/${name}`}
              className="border rounded-full py-2 px-4 text-xs font-semibold text-gray-100"
            >
              See more...
            </Link>
          </div>
        </div>
        <div className="border-b">
          <Link
            href="/dashboard/main"
            className="px-4 py-2 hover:bg-gray-100 flex items-center"
          >
            <div className="text-green-600">
              <IoHeartOutline className="text-red-600" />
            </div>
            <div className="pl-3">
              <p className="text-sm font-medium text-gray-800 leading-none">
                Add to favs
              </p>
              <p className="text-xs text-gray-500">View your campaigns</p>
            </div>
          </Link>

        </div>
      </div>
    </div>
  );
};
