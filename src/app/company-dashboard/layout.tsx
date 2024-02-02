"use client"

import { notFound } from "next/navigation"

import { dashboardConfig } from "@/app/_config/dashboard"
import { MainNav } from "@/app/_components/nav2"
import { DashboardNav } from "@/app/_components/nav"
import { Footer } from "@/app/_components/dashboard-footer"
import { UserAccountNav } from "@/app/_components/user-account-nav"
import { Nav } from "@/app/_components/dashboard/nav"
import { Toaster } from "@/app/_components/ui/toaster"

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
import { dashboardCompanyConfig } from "@/app/_config/dashboard"

interface DashboardLayoutProps {
  children?: React.ReactNode
}

export default function DashboardLayout({
  children,
}: DashboardLayoutProps) {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [isGitHubLoading, setIsGitHubLoading] = useState<boolean>(false)

  return (
    <div className="flex min-h-screen flex-col space-y-6 bg-white gradient-bg-3">
      <header className="sticky top-0 z-40 border-b bg-background">
        <div className="mx-32 lg:mx-10 md:mx-8 sm:mx-2  flex h-16 items-center justify-between py-4">
          <MainNav items={dashboardCompanyConfig.mainNav} />
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
                <DropdownMenuLabel><Link
                  className={cn(buttonVariants({ variant: "outline" }), "rounded-2xl w-full")}
                  href='/company-dashboard/settings'
                >
                  Settings
                </Link></DropdownMenuLabel>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger className='ml-2 border bg-gray-200/20 rounded-full p-1 text-gray-700  transition-all duration-100'>
                <Icons.menu className="w-5 h-5 text-primary" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="mr-2">
                <DropdownMenuLabel>Dashboard</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Link href="/company-dashboard">
                    Home
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/company-dashboard/profile">
                    My Profile
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/company-dashboard/update-profile">
                    Update Profile
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/company-dashboard/add-event">
                    Add Event
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/company-dashboard/add-career">
                    Add Career
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/company-dashboard/add-team-member">
                    Add Team Member
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/company-dashboard/add-testimonial">
                    Add Testimonial
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/company-dashboard/add-contact-info">
                    Add Contact Info
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Link href="/company/positions">
                    Job Positions
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/applicant">
                    Applicants
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/company">
                    Companies
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/support">
                    Support
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/faq">
                    FAQ
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </header >

      <div className="mx-2 sm:mx-8 grid flex-1 gap-12 md:grid-cols-[150px_1fr]">
        <aside className="hidden w-[200px] flex-col md:flex">
          <DashboardNav items={dashboardCompanyConfig.sidebarNav} />
        </aside>
        <main className="flex w-full flex-1 flex-col overflow-hidden">
          {children}
        </main>
      </div>
      <Footer className="" />
      <Toaster />
    </div >
  )
}
