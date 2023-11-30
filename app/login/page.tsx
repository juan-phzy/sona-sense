"use client";

import { useState } from "react";
import { LoginModal } from "../components/LoginModal";

export default function Page() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="bg-indigo-500 w-screen h-screen flex flex-col justify-center items-center">
      {isModalOpen && <LoginModal />}

      {/* Spacer to push the button to the bottom */}
      <div className="flex-grow"></div>

      <button
        onClick={() => setIsModalOpen(!isModalOpen)}
        className="bg-white text-indigo-500 px-4 py-2 rounded shadow mb-4"
      >
        {isModalOpen
          ? "Notice you can't press this because the Modal is on top"
          : "Open Login Modal"}
      </button>
    </div>
  );
}
