import type { ServiceDetailData } from "./serviceDetailTypes";

export const SERVICE_DETAILS: ServiceDetailData[] = [
    {
        slug: "desarrollo-software",

        title: "Desarrollo de Software",

        subtitle:
            "Creamos soluciones digitales personalizadas para optimizar y automatizar los procesos de tu empresa.",

        description:
            "En Novaris Group desarrollamos aplicaciones web, plataformas empresariales, APIs, sistemas administrativos e integraciones modernas utilizando tecnologías de última generación para impulsar la transformación digital de nuestros clientes.",

        icon: "code",

        benefits: [
            {
                title: "Soluciones Personalizadas",
                description:
                    "Cada sistema es diseñado de acuerdo con las necesidades específicas de tu empresa.",
            },
            {
                title: "Escalabilidad",
                description:
                    "Arquitecturas preparadas para crecer junto con tu negocio.",
            },
            {
                title: "Seguridad",
                description:
                    "Implementamos buenas prácticas para proteger tu información.",
            },
            {
                title: "Automatización",
                description:
                    "Reducimos tareas repetitivas mediante procesos inteligentes.",
            },
        ],

        process: [
            {
                step: 1,
                title: "Análisis",
                description:
                    "Identificamos necesidades y objetivos del proyecto.",
            },
            {
                step: 2,
                title: "Diseño",
                description:
                    "Diseñamos la arquitectura y experiencia del sistema.",
            },
            {
                step: 3,
                title: "Desarrollo",
                description:
                    "Construimos la solución utilizando tecnologías modernas.",
            },
            {
                step: 4,
                title: "Pruebas",
                description:
                    "Validamos el funcionamiento antes del despliegue.",
            },
            {
                step: 5,
                title: "Implementación",
                description:
                    "Publicamos el sistema y acompañamos su puesta en marcha.",
            },
        ],

        technologies: [
            { name: "Next.js" },
            { name: "React" },
            { name: "NestJS" },
            { name: "Node.js" },
            { name: "TypeScript" },
            { name: "PostgreSQL" },
            { name: "Docker" },
            { name: "Linux" },
            { name: "AWS" },
        ],

        cta: {
            title: "¿Listo para transformar tu empresa?",
            description:
                "Conversemos sobre tu proyecto y construyamos una solución tecnológica a la medida.",
            button: "Solicitar Cotización",
        },
    },
];