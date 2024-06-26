import { type ComponentProps } from "react";
import NextLink from "next/link";
import { cva, type VariantProps } from "class-variance-authority";

const link = cva("link", {
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
      none: [],
    },
    size: {
      small: ["text-xs"],
      medium: ["text-sm"],
      large: ["w-full"],
    },
  },
  compoundVariants: [{ variant: "contained", size: "medium" }],
  defaultVariants: {
    variant: "contained",
    size: "medium",
  },
});

export type Props = VariantProps<typeof link> & ComponentProps<typeof NextLink>;

export function Link({ className, variant, size, ...props }: Props) {
  return <NextLink className={link({ variant, size, className })} {...props} />;
}
