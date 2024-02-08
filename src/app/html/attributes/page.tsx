import CodePreview from "@/components/_cards/CodePreview";
import { HideComp, DataComp } from "@/components/Page/attributes";
export default function AttributesPage() {
  return (
    <>
      <CodePreview title="className" code={className}>
        <p>try hovering over the box </p>
        <div
          className="w-12 h-12 font-semibold text-center
            bg-blue-600 hover:w-24"
        ></div>
      </CodePreview>
      <CodePreview title="contenteditable" code={contenteditable}>
        <p className="text-center" contentEditable={true}>
          You can edit this sentence, simply click on it to begin
        </p>
      </CodePreview>
      <CodePreview title="data-key" code={data}>
        <DataComp />
      </CodePreview>
      <CodePreview title="dir" code={dir}>
        <p dir="rtl">this text is right to left</p>
        <p dir="ltr">this text is left to right</p>
      </CodePreview>
      <CodePreview title="draggable" code={draggable}>
        <div draggable={true} className="p-3 w-fit  bg-blue-600 ">
          can drag me
        </div>
        <br></br>
        <div className="p-3 w-fit  bg-green-500">can't drag me</div>
      </CodePreview>
      <CodePreview title="enterkeyhint" code={enterkeyhint}>
        search:
        <input enterKeyHint="search" type="text" className="input" />
        go:
        <input enterKeyHint="go" type="text" className="input" />
        enter:
        <input enterKeyHint="enter" type="text" className="input" />
        done:
        <input enterKeyHint="done" type="text" className="input" />
        send:
        <input enterKeyHint="send" type="text" className="input" />
        next:
        <input enterKeyHint="next" type="text" className="input" />
        previous:
        <input enterKeyHint="previous" type="text" className="input" />
      </CodePreview>
      <CodePreview title="hidden" code={hidden}>
        <HideComp />
      </CodePreview>
      <CodePreview title="id" code={id}>
        <p> Click on the field name to focus on the input box</p>

        <div className="flex flex-col md:flex-row justify-between mt-3 p-4">
          <label htmlFor="name" className="font-medium inline-block">
            Enter your name
          </label>
          <input id="name" className="input" />
        </div>
        <div className="flex flex-col md:flex-row justify-between  p-4">
          <label htmlFor="phone" className="font-medium inline-block">
            Enter your work phone number
          </label>
          <input id="phone" className="input" />
        </div>
      </CodePreview>
      <CodePreview title="inputmode" code={inputmode}>
        <label htmlFor="decimal">decimal</label>
        <input id="decimal" inputMode="decimal" className="input" />

        <label htmlFor="email">email</label>
        <input id="email" inputMode="email" className="input" />

        <label htmlFor="none">none</label>
        <input id="none" inputMode="none" className="input" />

        <label htmlFor="numeric">numeric</label>
        <input id="numeric" inputMode="numeric" className="input" />

        <label htmlFor="search">search</label>
        <input id="search" inputMode="search" className="input" />

        <label htmlFor="tel">tel</label>
        <input id="tel" inputMode="tel" className="input" />

        <label htmlFor="text">text</label>
        <input id="text" inputMode="text" className="input" />

        <label htmlFor="url">url</label>
        <input id="url" inputMode="url" className="input" />
      </CodePreview>
      <CodePreview title="lang" code={lang}>
        <p lang="es">Este mensaje esta en espanol</p>
        <a
          href="https://www.w3schools.com/tags/ref_language_codes.asp"
          target="_blank"
          className="underline text-blue-600"
        >
          List of language codes
        </a>
      </CodePreview>
      <CodePreview title="spellchceck" code={spellchceck}>
        <h3
          className="text-3xl md:text-6xl"
          contentEditable={true}
          spellCheck={true}
        >
          Fix the word spellchjk
        </h3>
      </CodePreview>
      <CodePreview title="tabindex" code={tabindex}>
        <div>click on here then </div>
        <div tabIndex={1}>Hti Tab</div>
        <div tabIndex={2}> To navigate</div>
        <div tabIndex={3}> focus between each div</div>
        <div tabIndex={4}> div </div>
      </CodePreview>
      <CodePreview title="title" code={title}>
        <p> Place mouse over the top of each line for more info</p>
        <a
          href="https://google.com"
          target="_blank"
          title="visit google.com"
          className="underline text-blue-600"
        >
          Google
        </a>
        <span title="Hover over me to see the tooltip">Hover me for info</span>
        <abbr title="TypeScript eXtension">TSX</abbr>
      </CodePreview>
    </>
  );
}

const className = `  
<p>try hovering over the box </p>
<div
  className="w-12 h-12 font-semibold text-center
    bg-blue-600 hover:w-24"
></div>
      `;
const contenteditable = `  
<p className="text-center" contentEditable={true}>
  You can edit this sentence, simply click on it to begin
</p>
      `;
