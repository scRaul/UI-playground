"use client";
import React, { useEffect, useState } from "react";
import copy from "clipboard-copy";
import { PrismAsyncLight as SyntaxHighlighter } from "react-syntax-highlighter";
import jsx from "react-syntax-highlighter/dist/esm/languages/prism/jsx";
import { coldarkDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Clipboard, ClipboardCheck } from "lucide-react";

SyntaxHighlighter.registerLanguage("jsx", jsx);
interface CodePreviewProps {
  title: string;
  children: React.ReactNode;
  code: string;
  className?: string;
  disableNumbers?: boolean;
}

function CodePreview(props: CodePreviewProps) {
  const [showPreview, setShowPreview] = useState(true);
  const [isCopying, setIsCopying] = useState(false);

  const enableNumbers = props.disableNumbers ? !props.disableNumbers : true;
  const toggleView = () => {
    setShowPreview(!showPreview);
  };
  const copyCodeToClipboard = async () => {
    if (isCopying) return;

    setIsCopying(true);

    try {
      await copy(props.code);
      setTimeout(() => {
        setIsCopying(false); // Re-enable the button after a delay
      }, 1000);
    } catch (error) {
      console.error("Failed to copy code to clipboard", error);
      setIsCopying(false);
    }
  };

  return (
    <div className={`border rounded w-full max-w-3xl my-2 ${props.className}`}>
      <header className="flex justify-start items-center border-b p-2 gap-1">
        <h2 className="text-lg font-semibold flex-grow">{props.title}</h2>
        <button
          className="px-2 py-1 rounded bg-blue-500 text-white"
          onClick={toggleView}
        >
          {showPreview ? "Show Code" : "Show Preview"}
        </button>
        <div
          className="flex items-center cursor-pointer"
          onClick={copyCodeToClipboard}
        >
          {isCopying ? <ClipboardCheck /> : <Clipboard />}
        </div>
      </header>
      {showPreview ? (
        <div className="flex flex-col w-full mx-auto p-4">{props.children}</div>
      ) : (
        <SyntaxHighlighter
          showLineNumbers={enableNumbers}
          language={"jsx"}
          style={coldarkDark}
        >
          {props.code}
        </SyntaxHighlighter>
      )}
    </div>
  );
}

export default CodePreview;
