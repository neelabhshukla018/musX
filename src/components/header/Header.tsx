"use client";

import "./Header.css";

import { Menu, X } from "lucide-react";

import SearchBar from "./search/SearchBar";

import {
  SearchProvider,
  useSearch,
} from "./context";

import useKeyboardShortcut from "./hooks/useKeyboardShortcut";

interface HeaderProps {
  mobileOpen: boolean;
  onMenuClick: () => void;
}

export default function Header({
  mobileOpen,
  onMenuClick,
}: HeaderProps) {
  return (
    <SearchProvider>
      <HeaderContent
        mobileOpen={mobileOpen}
        onMenuClick={onMenuClick}
      />
    </SearchProvider>
  );
}

interface HeaderContentProps {
  mobileOpen: boolean;
  onMenuClick: () => void;
}

function HeaderContent({
  mobileOpen,
  onMenuClick,
}: HeaderContentProps) {
  const { setSearchOpen } = useSearch();

  useKeyboardShortcut({
    onOpen: () => setSearchOpen(true),
    onClose: () => setSearchOpen(false),
  });

  return (
    <header className="header">
      <div className="header-container">

        {/* Mobile Menu */}

        <button
          type="button"
          className={`header-menu-button ${
            mobileOpen ? "active" : ""
          }`}
          aria-label={
            mobileOpen
              ? "Close Sidebar"
              : "Open Sidebar"
          }
          onClick={onMenuClick}
        >
          {mobileOpen ? (
            <X
              size={24}
              strokeWidth={2.4}
            />
          ) : (
            <Menu
              size={24}
              strokeWidth={2.4}
            />
          )}
        </button>

        {/* Search */}

        <div className="header-search">
          <SearchBar />
        </div>

      </div>
    </header>
  );
}