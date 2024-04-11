"use client";
import { SignIn } from "@clerk/nextjs";
import Image from "next/image";

export default function Page() {
  return (
    <div className="md:h-screen h-full flex flex-col md:flex-row items-center justify-center">
      {/* Content div */}
      <div className="dark:text-white text-neutral-950 flex flex-col gap-7 justify-center items-center md:items-start md:w-1/2">
        <h1 className="hidden md:block text-2xl md:text-6xl">Welcome to...</h1>
        <div className="px-4 md:px-0 border-b md:border-none md:-mt-8 flex justify-center md:justify-start">
          <Image
            className="dark:block hidden"
            src={"/AsyncDarkBanner.png"}
            width={380}
            height={1}
            alt="Async.io"
          />
          <Image
            className="dark:hidden block"
            src={"/AsyncWhiteBanner.png"}
            width={380}
            height={1}
            alt="Async.io"
          />
        </div>
        <div className="text-xs md:text-base flex flex-col gap-3 md:gap-2 mb-7 text-center md:text-left">
          <div className="w-full md:text-[2vw] text-3xl">
            <p className="inline-block">
              Async.io is a
              <span className="italic font-semibold underline ml-1">saas</span>{" "}
              based automation tool.
            </p>
            <p>for Developers, Students & Professionals.</p>
          </div>
          <span className="text-lg">
            Your automation is just a few clicks away!
          </span>
        </div>
      </div>
      <div className="mb-11 md:mb-0">
        <SignIn />
      </div>
    </div>
  );
}
