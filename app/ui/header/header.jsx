"use client";

import { useContext } from "react";
import { MaxWidthContext } from "@/app/utils/max-width-context";
import DesktopNav from "./desktop-nav";
import HomeLogo from "./home-logo";
import MobileNav from "./mobile-nav";
import MobileSearch from "./mobile-search";

export default function Header() {
  const maxWidth = useContext(MaxWidthContext);

  const breakpoint = "lg";
  const hideAt = `${breakpoint}:hidden`;
  const displayAt = `${breakpoint}:flex`;
  const headerHeight = `${breakpoint}:h-20`;

  return (
    <header className="bg-branford-600 text-branford-50 lg:px-3">
      <div
        className={`mx-auto flex min-h-16 justify-between ${headerHeight} ${maxWidth}`}
      >
        <MobileSearch hideAt={hideAt} />
        <HomeLogo />
        <MobileNav hideAt={hideAt} />
        <DesktopNav displayAt={displayAt} />
      </div>
    </header>
  );
}
