import { HTMLAttributes } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium transition-colors",
  {
    variants: {
      variant: {
        primary:
          "bg-[#3E003F] text-white",

        secondary:
          "bg-[#1A1A1A] text-white border border-[#2A2A2A]",

        success:
          "bg-green-600 text-white",

        warning:
          "bg-yellow-500 text-black",

        danger:
          "bg-red-600 text-white",

        outline:
          "border border-[#3E003F] text-[#7C5CFF]",
      },
    },

    defaultVariants: {
      variant: "primary",
    },
  }
);

export interface BadgeProps
  extends HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

export function Badge({
  className,
  variant,
  ...props
}: BadgeProps) {
  return (
    <span
      className={cn(
        badgeVariants({ variant }),
        className
      )}
      {...props}
    />
  );
}