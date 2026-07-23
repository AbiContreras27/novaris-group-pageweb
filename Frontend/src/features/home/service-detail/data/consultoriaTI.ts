import type { ServiceDetailData } from "../serviceDetailTypes";

export const consultoriaTI: ServiceDetailData = {
    slug: "consultoria-ti",

    title: "Consultoría Estratégica en TI",

    subtitle:
        "Impulsamos la transformación digital mediante asesoría tecnológica especializada.",

    description:
        "Acompañamos a las organizaciones en la toma de decisiones estratégicas relacionadas con infraestructura tecnológica, modernización de procesos, cloud computing y gobierno de TI.",

    icon: "briefcase",

    benefits: [
        {
            title: "Visión Estratégica",
            description:
                "Alineamos la tecnología con los objetivos del negocio.",
        },
        {
            title: "Optimización",
            description:
                "Reducimos costos mediante procesos más eficientes.",
        },
        {
            title: "Innovación",
            description:
                "Incorporamos tecnologías modernas para impulsar el crecimiento.",
        },
        {
            title: "Escalabilidad",
            description:
                "Planeamos infraestructuras preparadas para el futuro.",
        },
    ],

    process: [
        {
            step: 1,
            title: "Diagnóstico",
            description: "Evaluación del estado tecnológico.",
        },
        {
            step: 2,
            title: "Planeación",
            description: "Definición del roadmap tecnológico.",
        },
        {
            step: 3,
            title: "Implementación",
            description: "Ejecución de iniciativas estratégicas.",
        },
        {
            step: 4,
            title: "Optimización",
            description: "Medición y mejora continua.",
        },
        {
            step: 5,
            title: "Acompañamiento",
            description: "Seguimiento permanente del crecimiento.",
        },
    ],

    technologies: [
        { name: "Microsoft Azure" },
        { name: "AWS" },
        { name: "Google Cloud" },
        { name: "Docker" },
        { name: "Kubernetes" },
        { name: "Power BI" },
        { name: "Microsoft 365" },
        { name: "ITIL" },
    ],

    cta: {
        title: "Lleve su empresa al siguiente nivel",
        description:
            "Convirtamos la tecnología en una ventaja competitiva para su organización.",
        button: "Solicitar Consultoría",
    },
};