import React from 'react';

function SearchBar({ query, onSearchChange }) {
  return (
    <input
      type="text"
      value={query}
      onChange={onSearchChange}
      placeholder="Search for emojis..."
      className="search-bar"
    />
  );
}

export default SearchBar;
