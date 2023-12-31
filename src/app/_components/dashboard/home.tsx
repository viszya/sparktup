const data = {
    connections: 100,
    profileViews: 1298,
    jobApplications: 234,
    jobOffers: 2,
}

export function Home() {
    return (
        <div>
            <div className="mt-4 mb-4 text-2xl font-medium tracking-tight text-black sm:text-4xl">Stats</div>
            <div className="flex flex-row gap-2">
                <div className="w-full p-6 bg-red-100/50 rounded-xl border-2 border-red-100">
                    <div className="text-2xl font-medium leading-6">{data.connections}</div>
                    <div className="font-light">Connections</div>
                </div>
                <div className="w-full p-6 bg-teal-100/50 rounded-xl border-2 border-teal-100">
                    <div className="text-2xl font-medium leading-6">{data.profileViews}</div>
                    <div className="font-light">Profile Views</div>
                </div>
                <div className="w-full p-6 bg-purple-100/50 rounded-xl border-2 border-purple-100">
                    <div className="text-2xl font-medium leading-6">{data.jobApplications}</div>
                    <div className="font-light">Job Applications</div>
                </div>
                <div className="w-full p-6 bg-yellow-100/50 rounded-xl border-2 border-yellow-100">
                    <div className="text-2xl font-medium leading-6">{data.jobOffers}</div>
                    <div className="font-light">Job Offers</div>
                </div>
            </div>
            <div className="mt-4 mb-4 text-2xl font-medium tracking-tight text-black sm:text-4xl">Feed</div>
        </div>
    )
}