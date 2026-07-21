import { HeroBadge } from "./heroBadge";
import { HeroButtons } from "./heroButtons";
import { HeroHighlights } from "./heroHighlights";

export function HeroContent() {
  return (
    <div className="max-w-2xl">
      <HeroBadge />

      <h1 className="mt-6 text-5xl font-bold leading-tight text-white lg:text-7xl">
        Impulsamos el crecimiento de tu empresa con{" "}
        <span className="bg-gradient-to-r from-violet-400 to-fuchsia-500 bg-clip-text text-transparent">
          soluciones tecnológicas inteligentes
        </span>
      </h1>

      <p className="mt-8 text-lg leading-8 text-zinc-400">
        Desarrollo de software, infraestructura, redes empresariales,
        ciberseguridad y soporte TI para empresas que buscan crecer con
        tecnología confiable.
      </p>

      <HeroButtons />

      <HeroHighlights />
    </div>
  );
}