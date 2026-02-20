/**
 * Reusable button with variants (primary, secondary, outline, etc.) and sizes.
 */
import { forwardRef } from "react";

const variants = {
  primary:
    "bg-(--main-color) text-(--white-color) hover:bg-(--secondary-color)",
  secondary:
    "bg-(--secondary-color) text-(--white-color) hover:opacity-90",
  outline:
    "border-2 border-(--main-color) text-(--main-color) bg-transparent hover:bg-(--main-color) hover:text-(--white-color)",
  ghost: "text-(--main-color) hover:bg-gray-100",
  danger: "bg-red-600 text-white hover:bg-red-700",
};

const sizes = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-4 py-2 text-base",
  lg: "px-6 py-3 text-lg",
};

export const Button = forwardRef(
  (
    {
      variant = "primary",
      size = "md",
      className = "",
      disabled = false,
      type = "button",
      children,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        type={type}
        disabled={disabled}
        className={`
          rounded-lg font-semibold transition inline-flex items-center justify-center gap-2
          disabled:opacity-50 disabled:cursor-not-allowed
          ${variants[variant] ?? variants.primary}
          ${sizes[size] ?? sizes.md}
          ${className}
        `.trim()}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
