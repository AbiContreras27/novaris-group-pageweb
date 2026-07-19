import { ServiceCard } from "./service-card";

const services = [
  {
    icon: "💻",
    title: "Desarrollo de Software",
    description:
      "Creamos aplicaciones web, sistemas empresariales, APIs y plataformas escalables con tecnologías modernas.",
  },
  {
    icon: "🌐",
    title: "Infraestructura TI",
    description:
      "Implementamos redes, servidores, virtualización y soluciones cloud para empresas.",
  },
  {
    icon: "🛡️",
    title: "Ciberseguridad",
    description:
      "Protegemos la infraestructura tecnológica mediante monitoreo, respaldos y buenas prácticas de seguridad.",
  },
  {
    icon: "📊",
    title: "Business Intelligence",
    description:
      "Construimos dashboards y reportes para transformar datos en decisiones estratégicas.",
  },
  {
    icon: "🖥️",
    title: "Soporte Técnico",
    description:
      "Brindamos soporte preventivo y correctivo para garantizar la continuidad de tu operación.",
  },
  {
    icon: "⚙️",
    title: "Automatización",
    description:
      "Automatizamos procesos de negocio para aumentar la productividad y reducir costos operativos.",
  },
];

export function ServicesGrid() {
  return (
    <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
      {services.map((service) => (
        <ServiceCard
          key={service.title}
          icon={service.icon}
          title={service.title}
          description={service.description}
        />
      ))}
    </div>
  );
}