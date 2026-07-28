"use client";

import Link from "next/link";
import Image from "next/image";
import { MessageCircle } from "lucide-react";

import { Button, Container } from "@/components/ui";

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

          <nav className="flex h-26 items-center justify-between">

            <Link href="/" className="flex items-center">
              <Image
                src="/logo-novaris.png"
                alt="Novaris Group"
                width={800}
                height={180}
                priority
                className="h-20 w-auto"
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

          </nav>

        </Container>

      </div>
    </header>
  );
}