"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";

import type { ServiceDetailData } from "./serviceDetailTypes";

interface Props {
  service: ServiceDetailData;
}

export function ServiceCTA({
  service,
}: Props) {
  return (
    <section className="py-28">

      <div className="mx-auto max-w-5xl px-6">

        <motion.div
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
          className="
            overflow-hidden
            rounded-[40px]
            border
            border-white/10
            bg-gradient-to-br
            from-[#3E003F]
            to-[#1A1A1A]
            p-14
            text-center
          "
        >
          <h2 className="text-5xl font-bold text-white">
            {service.cta.title}
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-zinc-300">
            {service.cta.description}
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-6">

            <Link
              href="/contacto"
              className="
                inline-flex
                items-center
                gap-3
                rounded-xl
                bg-white
                px-8
                py-4
                font-semibold
                text-black
                transition-all
                hover:scale-105
              "
            >
              {service.cta.button}

              <ArrowRight size={20}/>
            </Link>

            <Link
              href="https://wa.me/57214589943"
              target="_blank"
              className="
                inline-flex
                items-center
                gap-3
                rounded-xl
                border
                border-white/20
                px-8
                py-4
                font-semibold
                text-white
                transition-all
                hover:bg-white/10
              "
            >
              <MessageCircle size={20}/>

              WhatsApp
            </Link>

          </div>

        </motion.div>

      </div>

    </section>
  );
}