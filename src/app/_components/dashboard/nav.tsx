"use client"

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


export function Nav() {
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [isGitHubLoading, setIsGitHubLoading] = useState<boolean>(false)

    return (<>
        <div className="sticky inset-x-0 top-0 z-30 w-full mx-auto border-b bg-white/70 backdrop-blur-lg transition-all">
            <div className={cn(twp().wrapper, "relative flex flex-col w-full p-5 mx-auto  md:items-center md:justify-between md:flex-row md:px-6 lg:px-8")}>
                <div className="flex flex-row items-center justify-between lg:justify-start">
                    <a className="text-lg tracking-tight text-black uppercase focus:outline-none focus:ring focus:ring-gray-300/25 rounded-full px-4 lg:text-2xl" href="/">
                        <span className="lg:text-lg uppecase font-semibold tracking-widest">
                            SPARKTUP
                        </span>
                    </a>
                    <button className="inline-flex items-center justify-center p-2 text-gray-400 hover:text-black focus:outline-none focus:text-black md:hidden">
                        <svg className="w-6 h-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                            <path className="inline-flex" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                            <path className="hidden" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </button>
                </div>
                <nav className="flex-col items-center flex-grow hidden md:pb-0 md:flex md:justify-start md:flex-row">
                    <div className=' mx-4'>
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
                    {/* <div className="hidden mx-10 md:block lg:ml-auto">
                        <div className="relative">
                            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                                <svg className="w-5 h-5 text-gray-400" viewBox="0 0 24 24" fill="none">
                                    <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                </svg>
                            </span>

                            <input type="text" className="w-full py-2 pl-10 pr-4 text-black bg-white border border-gray-200 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-500 sm:text-sm rounded-xl placeholder:text-gray-400 focus:border-blue-500" placeholder="Search" />
                        </div>
                    </div> */}
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
                                        href='//dashboard'
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
                </nav>
            </div>
        </div>
    </>)
}
