import { ElementType, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface HeadingProps {
  as?: ElementType;
  children: ReactNode;
  className?: string;
}

export function Heading({
  as: Component = "h2",
  children,
  className,
}: HeadingProps) {
  return (
    <Component
      className={cn(
        "font-bold tracking-tight text-white",
        "text-4xl md:text-5xl",
        className
      )}
    >
      {children}
    </Component>
  );
}