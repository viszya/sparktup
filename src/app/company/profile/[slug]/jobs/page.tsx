"use client"

import { CardTitle, CardDescription, CardHeader, CardContent, CardFooter, Card } from "@/app/_components/ui/card"
import Link from "next/link"
import { buttonVariants } from "@/app/_components/ui/button";
import { twp, cn } from "@/server/utils"
import Image from "next/image"
import { Icons } from "@/app/_components/icons";
import { api } from "@/trpc/react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/app/_components/ui/carousel";
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/app/_components/ui/drawer"
import { usePathname } from 'next/navigation'

export default function Jobs() {

    const id = usePathname().slice(17, -5);
    console.log(id);

    const res = api.test.getCompanyCareers.useQuery({ id:id });
    if (res.isLoading) {
        return <div>Loading...</div>;
    }
    const data = res.data;
    console.log(data);


    return (
        <div className={cn(twp().wrapper)}>
            {data.map((data: any) => (
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
                            <Link href={"/company/profile/job/" + data.id} className={cn("bg-red-400 text-white", buttonVariants())} >
                                See More
                            </Link>
                        </CardFooter>
                    </div>
                    <div className="overflow-hidden rounded-3xl flex justify-center items-center max-h-80">
                        <Image src={data.thumbnail} width="600" height="100" alt="job-banner" />
                    </div>
                </Card>
            ))}
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



