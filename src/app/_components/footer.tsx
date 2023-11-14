import { cn } from "@/server/utils"
import { Icons } from "@/app/_components/icons"


export function Footer({ className }: React.HTMLAttributes<HTMLElement>) {
    return (
        <footer className={cn(" border-gray-200", className)}>
            <div className=" py-12 mx-8 max-w-7xl">
                <div className="flex flex-col items-start justify-between pt-16 pb-6 gap-y-12 lg:flex-row lg:items-center lg:py-16">
                    <div>
                        <div className="flex items-center text-black">
                            <div>
                                <p className="font-semibold leading-6 text-black uppercase">
                                    ClearSight
                                </p>
                                <p className="mt-1 text-sm">Perfect AI tool for building SAAS</p>
                            </div>
                        </div>
                        <nav className="flex gap-8 mt-11">
                            <a className="relative -my-2 -mx-3 rounded-lg px-3 py-2 text-sm text-gray-500 hover:text-red-300 transition-colors delay-150 hover:delay-0" href="#"><span className="relative z-10">FAQs</span></a><a className="relative -my-2 -mx-3 rounded-lg px-3 py-2 text-sm text-gray-500 hover:text-red-300 transition-colors delay-150 hover:delay-0" href="#"><span className="relative z-10">Contact</span></a><a className="relative -my-2 -mx-3 rounded-lg px-3 py-2 text-sm text-gray-500 hover:text-red-300 transition-colors delay-150 hover:delay-0" href="#"><span className="relative z-10">Terms</span></a><a className="relative -my-2 -mx-3 rounded-lg px-3 py-2 text-sm text-gray-500 hover:text-red-300 transition-colors delay-150 hover:delay-0" href="#"><span className="relative z-10">Privacy Policy</span></a>
                        </nav>
                    </div>
                    <div className="relative flex items-center self-stretch p-4 -mx-4 transition-colors group hover:bg-gray-200/30 sm:self-auto sm:rounded-2xl lg:mx-0 lg:self-auto lg:p-6">
                        <div className="relative flex items-center justify-center flex-none w-24 h-24 bg-gradient-to-br from-red-300/30 to-red-400/50 rounded-xl">
                            <Icons.twitter/>    
                        </div>
                        <div className="ml-8 lg:w-64">
                            <p className="text-base font-semibold text-black">
                                <a href="#"><span className="absolute inset-0 sm:rounded-2xl"></span>Stay
                                    updated</a>
                            </p>
                            <p className="mt-1 text-sm text-gray-500 hover:text-red-300">
                                Follow us for social media for news and updates
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-center pt-8 pb-12 border-t border-gray-200 md:flex-row-reverse md:justify-between md:pt-6">
                    <p className="mt-6 text-sm text-gray-500 md:mt-0">
                       ClearSight © Copyright 2023 All Rights Reserved
                    </p>
                </div>
            </div>
        </footer>
    )
}
