"use client";

import type { MouseEvent } from "react";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

import {
  House,
  Search,
  Sparkles,
  Library,
  User,
  type LucideIcon,
} from "lucide-react";

interface NavItem {
  title: string;
  href: string;
  icon: LucideIcon;
  center?: boolean;
}

const navigation: NavItem[] = [
  {
    title: "Home",
    href: "/",
    icon: House,
  },
  {
    title: "AI",
    href: "/ai",
    icon: Sparkles,
    center: true,
  },
  {
    title: "Search",
    href: "/",
    icon: Search,
  } ,
  {
    title: "Library",
    href: "/library",
    icon: Library,
  },
  {
    title: "Profile",
    href: "/profile",
    icon: User,
  },
];

export default function BottomNav() {
  const pathname = usePathname();
  const router = useRouter();

  /* ==========================================
     Temporary Auth
     Replace with backend later
  ========================================== */

  const loggedIn = false;

  /* ==========================================
     Search
  ========================================== */

  const focusSearch = () => {
    const section = document.getElementById(
      "search-section"
    );

    const input = document.getElementById(
      "search-input"
    ) as HTMLInputElement | null;

    section?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    setTimeout(() => {
      input?.focus();
    }, 300);
  };

  const handleSearchClick = (
    e: MouseEvent<HTMLAnchorElement>
  ) => {
    e.preventDefault();

    if (pathname !== "/") {
      router.push("/");

      setTimeout(() => {
        focusSearch();
      }, 500);

      return;
    }

    focusSearch();
  };

  /* ==========================================
     Profile
  ========================================== */

  const handleProfileClick = (
    e: MouseEvent<HTMLAnchorElement>
  ) => {
    if (loggedIn) return;

    e.preventDefault();

    // Replace later with Login Modal
    router.push("/login");
  };

  return (
    <nav
      className="bottom-nav"
      aria-label="Bottom Navigation"
    >
      {navigation.map((item) => {
        const Icon = item.icon;

        const active =
          item.title !== "Search" &&
          pathname === item.href;

        return (
          <Link
            key={item.title}
            href={item.href}
            aria-label={item.title}
            aria-current={
              active ? "page" : undefined
            }
            onClick={(e) => {
              if (item.title === "Search") {
                handleSearchClick(e);
                return;
              }

              if (item.title === "Profile") {
                handleProfileClick(e);
                return;
              }
            }}
            className={`bottom-nav-item ${
              active ? "active" : ""
            } ${
              item.center
                ? "bottom-nav-center"
                : ""
            }`}
          >
            <div className="bottom-nav-icon">
              <Icon size={22} />
            </div>

            <span>{item.title}</span>
          </Link>
        );
      })}
    </nav>
  );
}