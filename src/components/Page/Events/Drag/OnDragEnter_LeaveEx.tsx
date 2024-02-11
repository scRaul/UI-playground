"use client";
import { FolderIcon, Package, PackageOpen } from "lucide-react";
import { useState } from "react";

export default function OnDrag_EndEx() {
  const [dragging, setDragging] = useState(false);
  const [dragEnter, setDragEnter] = useState(false);

  return (
    <>
      <p> Try to put folder away </p>
      <div className="flex items-center justify-between">
        <div
          draggable={true}
          className={`p-2 ${dragging ? "cursor-grabbing " : "cursor-grab"}`}
          onDrag={() => setDragging(true)}
          onDragEnd={() => setDragging(false)}
        >
          <FolderIcon />
        </div>
        <div
          onDragEnter={() => setDragEnter(true)}
          onDragLeave={() => setDragEnter(false)}
        >
          {dragEnter ? <PackageOpen size={48} /> : <Package size={48} />}
        </div>
      </div>
    </>
  );
}
