"use client";

import { useState } from "react";
import {
  Bars3Icon as MenuIcon,
  XMarkIcon as CloseIcon,
} from "@heroicons/react/24/outline";
import NavLinks from "./nav-links";

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen((curr) => !curr);
  };

  return (
    <div className="z-10 lg:hidden">
      <MobileNavBtn onClick={handleClick} isOpen={isOpen} />
      {isOpen && (
        <div className="absolute left-0 flex w-full flex-col bg-branford-600">
          <nav className="flex flex-col gap-6 p-4">
            <NavLinks onClick={handleClick} />
          </nav>
        </div>
      )}
    </div>
  );
}

function MobileNavBtn({ onClick, isOpen }) {
  return (
    <button
      type="button"
      aria-label="Menu"
      onClick={onClick}
      className="w-16 p-2"
    >
      {isOpen ? <CloseIcon /> : <MenuIcon />}
    </button>
  );
}
