/**
 * musX Design System
 * ---------------------------------------
 * Animation Tokens
 */

export const animations = {
  duration: {
    instant: "0ms",

    fastest: "100ms",

    fast: "150ms",

    normal: "250ms",

    slow: "400ms",

    slower: "600ms",

    slowest: "800ms",
  },

  easing: {
    linear: "linear",

    ease: "ease",

    easeIn: "ease-in",

    easeOut: "ease-out",

    easeInOut: "ease-in-out",

    smooth: "cubic-bezier(0.4, 0, 0.2, 1)",

    spring: "cubic-bezier(0.34, 1.56, 0.64, 1)",

    bounce: "cubic-bezier(0.68, -0.6, 0.32, 1.6)",
  },

  transition: {
    fast: "all 150ms ease",

    normal: "all 250ms cubic-bezier(0.4, 0, 0.2, 1)",

    slow: "all 400ms cubic-bezier(0.4, 0, 0.2, 1)",

    spring: "all 350ms cubic-bezier(0.34, 1.56, 0.64, 1)",
  },

  scale: {
    hover: 1.03,

    press: 0.97,

    active: 0.95,
  },

  opacity: {
    hidden: 0,

    visible: 1,
  },

  blur: {
    none: "0px",

    sm: "4px",

    md: "8px",

    lg: "16px",
  },

  rotate: {
    none: "0deg",

    quarter: "90deg",

    half: "180deg",

    full: "360deg",
  },

  translate: {
    xs: "2px",

    sm: "4px",

    md: "8px",

    lg: "16px",

    xl: "24px",
  },
} as const;

export type AnimationToken = keyof typeof animations;

export default animations;