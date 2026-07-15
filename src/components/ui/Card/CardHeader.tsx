"use client";

import { forwardRef } from "react";

import { cn } from "@/lib/cn";

import { CARD_HEADER_CLASSES } from "./Card.constants";
import type { CardSectionProps } from "./Card.types";

const CardHeader = forwardRef<HTMLDivElement, CardSectionProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          CARD_HEADER_CLASSES,
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

CardHeader.displayName = "CardHeader";

export default CardHeader;