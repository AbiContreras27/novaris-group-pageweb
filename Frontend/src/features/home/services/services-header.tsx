import { Typography } from "@/components/ui";
import { Heading } from "@/components/ui/heading";

export function ServicesHeader() {
  return (
    <div className="mx-auto mb-20 max-w-3xl text-center">

      <span className="mb-4 inline-flex rounded-full border border-[#3E003F] bg-[#3E003F]/10 px-4 py-2 text-sm font-medium text-[#B48EFF]">
        Nuestros Servicios
      </span>

      <Heading
        as="h2"
        className="mb-6"
      >
        Soluciones tecnológicas para impulsar tu empresa
      </Heading>

      <Typography
        variant="lead"
        className="mx-auto max-w-2xl text-gray-400"
      >
        Diseñamos, desarrollamos e implementamos soluciones digitales
        modernas para optimizar procesos, mejorar la infraestructura
        tecnológica y acelerar el crecimiento de tu negocio.
      </Typography>

    </div>
  );
}