"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export function ScrollIndicator() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
      }}
      transition={{
        delay: 1.2,
      }}
      className="
        absolute
        bottom-10
        left-1/2
        -translate-x-1/2
        hidden
        lg:flex
        flex-col
        items-center
        gap-3
      "
    >
      <motion.div
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 1.6,
          repeat: Infinity,
        }}
      >
      </motion.div>
    </motion.div>
  );
}