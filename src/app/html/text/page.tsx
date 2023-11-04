import CodePreview from "@/components/CARDS/CodePreview";
import Collapsible from "@/components/CONTAINERS/Collapsible";

export default function textPage() {
  const h = [
    `<h1 className="text-5xl md:text-8xl">Heading</h1>`,
    `<h2 className="text-4xl md:text-7xl">Heading</h2>`,
    `<h3 className="text-3xl md:text-6xl">Heading</h3>`,
    `<h4 className="text-2xl md:text-5xl">Heading</h4>`,
    `<h5 className="text-xl md:text-4xl">Heading</h5>`,
    `<h6 className="text-lg md:text-3xl">Heading</h6>`,
  ];
  const p = [
    `<p>This is some random text</p>`,
    `<p> This is some <em> semi </em> random text </p>`,
    `<p> This is some <strong>semi </strong> random text </p>`,
    `<p> This is some <mark>semi </mark> random text </p>`,
    `<time dateTime="2023-11-03">November 3, 2023</time>`,
    `<samp>This is some semi random text</samp>`,
    `<code lang="javascript">
    console.log("this is some semi random text")
</code>`,
    `
<pre>{\`this is some     random text
        semi
\`}</pre>
`,
    `<p> 2<sup>3</sup> =8 </p>`,
    `<p> ln<sub>2</sub>4 = 2 </p>`,
    `<p> let <var>VariableName</var> equal to some text </p>`,
    `<address>contact@example.com</address>`,
  ];
  return (
    <>
      <Collapsible className="w-full md:w-[750px]" label="Headings">
        <CodePreview title="h1" code={h[0]}>
          <h1 className="text-5xl md:text-8xl">Heading</h1>
        </CodePreview>
        <CodePreview title="h2" code={h[1]}>
          <h2 className="text-4xl md:text-7xl">Heading</h2>
        </CodePreview>
        <CodePreview title="h3" code={h[2]}>
          <h3 className="text-3xl md:text-6xl">Heading</h3>
        </CodePreview>
        <CodePreview title="h4" code={h[3]}>
          <h4 className="text-2xl md:text-5xl">Heading</h4>
        </CodePreview>
        <CodePreview title="h5" code={h[4]}>
          <h5 className="text-xl md:text-4xl">Heading</h5>
        </CodePreview>
        <CodePreview title="h6" code={h[5]}>
          <h6 className="text-lg md:text-3xl">Heading</h6>
        </CodePreview>
      </Collapsible>
      <Collapsible className="w-full md:w-[750px]" label="Text">
        <CodePreview title="" code={p[0]}>
          <p>This is some random text</p>
        </CodePreview>

        <CodePreview title="" code={p[1]}>
          <p>
            This is some <em> semi </em> random text
          </p>
        </CodePreview>
        <CodePreview title="" code={p[2]}>
          <p>
            This is some <strong>semi </strong> random text
          </p>
        </CodePreview>
        <CodePreview title="" code={p[3]}>
          <p>
            This is some <mark>semi </mark> random text
          </p>
        </CodePreview>
        <CodePreview title="" code={p[4]}>
          <time dateTime="2023-11-03">November 3, 2023</time>
        </CodePreview>
        <CodePreview title="" code={p[5]}>
          <samp>This is some semi random text</samp>
        </CodePreview>
        <CodePreview title="" code={p[6]}>
          <code lang="javascript">
            console.log("this is some semi random text")
          </code>
        </CodePreview>
        <CodePreview title="" code={p[7]}>
          <pre>{`this is some     random text
             semi
        `}</pre>
        </CodePreview>
        <CodePreview title="" code={p[8]}>
          <p>
            2<sup>3</sup> =8
          </p>
        </CodePreview>
        <CodePreview title="" code={p[9]}>
          <p>
            ln<sub>2</sub>4 = 2
          </p>
        </CodePreview>
        <CodePreview title="" code={p[10]}>
          <p>
            let <var>VariableName</var> equal to some text
          </p>
        </CodePreview>
        <CodePreview title="" code={p[11]}>
          <address>contact@example.com</address>
        </CodePreview>
      </Collapsible>
    </>
  );
}
