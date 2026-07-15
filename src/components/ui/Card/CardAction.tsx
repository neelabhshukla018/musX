"use client";

import { forwardRef } from "react";

import { cn } from "@/lib/cn";

import { CARD_ACTION_CLASSES } from "./Card.constants";
import type { CardActionProps } from "./Card.types";

const CardAction = forwardRef<HTMLDivElement, CardActionProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          CARD_ACTION_CLASSES,
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

CardAction.displayName = "CardAction";

export default CardAction;