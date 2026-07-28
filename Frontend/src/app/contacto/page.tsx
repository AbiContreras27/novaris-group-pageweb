import type { Metadata } from "next";
import { generateMetadata } from "@/lib/seo/seo";

import { Contact } from "@/features/home/contact";

export const metadata: Metadata = generateMetadata({
  title: "Contacto",
  description:
    "Solicita una asesoría con Novaris Group. Nuestro equipo está listo para ayudarte en proyectos de software, infraestructura TI, redes, CCTV y ciberseguridad.",
  path: "/contacto",
});

export default function ContactoPage() {
  return <Contact />;
}