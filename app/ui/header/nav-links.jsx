import Link from "next/link";
import { clsx } from "clsx";
import { usePathname } from "next/navigation";

const links = [
  { name: "Volunteer", href: "/#" },
  { name: "Organizations", href: "/#" },
  { name: "Calendar", href: "/#" },
  { name: "About", href: "/#" },
  { name: "Add your nonprofit", href: "/#" },
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
