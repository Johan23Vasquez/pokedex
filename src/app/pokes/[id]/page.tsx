import React from 'react'
import Image from 'next/image';




interface PokeInterface {
  params: {
    id: string;
  }
}
export default async function pokespage(props: PokeInterface) {

  const { id } = await props.params;

  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);

  const jsonResponse = await res.json();

  if (!res.ok) {
    return (
      <div>Error en la Api</div>
    )
  }

  const imagen = jsonResponse.sprites.other.dream_world.front_default;

  return (

    <div className="flex justify-center items-center min-h-svh bg-red-600">
      <div className="max-w-180 mx-auto ">
        <div className="relative flex flex-col border-2 border-blue-600 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96">
          <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white bg-clip-border rounded-xl h-96">
            <Image
              src={imagen}
              alt="card-image"
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 384px"
              priority
            />
          </div>
          <div className="p-6">
            <div className="flex items-center justify-between mb-2">
              <p className="block font-sans text-3xl antialiased font-bold leading-relaxed text-blue-gray-900">
                {jsonResponse.name}
              </p>
              <p className="block font-sans text-base antialiased font-bold leading-relaxed text-blue-gray-900">
                ID:{
                  jsonResponse.id
                }
              </p>
            </div>

          </div>

        </div>
      </div>
    </div>
  )

}
