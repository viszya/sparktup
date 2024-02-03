import { api } from "@/trpc/react";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/app/_components/ui/card";
import { Skeleton } from "@/app/_components/ui/skeleton";

export function Stats() {
  const getStats = api.test.getCompanyStats.useQuery();

  if (getStats.isLoading) {
    return (
      <div className="mt-2 grid w-full max-w-5xl grid-cols-1 gap-x-2 gap-y-2 rounded-xl border border-secondary bg-white/30 p-2 sm:grid-cols-3 sm:gap-y-0">
        <div className="rounded-lg border border-orange-300 bg-black text-card-foreground text-white shadow-sm">
          <div className="flex flex-col space-y-1.5 p-6">
            <Skeleton className="mb-2 h-8 w-16" />
            <Skeleton className="h-6 w-24" />
          </div>
        </div>
        <div className="rounded-lg border bg-black text-card-foreground text-white shadow-sm">
          <div className="flex flex-col space-y-1.5 p-6">
            <Skeleton className="mb-2 h-8 w-16" />
            <Skeleton className="h-6 w-24" />
          </div>
        </div>
        <div className="rounded-lg border bg-black text-card-foreground  text-white shadow-sm">
          <div className="flex flex-col space-y-1.5 p-6">
            <Skeleton className="mb-2 h-8 w-16" />
            <Skeleton className="h-6 w-24" />
          </div>
        </div>
      </div>
    );
  }
  console.log(getStats.data);
  try {
    return (
      <div className="mt-2 grid w-full max-w-5xl grid-cols-1 gap-x-2 gap-y-2 rounded-xl border border-secondary bg-white/30 p-2 sm:grid-cols-3 sm:gap-y-0">
        <Card className="border-orange-300 bg-black text-white">
          <CardHeader>
            <CardTitle>{getStats.data.company[0].views ?? 0}</CardTitle>
            <CardDescription className="text-white/70">
              Profile Views
            </CardDescription>
          </CardHeader>
        </Card>
        <Card className="bg-black text-white">
          <CardHeader>
            <CardTitle>{getStats.data.company[0].applications ?? 0}</CardTitle>
            <CardDescription className="text-white/70">
              Applications Received
            </CardDescription>
          </CardHeader>
        </Card>
        <Card className="bg-black text-white">
          <CardHeader>
            <CardTitle>
              {getStats.data.company[0]?.acceptedApplications ?? 0}
            </CardTitle>
            <CardDescription className="text-white/70">
              Applications Accepted
            </CardDescription>
          </CardHeader>
        </Card>
      </div>
    );
  } catch (err) {
    return <div>Create Company Profile</div>;
  }
}
