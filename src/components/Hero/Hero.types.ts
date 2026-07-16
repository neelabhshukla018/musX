// src/components/Hero/Hero.types.ts

import { LucideIcon } from "lucide-react";

export interface Mood {
  id: number;
  title: string;
  subtitle: string;
  color: string;
  icon: LucideIcon;
}

export interface Song {
  id: number;
  title: string;
  artist: string;
  cover: string;
  duration: string;
}

export interface AIRecommendation {
  title: string;
  description: string;
  buttonText: string;
}

export interface HeroHeaderProps {
  username: string;
}

export interface MoodCardProps {
  mood: Mood;
}

export interface MoodSectionProps {
  moods: Mood[];
}

export interface SongCardProps {
  song: Song;
}

export interface ContinueListeningProps {
  songs: Song[];
}

export interface AIRecommendationProps {
  recommendation: AIRecommendation;
}