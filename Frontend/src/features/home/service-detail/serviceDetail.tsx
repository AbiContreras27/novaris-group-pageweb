import type { ServiceDetailData } from "./serviceDetailTypes";

import { ServiceBackground } from "./serviceBackground";
import { ServiceHero } from "./serviceHero";
import { ServiceOverview } from "./serviceOverview";
import { ServiceBenefits } from "./serviceBenefits";
import { ServiceProcess } from "./serviceProcess";
import { ServiceTechnologies } from "./serviceTechnologies";
import { ServiceCTA } from "./serviceCTA";

interface ServiceDetailProps {
  service: ServiceDetailData;
}

export function ServiceDetail({
  service,
}: ServiceDetailProps) {
  return (
    <main className="relative overflow-hidden bg-[#0E0E0E]">

      <ServiceBackground />

      <div className="relative z-10">

        <ServiceHero service={service} />

        <ServiceOverview service={service} />

        <ServiceBenefits service={service} />

        <ServiceProcess service={service} />

        <ServiceTechnologies service={service} />

        <ServiceCTA service={service} />

      </div>

    </main>
  );
}