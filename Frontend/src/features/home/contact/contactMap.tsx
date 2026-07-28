import { MapPin } from "lucide-react";

export function ContactMap() {
  return (
    <section
      className="
        overflow-hidden
        rounded-3xl
        border
        border-white/10
        bg-[#1A1A1A]/80
        backdrop-blur-xl
      "
    >
      <div
        className="
          flex
          h-[420px]
          flex-col
          items-center
          justify-center
          bg-gradient-to-br
          from-[#3E003F]
          via-[#181818]
          to-[#0F0F0F]
        "
      >
        <MapPin
          size={60}
          className="text-violet-400"
        />

        <h3 className="mt-6 text-3xl font-bold text-white">
          Medellín, Colombia
        </h3>

        <p className="mt-3 max-w-lg text-center text-zinc-400">
          Muy pronto podrás visualizar nuestra ubicación
          directamente desde Google Maps.
        </p>
      </div>
    </section>
  );
}