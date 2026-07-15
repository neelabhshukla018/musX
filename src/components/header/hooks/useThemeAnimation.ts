"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export default function useThemeAnimation() {
  const { resolvedTheme } = useTheme();

  const [mounted, setMounted] = useState(false);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    setAnimating(true);

    const timer = setTimeout(() => {
      setAnimating(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [resolvedTheme, mounted]);

  return {
    mounted,

    animating,

    isDark: resolvedTheme === "dark",

    isLight: resolvedTheme === "light",
  };
}