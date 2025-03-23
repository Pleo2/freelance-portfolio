import { c as createComponent, a as createAstro, r as renderComponent, b as renderTemplate, j as renderSlot, m as maybeRenderHead, s as spreadAttributes, i as addAttribute, F as Fragment, u as unescapeHTML, h as renderScript, k as renderHead } from './astro/server_DXnayVh2.mjs';
/* empty css                         */
/* empty css                         */

const projects = [
  {
    id: 1,
    developmentCredits: "Desarrollado por el autor en colaboración con la empresa de desarrollo web <a href='https://www.iondigital.dev/' target='_blank' rel='noopener noreferrer'>ION Digital</a>.",
    allImages: [
      {
        url: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        alt: "Abstract wallpaper 1"
      },
      {
        url: "https://images.pexels.com/photos/1103970/pexels-photo-1103970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        alt: "Abstract wallpaper 2"
      },
      {
        url: "https://images.pexels.com/photos/1449775/pexels-photo-1449775.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        alt: "Abstract wallpaper 3"
      },
      {
        url: "https://images.pexels.com/photos/301703/pexels-photo-301703.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        alt: "Abstract wallpaper 4"
      }
    ],
    date: "2024-01-01",
    title: "e-commerce",
    slug: "ecommerce-website",
    url: "/",
    tags: ["Diseño Web", "Desarrollo", "E-commerce"],
    client: "Tienda Moderna",
    description: "Diseño y desarrollo de un sitio web e-commerce completo con integración de pagos, gestión de inventario y panel de administración personalizado.",
    fullDescription: "Desarrollo de una plataforma e-commerce moderna con funcionalidades avanzadas de búsqueda, filtrado de productos, carrito de compras optimizado y múltiples opciones de pago. El sitio incluye un panel administrativo completo para gestión de productos, pedidos y clientes.",
    image: {
      url: "https://images.pexels.com/photos/1242348/pexels-photo-1242348.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      alt: "Plataforma e-commerce responsive con interfaz de usuario moderna"
    }
  },
  {
    id: 2,
    developmentCredits: "Desarrollado por el autor en colaboración con la empresa de desarrollo web <a href='https://www.iondigital.dev/' target='_blank' rel='noopener noreferrer'>ION Digital</a>.",
    allImages: [
      {
        url: "https://images.pexels.com/photos/209831/pexels-photo-209831.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        alt: "Abstract wallpaper 1"
      },
      {
        url: "https://images.pexels.com/photos/1762851/pexels-photo-1762851.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        alt: "Abstract wallpaper 2"
      },
      {
        url: "https://images.pexels.com/photos/1762848/pexels-photo-1762848.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        alt: "Abstract wallpaper 3"
      },
      {
        url: "https://images.pexels.com/photos/2422915/pexels-photo-2422915.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        alt: "Abstract wallpaper 4"
      }
    ],
    date: "2024-01-01",
    title: "web de gestión",
    slug: "app-gestion",
    url: "/",
    tags: ["Aplicación Web", "Dashboard", "SaaS"],
    client: "Empresa Gestión S.A.",
    description: "Desarrollo de una aplicación web para gestión empresarial con múltiples módulos para diferentes departamentos y niveles de acceso.",
    fullDescription: "Creación de una aplicación web completa para la gestión interna de una empresa. Incluye módulos para recursos humanos, finanzas, proyectos y clientes. Sistema de roles y permisos avanzado con analíticas en tiempo real y generación de informes personalizados.",
    image: {
      url: "https://images.pexels.com/photos/1242338/pexels-photo-1242338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      alt: "Dashboard de gestión empresarial con gráficos interactivos"
    }
  },
  {
    id: 3,
    developmentCredits: "Desarrollado por el autor en colaboración con la empresa de desarrollo web <a href='https://www.iondigital.dev/' target='_blank' rel='noopener noreferrer'>ION Digital</a>.",
    allImages: [
      {
        url: "https://images.pexels.com/photos/1562476/pexels-photo-1562476.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        alt: "Abstract wallpaper 1"
      },
      {
        url: "https://images.pexels.com/photos/167699/pexels-photo-167699.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        alt: "Abstract wallpaper 2"
      },
      {
        url: "https://images.pexels.com/photos/1762910/pexels-photo-1762910.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        alt: "Abstract wallpaper 3"
      },
      {
        url: "https://images.pexels.com/photos/1762885/pexels-photo-1762885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        alt: "Abstract wallpaper 4"
      }
    ],
    date: "2024-01-01",
    title: "Rediseño sitio corporativo",
    slug: "rediseno-corporativo",
    url: "/",
    tags: ["Diseño UX/UI", "Desarrollo Web", "SEO"],
    client: "Corporación Innovadora",
    description: "Rediseño completo del sitio web corporativo con enfoque en mejorar la experiencia de usuario y optimización para motores de búsqueda.",
    fullDescription: "Rediseño completo de un sitio web corporativo obsoleto. El nuevo diseño se enfoca en mejorar la experiencia de usuario, facilitar la navegación y destacar los servicios clave de la empresa. Incluye optimización SEO completa que resultó en un aumento del 45% en tráfico orgánico.",
    image: {
      url: "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      alt: "Sitio web corporativo moderno en diferentes dispositivos"
    }
  },
  {
    id: 4,
    developmentCredits: "Desarrollado por el autor en colaboración con la empresa de desarrollo web <a href='https://www.iondigital.dev/' target='_blank' rel='noopener noreferrer'>ION Digital</a>.",
    allImages: [
      {
        url: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        alt: "App móvil en diferentes dispositivos"
      },
      {
        url: "https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        alt: "Interfaz de usuario de la app"
      },
      {
        url: "https://images.pexels.com/photos/3183132/pexels-photo-3183132.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        alt: "Características de la app"
      },
      {
        url: "https://images.pexels.com/photos/3183141/pexels-photo-3183141.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        alt: "Pantalla de inicio de la app"
      }
    ],
    date: "2024-02-15",
    title: "App Móvil Fitness",
    slug: "app-fitness",
    url: "/",
    tags: ["Desarrollo Móvil", "React Native", "UX/UI"],
    client: "FitLife Pro",
    description: "Desarrollo de una aplicación móvil para seguimiento de rutinas de ejercicio, nutrición y progreso personal en el fitness.",
    fullDescription: "Creación de una aplicación móvil completa para el seguimiento del fitness personal. Incluye funcionalidades como creación de rutinas personalizadas, seguimiento de nutrición, integración con dispositivos wearables, y análisis de progreso con gráficos detallados. La app utiliza gamificación para mantener a los usuarios motivados.",
    image: {
      url: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      alt: "Aplicación móvil de fitness en diferentes dispositivos"
    }
  },
  {
    id: 5,
    developmentCredits: "Desarrollado por el autor en colaboración con la empresa de desarrollo web <a href='https://www.iondigital.dev/' target='_blank' rel='noopener noreferrer'>ION Digital</a>.",
    allImages: [
      {
        url: "https://images.pexels.com/photos/8439094/pexels-photo-8439094.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        alt: "Plataforma educativa en uso"
      },
      {
        url: "https://images.pexels.com/photos/8439097/pexels-photo-8439097.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        alt: "Interfaz del curso"
      },
      {
        url: "https://images.pexels.com/photos/8439064/pexels-photo-8439064.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        alt: "Panel de estudiante"
      },
      {
        url: "https://images.pexels.com/photos/8439065/pexels-photo-8439065.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        alt: "Sistema de evaluación"
      }
    ],
    date: "2024-03-01",
    title: "Plataforma E-learning",
    slug: "plataforma-educativa",
    url: "/",
    tags: ["LMS", "React", "Node.js", "MongoDB"],
    client: "Instituto Educativo Digital",
    description: "Desarrollo de una plataforma de aprendizaje en línea con sistema de gestión de contenidos, evaluaciones y seguimiento de progreso.",
    fullDescription: "Implementación de una plataforma educativa completa con funcionalidades avanzadas como videoconferencias en tiempo real, sistema de evaluación automatizado, seguimiento de progreso del estudiante y análisis de rendimiento. Incluye integración con sistemas de pago y certificación digital.",
    image: {
      url: "https://images.pexels.com/photos/8439094/pexels-photo-8439094.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      alt: "Plataforma de e-learning moderna y responsive"
    }
  },
  {
    id: 6,
    developmentCredits: "Desarrollado por el autor en colaboración con la empresa de desarrollo web <a href='https://www.iondigital.dev/' target='_blank' rel='noopener noreferrer'>ION Digital</a>.",
    allImages: [
      {
        url: "https://images.pexels.com/photos/5473298/pexels-photo-5473298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        alt: "Dashboard IoT"
      },
      {
        url: "https://images.pexels.com/photos/5473299/pexels-photo-5473299.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        alt: "Monitoreo en tiempo real"
      },
      {
        url: "https://images.pexels.com/photos/5473302/pexels-photo-5473302.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        alt: "Análisis de datos"
      },
      {
        url: "https://images.pexels.com/photos/5473300/pexels-photo-5473300.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        alt: "Control de dispositivos"
      }
    ],
    date: "2024-03-15",
    title: "Sistema IoT Industrial",
    slug: "iot-industrial",
    url: "/",
    tags: ["IoT", "Python", "AWS", "Data Analytics"],
    client: "Industria Conectada S.A.",
    description: "Desarrollo de un sistema IoT para monitoreo y control de maquinaria industrial con análisis de datos en tiempo real.",
    fullDescription: "Implementación de una solución IoT industrial que permite el monitoreo y control remoto de maquinaria. El sistema incluye sensores conectados, procesamiento de datos en tiempo real, alertas predictivas y un dashboard completo para visualización y control. La solución ha permitido reducir el tiempo de inactividad en un 30% y optimizar el mantenimiento preventivo.",
    image: {
      url: "https://images.pexels.com/photos/5473298/pexels-photo-5473298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      alt: "Dashboard de control IoT industrial"
    }
  }
];

