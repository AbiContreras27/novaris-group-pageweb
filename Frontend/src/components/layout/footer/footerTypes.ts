export interface FooterLink {
    label: string;
    href: string;
}

export interface FooterSection {
    title: string;
    links: FooterLink[];
}

export interface FooterContact {
    icon: "mail" | "phone" | "location";
    label: string;
    value: string;
    href?: string;
}

export interface FooterSocial {
    icon: "linkedin" | "github" | "instagram" | "facebook" | "whatsapp";
    href: string;
}