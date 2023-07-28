import React, { forwardRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";

const button = cva("rounded-xl font-semibold", {
  variants: {
    variant: {
      contained: [
        "flex",
        "flex-row",
        "items-center",
        "justify-center",
        "w-[217px]",
        "py-[12px]",
        "px-[32px]",
        "gap-[10px]",
        "rounded-[12px]",
        "font-medium",
        "gradient-btn",
        "hover:opacity-80",
        "ease-in-out",
        "duration-300",
      ],
      outlined: [
        "flex",
        "flex-row",
        "items-center",
        "justify-center",
        "w-[217px]",
        "py-[10px]",
        "px-[26px]",
        "gap-[10px]",
        "rounded-[12px]",
        "font-medium",
        "border",
        "border-main",
        "text-main",
        "hover:bg-main",
        "hover:text-white",
        "ease-in-out",
        "duration-300",
      ],
      containedGreen: [
        "flex",
        "flex-row",
        "items-center",
        "justify-center",
        "w-[217px]",
        "py-[12px]",
        "px-[32px]",
        "gap-[10px]",
        "rounded-[12px]",
        "font-medium",
        "gradient-btn-green",
        "hover:opacity-80",
        "ease-in-out",
        "duration-300",
      ],
    },
    size: {
      small: ["text-xs"],
      medium: ["text-sm"],
      large: ["w-full"],
    },
  },
  defaultVariants: {
    variant: "contained",
    size: "medium",
  },
});

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof button> & {
    loading?: boolean;
  };

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, loading = false, children, ...props }, ref) => (
    <button
      ref={ref}
      className={button({ variant, size, className })}
      {...props}
    >
      {loading ? "Carregando..." : children}
    </button>
  )
);

Button.displayName = "Button";

export { Button };
