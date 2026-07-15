"use client";

import { forwardRef } from "react";

import { cn } from "@/lib/cn";

import { CARD_CONTENT_CLASSES } from "./Card.constants";
import type { CardSectionProps } from "./Card.types";

const CardContent = forwardRef<HTMLDivElement, CardSectionProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          CARD_CONTENT_CLASSES,
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

CardContent.displayName = "CardContent";

export default CardContent;