"use client";

import {
  createContext,
  useContext,
  useMemo,
  useState,
  type Dispatch,
  type ReactNode,
  type SetStateAction,
} from "react";

interface SearchContextType {
  query: string;
  setQuery: Dispatch<SetStateAction<string>>;

  searchOpen: boolean;
  setSearchOpen: Dispatch<SetStateAction<boolean>>;
}

const SearchContext =
  createContext<SearchContextType | null>(null);

interface SearchProviderProps {
  children: ReactNode;
}

export function SearchProvider({
  children,
}: SearchProviderProps) {
  const [query, setQuery] = useState("");

  const [searchOpen, setSearchOpen] =
    useState(false);

  const value = useMemo(
    () => ({
      query,
      setQuery,

      searchOpen,
      setSearchOpen,
    }),
    [query, searchOpen]
  );

  return (
    <SearchContext.Provider value={value}>
      {children}
    </SearchContext.Provider>
  );
}

export function useSearch() {
  const context = useContext(SearchContext);

  if (!context) {
    throw new Error(
      "useSearch must be used inside SearchProvider."
    );
  }

  return context;
}