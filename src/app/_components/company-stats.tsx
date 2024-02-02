import { api } from "@/trpc/react"
import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/app/_components/ui/card"

export function Stats() {
    const getStats = api.test.getCompanyStats.useQuery();

    if (getStats.isLoading) {
        return <div>Loading...</div>
    }
    console.log(getStats.data)
    try {



        return (
            <div className="grid grid-cols-3 gap-x-2 w-full max-w-5xl p-2 border border-secondary rounded-xl mt-2">
                <Card className="border-orange-300 bg-black text-white">
                    <CardHeader>
                        <CardTitle>{getStats.data.company[0].views ?? 0}</CardTitle>
                        <CardDescription className="text-white/70">Profile Views</CardDescription>
                    </CardHeader>
                </Card>
                <Card className="bg-black text-white">
                    <CardHeader>
                        <CardTitle>{getStats.data.company[0].applications ?? 0}</CardTitle>
                        <CardDescription className="text-white/70">Applications Submitted</CardDescription>
                    </CardHeader>
                </Card>
                <Card className="bg-black text-white">
                    <CardHeader>
                        <CardTitle>{getStats.data.company[0]?.acceptedApplications ?? 0}</CardTitle>
                        <CardDescription className="text-white/70">Applications Accepted</CardDescription>
                    </CardHeader>
                </Card>
            </div>
        )
    }
    catch (err) {
        return (
            <div>
                Create Company Profile
            </div>
        )
    }

}
