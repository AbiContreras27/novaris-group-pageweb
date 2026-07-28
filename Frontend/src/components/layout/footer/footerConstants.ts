import type {
    FooterSection,
    FooterContact,
    FooterSocial,
} from "./footerTypes";

export const FOOTER_BRAND = {
    name: "NOVARIS GROUP",

    description:
        "Transformamos empresas mediante soluciones tecnológicas inteligentes, infraestructura TI y desarrollo de software a la medida.",
};

export const FOOTER_NAVIGATION: FooterSection = {
    title: "Empresa",

    links: [
        {
            label: "Inicio",
            href: "/",
        },
        {
            label: "Servicios",
            href: "/#servicios",
        },
        {
            label: "Nosotros",
            href: "/nosotros",
        },
        {
            label: "Contacto",
            href: "/contacto",
        },
    ],
};

export const FOOTER_SERVICES: FooterSection = {
    title: "Servicios",

    links: [
        {
            label: "Desarrollo de Software",
            href: "/servicios/desarrollo-software",
        },
        {
            label: "Soporte Técnico",
            href: "/servicios/soporte-tecnico",
        },
        {
            label: "Redes Empresariales",
            href: "/servicios/redes-empresariales",
        },
        {
            label: "CCTV",
            href: "/servicios/cctv",
        },
        {
            label: "Ciberseguridad",
            href: "/servicios/ciberseguridad",
        },
        {
            label: "Consultoría TI",
            href: "/servicios/consultoria-ti",
        },
    ],
};

export const FOOTER_CONTACT: FooterContact[] = [
    {
        icon: "mail",
        label: "Correo",
        value: "info@novarisgroup.com",
        href: "mailto:info@novarisgroup.com",
    },
    {
        icon: "phone",
        label: "WhatsApp",
        value: "+57 321 458 99 43",
        href: "https://wa.me/573214589943",
    },
    {
        icon: "location",
        label: "Ubicación",
        value: "Medellín, Colombia",
    },
];

export const FOOTER_SOCIAL: FooterSocial[] = [
    {
        icon: "linkedin",
        href: "#",
    },
    {
        icon: "github",
        href: "#",
    },
    {
        icon: "instagram",
        href: "#",
    },
    {
        icon: "facebook",
        href: "#",
    },
    {
        icon: "whatsapp",
        href: "https://wa.me/573214589943",
    },
];