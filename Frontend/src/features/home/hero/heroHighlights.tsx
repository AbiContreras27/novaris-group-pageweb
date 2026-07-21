import { CheckCircle2 } from "lucide-react";

const items = [
  "Desarrollo de Software",
  "Redes Empresariales",
  "CCTV",
  "Soporte TI",
];

export function HeroHighlights() {
  return (
    <div className="mt-12 grid gap-4 sm:grid-cols-2">
      {items.map((item) => (
        <div key={item} className="flex items-center gap-3 text-zinc-300">
          <CheckCircle2
            className="text-violet-400"
            size={18}
          />

          {item}
        </div>
      ))}
    </div>
  );
}