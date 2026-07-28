import { About } from "@/features/home/about";
import { Hero } from "@/features/home/hero";
import { Services } from "@/features/home/services";

import type { Metadata } from "next";
import { generateMetadata } from "@/lib/seo/seo";

export const metadata: Metadata = generateMetadata({
  title: "Inicio",
  description:
    "Soluciones tecnológicas empresariales: desarrollo de software, infraestructura TI, redes, CCTV y ciberseguridad.",
  path: "/",
});

export default function Home() {
  return (
    <>
      <Hero />

      <Services />
      
    </>
  );
}