const $$Astro$a = createAstro();
const $$Container = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$Container;
  const { class: className, id, tag = "section", ...rest } = Astro2.props;
  const Element = tag;
  return renderTemplate`${renderComponent($$result, "Element", Element, { "id": id, "class:list": ["w-screen md:max-w-[1440px] md:mx-auto", className], ...rest }, { "default": ($$result2) => renderTemplate` ${renderSlot($$result2, $$slots["default"])} ` })}`;
}, "/Users/pleo2/Dev/freelance/freelance-portfolio/src/components/Container.astro", void 0);

const icons = {"local":{"prefix":"local","lastModified":1742721173,"icons":{"icon-arrow-up-right":{"body":"<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M7 7h10v10M7 17 17 7\"/>"},"icon-at":{"body":"<path fill=\"currentColor\" d=\"M128 24a104 104 0 0 0 0 208c21.51 0 44.1-6.48 60.43-17.33a8 8 0 0 0-8.86-13.33C166 210.38 146.21 216 128 216a88 88 0 1 1 88-88c0 26.45-10.88 32-20 32s-20-5.55-20-32V88a8 8 0 0 0-16 0v4.26a48 48 0 1 0 5.93 65.1c6 12 16.35 18.64 30.07 18.64 22.54 0 36-17.94 36-48A104.11 104.11 0 0 0 128 24m0 136a32 32 0 1 1 32-32 32 32 0 0 1-32 32\"/>","width":256,"height":256},"icon-boxes":{"body":"<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.5\"><path d=\"M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3zM7 16.5l-4.74-2.85M7 16.5l5-3m-5 3v5.17m5-8.17V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5zm5 3-5-3m5 3 4.74-2.85M17 16.5v5.17\"/><path d=\"M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0zM12 8 7.26 5.15M12 8l4.74-2.85M12 13.5V8\"/></g>"},"icon-cable":{"body":"<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.5\"><path d=\"M17 21v-2a1 1 0 0 1-1-1v-1a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1\"/><path d=\"M19 15V6.5a1 1 0 0 0-7 0v11a1 1 0 0 1-7 0V9m16 12v-2h-4M3 5h4V3\"/><path d=\"M7 5a1 1 0 0 1 1 1v1a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a1 1 0 0 1 1-1V3\"/></g>"},"icon-command":{"body":"<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.5\" d=\"M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3\"/>"},"icon-drafting-compass":{"body":"<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.5\"><path d=\"m12.99 6.74 1.93 3.44M19.136 12a10 10 0 0 1-14.271 0M21 21l-2.16-3.84M3 21l8.02-14.26\"/><circle cx=\"12\" cy=\"5\" r=\"2\"/></g>"},"icon-github":{"body":"<path fill=\"currentColor\" d=\"M208.31 75.68A59.78 59.78 0 0 0 202.93 28a8 8 0 0 0-6.93-4 59.75 59.75 0 0 0-48 24h-24a59.75 59.75 0 0 0-48-24 8 8 0 0 0-6.93 4 59.78 59.78 0 0 0-5.38 47.68A58.14 58.14 0 0 0 56 104v8a56.06 56.06 0 0 0 48.44 55.47A39.8 39.8 0 0 0 96 192v8H72a24 24 0 0 1-24-24 40 40 0 0 0-40-40 8 8 0 0 0 0 16 24 24 0 0 1 24 24 40 40 0 0 0 40 40h24v16a8 8 0 0 0 16 0v-40a24 24 0 0 1 48 0v40a8 8 0 0 0 16 0v-40a39.8 39.8 0 0 0-8.44-24.53A56.06 56.06 0 0 0 216 112v-8a58.14 58.14 0 0 0-7.69-28.32M200 112a40 40 0 0 1-40 40h-48a40 40 0 0 1-40-40v-8a41.74 41.74 0 0 1 6.9-22.48 8 8 0 0 0 1.1-7.69 43.8 43.8 0 0 1 .79-33.58 43.88 43.88 0 0 1 32.32 20.06 8 8 0 0 0 6.71 3.69h32.35a8 8 0 0 0 6.74-3.69 43.87 43.87 0 0 1 32.32-20.06 43.8 43.8 0 0 1 .77 33.58 8.09 8.09 0 0 0 1 7.65 41.7 41.7 0 0 1 7 22.52Z\"/>","width":256,"height":256},"icon-mail-box":{"body":"<path fill=\"currentColor\" d=\"M104 152a8 8 0 0 1-8 8H56a8 8 0 0 1 0-16h40a8 8 0 0 1 8 8m136-36v60a16 16 0 0 1-16 16h-88v32a8 8 0 0 1-16 0v-32H32a16 16 0 0 1-16-16v-60a60.07 60.07 0 0 1 60-60h76V24a8 8 0 0 1 8-8h32a8 8 0 0 1 0 16h-24v24h12a60.07 60.07 0 0 1 60 60m-120 60v-60a44 44 0 0 0-88 0v60Zm104-60a44.05 44.05 0 0 0-44-44h-12v72a8 8 0 0 1-16 0V72h-35.25A59.86 59.86 0 0 1 136 116v60h88Z\"/>","width":256,"height":256},"icon-map-pin":{"body":"<path fill=\"currentColor\" d=\"M128 64a40 40 0 1 0 40 40 40 40 0 0 0-40-40m0 64a24 24 0 1 1 24-24 24 24 0 0 1-24 24m0-112a88.1 88.1 0 0 0-88 88c0 31.4 14.51 64.68 42 96.25a254.2 254.2 0 0 0 41.45 38.3 8 8 0 0 0 9.18 0 254.2 254.2 0 0 0 41.37-38.3c27.45-31.57 42-64.85 42-96.25a88.1 88.1 0 0 0-88-88m0 206c-16.53-13-72-60.75-72-118a72 72 0 0 1 144 0c0 57.23-55.47 105-72 118\"/>","width":256,"height":256},"icon-message-circle":{"body":"<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M7.9 20A9 9 0 1 0 4 16.1L2 22Z\"/>"},"icon-mini-arrow":{"body":"<path fill=\"currentColor\" d=\"M5.293 7.293a1 1 0 0 1 1.414 0L10 10.586l3.293-3.293a1 1 0 1 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 0-1.414\"/>","width":20,"height":20},"icon-mouse":{"body":"<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><rect width=\"14\" height=\"20\" x=\"5\" y=\"2\" rx=\"7\"/><path d=\"M12 6v4\"/></g>"},"icon-phone":{"body":"<path fill=\"currentColor\" d=\"m222.37 158.46-47.11-21.11-.13-.06a16 16 0 0 0-15.17 1.4 8 8 0 0 0-.75.56L134.87 160c-15.42-7.49-31.34-23.29-38.83-38.51l20.78-24.71c.2-.25.39-.5.57-.77a16 16 0 0 0 1.32-15.06v-.12L97.54 33.64a16 16 0 0 0-16.62-9.52A56.26 56.26 0 0 0 32 80c0 79.4 64.6 144 144 144a56.26 56.26 0 0 0 55.88-48.92 16 16 0 0 0-9.51-16.62M176 208A128.14 128.14 0 0 1 48 80a40.2 40.2 0 0 1 34.87-40 .6.6 0 0 0 0 .12l21 47-20.67 24.74a6 6 0 0 0-.57.77 16 16 0 0 0-1 15.7c9.06 18.53 27.73 37.06 46.46 46.11a16 16 0 0 0 15.75-1.14 8 8 0 0 0 .74-.56L168.89 152l47 21.05h.11A40.21 40.21 0 0 1 176 208\"/>","width":256,"height":256},"icon-scan-search":{"body":"<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.5\"><path d=\"M3 7V5a2 2 0 0 1 2-2h2m10 0h2a2 2 0 0 1 2 2v2m0 10v2a2 2 0 0 1-2 2h-2M7 21H5a2 2 0 0 1-2-2v-2\"/><circle cx=\"12\" cy=\"12\" r=\"3\"/><path d=\"m16 16-1.9-1.9\"/></g>"},"icon-x":{"body":"<path fill=\"currentColor\" d=\"m214.75 211.71-62.6-98.38 61.77-67.95a8 8 0 0 0-11.84-10.76l-58.84 64.72-40.49-63.63A8 8 0 0 0 96 32H48a8 8 0 0 0-6.75 12.3l62.6 98.37-61.77 68a8 8 0 1 0 11.84 10.76l58.84-64.72 40.49 63.63A8 8 0 0 0 160 224h48a8 8 0 0 0 6.75-12.29M164.39 208 62.57 48h29l101.86 160Z\"/>","width":256,"height":256},"icon-zap":{"body":"<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.5\" d=\"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z\"/>"}},"width":24,"height":24}};

