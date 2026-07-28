export function ContactBackground() {
  return (
    <>
      <div
        className="
          absolute
          left-1/2
          top-0
          h-[450px]
          w-[450px]
          -translate-x-1/2
          rounded-full
          bg-[#3E003F]
          opacity-20
          blur-[170px]
        "
      />

      <div
        className="
          absolute
          left-0
          top-1/3
          h-[300px]
          w-[300px]
          rounded-full
          bg-violet-500
          opacity-10
          blur-[150px]
        "
      />

      <div
        className="
          absolute
          right-0
          bottom-0
          h-[350px]
          w-[350px]
          rounded-full
          bg-fuchsia-500
          opacity-10
          blur-[170px]
        "
      />

      <div
        className="
          absolute
          inset-0
          bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)]
          bg-[size:70px_70px]
          [mask-image:radial-gradient(circle_at_center,white,transparent_85%)]
        "
      />
    </>
  );
}