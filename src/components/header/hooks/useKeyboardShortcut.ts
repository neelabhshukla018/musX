"use client";

import { useEffect } from "react";

import type { KeyboardShortcutOptions } from "../types/header.types";

import {
  isEscapeKey,
  isSearchShortcut,
} from "../utils/keyboard";

export default function useKeyboardShortcut({
  onOpen,
  onClose,
}: KeyboardShortcutOptions) {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (isSearchShortcut(event)) {
        event.preventDefault();
        onOpen();
      }

      if (isEscapeKey(event)) {
        onClose?.();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener(
        "keydown",
        handleKeyDown
      );
    };
  }, [onOpen, onClose]);
}