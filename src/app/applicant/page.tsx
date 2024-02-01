"use client"

import { cn } from "@/server/utils"
import { Icons } from "@/app/_components/icons"
import { twp } from "@/server/utils"
import Image from "next/image";
import { Button } from "@/app/_components/ui/button";
import { api } from "@/trpc/react";
import Link from "next/link";
import { Drawer, DrawerClose, DrawerContent, DrawerFooter, DrawerHeader, DrawerTrigger } from "@/app/_components/ui/drawer";

export default function CompanyProfile() {

    const res = api.user.getProfiles.useQuery();
    if (res.status === "loading") {
        return <div>Loading...</div>;
    }
    const data = res.data;
    console.log(data);

    return (
        <div>
            <Image alt="bg-design" className="-mt-2 w-full rotate-180 bg-black -z-10 brightness-150" src="/bg-2.webp" width={1920} height={100} />
            <div className={cn(twp().wrapper, "text-white")}>
                <h1 className="z-10 relative -mt-60 mb-48 text-center text-6xl text-black font-semibold">Applicants</h1>
                {data.map((applicant) => (
                    < div className="mb-10  grid grid-flow-col grid-cols-2 md:grid-cols-1 gap-x-6 bg-white p-8 rounded-2xl border-2 border-black-200" >
                        <div className="max-w-[30rem]">
                            <div className="flex flex-row gap-x-8 mb-4">
                                <Image src={applicant.profileSrc} alt="profile" width={100} height={50} className="rounded-full overflow-hidden" />
                                <div>
                                    <div className="mt-4 text-2xl font-medium tracking-tight text-black sm:text-4xl">{applicant.fullName}</div>
                                    <div className="mt-2 mb-4 flex flex-row items-center">
                                        <div className=" text-lg font-medium leading-6 text-black">{applicant.jobTitle}</div>
                                        <Icons.dot className="h-4 w-4 mx-1 text-gray-500" />
                                        <div className="text-gray-500">@{applicant.username}</div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-row gap-x-4">
                                <div className="w-full flex flex-row justify-center items-center px-3 py-0.5 text-sm border font-medium text-gray-500 duration-200 rounded-sm ">
                                    <Icons.pin className="h-4 w-4 mr-2" /> {applicant.location}
                                </div>
                                <Link href="/" className="w-full flex flex-row justify-center items-center px-3 py-0.5 text-sm border font-medium text-gray-500 duration-200 rounded-sm hover:text-red-300 hover:border-red-400 hover:scale-95 hover:cursor-pointer">
                                    <Icons.contact className="h-4 w-4 mr-2" /> View Resume
                                </Link>

                            </div>
                            <Link href={"/applicant/profile/" + applicant.id} className="text-md mt-6 items-center justify-center w-full px-6 py-2.5 text-center text-white duration-200 bg-black border-2 border-black rounded-lg inline-flex hover:bg-transparent hover:border-black hover:text-black focus:outline-none focus-visible:outline-black focus-visible:ring-black">
                                <Icons.user className="h-4 w-4 mr-2" />
                                See Profile
                            </Link>
                        </div>
                        <div className="max-w-[30rem]">
                            <div className="mt-8 text-xl font-medium tracking-tight text-black sm:text-2xl">About</div>
                            <div className="mt-2 text-gray-500">{applicant.about}</div>
                        </div>
                    </div>
                ))}
            </div >
        </div>

    )
}
