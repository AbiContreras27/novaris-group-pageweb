"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import { ABOUT_CTA } from "./aboutConstants";

export function AboutCTA() {
  return (
    <section className="py-32">

      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="
          relative
          mx-auto
          max-w-6xl
          overflow-hidden
          rounded-[40px]
          border border-white/10
          bg-[#1A1A1A]
          px-10
          py-20
          text-center
        "
      >

        <div className="absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-[#3E003F]/30 blur-[120px]" />

        <div className="relative">

          <h2 className="text-4xl font-bold text-white">
            {ABOUT_CTA.title}
          </h2>

          <p className="mx-auto mt-6 max-w-3xl leading-8 text-zinc-400">
            {ABOUT_CTA.description}
          </p>

          <Link
            href="/contacto"
            className="
              mt-10
              inline-flex
              rounded-xl
              bg-[#3E003F]
              px-8
              py-4
              font-medium
              text-white
              transition
              hover:opacity-90
            "
          >
            {ABOUT_CTA.button}
          </Link>

        </div>

      </motion.div>

    </section>
  );
}