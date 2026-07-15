/* ==========================================================
   Search Shortcut (Ctrl/Cmd + K)
========================================================== */

export function isSearchShortcut(
  event: KeyboardEvent
): boolean {
  return (
    (event.ctrlKey || event.metaKey) &&
    event.key.toLowerCase() === "k"
  );
}

/* ==========================================================
   Escape Key
========================================================== */

export function isEscapeKey(
  event: KeyboardEvent
): boolean {
  return event.key === "Escape";
}

/* ==========================================================
   Enter Key
========================================================== */

export function isEnterKey(
  event: KeyboardEvent
): boolean {
  return event.key === "Enter";
}

/* ==========================================================
   Arrow Navigation
========================================================== */

export function isArrowUp(
  event: KeyboardEvent
): boolean {
  return event.key === "ArrowUp";
}

export function isArrowDown(
  event: KeyboardEvent
): boolean {
  return event.key === "ArrowDown";
}