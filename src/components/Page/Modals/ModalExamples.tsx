"use client";

import Modal from "@/components/modals/Modal";
import { MousePointerClick } from "lucide-react";
import { useRef, useState } from "react";

export default function ModalEx() {
  const divRef = useRef<HTMLDivElement | null>(null);
  const [modalOpen, setModalOpen] = useState<boolean[]>(
    Array.from({ length: 7 }, () => false)
  );
  function toggleModal(index: number) {
    const copyOpen = [...modalOpen];
    copyOpen[index] = !modalOpen[index];
    setModalOpen(copyOpen);
  }
  return (
    <div
      ref={divRef}
      className="h-96 w-full relative rounded-md grid grid-cols-8 grid-rows-6 gap-2 [&>div]:flex [&>div]:items-center justify-center"
    >
      <div className="bg-blue-500 col-span-8 row-span-1 flex justify-between">
        <Modal
          modalOpen={modalOpen[0]}
          yOffset={25}
          trigger={<MousePointerClick onClick={() => toggleModal(0)} />}
        >
          <div className="w-10 h-20 bg-blue-600">Hello</div>
        </Modal>

        <Modal
          modalOpen={modalOpen[1]}
          xOffset={-16}
          yOffset={25}
          trigger={<MousePointerClick onClick={() => toggleModal(1)} />}
        >
          <div className="w-10 h-20 bg-blue-600">Hello</div>
        </Modal>
      </div>
      <div className="bg-green-500 col-span-1 row-span-5">
        <div className="flex-grow"></div>

        <Modal
          modalOpen={modalOpen[2]}
          xOffset={-20}
          yOffset={25}
          trigger={<MousePointerClick onClick={() => toggleModal(2)} />}
        >
          <div className="w-10 h-20 bg-green-600">Hello</div>
        </Modal>
      </div>
      <div className="bg-red-500 col-span-4 row-span-5">
        <div className="flex-grow"></div>
        <Modal
          modalOpen={modalOpen[3]}
          xOffset={-20}
          yOffset={25}
          trigger={<MousePointerClick onClick={() => toggleModal(3)} />}
        >
          <div className="w-10 h-20 bg-red-600">Hello</div>
        </Modal>
        <div className="flex-grow"></div>
      </div>
      <div className="bg-gray-500 col-span-3 row-span-2 flex-col">
        <Modal
          modalOpen={modalOpen[4]}
          xOffset={-20}
          yOffset={25}
          trigger={<MousePointerClick onClick={() => toggleModal(4)} />}
        >
          <div className="w-10 h-20 bg-gray-600">Hello</div>
        </Modal>

        <div className="flex-grow"></div>
      </div>
      <div className="bg-amber-500 col-span-3 row-span-3 flex-col">
        <div className="flex-grow"></div>
        <div className="flex w-full justify-end">
          <Modal
            modalOpen={modalOpen[5]}
            xOffset={-20}
            yOffset={-80}
            trigger={<MousePointerClick onClick={() => toggleModal(5)} />}
          >
            <div className="w-10 h-20 bg-amber-600">Hello</div>
          </Modal>
        </div>
      </div>
    </div>
  );
}
