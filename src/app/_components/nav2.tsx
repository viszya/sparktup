"use client"

import * as React from "react"
import Link from "next/link"
import { useSelectedLayoutSegment } from "next/navigation"

import { MainNavItem } from "@/server/types"
import { siteConfig } from "@/app/_config/site"
import { cn } from "@/server/utils"
import { Icons } from "@/app/_components/icons"
import { MobileNav } from "@/app/_components/mobile-nav"

interface MainNavProps {
  items?: MainNavItem[]
  children?: React.ReactNode
}

export function MainNav({ items, children }: MainNavProps) {
  const segment = useSelectedLayoutSegment()
  const [showMobileMenu, setShowMobileMenu] = React.useState<boolean>(false)

  return (
    <div className="flex gap-6 md:gap-10">
      <Link href="/" className="hidden items-center space-x-2 md:flex">
        <Icons.logo />
        <span className="lg:text-lg uppecase font-semibold tracking-widest">
          SPARTKUP
        </span>
      </Link>
      <nav className="hidden md:flex -ml-2">
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
        <div className='flex-1'>
          <Link
            href='/dashboard'
            className="px-2 py-2 text-sm text-gray-900 lg:px-6 transition-colors delay-75 rounded-2xl hover:bg-red-400/10 md:px-3 hover:text-red-400 ">
            Dashboard
          </Link>
          <Link
            href='/company/positions'
            className="px-2 py-2 text-sm text-gray-900 lg:px-6 md:px-3 hover:text-red-400 transition-colors delay-75 rounded-2xl hover:bg-red-400/10">
            Job Positions
          </Link>
          <Link
            href='/company'
            className="px-2 py-2 text-sm text-gray-900 lg:px-6 md:px-3 hover:text-red-400 transition-colors delay-75 rounded-2xl hover:bg-red-400/10">
            Companies
          </Link>
          <Link
            href='/applicant'
            className="px-2 py-2 text-sm text-gray-900 lg:px-6 md:px-3 hover:text-red-400 transition-colors delay-75 rounded-2xl hover:bg-red-400/10">
            Applicants
          </Link>
          <Link
            href='/faq'
            className="px-2 py-2 text-sm text-gray-900 lg:px-6 md:px-3 hover:text-red-400 transition-colors delay-75 rounded-2xl hover:bg-red-400/10">
            FAQ
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
  )
}
