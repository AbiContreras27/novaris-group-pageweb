import { HeroBadge } from "./hero-badge";
import { HeroActions } from "./hero-actions";
import { HeroFeatures } from "./hero-features";

export function HeroContent() {
  return (
    <div className="max-w-2xl">
      <HeroBadge />

      <h1 className="mt-8 text-5xl font-bold leading-tight text-white lg:text-7xl">
        Transformamos ideas en{" "}
        <span className="text-[#7C5CFF]">
          soluciones digitales
        </span>
      </h1>

      <p className="mt-8 text-lg leading-8 text-gray-400 lg:text-xl">
        En Novaris Group diseñamos, desarrollamos e implementamos soluciones
        tecnológicas que ayudan a empresas a optimizar procesos, mejorar su
        infraestructura y acelerar su crecimiento. Tambien brindamos soporte tecnico de computadoras, redes y seguridad y entre otras cosas más.
      </p>

      <HeroActions />

      <HeroFeatures />
    </div>
  );
}