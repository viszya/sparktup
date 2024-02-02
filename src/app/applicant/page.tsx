"use client";

import { cn } from "@/server/utils";
import { Icons } from "@/app/_components/icons";
import { twp } from "@/server/utils";
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
  const res = api.user.getProfiles.useQuery();
  if (res.status === "loading") {
    return <div>Loading...</div>;
  }
  const data = res.data;
  console.log(data);

  return (
    <div className="applicant-bg-2">
      <div className={cn(twp().wrapper, "text-white pb-20")}>
        <h1 className="movein mb-2 mt-12 text-center text-5xl font-bold text-black ">
          Applicants
        </h1>
        {data.map((applicant) => (
          <div className="m-10 border-gray-100 mb-10 grid grid-flow-col grid-cols-2 gap-x-6 rounded-2xl border-2 bg-white p-8 md:grid-cols-1">
            <div className="max-w-[30rem]">
              <div className="mb-4 flex flex-row gap-x-8">
                <Image
                  src={applicant.profileSrc}
                  alt="profile"
                  width={100}
                  height={50}
                  className="overflow-hidden rounded-full"
                />
                <div>
                  <div className="mt-4 text-2xl font-medium tracking-tight text-black sm:text-4xl">
                    {applicant.fullName}
                  </div>
                  <div className="mb-4 mt-2 flex flex-row items-center">
                    <div className=" text-lg font-medium leading-6 text-black">
                      {applicant.jobTitle}
                    </div>
                    <Icons.dot className="mx-1 h-4 w-4 text-gray-500" />
                    <div className="text-gray-500">@{applicant.username}</div>
                  </div>
                </div>
              </div>
              <div className="flex flex-row gap-x-4">
                <div className="flex w-full flex-row items-center justify-center rounded-sm border px-3 py-0.5 text-sm font-medium text-gray-500 duration-200 ">
                  <Icons.pin className="mr-2 h-4 w-4" /> {applicant.location}
                </div>
                <Link
                  href="/"
                  className="flex w-full flex-row items-center justify-center rounded-sm border px-3 py-0.5 text-sm font-medium text-gray-500 duration-200 hover:scale-95 hover:cursor-pointer hover:border-red-400 hover:text-red-300"
                >
                  <Icons.contact className="mr-2 h-4 w-4" /> View Resume
                </Link>
              </div>
              <Link
                href={"/applicant/profile/" + applicant.id}
                className="text-md mt-6 inline-flex w-full items-center justify-center rounded-lg border-2 border-black bg-black px-6 py-2.5 text-center text-white duration-200 hover:border-black hover:bg-transparent hover:text-black focus:outline-none focus-visible:outline-black focus-visible:ring-black"
              >
                <Icons.user className="mr-2 h-4 w-4" />
                See Profile
              </Link>
            </div>
            <div className="max-w-[30rem]">
              <div className="mt-8 text-xl font-medium tracking-tight text-black sm:text-2xl">
                About
              </div>
              <div className="mt-2 text-gray-500">{applicant.about}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
