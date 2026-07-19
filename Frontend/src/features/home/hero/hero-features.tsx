const features = [
  "Desarrollo Web",
  "Infraestructura TI",
  "Automatización",
  "Ciberseguridad",
];

export function HeroFeatures() {
  return (
    <div className="mt-12 grid grid-cols-2 gap-4">
      {features.map((feature) => (
        <div
          key={feature}
          className="flex items-center gap-3 text-gray-300"
        >
          <span className="text-[#7C5CFF]">✓</span>
          <span>{feature}</span>
        </div>
      ))}
    </div>
  );
}