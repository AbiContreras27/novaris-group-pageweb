import type {
    FloatingCardData,
    HeroContentData,
    HeroHighlight,
    DashboardStat,
    ChartBar,
} from "./heroTypes";

import {
    Code2,
    ShieldCheck,
    Globe,
    Laptop,
    Server,
    Wifi,
    MonitorSmartphone,
} from "lucide-react";

export const HERO_CONTENT: HeroContentData = {
    badge: "Innovación Tecnológica",

    title: "Impulsamos el crecimiento de tu empresa con",

    highlight: "soluciones tecnológicas inteligentes.",

    description:
        "Desarrollamos software, implementamos infraestructura tecnológica, redes empresariales, ciberseguridad y soporte TI para empresas que buscan crecer mediante soluciones innovadoras.",

    primaryButton: "Solicitar Cotización",

    secondaryButton: "Nuestros Servicios",
};

export const HERO_HIGHLIGHTS: HeroHighlight[] = [
    {
        icon: Code2,
        label: "Desarrollo de Software",
    },
    {
        icon: Globe,
        label: "Redes Empresariales",
    },
    {
        icon: Laptop,
        label: "Soporte Técnico",
    },
    {
        icon: ShieldCheck,
        label: "Ciberseguridad",
    },
];

export const FLOATING_CARDS: FloatingCardData[] = [
    {
        icon: ShieldCheck,
        title: "Seguridad Activa",
        subtitle: "Firewall Empresarial",
        delay: 0,
    },
    {
        icon: Server,
        title: "12 Servidores",
        subtitle: "Infraestructura",
        delay: 1,
    },
    {
        icon: Wifi,
        title: "Red Empresarial",
        subtitle: "Alta Disponibilidad",
        delay: 2,
    },
    {
        icon: MonitorSmartphone,
        title: "Soporte 24/7",
        subtitle: "Mesa de Ayuda",
        delay: 3,
    },
];

export const DASHBOARD_STATS: DashboardStat[] = [
    {
        label: "Disponibilidad",
        value: "99.9%",
    },
    {
        label: "Infraestructura",
        value: "Online",
    },
    {
        label: "Backups",
        value: "100%",
    },
    {
        label: "Seguridad",
        value: "Protegida",
    },
];

export const DASHBOARD_CHART: ChartBar[] = [
    { value: 35 },
    { value: 60 },
    { value: 45 },
    { value: 75 },
    { value: 55 },
    { value: 82 },
    { value: 65 },
    { value: 95 },
];