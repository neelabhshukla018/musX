/* ==========================================================
   Search
========================================================== */

export interface SearchModalProps {
  open: boolean;
  onClose: () => void;
}

export interface SearchShortcut {
  key: string;
  modifier: string;
}

export interface SearchSuggestion {
  id: string;
  title: string;
  type:
    | "song"
    | "artist"
    | "album"
    | "playlist";
}

export interface QuickAccessItem {
  id: string;
  title: string;
  icon: React.ElementType;
}

/* ==========================================================
   Theme
========================================================== */

export interface ThemeSwitchProps {
  active: boolean;
}

export interface ThemeIconProps {
  type: "sun" | "moon";
  active: boolean;
}

/* ==========================================================
   Voice Search
========================================================== */

export interface VoiceSearchState {
  supported: boolean;
  listening: boolean;
  transcript: string;
}

export interface VoiceSearchControls {
  startListening: () => void;
  stopListening: () => void;
  toggleListening: () => void;
}

/* ==========================================================
   Keyboard Shortcut
========================================================== */

export interface KeyboardShortcutOptions {
  onOpen: () => void;
  onClose?: () => void;
}