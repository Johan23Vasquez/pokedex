import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com', // El dominio de tu imagen
        port: '',
        pathname: '/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/**', // Permite todas las rutas dentro de ese dominio
      },
    ],
  },
};

export default nextConfig;
