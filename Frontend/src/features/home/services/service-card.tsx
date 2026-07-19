import { ReactNode } from "react";
import { Card, Heading, Typography } from "@/components/ui";

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export function ServiceCard({
  icon,
  title,
  description,
}: ServiceCardProps) {
  return (
    <Card className="group h-full cursor-pointer transition-all duration-500 hover:-translate-y-2 hover:border-[#7C5CFF]">

      <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#3E003F]/10 text-4xl transition-all duration-300 group-hover:bg-[#3E003F]/20">
        {icon}
      </div>

      <Heading
        as="h3"
        className="mb-4 text-2xl"
      >
        {title}
      </Heading>

      <Typography
        variant="body"
        className="leading-7 text-gray-400"
      >
        {description}
      </Typography>

    </Card>
  );
}