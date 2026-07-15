/**
 * musX Design System
 * ---------------------------------------
 * Typography Tokens
 */

export const typography = {
  fontFamily: {
    sans: "var(--font-inter)",
    heading: "var(--font-space-grotesk)",
    mono: "var(--font-jetbrains-mono)",
  },

  fontWeight: {
    thin: 100,
    extraLight: 200,
    light: 300,
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extraBold: 800,
    black: 900,
  },

  fontSize: {
    xs: "0.75rem",      // 12px
    sm: "0.875rem",     // 14px
    base: "1rem",       // 16px
    lg: "1.125rem",     // 18px
    xl: "1.25rem",      // 20px
    "2xl": "1.5rem",    // 24px
    "3xl": "1.875rem",  // 30px
    "4xl": "2.25rem",   // 36px
    "5xl": "3rem",      // 48px
    "6xl": "3.75rem",   // 60px
  },

  lineHeight: {
    none: 1,
    tight: 1.2,
    snug: 1.35,
    normal: 1.5,
    relaxed: 1.7,
    loose: 2,
  },

  letterSpacing: {
    tighter: "-0.05em",
    tight: "-0.025em",
    normal: "0",
    wide: "0.025em",
    wider: "0.05em",
    widest: "0.1em",
  },

  heading: {
    h1: {
      fontFamily: "var(--font-space-grotesk)",
      fontSize: "3rem",
      fontWeight: 700,
      lineHeight: 1.1,
      letterSpacing: "-0.03em",
    },

    h2: {
      fontFamily: "var(--font-space-grotesk)",
      fontSize: "2.25rem",
      fontWeight: 700,
      lineHeight: 1.15,
    },

    h3: {
      fontFamily: "var(--font-space-grotesk)",
      fontSize: "1.75rem",
      fontWeight: 600,
      lineHeight: 1.2,
    },

    h4: {
      fontFamily: "var(--font-space-grotesk)",
      fontSize: "1.375rem",
      fontWeight: 600,
      lineHeight: 1.3,
    },
  },

  body: {
    large: {
      fontSize: "1.125rem",
      fontWeight: 400,
      lineHeight: 1.7,
    },

    medium: {
      fontSize: "1rem",
      fontWeight: 400,
      lineHeight: 1.6,
    },

    small: {
      fontSize: "0.875rem",
      fontWeight: 400,
      lineHeight: 1.5,
    },
  },

  label: {
    fontSize: "0.875rem",
    fontWeight: 500,
    letterSpacing: "0.02em",
  },

  button: {
    fontSize: "1rem",
    fontWeight: 600,
    letterSpacing: "0.01em",
  },

  caption: {
    fontSize: "0.75rem",
    fontWeight: 400,
    lineHeight: 1.4,
  },
} as const;

export type TypographyToken = keyof typeof typography;

export default typography;