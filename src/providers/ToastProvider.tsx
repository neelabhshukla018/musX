"use client";

import { Toaster } from "sonner";

export default function ToastProvider() {
  return (
    <Toaster
      theme="system"
      position="top-right"
      expand
      closeButton
      richColors={false}
      duration={3500}
      visibleToasts={4}
      offset={20}
      gap={12}
      toastOptions={{
        classNames: {
          toast: "musx-toast",
          title: "musx-toast-title",
          description: "musx-toast-description",
          closeButton: "musx-toast-close",
        },
      }}
    />
  );
}