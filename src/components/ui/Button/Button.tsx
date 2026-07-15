"use client";

import { forwardRef } from "react";
import clsx from "clsx";

import {
  BUTTON_BASE_CLASSES,
  BUTTON_SIZES,
  BUTTON_VARIANTS,
} from "./Button.constants";

import type { ButtonProps } from "./Button.types";

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      variant = "primary",
      size = "md",
      loading = false,
      disabled = false,
      fullWidth = false,
      rounded = false,
      leftIcon,
      rightIcon,
      className,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        disabled={disabled || loading}
        className={clsx(
          BUTTON_BASE_CLASSES,
          BUTTON_VARIANTS[variant],
          BUTTON_SIZES[size],

          fullWidth && "w-full",

          rounded ? "rounded-full" : "rounded-xl",

          className
        )}
        {...props}
      >
        {loading ? (
          <>
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

            <span>Loading...</span>
          </>
        ) : (
          <>
            {leftIcon}

            <span>{children}</span>

            {rightIcon}
          </>
        )}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;