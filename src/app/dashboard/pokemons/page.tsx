import {
  SimplePokemon,
  PokemonResponse,
  PokemonsGrid,
} from "../../../pokemons";

const getPokemons = async (
  limit = 20,
  offset = 0
): Promise<SimplePokemon[]> => {
  try {
    const data: PokemonResponse = await fetch(
      `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
    ).then((response) => response.json());

    const pokemons = data.results.map((pokemon) => {
      return {
        id: pokemon.url.split("/").at(-2)!,
        name: pokemon.name,
      };
    });

    return pokemons;
  } catch (error) {
    throw new Error("Could not find any pokemons");
  }
};

export default async function PokemonsPage() {
  const pokemons = await getPokemons(151);

  return (
    <div className="flex flex-col">
      <span className="text-5xl my-3">
        List of Pokemos <small>Static</small>
      </span>

      <div className="flex flex-wrap items-center justify-center">
        <PokemonsGrid pokemons={pokemons} />
      </div>
    </div>
  );
}
