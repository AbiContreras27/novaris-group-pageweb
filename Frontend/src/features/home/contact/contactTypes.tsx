export interface ContactInfo {
  title: string;
  value: string;
  href?: string;
}

export interface ContactSocial {
  name: string;
  href: string;
  icon: string;
}

export interface ContactFormField {
  name: string;
  label: string;
  type: "text" | "email" | "tel" | "textarea" | "select";
  placeholder: string;
  required?: boolean;
}

export interface ContactPageContent {
  badge: string;
  title: string;
  highlight: string;
  description: string;
  button: string;
}