"use client";

import SearchInput from "./SearchInput";
import VoiceSearchButton from "./VoiceSearchButton";


export default function SearchBar() {
  return (
    <div className="search-bar">
      {/* Search Input */}

      <div className="search-input-wrapper">
        <SearchInput />
      </div>

      {/* Right Actions */}

      <div className="search-actions">
        <VoiceSearchButton />

      

       
      </div>
    </div>
  );
}