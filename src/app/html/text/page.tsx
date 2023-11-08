import CodePreview from "@/components/CARDS/CodePreview";
import Collapsible from "@/components/CONTAINERS/Collapsible";
import { H1, H2, H3, H4, H5, H6 } from "@/components/TEXT/Headings";

export default function textPage() {
  return (
    <>
      <Collapsible className="w-full md:w-[750px]" label="Headings">
        <CodePreview title="Heading.tsx" code={heading_tsx}>
          <H1>Heading</H1>
          <H2>Heading</H2>
          <H3>Heading</H3>
          <H4>Heading</H4>
          <H5>Heading</H5>
          <H6>Heading</H6>
        </CodePreview>
        <CodePreview title="@/page.tsx" code={heading_ex}>
          <article>
            <H3 className="font-semibold text-center underline mb-2">
              Web Dev Notes
            </H3>
            <H5>HTML</H5>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio
              saepe illum, excepturi sequi accusamus ea et iusto fugiat modi
              ipsa aliquid veniam dolore culpa eveniet nulla nobis deserunt
              libero qui!
            </p>
            <H5>CSS</H5>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio
              saepe illum, excepturi sequi accusamus ea et iusto fugiat modi
              ipsa aliquid veniam dolore culpa eveniet nulla nobis deserunt
              libero qui!
            </p>
            <H5>JS</H5>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio
              saepe illum, excepturi sequi accusamus ea et iusto fugiat modi
              ipsa aliquid veniam dolore culpa eveniet nulla nobis deserunt
              libero qui!
            </p>
          </article>
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
        <CodePreview title="" code={p[12]}>
          <p>
            This is some <del>semi</del> random text
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
const heading_tsx = `
interface textProps {
  children: React.ReactNode;
  className?: string;
}

export function H1(props: textProps) {
  return (
    <h1 className={\`text-4xl md:text-7xl \${props.className}\`}>
      {props.children}
    </h1>
  );
}

export function H2(props: textProps) {
  return (
    <h2 className={\`text-3xl md:text-6xl \${props.className}\`}>
      {props.children}
    </h2>
  );
}
export function H3(props: textProps) {
  return (
    <h3 className={\`text-2xl md:text-5xl \${props.className}\`}>
      {props.children}
    </h3>
  );
}
export function H4(props: textProps) {
  return (
    <h4 className={\`text-xl md:text-4xl \${props.className}\`}>
      {props.children}
    </h4>
  );
}
export function H5(props: textProps) {
  return (
    <h5 className={\`text-lg md:text-3xl \${props.className}\`}>
      {props.children}
    </h5>
  );
}
export function H6(props: textProps) {
  return (
    <h6 className={\`text-base md:text-2xl \${props.className}\`}>
      {props.children}
    </h6>
  );
}
`;
const heading_ex = `
//...
import { H1, H2, H3, H4, H5, H6 } from "@/components/TEXT/Headings";
    //...
export function Comp(){
//...
  return (
    //...
        <article>
            <H3 className="font-semibold text-center underline mb-2">
              Web Dev Notes
            </H3>
            <H5>HTML</H5>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio
              saepe illum, excepturi sequi accusamus ea et iusto fugiat modi
              ipsa aliquid veniam dolore culpa eveniet nulla nobis deserunt
              libero qui!
            </p>
            <H5>CSS</H5>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio
              saepe illum, excepturi sequi accusamus ea et iusto fugiat modi
              ipsa aliquid veniam dolore culpa eveniet nulla nobis deserunt
              libero qui!
            </p>
            <H5>JS</H5>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio
              saepe illum, excepturi sequi accusamus ea et iusto fugiat modi
              ipsa aliquid veniam dolore culpa eveniet nulla nobis deserunt
              libero qui!
            </p>
          </article>
    );
}
`;
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
  `  
<p>
  This is some <del>semi</del> random text
</p>
`,
];
