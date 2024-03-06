import NavLinks from "./nav-links";

export default function DesktopNav({ displayAt }) {
  return (
    <div className={`ml-16 mr-10 hidden items-center gap-16 ${displayAt}`}>
      <NavLinks />
    </div>
  );
}
