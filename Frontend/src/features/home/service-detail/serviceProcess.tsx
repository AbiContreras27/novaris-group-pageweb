"use client";

import { motion } from "framer-motion";

import type { ServiceDetailData } from "./serviceDetailTypes";

interface Props {
  service: ServiceDetailData;
}

export function ServiceProcess({
  service,
}: Props) {
  return (
    <section className="py-24">

      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <span className="text-sm uppercase tracking-[0.3em] text-violet-400">
            PROCESO
          </span>

          <h2 className="mt-4 text-5xl font-bold text-white">
            Nuestra metodología de trabajo
          </h2>

        </div>

        <div className="mt-20 grid gap-8 lg:grid-cols-5">

          {service.process.map((step, index) => (

            <motion.div
              key={step.step}
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: index * .15,
              }}
              className="relative text-center"
            >

              <div
                className="
                  mx-auto
                  flex
                  h-20
                  w-20
                  items-center
                  justify-center
                  rounded-full
                  bg-gradient-to-br
                  from-violet-600
                  to-fuchsia-600
                  text-2xl
                  font-bold
                  text-white
                "
              >
                {step.step}
              </div>

              <h3 className="mt-8 text-2xl font-semibold text-white">
                {step.title}
              </h3>

              <p className="mt-4 leading-7 text-zinc-400">
                {step.description}
              </p>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}