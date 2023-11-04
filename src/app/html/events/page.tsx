"use client";
import CodePreview from "@/components/CARDS/CodePreview";
import { useState } from "react";

export default function EventsPage() {
  const [userName, setUserName] = useState("guest");
  const code = `

  `;

  function handleBlur(event: React.FocusEvent<HTMLInputElement>) {
    const userInput = parseInt(event.target.value);
    if (userInput > 10) {
      alert("onBlur, Value > 10 ");
    } else {
      alert("onBlur, Value < 10");
    }
  }
  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setUserName(event.target.value);
  }

  return (
    <>
      <CodePreview title="Form Events" code={code}>
        <form className="bg-slate-100 p-5">
          <details>
            <summary>onBlur</summary>
            <p className="text-sm indent-4">
              triggered when element loses focus
            </p>
          </details>
          Enter a number
          <input type="number" onBlur={handleBlur} />
          <details>
            <summary>onChange</summary>
            <p className="text-sm indent-4">
              triggered when elements value changes
            </p>
          </details>
          Enter your name:
          <input type="text" onChange={handleChange} />
          <p>
            Your Name is: <span className="text-blue-500">{userName}</span>
          </p>
        </form>
      </CodePreview>
    </>
  );
}