const defaultIconDimensions = Object.freeze(
  {
    left: 0,
    top: 0,
    width: 16,
    height: 16
  }
);
const defaultIconTransformations = Object.freeze({
  rotate: 0,
  vFlip: false,
  hFlip: false
});
const defaultIconProps = Object.freeze({
  ...defaultIconDimensions,
  ...defaultIconTransformations
});
const defaultExtendedIconProps = Object.freeze({
  ...defaultIconProps,
  body: "",
  hidden: false
});

const defaultIconSizeCustomisations = Object.freeze({
  width: null,
  height: null
});
const defaultIconCustomisations = Object.freeze({
  // Dimensions
  ...defaultIconSizeCustomisations,
  // Transformations
  ...defaultIconTransformations
});

function mergeIconTransformations(obj1, obj2) {
  const result = {};
  if (!obj1.hFlip !== !obj2.hFlip) {
    result.hFlip = true;
  }
  if (!obj1.vFlip !== !obj2.vFlip) {
    result.vFlip = true;
  }
  const rotate = ((obj1.rotate || 0) + (obj2.rotate || 0)) % 4;
  if (rotate) {
    result.rotate = rotate;
  }
  return result;
}

function mergeIconData(parent, child) {
  const result = mergeIconTransformations(parent, child);
  for (const key in defaultExtendedIconProps) {
    if (key in defaultIconTransformations) {
      if (key in parent && !(key in result)) {
        result[key] = defaultIconTransformations[key];
      }
    } else if (key in child) {
      result[key] = child[key];
    } else if (key in parent) {
      result[key] = parent[key];
    }
  }
  return result;
}

