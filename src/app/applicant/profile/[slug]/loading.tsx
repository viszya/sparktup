import { Skeleton } from "@/app/_components/ui/skeleton";
import { twp, cn } from "@/server/utils";

export default function Loading() {
  return (
    <div className={cn("applicant-bg")}>
      <div className={cn("mb-20", twp().wrapper)}>
        <Skeleton className="h-[20px] w-[100px] rounded-full" />
      </div>
    </div>
  );
}
