"use client";

import Image from "next/image";
import { Clock3, Play } from "lucide-react";

import { SongCardProps } from "./Hero.types";
import styles from "./Hero.module.css";

export default function SongCard({
  song,
}: SongCardProps) {
  return (
    <article className={styles.songCard}>
      <div className={styles.songImageWrapper}>
        <Image
          src={song.cover}
          alt={song.title}
          width={260}
          height={260}
          className={styles.songImage}
          priority={false}
        />

        <div className={styles.songOverlay}>
          <button
            type="button"
            className={styles.playButton}
            aria-label={`Play ${song.title}`}
          >
            <Play
              size={22}
              fill="currentColor"
              strokeWidth={2}
            />
          </button>
        </div>
      </div>

      <div className={styles.songInfo}>
        <h3 className={styles.songTitle}>
          {song.title}
        </h3>

        <p className={styles.songArtist}>
          {song.artist}
        </p>

        <div className={styles.songFooter}>
          <div className={styles.songDuration}>
            <Clock3 size={14} />

            <span>{song.duration}</span>
          </div>
        </div>
      </div>
    </article>
  );
}