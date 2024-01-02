import Link from 'next/link';
import { buttonVariants } from '@/app/_components/ui/button';
import { cn } from '@/server/utils';

export default function Unauthorized() {
  return (
    <div className='absolute h-screen w-screen flex flex-col justify-center items-center'>
      <h2 className="font-bold text-5xl">401</h2>
      <p>Unauthorized: Please log in to access this page</p>
      <Link href="/login" className={cn(buttonVariants(), "rounded-2xl mt-4")}>
        Log In
      </Link>
    </div>
  );
}
