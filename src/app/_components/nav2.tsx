"use client";

import * as React from "react";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";

import { MainNavItem } from "@/server/types";
import { siteConfig } from "@/app/_config/site";
import { cn } from "@/server/utils";
import { Icons } from "@/app/_components/icons";
import { MobileNav } from "@/app/_components/mobile-nav";

interface MainNavProps {
  items?: MainNavItem[];
  children?: React.ReactNode;
}

export function MainNav({ items, children }: MainNavProps) {
  const segment = useSelectedLayoutSegment();
  const [showMobileMenu, setShowMobileMenu] = React.useState<boolean>(false);

  return (
    <div className="flex gap-6 md:gap-10">
      <Link
        className="flex flex-row items-center  justify-center gap-x-2 rounded-full px-4 text-lg uppercase tracking-tight text-black focus:outline-none focus:ring focus:ring-gray-300/25 lg:text-2xl"
        href="/"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.0"
          width="32"
          height="32"
          viewBox="0 0 500.000000 480.000000"
          preserveAspectRatio="xMidYMid meet"
        >
          <metadata>
            Created by potrace 1.10, written by Peter Selinger 2001-2011
          </metadata>
          <g
            transform="translate(0.000000,500.000000) scale(0.100000,-0.100000)"
            fill="#000000"
            stroke="none"
          >
            <path d="M1688 3875 c-90 -88 -352 -344 -583 -570 -231 -225 -515 -503 -631 -617 l-212 -208 797 0 796 1 655 640 c360 352 716 700 790 774 l135 135 -792 2 -792 3 -163 -160z" />
            <path d="M1857 2249 c-434 -424 -787 -773 -784 -775 2 -2 358 -4 792 -4 l788 0 171 167 c94 92 266 259 381 372 116 113 298 291 405 396 107 104 292 286 411 403 l216 212 -796 0 -796 -1 -788 -770z" />
          </g>
        </svg>
        <span className="uppecase font-semibold tracking-widest lg:text-lg">
          SPARKTUP
        </span>
      </Link>
      <nav className="ml-0 sm:-ml-2 hidden md:flex">
        {/* {items?.map((item, index) => (
            <Link
              key={index}
              href={item.disabled ? "#" : item.href}
              className={cn(
                "flex items-center text-lg font-medium transition-colors hover:text-foreground/80 sm:text-sm",
                item.href.startsWith(`/${segment}`)
                  ? "text-foreground"
                  : "text-foreground/60",
                item.disabled && "cursor-not-allowed opacity-80"
              )}
            >
              {item.title}
            </Link>
          ))} */}
        <div className="flex-1 justify-center items-center">
          <Link
            href="/solutions"
            className="rounded-2xl px-2 py-2 text-sm font-medium text-gray-900 transition-colors delay-75 hover:text-black/40 md:px-3 lg:px-6"
          >
            Solutions
          </Link>
          <Link
            href="/company"
            className="rounded-2xl px-2 py-2 text-sm font-medium text-gray-900 transition-colors delay-75 hover:text-black/40 md:px-3 lg:px-6 "
          >
            Companies
          </Link>
          <Link
            href="/company/positions"
            className="rounded-2xl px-2 py-2 text-sm font-medium text-gray-900 transition-colors delay-75 hover:text-black/40 md:px-3 lg:px-6"
          >
            Job Positions
          </Link>
          <Link
            href="/applicant"
            className="rounded-2xl px-2 py-2 text-sm font-medium text-gray-900 transition-colors delay-75 hover:text-black/40 md:px-3 lg:px-6"
          >
            Applicants
          </Link>
          <Link
            href="/faq"
            className="rounded-2xl px-2 py-2 text-sm font-medium text-gray-900 transition-colors delay-75 hover:text-black/40 md:px-3 lg:px-6 "
          >
            FAQ
          </Link>
          <Link
            href="/support"
            className="rounded-2xl px-2 py-2 text-sm font-medium text-gray-900 transition-colors delay-75 hover:text-black/40  md:px-3 lg:px-6 "
          >
            Support
          </Link>
        </div>
      </nav>
      {/* <button
        className="flex items-center space-x-2 md:hidden"
        onClick={() => setShowMobileMenu(!showMobileMenu)}
      >
        {showMobileMenu ? <Icons.close /> : <Icons.logo />}
        <span className="font-bold">Menu</span>
      </button>
      {showMobileMenu && items && (
        <MobileNav items={items}>{children}</MobileNav>
      )} */}
    </div>
  );
}
