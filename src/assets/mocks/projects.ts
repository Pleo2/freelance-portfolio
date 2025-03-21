// Types definition for project data
export interface ProjectImage {
    url: string;
    alt: string;
}

export interface Project {
    id: number;
    title: string;
    slug: string;
    url: string;
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
        developmentCredits:
            "Desarrollado por el autor en colaboración con la empresa de desarrollo web <a href='https://www.iondigital.dev/' target='_blank' rel='noopener noreferrer'>ION Digital</a>.",
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
        description:
            "Diseño y desarrollo de un sitio web e-commerce completo con integración de pagos, gestión de inventario y panel de administración personalizado.",
        fullDescription:
            "Desarrollo de una plataforma e-commerce moderna con funcionalidades avanzadas de búsqueda, filtrado de productos, carrito de compras optimizado y múltiples opciones de pago. El sitio incluye un panel administrativo completo para gestión de productos, pedidos y clientes.",
        image: {
            url: "https://images.pexels.com/photos/1242348/pexels-photo-1242348.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            alt: "Plataforma e-commerce responsive con interfaz de usuario moderna"
        }
    },
    {
        id: 2,
        developmentCredits:
            "Desarrollado por el autor en colaboración con la empresa de desarrollo web <a href='https://www.iondigital.dev/' target='_blank' rel='noopener noreferrer'>ION Digital</a>.",
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
        description:
            "Desarrollo de una aplicación web para gestión empresarial con múltiples módulos para diferentes departamentos y niveles de acceso.",
        fullDescription:
            "Creación de una aplicación web completa para la gestión interna de una empresa. Incluye módulos para recursos humanos, finanzas, proyectos y clientes. Sistema de roles y permisos avanzado con analíticas en tiempo real y generación de informes personalizados.",
        image: {
            url: "https://images.pexels.com/photos/1242338/pexels-photo-1242338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            alt: "Dashboard de gestión empresarial con gráficos interactivos"
        }
    },
    {
        id: 3,
        developmentCredits:
            "Desarrollado por el autor en colaboración con la empresa de desarrollo web <a href='https://www.iondigital.dev/' target='_blank' rel='noopener noreferrer'>ION Digital</a>.",
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
        description:
            "Rediseño completo del sitio web corporativo con enfoque en mejorar la experiencia de usuario y optimización para motores de búsqueda.",
        fullDescription:
            "Rediseño completo de un sitio web corporativo obsoleto. El nuevo diseño se enfoca en mejorar la experiencia de usuario, facilitar la navegación y destacar los servicios clave de la empresa. Incluye optimización SEO completa que resultó en un aumento del 45% en tráfico orgánico.",
        image: {
            url: "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            alt: "Sitio web corporativo moderno en diferentes dispositivos"
        }
    },
    {
        id: 4,
        developmentCredits:
            "Desarrollado por el autor en colaboración con la empresa de desarrollo web <a href='https://www.iondigital.dev/' target='_blank' rel='noopener noreferrer'>ION Digital</a>.",
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
        description:
            "Desarrollo de una aplicación móvil para seguimiento de rutinas de ejercicio, nutrición y progreso personal en el fitness.",
        fullDescription:
            "Creación de una aplicación móvil completa para el seguimiento del fitness personal. Incluye funcionalidades como creación de rutinas personalizadas, seguimiento de nutrición, integración con dispositivos wearables, y análisis de progreso con gráficos detallados. La app utiliza gamificación para mantener a los usuarios motivados.",
        image: {
            url: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            alt: "Aplicación móvil de fitness en diferentes dispositivos"
        }
    },
    {
        id: 5,
        developmentCredits:
            "Desarrollado por el autor en colaboración con la empresa de desarrollo web <a href='https://www.iondigital.dev/' target='_blank' rel='noopener noreferrer'>ION Digital</a>.",
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
        description:
            "Desarrollo de una plataforma de aprendizaje en línea con sistema de gestión de contenidos, evaluaciones y seguimiento de progreso.",
        fullDescription:
            "Implementación de una plataforma educativa completa con funcionalidades avanzadas como videoconferencias en tiempo real, sistema de evaluación automatizado, seguimiento de progreso del estudiante y análisis de rendimiento. Incluye integración con sistemas de pago y certificación digital.",
        image: {
            url: "https://images.pexels.com/photos/8439094/pexels-photo-8439094.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            alt: "Plataforma de e-learning moderna y responsive"
        }
    },
    {
        id: 6,
        developmentCredits:
            "Desarrollado por el autor en colaboración con la empresa de desarrollo web <a href='https://www.iondigital.dev/' target='_blank' rel='noopener noreferrer'>ION Digital</a>.",
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
        description:
            "Desarrollo de un sistema IoT para monitoreo y control de maquinaria industrial con análisis de datos en tiempo real.",
        fullDescription:
            "Implementación de una solución IoT industrial que permite el monitoreo y control remoto de maquinaria. El sistema incluye sensores conectados, procesamiento de datos en tiempo real, alertas predictivas y un dashboard completo para visualización y control. La solución ha permitido reducir el tiempo de inactividad en un 30% y optimizar el mantenimiento preventivo.",
        image: {
            url: "https://images.pexels.com/photos/5473298/pexels-photo-5473298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            alt: "Dashboard de control IoT industrial"
        }
    }
];
