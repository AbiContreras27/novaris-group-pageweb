import { Sparkles } from "lucide-react";

export function ServicesHeader() {
  return (
    <div className="mx-auto max-w-4xl text-center">
      <div
        className="
          inline-flex
          items-center
          gap-2
          rounded-full
          border
          border-violet-500/20
          bg-violet-500/10
          px-5
          py-2
          backdrop-blur-md
        "
      >
        <Sparkles
          size={16}
          className="text-violet-400"
        />

        <span className="text-sm font-medium tracking-wide text-violet-300">
          Soluciones Integrales
        </span>
      </div>

      <h2 className="mt-8 text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
        Tecnología diseñada para{" "}
        <span className="bg-gradient-to-r from-violet-400 to-fuchsia-500 bg-clip-text text-transparent">
          impulsar el crecimiento
        </span>{" "}
        de tu empresa.
      </h2>

      <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-zinc-400">
        En Novaris Group ofrecemos soluciones tecnológicas integrales
        que ayudan a las empresas a innovar, optimizar sus procesos,
        fortalecer su infraestructura y proteger su información mediante
        servicios especializados y tecnología de vanguardia.
      </p>
    </div>
  );
}