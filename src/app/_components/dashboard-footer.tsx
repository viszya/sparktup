import * as React from "react"

import { siteConfig } from "@/app/_config/site"
import { Icons } from "@/app/_components/icons"
import Link from "next/link"

export function Footer({ className }: React.HTMLAttributes<HTMLElement>) {
  return (
    <footer className="">
      <div className="mx-32 lg:mx-10 md:mx-8 sm:mx-2  flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <div className="text-center text-sm leading-loose md:text-left sm:flex sm:justify-center sm:items-center sm:flex-row gap-x-2 grid grid-cols-2 gap-4">
            <span className=" font-medium">SPARKTUP {" "} </span>
            <Icons.dot className="h-4 w-4 hidden sm:block" />
            <span>© Copyright 2024</span>
            <Icons.dot className="h-4 w-4 hidden sm:block" />
            <Link
              href="/tos"
              className="font-medium underline underline-offset-4 hover:text-red-400 transition duration-100"
            >
              TOS
            </Link>
            <Icons.dot className="h-4 w-4 hidden sm:block" />
            <Link
              href="/privacy"
              className="font-medium underline underline-offset-4 hover:text-red-400 transition duration-100"
            >
              Privacy
            </Link>
          </div>
        </div>
        <div className="-mb-6">
        <Icons.twitter className="h-4 w-4 text-primary hover:text-red-400 transition duration-100" />
        </div>
      </div>
    </footer>
  )
}
