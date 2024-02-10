"use client";
import { Apple, Search, ShoppingCart } from "lucide-react";
import Header from "../containers/Header";
import { SlideHeader } from "../containers/Slide";
import { useState } from "react";

interface Category {
  id: string;
  explore: string[];
  shop: string[];
  more: string[];
}
export default function StoreLayout() {
  const [closeSlide, setCloseSlide] = useState<boolean>(false);
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(
    null
  );

  const categoryItems: Category[] = [
    {
      id: "Computers",
      explore: ["All Computers", "LapAir", "LapPro", "DeskStudio", "DeskPro"],
      shop: ["Shop Computer", "Computer Accessories", "Financing"],
      more: ["Computer Support", "ComputerOS"],
    },
    {
      id: "Tablets",
      explore: ["All Tablets", "TabAir", "TabPro", "TabMini"],
      shop: ["Shop Tablets", "Tablet Accessories", "Financing"],
      more: ["Tablet Support", "TabletOS"],
    },
    {
      id: "Phones",
      explore: [
        "All Phones",
        "MobileAir",
        "MobilePro",
        "MobileMini",
        "MobileOutdoors",
      ],
      shop: ["Shop Phones", "Phone Accessories", "Phone Plans", "Financing"],
      more: ["Phone Support", "PhoneOS"],
    },
    {
      id: "Accessories",
      explore: [],
      shop: ["Shop All Accessories", "Computers", "Tablets", "Phones"],
      more: [],
    },
  ];

  function handleCloseSlide() {
    setCloseSlide(true);
    setSelectedCategory(null);
  }
  function handleOpenSlide(category: string) {
    setCloseSlide(false);
    const item = categoryItems.find((item) => item.id === category);
    setSelectedCategory(item ? item : null);
  }
  return (
    <>
      <Header
        className={`justify-center items-center gap-2 ${
          closeSlide ? "bg-slate-900" : "bg-black"
        }`}
      >
        <div
          id="logo"
          className="cursor-pointer"
          onMouseOver={handleCloseSlide}
        >
          <Apple strokeWidth={1} />
        </div>
        <div
          id="categories"
          className="flex gap-2 p-1 font-sans font-extralight"
        >
          {categoryItems.map((item) => (
            <div
              className="cursor-pointer"
              key={item.id}
              onMouseOver={() => handleOpenSlide(item.id)}
            >
              {item.id}
            </div>
          ))}
        </div>
        <div
          id="search"
          className="cursor-pointer"
          onMouseOver={handleCloseSlide}
        >
          <Search strokeWidth={1} />
        </div>
        <div id="bag" className="cursor-pointer" onMouseOver={handleCloseSlide}>
          <ShoppingCart strokeWidth={1} />
        </div>
      </Header>
      <SlideHeader
        direction="up"
        isClosed={closeSlide}
        className="bg-black p-3 pl-20"
      >
        {selectedCategory && selectedCategory.explore.length > 0 && (
          <div className="mx-5 flex flex-col items-start justify-start">
            <div className="font-sans font-extralight text-gray-400 text-sm">
              {`Explore ${selectedCategory.id}`}
            </div>
            <div>
              {selectedCategory.explore.map((item, number) => (
                <div key={number} className="font-bold text-lg cursor-pointer">
                  {item}
                </div>
              ))}
            </div>
          </div>
        )}
        {selectedCategory && selectedCategory.shop.length > 0 && (
          <div className="mx-5 flex flex-col items-start justify-start">
            <span className="font-sans font-extralight text-gray-400 text-sm">{`Shop ${selectedCategory?.id}`}</span>
            <div>
              {selectedCategory.shop.map((item, number) => (
                <div key={number} className=" cursor-pointer">
                  {item}
                </div>
              ))}
            </div>
          </div>
        )}
        {selectedCategory && selectedCategory.more.length > 0 && (
          <div className="mx-5 flex flex-col items-start justify-start">
            <div className="font-sans font-extralight text-gray-400 text-sm">
              {`More from ${selectedCategory?.id}`}
            </div>
            <div>
              {selectedCategory.more.map((item, number) => (
                <div key={number} className=" cursor-pointer">
                  {item}
                </div>
              ))}
            </div>
          </div>
        )}
      </SlideHeader>
      {!closeSlide && (
        <div
          className="w-full h-full blur-md bg-[#ffffff33]"
          onMouseEnter={handleCloseSlide}
        ></div>
      )}
    </>
  );
}
