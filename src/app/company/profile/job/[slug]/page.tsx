"use client"

import { Badge } from "@/app/_components/ui/badge"
import { CardTitle, CardDescription, CardHeader, CardContent, CardFooter, Card } from "@/app/_components/ui/card"
import Link from "next/link"
import { Button, buttonVariants } from "@/app/_components/ui/button"
import { twp, cn } from "@/server/utils"
import { api } from "@/trpc/react";
import Image from "next/image"


export default function Job({ params }: { params: { slug: string } }) {

    console.log(params.slug)
    const res = api.test.getCareer.useQuery({ id: params.slug });
    if (res.isLoading) {
        return <div>Loading...</div>;
    }
    const data = res.data;
    console.log(data);


    return (
        <div className={cn(twp().wrapper)}>
            <Card className="p-4 bg-gray-300/10 rounded-3xl border-2 border-gray-200 flex flex-row gap-x-2 my-10">
                <div className="">
                    <CardHeader>
                        <div className="flex items-center space-x-2">
                            <Image alt="Company Logo" height="24" src={data.companyLogo} width="24" />
                            <CardTitle>{data.position}</CardTitle>
                        </div>
                        <CardDescription>{data.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            <div className="flex items-center space-x-2">
                                <BriefcaseIcon className="h-5 w-5 text-gray-500" />
                                <p className="text-sm text-gray-700">{data.pricingDescription}</p>
                            </div>
                            <div className="flex items-center space-x-2">
                                <BuildingIcon className="h-5 w-5 text-gray-500" />
                                <p className="text-sm text-gray-700">{data.sizeDescription}</p>
                            </div>
                            <div className="flex items-center space-x-2">
                                <MusicIcon className="h-5 w-5 text-gray-500" />
                                <p className="text-sm text-gray-700">Skills: {data.skills}</p>
                            </div>
                            <div className="flex items-center space-x-2">
                                <CheckCircleIcon className="h-5 w-5 text-gray-500" />
                                <p className="text-sm text-gray-700">
                                    View verifications related to this job post.{" "}
                                    <Link className="text-blue-600" href={data.jobLink}>
                                        Show all
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </CardContent>
                    <CardFooter className="flex space-x-4">
                        <Link 
                        href={{ pathname: "/company/profile/" + data.companyId + "/apply" , query: { job: data.position, jobId: data.id}}}
                        className={cn("bg-red-400 text-white", buttonVariants())}>
                            Apply
                        </Link>
                    </CardFooter>
                </div>
                <div className="overflow-hidden rounded-3xl flex justify-center items-center max-h-80">
                    <Image src={data.thumbnail} width="600" height="100" alt="job-banner" />
                </div>
            </Card>

            <div className="p-4 bg-gray-300/10 rounded-3xl border-2 border-gray-200">
                <div className="mt-4 text-lg font-semibold tracking-tight text-black mb-2">About The Job</div>
                <p className="mt-2 text-sm text-gray-600">
                    {data.about}
                </p>
                <Link href={data.jobLink} className={cn("mt-4", buttonVariants())}>
                    See More
                </Link>
                <div className="mt-6">
                    <div className="mt-4 text-lg font-semibold tracking-tight text-black mb-2">Pay found in job post</div>
                    <p className="mt-2 text-sm font-medium">{data.pay} (from job description)</p>
                </div>
                {/* <div className="mt-6">
          <div className="mt-4 text-lg font-semibold tracking-tight text-black mb-2">How strong your connection is</div>
          <p className="mt-2 text-sm">3 skills match your profile. Stand out by adding other skills you have.</p>
          <div className="mt-4">
            <h4 className="text-sm font-semibold">Skills associated with the job post</h4>
            <div className="mt-2">
              <Badge variant="secondary">Audio Engineering</Badge>
              <Badge className="ml-2" variant="secondary">
                Audio Recording
              </Badge>
              <Badge className="ml-2" variant="secondary">
                Music
              </Badge>
            </div>
            <p className="mt-4 text-sm">7 skills missing on your profile</p>
            <div className="mt-2">
              <Badge variant="default">Audio Implementation</Badge>
              <Badge className="ml-2" variant="default">
                Communication Design
              </Badge>
              <Badge className="ml-2" variant="default">
                Game Audio
              </Badge>
              <Badge className="ml-2" variant="default">
                Interaction Design
              </Badge>
              <Badge className="ml-2" variant="default">
                Music Technology
              </Badge>
              <Badge className="ml-2" variant="default">
                Post-Production
              </Badge>
              <Badge className="ml-2" variant="default">
                Sound Design
              </Badge>
            </div>
            <Button className="mt-4" variant="outline">
              Add skills
            </Button>
          </div>
        </div> */}
                <div className="mt-4 text-lg font-semibold tracking-tight text-black mb-2">About The Company</div>
                <p className="mt-2 text-sm text-gray-600">
                    {data.companyAbout}
                </p>
                <Link href={data.jobLink} className={cn("mt-4", buttonVariants())}>
                    See more
                </Link>
            </div>
        </div>

    )
}

function BarChartIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <line x1="12" x2="12" y1="20" y2="10" />
            <line x1="18" x2="18" y1="20" y2="4" />
            <line x1="6" x2="6" y1="20" y2="16" />
        </svg>
    )
}


function BriefcaseIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <rect width="20" height="14" x="2" y="7" rx="2" ry="2" />
            <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
        </svg>
    )
}


function BuildingIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <rect width="16" height="20" x="4" y="2" rx="2" ry="2" />
            <path d="M9 22v-4h6v4" />
            <path d="M8 6h.01" />
            <path d="M16 6h.01" />
            <path d="M12 6h.01" />
            <path d="M12 10h.01" />
            <path d="M12 14h.01" />
            <path d="M16 10h.01" />
            <path d="M16 14h.01" />
            <path d="M8 10h.01" />
            <path d="M8 14h.01" />
        </svg>
    )
}


function CheckCircleIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
            <polyline points="22 4 12 14.01 9 11.01" />
        </svg>
    )
}


function MusicIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M9 18V5l12-2v13" />
            <circle cx="6" cy="18" r="3" />
            <circle cx="18" cy="16" r="3" />
        </svg>
    )
}



