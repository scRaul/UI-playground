import CodePreview from "@/components/CARDS/CodePreview";
import Collapsible from "@/components/CONTAINERS/Collapsible";

export default function InputPage() {
  return (
    <>
      <Collapsible className="w-full mb-4 md:w-[750px]" label="<Button>">
        <CodePreview title="button" code={bttnButton}>
          <button
            className="p-2 w-fit rounded border-2 bg-slate-100 hover:bg-slate-300  active:bg-slate-100"
            type="button"
          >
            Button
          </button>
        </CodePreview>
        <CodePreview title="reset" code={bttnReset}>
          <button
            className="p-2 w-fit rounded border-2 bg-red-400 hover:bg-red-500  active:bg-red-400"
            type="reset"
          >
            Reset
          </button>
        </CodePreview>
        <CodePreview title="submit" code={bttnSubmit}>
          <button
            className="p-2 w-fit rounded border-2 text-white  bg-blue-400 hover:bg-blue-500  active:bg-blue-400"
            type="submit"
          >
            Submit
          </button>
        </CodePreview>
      </Collapsible>

      <Collapsible className="w-full mb-4  md:w-[750px]" label="<input>">
        <CodePreview
          title="button"
          code={`<input type="button" value="Add to Cart" className="w-fit rounded p-2  bg-yellow-300 hover:bg-yellow-400 active:bg-yellow-300" />`}
        >
          <input
            type="button"
            value="Add to Cart"
            className="w-fit rounded p-2  bg-yellow-300 hover:bg-yellow-400 active:bg-yellow-300"
          />
        </CodePreview>
        <CodePreview
          title="checkbox"
          code={`<input id="chbx" type="checkbox" className="w-4 h-4" />
<label htmlFor="chbx">Add to favorites</label>`}
        >
          <input id="chbx" type="checkbox" className="w-4 h-4" />
          <label htmlFor="chbx">Add to favorites</label>
        </CodePreview>
        <CodePreview
          title="color"
          code={`<input type="color" value="#ff0000" />`}
        >
          <input type="color" value="#ff0000" />
        </CodePreview>
        <CodePreview
          title="date"
          code={`<input type="date" className="w-fit border-2" />`}
        >
          <input type="date" className="w-fit border-2" />
        </CodePreview>
        <CodePreview
          title="datetime-local"
          code={`<input type="datetime-local" className="w-fit border-2" />`}
        >
          <input type="datetime-local" className="w-fit border-2" />
        </CodePreview>
        <CodePreview
          title="email"
          code={`<input type="email" className="w-fit  border-2" />`}
        >
          <input type="email" className="w-fit  border-2" />
        </CodePreview>
        <CodePreview
          title="file"
          code={`<input type="file" className="w-fit" />`}
        >
          <input type="file" className="w-fit" />
        </CodePreview>
        <CodePreview
          title="hidden"
          code={`<input type="hidden" className="w-fit" value={"some_secrete"} />`}
        >
          <input type="hidden" className="w-fit" value={"some_secrete"} />
          <small>*used to store hidden data from user*</small>
        </CodePreview>
        <CodePreview
          title="image"
          code={`<input type="image" src="/imgBttn.png" className="w-24 border-2" />`}
        >
          <input type="image" src="/imgBttn.png" className="w-24 border-2" />
          <small>
            *It's similar to the submit input type, but it allows you to use an
            image as the button instead of text {"(its less common today)"}*
          </small>
        </CodePreview>
        <CodePreview
          title="month"
          code={`<input type="month" className="w-fit border-2" />`}
        >
          <input type="month" className="w-fit border-2" />
        </CodePreview>
        <CodePreview
          title="number"
          code={`<input type="number" className="w-fit  border-2" />`}
        >
          <input type="number" className="w-fit  border-2" />
        </CodePreview>
        <CodePreview
          title="password"
          code={`<input type="password" className="w-fit  border-2" />`}
        >
          <input type="password" className="w-fit  border-2" />
        </CodePreview>
        <CodePreview
          title="radio"
          code={`<input id="radio" type="radio" className="w-fit" />`}
        >
          <input id="radio" type="radio" className="w-fit" />
          <label htmlFor="radio">live</label>
        </CodePreview>
        <CodePreview
          title="range"
          code={`<input type="range" className="w-fit" />`}
        >
          <input type="range" className="w-fit" />
        </CodePreview>
        <CodePreview
          title="reset"
          code={` <input
type="reset"
className="w-fit p-2 rounded bg-red-500 hover:bg-red-600 active:bg-red-500"
/>`}
        >
          <input
            type="reset"
            className="w-fit p-2 rounded bg-red-500 hover:bg-red-600 active:bg-red-500"
          />
        </CodePreview>
        <CodePreview
          title="search"
          code={`<input type="search" className="w-fit border-2" />`}
        >
          <input type="search" className="w-fit border-2" />
        </CodePreview>
        <CodePreview
          title="submit"
          code={`<input
type="submit"
className="w-fit p-2 rounded bg-blue-500 hover:bg-blue-600 active:bg-blue-500  "
 />`}
        >
          <input
            type="submit"
            className="w-fit p-2 rounded bg-blue-500 hover:bg-blue-600 active:bg-blue-500  "
          />
        </CodePreview>
        <CodePreview
          title="tel"
          code={`<input type="tel" className="w-fit border-2" />`}
        >
          <input type="tel" className="w-fit border-2" />
        </CodePreview>
        <CodePreview
          title="text"
          code={`<input type="text" className="w-fit border-2" />`}
        >
          <input type="text" className="w-fit border-2" />
        </CodePreview>
        <CodePreview
          title="time"
          code={`<input type="time" className="w-fit border-2" />`}
        >
          <input type="time" className="w-fit border-2" />
        </CodePreview>
        <CodePreview
          title="url"
          code={`<input type="url" className="w-fit border-2" />`}
        >
          <input type="url" className="w-fit border-2" />
        </CodePreview>
        <CodePreview
          title="week"
          code={`<input type="week" className="w-fit border-2" />`}
        >
          <input type="week" className="w-fit border-2" />
        </CodePreview>
      </Collapsible>

      <CodePreview title="<form>" code={form_ex}>
        <form className="w-fit bg-slate-50 shadow-sm p-4 mx-auto border-black border">
          <fieldset className="border-2 p-3">
            <legend>Personal Information</legend>
            <label htmlFor="name" className="block md:inline-block">
              Name:
            </label>
            <input id="name" type="text" className="border-2 w-fit" />
          </fieldset>
          <fieldset className="border-2 p-3">
            <legend>Meeting Date</legend>
            <label htmlFor="date" className="block md:inline-block">
              Select a date:
            </label>
            <input id="date" type="date" className="border-2 w-fit" />
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

      <CodePreview title="<search>" code={search_ex}>
        <search className="mx-auto">
          <form>
            <label htmlFor="movie" className="block md:inline-block">
              Find a Movie
            </label>
            <input
              type="search"
              id="movie"
              name="q"
              className="border-2 mx-2"
            />
            <button
              type="submit"
              className="mx-2 bg-yellow-200 hover:bg-yellow-300 border rounded p-1  border-black"
            >
              Search
            </button>
          </form>
        </search>
      </CodePreview>

      <CodePreview
        title="<textarea>"
        code={`<textarea
className="border-2 w-[30ch] h-[5ch] mx-auto md:w-[60ch]"
placeholder="Type something..."
></textarea>`}
      >
        <textarea
          className="border-2 w-[30ch] h-[5ch] mx-auto md:w-[60ch]"
          placeholder="Type something..."
        ></textarea>
      </CodePreview>
    </>
  );
}
const bttnButton = `
<button
  className="p-2 w-fit rounded border-2 bg-slate-100 hover:bg-slate-300  active:bg-slate-100"
  type="button"
>
  Button
</button>
`;
const bttnReset = `
<button
  className="p-2 w-fit rounded border-2 bg-red-400 hover:bg-red-500  active:bg-red-400"
  type="reset"
>
  Reset
</button>
`;
const bttnSubmit = `
<button
  className="p-2 w-fit rounded border-2 text-white  bg-blue-400 hover:bg-blue-500  active:bg-blue-400"
  type="submit"
>
  Submit
</button>
`;

const form_ex = `
<form className="w-fit bg-slate-50 shadow-sm p-4 mx-auto border-black border">
  <fieldset className="border-2 p-3">
    <legend>Personal Information</legend>
    <label htmlFor="name" className="block md:inline-block">
      Name:
    </label>
    <input id="name" type="text" className="border-2 w-fit" />
  </fieldset>
  <fieldset className="border-2 p-3">
    <legend>Meeting Date</legend>
    <label htmlFor="date" className="block md:inline-block">
      Select a date:
    </label>
    <input id="date" type="date" className="border-2 w-fit" />
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
const search_ex = `
<search className="mx-auto">
  <form>
    <label htmlFor="movie" className="block md:inline-block">
      Find a Movie
    </label>
    <input
      type="search"
      id="movie"
      name="q"
      className="border-2 mx-2"
    />
    <button
      type="submit"
      className="mx-2 bg-yellow-200 hover:bg-yellow-300 border rounded p-1  border-black"
    >
      Search
    </button>
  </form>
</search>

`;
