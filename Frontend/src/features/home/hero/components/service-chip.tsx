interface ServiceChipProps {
  label: string;
}

export function ServiceChip({
  label,
}: ServiceChipProps) {
  return (
    <div
      className="
        rounded-full
        border
        border-[#3E003F]
        bg-[#3E003F]/20
        px-4
        py-2
        text-sm
        text-[#7C5CFF]
      "
    >
      {label}
    </div>
  );
}