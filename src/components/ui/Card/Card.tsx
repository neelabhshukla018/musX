"use client";

import { forwardRef } from "react";

import { cn } from "@/lib/cn";

import {
  CARD_BASE_CLASSES,
  CARD_PADDING,
  CARD_VARIANTS,
} from "./Card.constants";

import type { CardProps } from "./Card.types";

const Card = forwardRef<HTMLDivElement, CardProps>(
  (
    {
      children,
      variant = "default",
      padding = "md",
      hoverable = false,
      clickable = false,
      loading = false,
      className,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          CARD_BASE_CLASSES,

          CARD_VARIANTS[variant],

          CARD_PADDING[padding],

          hoverable &&
            "hover:-translate-y-1 hover:shadow-xl",

          clickable &&
            "cursor-pointer active:scale-[0.99]",

          loading &&
            "pointer-events-none opacity-60",

          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = "Card";

export default Card;