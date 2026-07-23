"use client";

import { motion } from "framer-motion";

import { ABOUT_VALUES } from "./aboutConstants";

export function AboutValues() {
  return (
    <section className="py-28">

      <div className="mx-auto max-w-7xl px-6">

        <div className="mx-auto max-w-3xl text-center">

          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-violet-400">
            Nuestros Valores
          </span>

          <h2 className="mt-5 text-4xl font-bold text-white">
            Los principios que impulsan cada proyecto
          </h2>

        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {ABOUT_VALUES.map(({ icon: Icon, title, description }, index) => (

            <motion.article
              key={title}
              initial={{ opacity:0,y:40 }}
              whileInView={{ opacity:1,y:0 }}
              transition={{ delay:index*.08 }}
              viewport={{ once:true }}
              whileHover={{
                y:-8,
              }}
              className="
                rounded-3xl
                border border-white/10
                bg-[#1A1A1A]
                p-8
                transition-all
              "
            >

              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#3E003F]/20">

                <Icon
                  size={30}
                  className="text-violet-400"
                />

              </div>

              <h3 className="text-2xl font-semibold text-white">
                {title}
              </h3>

              <p className="mt-5 leading-8 text-zinc-400">
                {description}
              </p>

            </motion.article>

          ))}

        </div>

      </div>

    </section>
  );
}