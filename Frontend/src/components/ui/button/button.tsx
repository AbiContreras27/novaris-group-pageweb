import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export function Button({ children, ...props }: ButtonProps) {
  return (
    <button
      className="bg-purple-700 text-white px-6 py-3 rounded-xl"
      {...props}
    >
      {children}
    </button>
  );
}