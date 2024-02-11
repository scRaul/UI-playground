"use client";
import { FolderIcon, Package, PackageOpen } from "lucide-react";
import { useRef, useState } from "react";

export default function TouchEx() {
  const [boxOpen, setBoxOpen] = useState(false);
  const [folderVisible, setFolderVisible] = useState(true);
  const [touchPosition, setTouchPosition] = useState({ x: 0, y: 0 });
  const divRef = useRef<HTMLDivElement | null>(null);

  function handleTouchMove(event: React.TouchEvent<HTMLDivElement>) {
    const touch = event.touches[0];
    const rect = event.currentTarget.getBoundingClientRect();
    const x = touch.clientX - rect.x;
    const y = touch.clientY - rect.y;
    setTouchPosition({ x: x, y: y });
  }

  function handleTouchEnd(event: React.TouchEvent<HTMLDivElement>) {
    if (divRef.current) {
      const folder = event.currentTarget.getBoundingClientRect();
      const box = divRef.current.getBoundingClientRect();

      const dispX = Math.abs(folder.x - box.x);
      const dispY = Math.abs(folder.y - box.y);
      if (dispX < box.width && dispY < box.height) {
        setFolderVisible(false);
        setBoxOpen(false);
      } else {
        setTouchPosition({ x: 0, y: 0 });
      }
    }
  }

  return (
    <div className="relative flex items-center justify-between">
      <div
        onTouchStart={() => setBoxOpen(true)} // Ensure touch events are handled similarly
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        className={`p-2  ${folderVisible ? "" : "text-transparent"} `}
        style={{
          position: "absolute",
          top: touchPosition.y,
          left: touchPosition.x,
        }}
      >
        <FolderIcon size={24} />
      </div>
      <div className="flex-grow"></div>
      <div ref={divRef}>
        {boxOpen ? <PackageOpen size={48} /> : <Package size={48} />}
      </div>
    </div>
  );
}
