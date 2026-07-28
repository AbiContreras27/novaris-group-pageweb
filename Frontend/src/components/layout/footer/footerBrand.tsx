import Link from "next/link";

import { FOOTER_BRAND } from "./footerConstants";

export function FooterBrand() {
  return (
    <div className="space-y-6">

      <Link
        href="/"
        className="
          inline-block
          text-3xl
          font-bold
          tracking-tight
          text-white
          transition-colors
          hover:text-violet-400
        "
      >
        {FOOTER_BRAND.name}
      </Link>

      <p
        className="
          max-w-sm
          leading-8
          text-zinc-400
        "
      >
        {FOOTER_BRAND.description}
      </p>

      <div
        className="
          h-1
          w-20
          rounded-full
          bg-gradient-to-r
          from-violet-500
          to-fuchsia-500
        "
      />

    </div>
  );
}