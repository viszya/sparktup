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
                <Card className="border-red-300">
                    <CardHeader>
                        <CardTitle>{getStats.data.company[0].views ?? 0}</CardTitle>
                        <CardDescription>Profile Views</CardDescription>
                    </CardHeader>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>{getStats.data.company[0].applications ?? 0}</CardTitle>
                        <CardDescription>Applications Submitted</CardDescription>
                    </CardHeader>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>{getStats.data.company[0]?.acceptedApplications ?? 0}</CardTitle>
                        <CardDescription>Applications Accepted</CardDescription>
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