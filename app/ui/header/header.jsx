import clsx from "clsx";
import DesktopNav from "./desktop-nav";
import HomeLogo from "./home-logo";
import MobileNav from "./mobile-nav";
import MobileSearch from "./mobile-search";

export default function Header({ maxWidth }) {
  const breakpoint = "lg";
  const hideAt = `${breakpoint}:hidden`;
  const displayAt = `${breakpoint}:flex`;

  return (
    <header className="bg-branford-600 text-branford-50">
      <div
        className={clsx(`mx-auto flex min-h-16 justify-between ${maxWidth}`)}
      >
        <MobileSearch hideAt={hideAt} />
        <HomeLogo />
        <MobileNav hideAt={hideAt} />
        <DesktopNav displayAt={displayAt} />
      </div>
    </header>
  );
}
