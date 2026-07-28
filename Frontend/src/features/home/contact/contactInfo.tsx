import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
} from "lucide-react";

import { Container } from "@/components/ui";
import { CONTACT_INFO } from "./contactConstants";



const icons = {
  Correo: Mail,
  Teléfono: Phone,
  Ubicación: MapPin,
};

const subtitles = {
  Correo: "Escríbenos cuando lo necesites",
  Teléfono: "Lunes a Viernes • 8:00 AM - 6:00 PM",
  Ubicación: "Atendemos proyectos en toda Colombia",
};

export function ContactInfo() {
  return (
    <section className="pb-24">
      <Container>

        <div className="grid gap-8 md:grid-cols-3">

          {CONTACT_INFO.map((item) => {

            const Icon =
              icons[item.title as keyof typeof icons];

            return (

              <div
                key={item.title}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-3xl
                  border
                  border-white/10
                  bg-[#1A1A1A]/80
                  p-8
                  backdrop-blur-xl
                  transition-all
                  duration-500
                  hover:-translate-y-2
                  hover:border-violet-500/40
                "
              >

                <div
                  className="
                    absolute
                    -right-20
                    -top-20
                    h-44
                    w-44
                    rounded-full
                    bg-violet-600/20
                    blur-3xl
                    opacity-0
                    transition-opacity
                    duration-500
                    group-hover:opacity-100
                  "
                />

                <div className="relative z-10 flex h-full flex-col">

                  <div
                    className="
                      mb-6
                      flex
                      h-16
                      w-16
                      items-center
                      justify-center
                      rounded-2xl
                      bg-violet-500/10
                    "
                  >
                    <Icon
                      size={30}
                      className="text-violet-400"
                    />
                  </div>

                  <h3 className="text-2xl font-semibold text-white">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm text-zinc-500">
                    {
                      subtitles[
                        item.title as keyof typeof subtitles
                      ]
                    }
                  </p>

                  {item.href ? (
                    <Link
                      href={item.href}
                      target={item.href.startsWith("https://") ? "_blank" : undefined}
                      rel={item.href.startsWith("https://") ? "noopener noreferrer" : undefined}
                      className="
                        mt-3
                        block
                        text-zinc-400
                        transition-colors
                        hover:text-violet-400
                      "
                    >
                      {item.value}
                    </Link>
                  ) : (
                    <p
                      className="
                        mt-6
                        text-base
                        leading-7
                        text-zinc-300
                        break-words
                        whitespace-pre-line
                      "
                    >
                      {item.value}
                    </p>
                  )}

                </div>

              </div>

            );

          })}

        </div>

      </Container>
    </section>
  );
}
