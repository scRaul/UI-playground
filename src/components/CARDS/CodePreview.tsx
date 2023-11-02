"use client";
import React, { useState } from "react";
import copy from "clipboard-copy";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import jsx from "react-syntax-highlighter/dist/esm/languages/prism/jsx";
import prism from "react-syntax-highlighter/dist/esm/styles/prism/prism";
import { Clipboard, ClipboardCheck } from "lucide-react";

SyntaxHighlighter.registerLanguage("jsx", jsx);
interface CodePreviewProps {
  title: string;
  children: React.ReactNode;
  code: string;
  disableNumbers?: boolean;
  isClientComponent?: boolean;
}

function CodePreview(props: CodePreviewProps) {
  const [showPreview, setShowPreview] = useState(true);
  const [isCopying, setIsCopying] = useState(false);

  const enableNumbers = props.disableNumbers ? !props.disableNumbers : true;
  const toggleView = () => {
    setShowPreview(!showPreview);
  };
  const copyCodeToClipboard = async () => {
    if (isCopying) return; // Don't do anything if copying is already in progress

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
    <div className="border rounded p-4 shadow-xl w-full  h-96 overflow-scroll mb-4 md:w-[700px]">
      <div className="mb-2 flex flex-col justify-between items-center md:flex-row">
        <h2 className="text-lg font-semibold">{props.title}</h2>
        {props.isClientComponent ? <p>Client Component </p> : null}
        <div className="flex items-center">
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
            {isCopying ? (
              <>
                <ClipboardCheck />
                copied
              </>
            ) : (
              <>
                <Clipboard />
                copy to code
              </>
            )}
          </div>
        </div>
      </div>
      <hr className="mb-2" />
      {showPreview ? (
        <div className="flex h-full w-full">{props.children}</div>
      ) : (
        <SyntaxHighlighter
          showLineNumbers={enableNumbers}
          language="javascript"
          style={prism}
        >
          {props.code}
        </SyntaxHighlighter>
      )}
    </div>
  );
}

export default CodePreview;
