import { twp, cn } from "@/server/utils";
import { buttonVariants } from "@/app/_components/ui/button";
import Image from "next/image";
import { Icons } from "@/app/_components/icons";
import Link from "next/link";
import { data } from "@/app/company/data"

export default function Component() {
    return (
        <div className={cn(twp().wrapper, "flex justify-center items-center flex-col mt-10")}>
            <div className="text-xl font-bold tracking-tight text-black sm:text-2xl mb-10">Microsoft Events</div>
            {data.eventData.map((data: any) => (
                <div className="p-4 bg-gray-300/10 rounded-3xl border-2 border-gray-200 mb-8 flex flex-row">
                    <div className={cn("aspect-w-16 aspect-h-9 bg-gray-200 overflow-hidden rounded-2xl mr-4")}>
                        <Image alt="Video thumbnail" height="225" src={data.imgsrc} width="400" className=" max-w-fit" />
                    </div>
                    <div className="p-4 bg-gray-300/10 rounded-3xl border-2 border-gray-200 w-full">
                        <div className="text-xl font-bold tracking-tight text-black sm:text-2xl mb-2">{data.title}</div>
                        <div className={cn("text-sm text-gray-500 mb-4")}>{data.eventBy}</div>
                        <div className={cn("text-sm text-gray-500 mb-4")}>{data.about.slice(0, 300)}...</div>
                        <div className={cn("text-sm text-gray-700 mb-6")}>
                            {data.data}
                            <br />
                            <div className="flex flex-row  items-center mt-2">
                                <Icons.users className="w-4 h-4 mr-2 inline-block" />
                                {data.attendees}
                            </div>
                        </div>
                        <div className={cn("flex items-center space-x-2 ")}>
                            <Link href={data.seeSrc} className={cn("bg-red-400 text-white", buttonVariants())} >
                                See More
                            </Link>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}