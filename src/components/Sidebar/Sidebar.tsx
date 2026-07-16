"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, Bold } from "lucide-react";
import type {
  Dispatch,
  SetStateAction,
} from "react";

import {
  House,
  Search,
  Compass,
  Sparkles,
  Library,
  Heart,
  ListMusic,
  Download,
  Settings,
  MapPin,
} from "lucide-react";

interface SidebarProps {
  mobileOpen: boolean;
  setMobileOpen: Dispatch<
    SetStateAction<boolean>
  >;
}

export default function Sidebar({
  mobileOpen,
  setMobileOpen,
}: SidebarProps) {
  const pathname = usePathname();

  /* ==========================================
     Temporary Auth
     Replace with backend later
  ========================================== */

  const loggedIn = false;

  const user = {
    name: "Neelabh Shukla",
    location: "Lucknow, India",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43f?w=400&auto=format&fit=crop&q=80",
  };

  /* ==========================================
     Navigation
  ========================================== */

  const navigation = [
    {
      title: "Home",
      href: "/",
      icon: House,
    },
    {
      title: "Search",
      href: "/search",
      icon: Search,
    },
    {
      title: "Explore",
      href: "/explore",
      icon: Compass,
    },
    {
      title: "AI Mix",
      href: "/ai",
      icon: Sparkles,
    },
    {
      title: "Library",
      href: "/library",
      icon: Library,
    },
    {
      title: "Favorites",
      href: "/favorites",
      icon: Heart,
    },
    {
      title: "Playlists",
      href: "/playlists",
      icon: ListMusic,
    },
    {
      title: "Downloads",
      href: "/downloads",
      icon: Download,
    },
    {
      title: "Settings",
      href: "/settings",
      icon: Settings,
    },
  ];

  return (
    <>
      {/* Overlay */}

      {mobileOpen && (
        <div
          className="sidebar-overlay"
          onClick={() =>
            setMobileOpen(false)
          }
        />
      )}

      {/* Sidebar */}

      <aside
        className={`sidebar ${
          mobileOpen
            ? "sidebar-open"
            : ""
        }`}
      >        {/* ==========================================
            Logo
        ========================================== */}

        <div
          className="sidebar-logo"
          style={{
            position: "relative",
            overflow: "hidden",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "2.2rem 1rem",
            margin: "1rem",
            borderRadius: "22px",
            background:
              "rgba(255,255,255,.08)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter:
              "blur(20px)",
            border:
              "1px solid rgba(255,255,255,.12)",
          }}
        >
          {/* Animated Background */}

          <div className="sidebar-gradient" />

          {/* Equalizer */}

          <div className="sidebar-equalizer">
            {Array.from({
              length: 7,
            }).map((_, index) => (
              <span
                key={index}
                className="eq-bar"
                style={{
                  animationDelay: `${
                    index * 0.15
                  }s`,
                }}
              />
            ))}
          </div>

          {/* Logo */}

         <Link href="/" className="logo-card">

    <div className="logo">
        <span className="logo-mus">mus</span>
        <span className="logo-x">𝕏</span>
    </div>

    <p className="logo-tagline">
        Feel Every Beat
    </p>

    <div className="logo-eq">
        <span className="logo-bar"></span>
        <span className="logo-bar"></span>
        <span className="logo-bar"></span>
        <span className="logo-bar"></span>
        <span className="logo-bar"></span>
        <span className="logo-bar"></span>
        <span className="logo-bar"></span>
    </div>

</Link>
        </div>

        {/* ==========================================
            Navigation
        ========================================== */}

        <nav className="sidebar-nav">
          {navigation.map((item) => {
            const Icon = item.icon;

            const active =
              pathname === item.href;

            return (
              <Link
                key={item.title}
                href={item.href}
                className={`sidebar-link ${
                  active
                    ? "active"
                    : ""
                }`}
                onClick={() =>
                  setMobileOpen(false)
                }
              >
                <span className="sidebar-link-icon">
                  <Icon size={20} />
                </span>

                <span className="sidebar-link-title">
                  {item.title}
                </span>
              </Link>
            );
          })}
        </nav>        {/* ==========================================
            Bottom Section
        ========================================== */}

        <div className="sidebar-bottom">

          {!loggedIn ? (

            <div className="sidebar-auth-card">

              {/* Animated Background */}

              <div className="auth-bg">

                {/* Glow */}

                <div className="auth-gradient" />

                {/* Equalizer */}

                <div className="auth-equalizer">
                  {Array.from({
                    length: 7,
                  }).map((_, index) => (
                    <span
                      key={`bar-${index}`}
                    />
                  ))}
                </div>

                {/* Floating Music Notes */}

                <div className="auth-notes">
                  {[
                    "♪",
                    "♫",
                    "♬",
                    "♩",
                  ].map((note, index) => (
                    <span
                      key={`note-${index}`}
                    >
                      {note}
                    </span>
                  ))}
                </div>

              </div>

              {/* Card Content */}

              <div className="auth-content">

              
       {/* <p>Welcome Back! to mus𝕏</p> */}
       {/* <p>Discover millions of song curated just for you </p> */}
              

           <button
  type="button"
  className="get-started-btn"
>
  <span>Get Started</span>

  <span className="btn-arrow">
    <ArrowRight size={18} strokeWidth={2.5} />
  </span>
</button>

              </div>

            </div>

          ) : (

            <div className="sidebar-user-card">

              {/* Avatar */}

              <div className="sidebar-user-avatar">

                <img
                  src={user.avatar}
                  alt={user.name}
                />

              </div>

              {/* User Details */}

              <div className="sidebar-user-details">

                <h4>
                  {user.name}
                </h4>

                <p>

                  <MapPin
                    size={14}
                  />

                  <span>
                    {user.location}
                  </span>

                </p>

              </div>

            </div>

          )}

        </div>    
          
        </aside>
        
    </>
  );
}