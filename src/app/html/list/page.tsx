import CodePreview from "@/components/CARDS/CodePreview";

export default function TablePage() {
  const tableHeaders = ["Header 1", "Header 2", "Header-3"];
  const tableRows = [
    ["r1,c1", "r1,c2", "r1,c3"],
    ["r2,c1", "r2,c2", "r2,c3"],
    ["r3,c1", "r3,c2", "r3,c3"],
  ];
  return (
    <>
      <CodePreview title="data list" code={datalist_ex}>
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

      <CodePreview title="description list" code={dl_ex}>
        <dl>
          <dt>HTML:</dt>
          <dd>
            Hypertext Markup Language is used for creating web pages and web
            applications.
          </dd>
          <dt>CSS:</dt>
          <dd>
            Cascading Style Sheets is used for styling and formatting web pages.
          </dd>
          <dt>JavaScript:</dt>
          <dd>
            JavaScript is a programming language used for adding interactivity
            to web pages.
          </dd>
        </dl>
      </CodePreview>

      <CodePreview title="unordered list" code={ul_ex}>
        <ul className="list-disc w-fit p-5">
          <li>Unordered List Item 1</li>
          <li>Unordered List Item 2</li>
          <li>Unordered List Item 3</li>
        </ul>
      </CodePreview>

      <CodePreview title="orderd list" code={ol_ex}>
        <ol className="list-decimal  w-fit p-5">
          <li>Ordered List Item 1</li>
          <li>Ordered List Item 2</li>
          <li>Ordered List Item 3</li>
        </ol>
      </CodePreview>

      <CodePreview title="menu list" code={menu_ex}>
        <menu className="list-disc w-fit p-5">
          <li>menu List item 1</li>
          <li>menu List item 2</li>
          <li>menu List item 3</li>
        </menu>
      </CodePreview>

      <CodePreview title="nav list" code={nav_ex}>
        <nav className="text-blue-600">
          <a href="https://google.com" target="_blank">
            Google
          </a>
          |
          <a href="https://yahoo.com" target="_blank">
            Yahoo
          </a>
          |
          <a href="https://bing.com" target="_blank">
            Bing
          </a>
        </nav>
      </CodePreview>

      <CodePreview title="option list" code={selection_ex}>
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

      <CodePreview title="table" code={caption_ex}>
        <table className="table-auto w-fit border-collapse">
          <caption>Table Title</caption>
          <thead>
            <tr>
              {tableHeaders.map((header) => (
                <th className="border border-black px-4 py-2">{header}</th>
              ))}
            </tr>
          </thead>
          <colgroup>
            <col span={2} className="bg-red-300" />
            <col className="bg-yellow-300" />
          </colgroup>
          <tbody>
            {tableRows.map((row, index) => (
              <tr key={index}>
                {row.map((col) => (
                  <td className="border border-black px-4 py-2">{col}</td>
                ))}
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td></td>
              <td className="border border-black px-4 py-2">Total:</td>
              <td className="border border-black px-4 py-2">$1M</td>
            </tr>
          </tfoot>
        </table>
      </CodePreview>
    </>
  );
}

const caption_ex = `
export default function TablePage() {
  const tableHeaders = ["Header 1", "Header 2", "Header-3"];
  const tableRows = [
    ["r1,c1", "r1,c2", "r1,c3"],
    ["r2,c1", "r2,c2", "r2,c3"],
    ["r3,c1", "r3,c2", "r3,c3"],
  ];
  return(
    <>
    //...
     <table className="table-auto w-fit border-collapse">
          <caption>Table Title</caption>
          <thead>
            <tr>
              {tableHeaders.map((header) => (
                <th className="border border-black px-4 py-2">{header}</th>
              ))}
            </tr>
          </thead>
          <colgroup>
            <col span={2} className="bg-red-300" />
            <col className="bg-yellow-300" />
          </colgroup>
          <tbody>
            {tableRows.map((row, index) => (
              <tr key={index}>
                {row.map((col) => (
                  <td className="border border-black px-4 py-2">{col}</td>
                ))}
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td></td>
              <td className="border border-black px-4 py-2">Total:</td>
              <td className="border border-black px-4 py-2">$1M</td>
            </tr>
          </tfoot>
        </table>
    </>
  );
}
`;
const datalist_ex = `
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
`;
const dl_ex = `
<dl>
  <dt>HTML:</dt>
  <dd>
    Hypertext Markup Language is used for creating web pages and web
    applications.
  </dd>
  <dt>CSS:</dt>
  <dd>
    Cascading Style Sheets is used for styling and formatting web pages.
  </dd>
  <dt>JavaScript:</dt>
  <dd>
    JavaScript is a programming language used for adding interactivity
    to web pages.
  </dd>
</dl>
`;
const ul_ex = `
<ul className="list-disc w-fit p-5">
  <li>Unordered List Item 1</li>
  <li>Unordered List Item 2</li>
  <li>Unordered List Item 3</li>
</ul>
`;
const ol_ex = `
<ol className="list-decimal  w-fit p-5">
  <li>Ordered List Item 1</li>
  <li>Ordered List Item 2</li>
  <li>Ordered List Item 3</li>
</ol>
`;
const menu_ex = `
<menu className="list-disc w-fit p-5">
  <li>menu List item 1</li>
  <li>menu List item 2</li>
  <li>menu List item 3</li>
</menu>
`;
const nav_ex = `
<nav className="text-blue-600">
  <a href="https://google.com" target="_blank">
    Google
  </a>
  |
  <a href="https://yahoo.com" target="_blank">
    Yahoo
  </a>
  |
  <a href="https://bing.com" target="_blank">
    Bing
  </a>
</nav>
`;
const selection_ex = `
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
`;
