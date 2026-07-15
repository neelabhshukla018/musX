"use client";

import { Search } from "lucide-react";

import { useSearch } from "../context";

import { SEARCH_PLACEHOLDER } from "../constants/search.constants";

export default function SearchInput() {
  const {
    query,
    setQuery,
  } = useSearch();

  return (
    <div className="search-input-container">
      {/* Search Icon */}

      <div className="search-input-icon">
        <Search
          size={20}
          strokeWidth={2.2}
        />
      </div>

      {/* Input */}

      <input
        type="text"
        className="search-input"
        placeholder={SEARCH_PLACEHOLDER}
        autoComplete="off"
        spellCheck={false}
        value={query}
        onChange={(e) =>
          setQuery(e.target.value)
        }
      />
    </div>
  );
}