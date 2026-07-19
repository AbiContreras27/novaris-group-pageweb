interface FloatingCardProps {
  title: string;
  subtitle: string;
}

export function FloatingCard({
  title,
  subtitle,
}: FloatingCardProps) {
  return (
    <div
      className="
        rounded-2xl
        border
        border-white/10
        bg-[#1A1A1A]/80
        backdrop-blur-xl
        px-5
        py-4
        shadow-xl
      "
    >
      <h4 className="text-white font-semibold">
        {title}
      </h4>

      <p className="text-sm text-gray-400">
        {subtitle}
      </p>
    </div>
  );
}