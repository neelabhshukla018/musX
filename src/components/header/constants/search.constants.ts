/* ==========================================================
   Search Placeholder
========================================================== */

export const SEARCH_PLACEHOLDER =
  "Search songs, artists, albums...";

/* ==========================================================
   Keyboard Shortcut
========================================================== */

export const SEARCH_SHORTCUT = {
  key: "k",
  modifier: "Ctrl",
};

/* ==========================================================
   Voice Search
========================================================== */

export const VOICE_LANGUAGE = "en-US";

/* ==========================================================
   Search Limits
========================================================== */

export const MAX_RECENT_SEARCHES = 10;

export const MAX_SUGGESTIONS = 8;

/* ==========================================================
   Search Delay
========================================================== */

export const SEARCH_DEBOUNCE = 300;

/* ==========================================================
   Search Sections
========================================================== */

export const SEARCH_SECTIONS = {
  RECENT: "Recent Searches",
  TRENDING: "Trending",
  QUICK: "Quick Access",
} as const;

/* ==========================================================
   Demo Data (Replace with API Later)
========================================================== */

export const RECENT_SEARCHES = [
  "Believer",
  "Arijit Singh",
  "Perfect",
  "Blinding Lights",
];

export const TRENDING_SEARCHES = [
  "Kesariya",
  "Die With A Smile",
  "Husn",
  "APT.",
];

export const QUICK_ACCESS = [
  "Liked Songs",
  "AI Mix",
  "Daily Mix",
  "Chill Vibes",
];