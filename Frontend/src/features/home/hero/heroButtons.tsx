import { ArrowRight } from "lucide-react";

export function HeroButtons() {
  return (
    <div className="mt-10 flex flex-wrap gap-4">
      <button
        className="
        rounded-xl
        bg-[#3E003F]
        px-8
        py-4
        font-medium
        text-white
        transition
        hover:scale-105
        hover:bg-[#5F2D75]
      "
      >
        Solicitar Cotización
      </button>

      <button
        className="
        flex items-center
        gap-2
        rounded-xl
        border
        border-white/10
        px-8
        py-4
        text-white
        transition
        hover:border-violet-500
      "
      >
        Nuestros Servicios

        <ArrowRight size={18} />
      </button>
    </div>
  );
}