function getIconsTree(data, names) {
  const icons = data.icons;
  const aliases = data.aliases || /* @__PURE__ */ Object.create(null);
  const resolved = /* @__PURE__ */ Object.create(null);
  function resolve(name) {
    if (icons[name]) {
      return resolved[name] = [];
    }
    if (!(name in resolved)) {
      resolved[name] = null;
      const parent = aliases[name] && aliases[name].parent;
      const value = parent && resolve(parent);
      if (value) {
        resolved[name] = [parent].concat(value);
      }
    }
    return resolved[name];
  }
  (names || Object.keys(icons).concat(Object.keys(aliases))).forEach(resolve);
  return resolved;
}

function internalGetIconData(data, name, tree) {
  const icons = data.icons;
  const aliases = data.aliases || /* @__PURE__ */ Object.create(null);
  let currentProps = {};
  function parse(name2) {
    currentProps = mergeIconData(
      icons[name2] || aliases[name2],
      currentProps
    );
  }
  parse(name);
  tree.forEach(parse);
  return mergeIconData(data, currentProps);
}
function getIconData(data, name) {
  if (data.icons[name]) {
    return internalGetIconData(data, name, []);
  }
  const tree = getIconsTree(data, [name])[name];
  return tree ? internalGetIconData(data, name, tree) : null;
}

const unitsSplit = /(-?[0-9.]*[0-9]+[0-9.]*)/g;
const unitsTest = /^-?[0-9.]*[0-9]+[0-9.]*$/g;
function calculateSize(size, ratio, precision) {
  if (ratio === 1) {
    return size;
  }
  precision = precision || 100;
  if (typeof size === "number") {
    return Math.ceil(size * ratio * precision) / precision;
  }
  if (typeof size !== "string") {
    return size;
  }
  const oldParts = size.split(unitsSplit);
  if (oldParts === null || !oldParts.length) {
    return size;
  }
  const newParts = [];
  let code = oldParts.shift();
  let isNumber = unitsTest.test(code);
  while (true) {
    if (isNumber) {
      const num = parseFloat(code);
      if (isNaN(num)) {
        newParts.push(code);
      } else {
        newParts.push(Math.ceil(num * ratio * precision) / precision);
      }
    } else {
      newParts.push(code);
    }
    code = oldParts.shift();
    if (code === void 0) {
      return newParts.join("");
    }
    isNumber = !isNumber;
  }
}

