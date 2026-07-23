import { SERVICES } from "./servicesConstants";
import { ServiceCard } from "./serviceCard";

export function ServicesGrid() {
  return (
    <div
      className="
        mt-20
        grid
        gap-8
        md:grid-cols-2
        xl:grid-cols-3
      "
    >
      {SERVICES.map((service, index) => (
        <ServiceCard
          key={service.id}
          service={service}
          index={index}
        />
      ))}
    </div>
  );
}