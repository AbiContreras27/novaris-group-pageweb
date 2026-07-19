import { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface GridProps extends HTMLAttributes<HTMLDivElement> {
  columns?: 1 | 2 | 3 | 4;
}

export function Grid({
  columns = 3,
  className,
  children,
  ...props
}: GridProps) {
  const cols = {
    1: "grid-cols-1",
    2: "grid-cols-2",
    3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
  };

  return (
    <div
      className={cn(
        "grid gap-8",
        cols[columns],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}