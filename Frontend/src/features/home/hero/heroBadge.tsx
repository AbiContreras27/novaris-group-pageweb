import { Sparkles } from "lucide-react";

export function HeroBadge() {
  return (
    <div
      className="
      inline-flex
      items-center
      gap-2
      rounded-full
      border
      border-violet-500/30
      bg-violet-500/10
      px-4
      py-2
      text-sm
      text-violet-300
      backdrop-blur-xl
    "
    >
      <Sparkles size={16} />

      Innovación Tecnológica
    </div>
  );
}