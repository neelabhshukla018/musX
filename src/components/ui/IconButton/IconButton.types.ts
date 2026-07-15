import { ButtonHTMLAttributes, ReactNode } from "react";

export type IconButtonVariant =
  | "primary"
  | "secondary"
  | "outline"
  | "ghost"
  | "danger"
  | "success"
  | "warning";

export type IconButtonSize =
  | "xs"
  | "sm"
  | "md"
  | "lg"
  | "xl";

export interface IconButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: IconButtonVariant;

  size?: IconButtonSize;

  loading?: boolean;

  rounded?: boolean;

  icon: ReactNode;

  tooltip?: string;
}