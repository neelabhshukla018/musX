/**
 * musX Design System
 * ---------------------------------------
 * Responsive Breakpoints
 */

export const breakpoints = {
  xs: 480,

  sm: 640,

  md: 768,

  lg: 1024,

  xl: 1280,

  "2xl": 1536,
} as const;

export const media = {
  xs: `(min-width: ${breakpoints.xs}px)`,

  sm: `(min-width: ${breakpoints.sm}px)`,

  md: `(min-width: ${breakpoints.md}px)`,

  lg: `(min-width: ${breakpoints.lg}px)`,

  xl: `(min-width: ${breakpoints.xl}px)`,

  "2xl": `(min-width: ${breakpoints["2xl"]}px)`,

  mobile: `(max-width: ${breakpoints.md - 1}px)`,

  tablet: `(min-width: ${breakpoints.md}px) and (max-width: ${breakpoints.lg - 1}px)`,

  desktop: `(min-width: ${breakpoints.lg}px)`,

  widescreen: `(min-width: ${breakpoints.xl}px)`,
} as const;

export type BreakpointToken = keyof typeof breakpoints;

export default breakpoints;