import CodePreview from "@/components/CARDS/CodePreview";

export default function MiscPage() {
  return (
    <>
      <CodePreview title="<br>" code={br_ex}>
        Input:
        <br />
        <input type="text" className="w-fit border-2" />
      </CodePreview>
      <CodePreview title="<hr>" code={`Title <hr/>`}>
        Title <hr />
      </CodePreview>
      <CodePreview title="<meter>" code={meter_ex}>
        <meter value="75" min="0" max="100">
          75%
        </meter>
      </CodePreview>
      <CodePreview title="<progress>" code={prog_ex}>
        <progress value="50" max="100">
          50%
        </progress>
      </CodePreview>
    </>
  );
}
const br_ex = `
Input:
<br />
<input type="text" className="w-fit border-2" />
`;
const meter_ex = `
<meter value="75" min="0" max="100">
    75%
</meter>
`;
const prog_ex = `
<progress value="50" max="100">
    50%
</progress>
`;
