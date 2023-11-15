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

  return (
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



        {/* <MobileNav isAuth={!!user} /> */}

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
    </nav>
  )
}

export default Nav