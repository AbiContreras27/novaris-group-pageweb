"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  Server,
  Wifi,
  MonitorSmartphone,
} from "lucide-react";

import { FloatingCard } from "./floatingCard";

export function HeroVisual() {
  return (
    <div className="relative hidden lg:flex items-center justify-center">

      {/* Glow */}

      <div className="absolute h-[550px] w-[550px] rounded-full bg-[#3E003F] blur-[170px] opacity-20" />

      {/* Dashboard */}

      <motion.div
        animate={{
          y: [0, -12, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          relative
          w-[520px]
          rounded-3xl
          border
          border-white/10
          bg-[#1A1A1A]/80
          backdrop-blur-xl
          p-8
          shadow-2xl
        "
      >
        {/* Header */}

        <div className="flex items-center justify-between">

          <div>
            <h3 className="text-xl font-semibold text-white">
              Infrastructure Dashboard
            </h3>

            <p className="text-zinc-400 text-sm">
              Estado general de la plataforma
            </p>
          </div>

          <div className="flex gap-2">

            <span className="h-3 w-3 rounded-full bg-red-400" />
            <span className="h-3 w-3 rounded-full bg-yellow-400" />
            <span className="h-3 w-3 rounded-full bg-green-400" />

          </div>

        </div>

        {/* Métricas */}

        <div className="mt-8 grid grid-cols-2 gap-5">

          <div className="rounded-2xl bg-white/5 p-5">
            <p className="text-zinc-400 text-sm">
              Disponibilidad
            </p>

            <h2 className="mt-2 text-3xl font-bold text-white">
              99.9%
            </h2>
          </div>

          <div className="rounded-2xl bg-white/5 p-5">
            <p className="text-zinc-400 text-sm">
              Servidores
            </p>

            <h2 className="mt-2 text-3xl font-bold text-white">
              Online
            </h2>
          </div>

        </div>

        {/* Gráfico */}

        <div className="mt-8 h-52 rounded-2xl bg-white/5 p-6">

          <div className="flex h-full items-end gap-3">

            {[35,60,45,70,55,85,65,95].map((value,index)=>(
              <motion.div
                key={index}
                initial={{height:0}}
                animate={{height:value+"%"}}
                transition={{
                  duration:1,
                  delay:index*.1
                }}
                className="
                  flex-1
                  rounded-full
                  bg-gradient-to-t
                  from-[#3E003F]
                  to-violet-400
                "
              />
            ))}

          </div>

        </div>

      </motion.div>

      {/* Floating cards */}

      <div className="absolute -left-12 top-24">
        <FloatingCard
          icon={ShieldCheck}
          title="Seguridad Activa"
          subtitle="Firewall"
          delay={0}
        />
      </div>

      <div className="absolute -right-12 top-40">
        <FloatingCard
          icon={Server}
          title="12 Servidores"
          subtitle="Infraestructura"
          delay={1}
        />
      </div>

      <div className="absolute left-8 bottom-8">
        <FloatingCard
          icon={Wifi}
          title="Red Empresarial"
          subtitle="Conectividad"
          delay={2}
        />
      </div>

      <div className="absolute right-8 bottom-[-20px]">
        <FloatingCard
          icon={MonitorSmartphone}
          title="Soporte Remoto"
          subtitle="24/7"
          delay={3}
        />
      </div>

    </div>
  );
}