"use client";
import { useState } from "react";
export function HideComp() {
  const [hide, setHide] = useState(true);
  return (
    <>
      <button
        className="bg-green-500 p-2 m-2 w-fit active:bg-green-300"
        onClick={() => setHide(!hide)}
      >
        {hide ? "Show" : "Hide"}
      </button>
      <div className="w-40  h-40 bg-red-600" hidden={hide}></div>
    </>
  );
}

export function DataComp() {
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  const items = [
    { id: 1, name: "Item 1", description: "some random information" },
    { id: 2, name: "Item 2", description: "not so random information" },
    { id: 3, name: "Item 3", description: "this is definitely not random " },
  ];

  const handleItemClick = (itemId: number) => {
    // Set the selected item ID in state
    setSelectedItem(itemId.toString());
  };
  return (
    <>
      <div className="flex justify-between">
        <div>
          <h1 className="font-semibold">Items: </h1>
          <ul className="w-fit border-2 cursor-pointer p-1 shadow-xl">
            {items.map((item) => (
              <li
                className="hover:bg-blue-500 w-full p-1"
                key={item.id}
                data-item-id={item.id}
                onClick={() => handleItemClick(item.id)}
              >
                {item.name}
              </li>
            ))}
          </ul>
        </div>
        {selectedItem && (
          <div className="flex-1 p-5">
            <h2>Selected Item Details</h2>
            <p>
              Name:
              {items.find((item) => item.id.toString() === selectedItem)?.name}
            </p>
            <p>
              Description:
              {
                items.find((item) => item.id.toString() === selectedItem)
                  ?.description
              }
            </p>
          </div>
        )}
      </div>
    </>
  );
}
