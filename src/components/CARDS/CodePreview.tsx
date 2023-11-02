"use client";
import React, { useState } from "react";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import jsx from "react-syntax-highlighter/dist/esm/languages/prism/jsx";
import prism from "react-syntax-highlighter/dist/esm/styles/prism/prism";

SyntaxHighlighter.registerLanguage("jsx", jsx);
interface CodePreviewProps {
  children: React.ReactNode;
  code: string;
}

function CodePreview({ children, code }: CodePreviewProps) {
  const [showPreview, setShowPreview] = useState(true);

  const toggleView = () => {
    setShowPreview(!showPreview);
  };

  return (
    <div className="border rounded p-4 shadow-xl w-8/12 h-[80vh] overflow-scroll">
      <div className="mb-2 flex justify-between items-center">
        <div></div>
        <button
          className="px-2 py-1 rounded bg-blue-500 text-white"
          onClick={toggleView}
        >
          {showPreview ? "Show Code" : "Show Preview"}
        </button>
      </div>
      {showPreview ? (
        <div className="flex justify-center  h-full w-full">{children}</div>
      ) : (
        <SyntaxHighlighter
          showLineNumbers={true}
          language="javascript"
          style={prism}
        >
          {code}
        </SyntaxHighlighter>
      )}
    </div>
  );
}

export default CodePreview;
