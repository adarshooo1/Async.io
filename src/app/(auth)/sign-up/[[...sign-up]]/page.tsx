"use client";
import { SignUp } from "@clerk/nextjs";
import Image from "next/image";

export default function Page() {
  return (
    <div className="md:h-screen h-full flex flex-col md:flex-row items-center justify-center">
      {/* Content div */}
      <div className="dark:text-white text-neutral-950 flex flex-col gap-7 justify-center items-center md:items-start md:w-1/2">
        <p className="hidden md:block text-2xl md:text-6xl">Register for...</p>
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
          <p className="w-full md:text-[2vw] text-3xl">
            Welcome to Async.io! Register now to start automating your tasks
            effortlessly.
          </p>
          <p className="text-lg">
            Whether you&apos;re a developer, student, or professional.
          </p>
          <p className="text-lg">
            Async.io simplifies your workflows, saving you time and effort.
          </p>
        </div>
      </div>
      <div className="pb-11 md:pb-0">
        <SignUp />
      </div>
    </div>
  );
}
