import CodePreview from "@/components/CARDS/CodePreview";

export default function ElementPage() {
  return (
    <>
      <CodePreview title="<a>" code={ele[0]}>
        <a href="https://google.com" target="_blank" className="underline">
          Google
        </a>
      </CodePreview>
      <CodePreview title="<details>" code={ele[0]}>
        <details>
          <summary>Click to view details</summary>
          <p>This is a drop down container.</p>
        </details>
      </CodePreview>
      <CodePreview title="<select>" code={ele[1]}>
        <select className="w-fit shadow-lg bg-slate-100">
          <optgroup label="Fruits">
            <option value="apple">Apple</option>
            <option value="banana">Banana</option>
          </optgroup>
          <optgroup label="Vegetables">
            <option value="carrot">Carrot</option>
            <option value="broccoli">Broccoli</option>
          </optgroup>
        </select>
      </CodePreview>
      <CodePreview title="<datalist>" code={ele[2]}>
        <label htmlFor="fruit">Choose a fruit:</label>
        <input
          list="fruits"
          id="fruit"
          name="fruit"
          className="w-fit bg-slate-100 shadow-lg"
        />
        <datalist id="fruits">
          <option value="Apple" />
          <option value="Banana" />
          <option value="Cherry" />
          <option value="Grape" />
        </datalist>
      </CodePreview>
      <CodePreview title="<form>" code={ele[3]}>
        <form className="w-fit p-4">
          <fieldset>
            <legend>Field Set </legend>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" className="border-2" />
            <br />
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" className="border-2" />
            <br />
          </fieldset>
          <input
            type="submit"
            value="Submit"
            className="bg-blue-500 p-1 m-2 "
          />
        </form>
      </CodePreview>
      <CodePreview title="<ul>" code={ele[4]}>
        <ul className="list-disc w-fit p-5">
          <li>Unordered List Item 1</li>
          <li>Unordered List Item 2</li>
          <li>Unordered List Item 3</li>
        </ul>
      </CodePreview>
      <CodePreview title="<ol>" code={ele[5]}>
        <ol className="list-decimal  w-fit p-5">
          <li>Ordered List Item 1</li>
          <li>Ordered List Item 2</li>
          <li>Ordered List Item 3</li>
        </ol>
      </CodePreview>
      <CodePreview title="<table>" code={ele[6]}>
        <table className="table-auto w-fit border-collapse border border-gray-300">
          <caption>Table</caption>
          <thead>
            <tr>
              <th className="border border-gray-300 px-4 py-2">Header 1</th>
              <th className="border border-gray-300 px-4 py-2">Header 2</th>
              <th className="border border-gray-300 px-4 py-2">Header 3</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 px-4 py-2">
                Row 1, Cell 1
              </td>
              <td className="border border-gray-300 px-4 py-2">
                Row 1, Cell 2
              </td>
              <td className="border border-gray-300 px-4 py-2">
                Row 1, Cell 3
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">
                Row 2, Cell 1
              </td>
              <td className="border border-gray-300 px-4 py-2">
                Row 2, Cell 2
              </td>
              <td className="border border-gray-300 px-4 py-2">
                Row 2, Cell 3
              </td>
            </tr>
          </tbody>
        </table>
      </CodePreview>
      <CodePreview title="<iframe>" code={ele[7]}>
        <iframe src="https://www.example.com" width="fit" height="300"></iframe>
      </CodePreview>
      <CodePreview title="<audio>" code={ele[8]}>
        <audio controls>
          <source src="audio.mp3" type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      </CodePreview>
      <CodePreview title="<video>" code={ele[9]}>
        <video controls width="320" height="240">
          <source src="video.mp4" type="video/mp4" />
          Your browser does not support the video element.
        </video>
      </CodePreview>
      <CodePreview title="<meter>" code={ele[10]}>
        <meter value="75" min="0" max="100">
          75%
        </meter>
      </CodePreview>
      <CodePreview title="<progress>" code={ele[11]}>
        <progress value="50" max="100">
          50%
        </progress>
      </CodePreview>
      <CodePreview title="<range>" code={ele[12]}>
        <input
          type="range"
          id="range"
          min="0"
          max="100"
          className="w-6/12"
        ></input>
        <output htmlFor="range">0</output>
      </CodePreview>
    </>
  );
}
const ele = [
  `
<details>
  <summary>Click to view details</summary>
  <p>This is a drop down container.</p>
</details>
`,
  `
<select className="w-fit shadow-lg bg-slate-100">
  <optgroup label="Fruits">
    <option value="apple">Apple</option>
    <option value="banana">Banana</option>
  </optgroup>
  <optgroup label="Vegetables">
    <option value="carrot">Carrot</option>
    <option value="broccoli">Broccoli</option>
  </optgroup>
</select>
`,
  `
<label htmlFor="fruit">Choose a fruit:</label>
<input
  list="fruits"
  id="fruit"
  name="fruit"
  className="w-fit bg-slate-100 shadow-lg"
/>
<datalist id="fruits">
  <option value="Apple" />
  <option value="Banana" />
  <option value="Cherry" />
  <option value="Grape" />
</datalist>
`,
  `
<form className="w-fit p-4">
  <fieldset>
    <legend>Field Set </legend>
    <label htmlFor="name">Name:</label>
    <input type="text" id="name" name="name" className="border-2" />
    <br />
    <label htmlFor="email">Email:</label>
    <input type="email" id="email" name="email" className="border-2" />
    <br />
  </fieldset>
  <input
    type="submit"
    value="Submit"
    className="bg-blue-500 p-1 m-2 "
  />
</form>
`,
  `
<ul className="list-disc w-fit p-5">
  <li>Unordered List Item 1</li>
  <li>Unordered List Item 2</li>
  <li>Unordered List Item 3</li>
</ul>
`,
  `
<ol className="list-decimal  w-fit p-5">
  <li>Ordered List Item 1</li>
  <li>Ordered List Item 2</li>
  <li>Ordered List Item 3</li>
</ol>
`,
  `
<table className="table-auto border-collapse border border-gray-300">
  <caption>Table</caption>
  <thead>
    <tr>
      <th className="border border-gray-300 px-4 py-2">Header 1</th>
      <th className="border border-gray-300 px-4 py-2">Header 2</th>
      <th className="border border-gray-300 px-4 py-2">Header 3</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="border border-gray-300 px-4 py-2">
        Row 1, Cell 1
      </td>
      <td className="border border-gray-300 px-4 py-2">
        Row 1, Cell 2
      </td>
      <td className="border border-gray-300 px-4 py-2">
        Row 1, Cell 3
      </td>
    </tr>
    <tr>
      <td className="border border-gray-300 px-4 py-2">
        Row 2, Cell 1
      </td>
      <td className="border border-gray-300 px-4 py-2">
        Row 2, Cell 2
      </td>
      <td className="border border-gray-300 px-4 py-2">
        Row 2, Cell 3
      </td>
    </tr>
  </tbody>
</table>
`,
  `
<iframe src="https://www.example.com" width="500" height="300"></iframe>
`,
  `
<audio controls>
  <source src="audio.mp3" type="audio/mpeg" />
  Your browser does not support the audio element.
</audio>
`,
  `
<video controls width="320" height="240">
  <source src="video.mp4" type="video/mp4" />
  Your browser does not support the video element.
</video>
`,
  `
<meter value="75" min="0" max="100">
  75%
</meter>
`,
  `
<progress value="50" max="100">
  50%
</progress>
`,
  `
<input type="range" id="range" min="0" max="100"></input>
<output htmlFor="range">0</output>
`,
];
