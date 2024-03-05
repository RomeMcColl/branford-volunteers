import Link from "next/link";
import Image from "next/image";
import { ChevronDownIcon as DownArrow } from "@heroicons/react/24/outline";
import backgroundImg from "@/public/volunteers-vert.png";

export default function Hero() {
  return (
    <section className="relative w-full text-white">
      <Image
        src={backgroundImg}
        alt="Volunteers unloading boxes."
        className="absolute top-0 h-full w-full opacity-20"
      />
      <div className="relative flex h-[92svh] flex-col justify-between p-4 pt-8">
        <h1 className="flex flex-wrap gap-2 text-3xl">
          <span>The</span>
          <span className="rounded bg-white px-1 text-red-600">Branford</span>
          <span>volunteer&nbsp;hub</span>
        </h1>
        <p className="font-semi">
          With hundreds of organizations in town, it can be hard to know where
          to start. We&apos;re here to help you find the perfect fit.
        </p>
        <div className="flex justify-center gap-5">
          <Link
            className="rounded-lg border-2 border-white px-5 py-3 text-lg text-white"
            href="/"
          >
            Learn More
          </Link>
          <Link
            className="rounded-lg border bg-white px-5 py-3 text-lg text-branford-700"
            href="/"
          >
            Get Started
          </Link>
        </div>
        <div className="w-16 self-center">
          <DownArrow className="stroke-white" />
        </div>
      </div>
    </section>
  );
}
