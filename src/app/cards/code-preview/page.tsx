import CodePreview from "@/components/CARDS/CodePreview";

function CodePreviewPage() {
  const code: string = `
//CodePreview.tsx
"use client";
import React, { useState } from "react";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import jsx from "react-syntax-highlighter/dist/esm/languages/prism/jsx";
import prism from "react-syntax-highlighter/dist/esm/styles/prism/prism";

SyntaxHighlighter.registerLanguage("jsx", jsx);


interface CodePreviewProps {
  title: string;
  children: React.ReactNode;
  code: string;
}

function CodePreview({ title, children, code }: CodePreviewProps) {
  const [showPreview, setShowPreview] = useState(true);

  const toggleView = () => {
    setShowPreview(!showPreview);
  };

  return (
    <div className="border rounded p-4 shadow-xl min-w-6/12">
      <div className="mb-2 flex justify-between items-center">
        <h2 className="text-lg m-auto font-semibold">{title}</h2>
        <button
          className="px-2 py-1 rounded bg-blue-500 text-white"
          onClick={toggleView}
        >
          {showPreview ? "Show Code" : "Show Preview"}
        </button>
      </div>
      {showPreview ? (
        <div className="flex justify-center items-center">{children}</div>
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
  `;
  return (
    <>
      <CodePreview code={code}>
        <h1> //This Element itself </h1>
      </CodePreview>
    </>
  );
}
export default CodePreviewPage;
