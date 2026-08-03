import type { Metadata } from "next";
import { generateMetadata } from "@/lib/seo/seo";

import { About } from "@/features/home/about";

export const metadata: Metadata = generateMetadata({
  title: "Sobre Nosotros",
  description:
    "Conoce Novaris Group, una empresa especializada en soluciones tecnológicas empresariales con enfoque en innovación, calidad y transformación digital.",
  path: "/nosotros",
});

export default function NosotrosPage() {
  return <About />;
}