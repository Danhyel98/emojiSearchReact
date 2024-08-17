// src/components/EmojiList.js
import React from 'react';
import EmojiItem from './EmojiItem';
import '../index.css'; // Optional: Add styles if needed

function EmojiList({ emojis, onCopy }) {
  return (
    <div className="emoji-list">
      {emojis.map((emoji, index) => (
        <EmojiItem key={index} symbol={emoji.symbol} onCopy={onCopy} />
      ))}
    </div>
  );
}

export default EmojiList;
