import Link from "next/link";

import { Container } from "@/components/ui";

export function ContactCTA() {
  return (
    <section className="py-24">
      <Container>
        <div
          className="
            relative
            overflow-hidden
            rounded-3xl
            border
            border-white/10
            bg-gradient-to-r
            from-[#3E003F]
            via-[#2A1030]
            to-[#0F0F0F]
            px-10
            py-20
            text-center
          "
        >

          <div className="absolute inset-0 opacity-20">
            <div className="absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-violet-500 blur-[150px]" />
          </div>

          <div className="relative z-10">

            <h2 className="text-4xl font-bold text-white lg:text-5xl">
              ¿Listo para impulsar tu empresa?
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-300">
              Nuestro equipo está preparado para ayudarte a
              transformar tu infraestructura tecnológica con
              soluciones modernas, seguras y escalables.
            </p>

            <Link
              href="https://wa.me/573214589943"
              target="_blank"
              rel="noopener noreferrer"
              className="
                mt-10
                inline-flex
                rounded-xl
                bg-white
                px-8
                py-4
                font-semibold
                text-[#3E003F]
                transition
                hover:scale-105
              "
            >
              Agendar una reunión
            </Link>

          </div>
        </div>
      </Container>
    </section>
  );
}