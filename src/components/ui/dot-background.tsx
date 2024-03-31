import React from "react";

type Props = {
  children: React.ReactNode;
};

export function DotBackgroundDemo({ children }: Props) {
  return (
    <div className="h-[14rem] w-full dark:bg-black bg-white dark:bg-dot-white/[0.4] bg-dot-black/[0.4] relative flex items-center justify-center">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_30%,black)]"></div>
      {/* <p className="text-2xl sm:text-6xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8"> */}
      {children}
      {/* </p> */}
    </div>
  );
}
