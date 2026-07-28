import type {
    ContactInfo,
    ContactSocial,
    ContactFormField,
    ContactPageContent,
} from "./contactTypes";

export const CONTACT_CONTENT: ContactPageContent = {
    badge: "Contáctanos",

    title: "Hablemos sobre",

    highlight: "tu próximo proyecto",

    description:
        "Nuestro equipo está listo para ayudarte a transformar tu empresa mediante soluciones tecnológicas innovadoras. Cuéntanos qué necesitas y diseñaremos la mejor estrategia para tu organización.",

    button: "Enviar Solicitud",
};

export const CONTACT_INFO: ContactInfo[] = [
    {
        title: "Correo",
        value: "info@novarisgroup.com",
        href: "mailto:info@novarisgroup.com",
    },
    {
        title: "Teléfono",
        value: "+57 321 458 99 43",
        href: "https://wa.me/573214589943",
    },
    {
        title: "Ubicación",
        value: "Medellín, Colombia",
    },
];

export const CONTACT_FORM_FIELDS: ContactFormField[] = [
    {
        name: "name",
        label: "Nombre",
        type: "text",
        placeholder: "Tu nombre",
        required: true,
    },
    {
        name: "company",
        label: "Empresa",
        type: "text",
        placeholder: "Nombre de tu empresa",
    },
    {
        name: "email",
        label: "Correo",
        type: "email",
        placeholder: "correo@empresa.com",
        required: true,
    },
    {
        name: "phone",
        label: "Teléfono",
        type: "tel",
        placeholder: "+57 300 000 0000",
    },
    {
        name: "service",
        label: "Servicio de interés",
        type: "select",
        placeholder: "",
    },
    {
        name: "message",
        label: "Proyecto",
        type: "textarea",
        placeholder:
            "Cuéntanos cómo podemos ayudarte...",
        required: true,
    },
];

export const CONTACT_SOCIALS: ContactSocial[] = [
    {
        name: "LinkedIn",
        href: "#",
        icon: "linkedin",
    },
    {
        name: "Instagram",
        href: "#",
        icon: "instagram",
    },
    {
        name: "Facebook",
        href: "#",
        icon: "facebook",
    },
];