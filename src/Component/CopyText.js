/** @format */

import React from "react";
import { MdContentCopy } from "react-icons/md";


const CopyText = ({ text }) => {
  const handleCopyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(text);
      console.log("Text copied to clipboard:", text);
    } catch (err) {
      console.error("Unable to copy text to clipboard", err);
    }
  };
  return (
    <button onClick={handleCopyToClipboard} className="copy_text_btn">
      <i><MdContentCopy /></i>
      COPY ID{" "}
    </button>
  );
};

export default CopyText;
