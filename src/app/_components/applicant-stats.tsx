"use client"

import { api } from "@/trpc/react"
import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/app/_components/ui/card"

export function Stats() {
    const getStats = api.application.getNumberOfApplications.useQuery();

    if (getStats.isLoading) {
        return <div>Loading...</div>
    }
    console.log(getStats.data)

    return (
        <div className="bg-white/30 grid gap-y-2 sm:gap-y-0 grid-cols-1 sm:grid-cols-3 gap-x-2 w-full max-w-5xl p-2 border border-secondary rounded-xl mt-2">
            <Card className="border-cyan-300 bg-black text-white">
					<CardHeader>
						<CardTitle>{getStats.data.views}</CardTitle>
						<CardDescription className="text-white/70">Profile Views</CardDescription>
					</CardHeader>
				</Card>
				<Card className="bg-black text-white">
					<CardHeader >
						<CardTitle>{getStats.data.applicationCount}</CardTitle>
						<CardDescription className="text-white/70">Applications Submitted</CardDescription>
					</CardHeader>
				</Card>
				<Card  className="bg-black text-white">
					<CardHeader>
						<CardTitle>{getStats.data.acceptedApplications}</CardTitle>
						<CardDescription className="text-white/70">Applications Accepted</CardDescription>
					</CardHeader>
				</Card>
        </div>
    )

}
