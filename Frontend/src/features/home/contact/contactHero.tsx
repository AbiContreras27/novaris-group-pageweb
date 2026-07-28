import { CONTACT_CONTENT } from "./contactConstants";
import { Container } from "@/components/ui";

export function ContactHero() {
  return (
    <section className="relative pt-40 pb-24">
      <Container>
        <div className="mx-auto max-w-4xl text-center">

          <span
            className="
              inline-flex
              items-center
              rounded-full
              border
              border-violet-500/30
              bg-violet-500/10
              px-5
              py-2
              text-sm
              font-medium
              text-violet-300
            "
          >
            {CONTACT_CONTENT.badge}
          </span>

          <h1 className="mt-8 text-5xl font-bold leading-tight text-white lg:text-7xl">
            {CONTACT_CONTENT.title}{" "}
            <span className="bg-gradient-to-r from-violet-400 to-fuchsia-500 bg-clip-text text-transparent">
              {CONTACT_CONTENT.highlight}
            </span>
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-zinc-400">
            {CONTACT_CONTENT.description}
          </p>
        </div>
      </Container>
    </section>
  );
}