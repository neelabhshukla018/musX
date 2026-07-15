/**
 * musX Design System
 * ---------------------------------------
 * Shadow Tokens
 */

export const shadows = {
  none: "none",

  xs: "var(--shadow-xs)",

  sm: "var(--shadow-sm)",

  md: "var(--shadow-md)",

  lg: "var(--shadow-lg)",

  neumorphism:
    `
    -8px -8px 16px rgba(255,255,255,.85),
     8px  8px 16px rgba(174,184,201,.35)
    `,

  neumorphismInset:
    `
    inset -3px -3px 6px rgba(255,255,255,.9),
    inset 3px 3px 6px rgba(0,0,0,.08)
    `,

  glowPrimary:
    `
    0 0 12px rgba(61,217,235,.35),
    0 0 24px rgba(61,217,235,.15)
    `,

  glowAccent:
    `
    0 0 12px rgba(255,138,61,.35),
    0 0 24px rgba(255,138,61,.15)
    `,

  glowSuccess:
    `
    0 0 12px rgba(49,209,124,.35)
    `,
} as const;

export type ShadowToken = keyof typeof shadows;

export default shadows;