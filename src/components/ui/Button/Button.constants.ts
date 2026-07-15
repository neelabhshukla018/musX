import { ButtonSize, ButtonVariant } from "./Button.types";

export const BUTTON_VARIANTS: Record<ButtonVariant, string> = {
  primary: `
    bg-[var(--primary)]
    text-white
    hover:opacity-90
    active:scale-[0.98]
    shadow-md
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

export const BUTTON_SIZES: Record<ButtonSize, string> = {
  xs: "h-8 px-3 text-xs",
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-5 text-base",
  lg: "h-12 px-6 text-lg",
  xl: "h-14 px-8 text-xl",
};

export const BUTTON_BASE_CLASSES = `
inline-flex
items-center
justify-center
gap-2
font-semibold
select-none
whitespace-nowrap
transition-all
duration-200
ease-out
disabled:pointer-events-none
disabled:opacity-50
focus-visible:outline-none
focus-visible:ring-2
focus-visible:ring-[var(--primary)]
focus-visible:ring-offset-2
`;