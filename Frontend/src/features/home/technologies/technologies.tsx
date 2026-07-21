import { Container, Section } from "@/components/ui";

import { TechnologiesHeader } from "./technologies-header";
import { TechnologiesGrid } from "./technologird-grid";

export function Technologies() {
  return (
    <Section id="technologies">
      <Container>

        <TechnologiesHeader />

        <TechnologiesGrid />

      </Container>
    </Section>
  );
}