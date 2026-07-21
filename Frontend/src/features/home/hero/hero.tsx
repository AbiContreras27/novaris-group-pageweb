import { Container } from "@/components/ui/container";
import { HeroBackground } from "./heroBackground";
import { HeroContent } from "./heroContent";
import { HeroVisual } from "./heroVisual";
import { ScrollIndicator } from "./scrollIndicator";

export function Hero() {
  return (
    <section className="relative overflow-hidden min-h-[90vh] flex items-center">
      <HeroBackground />

      <Container className="relative z-10">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <HeroContent />
          <HeroVisual />
        </div>
      </Container>

      <ScrollIndicator />
    </section>
  );
}