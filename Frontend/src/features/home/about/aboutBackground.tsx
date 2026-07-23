"use client";

import { motion } from "framer-motion";

export function AboutBackground() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">

      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [.25, .35, .25],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          left-1/2
          top-32
          h-[650px]
          w-[650px]
          -translate-x-1/2
          rounded-full
          bg-[#3E003F]
          blur-[180px]
        "
      />

      <div
        className="
          absolute
          inset-0
          bg-[radial-gradient(circle_at_top,#3E003F10,transparent_70%)]
        "
      />

    </div>
  );
}