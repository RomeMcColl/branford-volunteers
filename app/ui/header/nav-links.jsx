import Link from "next/link";
import { clsx } from "clsx";
import { usePathname } from "next/navigation";

const links = [
  { name: "Volunteer", href: "/search" },
  { name: "Organizations", href: "/organizations" },
  { name: "Calendar", href: "/calendar" },
  { name: "About", href: "/about" },
  { name: "Add your nonprofit", href: "/nonprofit" },
];

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <>
      {links.map((link) => (
        <Link
          key={link.name}
          href={link.href}
          className={clsx("flex-[0] text-xl xl:flex-initial", {
            "text-red-500": pathname === link.href,
          })}
        >
          {link.name}
        </Link>
      ))}
    </>
  );
}
