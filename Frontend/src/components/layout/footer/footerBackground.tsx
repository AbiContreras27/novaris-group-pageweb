export function FooterBackground() {
  return (
    <>
      {/* Glow izquierdo */}
      <div
        className="
          absolute
          -left-40
          top-10
          h-96
          w-96
          rounded-full
          bg-[#3E003F]
          opacity-20
          blur-[140px]
        "
      />

      {/* Glow derecho */}
      <div
        className="
          absolute
          -right-40
          bottom-0
          h-[420px]
          w-[420px]
          rounded-full
          bg-violet-700
          opacity-10
          blur-[180px]
        "
      />

      {/* Grid */}
      <div
        className="
          absolute
          inset-0
          bg-[linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)]
          bg-[size:70px_70px]
          [mask-image:radial-gradient(circle,white,transparent_90%)]
        "
      />
    </>
  );
}