function splitSVGDefs(content, tag = "defs") {
  let defs = "";
  const index = content.indexOf("<" + tag);
  while (index >= 0) {
    const start = content.indexOf(">", index);
    const end = content.indexOf("</" + tag);
    if (start === -1 || end === -1) {
      break;
    }
    const endEnd = content.indexOf(">", end);
    if (endEnd === -1) {
      break;
    }
    defs += content.slice(start + 1, end).trim();
    content = content.slice(0, index).trim() + content.slice(endEnd + 1);
  }
  return {
    defs,
    content
  };
}
function mergeDefsAndContent(defs, content) {
  return defs ? "<defs>" + defs + "</defs>" + content : content;
}
function wrapSVGContent(body, start, end) {
  const split = splitSVGDefs(body);
  return mergeDefsAndContent(split.defs, start + split.content + end);
}

const isUnsetKeyword = (value) => value === "unset" || value === "undefined" || value === "none";
function iconToSVG(icon, customisations) {
  const fullIcon = {
    ...defaultIconProps,
    ...icon
  };
  const fullCustomisations = {
    ...defaultIconCustomisations,
    ...customisations
  };
  const box = {
    left: fullIcon.left,
    top: fullIcon.top,
    width: fullIcon.width,
    height: fullIcon.height
  };
  let body = fullIcon.body;
  [fullIcon, fullCustomisations].forEach((props) => {
    const transformations = [];
    const hFlip = props.hFlip;
    const vFlip = props.vFlip;
    let rotation = props.rotate;
    if (hFlip) {
      if (vFlip) {
        rotation += 2;
      } else {
        transformations.push(
          "translate(" + (box.width + box.left).toString() + " " + (0 - box.top).toString() + ")"
        );
        transformations.push("scale(-1 1)");
        box.top = box.left = 0;
      }
    } else if (vFlip) {
      transformations.push(
        "translate(" + (0 - box.left).toString() + " " + (box.height + box.top).toString() + ")"
      );
      transformations.push("scale(1 -1)");
      box.top = box.left = 0;
    }
    let tempValue;
    if (rotation < 0) {
      rotation -= Math.floor(rotation / 4) * 4;
    }
    rotation = rotation % 4;
    switch (rotation) {
      case 1:
        tempValue = box.height / 2 + box.top;
        transformations.unshift(
          "rotate(90 " + tempValue.toString() + " " + tempValue.toString() + ")"
        );
        break;
      case 2:
        transformations.unshift(
          "rotate(180 " + (box.width / 2 + box.left).toString() + " " + (box.height / 2 + box.top).toString() + ")"
        );
        break;
      case 3:
        tempValue = box.width / 2 + box.left;
        transformations.unshift(
          "rotate(-90 " + tempValue.toString() + " " + tempValue.toString() + ")"
        );
        break;
    }
    if (rotation % 2 === 1) {
      if (box.left !== box.top) {
        tempValue = box.left;
        box.left = box.top;
        box.top = tempValue;
      }
      if (box.width !== box.height) {
        tempValue = box.width;
        box.width = box.height;
        box.height = tempValue;
      }
    }
    if (transformations.length) {
      body = wrapSVGContent(
        body,
        '<g transform="' + transformations.join(" ") + '">',
        "</g>"
      );
    }
  });
  const customisationsWidth = fullCustomisations.width;
  const customisationsHeight = fullCustomisations.height;
  const boxWidth = box.width;
  const boxHeight = box.height;
  let width;
  let height;
  if (customisationsWidth === null) {
    height = customisationsHeight === null ? "1em" : customisationsHeight === "auto" ? boxHeight : customisationsHeight;
    width = calculateSize(height, boxWidth / boxHeight);
  } else {
    width = customisationsWidth === "auto" ? boxWidth : customisationsWidth;
    height = customisationsHeight === null ? calculateSize(width, boxHeight / boxWidth) : customisationsHeight === "auto" ? boxHeight : customisationsHeight;
  }
  const attributes = {};
  const setAttr = (prop, value) => {
    if (!isUnsetKeyword(value)) {
      attributes[prop] = value.toString();
    }
  };
  setAttr("width", width);
  setAttr("height", height);
  const viewBox = [box.left, box.top, boxWidth, boxHeight];
  attributes.viewBox = viewBox.join(" ");
  return {
    attributes,
    viewBox,
    body
  };
}

const cache = /* @__PURE__ */ new WeakMap();

const $$Astro$9 = createAstro();
const $$Icon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$Icon;
  class AstroIconError extends Error {
    constructor(message) {
      super(message);
      this.hint = "";
    }
  }
  const req = Astro2.request;
  const { name = "", title, desc, "is:inline": inline = false, ...props } = Astro2.props;
  const map = cache.get(req) ?? /* @__PURE__ */ new Map();
  const i = map.get(name) ?? 0;
  map.set(name, i + 1);
  cache.set(req, map);
  const includeSymbol = !inline && i === 0;
  let [setName, iconName] = name.split(":");
  if (!setName && iconName) {
    const err = new AstroIconError(`Invalid "name" provided!`);
    throw err;
  }
  if (!iconName) {
    iconName = setName;
    setName = "local";
    if (!icons[setName]) {
      const err = new AstroIconError('Unable to load the "local" icon set!');
      throw err;
    }
    if (!(iconName in icons[setName].icons)) {
      const err = new AstroIconError(`Unable to locate "${name}" icon!`);
      throw err;
    }
  }
  const collection = icons[setName];
  if (!collection) {
    const err = new AstroIconError(`Unable to locate the "${setName}" icon set!`);
    throw err;
  }
  const iconData = getIconData(collection, iconName ?? setName);
  if (!iconData) {
    const err = new AstroIconError(`Unable to locate "${name}" icon!`);
    throw err;
  }
  const id = `ai:${collection.prefix}:${iconName ?? setName}`;
  if (props.size) {
    props.width = props.size;
    props.height = props.size;
    delete props.size;
  }
  const renderData = iconToSVG(iconData);
  const normalizedProps = { ...renderData.attributes, ...props };
  const normalizedBody = renderData.body;
  const { viewBox } = normalizedProps;
  if (includeSymbol) {
    delete normalizedProps.viewBox;
  }
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(normalizedProps)}${addAttribute(name, "data-icon")}> ${title && renderTemplate`<title>${title}</title>`} ${desc && renderTemplate`<desc>${desc}</desc>`} ${inline ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "id": id }, { "default": ($$result2) => renderTemplate`${unescapeHTML(normalizedBody)}` })}` : renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${includeSymbol && renderTemplate`<symbol${addAttribute(id, "id")}${addAttribute(viewBox, "viewBox")}>${unescapeHTML(normalizedBody)}</symbol>`}<use${addAttribute(`#${id}`, "href")}></use> ` })}`} </svg>`;
}, "/Users/pleo2/Dev/freelance/freelance-portfolio/node_modules/.pnpm/astro-icon@1.1.5/node_modules/astro-icon/components/Icon.astro", void 0);

