import { forwardRef } from "react";
import type { InputHTMLAttributes } from "react";
import type { ReactNode } from "react";

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  icon?: ReactNode;
}

const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  ({ label, error, icon, className, ...props }, ref) => {
    return (
      <div className="flex flex-col w-full ">
        {label && <label className="mb-1 text-sm font-medium">{label}</label>}
        <div className="relative">
          {icon && (
            <div className="absolute right-7 top-1/2 -translate-y-1/2">
              {icon}
            </div>
          )}
          <input
            ref={ref}
            type="text"
            className={`w-full border text-ghost_white rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-900 ${
              icon ? "pl-10" : ""
            } ${error ? "border-red-500" : "border-blue-400"} ${
              className || ""
            }`}
            {...props}
          />
        </div>
        {error && <span className="text-red-500 text-m mt-1">{error}</span>}
      </div>
    );
  }
);

TextInput.displayName = "TextInput";

export default TextInput;
