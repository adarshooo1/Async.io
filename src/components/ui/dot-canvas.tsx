import React from "react";

type Props = {
  children: React.ReactNode;
};

export function DotCanvas({ children }: Props) {
  return (
    <div className="h-full w-full dark:bg-black bg-white dark:bg-dot-white/[0.4] bg-dot-black/[0.4] relative">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_100%,black)]"></div>
      {/* <p className="text-2xl sm:text-6xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8"> */}
      {children}
      {/* </p> */}
    </div>
  );
}
