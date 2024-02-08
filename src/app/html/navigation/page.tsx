import CodePreview from "@/components/_cards/CodePreview";

export default function NavigationPage() {
  return (
    <>
      <CodePreview
        title="<a>"
        code={`<a href="#" className="text-blue-500 underline">
basic link
</a>`}
      >
        <a href="#" className="text-blue-500 underline">
          basic link
        </a>
      </CodePreview>
      {/* <CodePreview title="<base>" code={""}>
        <div></div>
      </CodePreview>
      <CodePreview title="<link>" code={""}>
        <div></div>
      </CodePreview> */}
      <CodePreview title="<map>" code={map_ex}>
        <p>Click on the cicle</p>
        <img
          src="/img.jpg"
          alt="placeholder"
          useMap="#exMap"
          width={200}
          height={150}
          className="mx-auto"
        />
        <map name="exMap">
          <area
            shape="circle"
            coords="120,40,10"
            alt="sun"
            href="#"
            className="cursor-pointer  "
          />
        </map>
      </CodePreview>
    </>
  );
}
const map_ex = `
<img
  src="/img.jpg"
  alt="placeholder"
  useMap="#exMap"
  width={200}
  height={150}
  className="mx-auto"
/>
<map name="exMap">
<area
  shape="circle"
  coords="120,40,10"
  alt="sun"
  href="#"
  className="cursor-pointer  "
/>
</map>
`;
