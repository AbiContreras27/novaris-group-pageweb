import { Container } from "@/components/ui/container";
import { HeroBackground } from "./heroBackground";
import { HeroContent } from "./heroContent";
import { HeroVisual } from "./heroVisual";
import { ScrollIndicator } from "./scrollIndicator";

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-24 lg:pt-28">
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