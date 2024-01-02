import { twp, cn } from "@/server/utils";
import { Button } from "@/app/_components/ui/button";
import { Tabs } from "@/app/_components/ui/tabs";
import { CardContent, CardFooter, Card } from "@/app/_components/ui/card";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/app/_components/ui/avatar"
import { Icons } from "@/app/_components/icons";


export default function Component() {
  return (
    <div className={cn(twp().wrapper)}>
      <div className="p-4 bg-gray-300/10 rounded-xl border-2 border-gray-200 mb-8 mt-20">
        <div className={cn("text-sm font-semibold text-gray-500 mb-4")}>Previously live</div>
        <div className={cn("aspect-w-16 aspect-h-9 bg-gray-200 mb-4 overflow-hidden rounded-2xl")}>
          <Image alt="Video thumbnail" height="225" src="/microsoft-event.png" width="1000" className=" max-w-fit" />
        </div>
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
        <div className={cn("flex items-center space-x-2 mb-8")}>
          <Button className={cn("bg-red-400 text-white")} variant="default">
            View
          </Button>
          <Button className={cn("bg-black")} variant="default">
            Share
          </Button>
        </div>
      </div>

      <div className={cn("border-t border-gray-200 pt-4")}>
        <div className="mt-4 text-xl font-medium tracking-tight text-black sm:text-2xl mb-2">About</div>
        <div className={cn("text-sm text-gray-700 mb-8")}>
          Join us for a special event with Satya Nadella and Jared Spataro to learn how AI will power a whole new way of
          working for every person and organization. The live stream starts at 8 AM Pacific Time on March 16.
        </div>
        <div className="mt-8 text-xl font-medium tracking-tight text-black sm:text-2xl mb-2">Speakers</div>
        <div className={cn("grid grid-cols-1 md:grid-cols-2 gap-4")}>
          <div className={cn("p-4 bg-gray-300/10 rounded-xl border-2 px-6 border-gray-200 ")}>
            <div className={cn("flex items-center space-x-4")}>
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div>
                <div className={cn("font-semibold")}>Satya Nadella</div>
                <div className={cn("text-sm text-gray-500")}>3rd+ Chairman and CEO at Microsoft</div>
              </div>
            </div>
          </div>
          <div className={cn("p-4 bg-gray-300/10 rounded-xl border-2 px-6 border-gray-200 ")}>
            <div className={cn("flex items-center space-x-4")}>
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div>
                <div className={cn("font-semibold")}>Satya Nadella</div>
                <div className={cn("text-sm text-gray-500")}>3rd+ Chairman and CEO at Microsoft</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}