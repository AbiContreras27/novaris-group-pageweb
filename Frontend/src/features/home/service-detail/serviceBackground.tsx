"use client";

import { motion } from "framer-motion";

export function ServiceBackground() {
  return (
    <>
      {/* Glow principal */}

      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.12, 0.18, 0.12],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          left-1/2
          top-20
          h-[600px]
          w-[600px]
          -translate-x-1/2
          rounded-full
          bg-[#3E003F]
          blur-[200px]
        "
      />

      {/* Glow izquierdo */}

      <div
        className="
          absolute
          -left-40
          top-1/3
          h-80
          w-80
          rounded-full
          bg-violet-600/20
          blur-[160px]
        "
      />

      {/* Glow derecho */}

      <div
        className="
          absolute
          -right-40
          bottom-1/3
          h-80
          w-80
          rounded-full
          bg-fuchsia-500/20
          blur-[160px]
        "
      />

      {/* Grid */}

      <div
        className="
          absolute
          inset-0
          opacity-[0.03]
          [background-image:linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]
          [background-size:70px_70px]
        "
      />
    </>
  );
}