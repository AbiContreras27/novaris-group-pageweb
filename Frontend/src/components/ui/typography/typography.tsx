import { ElementType, ReactNode } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const typographyVariants = cva("", {
  variants: {
    variant: {
      hero: "text-6xl lg:text-7xl font-bold tracking-tight text-white",

      h1: "text-5xl lg:text-6xl font-bold tracking-tight text-white",

      h2: "text-4xl lg:text-5xl font-bold tracking-tight text-white",

      h3: "text-3xl font-semibold text-white",

      h4: "text-2xl font-semibold text-white",

      body: "text-lg leading-8 text-gray-300",

      bodySmall: "text-base leading-7 text-gray-400",

      caption: "text-sm text-gray-500",

      label: "text-sm font-medium uppercase tracking-wider text-[#7C5CFF]",
    },
  },

  defaultVariants: {
    variant: "body",
  },
});

interface TypographyProps
  extends VariantProps<typeof typographyVariants> {
  as?: ElementType;
  children: ReactNode;
  className?: string;
}

export function Typography({
  as: Component = "p",
  variant,
  children,
  className,
}: TypographyProps) {
  return (
    <Component
      className={cn(
        typographyVariants({ variant }),
        className
      )}
    >
      {children}
    </Component>
  );
}