// Types definition for project data
export interface ProjectImage {
  url: string;
  alt: string;
}

export interface Project {
  id: number;
  title: string;
  slug: string;
  tags: string[];
  client: string;
  description: string;
  fullDescription: string;
  image: ProjectImage;
  allImages: ProjectImage[];
  developmentCredits: string;
  date: string;
}

// Projects data
export const projects: Project[] = [
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
    tags: ["Diseño UX/UI", "Desarrollo Web", "SEO"],
    client: "Corporación Innovadora",
    description: "Rediseño completo del sitio web corporativo con enfoque en mejorar la experiencia de usuario y optimización para motores de búsqueda.",
    fullDescription: "Rediseño completo de un sitio web corporativo obsoleto. El nuevo diseño se enfoca en mejorar la experiencia de usuario, facilitar la navegación y destacar los servicios clave de la empresa. Incluye optimización SEO completa que resultó en un aumento del 45% en tráfico orgánico.",
    image: {
      url: "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      alt: "Sitio web corporativo moderno en diferentes dispositivos"
    }
  }
];
