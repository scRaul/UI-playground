import CodePreview from "@/components/cards/CodePreview";
import { Code } from "lucide-react";

export default function InputPage() {
  return (
    <>
      <CodePreview
        title="button"
        code={`  <input type="button" value="Add to Cart" className="input" />`}
      >
        <input type="button" value="Add to Cart" className="input" />
      </CodePreview>
      <CodePreview
        title="checkbox"
        code={`<input  type="checkbox" className="input" /> `}
      >
        <input type="checkbox" className="input" />
      </CodePreview>
      <CodePreview
        title="color"
        code={`<input  type="color" value="#ff0000" className="input h-10" /> `}
      >
        <input type="color" value="#ff0000" className="input h-10" />
      </CodePreview>
      <CodePreview
        title="date"
        code={`<input  type="date" className="input" /> `}
      >
        <input type="date" className="input" />
      </CodePreview>
      <CodePreview
        title="datetime"
        code={`<input  type="datetime-local" className="input" /> `}
      >
        <input type="datetime-local" className="input" />
      </CodePreview>
      <CodePreview
        title="email"
        code={`<input  type="email" className="input" /> `}
      >
        <input type="email" className="input" />
      </CodePreview>
      <CodePreview
        title="file"
        code={`<input  type="file" className="input" /> `}
      >
        <input type="file" className="input" />
      </CodePreview>
      <CodePreview
        title="hidden"
        code={`<input  type="hidden" className="input" value={9} /> `}
      >
        <input type="hidden" className="input" value={9} />
      </CodePreview>
      <CodePreview
        title="image"
        code={`<input  type="image" src="/imgBttn.png" className="input" /> `}
      >
        <input type="image" src="/imgBttn.png" className="input" />
      </CodePreview>
      <CodePreview
        title="month"
        code={`<input  type="month" className="input" /> `}
      >
        <input type="month" className="input" />
      </CodePreview>
      <CodePreview
        title="number"
        code={`<input  type="number" className="input" /> `}
      >
        <input type="number" className="input" />
      </CodePreview>
      <CodePreview
        title="password"
        code={`<input  type="password" className="input" /> `}
      >
        <input type="password" className="input" />
      </CodePreview>
      <CodePreview
        title="radio"
        code={`<input  type="radio" className="input" /> `}
      >
        <input type="radio" className="input" />
      </CodePreview>
      <CodePreview
        title="range"
        code={`<input  type="range" className="input" /> `}
      >
        <input type="range" className="input" />
      </CodePreview>
      <CodePreview
        title="reset"
        code={`<input  type="reset" className="input" /> `}
      >
        <input type="reset" className="input" />
      </CodePreview>
      <CodePreview
        title="search"
        code={`<input  type="search" className="input" /> `}
      >
        <input type="search" className="input" />
      </CodePreview>
      <CodePreview
        title="submit"
        code={`<input  type="submit" className="input " /> `}
      >
        <input type="submit" className="input " />
      </CodePreview>
      <CodePreview
        title="tel"
        code={`<input  type="tel" className="input" /> `}
      >
        <input type="tel" className="input" />
      </CodePreview>
      <CodePreview
        title="text"
        code={`<input  type="text" className="input" /> `}
      >
        <input type="text" className="input" />
      </CodePreview>
      <CodePreview
        title="time"
        code={`<input  type="time" className="input" /> `}
      >
        <input type="time" className="input" />
      </CodePreview>
      <CodePreview
        title="url"
        code={`<input  type="url" className="input" /> `}
      >
        <input type="url" className="input" />
      </CodePreview>
      <CodePreview
        title="week"
        code={`<input  type="week" className="input" /> `}
      >
        <input type="week" className="input" />
      </CodePreview>

      <CodePreview title="form" code={form}>
        <form
          className="p-5 border border-white"
          action={"replace with server action"}
        >
          <fieldset className="border-2 p-3">
            <legend>Personal Information</legend>
            <label className="font-medium inline-block" htmlFor="name">
              Name:
            </label>
            <input id="name" type="text" className="input" />
          </fieldset>
          <fieldset className="border-2 p-3">
            <legend>Meeting Date</legend>
            <label className="font-medium inline-block" htmlFor="date">
              Select a date:
            </label>
            <input id="date" type="date" className="input" />
          </fieldset>
          <div className="flex justify-center gap-2 py-3">
            <input
              type="reset"
              className="w-fit p-2 rounded bg-red-500 hover:bg-red-600 active:bg-red-500"
            />
            <input
              type="submit"
              className="w-fit p-2 rounded bg-blue-500 hover:bg-blue-600 active:bg-blue-500  "
            />
          </div>
        </form>
      </CodePreview>

      <CodePreview title="search" code={search}>
        <search className="flex">
          <input type="search" id="movie" name="q" className="input" />
          <button
            type="submit"
            className="mx-2 bg-yellow-600 hover:bg-yellow-500 border rounded p-1"
          >
            Search
          </button>
        </search>
      </CodePreview>

      <CodePreview title="textarea" code={textarea}>
        <textarea className="input" placeholder="Type something..."></textarea>
      </CodePreview>
    </>
  );
}

const form = `  
<form
  className="p-5 border border-white"
  action={"replace with server action"}
>
  <fieldset className="border-2 p-3">
    <legend>Personal Information</legend>
    <label className="font-medium inline-block" htmlFor="name">
      Name:
    </label>
    <input id="name" type="text" className="input" />
  </fieldset>
  <fieldset className="border-2 p-3">
    <legend>Meeting Date</legend>
    <label className="font-medium inline-block" htmlFor="date">
      Select a date:
    </label>
    <input id="date" type="date" className="input" />
  </fieldset>
  <div className="flex justify-center gap-2 py-3">
    <input
      type="reset"
      className="w-fit p-2 rounded bg-red-500 hover:bg-red-600 active:bg-red-500"
    />
    <input
      type="submit"
      className="w-fit p-2 rounded bg-blue-500 hover:bg-blue-600 active:bg-blue-500  "
    />
  </div>
</form>
      `;
const search = `  
<search className="flex">
  <input type="search" id="movie" name="q" className="input" />
  <button
    type="submit"
    className="mx-2 bg-yellow-600 hover:bg-yellow-500 border rounded p-1"
  >
    Search
  </button>
</search>
      `;
const textarea = `  
<textarea className="input" placeholder="Type something..."></textarea>
      `;
