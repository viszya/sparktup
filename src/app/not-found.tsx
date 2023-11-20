import Link from 'next/link'
import { buttonVariants } from '@/app/_components/ui/button'
import { cn } from '@/server/utils'
 
export default function NotFound() {
  return (
    <div className='absolute h-screen w-screen flex flex-col justify-center items-center'>
      <h2 className="font-bold text-5xl">404</h2>
      <p>Uh oh... the page you were looking for was not found</p>
      <Link href="/" className={cn(buttonVariants(), "rounded-2xl mt-4")}>
        Return Home
        </Link>
    </div>
  )
}