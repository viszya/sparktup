import Link from 'next/link'
import { buttonVariants } from '@/app/_components/ui/button'
// import { ArrowRight } from 'lucide-react'
// import UserAccountNav from './UserAccountNav'
import { twp, cn } from '@/server/utils'
// import MobileNav from './MobileNav'
import { getServerAuthSession } from "@/server/auth";
// import { api } from "@/trpc/server";

const Nav = async () => {
    const session = await getServerAuthSession();

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
                            <path className="inline-flex" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                            <path className="hidden" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
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
                    <div className="hidden mx-10 md:block lg:ml-auto">
                        <div className="relative">
                            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                                <svg className="w-5 h-5 text-gray-400" viewBox="0 0 24 24" fill="none">
                                    <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                </svg>
                            </span>

                            <input type="text" className="w-full py-2 pl-10 pr-4 text-black bg-white border border-gray-200 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-500 sm:text-sm rounded-xl placeholder:text-gray-400 focus:border-blue-500" placeholder="Search" />
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    </>)
}

export default Nav