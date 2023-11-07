import CodePreview from "@/components/CARDS/CodePreview";
import Collapsible from "@/components/CONTAINERS/Collapsible";
import { HideComp, DataComp } from "@/components/Page/attributes";
export default function AttributesPage() {
  return (
    <>
      <Collapsible className="w-full md:w-[750px]" label="Global">
        <CodePreview title="className" code={code[0]}>
          <p>try hovering over the box </p>
          <div
            className="w-12 h-12 text-white font-semibold flex items-center justify-center
            bg-blue-100 hover:bg-blue-600 hover:w-24 "
          >
            Blue
          </div>
        </CodePreview>
        <CodePreview title="contenteditable" code={code[1]}>
          <p className="text-center" contentEditable={true}>
            You can edit this sentence, simply click on it to begin
          </p>
        </CodePreview>
        <CodePreview title="data-key=" code={code[2]}>
          <DataComp />
        </CodePreview>
        <CodePreview title="dir" code={code[3]}>
          <p dir="rtl">this text is right to left</p>
          <p dir="ltr">this text is left to right</p>
        </CodePreview>
        <CodePreview title="draggable" code={code[4]}>
          <div
            draggable={true}
            className="p-3 w-fit  bg-blue-200 flex justify-center items-center"
          >
            can drag me
          </div>
          <br></br>
          <div className="p-3 w-fit  bg-red-200 flex justify-center items-center">
            cant drag me
          </div>
        </CodePreview>
        <CodePreview title="enterkeyhint (mobile keyboard) " code={code[5]}>
          search:
          <input enterKeyHint="search" type="text" className="border-2 w-fit" />
          go:
          <input enterKeyHint="go" type="text" className="border-2 w-fit" />
          enter:
          <input enterKeyHint="enter" type="text" className="border-2 w-fit" />
          done:
          <input enterKeyHint="done" type="text" className="border-2 w-fit" />
          send:
          <input enterKeyHint="send" type="text" className="border-2 w-fit" />
          next:
          <input enterKeyHint="next" type="text" className="border-2 w-fit" />
          previous:
          <input
            enterKeyHint="previous"
            type="text"
            className="border-2 w-fit"
          />
        </CodePreview>
        <CodePreview title="hidden" code={code[6]}>
          <HideComp />
        </CodePreview>
        <CodePreview title="id" code={code[7]}>
          <p> Click on the field name to focus on the input box</p>

          <div className="flex flex-col md:flex-row justify-between mt-3 p-4">
            <label htmlFor="name">Enter your name</label>
            <input id="name" className="w-fit border-2" />
          </div>
          <div className="flex flex-col md:flex-row justify-between  p-4">
            <label htmlFor="phone">Enter your work phone number</label>
            <input id="phone" className="w-fit border-2" />
          </div>
        </CodePreview>
        <CodePreview title="inputmode (mobile keyboard)" code={code[8]}>
          <div className="flex p-4 justify-between">
            <label htmlFor="decimal">decimal</label>
            <input
              id="decimal"
              inputMode="decimal"
              className="border-2 w-fit"
            />
          </div>
          <div className="flex p-4 justify-between">
            <label htmlFor="email">email</label>
            <input id="email" inputMode="email" className="border-2 w-fit" />
          </div>
          <div className="flex p-4 justify-between">
            <label htmlFor="none">none</label>
            <input id="none" inputMode="none" className="border-2 w-fit" />
          </div>
          <div className="flex p-4 justify-between">
            <label htmlFor="numeric">numeric</label>
            <input
              id="numeric"
              inputMode="numeric"
              className="border-2 w-fit"
            />
          </div>
          <div className="flex p-4 justify-between">
            <label htmlFor="search">search</label>
            <input id="search" inputMode="search" className="border-2 w-fit" />
          </div>
          <div className="flex p-4 justify-between">
            <label htmlFor="tel">tel</label>
            <input id="tel" inputMode="tel" className="border-2 w-fit" />
          </div>
          <div className="flex p-4 justify-between">
            <label htmlFor="text">text</label>
            <input id="text" inputMode="text" className="border-2 w-fit" />
          </div>
          <div className="flex p-4 justify-between">
            <label htmlFor="url">url</label>
            <input id="url" inputMode="url" className="border-2 w-fit" />
          </div>
        </CodePreview>
        <CodePreview title="lang" code={code[9]}>
          <p lang="es">Este mensaje esta en espanol</p>
          <a
            href="https://www.w3schools.com/tags/ref_language_codes.asp"
            target="_blank"
            className="underline text-blue-600"
          >
            List of language codes
          </a>
        </CodePreview>
        <CodePreview title="spellchceck" code={code[10]}>
          <h3
            className="text-3xl md:text-6xl"
            contentEditable={true}
            spellCheck={true}
          >
            Fix the word spellchjk
          </h3>
        </CodePreview>
        <CodePreview title="tabindex" code={code[11]}>
          <div>click on here then </div>
          <div tabIndex={1}>Hti Tab</div>
          <div tabIndex={2}> To navigate</div>
          <div tabIndex={3}> focus between each div</div>
          <div tabIndex={4}> div </div>
        </CodePreview>
        <CodePreview title="title" code={code[12]}>
          <p> Place mouse over the top of each line for more info</p>
          <a
            href="https://google.com"
            target="_blank"
            title="visit google.com"
            className="underline text-blue-600"
          >
            Google
          </a>
          <span title="Hover over me to see the tooltip">
            Hover me for info
          </span>
          <abbr title="TypeScript eXtension">TSX</abbr>
        </CodePreview>
      </Collapsible>
    </>
  );
}

