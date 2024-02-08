import CodePreview from "@/components/cards/CodePreview";
import { H5 } from "@/components/text/Headings";
import { Shapes } from "lucide-react";

export default function StructPage() {
  return (
    <>
      <CodePreview title="<article>" code={article_ex}>
        <article>
          <H5 className="mb-3">Why and When to use the Article Component</H5>
          <p>
            <b>Indepenent Content: </b>
            Should be used for content that is complete and can stand alone. For
            example, a news article, blog post, forum post, or product review
            can be enclosed in an
          </p>
          <p>
            <b>SEO: </b>. It helps search engines recognize the main content of
            a page and improve its search engine optimization (SEO).
          </p>
          <p>
            <b>Content Syndication: </b>
            This structure enables other websites, news aggregators, or content
            syndication services to easily fetch and display your blog posts.
            They can do this by parsing your HTML and extracting the content
            within <code>&lt;article&gt;</code> elements.
          </p>
        </article>
      </CodePreview>

      <CodePreview title="<aside>" code={aside_ex}>
        <article>
          Can be used to clarify that content is not part of the main narrative
          <wbr /> but serves a supplementary or tangential role.
          <div>
            Some Use Cases:
            <ul className="list-disc p-4">
              <li>SideBars</li>
              <li>Meta data about an article</li>
              <li>Side Notes</li>
              <li>ads</li>
            </ul>
          </div>
        </article>
        <aside>
          <p>Published on 2023-11-08</p>
        </aside>
      </CodePreview>

      <CodePreview title="<body>" code={body_ex}>
        <p>
          In the context of nextJS, body tag located in the root layout.tsx
          file, there should <em>only</em> exists <b>1</b> per page.
        </p>
      </CodePreview>

      <CodePreview title="<details>" code={details_ex}>
        <details>
          <summary>Click to view details</summary>
          <p>This is a drop down container.</p>
        </details>
      </CodePreview>

      <CodePreview title="<dialog> & <summary>" code={dialog_ex}>
        <p>
          <b>Alerts: </b> Displaying critical information, warnings, or errors.
          <br />
          <b>Confirmations:</b> Asking the user for confirmation before
          proceeding with a specific action.
          <br />
          <b>Prompts: </b> Collecting user input or feedback.
        </p>
        <dialog open className="border-slate-400 border-4 p-4">
          <p>Hello, how may I help you?</p>
          <input type="text" className="border-2" />
        </dialog>
      </CodePreview>

      <CodePreview title="<div>" code={div_ex}>
        <div>
          <p>
            An element that is widely used for grouping and structuring content
            on a web page. This is particularly useful when you need to apply
            CSS styles or JavaScript functionality to specific sections.
          </p>
        </div>
        <div className="flex h-5">
          <div className="w-full bg-green-500 "></div>
          <div className="w-full bg-blue-500 "></div>
        </div>
      </CodePreview>

      <CodePreview title="<footer>" code={footer_ex}>
        <div className="border border-slate-100">
          <p className="p-5">
            Footer elements are meant to exists at the end of a section of
            content. For example we a site wide footer as well as multiple
            footers within a page such as within each article tag.
          </p>
          <footer className="border-t border-white">copyright 2023</footer>
        </div>
      </CodePreview>

      <CodePreview title="<head>" code={head_ex}>
        <p>
          Like the body tag, there should only exist one of these per page,
          however in the context of next js, we dont directly add this tag. In
          the code is an example of what the head tag could look like in an html
          file.
        </p>
      </CodePreview>

      <CodePreview title="<header>" code={header_ex}>
        <div className="border border-slate-200">
          <header className="border-b  border-white flex justify-between px-4">
            <Shapes />
            <a href="#" className="text-blue-500">
              log in
            </a>
          </header>
          <p className="p-5">
            Similar to footer tag but, header elements are meant to exists at
            the top of a section of content.
          </p>
        </div>
      </CodePreview>

      <CodePreview title="<meta>" code={meta_ex}>
        <p>
          Meta tags encapuslate meta data about a web page.And exists in the
          head tag section. With next js we append meta data at the top of each
          page.tsx and layouts using a MetaData object.
        </p>
      </CodePreview>

      <CodePreview
        title="<noscript>"
        code={`<noscript>You Can Only See Me if you disable JavaScript </noscrip> `}
      >
        <noscript>You Can Only See Me if you disable JavaScript </noscript>
      </CodePreview>

      <CodePreview title="<section>" code={section_ex}>
        <nav>
          <a href="#why" className="underline text-blue-600">
            Use Cases
          </a>
        </nav>
        <section id="why" className="h-30 bg-blue-500 mb-5 p-5">
          Like the div tag, except the section tag is meant to help break a page
          down into thematic section. Unlike div, the section tag helps with
          SEO.
        </section>
        <section id="uses" className="p-5  bg-green-500">
          <b>Use Cases:</b>
          <ul>
            <li>Semantic Structure</li>
            <li>Navigation</li>
            <li>Content Reusablity</li>
          </ul>
        </section>
      </CodePreview>

      <CodePreview title="<span>" code={span_ex}>
        <p>
          The <span className="bg-green-500 font-medium text-xl p-1">span</span>{" "}
          tag is a generic inline block, often used to stylize some text within
          a block.
        </p>
      </CodePreview>

      <CodePreview title="<title>" code={title_ex}>
        <p>
          This title tag serves to give our page a title, and is typically
          located in head section of an html page. In nextJS we add this
          information within the MetaData object.
        </p>
      </CodePreview>
    </>
  );
}

