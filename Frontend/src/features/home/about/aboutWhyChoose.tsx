"use client";

import { motion } from "framer-motion";

import { ABOUT_REASONS } from "./aboutConstants";

export function AboutWhyChoose() {
  return (
    <section className="py-28">

      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <span className="text-sm uppercase tracking-[0.35em] text-violet-400">
            ¿Por qué elegirnos?
          </span>

          <h2 className="mt-5 text-4xl font-bold text-white">
            Tecnología con visión estratégica
          </h2>

        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2">

          {ABOUT_REASONS.map(({ icon: Icon, title, description }, index) => (

            <motion.article
              key={title}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * .1,
              }}
              whileHover={{
                y: -8,
              }}
              className="
                rounded-3xl
                border border-white/10
                bg-[#1A1A1A]
                p-8
              "
            >

              <Icon
                size={36}
                className="text-violet-400"
              />

              <h3 className="mt-6 text-2xl font-semibold text-white">
                {title}
              </h3>

              <p className="mt-4 leading-8 text-zinc-400">
                {description}
              </p>

            </motion.article>

          ))}

        </div>

      </div>

    </section>
  );
}