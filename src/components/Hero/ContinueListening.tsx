"use client";

import MoodCard from "./MoodCard";
import { MoodSectionProps } from "./Hero.types";
import styles from "./Hero.module.css";

export default function MoodSection({
  moods,
}: MoodSectionProps) {
  return (
    <section className={styles.moodSection}>
      <div className={styles.sectionHeader}>
        <div>
          <h2 className={styles.sectionTitle}>
            Choose Your Mood
          </h2>

          <p className={styles.sectionSubtitle}>
            Let musX create the perfect soundtrack for you.
          </p>
        </div>
      </div>

      <div className={styles.moodGrid}>
        {moods.map((mood) => (
          <MoodCard
            key={mood.id}
            mood={mood}
          />
        ))}
      </div>
    </section>
  );
}