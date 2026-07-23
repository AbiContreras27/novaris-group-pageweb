"use client";

import { motion } from "framer-motion";

import type { ServiceDetailData } from "./serviceDetailTypes";

interface ServiceTechnologiesProps {
  service: ServiceDetailData;
}

export function ServiceTechnologies({
  service,
}: ServiceTechnologiesProps) {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <span className="text-sm uppercase tracking-[0.3em] text-violet-400">
            TECNOLOGÍAS
          </span>

          <h2 className="mt-4 text-5xl font-bold text-white">
            Tecnologías que utilizamos
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
            Trabajamos con herramientas modernas, seguras y escalables para
            construir soluciones de alto rendimiento.
          </p>

        </div>

        <div className="mt-16 flex flex-wrap justify-center gap-5">

          {service.technologies.map((technology, index) => (

            <motion.div
              key={technology.name}
              initial={{
                opacity: 0,
                scale: .8,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
              }}
              viewport={{ once: true }}
              transition={{
                delay: index * .05,
              }}
              whileHover={{
                scale: 1.08,
              }}
              className="
                rounded-2xl
                border
                border-white/10
                bg-[#1A1A1A]/70
                px-8
                py-4
                backdrop-blur-xl
                transition-all
                duration-300
                hover:border-violet-500/40
                hover:bg-[#252525]
              "
            >
              <span className="font-medium text-white">
                {technology.name}
              </span>
            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}