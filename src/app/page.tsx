"use client";

import { useState } from "react";

import Sidebar from "@/components/Sidebar/Sidebar";
import { Header } from "@/components/header";
import { Hero } from "@/components/Hero";

export default function HomePage() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="app-layout">
      <Sidebar
        mobileOpen={mobileOpen}
        setMobileOpen={setMobileOpen}
      />

      <main className="main-content">
        <Header
          mobileOpen={mobileOpen}
          onMenuClick={() =>
            setMobileOpen((prev) => !prev)
          }
        />

        <Hero />
      </main>
    </div>
  );
}