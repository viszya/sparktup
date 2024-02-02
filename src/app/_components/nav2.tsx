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
      <Link href="/" className="hidden items-center space-x-2 md:flex">
        <span className="uppecase font-semibold tracking-widest lg:text-lg">
          SPARKTUP
        </span>
      </Link>
      <nav className="-ml-2 hidden md:flex">
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
        <div className="flex-1">
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
      <button
        className="flex items-center space-x-2 md:hidden"
        onClick={() => setShowMobileMenu(!showMobileMenu)}
      >
        {showMobileMenu ? <Icons.close /> : <Icons.logo />}
        <span className="font-bold">Menu</span>
      </button>
      {showMobileMenu && items && (
        <MobileNav items={items}>{children}</MobileNav>
      )}
    </div>
  );
}
