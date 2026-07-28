import Link from "next/link";

import { FOOTER_NAVIGATION } from "./footerConstants";

export function FooterNavigation() {
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
        {FOOTER_NAVIGATION.title}
      </h3>

      <ul className="space-y-4">

        {FOOTER_NAVIGATION.links.map((link) => (
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