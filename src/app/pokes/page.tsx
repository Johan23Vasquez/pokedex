import Image from "next/image";

/* =======================
   TIPOS
======================= */

type PokeApiResponse = {
  id: number;
  name: string;
  sprites: {
    other: {
      dream_world: {
        front_default: string | null;
      };
    };
  };
};

type PokemonCard = {
  id: number;
  name: string;
  image: string | null;
};

/* =======================
   IDS A MOSTRAR
======================= */

const pokemonIds = [
  7,
  6,
  68,
  149,
  54,
  143,
  448,
  25,
  94,
  445,
  849,
  493,
];

/* =======================
   FETCH POKEMON
======================= */

async function getPokemon(id: number): Promise<PokemonCard | null> {
  const res = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${id}`,
    { cache: "no-store" }
  );

  if (!res.ok) return null;

  const data: PokeApiResponse = await res.json();

  return {
    id: data.id,
    name: data.name,
    image: data.sprites.other.dream_world.front_default,
  };
}

/* =======================
   PAGE
======================= */

export default async function PokesPage() {
  const pokemons = await Promise.all(
    pokemonIds.map((id) => getPokemon(id))
  );

  const validPokemons = pokemons.filter(
    (pokemon): pokemon is PokemonCard => pokemon !== null
  );

  return (
    <section className="min-h-dvh bg-white py-8 space-y-6">
      
      {/* TÍTULO */}
      <h2 className="text-4xl font-pokemon text-center text-yellow-400">
        Pokédex
      </h2>

      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 place-items-center">
        
        {validPokemons.map((pokemon) => (
          <a
            key={pokemon.id}
            href={`/pokes/${pokemon.name}`}
          >
            <div className="bg-red-600 border-2 border-blue-500 rounded-lg shadow-md hover:shadow-lg transition-shadow w-64 overflow-hidden">

              {/* IMAGEN */}
              <div className="relative h-48 w-full bg-white">
                {pokemon.image ? (
                  <Image
                    src={pokemon.image}
                    alt={pokemon.name}
                    fill
                    className="object-contain"
                    sizes="256px"
                    priority
                  />
                ) : (
                  <div className="h-full flex items-center justify-center text-gray-400">
                    Imagen no disponible
                  </div>
                )}
              </div>

              {/* INFO */}
              <div className="p-4 text-center text-white">
                <p className="font-pokemon text-xl capitalize">
                  {pokemon.name}
                </p>
                <p className="text-sm">
                  #{pokemon.id}
                </p>
              </div>

            </div>
          </a>
        ))}

      </div>
    </section>
  );
}
