import DesktopNav from "./desktop-nav";
import HomeLogo from "./home-logo";
import MobileNav from "./mobile-nav";
import MobileSearch from "./mobile-search";

export default function Header({ maxWidthPx }) {
  const breakpoint = "lg";
  return (
    <header className="bg-branford-600 text-branford-50">
      <div
        className={`mx-auto flex min-h-16 justify-between max-w-[${maxWidthPx}px]`}
      >
        <MobileSearch breakpoint={breakpoint} />
        <HomeLogo />
        <MobileNav breakpoint={breakpoint} />
        <DesktopNav breakpoint={breakpoint} />
      </div>
    </header>
  );
}
