import { forwardRef, InputHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export interface InputProps
  extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, className, ...props }, ref) => {
    return (
      <div className="flex flex-col gap-2 w-full">

        {label && (
          <label className="text-sm font-medium text-white">
            {label}
          </label>
        )}

        <input
          ref={ref}
          className={cn(
            "h-12 w-full rounded-xl",
            "border border-[#2A2A2A]",
            "bg-[#1A1A1A]",
            "px-4",
            "text-white",
            "placeholder:text-gray-500",
            "transition-all duration-300",
            "outline-none",
            "focus:border-[#7C5CFF]",
            "focus:ring-2",
            "focus:ring-[#7C5CFF]/20",
            error &&
              "border-red-500 focus:border-red-500 focus:ring-red-500/20",
            className
          )}
          {...props}
        />

        {error && (
          <span className="text-sm text-red-500">
            {error}
          </span>
        )}

      </div>
    );
  }
);

Input.displayName = "Input";