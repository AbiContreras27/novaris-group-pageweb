import type { ServiceDetailData } from "../serviceDetailTypes";

export const cctv: ServiceDetailData = {
    slug: "cctv",

    title: "CCTV y Videovigilancia Inteligente",

    subtitle:
        "Protegemos personas, activos e instalaciones mediante soluciones avanzadas de videovigilancia empresarial.",

    description:
        "Diseñamos e implementamos sistemas de CCTV con cámaras IP, control de acceso e integración con infraestructura tecnológica para garantizar la seguridad de su organización.",

    icon: "camera",

    benefits: [
        {
            title: "Alta Resolución",
            description:
                "Imágenes en Full HD y 4K para una identificación precisa.",
        },
        {
            title: "Escalabilidad",
            description:
                "Infraestructura preparada para crecer junto con su empresa.",
        },
    ],

    process: [
        {
            step: 1,
            title: "Inspección",
            description: "Evaluación de riesgos e infraestructura.",
        },
        {
            step: 2,
            title: "Diseño",
            description: "Ubicación estratégica de cámaras y equipos.",
        },
        {
            step: 3,
            title: "Instalación",
            description: "Implementación profesional del sistema.",
        },
        {
            step: 4,
            title: "Configuración",
            description: "Grabación, monitoreo y acceso remoto.",
        },
        {
            step: 5,
            title: "Capacitación",
            description: "Entrenamiento al personal encargado.",
        },
    ],

    technologies: [
        { name: "Hikvision" },
        { name: "Dahua" },
        { name: "Axis" },
        { name: "NVR" },
        { name: "Cámaras IP" },
        { name: "PoE" },
        { name: "Control de Acceso" },
    ],

    cta: {
        title: "Proteja su empresa con tecnología inteligente",
        description:
            "Solicite una evaluación y diseñaremos un sistema de videovigilancia adaptado a sus necesidades.",
        button: "Solicitar Cotización",
    },
};