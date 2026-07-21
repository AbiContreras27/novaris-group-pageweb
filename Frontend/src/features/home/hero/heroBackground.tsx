export function HeroBackground() {
  return (
    <>
      {/* Base */}
      <div className="absolute inset-0 bg-[#0E0E0E]" />

      {/* Grid */}
      <div
        className="
        absolute inset-0
        opacity-[0.04]
        bg-[linear-gradient(rgba(255,255,255,.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.12)_1px,transparent_1px)]
        bg-[size:60px_60px]
      "
      />

      {/* Glow izquierdo */}
      <div
        className="
        absolute
        -top-60
        -left-60
        h-[700px]
        w-[700px]
        rounded-full
        bg-[#3E003F]
        blur-[180px]
        opacity-30
      "
      />

      {/* Glow derecho */}
      <div
        className="
        absolute
        bottom-[-250px]
        right-[-200px]
        h-[600px]
        w-[600px]
        rounded-full
        bg-violet-700
        blur-[180px]
        opacity-20
      "
      />

      {/* Radial */}
      <div
        className="
        absolute inset-0
        bg-[radial-gradient(circle_at_center,rgba(168,85,247,.18),transparent_65%)]
      "
      />
    </>
  );
}