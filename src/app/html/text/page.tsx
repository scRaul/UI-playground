import CodePreview from "@/components/_cards/CodePreview";
import Collapsible from "@/components/_containers/Collapsible";
import { H1, H2, H3, H4, H5, H6 } from "@/components/_text/Headings";

export default function textPage() {
  return (
    <>
      <CodePreview title="Heading.tsx" code={heading_tsx}>
        <H1>Heading</H1>
        <H2>Heading</H2>
        <H3>Heading</H3>
        <H4>Heading</H4>
        <H5>Heading</H5>
        <H6>Heading</H6>
      </CodePreview>

      <CodePreview
        title="<abbr>"
        code={` <abbr title="World Wide Web">W.W.W</abbr>`}
      >
        <abbr title="World Wide Web">W.W.W</abbr>
      </CodePreview>
      <CodePreview
        title="<address>"
        code={`<address>example@gmail.com</address>`}
      >
        <address>example@gmail.com</address>
      </CodePreview>
      <CodePreview title="<b>" code={`<b>bold</b>`}>
        <b>bold</b>
      </CodePreview>
      <CodePreview
        title="<bdi>"
        code={`<p>This is an example of <bdi>مرحبا بك في موقعنا</bdi>, which is Arabic text.</p>`}
      >
        <p>
          This is an example of <bdi>مرحبا بك في موقعنا</bdi>, which is Arabic
          text.
        </p>
      </CodePreview>
      <CodePreview
        title="<bdo>"
        code={`<bdo dir="rtl">Hello, welcome to our website</bdo>`}
      >
        <bdo dir="rtl">Hello, welcome to our website</bdo>
      </CodePreview>
      <CodePreview title="<cite>" code={`<cite>The Bee Movie</cite> `}>
        <cite>The Bee Movie</cite>
      </CodePreview>
      <CodePreview
        title="<code>"
        code={`<code>let j = 5; let k = 6; console.log(j+k);</code> `}
      >
        <code>let j = 5; let k = 6; console.log(j+k);</code>
      </CodePreview>
      <CodePreview title="<del>" code={`<del>run 3 miles</del> `}>
        <del>run 3 miles</del>
      </CodePreview>
      <CodePreview title="<dfn>" code={`<dfn>HTML</dfn>`}>
        <dfn>WWW</dfn>
      </CodePreview>
      <CodePreview title="<dialog>" code={dialog_ex}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia
          nesciunt, excepturi consequatur fuga perspiciatis quibusdam provident
          nihil molestiae, commodi eos voluptatibus. Consequatur iusto
          repellendus ipsum quasi numquam! Qui, assumenda cupiditate?
        </p>
        <dialog open className="border-slate-400 border-4 p-4">
          <p>Hello, how may I help you?</p>
          <input type="text" className="border-2" />
        </dialog>
      </CodePreview>
      <CodePreview title="<em>" code={`<em>WWW</em> `}>
        <em>WWW</em>
      </CodePreview>
      <CodePreview title="<i>" code={`<i>WWW</i>`}>
        <i>WWW</i>
      </CodePreview>
      <CodePreview title="<ins>" code={`<ins>Hello World</ins>`}>
        <ins>Hello World</ins>
      </CodePreview>
      <CodePreview title="<kbd>" code={`<kbd>QWERTY</kbd>`}>
        <kbd>QWERTY</kbd>
      </CodePreview>
      <CodePreview title="<p>" code={`<p>Hello World</p>`}>
        <p>Hello World</p>
      </CodePreview>
      <CodePreview
        title="<pre>"
        code={`<pre>{\`Hello 
              Wolrd\`}</pre> `}
      >
        <pre>{`Hello 
              Wolrd!  `}</pre>
      </CodePreview>
      <CodePreview
        title="<q>"
        code={`<q>Everyone has a plan, until they get punched in the face.</q>`}
      >
        <q>Everyone has a plan, until they get punched in the face.</q>
      </CodePreview>
      <CodePreview title="<s>" code={`<s>run 3 miles</s>`}>
        <s>run 3 miles</s>
      </CodePreview>
      <CodePreview title="<samp>" code={`<samp> let x = 5;</samp>`}>
        <samp> let x = 5;</samp>
      </CodePreview>
      <CodePreview title="<small>" code={`<small>Hello World </small>`}>
        <small>Hello World </small>
      </CodePreview>
      <CodePreview title="<strong>" code={`<strong>WWW</strong>`}>
        <strong>WWW</strong>
      </CodePreview>
      <CodePreview title="<sub>" code={`<samp> 2<sub>n</sub> + n </samp>`}>
        <samp>
          {" "}
          2<sub>n</sub> + n{" "}
        </samp>
      </CodePreview>
      <CodePreview title="<sup>" code={`<samp> 2<sup>n</sup></samp>`}>
        <samp>
          {" "}
          2<sup>n</sup>
        </samp>
      </CodePreview>
      <CodePreview title="<time>" code={`<time>10:00 pm </time>`}>
        <time>10:00 pm </time>
      </CodePreview>
      <CodePreview title="<u>" code={`<u>WWW</u>`}>
        <u>WWW</u>
      </CodePreview>
      <CodePreview title="<var>" code={`<code> let <var>x</var> = 5 </code>`}>
        <code>
          {" "}
          let <var>x</var> = 5{" "}
        </code>
      </CodePreview>
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
const dialog_ex = `
<p>
  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia
  nesciunt, excepturi consequatur fuga perspiciatis quibusdam
  provident nihil molestiae, commodi eos voluptatibus. Consequatur
  iusto repellendus ipsum quasi numquam! Qui, assumenda cupiditate?
</p>
<dialog open className="border-slate-400 border-4 p-4">
  <p>Hello, how may I help you?</p>
  <input type="text" className="border-2" />
</dialog>
`;