const code = [
  `       
<p>try hovering over the box </p>
<div
className="w-12 h-12 text-white font-semibold flex items-center justify-center
bg-blue-100 hover:bg-blue-600 hover:w-24 "
>
Blue
</div>
`,
  `
<p className="text-center" contentEditable={true}>
You can edit this sentence, simply click on it to begin
</p>
`,
  `
//...
import { useState } from "react";

export default function Page() {
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  //...
  const items = [
    { id: 1, name: "Item 1", description: "Description for Item 1" },
    { id: 2, name: "Item 2", description: "Description for Item 2" },
    { id: 3, name: "Item 3", description: "Description for Item 3" },
  ];

  const handleItemClick = (itemId: number) => {
    // Set the selected item ID in state
    setSelectedItem(itemId.toString());
  };
  return (
    //...
    <div className="flex justify-between">
        <div>
          <h1 className="font-semibold">Items: </h1>
          <ul className="w-fit border-2 cursor-pointer  bg-slate-100 shadow-xl">
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
              {
                items.find((item) => item.id.toString() === selectedItem)
                  ?.name
              }
            </p>
            <p>
              Description:
              {
                items.find((item) => item.id.toString() === selectedItem)
                  ?.description
              }
            </p>
        </div>

    //...
  );
//...
`,
  `
<p dir="rtl">this text is right to left</p>
<p dir="ltr">this text is left to right</p>
`,
  `
<div
  draggable={true}
  className="p-3 w-fit  bg-blue-200 flex justify-center items-center"
>
  can drag me
</div>
<br></br>
<div className="p-3 w-fit  bg-red-200 flex justify-center items-center">
  cant drag me
</div>
`,
  `
search:
<input enterKeyHint="search" type="text" className="border-2 w-fit" />
go:
<input enterKeyHint="go" type="text" className="border-2 w-fit" />
enter:
<input enterKeyHint="enter" type="text" className="border-2 w-fit" />
done:
<input enterKeyHint="done" type="text" className="border-2 w-fit" />
send:
<input enterKeyHint="send" type="text" className="border-2 w-fit" />
next:
<input enterKeyHint="next" type="text" className="border-2 w-fit" />
previous:
<input
enterKeyHint="previous"
type="text"
className="border-2 w-fit"
/>
`,
  `
<button className="bg-gray-200  w-fit" onClick={() => setHide(!hide)}>
  Show/Hide
</button>
<div className="w-40  h-40 bg-red-600" hidden={hide}></div>
`,
  `
<p> Click on the field name to focus on the input box</p>

<div className="flex justify-between mt-3 p-4">
  <label htmlFor="name">Enter your name</label>
  <input id="name" className="w-fit border-2" />
</div>
<div className="flex justify-between  p-4">
  <label htmlFor="phone">Enter your work phone number</label>
  <input id="phone" className="w-fit border-2" />
</div>
`,
  `
<label htmlFor="decimal">decimal</label>
<input
  id="decimal"
  inputMode="decimal"
  className="border-2 w-fit"
/>
</div>
<div className="flex p-4 justify-between">
<label htmlFor="email">email</label>
<input id="email" inputMode="email" className="border-2 w-fit" />
</div>
<div className="flex p-4 justify-between">
<label htmlFor="none">none</label>
<input id="none" inputMode="none" className="border-2 w-fit" />
</div>
<div className="flex p-4 justify-between">
<label htmlFor="numeric">numeric</label>
<input
  id="numeric"
  inputMode="numeric"
  className="border-2 w-fit"
/>
</div>
<div className="flex p-4 justify-between">
<label htmlFor="search">search</label>
<input id="search" inputMode="search" className="border-2 w-fit" />
</div>
<div className="flex p-4 justify-between">
<label htmlFor="tel">tel</label>
<input id="tel" inputMode="tel" className="border-2 w-fit" />
</div>
<div className="flex p-4 justify-between">
<label htmlFor="text">text</label>
<input id="text" inputMode="text" className="border-2 w-fit" />
</div>
<div className="flex p-4 justify-between">
<label htmlFor="url">url</label>
<input id="url" inputMode="url" className="border-2 w-fit" />
</div>
`,
  `
<p lang="es">Este mensaje esta en espanol</p>
`,
  `
<h3
  className="text-3xl md:text-6xl"
  contentEditable={true}
  spellCheck={true}
>
  Fix the word spellchjk
</h3>
`,
  `
<div>click on here then </div>
<div tabIndex={1}>Hti Tab</div>
<div tabIndex={2}> To navigate</div>
<div tabIndex={3}> focus between each div</div>
<div tabIndex={4}> div </div>
`,
  `
<p> Place mouse over the top of each line for more info</p>
<a
  href="https://google.com"
  target="_blank"
  title="visit google.com"
  className="underline text-blue-600"
>
  Google
</a>
<span title="Hover over me to see the tooltip">
  Hover me for info
</span>
<abbr title="TypeScript eXtension">TSX</abbr>
`,
];
/*
        "accept" input 
         "checked" input  
               "step" input  
        "list" input 

        
               
         "accept-charset" form
        "action" form
  "method" form 
        
  
  "rows" textarea 
         "cols" textarea 
       "wrap" textarea


        "autocomplete" form input 
        "dirname" input text area 
        "alt" area img input 


        "autofocus" button input select textarea 
        "autoplay" audio vedio 

        "cite" blockquote del ins q 

        "colspan" td th 
        "content" meta 
        "controls" audio video 
        "coords" area 
        "datatime" del ins time 
        "defualt" track 

        "disabled" button fieldset optgroup option select text area 
        "downlaod  a area
        "enctype" form 
        "for" label output
        "form" button filedset input label meter object output select textarea 
        "formaction" button input 
        "headers" td th 
        "height" canvas embeded iframe img input video 
        "high" meter 
        "href" a area base link 
        "hreflang" a area link
        "http-equiv" meta 
        "ismap" img 
        "kind" track
        "label" track option optgroup

        "loop" audio video 
        "low" meter 
        "max" input meter progress
        "maxlength" input textarea 
        "media" a area link source 
      
        "min" input meter 
        "multiple" input select 
        "muted" video audio 
        "name" button fieldset form iframe input map meta object output param select textarea 
        "novalidate" form 
        "open" details 
        "optimimum" meter 
        "pattern" input 
        "placeholder" input textarea 
        "popovertarget" button input 
        "popovertargetaction" button input 
        "poster" video 
        "preload" vido audio 
        "readonly" input textarea 
        "rel" a area form link 
        "required" input select textarea 
        "reversed" ol 

        "rowspan" td th 
        "sandbox" iframe 
        "scope" th 
        "selected" option 
        "shape" area
        "size" input select   
        "sizes" img link source 
        "span" col colgroup 
        "src" audio emeded iframe img input script source track video 
        "srcdoc" iframe 
        "srclang" track
        "srcset" img source 
        "start" ol 

        "target" a area base form 
        "type" a button embeded input link menu object script source style 
        "usemap" img object 
        "value" button input li option meter progress param 
        "width" canvas emebeded iframe img input object video 
 
    */
