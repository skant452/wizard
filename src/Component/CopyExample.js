import React, { useRef, useState } from 'react';

export default function CopyExample() {

  const [copySuccess, setCopySuccess] = useState('');
  const textAreaRef = useRef(null);

  function copyToClipboard(e) {
    textAreaRef.current.select();
    document.execCommand('copy');
    // This is just personal preference.
    // I prefer to not show the whole text area selected.
    e.target.focus();
    setCopySuccess('Copied!');
  };

  return (
      <div>
      <input class="text" type="text" ref={textAreaRef} value="0x5066c68cae3b9bdacd6a1a37c90f2d1723559d18"></input>
      {
       /* Logical shortcut for only displaying the 
          button if the copy command exists */
       document.queryCommandSupported('copy') &&
        <div>
          <button onClick={copyToClipboard} className='copy-btn'>COPY</button> 
          {copySuccess}
        </div>
      }
    </div>
  );
}