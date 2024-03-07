import Link from "next/link";

export default function SearchBtn() {
  return (
    <Link
      href="/"
      className="text-nowrap rounded-lg bg-red-600 px-10 py-3 text-center text-xl sm:self-center"
    >
      Start Your Search
    </Link>
  );
}