const $$Astro$8 = createAstro();
const $$Button = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$Button;
  const {
    text,
    icon,
    iconSize = 24,
    size,
    style = "primary",
    class: className
  } = Astro2.props;
  const sizes = {
    xs: "px-2 py-1 text-xs",
    sm: "px-4 py-2 text-sm ",
    md: "px-5 py-2.5 text-lg",
    lg: "px-8 py-3 text-xl"
  };
  const buttonStyle = {
    primary: "bg-foreground/10 flex items-center justify-center inset-shadow-2xs inset-shadow-foreground/20 rounded-lg hover:text-foreground/80",
    button: "inset-shadow-2xs inset-shadow-foreground/20 text-foreground rounded-lg shadow-md hover:bg-background/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-background",
    outline: "text-foreground rounded-lg shadow-md hover:bg-background/10 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-background",
    white: "text-background bg-foreground rounded-lg shadow-md  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-background font-display font-semibold ",
    buttonLight: "bg-background/10 border border-foreground/20 text-foreground rounded-lg shadow-md hover:bg-background/20 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-background"
  };
  return renderTemplate`${maybeRenderHead()}<button${addAttribute(`hover:opacity-90  inline-flex items-center justify-center gap-2 transition-colors duration-200 cursor-pointer ${size ? sizes[size] : ""} ${buttonStyle[style]} ${className}`, "class")}> ${text && renderTemplate`<p>${text}</p>`} ${icon && renderTemplate`${renderComponent($$result, "Icon", $$Icon, { "name": icon, "size": iconSize })}`} </button>`;
}, "/Users/pleo2/Dev/freelance/freelance-portfolio/src/components/primitives/Button.astro", void 0);

const $$Astro$7 = createAstro();
const $$Link = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Link;
  Astro2.currentLocale;
  const {
    href,
    block,
    icon,
    size = "md",
    style = "primary",
    localized = true,
    class: className,
    ...rest
  } = Astro2.props;
  const sizes = {
    xs: "",
    sm: "px-4 py-2",
    md: "px-5 py-2.5 text-xl text-lg",
    lg: "px-8 py-3 text-2xl"
  };
  const iconSizes = {
    xs: 20,
    sm: 25,
    md: 30,
    lg: 40
  };
  const Tag = Astro2.props.tag || "a";
  if (Tag === "a" && !href) {
    throw new Error("The `href` prop is required when using the `a` tag.");
  }
  const styles = {
    primary: "",
    button: "button-primary bg-black text-white items-center justify-center py-2.5 px-6 text-center inline-block max-w-full rounded-md font-semibold",
    buttonLight: "button-primary bg-white text-black items-center justify-center py-3.5 px-6 text-center inline-block max-w-full rounded-md font-bold",
    outline: "hover:bg-primary-800 hover:text-white border border-primary-100 rounded-md"
  };
  return renderTemplate`${renderComponent($$result, "Tag", Tag, { "href": href?.startsWith("/") ? href : "/", "class:list": [
    block ? "flex" : "inline-flex",
    style != "primary" ? sizes[size] : null,
    style != "primary" ? "justify-center" : null,
    styles[style],
    className
  ], ...rest, "data-astro-cid-d4sasgt5": true }, { "default": ($$result2) => renderTemplate` ${renderSlot($$result2, $$slots["default"])} ${icon && renderTemplate`${renderComponent($$result2, "Icon", $$Icon, { "name": icon, "size": iconSizes[size], "data-astro-cid-d4sasgt5": true })}`}` })} `;
}, "/Users/pleo2/Dev/freelance/freelance-portfolio/src/components/primitives/Link.astro", void 0);

const $$Astro$6 = createAstro();
const $$SectionContainer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$SectionContainer;
  const { class: className, border } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`container ${border ? "bg-background" : "bg-transparent border-none"} ${border ? "border-[1px] border-foreground/20" : ""} rounded-lg p-4 ${className}`, "class")}> ${renderSlot($$result, $$slots["default"])} </div>`;
}, "/Users/pleo2/Dev/freelance/freelance-portfolio/src/components/projects/SectionContainer.astro", void 0);

const $$Astro$5 = createAstro();
const $$Divisor = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Divisor;
  const sizes = {
    xs: "mt-2",
    sm: "mt-4",
    md: "mt-6",
    lg: "mt-8"
  };
  const { class: className, space } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`divisor ${sizes[space]} h-[1px] w-full bg-foreground/10 border-foreground/20 ${className}`, "class")}></div>`;
}, "/Users/pleo2/Dev/freelance/freelance-portfolio/src/components/ui/Divisor.astro", void 0);

