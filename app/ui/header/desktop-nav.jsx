import NavLinks from "./nav-links";

export default function DesktopNav({ displayAt }) {
  return (
    <nav className={`hidden items-center justify-end gap-16 ${displayAt}`}>
      <NavLinks />
    </nav>
  );
}
