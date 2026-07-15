/**
 * musX Design System
 * ---------------------------------------
 * Color Tokens
 */

export const colors = {
  background: "var(--background)",
  surface: "var(--surface)",
  surfaceSecondary: "var(--surface-secondary)",
  surfaceHover: "var(--surface-hover)",

  foreground: "var(--foreground)",
  textSecondary: "var(--text-secondary)",
  textMuted: "var(--text-muted)",

  border: "var(--border)",
  borderLight: "var(--border-light)",

  primary: "var(--primary)",
  primaryHover: "var(--primary-hover)",
  primarySoft: "var(--primary-soft)",

  accent: "var(--accent)",
  accentSoft: "var(--accent-soft)",

  success: "var(--success)",
  warning: "var(--warning)",
  danger: "var(--danger)",
} as const;

export type ColorToken = keyof typeof colors;

export default colors;