import React, { useState } from 'react';
import emojis from './emojis.json';
import SearchBar from './components/SearchBar';
import EmojiList from './components/EmojiList';
import ClipboardNotification from './components/ClipboardNotification';

function App() {
  const [query, setQuery] = useState('');
  const [copied, setCopied] = useState(false);

  const filteredEmojis = emojis.filter((emoji) =>
    emoji.keywords.includes(query.toLowerCase())
  );

  const handleSearchChange = (e) => setQuery(e.target.value);

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="app">
      <h1>🌚 What Emoji today?? 🌝</h1>
      <SearchBar query={query} onSearchChange={handleSearchChange} />
      <p>👇You can click on an emoji to copy it👇</p>
      <EmojiList emojis={filteredEmojis} onCopy={handleCopy} />
      {copied && <ClipboardNotification />}
    </div>
  );
}

export default App;
