import Link from "next/link";

import {
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

import { FOOTER_CONTACT } from "./footerConstants";

const icons = {
  mail: Mail,
  phone: Phone,
  location: MapPin,
};

export function FooterContact() {
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
        Contacto
      </h3>

      <div className="space-y-6">

        {FOOTER_CONTACT.map((item) => {

          const Icon = icons[item.icon];

          return (

            <div
              key={item.label}
              className="flex items-start gap-4"
            >

              <div
                className="
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-xl
                  bg-violet-500/10
                "
              >
                <Icon
                  size={20}
                  className="text-violet-400"
                />
              </div>

              <div>

                <p className="text-sm text-zinc-500">
                  {item.label}
                </p>

                {item.href ? (

                  <Link
                    href={item.href}
                    target={
                      item.href.startsWith("https")
                        ? "_blank"
                        : undefined
                    }
                    rel={
                      item.href.startsWith("https")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="
                      text-zinc-300
                      transition-colors
                      hover:text-violet-400
                    "
                  >
                    {item.value}
                  </Link>

                ) : (

                  <p className="text-zinc-300">
                    {item.value}
                  </p>

                )}

              </div>

            </div>

          );

        })}

      </div>

    </div>
  );
}