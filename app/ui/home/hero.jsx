"use client";

import Link from "next/link";
import Image from "next/image";
import { ChevronDownIcon as DownArrow } from "@heroicons/react/24/outline";
import backgroundImg from "@/public/volunteers-vert.png";
import { useContext } from "react";
import { MaxWidthContext } from "@/app/utils/max-width-context";

export default function Hero() {
  const maxWidth = useContext(MaxWidthContext);
  return (
    <section
      className={`relative w-full text-white ${maxWidth} h-[92svh] max-h-[1000px]`}
    >
      <Image
        src={backgroundImg}
        alt="Volunteers unloading boxes."
        className="absolute top-0 h-full w-full opacity-20"
      />
      <div className="relative flex h-full flex-col justify-between p-4">
        <h1 className="my-14 flex flex-col flex-wrap items-start gap-2 text-3xl font-medium">
          <span>The</span>
          <span className="rounded bg-white px-1 text-red-600">Branford</span>
          <span>volunteer&nbsp;hub</span>
        </h1>
        <p className="text-pretty font-semibold">
          With hundreds of organizations in town, <br />
          it can be hard to know where to start. <br />
          We&apos;re here to help you find the perfect fit.
        </p>
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-5 text-center text-xl font-semibold">
          <Link
            className="flex-grow rounded-lg border-2 border-white px-5 py-3 text-white"
            href="/"
          >
            Learn More
          </Link>
          <Link
            className="flex-grow rounded-lg border bg-white px-5 py-3 text-branford-600"
            href="/"
          >
            Get Started
          </Link>
        </div>
        <div className="w-12 self-center">
          <DownArrow className="stroke-white" />
        </div>
      </div>
    </section>
  );
}
