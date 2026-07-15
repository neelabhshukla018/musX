"use client";

import { forwardRef } from "react";

import { cn } from "@/lib/cn";

import {
  ICON_BUTTON_BASE_CLASSES,
  ICON_BUTTON_SIZES,
  ICON_BUTTON_VARIANTS,
} from "./IconButton.constants";

import type { IconButtonProps } from "./IconButton.types";

const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  (
    {
      icon,
      variant = "ghost",
      size = "md",
      rounded = true,
      loading = false,
      disabled = false,
      tooltip,
      className,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        type={props.type ?? "button"}
        disabled={disabled || loading}
        aria-label={tooltip}
        title={tooltip}
        className={cn(
          ICON_BUTTON_BASE_CLASSES,
          ICON_BUTTON_VARIANTS[variant],
          ICON_BUTTON_SIZES[size],

          rounded ? "rounded-full" : "rounded-xl",

          className
        )}
        {...props}
      >
        {loading ? (
          <span
            className="
              h-4
              w-4
              animate-spin
              rounded-full
              border-2
              border-current
              border-t-transparent
            "
          />
        ) : (
          icon
        )}
      </button>
    );
  }
);

IconButton.displayName = "IconButton";

export default IconButton;