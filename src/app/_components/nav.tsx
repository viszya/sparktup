import Link from 'next/link'
import { buttonVariants } from '@/app/_components/ui/button'
// import { ArrowRight } from 'lucide-react'
// import UserAccountNav from './UserAccountNav'
import { tw_presets, cn } from '@/server/utils'
// import MobileNav from './MobileNav'
import { getServerAuthSession } from "@/server/auth";
// import { api } from "@/trpc/server";

const Nav = async () => {
  const session = await getServerAuthSession();

  return (<>

    <div className="w-full mx-auto bg-white border-b 2xl:max-w-7xl">
      <div className={cn(tw_presets().wrapper, "relative flex flex-col w-full p-5 mx-auto bg-white md:items-center md:justify-between md:flex-row md:px-6 lg:px-8")}>
        <div className="flex flex-row items-center justify-between lg:justify-start">
          <a className="text-lg tracking-tight text-black uppercase focus:outline-none focus:ring lg:text-2xl" href="/">
            <span className="lg:text-lg uppecase focus:ring-0">
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
        <nav className="flex-col items-center flex-grow hidden md:pb-0 md:flex md:justify-end md:flex-row">
          <Link
            href='/about'
            className="px-2 py-2 text-sm text-gray-500 lg:px-6 md:px-3 hover:text-blue-600">
            About
          </Link>
          <Link
            href='/solutions'
            className="px-2 py-2 text-sm text-gray-500 lg:px-6 md:px-3 hover:text-blue-600">
            Solutions
          </Link>
          <Link
            href='/positions'
            className="px-2 py-2 text-sm text-gray-500 lg:px-6 md:px-3 hover:text-blue-600">
            Job Positions
          </Link>
          <Link
            href='/faq'
            className="px-2 py-2 text-sm text-gray-500 lg:px-6 md:px-3 hover:text-blue-600">
            FAQ
          </Link>
          
          
          <div className="inline-flex items-center gap-2 list-none">
            <Link
              href="/api/auth/signin"
              className="block px-4 py-2 mt-2 text-sm text-gray-500 md:mt-0 hover:text-blue-600 focus:outline-none focus:shadow-outline"
            >
              Sign in
            </Link>
            <Link
              href="/api/auth/signin"
              className="inline-flex items-center justify-center px-4 py-2 text-sm font-semibold text-white bg-black rounded-full group focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 hover:bg-gray-700 active:bg-gray-800 active:text-white focus-visible:outline-black"
            >
              Sign up
            </Link>
          </div>
        </nav>
      </div>
    </div>

   <nav className="sticky h-14 inset-x-0 top-0 z-30 w-full border-b border-gray-200 bg-white/10 backdrop-blur-lg transition-all">
      <div className={cn("flex h-14 items-center justify-between border-b border-zinc-200", tw_presets().wrapper)}>
        <Link
          href='/'
          className='flex z-40 font-semibold'>
          <span>SparktUp</span>
        </Link>

        <Link
          href={session ? "/api/auth/signout" : "/api/auth/signin"}
          className="rounded-full bg-white/10 px-10 py-3 font-semibold no-underline transition hover:bg-white/20"
        >
          {session ? "Sign out" : "Sign in"}
        </Link>
        <Link
          href='/faq'
          className={buttonVariants({
            variant: 'ghost',
            size: 'sm',
          })}>
          FAQ
        </Link> 



  {/* <MobileNav isAuth={!!user} /> */ }

  {/* <div className='hidden items-center space-x-4 sm:flex'>
          {!(await user) ? (
            <>
              <Link
                href='#pricing'
                className={buttonVariants({
                  variant: 'ghost',
                  size: 'sm',
                })}>
                Pricing
              </Link>
              
              <LoginLink
                className={buttonVariants({
                  variant: 'ghost',
                  size: 'sm',
                })}>
                Sign in
              </LoginLink>
              <RegisterLink
                className={buttonVariants({
                  size: 'sm',
                  className: "bg-gradient-to-r from-red-400 to-red-300 ease-in-out duration-200 hover:text-black hover:shadow-xl",
                })}>
                Get started{' '}
                <ArrowRight className='ml-1.5 h-5 w-5' />
              </RegisterLink>
            </>
          ) : (
            <>
              <Link
                href='/dashboard'
                className={buttonVariants({
                  variant: 'ghost',
                  size: 'sm',
                })}>
                Dashboard
              </Link>

              <UserAccountNav
                name={
                  !user.given_name || !user.family_name
                    ? 'Your Account'
                    : `${user.given_name} ${user.family_name}`
                }
                email={user.email ?? ''}
                imageUrl={user.picture ?? ''}
              /> 
            </>
          )}
        </div> */}
  </div>
    </nav></>)

}

export default Nav