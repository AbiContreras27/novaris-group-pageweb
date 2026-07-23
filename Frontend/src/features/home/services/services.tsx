import { Container } from "@/components/ui/container";

import { ServicesBackground } from "./servicesBackground";
import { ServicesGrid } from "./servicesGrid";
import { ServicesHeader } from "./servicesHeader";

export function Services() {
  return (
    <section
      id="servicios"
      className="relative overflow-hidden bg-[#0E0E0E] py-24 lg:py-32"
    >
      <ServicesBackground />

      <Container className="relative z-10">
        <ServicesHeader />

        <ServicesGrid />
      </Container>
    </section>
  );
}