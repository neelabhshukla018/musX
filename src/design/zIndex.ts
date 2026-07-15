/**
 * musX Design System
 * ---------------------------------------
 * Z-Index Tokens
 */

export const zIndex = {
  hide: -1,

  base: 0,

  content: 1,

  sticky: 10,

  dropdown: 100,

  header: 200,

  sidebar: 300,

  bottomPlayer: 400,

  floatingButton: 500,

  toast: 600,

  tooltip: 700,

  popover: 800,

  modalBackdrop: 900,

  modal: 1000,

  drawer: 1100,

  aiAssistant: 1200,

  commandPalette: 1300,

  onboarding: 1400,

  loadingOverlay: 1500,
} as const;

export type ZIndexToken = keyof typeof zIndex;

export default zIndex;