"use client";
import { useEffect, useRef, useState } from "react";

export default function DragableEx() {
  const [mouseDiv, setMouseDiv] = useState<HTMLDivElement | null>(null);
  const [copiedDiv, setCopiedDiv] = useState<HTMLDivElement | null>(null);
  const [offset, setOffset] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });
  const containerRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    function preventScroll(event: TouchEvent) {
      event.preventDefault();
    }

    if (mouseDiv) {
      window.addEventListener("touchmove", preventScroll, { passive: false });
    } else {
      window.removeEventListener("touchmove", preventScroll);
    }

    return () => {
      window.removeEventListener("touchmove", preventScroll);
    };
  }, [mouseDiv]);

  function handleMouseDown(
    event: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>
  ) {
    const clientX =
      "touches" in event ? event.touches[0].clientX : event.clientX;
    const clientY =
      "touches" in event ? event.touches[0].clientY : event.clientY;
    const div = event.currentTarget.cloneNode(true) as HTMLDivElement;
    const rect = event.currentTarget.getBoundingClientRect();
    const offsetX = clientX - rect.left;
    const offsetY = clientY - rect.top;
    div.style.position = "absolute";
    div.style.backgroundColor = "#ffffff22";
    div.style.left = clientX - offsetX + "px";
    div.style.top = clientY - offsetY + "px";
    div.style.width = rect.width + "px";
    document.body.appendChild(div);
    setCopiedDiv(div);
    setOffset({ x: offsetX, y: offsetY });
    setMouseDiv(div);
  }

  useEffect(() => {
    function handleMouseMove(event: MouseEvent | TouchEvent) {
      if (!mouseDiv || !offset) return;
      const clientX =
        "touches" in event ? event.touches[0].clientX : event.clientX;
      const clientY =
        "touches" in event ? event.touches[0].clientY : event.clientY;
      const containerRect = containerRef.current?.getBoundingClientRect();
      if (!containerRect) return;
      const newX = clientX - offset.x;
      const newY = clientY - offset.y;
      mouseDiv.style.left =
        Math.max(
          containerRect.left,
          Math.min(newX, containerRect.right - mouseDiv.offsetWidth)
        ) + "px";
      mouseDiv.style.top =
        Math.max(
          containerRect.top,
          Math.min(newY, containerRect.bottom - mouseDiv.offsetHeight)
        ) + "px";
    }

    function handleMouseUp() {
      if (!copiedDiv) return;
      console.log("mouseUp");
      document.body.removeChild(copiedDiv);
      setMouseDiv(null);
      setCopiedDiv(null);
    }

    if (mouseDiv) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
      document.addEventListener("touchmove", handleMouseMove);
      document.addEventListener("touchend", handleMouseUp);
      return () => {
        document.removeEventListener("mousemove", handleMouseMove);
        document.removeEventListener("mouseup", handleMouseUp);
        document.removeEventListener("touchmove", handleMouseMove);
        document.removeEventListener("touchend", handleMouseUp);
      };
    }
  }, [mouseDiv, offset, copiedDiv]);

  return (
    <div className="w-full h-80 relative" ref={containerRef}>
      <div
        className="border p-2"
        onMouseDown={handleMouseDown}
        onTouchStart={handleMouseDown}
        onMouseUp={() => setMouseDiv(null)}
        onTouchEnd={() => setMouseDiv(null)}
        key={1}
      >
        1
      </div>
    </div>
  );
}
