import { HERO_HIGHLIGHTS } from "./heroConstants";

export function HeroHighlights() {
  return (
    <div className="mt-12 grid gap-4 sm:grid-cols-2">
      {HERO_HIGHLIGHTS.map(({ icon: Icon, label }) => (
        <div
          key={label}
          className="flex items-center gap-3 text-zinc-300"
        >
          <Icon
            size={18}
            className="text-violet-400"
          />

          <span>{label}</span>
        </div>
      ))}
    </div>
  );
}