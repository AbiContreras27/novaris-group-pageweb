import type { ServiceDetailData } from "../serviceDetailTypes";

export const soporteTecnico: ServiceDetailData = {
    slug: "soporte-tecnico",

    title: "Soporte Técnico Empresarial",

    subtitle:
        "Garantizamos la continuidad operativa de tu empresa mediante soporte técnico preventivo, correctivo y remoto.",

    description:
        "Nuestro equipo especializado brinda asistencia técnica para estaciones de trabajo, servidores, infraestructura tecnológica y usuarios finales, asegurando tiempos de respuesta rápidos y una operación estable.",

    icon: "support",

    benefits: [
        {
            title: "Respuesta Rápida",
            description:
                "Atención oportuna para minimizar tiempos de inactividad.",
        },
        {
            title: "Monitoreo Preventivo",
            description:
                "Detectamos incidentes antes de que afecten la operación.",
        },
        {
            title: "Soporte Remoto y Presencial",
            description:
                "Asistencia según las necesidades de cada organización.",
        },
        {
            title: "Gestión de Incidentes",
            description:
                "Procesos estructurados basados en buenas prácticas de TI.",
        },
    ],

    process: [
        {
            step: 1,
            title: "Recepción",
            description: "Registro y clasificación del incidente.",
        },
        {
            step: 2,
            title: "Diagnóstico",
            description: "Análisis técnico de la causa raíz.",
        },
        {
            step: 3,
            title: "Solución",
            description: "Aplicación de acciones correctivas.",
        },
        {
            step: 4,
            title: "Validación",
            description: "Confirmación del correcto funcionamiento.",
        },
        {
            step: 5,
            title: "Seguimiento",
            description: "Cierre y documentación del caso.",
        },
    ],

    technologies: [
        { name: "Windows Server" },
        { name: "Linux" },
        { name: "Active Directory" },
        { name: "Microsoft 365" },
        { name: "AnyDesk" },
        { name: "TeamViewer" },
        { name: "GLPI" },
        { name: "Zabbix" },
    ],

    cta: {
        title: "Mantén tu infraestructura siempre operativa",
        description:
            "Nuestro equipo está listo para ayudarte con soporte especializado.",
        button: "Solicitar Soporte",
    },
};