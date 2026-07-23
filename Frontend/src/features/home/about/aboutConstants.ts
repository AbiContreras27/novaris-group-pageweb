import {
    Rocket,
    ShieldCheck,
    Handshake,
    Lightbulb,
    Users,
    Target,
    BadgeCheck,
    HeartHandshake,
} from "lucide-react";

import type {
    AboutCTAData,
    AboutHeroData,
    AboutMissionVisionData,
    AboutReason,
    AboutStat,
    AboutStoryData,
    AboutValue,
} from "./aboutTypes";

export const ABOUT_HERO: AboutHeroData = {
    badge: "Sobre Nosotros",

    title: "Construimos el futuro de las empresas mediante",

    highlight: "soluciones tecnológicas inteligentes.",

    description:
        "En Novaris Group impulsamos la transformación digital de organizaciones mediante desarrollo de software, infraestructura tecnológica, ciberseguridad y consultoría especializada.",

    primaryButton: "Nuestros Servicios",

    secondaryButton: "Contáctanos",
};

export const ABOUT_STORY: AboutStoryData = {
    title: "Nuestra Historia",

    description: [
        "Novaris Group nace con el propósito de ofrecer soluciones tecnológicas integrales que impulsen el crecimiento y la competitividad de las empresas.",

        "Creemos que la tecnología debe ser una herramienta estratégica para optimizar procesos, fortalecer la seguridad y acelerar la innovación.",

        "Nuestro compromiso es acompañar a cada cliente con soluciones modernas, escalables y adaptadas a las necesidades reales de su organización.",
    ],
};

export const ABOUT_MISSION: AboutMissionVisionData = {
    title: "Nuestra Misión",

    description:
        "Impulsar el crecimiento de nuestros clientes mediante soluciones tecnológicas innovadoras, seguras y eficientes, ofreciendo un servicio cercano, estratégico y de alta calidad.",
};

export const ABOUT_VISION: AboutMissionVisionData = {
    title: "Nuestra Visión",

    description:
        "Ser una empresa referente en Latinoamérica por la excelencia en soluciones tecnológicas, innovación continua y compromiso con el éxito de nuestros clientes.",
};

export const ABOUT_VALUES: AboutValue[] = [
    {
        icon: Lightbulb,
        title: "Innovación",
        description:
            "Buscamos constantemente nuevas formas de generar valor mediante la tecnología.",
    },
    {
        icon: ShieldCheck,
        title: "Seguridad",
        description:
            "Protegemos la información y la infraestructura tecnológica de nuestros clientes.",
    },
    {
        icon: Handshake,
        title: "Compromiso",
        description:
            "Construimos relaciones basadas en confianza, responsabilidad y resultados.",
    },
    {
        icon: BadgeCheck,
        title: "Calidad",
        description:
            "Trabajamos bajo altos estándares para entregar soluciones confiables y eficientes.",
    },
    {
        icon: Users,
        title: "Trabajo en Equipo",
        description:
            "La colaboración impulsa mejores ideas y mejores resultados.",
    },
    {
        icon: Target,
        title: "Orientación al Cliente",
        description:
            "Cada proyecto se desarrolla pensando en los objetivos y necesidades del cliente.",
    },
];

export const ABOUT_REASONS: AboutReason[] = [
    {
        icon: Rocket,
        title: "Soluciones a la Medida",
        description:
            "Diseñamos proyectos adaptados a las necesidades específicas de cada organización.",
    },
    {
        icon: ShieldCheck,
        title: "Tecnología Segura",
        description:
            "Implementamos soluciones con altos estándares de seguridad y buenas prácticas.",
    },
    {
        icon: HeartHandshake,
        title: "Acompañamiento Continuo",
        description:
            "Brindamos soporte y asesoría durante todas las etapas del proyecto.",
    },
    {
        icon: Users,
        title: "Equipo Especializado",
        description:
            "Profesionales comprometidos con la innovación y la excelencia tecnológica.",
    },
];

export const ABOUT_STATS: AboutStat[] = [
    {
        value: "6",
        label: "Servicios Especializados",
    },
    {
        value: "100%",
        label: "Soluciones Personalizadas",
    },
    {
        value: "24/7",
        label: "Soporte Tecnológico",
    },
    {
        value: "Colombia",
        label: "Cobertura Inicial",
    },
];

export const ABOUT_CTA: AboutCTAData = {
    title: "Impulsemos juntos la transformación digital de tu empresa",

    description:
        "Nuestro equipo está preparado para diseñar soluciones tecnológicas que generen resultados reales para tu organización.",

    button: "Solicitar Cotización",
};