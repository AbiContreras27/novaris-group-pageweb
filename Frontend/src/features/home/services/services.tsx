import { Section, Container } from "@/components/ui";
import { ServicesHeader } from "./services-header";
import { ServicesGrid } from "./services-grid";

export function Services() {
  return (
    <Section>
      <Container>

        <ServicesHeader />

        <ServicesGrid />

      </Container>
    </Section>
  );
}