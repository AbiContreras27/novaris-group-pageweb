import { Container } from "@/components/ui";

import { FooterBackground } from "./footerBackground";
import { FooterBrand } from "./footerBrand";
import { FooterNavigation } from "./footerNavigation";
import { FooterServices } from "./footerServices";
import { FooterContact } from "./footerContact";
import { FooterSocial } from "./footerSocial";
import { FooterBottom } from "./footerBottom";

export function Footer() {
  return (
    <footer
      className="
        relative
        overflow-hidden
        border-t
        border-white/10
        bg-[#0B0B0B]
      "
    >
      <FooterBackground />

      <Container>

        <div
          className="
            relative
            z-10
            py-20
          "
        >
          <div
            className="
              grid
              gap-14
              lg:grid-cols-[2fr_1fr_1fr_1.2fr]
            "
          >
            <FooterBrand />

            <FooterNavigation />

            <FooterServices />

            <div className="space-y-10">
              <FooterContact />

              <FooterSocial />
            </div>

          </div>

          <FooterBottom />

        </div>

      </Container>

    </footer>
  );
}