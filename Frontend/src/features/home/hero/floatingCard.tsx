"use client";

import { motion } from "framer-motion";
import type { FloatingCardData } from "./heroTypes";

export function FloatingCard({
  icon: Icon,
  title,
  subtitle,
  delay = 0,
}: FloatingCardData) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{
        opacity: 1,
        y: [0, -10, 0],
      }}
      transition={{
        duration: 5,
        repeat: Infinity,
        delay,
        ease: "easeInOut",
      }}
      className="
        flex items-center gap-4
        rounded-2xl
        border border-white/10
        bg-white/5
        px-5 py-4
        backdrop-blur-xl
        shadow-xl
      "
    >
      <div className="rounded-xl bg-[#3E003F]/20 p-3">
        <Icon
          size={22}
          className="text-violet-400"
        />
      </div>

      <div>
        <p className="text-sm text-zinc-400">
          {subtitle}
        </p>

        <h4 className="font-semibold text-white">
          {title}
        </h4>
      </div>
    </motion.div>
  );
}