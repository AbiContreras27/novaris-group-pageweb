import type { LucideIcon } from "lucide-react";

export interface HeroContentData {
    badge: string;
    title: string;
    highlight: string;
    description: string;
    primaryButton: string;
    secondaryButton: string;
}

export interface HeroHighlight {
    icon: LucideIcon;
    label: string;
}

export interface FloatingCardData {
    icon: LucideIcon;
    title: string;
    subtitle: string;
    delay?: number;
}

export interface DashboardStat {
    label: string;
    value: string;
}

export interface ChartBar {
    value: number;
}