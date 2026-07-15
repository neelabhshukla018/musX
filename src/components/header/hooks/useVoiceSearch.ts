"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

declare global {
  interface Window {
    SpeechRecognition: new () => SpeechRecognition;
    webkitSpeechRecognition: new () => SpeechRecognition;
  }

  interface SpeechRecognition extends EventTarget {
    continuous: boolean;
    interimResults: boolean;
    lang: string;

    start(): void;
    stop(): void;
    abort(): void;

    onstart: (() => void) | null;
    onend: (() => void) | null;
    onerror: ((event: any) => void) | null;
    onresult: ((event: any) => void) | null;
  }
}

export default function useVoiceSearch() {
  const recognitionRef =
    useRef<SpeechRecognition | null>(null);

  const [supported, setSupported] =
    useState(false);

  const [listening, setListening] =
    useState(false);

  const [transcript, setTranscript] =
    useState("");

  useEffect(() => {
    if (typeof window === "undefined") return;

    const SpeechRecognition =
      window.SpeechRecognition ||
      window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      setSupported(false);
      return;
    }

    setSupported(true);

    const recognition =
      new SpeechRecognition();

    recognition.continuous = false;
    recognition.interimResults = true;
    recognition.lang = "en-US";

    recognition.onstart = () => {
      setListening(true);
    };

    recognition.onresult = (event: any) => {
      let text = "";

      for (
        let i = event.resultIndex;
        i < event.results.length;
        i++
      ) {
        text +=
          event.results[i][0].transcript;
      }

      setTranscript(text.trim());
    };

    recognition.onerror = (event: any) => {
      console.error(
        "Voice Search Error:",
        event.error
      );

      setListening(false);
    };

    recognition.onend = () => {
      setListening(false);
    };

    recognitionRef.current = recognition;

    return () => {
      recognition.abort();
      recognitionRef.current = null;
    };
  }, []);

  const startListening = useCallback(() => {
    const recognition =
      recognitionRef.current;

    if (!recognition || listening) return;

    setTranscript("");

    try {
      recognition.start();
    } catch (error) {
      console.error(error);
    }
  }, [listening]);

  const stopListening = useCallback(() => {
    recognitionRef.current?.stop();
  }, []);

  const toggleListening = useCallback(() => {
    if (listening) {
      stopListening();
    } else {
      startListening();
    }
  }, [
    listening,
    startListening,
    stopListening,
  ]);

  const clearTranscript =
    useCallback(() => {
      setTranscript("");
    }, []);

  return {
    supported,

    listening,

    transcript,

    clearTranscript,

    startListening,

    stopListening,

    toggleListening,
  };
}