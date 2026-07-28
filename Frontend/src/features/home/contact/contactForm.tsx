"use client";

import { motion } from "framer-motion";
import { Send } from "lucide-react";

import {
  CONTACT_CONTENT,
  CONTACT_FORM_FIELDS,
} from "./contactConstants";

export function ContactForm() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: .7 }}
      className="
        rounded-3xl
        border
        border-white/10
        bg-[#1A1A1A]/80
        p-8
        backdrop-blur-xl
      "
    >
      <h2 className="text-3xl font-bold text-white">
        Solicita una asesoría
      </h2>

      <p className="mt-3 text-zinc-400">
        Completa el formulario y nuestro equipo se pondrá en contacto contigo.
      </p>

      <form className="mt-10 space-y-6">

        <div className="grid gap-6 md:grid-cols-2">

          {CONTACT_FORM_FIELDS
            .filter(field => field.type !== "textarea")
            .map((field) => (

              <div key={field.name}>

                <label className="mb-2 block text-sm font-medium text-zinc-300">
                  {field.label}
                </label>

                {field.name === "service" ? (

                  <select
                    className="
                      w-full
                      rounded-xl
                      border
                      border-white/10
                      bg-[#111111]
                      px-4
                      py-3
                      text-white
                      outline-none
                      transition
                      focus:border-violet-500
                    "
                  >
                    <option>Seleccione un servicio</option>

                    <option>Desarrollo de Software</option>

                    <option>Soporte Técnico</option>

                    <option>Redes Empresariales</option>

                    <option>CCTV</option>

                    <option>Ciberseguridad</option>

                    <option>Consultoría TI</option>

                  </select>

                ) : (

                  <input
                    type={field.type}
                    placeholder={field.placeholder}
                    className="
                      w-full
                      rounded-xl
                      border
                      border-white/10
                      bg-[#111111]
                      px-4
                      py-3
                      text-white
                      placeholder:text-zinc-500
                      outline-none
                      transition
                      focus:border-violet-500
                    "
                  />

                )}

              </div>

            ))}

        </div>

        {CONTACT_FORM_FIELDS
          .filter(field => field.type === "textarea")
          .map((field) => (

            <div key={field.name}>

              <label className="mb-2 block text-sm font-medium text-zinc-300">
                {field.label}
              </label>

              <textarea
                rows={6}
                placeholder={field.placeholder}
                className="
                  w-full
                  rounded-xl
                  border
                  border-white/10
                  bg-[#111111]
                  px-4
                  py-4
                  text-white
                  placeholder:text-zinc-500
                  outline-none
                  transition
                  focus:border-violet-500
                "
              />

            </div>

          ))}

        <button
          className="
            inline-flex
            items-center
            gap-3
            rounded-xl
            bg-gradient-to-r
            from-violet-600
            to-fuchsia-600
            px-7
            py-4
            font-semibold
            text-white
            transition
            hover:scale-105
          "
        >
          <Send size={18} />

          {CONTACT_CONTENT.button}
        </button>

      </form>

    </motion.section>
  );
}