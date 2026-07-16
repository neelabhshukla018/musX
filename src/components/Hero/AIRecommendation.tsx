"use client";

import { Sparkles, ArrowRight } from "lucide-react";

import { AIRecommendationProps } from "./Hero.types";
import styles from "./Hero.module.css";

export default function AIRecommendation({
  recommendation,
}: AIRecommendationProps) {
  return (
    <aside className={styles.aiCard}>
      <div className={styles.aiGlow}></div>

      <div className={styles.aiHeader}>
        <div className={styles.aiIcon}>
          <Sparkles size={20} />
        </div>

        <span className={styles.aiBadge}>
          musX AI
        </span>
      </div>

      <div className={styles.aiContent}>
        <h3 className={styles.aiTitle}>
          {recommendation.title}
        </h3>

        <p className={styles.aiDescription}>
          {recommendation.description}
        </p>
      </div>

      <button
        type="button"
        className={styles.aiButton}
      >
        {recommendation.buttonText}

        <ArrowRight size={18} />
      </button>
    </aside>
  );
}