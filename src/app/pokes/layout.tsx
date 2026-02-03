import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";


//https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/149.svg

const id = [
  7,
  6,
  68,
  149,
  54,
  143,
  94,
  25,

];



export default function PokesLayout({
  children
}: {
  children: ReactNode;

}) {

  return (
    <div className="min-h-screen flex flex-col" >
      <nav className="w-full flex items-center justify-center bg-white p-4 gap-4 mb-1 sm:px-4 lg:px-8">
        <div className="flex flex-1 items-center sm:flex-col lg:flex-row lg:justify-center gap-2 sm:items-stretch sm:justify-start  ">


          {
            id.map((id) => (
              <Link
              key={id}
              href={`/pokes/${id}`}
              className="bg-red-500 border-2 border-blue-500 text-white px-3 py-2 rounded-md"
            >
              Pokémon {id}
            </Link>
            ))
          }
        </div>
      </nav>

      <div>
        {children}
      </div>
      {/* <footer className="bg-gray-800 border-t">
        <div className="w-full mx-auto px-6 py-3 text-md text-gray-200 text-center ">
          {new Date().getFullYear()} Catálogo Canino  - <Link href="https://raw.githubusercontent.com/PokeAPI/" className="hover:underline">Dog API</Link>
        </div>
      </footer> */}
    </div>
  );
  // return (
  //   <div>
  //     <div>
  //       {id.map((id, index) => (
  //         <a href={`/pokes/${id}`} key={id}>
  //           <Image src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`} alt="" width={100} height={100} />
  //         </a>

  //       ))}
  //     </div>
  //     {children}
  //   </div>
  // );
}