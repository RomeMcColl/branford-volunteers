import { MagnifyingGlassIcon as SearchIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function MobileSearch() {
  return (
    <Link href="/#" className="flex w-16 items-center px-4 py-2 lg:hidden">
      <SearchIcon className="stroke-2" />
    </Link>
  );
}
