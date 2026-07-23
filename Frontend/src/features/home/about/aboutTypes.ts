import type { LucideIcon } from "lucide-react";

export interface AboutHeroData {
    badge: string;
    title: string;
    highlight: string;
    description: string;
    primaryButton: string;
    secondaryButton: string;
}

export interface AboutStoryData {
    title: string;
    description: string[];
}

export interface AboutMissionVisionData {
    title: string;
    description: string;
}

export interface AboutValue {
    icon: LucideIcon;
    title: string;
    description: string;
}

export interface AboutReason {
    icon: LucideIcon;
    title: string;
    description: string;
}

export interface AboutStat {
    value: string;
    label: string;
}

export interface AboutCTAData {
    title: string;
    description: string;
    button: string;
}