import HomeLogo from "./home-logo";
import MobileNav from "./mobile-nav";
import MobileSearch from "./mobile-search";

export default function Header() {
  return (
    <header className="flex bg-branford-600 text-branford-50">
      <MobileSearch />
      <HomeLogo />
      <MobileNav />
    </header>
  );
}

/*
Header
  MobileNav - md:hidden
    NavBtn - opens and closes...
    NavLinks
  MobileNav
  LogoLink
  MobileSearch
    IconLink
  MobileSearch
  DesktopNav - md:display
Header
*/
