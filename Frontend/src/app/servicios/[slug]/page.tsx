import { notFound } from "next/navigation";

import { SERVICE_DETAILS } from "@/features/home/service-detail";
import { ServiceDetail } from "@/features/home/service-detail";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ServicePage({
  params,
}: Props) {
  const { slug } = await params;

  const service = SERVICE_DETAILS.find(
    (item) => item.slug === slug
  );

  if (!service) {
    notFound();
  }

  return <ServiceDetail service={service} />;
}