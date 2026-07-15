"use client";

import { forwardRef } from "react";

import { cn } from "@/lib/cn";

import { CARD_FOOTER_CLASSES } from "./Card.constants";
import type { CardSectionProps } from "./Card.types";

const CardFooter = forwardRef<HTMLDivElement, CardSectionProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          CARD_FOOTER_CLASSES,
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

CardFooter.displayName = "CardFooter";

export default CardFooter;