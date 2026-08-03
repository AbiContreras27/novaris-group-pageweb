"use client";

import Image from "next/image";
import Link from "next/link";
import { MessageCircle } from "lucide-react";

import { Button, Container } from "@/components/ui";
import { MobileMenu } from "./mobileMenu";

const navigation = [
  {
    label: "Inicio",
    href: "/",
  },
  {
    label: "Servicios",
    href: "/servicios",
  },
  {
    label: "Sobre Nosotros",
    href: "/nosotros",
  },
  {
    label: "Contacto",
    href: "/contacto",
  },
];

export function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50">

      <div className="border-b border-white/10 bg-black/40 backdrop-blur-xl">

        <Container>

          <nav className="flex h-24 items-center justify-between">

            <Link
              href="/"
              className="flex items-center"
            >
              <Image
                src="/logoNovaris.png"
                alt="Novaris Group"
                width={700}
                height={220}
                priority
                className="h-16 w-auto"
              />
            </Link>

            <ul className="hidden items-center gap-10 lg:flex">

              {navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="
                      text-sm
                      font-medium
                      text-gray-300
                      transition-colors
                      duration-300
                      hover:text-[#7C5CFF]
                    "
                  >
                    {item.label}
                  </Link>
                </li>
              ))}

            </ul>


            <div className="flex items-center gap-4">

              <div className="hidden lg:block">

                <Link
                  href="https://wa.me/573214589943"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="flex items-center gap-2">
                    <MessageCircle size={18} />
                    Hablemos
                  </Button>
                </Link>

              </div>

              <MobileMenu />

            </div>

          </nav>

        </Container>

      </div>

    </header>
  );
}