import type { ServiceIcon } from "@/features/home/services/servicesTypes";

export interface ServiceBenefit {
    title: string;
    description: string;
}

export interface ServiceProcessStep {
    step: number;
    title: string;
    description: string;
}

export interface ServiceTechnology {
    name: string;
}

export interface ServiceCTAData {
    title: string;
    description: string;
    button: string;
}

export interface ServiceDetailData {
    slug: string;

    title: string;

    subtitle: string;

    description: string;

    icon: ServiceIcon;

    image?: string;

    benefits: ServiceBenefit[];

    process: ServiceProcessStep[];

    technologies: ServiceTechnology[];

    cta: ServiceCTAData;
}