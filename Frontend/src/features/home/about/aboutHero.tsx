"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import { ABOUT_HERO } from "./aboutConstants";

export function AboutHero() {
  return (
    <section className="relative overflow-hidden py-32">

      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-24 h-[450px] w-[450px] -translate-x-1/2 rounded-full bg-[#3E003F]/30 blur-[160px]" />
      </div>

      <div className="mx-auto flex max-w-5xl flex-col items-center px-6 text-center">

        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-full border border-violet-500/30 bg-violet-500/10 px-5 py-2 text-sm font-medium text-violet-300"
        >
          {ABOUT_HERO.badge}
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: .15 }}
          className="mt-8 text-5xl font-bold leading-tight text-white lg:text-7xl"
        >
          {ABOUT_HERO.title}

          <span className="block bg-gradient-to-r from-violet-400 to-fuchsia-500 bg-clip-text text-transparent">
            {ABOUT_HERO.highlight}
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: .3 }}
          viewport={{ once: true }}
          className="mt-8 max-w-3xl text-lg leading-8 text-zinc-400"
        >
          {ABOUT_HERO.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0,y:20 }}
          whileInView={{ opacity:1,y:0 }}
          transition={{ delay:.45 }}
          viewport={{ once:true }}
          className="mt-12 flex flex-wrap justify-center gap-5"
        >
          <Link
            href="/servicios"
            className="rounded-xl bg-[#3E003F] px-7 py-4 font-medium text-white transition hover:opacity-90"
          >
            {ABOUT_HERO.primaryButton}
          </Link>

          <Link
            href="/contacto"
            className="rounded-xl border border-white/10 px-7 py-4 font-medium text-white transition hover:bg-white/5"
          >
            {ABOUT_HERO.secondaryButton}
          </Link>

        </motion.div>

      </div>

    </section>
  );
}