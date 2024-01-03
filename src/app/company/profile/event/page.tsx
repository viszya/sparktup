import { twp, cn } from "@/server/utils";
import { buttonVariants } from "@/app/_components/ui/button";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/app/_components/ui/avatar"
import { Icons } from "@/app/_components/icons";
import Link from "next/link";
import { data } from "@/app/company/data"


export default function Component() {
  const data2 = data.eventData[0]
  return (
    <div className={cn(twp().wrapper)}>
      <div className="p-4 bg-gray-300/10 rounded-xl border-2 border-gray-200 mb-8 mt-20">
        <div className={cn("text-sm font-semibold text-gray-500 mb-4")}>Previously {data2.eventType}</div>
        <div className={cn("aspect-w-16 aspect-h-9 bg-gray-200 mb-4 overflow-hidden rounded-2xl")}>
          <Image alt="Video thumbnail" height="225" src={data2.imgsrc} width="1000" className=" max-w-fit" />
        </div>
        <div className="text-xl font-bold tracking-tight text-black sm:text-2xl mb-2">{data2.title}</div>
        <div className={cn("text-sm text-gray-500 mb-4")}>{data2.eventBy}</div>
        <div className={cn("text-sm text-gray-700 mb-6")}>
          {data2.date}
          <br />
          <div className="flex flex-row  items-center mt-2">
            <Icons.users className="w-4 h-4 mr-2 inline-block" />
            {data2.attendees} Attendees
          </div>
        </div>
        <div className={cn("flex items-center space-x-2 mb-8")}>
          <div className={cn("flex items-center space-x-2 ")}>
            <Link href={data2.viewLink} className={cn("bg-red-400 text-white", buttonVariants())} >
              View
            </Link>
            <Link href={data2.attendSrc} className={cn("bg-black", buttonVariants())}>
              Attend
            </Link>
          </div>
        </div>
      </div>

      <div className={cn("border-t border-gray-200 pt-4")}>
        <div className="mt-4 text-xl font-medium tracking-tight text-black sm:text-2xl mb-2">About</div>
        <div className={cn("text-sm text-gray-700 mb-8")}>
          {data2.about}
        </div>
        <div className="mt-8 text-xl font-medium tracking-tight text-black sm:text-2xl mb-2">Speakers</div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {data2.speakers.map((data: any) => (
            <div className={cn("p-4 bg-gray-300/10 rounded-xl border-2 px-6 border-gray-200 ")}>
              <div className={cn("flex items-center space-x-4")}>
                <Avatar>
                  <AvatarImage src={data.imgsrc} />
                  <AvatarFallback>{data.fallback}</AvatarFallback>
                </Avatar>
                <div>
                  <div className={cn("font-semibold")}>{data.name}</div>
                  <div className={cn("text-sm text-gray-500")}>{data.position}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}