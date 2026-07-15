import {
  IconButtonSize,
  IconButtonVariant,
} from "./IconButton.types";

export const ICON_BUTTON_BASE_CLASSES = `
inline-flex
items-center
justify-center
flex-shrink-0
transition-all
duration-200
ease-out
select-none
disabled:pointer-events-none
disabled:opacity-50
focus-visible:outline-none
focus-visible:ring-2
focus-visible:ring-[var(--primary)]
focus-visible:ring-offset-2
`;

export const ICON_BUTTON_VARIANTS: Record<
  IconButtonVariant,
  string
> = {
  primary: `
    bg-[var(--primary)]
    text-white
    hover:opacity-90
    active:scale-95
  `,

  secondary: `
    bg-[var(--surface-secondary)]
    text-[var(--foreground)]
    border
    border-[var(--border)]
    hover:bg-[var(--surface-hover)]
  `,

  outline: `
    bg-transparent
    text-[var(--foreground)]
    border
    border-[var(--border)]
    hover:bg-[var(--surface-hover)]
  `,

  ghost: `
    bg-transparent
    text-[var(--foreground)]
    hover:bg-[var(--surface-hover)]
  `,

  success: `
    bg-[var(--success)]
    text-white
    hover:opacity-90
  `,

  warning: `
    bg-[var(--warning)]
    text-black
    hover:opacity-90
  `,

  danger: `
    bg-[var(--danger)]
    text-white
    hover:opacity-90
  `,
};

export const ICON_BUTTON_SIZES: Record<
  IconButtonSize,
  string
> = {
  xs: "h-8 w-8 text-sm",

  sm: "h-9 w-9 text-base",

  md: "h-11 w-11 text-lg",

  lg: "h-12 w-12 text-xl",

  xl: "h-14 w-14 text-2xl",
};