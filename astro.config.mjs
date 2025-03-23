import vercel from "@astrojs/vercel"
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
    site: "https://freelance-portfolio-neon.vercel.app/",
    vite: {
    plugins: [tailwindcss()],
  },

  // Habilitar View Transitions API para animaciones entre páginas
  viewTransitions: true,

  integrations: [icon()],

  output: 'server',
  adapter: vercel(),
    experimental: {
        svg: {
            mode: "sprite",
        },
    },
});
