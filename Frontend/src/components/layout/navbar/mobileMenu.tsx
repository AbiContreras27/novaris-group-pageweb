"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, MessageCircle, X } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui";

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

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="lg:hidden">

      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
        aria-expanded={isOpen}
        className="
          flex
          h-11
          w-11
          items-center
          justify-center
          rounded-xl
          border
          border-white/10
          bg-white/5
          text-zinc-200
          transition-all
          duration-300
          hover:border-violet-500/40
          hover:bg-violet-500/10
          hover:text-violet-400
        "
      >
        {isOpen ? <X size={22} /> : <Menu size={22} />}
      </button>

      <AnimatePresence>
        {isOpen && (
          <>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMenu}
              className="
                fixed
                inset-0
                top-24
                z-40
                bg-black/50
                backdrop-blur-sm
              "
            />

            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{
                duration: 0.25,
                ease: "easeOut",
              }}
              className="
                absolute
                left-0
                right-0
                top-full
                z-50
                border-t
                border-white/10
                bg-[#0E0E0E]/95
                shadow-2xl
                backdrop-blur-2xl
              "
            >
              <div className="px-6 py-8">

                <nav>
                  <ul className="space-y-2">

                    {navigation.map((item, index) => (
                      <motion.li
                        key={item.href}
                        initial={{
                          opacity: 0,
                          x: -15,
                        }}
                        animate={{
                          opacity: 1,
                          x: 0,
                        }}
                        transition={{
                          delay: index * 0.05,
                        }}
                      >
                        <Link
                          href={item.href}
                          onClick={closeMenu}
                          className="
                            flex
                            items-center
                            rounded-2xl
                            px-4
                            py-4
                            text-base
                            font-medium
                            text-zinc-300
                            transition-all
                            duration-300
                            hover:bg-white/5
                            hover:text-violet-400
                          "
                        >
                          {item.label}
                        </Link>
                      </motion.li>
                    ))}

                  </ul>
                </nav>

                <div className="mt-6 border-t border-white/10 pt-6">

                  <Link
                    href="https://wa.me/573214589943"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={closeMenu}
                    className="block"
                  >
                    <Button className="flex w-full items-center justify-center gap-2">
                      <MessageCircle size={18} />
                      Hablemos por WhatsApp
                    </Button>
                  </Link>

                </div>

              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}