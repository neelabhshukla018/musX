"use client";

import HeroHeader from "./HeroHeader";
import MoodSection from "./MoodSection";
import ContinueListening from "./ContinueListening";
import AIRecommendation from "./AIRecommendation";

import {
  AI_CARD,
  CONTINUE_LISTENING,
  MOODS,
} from "./Hero.constants";

import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      {/* Header */}
      <HeroHeader username="Neelabh" />

      {/* Mood Cards */}
      <MoodSection moods={MOODS} />

      {/* Bottom Grid */}
      <div className={styles.heroGrid}>
     

       
      </div>
    </section>
  );
}