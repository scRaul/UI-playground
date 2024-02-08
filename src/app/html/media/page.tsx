import CodePreview from "@/components/_cards/CodePreview";
import Canvas from "@/components/Page/Canvas";
import { H6 } from "@/components/_text/Headings";

export default function MediaPage() {
  return (
    <>
      <CodePreview title="<audio>" code={`<audio controls src=""></audio>`}>
        <audio controls src=""></audio>
      </CodePreview>
      <CodePreview title="<Canvas>" code={canvas_ex}>
        <H6>Try Drawing:</H6>
        <Canvas></Canvas>
      </CodePreview>

      <CodePreview title="<figure>" code={figure_ex}>
        <figure>
          <img src="/img.jpg" alt="place holder image" width={150} />
          <figcaption>Fig.1 - A place holder image</figcaption>
        </figure>
      </CodePreview>

      <CodePreview title="<iframe>" code={iframe_ex}>
        <iframe
          height="315"
          src="https://www.youtube.com/embed/0M8AYU_hPas?si=ae3iIPh1sGPFW7NA"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="w-full md:w-516 mx-auto"
        ></iframe>
      </CodePreview>
      <CodePreview title="<img>" code={`<img src="/img.jpg"></img>`}>
        <img src="/img.jpg"></img>
      </CodePreview>

      <CodePreview title="<picture>" code={picture_ex}>
        <H6>Shrink window size / change mobile orientation</H6>
        <picture className="mx-auto">
          <source media="(orientation:portrait)" srcSet="/img2.jpg"></source>
          <img src="/img.jpg"></img>
        </picture>
      </CodePreview>
      <CodePreview title="<svg>" code={svg_ex}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 283 64"
        >
          <path
            fill="black"
            d="M141 16c-11 0-19 7-19 18s9 18 20 18c7 0 13-3 16-7l-7-5c-2 3-6 4-9 4-5 0-9-3-10-7h28v-3c0-11-8-18-19-18zm-9 15c1-4 4-7 9-7s8 3 9 7h-18zm117-15c-11 0-19 7-19 18s9 18 20 18c6 0 12-3 16-7l-8-5c-2 3-5 4-8 4-5 0-9-3-11-7h28l1-3c0-11-8-18-19-18zm-10 15c2-4 5-7 10-7s8 3 9 7h-19zm-39 3c0 6 4 10 10 10 4 0 7-2 9-5l8 5c-3 5-9 8-17 8-11 0-19-7-19-18s8-18 19-18c8 0 14 3 17 8l-8 5c-2-3-5-5-9-5-6 0-10 4-10 10zm83-29v46h-9V5h9zM37 0l37 64H0L37 0zm92 5-27 48L74 5h10l18 30 17-30h10zm59 12v10l-3-1c-6 0-10 4-10 10v15h-9V17h9v9c0-5 6-9 13-9z"
          />
        </svg>
      </CodePreview>
      <CodePreview title="<video>" code={`<video controls></video>`}>
        <video controls></video>
      </CodePreview>
    </>
  );
}
const canvas_ex = `

"use client";

import { useRef, useEffect } from "react";

export default function Canvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (canvas) {
      const context = canvas.getContext("2d");

      if (context) {
        let isDrawing = false;

        canvas.addEventListener("mousedown", () => {
          isDrawing = true;
        });

        canvas.addEventListener("mouseup", () => {
          isDrawing = false;
          context.beginPath();
        });

        canvas.addEventListener("mousemove", (event) => {
          if (!isDrawing) return;

          const rect = canvas.getBoundingClientRect();
          const offsetX = event.clientX - rect.left;
          const offsetY = event.clientY - rect.top;

          // Draw a small square at the hovered position
          context.fillStyle = "blue";
          context.fillRect(offsetX, offsetY, 5, 5);
        });
      }
    }
  }, []);

  return (
    <canvas
      ref={canvasRef}
      width={500}
      height={500}
      className="shadow-2xl bg-purple-400 w-full md:w-[700px]"
    ></canvas>
  );
}


`;
const figure_ex = `
<figure>
  <img src="/img.jpg" alt="place holder image" width={150} />
  <figcaption>Fig.1 - A place holder image</figcaption>
</figure>
`;
const iframe_ex = `
<iframe
  height="315"
  src="https://www.youtube.com/embed/0M8AYU_hPas?si=ae3iIPh1sGPFW7NA"
  title="YouTube video player"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  allowFullScreen
  className="w-full md:w-516 mx-auto"
></iframe>
`;

const picture_ex = `
<picture className="mx-auto">
  <source media="(orientation:portrait)" srcSet="/img2.jpg"></source>
  <img src="/img.jpg"></img>
</picture>
`;

const svg_ex = `
<svg
  xmlns="http://www.w3.org/2000/svg"
  fill="none"
  viewBox="0 0 283 64"
>
  <path
    fill="black"
    d="M141 16c-11 0-19 7-19 18s9 18 20 18c7 0 13-3 16-7l-7-5c-2 3-6 4-9 4-5 0-9-3-10-7h28v-3c0-11-8-18-19-18zm-9 15c1-4 4-7 9-7s8 3 9 7h-18zm117-15c-11 0-19 7-19 18s9 18 20 18c6 0 12-3 16-7l-8-5c-2 3-5 4-8 4-5 0-9-3-11-7h28l1-3c0-11-8-18-19-18zm-10 15c2-4 5-7 10-7s8 3 9 7h-19zm-39 3c0 6 4 10 10 10 4 0 7-2 9-5l8 5c-3 5-9 8-17 8-11 0-19-7-19-18s8-18 19-18c8 0 14 3 17 8l-8 5c-2-3-5-5-9-5-6 0-10 4-10 10zm83-29v46h-9V5h9zM37 0l37 64H0L37 0zm92 5-27 48L74 5h10l18 30 17-30h10zm59 12v10l-3-1c-6 0-10 4-10 10v15h-9V17h9v9c0-5 6-9 13-9z"
  />
</svg>
`;
