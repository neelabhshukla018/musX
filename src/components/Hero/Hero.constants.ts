// src/components/Hero/Hero.constants.ts

import {
  Brain,
  Flame,
  Heart,
  Moon,
  Target,
} from "lucide-react";

import {
  AIRecommendation,
  Mood,
  Song,
} from "./Hero.types";

export const MOODS: Mood[] = [
  {
    id: 1,
    title: "Focus",
    subtitle: "Stay productive",
    color: "#4C8DFF",
    icon: Target,
  },
  {
    id: 2,
    title: "Chill",
    subtitle: "Relax & unwind",
    color: "#25D0C7",
    icon: Brain,
  },
  {
    id: 3,
    title: "Energetic",
    subtitle: "Boost your energy",
    color: "#FF9333",
    icon: Flame,
  },
  {
    id: 4,
    title: "Romantic",
    subtitle: "Feel the love",
    color: "#FF5DA2",
    icon: Heart,
  },
  {
    id: 5,
    title: "Sleep",
    subtitle: "Sweet dreams",
    color: "#7B6DFF",
    icon: Moon,
  },
];

export const CONTINUE_LISTENING: Song[] = [
  {
    id: 1,
    title: "Life Goes On",
    artist: "Oliver Tree",
    cover: "/images/music/song1.webp",
    duration: "3:42",
  },
  {
    id: 2,
    title: "Kesariya",
    artist: "Pritam, Arijit Singh",
    cover: "/images/music/song2.webp",
    duration: "4:11",
  },
  {
    id: 3,
    title: "Ocean Eyes",
    artist: "Billie Eilish",
    cover: "/images/music/song3.webp",
    duration: "3:17",
  },
  {
    id: 4,
    title: "Heeriye",
    artist: "Jasleen Royal",
    cover: "/images/music/song4.webp",
    duration: "3:21",
  },
];

export const AI_CARD: AIRecommendation = {
  title: "Calm Evening 🌙",
  description:
    "I've created a playlist that perfectly matches your current mood.",
  buttonText: "Listen Now",
};