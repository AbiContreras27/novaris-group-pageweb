import Link from "next/link";

import {
  FaLinkedinIn,
  FaGithub,
  FaInstagram,
  FaFacebookF,
  FaWhatsapp,
} from "react-icons/fa";

import { FOOTER_SOCIAL } from "./footerConstants";

const icons = {
  linkedin: FaLinkedinIn,
  github: FaGithub,
  instagram: FaInstagram,
  facebook: FaFacebookF,
  whatsapp: FaWhatsapp,
};

export function FooterSocial() {
  return (
    <div>

      <h3
        className="
          mb-8
          text-lg
          font-semibold
          text-white
        "
      >
        Síguenos
      </h3>

      <div className="flex flex-wrap gap-4">

        {FOOTER_SOCIAL.map((social) => {

          const Icon = icons[social.icon];

          return (

            <Link
              key={social.icon}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="
                group
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-2xl
                border
                border-white/10
                bg-white/5
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-violet-500/40
                hover:bg-violet-500/10
              "
            >
              <Icon
                size={20}
                className="
                  text-zinc-400
                  transition-colors
                  group-hover:text-violet-400
                "
              />
            </Link>

          );

        })}

      </div>

    </div>
  );
}