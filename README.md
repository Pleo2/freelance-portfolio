# Portfolio Freelance - Sitio Web Optimizado

Un sitio web de portfolio profesional desarrollado con Astro 5.2, optimizado para SEO y con transiciones de página fluidas mediante View Transitions.

## 🚀 Características

- **Diseño Responsivo**: Adaptable a cualquier dispositivo, desde móviles hasta pantallas de escritorio.
- **Optimización SEO**: Implementación completa de metadatos, Open Graph, Twitter Cards y datos estructurados.
- **Dark Mode**: Soporte para tema claro y oscuro, con detección automática de preferencias del sistema.
- **Transiciones de Página**: Animaciones fluidas entre páginas utilizando View Transitions API de Astro.
- **Componentes Reutilizables**: Arquitectura modular para facilitar el mantenimiento y escalabilidad.

## 📦 Tecnologías

- [Astro 5.2](https://astro.build/)
- [Tailwind CSS](https://tailwindcss.com/)
- [View Transitions API](https://docs.astro.build/en/guides/view-transitions/)
- [Fontsource](https://fontsource.org/) para carga óptima de fuentes

## 🔧 Instalación

1. Clona este repositorio
2. Instala las dependencias:

```bash
npm install
# o
yarn install
# o
pnpm install
```

3. Inicia el servidor de desarrollo:

```bash
npm run dev
# o
yarn dev
# o
pnpm dev
```

## 🧩 Estructura del Proyecto

```
├── public/              # Archivos estáticos (favicon, robots.txt, sitemap.xml)
├── src/
│   ├── components/      # Componentes reutilizables
│   │   ├── navigation/  # Componentes de navegación
│   │   └── primitives/  # Componentes básicos (Button, Link, etc.)
│   ├── icons/           # Iconos SVG
│   ├── layouts/         # Plantillas de diseño
│   ├── pages/           # Páginas del sitio
│   │   └── projects/    # Sección de proyectos
│   └── styles/          # Estilos globales
├── astro.config.mjs     # Configuración de Astro
├── tailwind.config.mjs  # Configuración de Tailwind CSS
└── CAMBIOS-SEO.md       # Documentación de optimizaciones SEO
```

## 🌊 View Transitions: Animaciones entre Páginas

Este proyecto implementa transiciones fluidas entre páginas utilizando la API View Transitions de Astro. Esto permite crear una experiencia de usuario más agradable, similar a una SPA (Single Page Application), manteniendo las ventajas de las páginas generadas estáticamente.

### Cómo funciona

1. **Configuración en `astro.config.mjs`**:
   ```javascript
   export default defineConfig({
     // ...
     experimental: {
       viewTransitions: true
     },
     // ...
   });
   ```

2. **Implementación en `Layout.astro`**:
   - Se agregó el meta tag `<meta name="view-transition" content="same-origin" />` para habilitar las transiciones.
   - Se envolvió el contenido principal en un div con ID `page-content` y se le asignó un nombre de transición con `view-transition-name: page-content;`.
   - Se definieron animaciones específicas para las transiciones de entrada y salida.

3. **Gestión del tema durante las transiciones**:
   - Se agregó un listener para el evento `astro:page-load` para mantener consistencia del tema durante las transiciones.

### Cómo agregar View Transitions a nuevas páginas

Para que las transiciones funcionen en nuevas páginas:

1. **Usa el componente Layout**:
   ```astro
   ---
   import Layout from "@/layouts/Layout.astro";
   ---
   
   <Layout title="Título de la Página" description="Descripción para SEO">
     <!-- Tu contenido aquí -->
   </Layout>
   ```

2. **Elementos con transiciones específicas**:
   Si deseas que ciertos elementos tengan sus propias transiciones:

   ```astro
   <div id="mi-elemento" style="view-transition-name: mi-elemento-transition;">
     <!-- Contenido del elemento -->
   </div>
   ```

   Y luego define las animaciones en CSS:
   ```css
   ::view-transition-old(mi-elemento-transition) {
     animation: 0.3s ease-out both fade-out;
   }
   ::view-transition-new(mi-elemento-transition) {
     animation: 0.3s ease-out both fade-in;
   }
   ```

## 🔍 Optimización SEO

Este proyecto incluye una implementación completa de optimizaciones SEO. Para más detalles, consulta el archivo [CAMBIOS-SEO.md](./CAMBIOS-SEO.md), que incluye:

- Metadatos básicos para SEO
- Open Graph y Twitter Cards para compartir en redes sociales
- Datos estructurados (JSON-LD)
- Configuración de robots.txt y sitemap.xml
- Instrucciones para configurar el dominio

## 📝 Notas de Implementación

- **TypeScript**: Es posible que veas advertencias de TypeScript relacionadas con `viewTransitions` en `astro.config.mjs`. Esto es esperado ya que las definiciones de tipos aún no se han actualizado completamente para Astro 5.2.
- **Navegadores**: Las View Transitions son compatibles con Chrome y Edge. En navegadores sin soporte, se degradan graciosamente a navegación normal.

## 🔄 Desarrollo

Para agregar una nueva página:

1. Crea un nuevo archivo `.astro` en la carpeta `pages`
2. Utiliza el componente `Layout` para mantener consistencia
3. Agrega metadatos SEO específicos para la página
4. Disfruta de las transiciones automáticas entre páginas

## 📜 Licencia

[MIT](LICENSE)
