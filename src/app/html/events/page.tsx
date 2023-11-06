"use client";
import CodePreview from "@/components/CARDS/CodePreview";
import Collapsible from "@/components/CONTAINERS/Collapsible";
import { FolderIcon, Package, PackageOpen } from "lucide-react";

import { useState } from "react";

export default function EventsPage() {
  const [userName1, setUserName1] = useState("guest");
  const [userName2, setUserName2] = useState("guest");
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  const [invalidMssg, setInvalidMssg] = useState("");
  const [selectedText, setSelectedText] = useState("");
  const [favoriteFruit, setFavoriteFruit] = useState("");
  const [blockFloat, setBlockFloat] = useState("left");
  const [count3, setCount3] = useState(0);
  const [highscore, setHighscore] = useState(0);
  const [clickMe, setClickMe] = useState("click me");
  const [clickMe2, setClickMe2] = useState("double click me");
  const [mouseDown, setMouseDown] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [mouseOver, setMouseOver] = useState(false);
  const [dragging, setDragging] = useState(false);
  const [dragEnter, setDragEnter] = useState(false);
  const [boxOpen, setBoxOpen] = useState(false);
  const [folderVisible, setFolderVisible] = useState(true);

  function handleBlur(event: React.FocusEvent<HTMLInputElement>) {
    setUserName1(event.target.value);
  }
  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setUserName2(event.target.value);
  }
  function handleContextMenu(event: React.MouseEvent<HTMLInputElement>) {
    event.preventDefault();
    alert("Right Clicked!!");
  }
  function handleInvalid(event: React.FormEvent<HTMLInputElement>) {
    setInvalidMssg(event.currentTarget.validationMessage);
  }

  function handleReset(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const inputName = form.elements.namedItem("name") as HTMLInputElement;
    const inputAge = form.elements.namedItem("age") as HTMLInputElement;
    inputName.placeholder = inputName.value;
    inputName.value = "";

    inputAge.placeholder = inputAge.value;
    inputAge.value = "";
  }

  function handleSelect(event: React.FormEvent<HTMLInputElement>) {
    const start = event.currentTarget.selectionStart
      ? event.currentTarget.selectionStart
      : 0;
    const end = event.currentTarget.selectionEnd
      ? event.currentTarget.selectionEnd
      : 0;
    const selction = event.currentTarget.value.substring(start, end);
    setSelectedText(selction);
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const inputName = form.elements.namedItem("name") as HTMLInputElement;
    setFavoriteFruit(inputName.value);
  }
  function handleKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    event.currentTarget.value = event.key;

    if (event.key === "a") setBlockFloat("left");
    if (event.key === "d") setBlockFloat("right");
  }

  function handleOnKeyUp(event: React.KeyboardEvent<HTMLInputElement>) {
    if (count3 > highscore) setHighscore(count3);
    setCount3(0);
  }
  function handleKeyDown2(event: React.KeyboardEvent<HTMLInputElement>) {
    event.currentTarget.value = event.key;
    if (event.key === "d") setCount3(count3 + 1);
  }
  function handleMouseMove(event: React.MouseEvent<HTMLDivElement>) {
    const x = event.clientX;
    const y = event.clientY;
    const divRect = event.currentTarget.getBoundingClientRect();
    const xRelative = x - divRect.left;
    const yRelative = y - divRect.top;
    setMousePos({ x: xRelative, y: yRelative });
  }

  function handleDragOver(event: React.DragEvent<HTMLDivElement>) {
    event.preventDefault();
  }
  function handleDrop(event: React.DragEvent<HTMLDivElement>) {
    setFolderVisible(false);
    setBoxOpen(false);
  }
  return (
    <>
      <Collapsible className="w-full md:w-[750px]" label="Form/Input Events">
        <CodePreview title="onBlur" code={code[0]}>
          Enter your name
          <input className="border-2 w-fit" type="text" onBlur={handleBlur} />
          <p>
            Your Name is: <span className="text-blue-500">{userName1}</span>
          </p>
        </CodePreview>
        <CodePreview title="onChange" code={code[1]}>
          Enter your name:
          <input
            className="border-2 w-fit"
            type="text"
            onChange={handleChange}
          />
          <p>
            Your Name is: <span className="text-blue-500">{userName2}</span>
          </p>
        </CodePreview>
        <CodePreview title="onFocus" code={code[2]}>
          Enter your name:
          <input
            className="border-2 w-fit"
            type="text"
            onFocus={() => setCount(count + 1)}
          />
          <p>
            # of times focused on:{" "}
            <span className="text-blue-500">{count}</span>
          </p>
        </CodePreview>
        <CodePreview title="onInput" code={code[3]}>
          Enter your name:
          <input
            className="border-2 w-fit"
            type="text"
            onInput={() => setCount2(count2 + 1)}
          />
          <p>
            # of times entered some input
            <span className="text-blue-500">{count2}</span>
          </p>
        </CodePreview>
        <CodePreview title="onContextMenu" code={code[4]}>
          right click input box
          <input
            className="border-2 w-fit"
            type="text"
            onContextMenu={handleContextMenu}
          />
        </CodePreview>{" "}
        <CodePreview title="onSumbit" code={code[5]}>
          <form onSubmit={handleSubmit}>
            Enter your favorite fruit:
            <input type="text" className="border-2 w-fit" name="name" />
            <br />
            <input type="submit" className="bg-blue-300 p-2 mt-1  " />
          </form>
          <p>
            My Favorite Fruit is:
            <span className="text-green-500"> {favoriteFruit} </span>
          </p>
        </CodePreview>
        <CodePreview title="onInvalid" code={code[6]}>
          <form>
            Enter your email:(submit invalid emails on purpose)
            <br />
            <input
              type="email"
              required
              className="border-2 w-fit"
              onInvalid={handleInvalid}
            />
            <span className="text-red-500">{invalidMssg} </span>
            <br />
            <input type="submit" className="bg-blue-300 p-2 mt-1  " />
          </form>
        </CodePreview>
        <CodePreview title="onReset" code={code[7]}>
          <form onReset={handleReset}>
            Enter your name:
            <input type="text" className="border-2 w-fit" name="name" />
            <br />
            Enter your age :
            <input type="number" className="border-2 w-fit" name="age" />
            <br />
            <input type="reset" className="bg-gray-300 p-2 mt-1 " />
          </form>
        </CodePreview>
        <CodePreview title="onSelect" code={code[8]}>
          Highlight some text in the input
          <input
            type="text"
            value={"The quick brown fox jumped over the lazy dog"}
            onSelect={handleSelect}
            className="border-2"
          />
          <p>
            Last Selected: <span className="text-blue-500">{selectedText}</span>
          </p>
        </CodePreview>
      </Collapsible>

      <Collapsible className="w-full md:w-[750px]" label="KeyBoard Events">
        <CodePreview title="OnKeyDown" code={code[9]}>
          <div>
            <div className={`w-6 h-6 bg-red-500 float-${blockFloat}`}></div>
          </div>
          <div className="flex flex-col items-center">
            <input
              onKeyDown={handleKeyDown}
              autoFocus
              className="w-fit border-2"
            />
            [a] move left [d] move right
          </div>
        </CodePreview>
        <CodePreview title="OnKeyUp" code={code[10]}>
          <div className="flex flex-col items-center">
            [d] hold down
            <input
              onKeyUp={handleOnKeyUp}
              onKeyDown={handleKeyDown2}
              autoFocus
              className="w-fit border-2"
            />
            <p>
              current score: <span className="text-blue-400">{count3}</span>
            </p>
            <p>
              highscore: <span className="text-green-500">{highscore}</span>
            </p>
          </div>
        </CodePreview>
      </Collapsible>

      <Collapsible className="w-full md:w-[750px]" label="Mouse Events">
        <CodePreview title="onClick" code={code[11]}>
          <div
            className="text-center p-3 bg-slate-100 &*>"
            onClick={() => setClickMe("clicked!")}
          >
            {clickMe}
          </div>
        </CodePreview>
        <CodePreview title="onDoubleClick" code={code[12]}>
          <div
            className="text-center p-3 bg-slate-100"
            onDoubleClick={() => setClickMe2("clicked!")}
          >
            {clickMe2}
          </div>
        </CodePreview>
        <CodePreview title="onMouseDown/Up" code={code[13]}>
          <p>click and hold box</p>
          <div
            className={`h-8 border-2 ${
              mouseDown ? "bg-red-600" : "bg-blue-600"
            }`}
            onMouseDown={() => setMouseDown(true)}
            onMouseUp={() => setMouseDown(false)}
          ></div>
        </CodePreview>
        <CodePreview title="onMouseMove" code={code[14]}>
          <p>
            Move Mouse inside of div, current pos
            <span className="text-blue-500">
              {mousePos.x},{mousePos.y}
            </span>
          </p>
          <div
            className="h-32 border-2 bg-blue-500"
            onMouseMove={handleMouseMove}
          ></div>
        </CodePreview>
        <CodePreview title="onMouseOver/Out" code={code[15]}>
          <p>Move Mouse inside of div</p>
          <div
            className={`h-32 border-2 ${
              mouseOver ? "bg-red-600" : "bg-blue-600"
            }`}
            onMouseOver={() => setMouseOver(true)}
            onMouseOut={() => setMouseOver(false)}
          ></div>
        </CodePreview>
      </Collapsible>

      <Collapsible className="w-full md:w-[750px]" label="Drag Events">
        <CodePreview title="OnDrag/onDragEnd" code={code[16]}>
          <p> Try dragging red block,(notice cursor change)</p>
          <div
            draggable={true}
            className={`w-12 h-12 bg-red-500 ${
              dragging ? "cursor-grabbing " : "cursor-grab"
            }`}
            onDrag={() => setDragging(true)}
            onDragEnd={() => setDragging(false)}
          ></div>
        </CodePreview>
        <CodePreview title="OnDragEnter/onDragLeave" code={code[17]}>
          <p> Try to put folder away </p>
          <div className="flex items-center justify-between">
            <div
              draggable={true}
              className={`p-2 ${dragging ? "cursor-grabbing " : "cursor-grab"}`}
              onDrag={() => setDragging(true)}
              onDragEnd={() => setDragging(false)}
            >
              <FolderIcon />
            </div>
            <div
              onDragEnter={() => setDragEnter(true)}
              onDragLeave={() => setDragEnter(false)}
            >
              {dragEnter ? <PackageOpen size={48} /> : <Package size={48} />}
            </div>
          </div>
        </CodePreview>
        <CodePreview title="OnDragOver/onDragDrop" code={code[18]}>
          <p> Put the folder away </p>
          <div className="flex items-center justify-between">
            <div
              draggable={true}
              className={`p-2 ${
                dragging ? "cursor-grabbing " : "cursor-grab"
              } ${folderVisible ? "" : "text-transparent"} `}
              onDrag={() => {
                setDragging(true);
              }}
              onDragEnd={() => {
                setDragging(false);
              }}
            >
              <FolderIcon size={24} />
            </div>
            <div
              onDragEnter={() => setBoxOpen(true)}
              onDragLeave={() => setBoxOpen(false)}
              onDragOver={handleDragOver}
              onDrop={handleDrop}
            >
              {boxOpen ? <PackageOpen size={48} /> : <Package size={48} />}
            </div>
          </div>
        </CodePreview>
      </Collapsible>
    </>
  );
}

