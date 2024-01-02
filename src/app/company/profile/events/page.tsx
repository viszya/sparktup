import { twp, cn } from "@/server/utils";
import { Button } from "@/app/_components/ui/button";
import { Tabs } from "@/app/_components/ui/tabs";
import { CardContent, CardFooter, Card } from "@/app/_components/ui/card";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/app/_components/ui/avatar"
import { Icons } from "@/app/_components/icons";


export default function Component() {
    return (
        <div className={cn(twp().wrapper, "flex justify-center items-center flex-col mt-10")}>
            <div className="text-xl font-bold tracking-tight text-black sm:text-2xl mb-10">Microsoft Events</div>
            <div className="p-4 bg-gray-300/10 rounded-3xl border-2 border-gray-200 mb-8 flex flex-row">
                <div className={cn("aspect-w-16 aspect-h-9 bg-gray-200 overflow-hidden rounded-2xl mr-4")}>
                    <Image alt="Video thumbnail" height="225" src="/microsoft-event.png" width="400" className=" max-w-fit" />
                </div>
                <div className="p-4 bg-gray-300/10 rounded-3xl border-2 border-gray-200 w-full">
                    <div className="text-xl font-bold tracking-tight text-black sm:text-2xl mb-2">The Future of Work: Reinventing Productivity with AI</div>
                    <div className={cn("text-sm text-gray-500 mb-4")}>Event by Microsoft</div>
                    <div className={cn("text-sm text-gray-700 mb-6")}>
                        Thu, Mar 16, 2023, 8:00 AM - 9:00 AM
                        <br />
                        <div className="flex flex-row  items-center mt-2">
                            <Icons.users className="w-4 h-4 mr-2 inline-block" />
                            31,640 attendees
                        </div>
                    </div>
                    <div className={cn("flex items-center space-x-2 ")}>
                        <Button className={cn("bg-red-400 text-white")} variant="default">
                            View
                        </Button>
                        <Button className={cn("bg-black")} variant="default">
                            Save
                        </Button>
                    </div>
                </div>
            </div>
            <div className="p-4 bg-gray-300/10 rounded-3xl border-2 border-gray-200 mb-8 flex flex-row">
                <div className={cn("aspect-w-16 aspect-h-9 bg-gray-200 overflow-hidden rounded-2xl mr-4")}>
                    <Image alt="Video thumbnail" height="225" src="/microsoft-event.png" width="400" className=" max-w-fit" />
                </div>
                <div className="p-4 bg-gray-300/10 rounded-3xl border-2 border-gray-200 w-full">
                    <div className="text-xl font-bold tracking-tight text-black sm:text-2xl mb-2">The Future of Work: Reinventing Productivity with AI</div>
                    <div className={cn("text-sm text-gray-500 mb-4")}>Event by Microsoft</div>
                    <div className={cn("text-sm text-gray-700 mb-6")}>
                        Thu, Mar 16, 2023, 8:00 AM - 9:00 AM
                        <br />
                        <div className="flex flex-row  items-center mt-2">
                            <Icons.users className="w-4 h-4 mr-2 inline-block" />
                            31,640 attendees
                        </div>
                    </div>
                    <div className={cn("flex items-center space-x-2 ")}>
                        <Button className={cn("bg-red-400 text-white")} variant="default">
                            View
                        </Button>
                        <Button className={cn("bg-black")} variant="default">
                            Save
                        </Button>
                    </div>
                </div>
            </div>
            <div className="p-4 bg-gray-300/10 rounded-3xl border-2 border-gray-200 mb-8 flex flex-row">
                <div className={cn("aspect-w-16 aspect-h-9 bg-gray-200 overflow-hidden rounded-2xl mr-4")}>
                    <Image alt="Video thumbnail" height="225" src="/microsoft-event.png" width="400" className=" max-w-fit" />
                </div>
                <div className="p-4 bg-gray-300/10 rounded-3xl border-2 border-gray-200 w-full">
                    <div className="text-xl font-bold tracking-tight text-black sm:text-2xl mb-2">The Future of Work: Reinventing Productivity with AI</div>
                    <div className={cn("text-sm text-gray-500 mb-4")}>Event by Microsoft</div>
                    <div className={cn("text-sm text-gray-700 mb-6")}>
                        Thu, Mar 16, 2023, 8:00 AM - 9:00 AM
                        <br />
                        <div className="flex flex-row  items-center mt-2">
                            <Icons.users className="w-4 h-4 mr-2 inline-block" />
                            31,640 attendees
                        </div>
                    </div>
                    <div className={cn("flex items-center space-x-2 ")}>
                        <Button className={cn("bg-red-400 text-white")} variant="default">
                            View
                        </Button>
                        <Button className={cn("bg-black")} variant="default">
                            Save
                        </Button>
                    </div>
                </div>
            </div>
            <div className="p-4 bg-gray-300/10 rounded-3xl border-2 border-gray-200 mb-8 flex flex-row">
                <div className={cn("aspect-w-16 aspect-h-9 bg-gray-200 overflow-hidden rounded-2xl mr-4")}>
                    <Image alt="Video thumbnail" height="225" src="/microsoft-event.png" width="400" className=" max-w-fit" />
                </div>
                <div className="p-4 bg-gray-300/10 rounded-3xl border-2 border-gray-200 w-full">
                    <div className="text-xl font-bold tracking-tight text-black sm:text-2xl mb-2">The Future of Work: Reinventing Productivity with AI</div>
                    <div className={cn("text-sm text-gray-500 mb-4")}>Event by Microsoft</div>
                    <div className={cn("text-sm text-gray-700 mb-6")}>
                        Thu, Mar 16, 2023, 8:00 AM - 9:00 AM
                        <br />
                        <div className="flex flex-row  items-center mt-2">
                            <Icons.users className="w-4 h-4 mr-2 inline-block" />
                            31,640 attendees
                        </div>
                    </div>
                    <div className={cn("flex items-center space-x-2 ")}>
                        <Button className={cn("bg-red-400 text-white")} variant="default">
                            View
                        </Button>
                        <Button className={cn("bg-black")} variant="default">
                            Save
                        </Button>
                    </div>
                </div>
            </div>
            <div className="p-4 bg-gray-300/10 rounded-3xl border-2 border-gray-200 mb-8 flex flex-row">
                <div className={cn("aspect-w-16 aspect-h-9 bg-gray-200 overflow-hidden rounded-2xl mr-4")}>
                    <Image alt="Video thumbnail" height="225" src="/microsoft-event.png" width="400" className=" max-w-fit" />
                </div>
                <div className="p-4 bg-gray-300/10 rounded-3xl border-2 border-gray-200 w-full">
                    <div className="text-xl font-bold tracking-tight text-black sm:text-2xl mb-2">The Future of Work: Reinventing Productivity with AI</div>
                    <div className={cn("text-sm text-gray-500 mb-4")}>Event by Microsoft</div>
                    <div className={cn("text-sm text-gray-700 mb-6")}>
                        Thu, Mar 16, 2023, 8:00 AM - 9:00 AM
                        <br />
                        <div className="flex flex-row  items-center mt-2">
                            <Icons.users className="w-4 h-4 mr-2 inline-block" />
                            31,640 attendees
                        </div>
                    </div>
                    <div className={cn("flex items-center space-x-2 ")}>
                        <Button className={cn("bg-red-400 text-white")} variant="default">
                            View
                        </Button>
                        <Button className={cn("bg-black")} variant="default">
                            Save
                        </Button>
                    </div>
                </div>
            </div>
            
        </div>
    );
}