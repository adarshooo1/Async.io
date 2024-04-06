"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { SidebarOptions } from "@/lib/constants";
import Link from "next/link";
import clsx from "clsx";
import { Separator } from "@/components/ui/separator";
import {
  Check,
  CircleOff,
  DatabaseZap,
  GitBranch,
  LucideMousePointerClick,
} from "lucide-react";

import { ThemeToggle } from "../global/themeToggle";

type Props = {};

const Sidebar = (props: Props) => {
  const pathName = usePathname();
  return (
    <nav className="h-screen w-28">
      <div className="flex flex-col h-full">
        {/* Brand Logo */}
        <div className="w-[90%] hidden mx-auto mt-3 border-b md:flex justify-center items-center">
          <div className="py-1 text-xl w-10/12">
            <Link href={"/"}>
              <Image
                className="dark:block hidden"
                src={"/AsyncLight.svg"}
                width={90}
                height={1}
                alt="asyncIoIcon"
              />
              <Image
                className="dark:hidden block"
                src={"/AsyncDark.svg"}
                width={90}
                height={1}
                alt="asyncIoIcon"
              />
            </Link>
          </div>
        </div>
        <div className="mt-7 md:mt-0 flex flex-col gap-8 items-center justify-between overflow-y-scroll py-6 px-2">
          <div className="flex flex-col item-center  gap-10 justify-start py-6 px-2">
            <TooltipProvider>
              {SidebarOptions.map((option) => (
                <ul key={option.name}>
                  <Tooltip delayDuration={10}>
                    <TooltipTrigger>
                      <li>
                        <Link
                          href={option.href}
                          className={clsx(
                            "group h-8 w-8 flex items-center justify-center gap-10 scale-[1.5] rounded-lg p-[3px] cursor-pointer",
                            {
                              "dark:bg-[#2f006B] bg-[#EEE0FF]":
                                pathName === option.href,
                            }
                          )}
                        >
                          <option.Component
                            selected={pathName === option.href}
                          />
                        </Link>
                      </li>
                    </TooltipTrigger>
                    <TooltipContent
                      side="right"
                      className="bg-black/10 backdrop-blur-xl"
                    >
                      {option.name}
                    </TooltipContent>
                  </Tooltip>
                </ul>
              ))}
            </TooltipProvider>
          </div>
          {/* <Separator /> */}

          <div className="flex items-center flex-col gap-1 dark:bg-[#353346]/30 p-2 rounded-full overflow-y border-[1px]">
            <div className="relative dark:border-t-[#353346]/70 p-2 rounded-full border-t-[2px] border-[1px] border-t-[#353346]">
              <LucideMousePointerClick className="dark:text-white" size={18} />
            </div>
            <Separator
              orientation="vertical"
              className="h-8 bg-gray-300 dark:bg-[#353346]"
            />
            <div className="relative dark:border-t-[#353346]/70 p-2 rounded-full border-t-[2px] border-[1px] border-t-[#353346]">
              {true ? <GitBranch size={18} /> : <CircleOff size={18} />}
            </div>
            <Separator
              orientation="vertical"
              className="h-8 bg-gray-300 dark:bg-[#353346]"
            />
            <div className="relative dark:border-t-[#353346]/70 p-2 rounded-full border-t-[2px] border-[1px] border-t-[#353346]">
              {true ? <DatabaseZap size={18} /> : <GitBranch size={18} />}
            </div>
            <Separator
              orientation="vertical"
              className="h-8 bg-gray-300 dark:bg-[#353346]"
            />

            <div className="relative dark:border-t-[#353346]/70 p-2 rounded-full border-t-[2px] border-[1px] border-t-[#353346]">
              <Check size={18} />
            </div>
          </div>
          {/* <Separator /> */}

          <div className="flex items-center justify-center my-5">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
