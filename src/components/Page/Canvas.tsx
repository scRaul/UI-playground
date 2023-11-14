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
