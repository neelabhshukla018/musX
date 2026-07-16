"use client";

import { Sparkles, ArrowRight } from "lucide-react";

import { HeroHeaderProps } from "./Hero.types";

import styles from "./Hero.module.css";

export default function HeroHeader({
  username,
}: HeroHeaderProps) {
  const hour = new Date().getHours();

  let greeting = "Good Evening";

  if (hour >= 5 && hour < 12) {
    greeting = "Good Morning";
  } else if (hour >= 12 && hour < 17) {
    greeting = "Good Afternoon";
  } else if (hour >= 17 && hour < 21) {
    greeting = "Good Evening";
  } else {
    greeting = "Good Night";
  }

  return (
    <div className={styles.heroHeader}>
      {/* Left */}

      <div className={styles.heroHeaderLeft}>
        <h1 className={styles.heroTitle}>
          {greeting},{" "}
          <span className={styles.userName}>
            {username}
          </span>
          
        </h1>

        <p className={styles.heroSubtitle}>
          Let's play some music that matches
          your mood today.
        </p>
      </div>

 

      
</div>
      
  );
}