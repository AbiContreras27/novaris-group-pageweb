import { ReactNode } from "react";

interface TechnologyCardProps {
  name: string;
  icon: ReactNode;
}

export function TechnologyCard({
  name,
  icon,
}: TechnologyCardProps) {
  return (
    <div
      className="
        group

        flex
        flex-col
        items-center
        justify-center

        rounded-3xl

        border
        border-[var(--color-border)]

        bg-[var(--color-card)]

        p-8

        shadow-[var(--shadow-card)]

        transition-all
        duration-300

        hover:-translate-y-2
        hover:border-[var(--color-primary)]
        hover:shadow-[var(--shadow-glow)]
      "
    >
      <div
        className="
          mb-5

          text-[var(--color-primary)]

          transition-transform
          duration-300

          group-hover:scale-110
          group-hover:rotate-6
        "
      >
        {icon}
      </div>

      <h3
        className="
          text-lg
          font-semibold

          text-[var(--color-text)]
        "
      >
        {name}
      </h3>
    </div>
  );
}