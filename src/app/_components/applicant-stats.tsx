"use client";

import { api } from "@/trpc/react";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/app/_components/ui/card";
import { Skeleton } from "@/app/_components/ui/skeleton";

export function Stats() {
  const getStats = api.application.getNumberOfApplications.useQuery();

  if (getStats.isLoading) {
    return (
      <div className="mt-2 grid w-full max-w-5xl grid-cols-1 gap-x-2 gap-y-2 rounded-xl border border-secondary bg-white/30 p-2 sm:grid-cols-3 sm:gap-y-0">
        <div className="rounded-lg border text-card-foreground shadow-sm border-cyan-300 bg-black text-white">
          <div className="flex flex-col space-y-1.5 p-6">
            <Skeleton className="mb-2 h-8 w-16" />
            <Skeleton className="h-6 w-24" />
          </div>
        </div>
        <div className="rounded-lg border text-card-foreground shadow-sm bg-black text-white">
          <div className="flex flex-col space-y-1.5 p-6">
            <Skeleton className="mb-2 h-8 w-16" />
            <Skeleton className="h-6 w-24" />
          </div>
        </div>
        <div className="rounded-lg border text-card-foreground shadow-sm  bg-black text-white">
          <div className="flex flex-col space-y-1.5 p-6">
            <Skeleton className="mb-2 h-8 w-16" />
            <Skeleton className="h-6 w-24" />
          </div>
        </div>
      </div>
    );
  }
  console.log(getStats.data);

  return (
    <div className="mt-2 grid w-full max-w-5xl grid-cols-1 gap-x-2 gap-y-2 rounded-xl border border-secondary bg-white/30 p-2 sm:grid-cols-3 sm:gap-y-0">
      <Card className="border-cyan-300 bg-black text-white">
        <CardHeader>
          <CardTitle>{getStats.data.views}</CardTitle>
          <CardDescription className="text-white/70">
            Profile Views
          </CardDescription>
        </CardHeader>
      </Card>
      <Card className="bg-black text-white">
        <CardHeader>
          <CardTitle>{getStats.data.applicationCount}</CardTitle>
          <CardDescription className="text-white/70">
            Applications Submitted
          </CardDescription>
        </CardHeader>
      </Card>
      <Card className="bg-black text-white">
        <CardHeader>
          <CardTitle>{getStats.data.acceptedApplications}</CardTitle>
          <CardDescription className="text-white/70">
            Applications Accepted
          </CardDescription>
        </CardHeader>
      </Card>
    </div>
  );
}