const data = `  
"use client";
import { useState } from "react";
export function DataComp() {
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  const items = [
    { id: 1, name: "Item 1", description: "some random information" },
    { id: 2, name: "Item 2", description: "not so random information" },
    { id: 3, name: "Item 3", description: "this is definitely not random " },
  ];

  const handleItemClick = (itemId: number) => {
    // Set the selected item ID in state
    setSelectedItem(itemId.toString());
  };
  return (
    <>
      <div className="flex justify-between">
        <div>
          <h1 className="font-semibold">Items: </h1>
          <ul className="w-fit border-2 cursor-pointer p-1 shadow-xl">
            {items.map((item) => (
              <li
                className="hover:bg-blue-500 w-full p-1"
                key={item.id}
                data-item-id={item.id}
                onClick={() => handleItemClick(item.id)}
              >
                {item.name}
              </li>
            ))}
          </ul>
        </div>
        {selectedItem && (
          <div className="flex-1 p-5">
            <h2>Selected Item Details</h2>
            <p>
              Name:
              {items.find((item) => item.id.toString() === selectedItem)?.name}
            </p>
            <p>
              Description:
              {
                items.find((item) => item.id.toString() === selectedItem)
                  ?.description
              }
            </p>
          </div>
        )}
      </div>
    </>
  );
}

      `;
const dir = `  
<p dir="rtl">this text is right to left</p>
<p dir="ltr">this text is left to right</p>
      `;
const draggable = `  
<div draggable={true} className="p-3 w-fit  bg-blue-600 ">
  can drag me
</div>
<br></br>
<div className="p-3 w-fit  bg-green-500">can't drag me</div>
      `;
const enterkeyhint = `  
search:
<input enterKeyHint="search" type="text" className="input" />
go:
<input enterKeyHint="go" type="text" className="input" />
enter:
<input enterKeyHint="enter" type="text" className="input" />
done:
<input enterKeyHint="done" type="text" className="input" />
send:
<input enterKeyHint="send" type="text" className="input" />
next:
<input enterKeyHint="next" type="text" className="input" />
previous:
<input enterKeyHint="previous" type="text" className="input" />
      `;
const hidden = `  
"use client";
import { useState } from "react";
export function HideComp() {
  const [hide, setHide] = useState(true);
  return (
    <>
      <button
        className="bg-green-500 p-2 m-2 w-fit active:bg-green-300"
        onClick={() => setHide(!hide)}
      >
        {hide ? "Show" : "Hide"}
      </button>
      <div className="w-40  h-40 bg-red-600" hidden={hide}></div>
    </>
  );
}
      `;
const id = `  
<p> Click on the field name to focus on the input box</p>

<div className="flex flex-col md:flex-row justify-between mt-3 p-4">
<label htmlFor="name" className="font-medium inline-block">
  Enter your name
</label>
<input id="name" className="input" />
</div>
<div className="flex flex-col md:flex-row justify-between  p-4">
<label htmlFor="phone" className="font-medium inline-block">
  Enter your work phone number
</label>
<input id="phone" className="input" />
</div>
      `;
const inputmode = `  
<label htmlFor="decimal">decimal</label>
<input id="decimal" inputMode="decimal" className="input" />

<label htmlFor="email">email</label>
<input id="email" inputMode="email" className="input" />

<label htmlFor="none">none</label>
<input id="none" inputMode="none" className="input" />

<label htmlFor="numeric">numeric</label>
<input id="numeric" inputMode="numeric" className="input" />

<label htmlFor="search">search</label>
<input id="search" inputMode="search" className="input" />

<label htmlFor="tel">tel</label>
<input id="tel" inputMode="tel" className="input" />

<label htmlFor="text">text</label>
<input id="text" inputMode="text" className="input" />

<label htmlFor="url">url</label>
<input id="url" inputMode="url" className="input" />
      `;
const lang = `  
<p lang="es">Este mensaje esta en espanol</p>
<a
  href="https://www.w3schools.com/tags/ref_language_codes.asp"
  target="_blank"
  className="underline text-blue-600"
>
  List of language codes
</a>
      `;
const spellchceck = `  
<h3
  className="text-3xl md:text-6xl"
  contentEditable={true}
  spellCheck={true}
>
  Fix the word spellchjk
</h3>
      `;
const tabindex = `  
<div>click on here then </div>
<div tabIndex={1}>Hti Tab</div>
<div tabIndex={2}> To navigate</div>
<div tabIndex={3}> focus between each div</div>
<div tabIndex={4}> div </div>
      `;
const title = `  
<p> Place mouse over the top of each line for more info</p>
<a
  href="https://google.com"
  target="_blank"
  title="visit google.com"
  className="underline text-blue-600"
>
  Google
</a>
<span title="Hover over me to see the tooltip">Hover me for info</span>
<abbr title="TypeScript eXtension">TSX</abbr>
      `;
