
// =====================================================================
/*
** Astro config
! Cuando actualices TypeScript o las definiciones de tipos de Astro, podrás eliminar esta anotación
! @ts-nocheck - Desactivamos TypeScript para este archivo ya que viewTransitions es válido en Astro 5.2+
*/
// =====================================================================
import vercel from "@astrojs/vercel"
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },

  // Habilitar View Transitions API para animaciones entre páginas
  viewTransitions: true,

  integrations: [icon()],

  output: 'server',
  adapter: vercel(),
});
