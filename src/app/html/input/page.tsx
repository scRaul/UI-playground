import CodePreview from "@/components/CARDS/CodePreview";
import Collapsible from "@/components/CONTAINERS/Collapsible";

export default function InputPage() {
  return (
    <>
      <Collapsible className="w-full md:w-[750px]" label="<Button>">
        <CodePreview title="button" code={``}>
          <button
            className="p-2 w-fit rounded border-2 bg-slate-100 hover:bg-slate-300  active:bg-slate-100"
            type="button"
          >
            Button
          </button>
        </CodePreview>
        <CodePreview title="button" code={``}>
          <button
            className="p-2 w-fit rounded border-2 bg-red-400 hover:bg-red-500  active:bg-red-400"
            type="reset"
          >
            Reset
          </button>
        </CodePreview>
        <CodePreview title="button" code={``}>
          <button
            className="p-2 w-fit rounded border-2 text-white  bg-blue-400 hover:bg-blue-500  active:bg-blue-400"
            type="submit"
          >
            Submit
          </button>
        </CodePreview>
      </Collapsible>

      <Collapsible className="w-full md:w-[750px]" label="<input>">
        <CodePreview title="button" code={``}>
          <input
            type="button"
            value="Add to Cart"
            className="w-fit rounded p-2  bg-yellow-300 hover:bg-yellow-400 active:bg-yellow-300"
          />
        </CodePreview>
        <CodePreview title="checkbox" code={``}>
          <input id="chbx" type="checkbox" className="w-4 h-4" />
          <label htmlFor="chbx">Add to favorites</label>
        </CodePreview>
        <CodePreview title="color" code={``}>
          <input type="color" value="#ff0000" />
        </CodePreview>
        <CodePreview title="date" code={``}>
          <input type="date" className="w-fit border-2" />
        </CodePreview>
        <CodePreview title="datetime-local" code={``}>
          <input type="datetime-local" className="w-fit border-2" />
        </CodePreview>
        <CodePreview title="email" code={``}>
          <input type="email" className="w-fit  border-2" />
        </CodePreview>
        <CodePreview title="file" code={``}>
          <input type="file" className="w-fit" />
        </CodePreview>
        <CodePreview title="hidden" code={``}>
          <input type="hidden" className="w-fit" />
        </CodePreview>
        <CodePreview title="image" code={``}>
          <input type="image" className="w-fit" />
        </CodePreview>
        <CodePreview title="month" code={``}>
          <input type="month" className="w-fit" />
        </CodePreview>
        <CodePreview title="number" code={``}>
          <input type="number" className="w-fit  border-2" />
        </CodePreview>
        <CodePreview title="password" code={``}>
          <input type="password" className="w-fit  border-2" />
        </CodePreview>
        <CodePreview title="radio" code={``}>
          <input type="radio" className="w-fit" />
        </CodePreview>
        <CodePreview title="range" code={``}>
          <input type="range" className="w-fit" />
        </CodePreview>
        <CodePreview title="resest" code={``}>
          <input type="reset" className="w-fit" />
        </CodePreview>
        <CodePreview title="search" code={``}>
          <input type="search" className="w-fit  border-2" />
        </CodePreview>
        <CodePreview title="submit" code={``}>
          <input type="submit" className="w-fit" />
        </CodePreview>
        <CodePreview title="tel" code={``}>
          <input type="tel" className="w-fit" />
        </CodePreview>
        <CodePreview title="text" code={``}>
          <input type="text" className="w-fit" />
        </CodePreview>
        <CodePreview title="time" code={``}>
          <input type="time" className="w-fit" />
        </CodePreview>
        <CodePreview title="url" code={``}>
          <input type="url" className="w-fit" />
        </CodePreview>
        <CodePreview title="week" code={``}>
          <input type="week" className="w-fit" />
        </CodePreview>
      </Collapsible>

      <CodePreview title="<fieldset>" code={""}>
        <div></div>
      </CodePreview>
      <CodePreview title="<form>" code={""}>
        <form></form>
      </CodePreview>

      <CodePreview title="<label>" code={""}>
        <div></div>
      </CodePreview>
      <CodePreview title="<legend>" code={""}>
        <div></div>
      </CodePreview>
      <CodePreview title="<search>" code={""}>
        <div></div>
      </CodePreview>
      <CodePreview title="<textarea>" code={""}>
        <div></div>
      </CodePreview>
    </>
  );
}
