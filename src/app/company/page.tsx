"use client"

import { twp, cn } from "@/server/utils";
import { Icons } from "@/app/_components/icons";
import Image from "next/image";
import { Button } from "@/app/_components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/app/_components/ui/carousel";
import { api } from "@/trpc/react";
import Link from "next/link";
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


export default function CompanyProfile() {

  const res = api.test.getCompanyProfiles.useQuery();
  if (res.status === "loading") {
    return <div>Loading...</div>;
  }
  const data = res.data;
  console.log(data);

  return (
    <div className={cn(twp().wrapper, "")}>
      <h2 className="mt-20 sm:mt-30 mb-11 text-center text-4xl font-semibold">Companies</h2>

      {/* Company Headline */}
      {data?.map((data: any) => (
        <div className="grid grid-flow-col grid-cols-2 md:grid-cols-1 gap-x-6 m-10 bg-gray-300/10 p-8 rounded-2xl border-2 border-gray-200">
          <div className=" max-w-[30rem]">
            <div className="flex flex-row gap-x-8 mb-4">
              <Image src={data.logoSrc} alt="company-logo" width={100} height={50} className="rounded-full overflow-hidden" />
              <div>
                <div className="mt-4 text-2xl font-medium tracking-tight text-black sm:text-4xl">{data.companyName}</div>
                <div className="mt-2 flex flex-row items-center">
                  <Icons.pin className="h-4 w-4 mr-2" />
                  <div className="text-gray-500">{data.location}</div>
                </div>
              </div>
            </div>
            <div className="flex flex-row gap-x-4">
              <div className="w-full flex flex-row justify-center items-center px-3 py-0.5 text-sm border font-medium text-gray-500 duration-200 rounded-sm">
                <Icons.user className="h-4 w-4 mr-2" />
                {data.size}
              </div>
              <Drawer>
                <DrawerTrigger className="w-full flex flex-row justify-center items-center px-3 py-0.5 text-sm border font-medium text-gray-500 duration-200 rounded-sm hover:text-red-300 hover:border-red-400 hover:scale-95 hover:cursor-pointer">
                  <Icons.contact className="h-4 w-4 mr-2" />
                  Contact Us
                </DrawerTrigger>
                <DrawerContent className="flex justify-center items-center">
                  <DrawerHeader className="max-w-5xl flex justify-center items-center">
                    <section className="m-10 flex justify-center items-center">
                      <div className="mt-8 text-xl font-medium tracking-tight text-black sm:text-2xl">Contact Information</div>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-4">
                        <div className="p-4 bg-gray-300/10 rounded-xl border-2 border-gray-200">
                          <p className="text-base text-black font-medium">{data.contactInformation[0].email}</p>
                          <p className="text-sm text-gray-500">Email</p>
                        </div>
                        <div className="p-4 bg-gray-300/10 rounded-xl border-2 border-gray-200">
                          <p className="text-base text-black font-medium">{data.contactInformation[0].phone}</p>
                          <p className="text-sm text-gray-500">Phone</p>
                        </div>
                        <div className="p-4 bg-gray-300/10 rounded-xl border-2 border-gray-200">
                          <p className="text-base text-black font-medium">{data.contactInformation[0].address}</p>
                          <p className="text-sm text-gray-500">Address</p>
                        </div>
                      </div>
                    </section>
                  </DrawerHeader>
                  <DrawerFooter>
                    <DrawerClose>
                      <Button variant="outline">Close</Button>
                    </DrawerClose>
                  </DrawerFooter>
                </DrawerContent>
              </Drawer>
            </div>
            <div className="flex flex-row gap-x-2">
              <Link href={"/company/profile/" + data.id +"/jobs"} className="text-md mt-6 items-center justify-center w-full px-6 py-12 text-center text-white duration-200 bg-black border-2 border-black rounded-lg inline-flex hover:bg-transparent hover:border-black hover:text-black focus:outline-none focus-visible:outline-black">
                <Icons.users className="h-4 w-4 mr-2" />
                CONNECT TO JOBS
              </Link>
              <Link href={"/company/profile/" + data.id } className="text-md mt-6 items-center justify-center w-full px-6 py-12 text-center text-white duration-200 bg-black border-2 border-black rounded-lg inline-flex hover:bg-transparent hover:border-black hover:text-black focus:outline-none focus-visible:outline-black">
                SEE MORE
              </Link>
            </div>

          </div>
          <div>
            <Image src={data.companyBannerImgSrc} alt="company-banner" width={400} height={150} className="rounded-2xl overflow-hidden" />
          </div>
        </div>
      ))}

    </div>
  )
}