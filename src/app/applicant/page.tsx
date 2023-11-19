import { cn } from "@/server/utils"
import { Icons } from "@/app/_components/icons"
import { twp } from "@/server/utils"
import Image from "next/image";
import { Button } from "@/app/_components/ui/button";

const data = {
    applicants: [
        {
            fullName: "Alexander Sandberg",
            jobTitle: "Software Developer",
            username: "alexander",
            location: "Linz, Upper Austria, Austria",
            connections: "500+",
            yearsOfExperience: "8",
            avaiableForWork: true,
            companyLogoSrc: "/applelogo.png",
            profileSrc: "/profile2.png",
            currentJobTitle: "Senior iOS Developer",
        },
        {
            fullName: "Sam Altman",
            jobTitle: "OpenAI CEO",
            username: "sam_altman",
            location: "San Francisco, California",
            connections: "10,000+",
            yearsOfExperience: "10+",
            avaiableForWork: true,
            companyLogoSrc: "/openai_logo.png",
            profileSrc: "/sam_altman.png",
            currentJobTitle: "CEO",
        },
        {
            fullName: "Steve Jobs",
            jobTitle: "Co-founder of Apple Inc.",
            username: "steve_jobs",
            location: "Palo Alto, California, USA",
            connections: "100000+",
            yearsOfExperience: "30+",
            avaiableForWork: true,
            companyLogoSrc: "/applelogo.png",
            profileSrc: "/steve.png",
            currentJobTitle: "CEO",
        },
        {
            fullName: "Satya Nadella",
            jobTitle: "Microsoft CEO",
            username: "satya_nadella",
            location: "Washington, USA",
            connections: "5,000+",
            yearsOfExperience: "25+",
            avaiableForWork: true,
            companyLogoSrc: "/microsoft_logo.png",
            profileSrc: "/satya.png",
            currentJobTitle: "CEO",
        },
        {
            fullName: "Marcus Aurelius",
            jobTitle: "Roman Emperor",
            username: "marcus_aurelius",
            location: "Rome, Italy",
            connections: "N/A",
            yearsOfExperience: "20+",
            avaiableForWork: true,
            companyLogoSrc: "/roman_logo.jpeg",
            profileSrc: "/marcus.png",
            currentJobTitle: "Emperor",
        },
        {
            fullName: "Beethoven",
            jobTitle: "Composer and Pianist",
            username: "beethoven",
            location: "Vienna, Austria",
            connections: "N/A",
            yearsOfExperience: "30+",
            avaiableForWork: true,
            companyLogoSrc: "/music.png",
            profileSrc: "/beethoven.png",
            currentJobTitle: "Composer",
        },
    ],
}
export default function CompanyProfile() {
    return (
        <div className={cn(twp().wrapper, "")}>
            {data.applicants.map((applicant) => (
                <div className="grid grid-flow-col grid-cols-2 md:grid-cols-1 gap-x-3 m-10 bg-gray-300/10 p-8 rounded-2xl border-2 border-gray-200">
                    <div className="max-w-[30rem]">
                        <div className="flex flex-row gap-x-8 mb-4">
                            <Image src={applicant.profileSrc} alt="profile" width={100} height={100} className="rounded-full overflow-hidden"  />
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
                            <div className="w-full flex flex-row justify-center items-center px-3 py-0.5 text-sm border font-medium text-gray-500 duration-200 rounded-sm hover:text-red-300 hover:border-red-400 hover:scale-95 hover:cursor-pointer">
                                <Icons.contact className="h-4 w-4 mr-2" /> View Resume
                            </div>
                        </div>
                        <Button className="text-md mt-6 items-center justify-center w-full px-6 py-[1.34rem] text-center text-white duration-200 bg-black border-2 border-black rounded-lg inline-flex hover:bg-transparent hover:border-black hover:text-black focus:outline-none focus-visible:outline-black focus-visible:ring-black">
                            <Icons.user className="h-4 w-4 mr-2" />
                            CONNECT
                        </Button>
                    </div>
                    <div className="min-w-[29rem]">
                        <div className="flex flex-row mb-4 gap-x-4">
                            <div className="w-full p-6 bg-red-100/50 rounded-xl border-2 border-red-100">
                                <div className="text-2xl font-medium leading-6">{applicant.connections}</div>
                                <div className="font-light">Connections</div>
                            </div>
                            <div className="w-full p-6 bg-teal-100/50 rounded-xl border-2 border-teal-100">
                                <div className="text-2xl font-medium leading-6">{applicant.yearsOfExperience}</div>
                                <div className="font-light">Years of Experience</div>
                            </div>
                        </div>
                        <div className="mt-5 w-full flex flex-row justify-center items-center px-3 py-0.5 text-sm border border-green-300/60 bg-green-300/10 font-base text-green-500 duration-200 rounded-sm">
                            <span className="relative flex h-2 w-2 mr-3">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                            </span>
                            {applicant.avaiableForWork ? "Available for Work" : "Occupied"}
                        </div>
                        <div className="text-md mt-6 items-center justify-center w-full px-6 py-2.5 text-center text-black duration-200 bg-white border-2 border-gray-400/30 rounded-lg inline-flex">
                            Current Work
                            <Icons.dot className="h-4 w-4 mx-1 text-gray-500" />
                            <img alt="" className="object-cover w-6 h-6 rounded-full mr-2 border border-gray-400/30" src={applicant.companyLogoSrc} />
                            <span className="font-semibold">{applicant.currentJobTitle}</span>
                        </div>
                    </div>
                </div>
            ))}
            <div className="flex flex-row justify-center items-center">
                <Button className="px-10 py-6 mt-10 rounded-full text-base">
                    Show More
                </Button>
            </div>
        </div>
    )
}