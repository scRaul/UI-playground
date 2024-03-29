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
  code: string | null;
  className?: string;
  disableNumbers?: boolean;
}

function CodePreview(props: CodePreviewProps) {
  const [showPreview, setShowPreview] = useState(true);
  const [isCopying, setIsCopying] = useState(false);
  const code = props.code ? props.code : "unable to retrive code";
  const enableNumbers = props.disableNumbers ? !props.disableNumbers : true;
  const toggleView = () => {
    setShowPreview(!showPreview);
  };
  const copyCodeToClipboard = async () => {
    if (isCopying) return;

    setIsCopying(true);

    try {
      await copy(code);
      setTimeout(() => {
        setIsCopying(false); // Re-enable the button after a delay
      }, 1000);
    } catch (error) {
      console.error("Failed to copy code to clipboard", error);
      setIsCopying(false);
    }
  };
  function handleScroll(event: React.MouseEvent<HTMLDivElement>) {
    event.stopPropagation();
    event.preventDefault();
  }
  return (
    <div
      className={`border rounded w-full ${props.className}`}
      onScroll={handleScroll}
    >
      <header className="flex justify-start items-center p-2 border-b border-[#ffffff55] gap-1">
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
          {code}
        </SyntaxHighlighter>
      )}
    </div>
  );
}

export default CodePreview;
