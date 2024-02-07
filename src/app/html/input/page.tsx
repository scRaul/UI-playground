import CodePreview from "@/components/CARDS/CodePreview";

export default function InputPage() {
  return (
    <>
      <CodePreview title="buttons" code={buttons}>
        <div className="flex justify-around">
          <button
            className="bg-green-500 w-fit p-3 rounded hover:bg-green-400 active:bg-green-700"
            type="button"
          >
            Button
          </button>
          <button
            className="bg-red-500 w-fit p-3 rounded hover:bg-red-400 active:bg-red-700"
            type="reset"
          >
            Reset
          </button>
          <button
            className="bg-blue-500 w-fit p-3 rounded hover:bg-blue-400 active:bg-blue-700"
            type="submit"
          >
            Submit
          </button>
        </div>
      </CodePreview>

      <CodePreview title="inputs" code={inputs}>
        <div className="flex flex-col gap-1 justify-center items-center">
          <label className="mt-4 border-b border-white" htmlFor="button">
            Button input
          </label>
          <div className="bg-yellow-700 w-fit rounded">
            <input
              id="button"
              type="button"
              value="Add to Cart"
              className="input"
            />
          </div>
          <label className="mt-4 border-b border-white" htmlFor="chbx">
            Check box input
          </label>
          <input id="chbx" type="checkbox" className="input" />
          <label className="mt-4 border-b border-white" htmlFor="color">
            Color input
          </label>
          <input
            id="color"
            type="color"
            value="#ff0000"
            className="input h-10"
          />
          <label className="mt-4 border-b border-white" htmlFor="date">
            Date Input
          </label>
          <input id="date" type="date" className="input" />
          <label
            className="mt-4 border-b border-white"
            htmlFor="datetime-local"
          >
            Datetime-local Input
          </label>
          <input id="datetime-local" type="datetime-local" className="input" />
          <label className="mt-4 border-b border-white" htmlFor="email">
            Email Input
          </label>
          <input id="email" type="email" className="input" />
          <label className="mt-4 border-b border-white" htmlFor="file">
            File Input
          </label>
          <input id="file" type="file" className="input" />
          <label className="mt-4 border-b border-white" htmlFor="hid">
            Hidden Input
          </label>
          <input id="hid" type="hidden" className="input" value={9} />
          <label className="mt-4 border-b border-white" htmlFor="image">
            Image Input
          </label>
          <input id="image" type="image" src="/imgBttn.png" className="input" />
          <label className="mt-4 border-b border-white" htmlFor="month">
            Month Input
          </label>
          <input id="month" type="month" className="input" />
          <label className="mt-4 border-b border-white" htmlFor="number">
            Number Input
          </label>
          <input id="number" type="number" className="input" />
          <label className="mt-4 border-b border-white" htmlFor="password">
            Password Input
          </label>
          <input id="password" type="password" className="input" />
          <label className="mt-4 border-b border-white" htmlFor="radio">
            Radio Input
          </label>
          <input id="radio" type="radio" className="input" />
          <label className="mt-4 border-b border-white" htmlFor="range">
            Range Input
          </label>
          <input id="range" type="range" className="input" />
          <label className="mt-4 border-b border-white" htmlFor="reset">
            Reset Input
          </label>
          <input id="reset" type="reset" className="input" />
          <label className="mt-4 border-b border-white" htmlFor="search">
            Search Input
          </label>
          <input id="search" type="search" className="input" />
          <label className="mt-4 border-b border-white" htmlFor="submit">
            Submit Input
          </label>
          <input id="submit" type="submit" className="input " />
          <label className="mt-4 border-b border-white" htmlFor="tel">
            Tel Input
          </label>
          <input id="tel" type="tel" className="input" />
          <label className="mt-4 border-b border-white" htmlFor="text">
            Text Input
          </label>
          <input id="text" type="text" className="input" />
          <label className="mt-4 border-b border-white" htmlFor="time">
            Time Input
          </label>
          <input id="time" type="time" className="input" />
          <label className="mt-4 border-b border-white" htmlFor="url">
            Url Input
          </label>
          <input id="url" type="url" className="input" />
          <label className="mt-4 border-b border-white" htmlFor="week">
            Week Input
          </label>
          <input id="week" type="week" className="input" />
        </div>
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

const buttons = `  
<div className="flex justify-around">
  <button
    className="bg-green-500 w-fit p-3 rounded hover:bg-green-400 active:bg-green-700"
    type="button"
  >
    Button
  </button>
  <button
    className="bg-red-500 w-fit p-3 rounded hover:bg-red-400 active:bg-red-700"
    type="reset"
  >
    Reset
  </button>
  <button
    className="bg-blue-500 w-fit p-3 rounded hover:bg-blue-400 active:bg-blue-700"
    type="submit"
  >
    Submit
  </button>
</div>
      `;
const inputs = `  
<div className="flex flex-col gap-1 justify-center items-center">
  <label className="mt-4 border-b border-white" htmlFor="button">
    Button input
  </label>
  <div className="bg-yellow-700 w-fit rounded">
    <input
      id="button"
      type="button"
      value="Add to Cart"
      className="input"
    />
  </div>
  <label className="mt-4 border-b border-white" htmlFor="chbx">
    Check box input
  </label>
  <input id="chbx" type="checkbox" className="input" />
  <label className="mt-4 border-b border-white" htmlFor="color">
    Color input
  </label>
  <input
    id="color"
    type="color"
    value="#ff0000"
    className="input h-10"
  />
  <label className="mt-4 border-b border-white" htmlFor="date">
    Date Input
  </label>
  <input id="date" type="date" className="input" />
  <label
    className="mt-4 border-b border-white"
    htmlFor="datetime-local"
  >
    Datetime-local Input
  </label>
  <input id="datetime-local" type="datetime-local" className="input" />
  <label className="mt-4 border-b border-white" htmlFor="email">
    Email Input
  </label>
  <input id="email" type="email" className="input" />
  <label className="mt-4 border-b border-white" htmlFor="file">
    File Input
  </label>
  <input id="file" type="file" className="input" />
  <label className="mt-4 border-b border-white" htmlFor="hid">
    Hidden Input
  </label>
  <input id="hid" type="hidden" className="input" value={9} />
  <label className="mt-4 border-b border-white" htmlFor="image">
    Image Input
  </label>
  <input id="image" type="image" src="/imgBttn.png" className="input" />
  <label className="mt-4 border-b border-white" htmlFor="month">
    Month Input
  </label>
  <input id="month" type="month" className="input" />
  <label className="mt-4 border-b border-white" htmlFor="number">
    Number Input
  </label>
  <input id="number" type="number" className="input" />
  <label className="mt-4 border-b border-white" htmlFor="password">
    Password Input
  </label>
  <input id="password" type="password" className="input" />
  <label className="mt-4 border-b border-white" htmlFor="radio">
    Radio Input
  </label>
  <input id="radio" type="radio" className="input" />
  <label className="mt-4 border-b border-white" htmlFor="range">
    Range Input
  </label>
  <input id="range" type="range" className="input" />
  <label className="mt-4 border-b border-white" htmlFor="reset">
    Reset Input
  </label>
  <input id="reset" type="reset" className="input" />
  <label className="mt-4 border-b border-white" htmlFor="search">
    Search Input
  </label>
  <input id="search" type="search" className="input" />
  <label className="mt-4 border-b border-white" htmlFor="submit">
    Submit Input
  </label>
  <input id="submit" type="submit" className="input " />
  <label className="mt-4 border-b border-white" htmlFor="tel">
    Tel Input
  </label>
  <input id="tel" type="tel" className="input" />
  <label className="mt-4 border-b border-white" htmlFor="text">
    Text Input
  </label>
  <input id="text" type="text" className="input" />
  <label className="mt-4 border-b border-white" htmlFor="time">
    Time Input
  </label>
  <input id="time" type="time" className="input" />
  <label className="mt-4 border-b border-white" htmlFor="url">
    Url Input
  </label>
  <input id="url" type="url" className="input" />
  <label className="mt-4 border-b border-white" htmlFor="week">
    Week Input
  </label>
  <input id="week" type="week" className="input" />
</div>
      
`;
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
