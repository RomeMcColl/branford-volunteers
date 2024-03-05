"use client";

import NavLinks from "./nav-links";

export default function DesktopNav({ breakpoint }) {
  return (
    <div
      className={`ml-16 mr-10 hidden gap-16 ${breakpoint}:flex items-center`}
    >
      <NavLinks />
    </div>
  );
}
