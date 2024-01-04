"use client"

import { notFound } from "next/navigation"

import { dashboardConfig } from "@/app/_config/dashboard"
import { MainNav } from "@/app/_components/nav2"
import { DashboardNav } from "@/app/_components/nav"
import { Footer } from "@/app/_components/footer"
import { UserAccountNav } from "@/app/_components/user-account-nav"
import { Nav } from "@/app/_components/dashboard/nav"

import Link from 'next/link'
import { buttonVariants } from '@/app/_components/ui/button'
import { twp, cn } from '@/server/utils'
import { Icons } from "@/app/_components/icons"
import { useState } from "react"
import { signOut } from "next-auth/react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/app/_components/ui/dropdown-menu"

interface DashboardLayoutProps {
  children?: React.ReactNode
}

export default function DashboardLayout({
  children,
}: DashboardLayoutProps) {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [isGitHubLoading, setIsGitHubLoading] = useState<boolean>(false)

  return (
    <div className="flex min-h-screen flex-col space-y-6">
      <header className="sticky top-0 z-40 border-b bg-background">
        <div className="mx-32 lg:mx-10 md:mx-8 sm:mx-2  flex h-16 items-center justify-between py-4">
          <MainNav items={dashboardConfig.mainNav} />
          <div className='flex justify-center items-center'>
            <DropdownMenu>
              <DropdownMenuTrigger>
                <div className='border bg-gray-200/20 rounded-full p-1 text-gray-700 hover:animate-spin transition-all duration-100'>
                  <Icons.settings height="20" width="20" />
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel><button
                  type="button"
                  className={cn(buttonVariants({ variant: "outline" }), "rounded-2xl w-full")}
                  onClick={() => {
                    setIsGitHubLoading(true)
                    signOut({ callbackUrl: "/" })
                  }}
                  disabled={isLoading || isGitHubLoading}
                >
                  {isGitHubLoading ? (
                    <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                  ) : (<></>
                  )}{" "}
                  Signout
                </button></DropdownMenuLabel>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger className='ml-2 border bg-gray-200/20 rounded-full p-1 text-gray-700 hover:animate-spin transition-all duration-100'>
                <Icons.menu className="w-5 h-5 text-primary" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className='p-2 '>
                <DropdownMenuItem className='flex justify-center items-center px-0'>
                  <Link
                    href='/dashboard'
                    className="w-full text-center px-2 py-2 text-sm text-primary lg:px-6 transition-colors delay-75 rounded-2xl hover:bg-teal-400/10 md:px-3 hover:text-teal-400 ">
                    Home
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className='flex justify-center items-center px-0'>
                  <Link
                    href='/dashboard/profile'
                    className="w-full text-center px-2 py-2 text-sm text-primary lg:px-6 transition-colors delay-75 rounded-2xl hover:bg-teal-400/10 md:px-3 hover:text-teal-400 ">
                    My Profile
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className='flex justify-center items-center px-0'>
                  <Link
                    href='/dashboard/project'
                    className="w-full text-center px-2 py-2 text-sm text-primary lg:px-6 transition-colors delay-75 rounded-2xl hover:bg-teal-400/10 md:px-3 hover:text-teal-400 ">
                    Add Projects
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className='flex justify-center items-center px-0'>
                  <Link
                    href='/dashboard/recommendation'
                    className="w-full text-center px-2 py-2 text-sm text-primary lg:px-6 transition-colors delay-75 rounded-2xl hover:bg-teal-400/10 md:px-3 hover:text-teal-400 ">
                    Add Recommendations
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className='flex justify-center items-center px-0'>
                  <Link
                    href='/dashboard/experience'
                    className="w-full text-center px-2 py-2 text-sm text-primary lg:px-6 transition-colors delay-75 rounded-2xl hover:bg-teal-400/10 md:px-3 hover:text-teal-400 ">
                    Add Experiences
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className='flex justify-center items-center px-0'>
                  <Link
                    href='/dashboard/settings'
                    className="w-full text-center px-2 py-2 text-sm text-primary lg:px-6 transition-colors delay-75 rounded-2xl hover:bg-teal-400/10 md:px-3 hover:text-teal-400 ">
                    Settings
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />

                <DropdownMenuItem className='flex justify-center items-center px-0'>
                  <Link
                    href='/company'
                    className="w-full text-center px-2 py-2 text-sm text-primary lg:px-6 transition-colors delay-75 rounded-2xl hover:bg-teal-400/10 md:px-3 hover:text-teal-400 ">
                    Companies
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className='flex justify-center items-center px-0'>
                  <Link
                    href='/applicant'
                    className="w-full text-center px-2 py-2 text-sm text-primary lg:px-6 transition-colors delay-75 rounded-2xl hover:bg-teal-400/10 md:px-3 hover:text-teal-400 ">
                    Applicants
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className='flex justify-center items-center px-0'>
                  <Link
                    href='/faq'
                    className="w-full text-center px-2 py-2 text-sm text-primary lg:px-6 transition-colors delay-75 rounded-2xl hover:bg-teal-400/10 md:px-3 hover:text-teal-400 ">
                    FAQ
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </header>

      <div className="mx-32 lg:mx-10 md:mx-8 sm:mx-2 grid flex-1 gap-12 md:grid-cols-[150px_1fr]">
        <aside className="hidden w-[200px] flex-col md:flex">
          <DashboardNav items={dashboardConfig.sidebarNav} />
        </aside>
        <main className="flex w-full flex-1 flex-col overflow-hidden">
          {children}
        </main>
      </div>
      <Footer className="" />
    </div>
  )
}
