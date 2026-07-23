"use client";

import { motion } from "framer-motion";

import { ABOUT_STATS } from "./aboutConstants";

export function AboutStats() {
  return (
    <section className="py-28">

      <div className="mx-auto max-w-7xl px-6">

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {ABOUT_STATS.map((stat, index) => (

            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * .12,
              }}
              viewport={{ once: true }}
              className="
                rounded-3xl
                border border-white/10
                bg-[#1A1A1A]
                p-10
                text-center
              "
            >

              <h3 className="text-5xl font-bold text-violet-400">
                {stat.value}
              </h3>

              <p className="mt-4 text-zinc-400">
                {stat.label}
              </p>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}