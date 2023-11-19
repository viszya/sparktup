import { cn } from "@/server/utils"
import { Icons } from "@/app/_components/icons"
import { twp } from "@/server/utils"
import Link from "next/link";

export function CTA() {
    return (
       <div className={cn(twp().wrapper, "")}>
          <div className="mt-10 px-20 py-6 bg-red-100/50 border-2 border-red-100 rounded-3xl flex flex-row items-center">
                <div className="flex-1">
                    <p className="flex flex-row items-center text-3xl text-black ">
                        Sparktup - Where Tech Dreams Take Flight.
                    </p>
                </div>
                <Link href="/signin" className="whitespace-nowrap text-md items-center justify-center w-40 px-6 py-2.5 text-center text-white duration-200 bg-black border-2 border-black rounded-lg inline-flex hover:bg-transparent hover:border-black hover:text-black focus:outline-none focus-visible:outline-black focus-visible:ring-black">
                    Get Started
                    <Icons.export className="ml-4 h-5 w-5" />
                </Link>
            </div>
       </div>
    )
}