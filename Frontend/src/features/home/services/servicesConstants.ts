import type { Service } from "./servicesTypes";

export const SERVICES: Service[] = [
    {
        id: 1,
        slug: "desarrollo-software",

        title: "Desarrollo de Software",

        shortDescription:
            "Creamos soluciones tecnológicas personalizadas para optimizar y automatizar los procesos de tu empresa.",

        description:
            "Diseñamos y desarrollamos aplicaciones web, sistemas empresariales, APIs e integraciones que impulsan el crecimiento digital de tu organización.",

        icon: "code",

        color: "#8B5CF6",

        features: [
            { title: "Aplicaciones Web" },
            { title: "Sistemas Empresariales" },
            { title: "APIs REST" },
            { title: "Automatización" },
            { title: "Dashboards" },
        ],
    },

    {
        id: 2,
        slug: "soporte-tecnico",

        title: "Soporte Técnico",

        shortDescription:
            "Brindamos soporte preventivo y correctivo para mantener la continuidad operativa de tu empresa.",

        description:
            "Nuestro equipo especializado ofrece asistencia técnica presencial y remota para garantizar el óptimo funcionamiento de tus equipos e infraestructura.",

        icon: "support",

        color: "#8B5CF6",

        features: [
            { title: "Mesa de Ayuda" },
            { title: "Mantenimiento Preventivo" },
            { title: "Soporte Remoto" },
            { title: "Servidores" },
            { title: "Equipos de Cómputo" },
        ],
    },

    {
        id: 3,
        slug: "redes-empresariales",

        title: "Redes Empresariales",

        shortDescription:
            "Diseñamos e implementamos infraestructuras de red seguras, rápidas y escalables.",

        description:
            "Construimos redes empresariales robustas con altos estándares de disponibilidad y rendimiento.",

        icon: "network",

        color: "#8B5CF6",

        features: [
            { title: "Cableado Estructurado" },
            { title: "Switches Administrables" },
            { title: "WiFi Empresarial" },
            { title: "VPN" },
            { title: "Monitoreo de Red" },
        ],
    },

    {
        id: 4,
        slug: "cctv",

        title: "CCTV y Videovigilancia",

        shortDescription:
            "Implementamos soluciones inteligentes de videovigilancia para proteger tu organización.",

        description:
            "Diseñamos sistemas de CCTV con monitoreo remoto, grabación y control de acceso para empresas.",

        icon: "camera",

        color: "#8B5CF6",

        features: [
            { title: "Cámaras IP" },
            { title: "DVR / NVR" },
            { title: "Monitoreo Remoto" },
            { title: "Control de Acceso" },
            { title: "Analítica de Video" },
        ],
    },

    {
        id: 5,
        slug: "ciberseguridad",

        title: "Ciberseguridad",

        shortDescription:
            "Protegemos la información y la infraestructura tecnológica de tu empresa frente a amenazas digitales.",

        description:
            "Implementamos soluciones de seguridad informática para minimizar riesgos y fortalecer la continuidad del negocio.",

        icon: "shield",

        color: "#8B5CF6",

        features: [
            { title: "Firewall" },
            { title: "Antivirus Empresarial" },
            { title: "Auditorías" },
            { title: "Hardening" },
            { title: "Backups" },
        ],
    },

    {
        id: 6,
        slug: "consultoria-ti",

        title: "Consultoría TI",

        shortDescription:
            "Acompañamos la transformación digital de tu empresa mediante asesoría tecnológica especializada.",

        description:
            "Analizamos la infraestructura tecnológica de tu organización para proponer soluciones estratégicas orientadas al crecimiento.",

        icon: "briefcase",

        color: "#8B5CF6",

        features: [
            { title: "Transformación Digital" },
            { title: "Infraestructura" },
            { title: "Cloud Computing" },
            { title: "Optimización de Procesos" },
            { title: "Planeación Estratégica" },
        ],
    },
];