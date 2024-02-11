"use client";
import { FolderIcon, Package, PackageOpen } from "lucide-react";
import { useState } from "react";

export default function OnDrag_EndEx() {
  const [dragging, setDragging] = useState(false);
  const [boxOpen, setBoxOpen] = useState(false);
  const [folderVisible, setFolderVisible] = useState(true);

  function handleDragOver(event: React.DragEvent<HTMLDivElement>) {
    event.preventDefault();
  }
  function handleDrop(event: React.DragEvent<HTMLDivElement>) {
    setFolderVisible(false);
    setBoxOpen(true);
  }

  return (
    <>
      <p> Put the folder away </p>
      <div className="flex items-center justify-between">
        <div
          draggable={true}
          className={`p-2 ${dragging ? "cursor-grabbing " : "cursor-grab"} ${
            folderVisible ? "" : "text-transparent"
          } `}
          onDrag={() => {
            setDragging(true);
          }}
          onDragEnd={() => {
            setDragging(false);
          }}
        >
          <FolderIcon size={24} />
        </div>
        <div
          onDragEnter={() => setBoxOpen(true)}
          onDragLeave={() => setBoxOpen(false)}
          onDragOver={handleDragOver}
          onDrop={handleDrop}
        >
          {boxOpen ? <PackageOpen size={48} /> : <Package size={48} />}
        </div>
      </div>
    </>
  );
}
