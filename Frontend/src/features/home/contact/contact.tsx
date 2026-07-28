import { Container } from "@/components/ui";

import { ContactBackground } from "./contactBackground";
import { ContactHero } from "./contactHero";
import { ContactInfo } from "./contactInfo";
import { ContactForm } from "./contactForm";
import { ContactMap } from "./contactMap";
import { ContactCTA } from "./contactCTA";

export function Contact() {
  return (
    <main className="relative overflow-hidden bg-[#0E0E0E]">

      <ContactBackground />

      <ContactHero />

      <ContactInfo />

      <section className="pb-24">
        <Container>

          <div className="mx-auto max-w-4xl">
            <ContactForm />
          </div>

        </Container>
      </section>

      <section className="pb-24">
        <Container>
          <ContactMap />
        </Container>
      </section>

      <ContactCTA />

    </main>
  );
}