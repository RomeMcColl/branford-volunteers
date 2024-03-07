"use client";

import { useContext } from "react";
import { MaxWidthContext } from "@/app/utils/max-width-context";
import DesktopNav from "./desktop-nav";
import HomeLogo from "./home-logo";
import MobileNav from "./mobile-nav";
import MobileSearch from "./mobile-search";

export default function Header() {
  const maxWidth = useContext(MaxWidthContext);

  return (
    <header className="bg-branford-600 text-branford-50 lg:px-3">
      <div
        className={`mx-auto flex min-h-16 justify-between lg:h-20 ${maxWidth}`}
      >
        <MobileSearch />
        <HomeLogo />
        <MobileNav />
        <DesktopNav />
      </div>
    </header>
  );
}
