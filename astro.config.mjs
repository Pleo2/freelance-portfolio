import vercel from "@astrojs/vercel"
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
    vite: {
    plugins: [tailwindcss()],
  },

  // Habilitar View Transitions API para animaciones entre páginas
  viewTransitions: true,

  integrations: [icon(), react()],

  output: 'server',
  adapter: vercel(),
    experimental: {
        svg: {
            mode: "sprite",
        },
    },
});