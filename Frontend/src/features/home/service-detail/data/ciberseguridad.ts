import type { ServiceDetailData } from "../serviceDetailTypes";

export const ciberseguridad: ServiceDetailData = {
    slug: "ciberseguridad",

    title: "Ciberseguridad Empresarial",

    subtitle:
        "Protegemos la infraestructura tecnológica y la información crítica de su empresa frente a amenazas digitales.",

    description:
        "Implementamos soluciones de seguridad informática que reducen riesgos, fortalecen la continuidad del negocio y garantizan el cumplimiento de buenas prácticas internacionales.",

    icon: "shield",

    benefits: [
        {
            title: "Protección Integral",
            description:
                "Seguridad para servidores, estaciones de trabajo y redes.",
        },
        {
            title: "Prevención",
            description:
                "Identificación proactiva de vulnerabilidades.",
        },
        {
            title: "Continuidad",
            description:
                "Planes de respaldo y recuperación ante desastres.",
        },
        {
            title: "Cumplimiento",
            description:
                "Buenas prácticas alineadas con estándares internacionales.",
        },
    ],

    process: [
        {
            step: 1,
            title: "Diagnóstico",
            description: "Evaluación de vulnerabilidades.",
        },
        {
            step: 2,
            title: "Diseño",
            description: "Definición de la estrategia de seguridad.",
        },
        {
            step: 3,
            title: "Implementación",
            description: "Configuración de controles y políticas.",
        },
        {
            step: 4,
            title: "Monitoreo",
            description: "Supervisión continua de eventos.",
        },
        {
            step: 5,
            title: "Mejora Continua",
            description: "Actualización permanente de la seguridad.",
        },
    ],

    technologies: [
        { name: "Fortinet" },
        { name: "Sophos" },
        { name: "Microsoft Defender" },
        { name: "EDR" },
        { name: "Firewall" },
        { name: "VPN" },
        { name: "Backup" },
        { name: "Zero Trust" },
    ],

    cta: {
        title: "Fortalezca la seguridad de su empresa",
        description:
            "Proteja su información mediante soluciones modernas de ciberseguridad.",
        button: "Hablar con un Especialista",
    },
};