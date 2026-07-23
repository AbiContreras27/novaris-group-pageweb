import type { ServiceDetailData } from "./serviceDetailTypes";

interface Props {
  service: ServiceDetailData;
}

export function ServiceOverview({
  service,
}: Props) {
  return (
    <section className="py-24">

      <div className="mx-auto max-w-7xl px-6">

        <div className="max-w-4xl">

          <span className="text-violet-400 uppercase tracking-[0.3em]">

            DESCRIPCIÓN

          </span>

          <h2 className="mt-4 text-5xl font-bold text-white">

            ¿Cómo ayudamos a tu empresa?

          </h2>

          <p className="mt-8 text-lg leading-9 text-zinc-400">

            {service.description}

          </p>

        </div>

      </div>

    </section>
  );
}