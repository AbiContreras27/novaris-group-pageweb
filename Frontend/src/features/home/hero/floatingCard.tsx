"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface FloatingCardProps {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  delay?: number;
}

export function FloatingCard({
  icon: Icon,
  title,
  subtitle,
  delay = 0,
}: FloatingCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
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
        flex
        items-center
        gap-4
        rounded-2xl
        border
        border-white/10
        bg-white/5
        backdrop-blur-xl
        px-5
        py-4
        shadow-xl
      "
    >
      <div className="rounded-xl bg-violet-500/20 p-3">
        <Icon className="text-violet-400" size={22} />
      </div>

      <div>
        <p className="text-sm text-zinc-400">{subtitle}</p>

        <h4 className="font-semibold text-white">{title}</h4>
      </div>
    </motion.div>
  );
}