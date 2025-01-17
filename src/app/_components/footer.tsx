import { cn, twp } from "@/server/utils"
import { Icons } from "@/app/_components/icons"
import Link from "next/link";


export function Footer({ className }: React.HTMLAttributes<HTMLElement>) {
    return (
        <footer className={cn(twp().wrapper, "bg-black text-white relative inline-flex justify-center items-center flex-col w-full px-6 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8", className)}>
            <div className=" pb-12 mx-8 max-w-xs sm:max-w-7xl w-full">
                <div className="flex flex-col items-start justify-between pt-16 pb-6 gap-y-12 lg:flex-row lg:items-center lg:py-10">
                    <div>
                        <div className="flex items-center text-white text-center sm:text-left">
                            <div>
                                <p className="font-black text-xl leading-6 text-white uppercase">
                                    SparktUp
                                </p>
                                <p className="mt-1 text-sm">Modern Job Network for Tech Startups and Industry Professionals</p>
                            </div>
                        </div>
                        <div className="flex justify-center sm:block">
                        <nav className="flex gap-8 mt-11 justify-start">
                            <Link className="relative -my-2 -mx-3 rounded-lg px-3 py-2 text-sm text-white/70 hover:text-white transition-colors duration-150 " href="/faq">
                                FAQ
                            </Link>
                            <Link className="relative -my-2 -mx-3 rounded-lg px-3 py-2 text-sm  text-white/70 hover:text-white transition-colors duration-150 " href="/about">
                                About
                            </Link>
                            <Link className="relative -my-2 -mx-3 rounded-lg px-3 py-2 text-sm  text-white/70 hover:text-white transition-colors duration-150" href="/tos">
                                Terms
                            </Link>
                            <Link className="relative -my-2 -mx-3 rounded-lg px-3 py-2 text-sm  text-white/70 hover:text-white transition-colors duration-150" href="/privacy">
                                Privacy Policy
                            </Link>
                        </nav>
                        </div>

                    </div>
                    <div className="relative flex items-center self-stretch p-3 -mx-4 transition-colors group hover:bg-gray-200/30 sm:self-auto sm:rounded-2xl lg:mx-0 lg:self-auto lg:p-4">
                        <div className="relative flex items-center justify-center flex-none w-24 h-24 bg-gradient-to-br from-gray-300/30 to-gray-400/50 rounded-xl  from">
                            <Icons.twitter />
                        </div>
                        <Link href="https://twitter.com/" target="_blank" className="ml-8 lg:w-64">
                            <p className="text-base font-semibold text-white">
                                <span className="absolute inset-0 sm:rounded-2xl"></span>Stay
                                    updated
                            </p>
                            <p className="mt-1 text-sm text-white/70 hover:text-white">
                                Follow us for social media for news and updates
                            </p>
                        </Link>
                    </div>
                </div>
                <div className="flex flex-col items-center pt-4 pb-4 md:flex-row-reverse md:justify-between ">
                    <p className=" text-sm text-white/70 md:mt-0">
                        SparktUp © Copyright 2024 All Rights Reserved
                    </p>
                </div>
            </div>
        </footer>
    )
}
