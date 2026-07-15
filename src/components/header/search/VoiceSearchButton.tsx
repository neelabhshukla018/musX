"use client";

import { useEffect } from "react";
import { Mic, MicOff } from "lucide-react";

import useVoiceSearch from "../hooks/useVoiceSearch";
import { useSearch } from "../context";

export default function VoiceSearchButton() {
  const { setQuery } = useSearch();

  const {
    supported,
    listening,
    transcript,
    toggleListening,
  } = useVoiceSearch();

  /* Sync speech -> search input */

  useEffect(() => {
    if (transcript.trim()) {
      setQuery(transcript);
    }
  }, [transcript, setQuery]);

  if (!supported) {
    return (
      <button
        type="button"
        className="voice-search-button disabled"
        disabled
        aria-label="Voice Search Not Supported"
        title="Voice Search Not Supported"
      >
        <MicOff size={18} strokeWidth={2.4} />
      </button>
    );
  }

  return (
    <button
      type="button"
      className={`voice-search-button ${
        listening ? "listening" : ""
      }`}
      aria-label={
        listening
          ? "Stop Voice Search"
          : "Start Voice Search"
      }
      title={
        listening
          ? "Stop Listening"
          : "Start Voice Search"
      }
      onClick={toggleListening}
    >
      {/* Pulse Ring */}

      <span className="voice-search-ring" />

      {/* Icon */}

      <span className="voice-search-icon">
        <Mic
          size={18}
          strokeWidth={2.4}
        />
      </span>
    </button>
  );
}