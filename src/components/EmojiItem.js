import React from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

function EmojiItem({ symbol, onCopy }) {
  return (
    <CopyToClipboard text={symbol} onCopy={onCopy}>
      <div className="emoji-item">
        {symbol}
      </div>
    </CopyToClipboard>
  );
}

export default EmojiItem;
