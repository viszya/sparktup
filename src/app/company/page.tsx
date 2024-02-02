"use client";

import { twp, cn } from "@/server/utils";
import { Icons } from "@/app/_components/icons";
import Image from "next/image";
import { Button } from "@/app/_components/ui/button";
import { api } from "@/trpc/react";
import Link from "next/link";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTrigger,
} from "@/app/_components/ui/drawer";

export default function CompanyProfile() {
  const res = api.test.getCompanyProfiles.useQuery();
  if (res.status === "loading") {
    return <div>Loading...</div>;
  }
  const data = res.data;
  console.log(data);

  return (
    <div className="applicant-bg-2">
      <div className={cn(twp().wrapper, "pb-20")}>
        <h1 className="movein mb-2 mt-12 text-center text-5xl font-bold text-black ">
          Companies
        </h1>

        {/* Company Headline */}
        {data?.map((data: any) => (
          <div className="m-10 grid grid-flow-col grid-cols-2 gap-x-6 rounded-2xl border-2 border-gray-100 bg-white p-8 md:grid-cols-1">
            <div className=" max-w-[30rem]">
              <div className="mb-4 flex flex-row gap-x-8">
                <Image
                  src={data.logoSrc}
                  alt="company-logo"
                  width={100}
                  height={50}
                  className="overflow-hidden rounded-full"
                />
                <div>
                  <div className="mt-4 text-2xl font-medium tracking-tight text-black sm:text-4xl">
                    {data.companyName}
                  </div>
                  <div className="mt-2 flex flex-row items-center">
                    <Icons.pin className="mr-2 h-4 w-4" />
                    <div className="text-gray-500">{data.location}</div>
                  </div>
                </div>
              </div>
              <div className="flex flex-row gap-x-4">
                <div className="flex w-full flex-row items-center justify-center rounded-sm border px-3 py-0.5 text-sm font-medium text-gray-500 duration-200">
                  <Icons.user className="mr-2 h-4 w-4" />
                  {data.size}
                </div>
                <Drawer>
                  <DrawerTrigger className="flex w-full flex-row items-center justify-center rounded-sm border px-3 py-0.5 text-sm font-medium text-gray-500 duration-200 hover:scale-95 hover:cursor-pointer hover:border-cyan-400 hover:text-cyan-300">
                    <Icons.contact className="mr-2 h-4 w-4" />
                    Contact Us
                  </DrawerTrigger>
                  <DrawerContent className="bg-black  flex items-center justify-center">
                    <DrawerHeader className="flex max-w-5xl items-center justify-center">
                      <section className="m-10 flex items-center justify-center">
                        <div className="mt-8 text-xl font-medium tracking-tight text-white sm:text-2xl">
                          Contact Information
                        </div>
                        <div className="mt-4 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                          <div className="rounded-xl border-2 border-white bg-white p-4">
                            <p className="text-base font-medium text-black">
                              {data.contactInformation[0].email}
                            </p>
                            <p className="text-sm text-gray-500">Email</p>
                          </div>
                          <div className="rounded-xl border-2 border-white bg-white p-4">
                            <p className="text-base font-medium text-black">
                              {data.contactInformation[0].phone}
                            </p>
                            <p className="text-sm text-gray-500">Phone</p>
                          </div>
                          <div className="rounded-xl border-2 border-white bg-white p-4">
                            <p className="text-base font-medium text-black">
                              {data.contactInformation[0].address}
                            </p>
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
                <Link
                  href={"/company/profile/" + data.id}
                  className="text-md mt-6 inline-flex max-h-12 w-full items-center justify-center rounded-lg border-2 border-black bg-black px-6 py-12 text-center text-white duration-200 hover:border-black hover:bg-transparent hover:text-black focus:outline-none focus-visible:outline-black"
                >
                  VIEW COMPANY
                </Link>
                <Link
                  href={"/company/profile/" + data.id + "/jobs"}
                  className="text-md mt-6 inline-flex max-h-12 w-full items-center justify-center rounded-lg border-2 border-black bg-black px-6 py-12 text-center text-white duration-200 hover:border-black hover:bg-transparent hover:text-black focus:outline-none focus-visible:outline-black"
                >
                  <Icons.users className="mr-2 h-4 w-4" />
                  CONNECT TO JOBS
                </Link>
              </div>
            </div>
            <div>
              <Image
                src={data.companyBannerImgSrc}
                alt="company-banner"
                width={400}
                height={150}
                className="overflow-hidden rounded-2xl"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
