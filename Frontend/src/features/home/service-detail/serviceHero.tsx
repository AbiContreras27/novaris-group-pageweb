"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import type { ServiceDetailData } from "./serviceDetailTypes";
import { SERVICE_ICONS } from "@/features/home/services/servicesIcons";

interface Props {
  service: ServiceDetailData;
}

export function ServiceHero({ service }: Props) {
  const Icon = SERVICE_ICONS[service.icon];

  return (
    <section className="relative overflow-hidden pt-40 pb-24">

      <div className="mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .7 }}
          className="max-w-4xl"
        >
          <div
            className="
              mb-8
              flex
              h-20
              w-20
              items-center
              justify-center
              rounded-3xl
              bg-[#3E003F]/20
            "
          >
            <Icon
              size={42}
              className="text-violet-400"
            />
          </div>

          <h1 className="text-6xl font-bold leading-tight text-white">

            {service.title}

          </h1>

          <p className="mt-8 text-2xl text-zinc-300">

            {service.subtitle}

          </p>

          <p className="mt-8 max-w-3xl leading-8 text-zinc-400">

            {service.description}

          </p>

          <button
            className="
              mt-10
              inline-flex
              items-center
              gap-3
              rounded-xl
              bg-gradient-to-r
              from-violet-600
              to-fuchsia-600
              px-8
              py-4
              font-semibold
              text-white
            "
          >
            Solicitar Cotización

            <ArrowRight size={20}/>
          </button>

        </motion.div>

      </div>

    </section>
  );
}