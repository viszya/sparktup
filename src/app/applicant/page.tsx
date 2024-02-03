"use client";

import { cn } from "@/server/utils";
import { Icons } from "@/app/_components/icons";
import { twp } from "@/server/utils";
import Image from "next/image";
import { Button } from "@/app/_components/ui/button";
import { api } from "@/trpc/react";
import Link from "next/link";
import { Skeleton } from "@/app/_components/ui/skeleton";

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
    return (
      <div className="applicant-bg-2">
        <div className={cn(twp().wrapper, "pb-8 pt-10 text-white sm:pb-20")}>
          <h1 className="movein mb-10 mt-4 text-center text-5xl font-bold text-black sm:mb-2 sm:mt-12 ">
            Applicants
          </h1>
          <div className="m-4 mb-0 flex flex-col justify-between gap-x-6 rounded-2xl border-2 border-gray-100 bg-white p-8 sm:m-10 sm:mb-10 sm:flex-row ">
            <div className="max-w-[30rem]">
              <div className="mb-4 flex flex-col gap-x-8 sm:flex-row">
                <Skeleton className="h-[50px] w-[100px] rounded-full" />
                <div>
                  <div className="mt-4 text-2xl font-medium tracking-tight text-black sm:text-4xl">
                    <Skeleton className="h-[30px] w-[200px]" />
                  </div>
                  <div className="mb-4 mt-2 flex flex-row items-center">
                    <div className="text-lg font-medium leading-6 text-black">
                      <Skeleton className="h-[20px] w-[150px]" />
                    </div>
                    <Icons.dot className="mx-1 h-4 w-4 text-gray-500" />
                    <div className="text-gray-500">
                      <Skeleton className="h-[20px] w-[100px]" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-x-4 sm:flex-row">
                <Skeleton className="h-[20px] w-[100px]" />
                <Skeleton className="h-[20px] w-[100px]" />
              </div>
              <Skeleton className="mt-10 h-[40px] w-[400px]" />
            </div>
            <div className="w-full max-w-[30rem]">
              <div className="mt-8 text-xl font-medium tracking-tight text-black sm:text-2xl">
                <Skeleton className="h-[20px] w-[100px]" />
              </div>
              <div className="mt-2 text-gray-500">
                <Skeleton className="h-[100px] w-full" />
              </div>
            </div>
          </div>
          <div className="m-4 mb-0 flex flex-col justify-between gap-x-6 rounded-2xl border-2 border-gray-100 bg-white p-8 sm:m-10 sm:mb-10 sm:flex-row ">
            <div className="max-w-[30rem]">
              <div className="mb-4 flex flex-col gap-x-8 sm:flex-row">
                <Skeleton className="h-[50px] w-[100px] rounded-full" />
                <div>
                  <div className="mt-4 text-2xl font-medium tracking-tight text-black sm:text-4xl">
                    <Skeleton className="h-[30px] w-[200px]" />
                  </div>
                  <div className="mb-4 mt-2 flex flex-row items-center">
                    <div className="text-lg font-medium leading-6 text-black">
                      <Skeleton className="h-[20px] w-[150px]" />
                    </div>
                    <Icons.dot className="mx-1 h-4 w-4 text-gray-500" />
                    <div className="text-gray-500">
                      <Skeleton className="h-[20px] w-[100px]" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-x-4 sm:flex-row">
                <Skeleton className="h-[20px] w-[100px]" />
                <Skeleton className="h-[20px] w-[100px]" />
              </div>
              <Skeleton className="mt-10 h-[40px] w-[400px]" />
            </div>
            <div className="w-full max-w-[30rem]">
              <div className="mt-8 text-xl font-medium tracking-tight text-black sm:text-2xl">
                <Skeleton className="h-[20px] w-[100px]" />
              </div>
              <div className="mt-2 text-gray-500">
                <Skeleton className="h-[100px] w-full" />
              </div>
            </div>
          </div>
          <div className="m-4 mb-0 flex flex-col justify-between gap-x-6 rounded-2xl border-2 border-gray-100 bg-white p-8 sm:m-10 sm:mb-10 sm:flex-row ">
            <div className="max-w-[30rem]">
              <div className="mb-4 flex flex-col gap-x-8 sm:flex-row">
                <Skeleton className="h-[50px] w-[100px] rounded-full" />
                <div>
                  <div className="mt-4 text-2xl font-medium tracking-tight text-black sm:text-4xl">
                    <Skeleton className="h-[30px] w-[200px]" />
                  </div>
                  <div className="mb-4 mt-2 flex flex-row items-center">
                    <div className="text-lg font-medium leading-6 text-black">
                      <Skeleton className="h-[20px] w-[150px]" />
                    </div>
                    <Icons.dot className="mx-1 h-4 w-4 text-gray-500" />
                    <div className="text-gray-500">
                      <Skeleton className="h-[20px] w-[100px]" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-x-4 sm:flex-row">
                <Skeleton className="h-[20px] w-[100px]" />
                <Skeleton className="h-[20px] w-[100px]" />
              </div>
              <Skeleton className="mt-10 h-[40px] w-[400px]" />
            </div>
            <div className="w-full max-w-[30rem]">
              <div className="mt-8 text-xl font-medium tracking-tight text-black sm:text-2xl">
                <Skeleton className="h-[20px] w-[100px]" />
              </div>
              <div className="mt-2 text-gray-500">
                <Skeleton className="h-[100px] w-full" />
              </div>
            </div>
          </div>
          <div className="m-4 mb-0 flex flex-col justify-between gap-x-6 rounded-2xl border-2 border-gray-100 bg-white p-8 sm:m-10 sm:mb-10 sm:flex-row ">
            <div className="max-w-[30rem]">
              <div className="mb-4 flex flex-col gap-x-8 sm:flex-row">
                <Skeleton className="h-[50px] w-[100px] rounded-full" />
                <div>
                  <div className="mt-4 text-2xl font-medium tracking-tight text-black sm:text-4xl">
                    <Skeleton className="h-[30px] w-[200px]" />
                  </div>
                  <div className="mb-4 mt-2 flex flex-row items-center">
                    <div className="text-lg font-medium leading-6 text-black">
                      <Skeleton className="h-[20px] w-[150px]" />
                    </div>
                    <Icons.dot className="mx-1 h-4 w-4 text-gray-500" />
                    <div className="text-gray-500">
                      <Skeleton className="h-[20px] w-[100px]" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-x-4 sm:flex-row">
                <Skeleton className="h-[20px] w-[100px]" />
                <Skeleton className="h-[20px] w-[100px]" />
              </div>
              <Skeleton className="mt-10 h-[40px] w-[400px]" />
            </div>
            <div className="w-full max-w-[30rem]">
              <div className="mt-8 text-xl font-medium tracking-tight text-black sm:text-2xl">
                <Skeleton className="h-[20px] w-[100px]" />
              </div>
              <div className="mt-2 text-gray-500">
                <Skeleton className="h-[100px] w-full" />
              </div>
            </div>
          </div>
          <div className="m-4 mb-0 flex flex-col justify-between gap-x-6 rounded-2xl border-2 border-gray-100 bg-white p-8 sm:m-10 sm:mb-10 sm:flex-row ">
            <div className="max-w-[30rem]">
              <div className="mb-4 flex flex-col gap-x-8 sm:flex-row">
                <Skeleton className="h-[50px] w-[100px] rounded-full" />
                <div>
                  <div className="mt-4 text-2xl font-medium tracking-tight text-black sm:text-4xl">
                    <Skeleton className="h-[30px] w-[200px]" />
                  </div>
                  <div className="mb-4 mt-2 flex flex-row items-center">
                    <div className="text-lg font-medium leading-6 text-black">
                      <Skeleton className="h-[20px] w-[150px]" />
                    </div>
                    <Icons.dot className="mx-1 h-4 w-4 text-gray-500" />
                    <div className="text-gray-500">
                      <Skeleton className="h-[20px] w-[100px]" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-x-4 sm:flex-row">
                <Skeleton className="h-[20px] w-[100px]" />
                <Skeleton className="h-[20px] w-[100px]" />
              </div>
              <Skeleton className="mt-10 h-[40px] w-[400px]" />
            </div>
            <div className="w-full max-w-[30rem]">
              <div className="mt-8 text-xl font-medium tracking-tight text-black sm:text-2xl">
                <Skeleton className="h-[20px] w-[100px]" />
              </div>
              <div className="mt-2 text-gray-500">
                <Skeleton className="h-[100px] w-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  const data = res.data;
  console.log(data);

  return (
    <div className="applicant-bg-2">
      <div className={cn(twp().wrapper, "pb-8 pt-10 text-white sm:pb-20")}>
        <h1 className="movein mb-10 mt-4 text-center text-5xl font-bold text-black sm:mb-2 sm:mt-12 ">
          Applicants
        </h1>
        {data.map((applicant, index) => (
          (index != 0 && index != 2)  && ( <div className="m-4 mb-0 flex flex-col justify-between gap-x-6 rounded-2xl border-2 border-gray-100 bg-white p-8 sm:m-10 sm:mb-10 sm:flex-row ">
            <div className="max-w-[30rem]">
              <div className="mb-4 flex flex-col gap-x-8 sm:flex-row">
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
              <div className="flex flex-col gap-x-4 sm:flex-row">
                <div className="mb-2 flex w-full flex-row items-center justify-center rounded-sm border px-3 py-0.5 text-sm font-medium text-gray-500 duration-200 sm:mb-0 ">
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
          </div>)
        ))}
      </div>
    </div>
  );
}
