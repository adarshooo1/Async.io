"use client";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { MenuIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { UserButton } from "@clerk/nextjs";

type Props = {};

const Navbar = (props: Props) => {
  const router = useRouter();
  return (
    <header className="fixed right-0 left-0 top-0 py-4 px-4 bg-black/40 backdrop-blur-lg z-[100] flex items-center border-b-[1px] border-neutral-900 justify-between">
      <aside className="flex items-center gap-[2px]">
        <Image
          src="/AsyncLight.svg"
          height={1}
          width={100}
          alt="Async.io"
          className="shadow-sm shrink-0 cursor-pointer"
          onClick={() => router.push("/")}
        />
      </aside>
      <nav className="absolute left-[50%] top-[50%] transform translate-x-[-50%] translate-y-[-50%] hidden md:block text-white">
        <ul className="flex items-center gap-4 list-none">
          <li>
            <Link href={"#"}>Products</Link>
          </li>
          <li>
            <Link href={"#"}>Pricing</Link>
          </li>
          <li>
            <Link href={"#"}>Clients</Link>
          </li>
          <li>
            <Link href={"#"}>Resources</Link>
          </li>
          <li>
            <Link href={"#"}>Documentation</Link>
          </li>
          <li>
            <Link href={"#"}>Enterprise</Link>
          </li>
        </ul>
      </nav>
      <aside className="flex items-center gap-4">
        <button
          type="button"
          onClick={() => router.push("/dashboard")}
          className="relative inline-flex h-10 overflow-hidden rounded-sm p-[2px] focus:outline-none focus:ring-0 focus:ring-slate-400 focus:ring-offset-1 focus:ring-offset-slate-50"
        >
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
          <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-sm bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
            {/*todo = implement user */}
            {true ? "Dashboard" : "Get Started"}
          </span>
        </button>

        {/*todo = implement user */}

        {/* {user ? <UserButton afterSignOutUrl="/" /> : null} */}
        <MenuIcon className="md:hidden" />
      </aside>
    </header>
  );
};

export default Navbar;
