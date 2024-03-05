import logo from "@/public/logo.png";
import Image from "next/image";
import Link from "next/link";

export default function HomeLogo() {
  return (
    <Link href="/#" className="flex items-center">
      <Image src={logo} alt="Branford Volunteers logo" className="w-60" />
    </Link>
  );
}
