import { cn } from "@/server/utils"
import { Icons } from "@/app/_components/icons"
import { twp } from "@/server/utils"

export default function CompanyProfile() {
    return (
       <div className={cn(twp().wrapper, "")}>
         <h2 className="mt-20 sm:mt-30 mb-11 text-center text-4xl font-semibold">Positions</h2>
       </div>
    )
}