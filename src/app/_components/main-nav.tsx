import Link from "next/link";
import { buttonVariants } from "@/app/_components/ui/button";
// import { ArrowRight } from 'lucide-react'
// import UserAccountNav from './UserAccountNav'
import { twp, cn } from "@/server/utils";
// import MobileNav from './MobileNav'
import { getServerAuthSession } from "@/server/auth";
// import { api } from "@/trpc/server";

const Nav = async () => {
  const session = await getServerAuthSession();

  return (
    <>
      <div className="sticky inset-x-0 top-0 z-30 mx-auto w-full  bg-white backdrop-blur-lg transition-all">
        <div
          className={cn(
            twp().wrapper,
            "relative mx-auto flex w-full flex-col px-5 py-3  md:flex-row md:items-center md:justify-between md:px-6 lg:px-8",
          )}
        >
          <div className="flex flex-row items-center justify-between lg:justify-start">
            <a
              className="flex flex-row gap-x-2  justify-center items-center rounded-full px-4 text-lg uppercase tracking-tight text-black focus:outline-none focus:ring focus:ring-gray-300/25 lg:text-2xl"
              href="/"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                version="1.0"
                width="38"
                height="38"
                viewBox="0 0 500.000000 480.000000"
                preserveAspectRatio="xMidYMid meet"
              >
                <metadata>
                  Created by potrace 1.10, written by Peter Selinger 2001-2011
                </metadata>
                <g
                  transform="translate(0.000000,500.000000) scale(0.100000,-0.100000)"
                  fill="#000000"
                  stroke="none"
                >
                  <path d="M1688 3875 c-90 -88 -352 -344 -583 -570 -231 -225 -515 -503 -631 -617 l-212 -208 797 0 796 1 655 640 c360 352 716 700 790 774 l135 135 -792 2 -792 3 -163 -160z" />
                  <path d="M1857 2249 c-434 -424 -787 -773 -784 -775 2 -2 358 -4 792 -4 l788 0 171 167 c94 92 266 259 381 372 116 113 298 291 405 396 107 104 292 286 411 403 l216 212 -796 0 -796 -1 -788 -770z" />
                </g>
              </svg>
              <span className="uppecase font-semibold tracking-widest lg:text-lg">
                SPARKTUP
              </span>
            </a>
            <button className="inline-flex items-center justify-center p-2 text-gray-400 hover:text-black focus:text-black focus:outline-none md:hidden">
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  className="inline-flex"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
                <path
                  className="hidden"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
          </div>
          <nav className="hidden flex-grow flex-col items-center md:flex md:flex-row md:justify-end md:pb-0">
            <div className="mx-4 flex-1">
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
            <div className="inline-flex list-none items-center gap-2">
              <Link
                href="/signin"
                className="transision-all :focus:outline-none focus:shadow-outline mt-2 block rounded-xl bg-black/5 px-4 py-2 text-sm font-medium text-black delay-75 md:mt-0"
              >
                Sign in
              </Link>
              <Link
                href="/signup"
                className="group inline-flex items-center justify-center rounded-xl bg-black px-4 py-2 text-sm font-medium text-white hover:bg-gray-900 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black active:bg-gray-800 active:text-white"
              >
                Sign up
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Nav;
