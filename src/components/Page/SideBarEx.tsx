"use client";

import SideBar from "../LAYOUT/SideBar";

export default function SideBarEx() {
  return (
    <div className="relative h-96 top-0 p-1">
      <SideBar isClosed={false} setIsClosed={() => false} className="border" />
    </div>
  );
}