const $$Astro$4 = createAstro();
const $$ClientRouter = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$ClientRouter;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>${renderScript($$result, "/Users/pleo2/Dev/freelance/freelance-portfolio/node_modules/.pnpm/astro@5.5.3_@types+node@22.13.10_jiti@2.4.2_lightningcss@1.29.2_rollup@4.36.0_typescript@5.4.2_yaml@2.7.0/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/pleo2/Dev/freelance/freelance-portfolio/node_modules/.pnpm/astro@5.5.3_@types+node@22.13.10_jiti@2.4.2_lightningcss@1.29.2_rollup@4.36.0_typescript@5.4.2_yaml@2.7.0/node_modules/astro/components/ClientRouter.astro", void 0);

const $$LinearWrapper = createComponent(($$result, $$props, $$slots) => {
  const columnsClasses = [
    "line-full _20",
    "line-full _20",
    "line-full _5",
    "line-full",
    "line-full _5",
    "line-full",
    "line-full _20",
    "line-full",
    "line-full",
    "line-full _5",
    "line-full",
    "line-full",
    "line-full _5",
    "line-full _20",
    "line-full",
    "line-full _5",
    "line-full",
    "line-full",
    "line-full _20",
    "line-full _5",
    "line-full",
    "line-full",
    "line-full"
  ];
  return renderTemplate`${maybeRenderHead()}<div class="bottom-0 left-0 opacity-60 fixed right-0 top-0 pointer-events-none -z-10" data-astro-cid-egk6jp7x> <div class="absolute-lines" data-astro-cid-egk6jp7x> ${columnsClasses.map((className) => renderTemplate`<div${addAttribute(className, "class")} data-astro-cid-egk6jp7x></div>`)} </div> </div> `;
}, "/Users/pleo2/Dev/freelance/freelance-portfolio/src/components/primitives/LinearWrapper.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro$3 = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Layout;
  const {
    title = "Portfolio Freelance | Dise\xF1o y Desarrollo Web Profesional",
    description = "Servicios de dise\xF1o y desarrollo web profesional. Especializado en crear sitios web modernos, r\xE1pidos y optimizados para SEO que destacan en el mercado.",
    image = "/images/portfolio-card.png",
    // Asegúrate de crear esta imagen
    canonicalURL = Astro2.url.pathname,
    type = "website",
    publishedDate,
    author = "Tu Nombre",
    keywords = [
      "dise\xF1o web",
      "desarrollo web",
      "freelance",
      "portfolio",
      "SEO",
      "sitios web r\xE1pidos"
    ]
  } = Astro2.props;
  const formattedPublishDate = publishedDate ? publishedDate.toISOString() : (/* @__PURE__ */ new Date()).toISOString();
  const siteUrl = Astro2.site?.toString() || "https://tu-dominio.com";
  const fullCanonicalURL = new URL(canonicalURL, siteUrl).toString();
  const fullImageURL = new URL(image, siteUrl).toString();
  return renderTemplate(_a || (_a = __template(['<html lang="es"> <head><!-- Meta etiquetas b\xE1sicas --><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta name="generator"', "><!-- SEO primario --><title>", '</title><meta name="description"', '><meta name="author"', '><meta name="keywords"', '><link rel="canonical"', '><!-- Open Graph / Facebook --><meta property="og:type"', '><meta property="og:url"', '><meta property="og:title"', '><meta property="og:description"', '><meta property="og:image"', '><meta property="og:locale" content="es_ES"><!-- Twitter --><meta name="twitter:card" content="summary_large_image"><meta name="twitter:url"', '><meta name="twitter:title"', '><meta name="twitter:description"', '><meta name="twitter:image"', "><!-- Si es un art\xEDculo -->", '<!-- Favicon --><link rel="icon" type="image/svg+xml" href="/favicon.svg"><link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"><link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"><link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"><link rel="manifest" href="/site.webmanifest"><!-- Preconnect a dominios externos --><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><!-- Script para manejo del tema oscuro/claro --><script>\n            // Definimos el nombre del evento para View Transitions\n            const astroTransitionEvent = "astro:page-load";\n\n            function handleThemeChange() {\n                document.documentElement.classList.toggle(\n                    "dark",\n                    localStorage.theme === "dark" ||\n                        (!("theme" in localStorage) &&\n                            window.matchMedia("(prefers-color-scheme: dark)")\n                                .matches)\n                );\n            }\n\n            // Aplicamos el tema al cargar la p\xE1gina\n            handleThemeChange();\n\n            // Limpiamos event listeners anteriores\n            document.removeEventListener("astro:after-swap", handleThemeChange);\n            document.addEventListener("astro:after-swap", handleThemeChange);\n\n            // Aplicamos tema despu\xE9s de las transiciones de p\xE1gina\n            document.removeEventListener(\n                astroTransitionEvent,\n                handleThemeChange\n            );\n            document.addEventListener(astroTransitionEvent, handleThemeChange);\n\n            // Detect system theme changes\n            window\n                .matchMedia("(prefers-color-scheme: dark)")\n                .addEventListener("change", (e) => {\n                    localStorage.theme = e.matches ? "dark" : "light";\n                    handleThemeChange();\n                });\n        <\/script><!-- Structured Data - JSON-LD --><script type="application/ld+json">', "<\/script><!-- view transitions  -->", "", '</head> <body class="dark:bg-stone-950"> ', ' <!-- Aplicamos View Transitions a nivel de slot --> <div id="page-content" class="min-h-screen flex flex-col items-center mx-2"> ', " </div>  </body> </html>"])), addAttribute(Astro2.generator, "content"), title, addAttribute(description, "content"), addAttribute(author, "content"), addAttribute(keywords.join(", "), "content"), addAttribute(fullCanonicalURL, "href"), addAttribute(type, "content"), addAttribute(fullCanonicalURL, "content"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(fullImageURL, "content"), addAttribute(fullCanonicalURL, "content"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(fullImageURL, "content"), publishedDate && renderTemplate`<meta property="article:published_time"${addAttribute(formattedPublishDate, "content")}>`, unescapeHTML(JSON.stringify({
    "@context": "https://schema.org",
    "@type": type === "article" ? "Article" : "WebSite",
    name: title,
    description,
    image: fullImageURL,
    url: fullCanonicalURL,
    ...type === "article" && {
      author: {
        "@type": "Person",
        name: author
      },
      datePublished: formattedPublishDate
    },
    ...type === "website" && {
      potentialAction: {
        "@type": "SearchAction",
        target: `${siteUrl}search?q={search_term_string}`,
        "query-input": "required name=search_term_string"
      }
    }
  })), renderComponent($$result, "ClientRouter", $$ClientRouter, {}), renderHead(), renderComponent($$result, "LinearWrapper", $$LinearWrapper, {}), renderSlot($$result, $$slots["default"]));
}, "/Users/pleo2/Dev/freelance/freelance-portfolio/src/layouts/Layout.astro", void 0);

const $$Astro$2 = createAstro();
const $$Image = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Image;
  const { id, image, class: className } = Astro2.props;
  return renderTemplate`<!-- @ts-ignore -->${maybeRenderHead()}<img${addAttribute(image.url, "src")}${addAttribute(image.alt, "alt")}${addAttribute(`w-full h-52 object-cover rounded-2xl mb-4 md:h-96 md:rounded-xl ${className}`, "class")}>`;
}, "/Users/pleo2/Dev/freelance/freelance-portfolio/src/components/projects/Image.astro", void 0);

