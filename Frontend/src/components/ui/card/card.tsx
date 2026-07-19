import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface CardProps {
  children: ReactNode;
  className?: string;
}

export function Card({
  children,
  className,
}: CardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl bg-[#1A1A1A] border border-[#2A2A2A] p-8 transition-all duration-300 hover:border-[#3E003F] hover:-translate-y-1",
        className
      )}
    >
      {children}
    </div>
  );
}