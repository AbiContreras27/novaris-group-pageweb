"use client";

import Link from "next/link";

import { Button, Container } from "@/components/ui";

const navigation = [
  {
    label: "Inicio",
    href: "#hero",
  },
  {
    label: "Servicios",
    href: "#servicios",
  },
  {
    label: "Sobre Nosotros",
    href: "#about",
  },
  {
    label: "¿Por qué elegir Novaris?",
    href: "#whynovaris",
  },
  {
    label: "Contacto",
    href: "#contact",
  },
];

export function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50">

      <div className="border-b border-white/10 bg-black/40 backdrop-blur-xl">

        <Container>

          <nav className="flex h-24 items-center justify-between">

            {/* Logo */}

            <Link
              href="/"
              className="text-2xl font-bold tracking-tight text-white transition-colors hover:text-[#7C5CFF]"
            >
              NOVARIS
            </Link>

            {/* Menú Desktop */}

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

            {/* CTA */}

            <Button>
              Hablemos
            </Button>

          </nav>

        </Container>

      </div>
    </header>
  );
}