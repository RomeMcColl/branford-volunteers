import NavLinks from "./nav-links";

export default function DesktopNav() {
  return (
    <nav className="hidden items-center justify-end gap-16 lg:flex">
      <NavLinks />
    </nav>
  );
}
