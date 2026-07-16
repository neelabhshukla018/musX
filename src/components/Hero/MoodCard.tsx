"use client";

import { MoodCardProps } from "./Hero.types";
import styles from "./Hero.module.css";

export default function MoodCard({
  mood,
}: MoodCardProps) {
  const Icon = mood.icon;

  return (
    <button
      type="button"
      className={styles.moodCard}
      style={
        {
          "--mood-color": mood.color,
        } as React.CSSProperties
      }
    >
      <div className={styles.moodIcon}>
        <Icon size={20} strokeWidth={2.2} />
      </div>

      <div className={styles.moodContent}>
        <h4 className={styles.moodTitle}>
          {mood.title}
        </h4>

        <p className={styles.moodSubtitle}>
          {mood.subtitle}
        </p>
      </div>
    </button>
  );
}