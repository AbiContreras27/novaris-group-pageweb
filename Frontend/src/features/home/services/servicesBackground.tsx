"use client";

import { motion } from "framer-motion";

export function ServicesBackground() {
  return (
    <>
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
          h-[500px]
          w-[500px]
          -translate-x-1/2
          rounded-full
          bg-[#3E003F]
          blur-[180px]
        "
      />

      <motion.div
        animate={{
          x: [-20, 20, -20],
          opacity: [0.08, 0.14, 0.08],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          -left-40
          bottom-20
          h-96
          w-96
          rounded-full
          bg-violet-600
          blur-[160px]
        "
      />

      <motion.div
        animate={{
          x: [20, -20, 20],
          opacity: [0.08, 0.14, 0.08],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          -right-40
          top-40
          h-96
          w-96
          rounded-full
          bg-fuchsia-600
          blur-[160px]
        "
      />

      <div
        className="
          absolute
          inset-0
          opacity-[0.03]
          [background-image:linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]
          [background-size:80px_80px]
        "
      />

      <div
        className="
          absolute
          inset-x-0
          top-0
          h-px
          bg-gradient-to-r
          from-transparent
          via-violet-500/30
          to-transparent
        "
      />
    </>
  );
}