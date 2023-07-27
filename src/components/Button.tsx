import React from "react";
import { cva, type VariantProps } from "class-variance-authority";

const button = cva("button", {
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
        "py-[12px]",
        "px-[32px]",
        "gap-[10px]",
        "rounded-[12px]",
        "font-medium",
        "gradient-border",
        "hover:opacity-80",
        "ease-in-out",
        "duration-300",
      ],
    },
    size: {
      small: ["text-xs"],
      medium: ["text-sm"],
    },
  },
  compoundVariants: [{ variant: "contained", size: "medium" }],
  defaultVariants: {
    variant: "contained",
    size: "medium",
  },
});

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof button> {
  loading?: boolean;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  className,
  variant,
  size,
  loading,
  children,
  ...props
}) => (
  <button className={button({ variant, size, className })} {...props}>
    {loading ? "Carregandp ..." : children}
  </button>
);
