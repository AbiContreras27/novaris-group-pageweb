import { Heading, Typography } from "@/components/ui";

export function TechnologiesHeader() {
  return (
    <div className="mx-auto mb-20 max-w-3xl text-center">

      <span
        className="
          mb-4
          inline-flex
          rounded-full
          border
          border-[var(--color-primary)]
          bg-[var(--color-primary)]/10
          px-4
          py-2
          text-sm
          font-medium
          text-[var(--color-primary)]
        "
      >
        Tecnologías
      </span>

      <Heading
        as="h2"
        className="mb-6"
      >
        Construimos con tecnologías modernas
      </Heading>

      <Typography
        variant="lead"
        className="mx-auto max-w-2xl text-[var(--color-muted)]"
      >
        Utilizamos herramientas líderes en la industria para desarrollar
        soluciones rápidas, seguras y escalables.
      </Typography>

    </div>
  );
}