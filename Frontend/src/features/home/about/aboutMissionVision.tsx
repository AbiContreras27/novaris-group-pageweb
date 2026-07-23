"use client";

import { motion } from "framer-motion";

import {
  ABOUT_MISSION,
  ABOUT_VISION,
} from "./aboutConstants";

export function AboutMissionVision() {
  return (
    <section className="py-24">

      <div className="mx-auto grid max-w-7xl gap-8 px-6 lg:grid-cols-2">

        {[ABOUT_MISSION, ABOUT_VISION].map((item,index)=>(
          <motion.article
            key={item.title}
            initial={{ opacity:0,y:40 }}
            whileInView={{ opacity:1,y:0 }}
            transition={{ delay:index*.15 }}
            viewport={{ once:true }}
            className="
              rounded-3xl
              border border-white/10
              bg-[#1A1A1A]
              p-10
            "
          >

            <h3 className="text-3xl font-semibold text-white">
              {item.title}
            </h3>

            <p className="mt-6 leading-8 text-zinc-400">
              {item.description}
            </p>

          </motion.article>
        ))}

      </div>

    </section>
  );
}