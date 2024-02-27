"use client";
import React, { useState } from "react";
import copy from "clipboard-copy";
import { PrismAsyncLight as SyntaxHighlighter } from "react-syntax-highlighter";
import jsx from "react-syntax-highlighter/dist/esm/languages/prism/jsx";
import { coldarkDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Clipboard, ClipboardCheck } from "lucide-react";

SyntaxHighlighter.registerLanguage("jsx", jsx);
interface CodeProps {
  title: string;
  code: string | null;
  className?: string;
  disableNumbers?: boolean;
}

function Code(props: CodeProps) {
  const [isCopying, setIsCopying] = useState(false);
  const code = props.code ? props.code : "unable to retrive code";
  const enableNumbers = props.disableNumbers ? !props.disableNumbers : true;

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
      className={`border rounded w-full max-w-3xl my-2 mx-auto ${props.className}`}
      onScroll={handleScroll}
    >
      <header className="flex justify-start items-center border-b p-2 gap-1">
        <h2 className="text-lg font-semibold flex-grow">{props.title}</h2>

        <div
          className="flex items-center cursor-pointer"
          onClick={copyCodeToClipboard}
        >
          {isCopying ? <ClipboardCheck /> : <Clipboard />}
        </div>
      </header>

      <SyntaxHighlighter
        showLineNumbers={enableNumbers}
        language={"jsx"}
        style={coldarkDark}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
}

export default Code;
