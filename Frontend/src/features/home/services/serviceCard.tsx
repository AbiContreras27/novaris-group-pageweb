"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";

import type { Service } from "./servicesTypes";
import { SERVICE_ICONS } from "./servicesIcons";

interface ServiceCardProps {
  service: Service;
  index?: number;
}

export function ServiceCard({
  service,
  index = 0,
}: ServiceCardProps) {
  const Icon = SERVICE_ICONS[service.icon];

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.6,
        delay: index * 0.12,
      }}
      whileHover={{
        y: -8,
      }}
      className="
        group
        relative
        overflow-hidden
        rounded-3xl
        border
        border-white/10
        bg-[#1A1A1A]/80
        backdrop-blur-xl
        transition-all
        duration-300
        hover:border-violet-500/30
        hover:shadow-[0_0_40px_rgba(139,92,246,.15)]
      "
    >
      {/* Glow */}

      <div
        className="
          absolute
          inset-0
          opacity-0
          transition-opacity
          duration-500
          group-hover:opacity-100
        "
      >
        <div
          className="
            absolute
            -right-16
            -top-16
            h-40
            w-40
            rounded-full
            blur-3xl
          "
          style={{
            background: service.color,
            opacity: 0.18,
          }}
        />
      </div>

      <div className="relative z-10 flex h-full flex-col p-8">

        {/* Icono */}

        <div
          className="
            mb-6
            flex
            h-16
            w-16
            items-center
            justify-center
            rounded-2xl
          "
          style={{
            backgroundColor: `${service.color}20`,
          }}
        >
          <Icon
            size={32}
            style={{
              color: service.color,
            }}
          />
        </div>

        {/* Título */}

        <h3 className="text-2xl font-semibold text-white">
          {service.title}
        </h3>

        {/* Descripción */}

        <p className="mt-4 leading-7 text-zinc-400">
          {service.shortDescription}
        </p>

        {/* Características */}

        <ul className="mt-8 space-y-3">
          {service.features.map((feature) => (
            <li
              key={feature.title}
              className="flex items-center gap-3 text-zinc-300"
            >
              <CheckCircle2
                size={18}
                className="text-violet-400"
              />

              <span>{feature.title}</span>
            </li>
          ))}
        </ul>

        {/* Empuja el botón hacia abajo */}

        <div className="flex-1" />

        {/* Botón */}

        <Link
          href={`/servicios/${service.slug}`}
          className="
            mt-10
            inline-flex
            items-center
            gap-2
            font-medium
            text-violet-400
            transition-all
            duration-300
            hover:gap-4
            hover:text-violet-300
          "
        >
          Conocer más

          <ArrowRight size={18} />
        </Link>
      </div>
    </motion.article>
  );
}