const code = [
  `
//...
import { useState } from "react";
//...
export default function Comp(){
  const [userName1, setUserName1] = useState("guest"); 
  function handleBlur(event: React.FocusEvent<HTMLInputElement>) {
    setUserName1(event.target.value);
  }
  return(
  //..
  Enter your name
  <input className="border-2 w-fit" type="text" onBlur={handleBlur} />
  <p>
    Your Name is: <span className="text-blue-500">{userName1}</span>
  </p>
    //...
);
//...
`,
  `
//...
import { useState } from "react";
//...
export default function Comp(){
  const [userName2, setUserName2] = useState("guest"); 
  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setUserName2(event.target.value);
  }
  return(
  //..
      Enter your name:
      <input
        className="border-2 w-fit"
        type="text"
        onChange={handleChange}
      />
      <p>
        Your Name is: <span className="text-blue-500">{userName2}</span>
      </p>
    //...
);
//...
`,
  `
//...
import { useState } from "react";
//...
export default function Comp(){
  const [count, setCount] = useState(0); 
  return(
  //..
    Enter your name:
    <input
      className="border-2 w-fit"
      type="text"
      onFocus={() => setCount(count + 1)}
    />
    <p>
      # of times focused on:{" "}
      <span className="text-blue-500">{count}</span>
    </p>
    //...
);
//...
`,
  `
//...
import { useState } from "react";
//...
export default function Comp(){
  const [count2, setCount2] = useState(0); 
  return(
  //..
      Enter your name:
      <input
        className="border-2 w-fit"
        type="text"
        onInput={() => setCount2(count2 + 1)}
      />
      <p>
        # of times entered some input
        <span className="text-blue-500">{count2}</span>
      </p>
    //...
);
//...
`,
  `
//...
export default function Comp(){
  function handleContextMenu(event: React.MouseEvent<HTMLInputElement>) {
    event.preventDefault();
    alert("Right Clicked!!");
  }
  return(
  //..
      right click input box
      <input
        className="border-2 w-fit"
        type="text"
        onContextMenu={handleContextMenu}
      />
    //...
);
//...
`,
  `
//...
import { useState } from "react";
//...
export default function Comp(){
   const [favoriteFruit, setFavoriteFruit] = useState(""); 
   function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
      event.preventDefault();
      const form = event.currentTarget;
      const inputName = form.elements.namedItem("name") as HTMLInputElement;
      setFavoriteFruit(inputName.value);
  }
  return(
  //..
     <form onSubmit={handleSubmit}>
        Enter your favorite fruit:
        <input type="text" className="border-2 w-fit" name="name" />
        <br />
        <input type="submit" className="bg-blue-300 p-2 mt-1  " />
      </form>
      <p>
        My Favorite Fruit is:
        <span className="text-green-500"> {favoriteFruit} </span>
      </p>
    //...
);
//...
`,
  `
//...
import { useState } from "react";
//...
export default function Comp(){
  const [invalidMssg, setInvalidMssg] = useState("");
  function handleInvalid(event: React.FormEvent<HTMLInputElement>) {
    setInvalidMssg(event.currentTarget.validationMessage);
  }
  return(
  //..
      <form>
        Enter your email:(submit invalid emails on purpose)
        <br />
        <input
          type="email"
          required
          className="border-2 w-fit"
          onInvalid={handleInvalid}
        />
        <span className="text-red-500">{invalidMssg} </span>
        <br />
        <input type="submit" className="bg-blue-300 p-2 mt-1  " />
      </form>
    //...
);
//...
`,
  `
//...
import { useState } from "react";
//...
export default function Comp(){
   function handleReset(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const inputName = form.elements.namedItem("name") as HTMLInputElement;
    const inputAge = form.elements.namedItem("age") as HTMLInputElement;
    inputName.placeholder = inputName.value;
    inputName.value = "";

    inputAge.placeholder = inputAge.value;
    inputAge.value = "";
  }
  return(
  //..
     <form onReset={handleReset}>
        Enter your name:
        <input type="text" className="border-2 w-fit" name="name" />
        <br />
        Enter your age :
        <input type="number" className="border-2 w-fit" name="age" />
        <br />
        <input type="reset" className="bg-gray-300 p-2 mt-1 " />
    </form>
    //...
);
//...
`,
  `
//...
import { useState } from "react";
//...
export default function Comp(){
  const [selectedText, setSelectedText] = useState("");
  function handleSelect(event: React.FormEvent<HTMLInputElement>) {
    const start = event.currentTarget.selectionStart
      ? event.currentTarget.selectionStart
      : 0;
    const end = event.currentTarget.selectionEnd
      ? event.currentTarget.selectionEnd
      : 0;
    const selction = event.currentTarget.value.substring(start, end);
    setSelectedText(selction);
  }
  return(
  //..
      Highlight some text in the input
      <input
        type="text"
        value={"The quick brown fox jumped over the lazy dog"}
        onSelect={handleSelect}
        className="border-2"
      />
      <p>
        Last Selected: <span className="text-blue-500">{selectedText}</span>
      </p>
    //...
);
//...
`,
  `
//...
import { useState } from "react";
//...
export default function Comp(){
  const [blockFloat, setBlockFloat] = useState("left");
  function handleKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    event.currentTarget.value = event.key;

    if (event.key === "a") setBlockFloat("left");
    if (event.key === "d") setBlockFloat("right");
  }
  return(
  //..
    <div>
      <div className={\`w-6 h-6 bg-red-500 float-\${blockFloat}\`}></div>
    </div>
    <div className="flex flex-col items-center">
      <input
        onKeyDown={handleKeyDown}
        autoFocus
        className="w-fit border-2"
      />
      [a] move left [d] move right
    </div>
    //...
);
//...
`,
  `
//...
import { useState } from "react";
//...
export default function Comp(){
  const [count3, setCount3] = useState(0);
  function handleOnKeyUp(event: React.KeyboardEvent<HTMLInputElement>) {
    if (count3 > highscore) setHighscore(count3);
    setCount3(0);
  }
  function handleKeyDown2(event: React.KeyboardEvent<HTMLInputElement>) {
    event.currentTarget.value = event.key;
    if (event.key === "d") setCount3(count3 + 1);
  }
  return(
  //..
     <div className="flex flex-col items-center">
        [d] hold down
        <input
          onKeyUp={handleOnKeyUp}
          onKeyDown={handleKeyDown2}
          autoFocus
          className="w-fit border-2"
        />
        <p>
          current score: <span className="text-blue-400">{count3}</span>
        </p>
        <p>
          highscore: <span className="text-green-500">{highscore}</span>
        </p>
     </div>
    //...
);
//...
`,
  `
//...
import { useState } from "react";
//...
export default function Comp(){
  const [clickMe, setClickMe] = useState("click me");
  return(
  //..
    <div
      className="text-center p-3 bg-slate-100 &*>"
      onClick={() => setClickMe("clicked!")}
    >
      {clickMe}
    </div>
    //...
);
//...
`,
  `
//...
import { useState } from "react";
//...
export default function Comp(){
  const [clickMe2, setClickMe2] = useState("double click me");
  return(
  //..
      <div
        className="text-center p-3 bg-slate-100"
        onDoubleClick={() => setClickMe2("clicked!")}
      >
        {clickMe2}
      </div>
    //...
);
//...
`,
  `
//...
import { useState } from "react";
//...
export default function Comp(){
  const [mouseDown, setMouseDown] = useState(false);
  return(
  //..
    <p>click and hold box</p>
    <div
      className={\`h-8 border-2 \${
        mouseDown ? "bg-red-600" : "bg-blue-600"
      }\`}
      onMouseDown={() => setMouseDown(true)}
      onMouseUp={() => setMouseDown(false)}
    ></div>
    //...
);
//...
`,
  `
//...
import { useState } from "react";
//...
export default function Comp(){
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    function handleMouseMove(event: React.MouseEvent<HTMLDivElement>) {
    const x = event.clientX;
    const y = event.clientY;
    const divRect = event.currentTarget.getBoundingClientRect();
    const xRelative = x - divRect.left;
    const yRelative = y - divRect.top;
    setMousePos({ x: xRelative, y: yRelative });
  }
  return(
  //..
      <p>
        Move Mouse inside of div, current pos
        <span className="text-blue-500">
          {mousePos.x},{mousePos.y}
        </span>
      </p>
      <div
        className="h-32 border-2 bg-blue-500"
        onMouseMove={handleMouseMove}
      ></div>
    //...
);
//...
`,
  `
//...
import { useState } from "react";
//...
export default function Comp(){
  const [mouseOver, setMouseOver] = useState(false);
  return(
  //..
      <p>Move Mouse inside of div</p>
        <div
          className={\`h-32 border-2 \${
            mouseOver ? "bg-red-600" : "bg-blue-600"
          }\`}
          onMouseOver={() => setMouseOver(true)}
          onMouseOut={() => setMouseOver(false)}
        ></div>
    //...
);
//...
`,
  `
//...
import { useState } from "react";
//...
export default function Comp(){
  const [dragging, setDragging] = useState(false);
  return(
  //..
      <p> Try dragging red block,(notice cursor change)</p>
      <div
        draggable={true}
        className={\`w-12 h-12 bg-red-500 \${
          dragging ? "cursor-grabbing " : "cursor-grab"
        }\`}
        onDrag={() => setDragging(true)}
        onDragEnd={() => setDragging(false)}
      ></div>
    //...
);
//...
`,
  `
//...
import { useState } from "react";
//...
export default function Comp(){
  const [dragging, setDragging] = useState(false);
  const [dragEnter, setDragEnter] = useState(false);
  return(
  //..
      <p> Try to put folder away </p>
      <div className="flex items-center justify-between">
        <div
          draggable={true}
          className={\`p-2 \${dragging ? "cursor-grabbing " : "cursor-grab"}\`}
          onDrag={() => setDragging(true)}
          onDragEnd={() => setDragging(false)}
        >
          <FolderIcon />
        </div>
        <div
          onDragEnter={() => setDragEnter(true)}
          onDragLeave={() => setDragEnter(false)}
        >
          {dragEnter ? <PackageOpen size={48} /> : <Package size={48} />}
        </div>
    //...
);
//...
`,
  `
//...
import { useState } from "react";
//...
export default function Comp(){
  const [dragging, setDragging] = useState(false);
  const [boxOpen, setBoxOpen] = useState(false);
  const [folderVisible, setFolderVisible] = useState(true);
    function handleDragOver(event: React.DragEvent<HTMLDivElement>) {
    event.preventDefault();
  }
  function handleDrop(event: React.DragEvent<HTMLDivElement>) {
    setFolderVisible(false);
    setBoxOpen(false);
  }
  return(
  //..
      <p> Put the folder away </p>
      <div className="flex items-center justify-between">
        <div
          draggable={true}
          className={\`p-2 \${
            dragging ? "cursor-grabbing " : "cursor-grab"
          } \${folderVisible ? "" : "text-transparent"} \`}
          onDrag={() => {
            setDragging(true);
          }}
          onDragEnd={() => {
            setDragging(false);
          }}
        >
          <FolderIcon size={24} />
        </div>
        <div
          onDragEnter={() => setBoxOpen(true)}
          onDragLeave={() => setBoxOpen(false)}
          onDragOver={handleDragOver}
          onDrop={handleDrop}
        >
          {boxOpen ? <PackageOpen size={48} /> : <Package size={48} />}
        </div>
      </div>
    //...
);
//...
`,
];