const $$Astro$1 = createAstro();
const $$AnimatedBackground = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$AnimatedBackground;
  const { position = "left", verticalPosition = "top" } = Astro2.props;
  const verticalClasses = {
    top: "-top-40 sm:-top-80",
    middle: "top-1/2 -translate-y-1/2",
    bottom: "bottom-0"
  };
  return renderTemplate`${maybeRenderHead()}<section${addAttribute([
    "absolute inset-x-0 -z-10 transform-gpu overflow-hidden blur-3xl",
    verticalClasses[verticalPosition]
  ], "class:list")}> <svg${addAttribute([
    "relative -z-10 h-[21.1875rem] max-w-none rotate-[30deg] sm:h-[42.375rem] animate-slide",
    position === "left" ? "left-[calc(50%-11rem)] -translate-x-1/4 sm:left-[calc(50%-30rem)]" : "right-[calc(50%-11rem)] translate-x-1/4 sm:right-[calc(50%-30rem)]"
  ], "class:list")} viewBox="0 0 1155 678"> <path fill="url(#9b2541ea-d39d-499b-bd42-aeea3e93f5ff)" fill-opacity=".3" d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"></path> <defs> <linearGradient id="9b2541ea-d39d-499b-bd42-aeea3e93f5ff" x1="1155.49" x2="-78.208" y1=".177" y2="474.645" gradientUnits="userSpaceOnUse"> <stop stop-color="var(--color-pomp-and-power)"></stop> <stop offset="1" stop-color="var(--color-desert-sand)"></stop> </linearGradient> </defs> </svg> </section>`;
}, "/Users/pleo2/Dev/freelance/freelance-portfolio/src/components/AnimatedBackground.astro", void 0);

const $$Astro = createAstro();
const $$AnimatedBackground2 = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$AnimatedBackground2;
  const {
    horizontalPosition = "right",
    verticalPosition = "bottom",
    color1 = "var(--color-pomp-and-power)",
    color2 = "var(--color-desert-sand)"
  } = Astro2.props;
  const verticalClass = {
    top: "top-0",
    middle: "top-1/2 -translate-y-1/2",
    bottom: "top-[calc(100%-13rem)] sm:top-[calc(100%-30rem)]"
  }[verticalPosition];
  const horizontalClass = {
    left: "left-[calc(50%-3rem)] sm:left-[calc(50%-36rem)]",
    right: "left-[calc(50%+3rem)] sm:left-[calc(50%+36rem)]"
  }[horizontalPosition];
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(`absolute inset-x-0 ${verticalClass} -z-10 transform-gpu overflow-hidden blur-3xl`, "class")}> <svg${addAttribute(`relative ${horizontalClass} h-[21.1875rem] max-w-none -translate-x-1/2 sm:h-[42.375rem] animate-slide`, "class")} viewBox="0 0 1155 678"> <path fill="url(#b9e4a85f-ccd5-4151-8e84-ab55c66e5aa1)" fill-opacity=".3" d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"></path> <defs> <linearGradient id="b9e4a85f-ccd5-4151-8e84-ab55c66e5aa1" x1="1155.49" x2="-78.208" y1=".177" y2="474.645" gradientUnits="userSpaceOnUse"> <stop${addAttribute(color1, "stop-color")}> <animate attributeName="stop-color"${addAttribute(`${color1}; ${color2}; ${color1}`, "values")} dur="5s" repeatCount="indefinite"></animate> </stop> <stop offset="1"${addAttribute(color2, "stop-color")}> <animate attributeName="stop-color"${addAttribute(`${color2}; ${color1}; ${color2}`, "values")} dur="5s" repeatCount="indefinite"></animate> </stop> </linearGradient> </defs> </svg> </section>`;
}, "/Users/pleo2/Dev/freelance/freelance-portfolio/src/components/AnimatedBackground2.astro", void 0);

export { $$Layout as $, $$Container as a, $$AnimatedBackground as b, $$AnimatedBackground2 as c, $$SectionContainer as d, $$Link as e, $$Button as f, $$Divisor as g, $$Image as h, $$Icon as i, projects as p };
