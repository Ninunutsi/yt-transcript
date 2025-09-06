import { forwardRef } from "react";
import type { ButtonHTMLAttributes } from "react";
import type { ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "copy" | "pdf";
  children: ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "primary", className, children, ...props }, ref) => {
    const baseStyles =
      "px-4 py-2 rounded-md font-semibold focus:outline-none focus:ring-2 focus:ring-offset-1 transition-colors duration-200";

    const variantStyles: Record<string, string> = {
      primary:
        "bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white hover:bg-blue-600 focus:ring-blue-500",
      copy: "bg-gray-700 text-white hover:bg-green-600 focus:ring-green-500",
      pdf: "bg-blue-500 text-white hover:bg-red-600 focus:ring-red-500",
    };

    return (
      <button
        ref={ref}
        className={`${baseStyles} ${variantStyles[variant]} ${className || ""}`}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
