import { MagnifyingGlassIcon as SearchIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function MobileSearch() {
  return (
    <Link
      href="/#"
      className="mr-auto flex w-16 items-center px-4 py-2 md:hidden"
    >
      <SearchIcon className="stroke-2" />
    </Link>
  );
}
