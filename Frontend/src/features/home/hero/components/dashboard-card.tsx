interface DashboardCardProps {
  title: string;
  value: string;
  children?: React.ReactNode;
}

export function DashboardCard({
  title,
  value,
  children,
}: DashboardCardProps) {
  return (
    <div
      className="
        rounded-3xl
        border
        border-white/10
        bg-[#1A1A1A]/80
        backdrop-blur-xl
        p-6
        shadow-2xl
      "
    >
      <p className="text-sm text-gray-400">
        {title}
      </p>

      <h3 className="mt-2 text-3xl font-bold text-white">
        {value}
      </h3>

      <div className="mt-6">
        {children}
      </div>
    </div>
  );
}