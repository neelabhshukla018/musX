import { CardPadding, CardVariant } from "./Card.types";

export const CARD_BASE_CLASSES = `
relative
overflow-hidden
rounded-3xl
transition-all
duration-300
select-none
`;

export const CARD_VARIANTS: Record<CardVariant, string> = {
  default: `
    bg-[var(--surface)]
    border
    border-[var(--border)]
    shadow-md
  `,

  outlined: `
    bg-transparent
    border
    border-[var(--border)]
  `,

  elevated: `
    bg-[var(--surface)]
    border
    border-[var(--border)]
    shadow-lg
  `,

  flat: `
    bg-[var(--surface)]
  `,

  glass: `
    glass
    border
    border-[var(--border-light)]
  `,

  interactive: `
    bg-[var(--surface)]
    border
    border-[var(--border)]
    shadow-md
    cursor-pointer
    hover:-translate-y-1
    hover:shadow-lg
    active:scale-[0.99]
  `,
};

export const CARD_PADDING: Record<CardPadding, string> = {
  none: "p-0",

  xs: "p-2",

  sm: "p-4",

  md: "p-6",

  lg: "p-8",

  xl: "p-10",
};

export const CARD_HEADER_CLASSES = `
flex
items-center
justify-between
gap-4
mb-5
`;

export const CARD_CONTENT_CLASSES = `
flex
flex-col
gap-4
`;

export const CARD_FOOTER_CLASSES = `
flex
items-center
justify-between
gap-4
mt-6
pt-5
border-t
border-[var(--border-light)]
`;

export const CARD_ACTION_CLASSES = `
flex
items-center
gap-2
ml-auto
`;