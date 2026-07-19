import { Container } from "@/components/ui";
import { HeroContent } from "./hero-content";
import { HeroIllustration } from "./hero-illustration";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden bg-[#0E0E0E] pt-24"
    >

      <Container>
        <div className="relative z-10 grid items-center gap-20 lg:grid-cols-2">
          <HeroContent />

          <HeroIllustration />
        </div>
      </Container>
    </section>
  );
}