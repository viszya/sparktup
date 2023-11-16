import { cn } from "@/server/utils"
import { Icons } from "@/app/_components/icons"
import { tw_presets } from "@/server/utils"

export default function CompanyProfile({ className }: React.HTMLAttributes<HTMLElement>) {
    return (
       <div className={cn(tw_presets().wrapper, className, "")}>
       </div>
    )
}