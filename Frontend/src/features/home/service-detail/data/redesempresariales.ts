import type { ServiceDetailData } from "../serviceDetailTypes";

export const redesEmpresariales: ServiceDetailData = {
    slug: "redes-empresariales",

    title: "Redes Empresariales",

    subtitle:
        "Diseñamos e implementamos infraestructuras de red seguras, escalables y de alto rendimiento.",

    description:
        "Construimos soluciones de conectividad adaptadas a las necesidades de cada organización, garantizando disponibilidad, estabilidad y seguridad en la comunicación de datos.",

    icon: "network",

    benefits: [
        {
            title: "Alta Disponibilidad",
            description: "Infraestructura preparada para operar 24/7.",
        },
        {
            title: "Escalabilidad",
            description: "Redes preparadas para crecer con tu empresa.",
        },
        {
            title: "Mayor Seguridad",
            description: "Segmentación y protección del tráfico de red.",
        },
        {
            title: "Optimización",
            description: "Mejor desempeño y administración centralizada.",
        },
    ],

    process: [
        {
            step: 1,
            title: "Levantamiento",
            description: "Evaluación de la infraestructura actual.",
        },
        {
            step: 2,
            title: "Diseño",
            description: "Arquitectura lógica y física.",
        },
        {
            step: 3,
            title: "Implementación",
            description: "Configuración de equipos y cableado.",
        },
        {
            step: 4,
            title: "Pruebas",
            description: "Validación de rendimiento y disponibilidad.",
        },
    ],

    technologies: [
        { name: "Cisco" },
        { name: "MikroTik" },
        { name: "Fortinet" },
        { name: "VLAN" },
        { name: "VPN" },
        { name: "WiFi 6" },
    ],

    cta: {
        title: "Conecta tu empresa con infraestructura de alto nivel",
        description:
            "Diseñamos redes empresariales robustas y seguras.",
        button: "Solicitar Asesoría",
    },
};