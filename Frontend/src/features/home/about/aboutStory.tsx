"use client";

import { motion } from "framer-motion";
import { ABOUT_STORY } from "./aboutConstants";

export function AboutStory() {
  return (
    <section className="py-28">

      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2">

        <motion.div
          initial={{ opacity:0,x:-40 }}
          whileInView={{ opacity:1,x:0 }}
          viewport={{ once:true }}
        >

          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-violet-400">
            Nuestra Historia
          </span>

          <h2 className="mt-5 text-4xl font-bold text-white">
            {ABOUT_STORY.title}
          </h2>

        </motion.div>

        <motion.div
          initial={{ opacity:0,x:40 }}
          whileInView={{ opacity:1,x:0 }}
          viewport={{ once:true }}
          className="space-y-7"
        >
          {ABOUT_STORY.description.map((paragraph) => (
            <p
              key={paragraph}
              className="leading-8 text-zinc-400"
            >
              {paragraph}
            </p>
          ))}
        </motion.div>

      </div>

    </section>
  );
}