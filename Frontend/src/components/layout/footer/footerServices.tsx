import Link from "next/link";

import { FOOTER_SERVICES } from "./footerConstants";

export function FooterServices() {
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
        {FOOTER_SERVICES.title}
      </h3>

      <ul className="space-y-4">

        {FOOTER_SERVICES.links.map((link) => (

          <li key={link.href}>

            <Link
              href={link.href}
              className="
                text-zinc-400
                transition-colors
                duration-300
                hover:text-violet-400
              "
            >
              {link.label}
            </Link>

          </li>

        ))}

      </ul>

    </div>
  );
}