const article_ex = `
<article>
  <H5 className="mb-3">Why and When To use the Article Component</H5>
  <p>
    <b>Indepenent Content: </b>
    Should be used for content that is complete and can stand alone. For
    example, a news article, blog post, forum post, or product review
    can be enclosed in an
  </p>
  <p>
    <b>SEO: </b>. It helps search engines recognize the main content of
    a page and improve its search engine optimization (SEO).
  </p>
  <p>
    <b>Content Syndication: </b>
    This structure enables other websites, news aggregators, or content
    syndication services to easily fetch and display your blog posts.
    They can do this by parsing your HTML and extracting the content
    within <code>&lt;article&gt;</code> elements.
  </p>
</article>

`;

const aside_ex = `
<article>
  Can be used to clarify that content is not part of the main narrative
  <wbr /> but serves a supplementary or tangential role.
  <div>
    Some Use Cases:
    <ul className="list-disc p-4">
      <li>SideBars</li>
      <li>Meta data about an article</li>
      <li>Side Notes</li>
      <li>ads</li>
    </ul>
  </div>
</article>
<aside>
  <p>Published on 2023-11-08</p>
</aside>
`;
const details_ex = `
<details>
    <summary>Click to view details</summary>
    <p>This is a drop down container.</p>
</details>
`;
const dialog_ex = `
<p>
  <b>Alerts: </b> Displaying critical information, warnings, or errors.
  <br />
  <b>Confirmations:</b> Asking the user for confirmation before
  proceeding with a specific action.
  <br />
  <b>Prompts: </b> Collecting user input or feedback.
</p>
<dialog open className="border-slate-400 border-4 p-4">
  <p>Hello, how may I help you?</p>
  <input type="text" className="border-2" />
</dialog>
`;
const div_ex = `
<div>
  <p>
    An element that is widely used for grouping and structuring content
    on a web page. This is particularly useful when you need to apply
    CSS styles or JavaScript functionality to specific sections.
  </p>
</div>
<div className="flex h-5">
  <div className="w-full bg-red-100 "></div>
  <div className="w-full bg-blue-100 "></div>
</div>
`;

const body_ex = `
//from within ./layout.tsx
<body className={inter.className}>
  <CustomLayout>{children}</CustomLayout>
</body>
`;

const footer_ex = `
<div className=" bg-slate-300">
  <p className="p-5">
    Footer elements are meant to exists at the end of a section of
    content. For example we a site wide footer as well as multiple
    footers within a page such as within each article tag.
  </p>
  <footer className="bg-black text-white">copyright 2023</footer>
</div>
`;

const head_ex = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Sample Page</title>
  <link rel="stylesheet" href="styles.css">
  <script src="script.js" defer></script>
  <meta name="description" content="This is a sample web page">
  <meta name="keywords" content="HTML, CSS, JavaScript, web development">
</head>
<body>
  <!-- Body content goes here -->
</body>
</html>
`;
const header_ex = `
<div className=" bg-slate-300">
  <header className="bg-slate-100 flex justify-between px-4">
    <Shapes />
    <a href="#" className="text-blue-500">
      log in
    </a>
  </header>
  <p className="p-5">
    Similar to footer tag but, header elements are meant to exists at
    the top of a section of content.
  </p>
</div>
`;

const meta_ex = `
import type { Metadata } from "next";
//...

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function Page( ///...
`;
const section_ex = `
<nav>
  <a href="#why" className="underline text-blue-600">
    Use Cases
  </a>
</nav>
<section id="why" className="h-30 bg-blue-200 mb-5 p-5">
  Like the div tag, except the section tag is meant to help break a page
  down into thematic section. Unlike div, the section tag helps with
  SEO.
</section>
<section id="uses" className="p-5  bg-red-200">
  <b>Use Cases:</b>
  <ul>
    <li>Semantic Structure</li>
    <li>Navigation</li>
    <li>Content Reusablity</li>
  </ul>
</section>
`;

const span_ex = `
<p>
  The <span className="bg-blue-100 font-medium">span</span> tag is a
  generic inline block, often used to stylize some text within a block.
</p>
`;

const title_ex = `
import type { Metadata } from "next";
//...

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};
`;
