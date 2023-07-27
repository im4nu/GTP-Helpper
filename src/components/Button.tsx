import React from "react";
import { cva, type VariantProps } from "class-variance-authority";

const button = cva("button", {
  variants: {
    variant: {
      contained: [
        "display: flex",
        "flex-direction: flex-row",
        "align-items: center",
        "width: 217px",
        "padding: 12px 32px",
        "justify-content: center",
        "align-items: center",
        "gap: 10px",
        "border-radius: 12px",
        "background: linear-gradient(180deg, #602DA2 0%, #6376A4 100%)",
      ],
      outlined: [
        "display: flex",
        "flex-direction: flex-row",
        "align-items: center",
        "width: 217px",
        "padding: 12px 32px",
        "justify-content: center",
        "align-items: center",
        "gap: 10px",
        "border-radius: 12px",
        "border: solid 1px linear-gradient(180deg, #602DA2 0%, #6376A4 100%)",
      ],
    },
    size: {
      small: ["text-sm", "p-3"],
      medium: ["text-base", "p-4"],
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
