import React from "react";

type Props = {
  children: React.ReactNode;
};

export function DotCanvas({ children }: Props) {
  return (
    <div className="h-full w-full dark:bg-neutral-950 bg-white dark:bg-dot-white/[0.4] bg-dot-black/[0.4] relative">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_100%,black)]"></div>
      {children}
    </div>
  );
}
