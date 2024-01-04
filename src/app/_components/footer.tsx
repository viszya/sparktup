import { cn } from "@/server/utils"
import { Icons } from "@/app/_components/icons"
import Link from "next/link";


export function Footer({ className }: React.HTMLAttributes<HTMLElement>) {
    return (
        <footer className={cn(" border-gray-200", className)}>
            <div className=" pb-12 mx-8 max-w-7xl">
                <div className="flex flex-col items-start justify-between pt-16 pb-6 gap-y-12 lg:flex-row lg:items-center lg:py-16">
                    <div>
                        <div className="flex items-center text-black">
                            <div>
                                <p className="font-semibold leading-6 text-black uppercase">
                                    SparktUp
                                </p>
                                <p className="mt-1 text-sm">Modern Job Network for Tech Startups and Industry Professionals</p>
                            </div>
                        </div>
                        <nav className="flex gap-8 mt-11">
                            <Link className="relative -my-2 -mx-3 rounded-lg px-3 py-2 text-sm text-gray-500 hover:text-red-300 transition-colors delay-150 hover:delay-0" href="/faq">
                                FAQ
                            </Link>
                            <Link className="relative -my-2 -mx-3 rounded-lg px-3 py-2 text-sm text-gray-500 hover:text-red-300 transition-colors delay-150 hover:delay-0" href="/contact">
                                Contact
                            </Link>
                            <Link className="relative -my-2 -mx-3 rounded-lg px-3 py-2 text-sm text-gray-500 hover:text-red-300 transition-colors delay-150 hover:delay-0" href="/tos">
                                Terms
                            </Link>
                            <Link className="relative -my-2 -mx-3 rounded-lg px-3 py-2 text-sm text-gray-500 hover:text-red-300 transition-colors delay-150 hover:delay-0" href="/privacy">
                                Privacy Policy
                            </Link>
                        </nav>
                    </div>
                    <div className="relative flex items-center self-stretch p-4 -mx-4 transition-colors group hover:bg-gray-200/30 sm:self-auto sm:rounded-2xl lg:mx-0 lg:self-auto lg:p-6">
                        <div className="relative flex items-center justify-center flex-none w-24 h-24 bg-gradient-to-br from-red-300/30 to-red-400/50 rounded-xl">
                            <Icons.twitter />
                        </div>
                        <Link href="https://twitter.com/" target="_blank" className="ml-8 lg:w-64">
                            <p className="text-base font-semibold text-black">
                                <span className="absolute inset-0 sm:rounded-2xl"></span>Stay
                                    updated
                            </p>
                            <p className="mt-1 text-sm text-gray-500 hover:text-red-300">
                                Follow us for social media for news and updates
                            </p>
                        </Link>
                    </div>
                </div>
                <div className="flex flex-col items-center pt-8 pb-12 border-t border-gray-200 md:flex-row-reverse md:justify-between md:pt-6">
                    <p className="mt-6 text-sm text-gray-500 md:mt-0">
                        SparktUp © Copyright 2023 All Rights Reserved
                    </p>
                </div>
            </div>
        </footer>
    )
}
