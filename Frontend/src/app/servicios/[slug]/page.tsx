import type { Metadata } from "next";
import { notFound } from "next/navigation";

import {
  SERVICE_DETAILS,
  ServiceDetail,
} from "@/features/home/service-detail";

import { generateMetadata as createMetadata } from "@/lib/seo/seo";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug } = await params;

  const service = SERVICE_DETAILS.find(
    (item) => item.slug === slug
  );

  if (!service) {
    return {};
  }

  return createMetadata({
    title: service.seo.title,
    description: service.seo.description,
    path: `/servicios/${slug}`,
  });
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