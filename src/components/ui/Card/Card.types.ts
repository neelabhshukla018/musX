import {
  HTMLAttributes,
  ReactNode,
} from "react";

export type CardVariant =
  | "default"
  | "outlined"
  | "glass"
  | "elevated"
  | "flat"
  | "interactive";

export type CardPadding =
  | "none"
  | "xs"
  | "sm"
  | "md"
  | "lg"
  | "xl";

export interface CardProps
  extends HTMLAttributes<HTMLDivElement> {
  variant?: CardVariant;

  padding?: CardPadding;

  hoverable?: boolean;

  clickable?: boolean;

  loading?: boolean;

  children: ReactNode;
}

export interface CardSectionProps
  extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export interface CardActionProps
  extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}