import vercel from "@astrojs/vercel"
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
    site: "https://freelance-portfolio-neon.vercel.app/",
    vite: {
    plugins: [tailwindcss()],
  },

  // Habilitar View Transitions API para animaciones entre páginas
  viewTransitions: true,

  integrations: [icon(), react()],

  output: 'server',
  adapter: vercel({
    edgeMiddleware: false,
    includeFiles: ['.env'],
    serverEntry: 'dist/server/entry.mjs',
  }),
    experimental: {
        svg: {
            mode: "sprite",
        },
    },
});
