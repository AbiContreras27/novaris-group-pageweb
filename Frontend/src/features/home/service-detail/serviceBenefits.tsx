"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

import type { ServiceDetailData } from "./serviceDetailTypes";

interface ServiceBenefitsProps {
  service: ServiceDetailData;
}

export function ServiceBenefits({
  service,
}: ServiceBenefitsProps) {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="max-w-3xl">
          <span className="text-sm uppercase tracking-[0.3em] text-violet-400">
            BENEFICIOS
          </span>

          <h2 className="mt-4 text-5xl font-bold text-white">
            ¿Por qué elegir este servicio?
          </h2>

          <p className="mt-6 text-lg leading-8 text-zinc-400">
            Diseñamos soluciones tecnológicas que generan resultados
            reales para empresas de cualquier tamaño.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {service.benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.15,
                duration: .6,
              }}
              whileHover={{
                y: -8,
              }}
              className="
                rounded-3xl
                border border-white/10
                bg-[#1A1A1A]/70
                p-8
                backdrop-blur-xl
                transition-all
                duration-300
                hover:border-violet-500/30
              "
            >
              <div className="flex items-center gap-4">

                <div className="rounded-2xl bg-violet-500/20 p-3">

                  <CheckCircle2
                    size={24}
                    className="text-violet-400"
                  />

                </div>

                <h3 className="text-2xl font-semibold text-white">
                  {benefit.title}
                </h3>

              </div>

              <p className="mt-6 leading-8 text-zinc-400">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}