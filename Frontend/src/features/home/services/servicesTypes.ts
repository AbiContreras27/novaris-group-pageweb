export interface ServiceFeature {
    title: string;
}

export type ServiceIcon =
    | "code"
    | "support"
    | "network"
    | "camera"
    | "shield"
    | "briefcase";

export interface Service {
    id: number;
    slug: string;

    title: string;
    shortDescription: string;
    description: string;

    icon: ServiceIcon;

    color: string;

    features: ServiceFeature[];
}