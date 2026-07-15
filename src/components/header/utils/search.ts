/* ==========================================================
   Normalize Search Query
========================================================== */

export function normalizeSearch(query: string): string {
  return query.trim().toLowerCase();
}

/* ==========================================================
   Is Search Empty
========================================================== */

export function isSearchEmpty(query: string): boolean {
  return normalizeSearch(query).length === 0;
}

/* ==========================================================
   Filter Suggestions
========================================================== */

export function filterSuggestions(
  query: string,
  items: string[]
): string[] {
  const normalized = normalizeSearch(query);

  if (!normalized) return items;

  return items.filter((item) =>
    item.toLowerCase().includes(normalized)
  );
}