"use client";

import { twp, cn } from "@/server/utils";
import { Icons } from "@/app/_components/icons";
import Image from "next/image";
import { Button } from "@/app/_components/ui/button";
import { api } from "@/trpc/react";
import Link from "next/link";
import { useState, useEffect } from "react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTrigger,
} from "@/app/_components/ui/drawer";
import { Skeleton } from "@/app/_components/ui/skeleton";

export default function ProfilePage({ params }: { params: { slug: string } }) {
  const res = api.user.getProfile.useQuery({ id: params.slug });
  const addView = api.user.addView.useMutation({ id: params.slug });
  useEffect(() => {
    addView.mutate({ id: params.slug });
    console.log("i fire once");
  }, []);
  if (res.isLoading) {
    return (
      <div className={cn("applicant-bg")}>
        <div className={cn("mb-20 pb-[20rem]", twp().wrapper)}>
          {/* Profile Headline */}
          <div className="m-4 flex flex-col justify-between gap-x-6 rounded-2xl border-2 border-black bg-black p-8 text-white sm:m-0 sm:mt-10 sm:flex-row md:grid-cols-1">
            <div className=" mb-4 max-w-[30rem] sm:mb-0">
              <div className="mb-4 flex flex-col gap-x-8 sm:flex-row">
                <Skeleton className="h-20 w-20 rounded-full sm:h-32 sm:w-32" />
                <div>
                  <div className="mt-4 text-2xl font-medium tracking-tight text-white sm:text-4xl">
                    <Skeleton className="mb-2 h-[30px] w-[200px]" />
                  </div>
                  <div className="mb-4 mt-2 flex flex-row items-center">
                    <div className=" text-lg font-medium leading-6 text-white">
                      <Skeleton className="mr-1 h-[20px] w-[150px]" />
                    </div>
                    <Skeleton className="mx-1 h-4 w-4 text-white/80" />
                    <div className="text-white/80">
                      <Skeleton className="h-[20px] w-[100px]" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-x-4 sm:flex-row">
                <div className="mb-2 flex w-full flex-row items-center justify-center rounded-sm border px-3 py-0.5 text-sm font-medium text-white/80 duration-200 sm:mb-0 ">
                  <Skeleton className="h-[20px] w-[150px]" />
                </div>
                <div className="mb-2 flex w-full flex-row items-center justify-center rounded-sm border px-3 py-0.5 text-sm font-medium text-white/80 duration-200 sm:mb-0 ">
                  <Skeleton className="h-[20px] w-[150px]" />
                </div>
              </div>
              <div className="mt-2 text-white/80">
                <Skeleton className="h-[40px] w-[400px]" />
              </div>
              <div>
                <div className="mt-2 text-white/80">
                  <Skeleton className="h-[100px] w-[500px]" />
                </div>
              </div>
            </div>
            <div>
              <Skeleton
                className="rounded-2xl"
                style={{ width: "400px", height: "150px" }}
              />

              <div className="mt-5 w-full rounded-xl border-2 border-white/80 bg-primary/10 p-6">
                <div className="text-2xl font-medium leading-6">
                  <Skeleton style={{ width: "300px", height: "50px" }} />
                </div>
                <div className="font-light"></div>
              </div>
            </div>
          </div>


        </div>
      </div>
    );
  }
  const data = res.data;

  return (
    <div className={cn("applicant-bg")}>
      <div className={cn("mb-20", twp().wrapper)}>
        {/* Profile Headline */}
        <div className="m-4 flex flex-col justify-between gap-x-6 rounded-2xl border-2 border-black bg-black p-8 text-white sm:m-0 sm:mt-10 sm:flex-row md:grid-cols-1">
          <div className=" mb-4 max-w-[30rem] sm:mb-0">
            <div className="mb-4 flex flex-col gap-x-8 sm:flex-row">
              <Image
                src={data?.profileSrc}
                alt="profile"
                width={100}
                height={50}
                className="overflow-hidden rounded-full"
              />
              <div>
                <div className="mt-4 text-2xl font-medium tracking-tight text-white sm:text-4xl">
                  {data.fullName}
                </div>
                <div className="mb-4 mt-2 flex flex-row items-center">
                  <div className=" text-lg font-medium leading-6 text-white">
                    {data.jobTitle}
                  </div>
                  <Icons.dot className="mx-1 h-4 w-4 text-white/80" />
                  <div className="text-white/80">@{data.username}</div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-x-4 sm:flex-row">
              <div className="mb-2 flex w-full flex-row items-center justify-center rounded-sm border px-3 py-0.5 text-sm font-medium text-white/80 duration-200 sm:mb-0 ">
                <Icons.pin className="mr-2 h-4 w-4" /> {data.location}
              </div>
              <Link
                href={data.resumeLink}
                className="flex w-full flex-row items-center justify-center rounded-sm border px-3 py-0.5 text-sm font-medium text-white/80 duration-200 hover:scale-95 hover:cursor-pointer hover:border-teal-400 hover:text-teal-300"
              >
                <Icons.contact className="mr-2 h-4 w-4" /> View Resume
              </Link>
            </div>
            <Drawer>
              <DrawerTrigger className="text-md mt-6 inline-flex w-full items-center justify-center rounded-lg border-2 border-white bg-white px-6 py-2.5 text-center text-black duration-200 hover:border-white hover:bg-transparent hover:text-white focus:outline-none focus-visible:outline-black focus-visible:ring-black">
                <Icons.user className="mr-2 h-4 w-4" />
                CONNECT
              </DrawerTrigger>
              <DrawerContent className="flex flex-col items-center justify-center bg-black">
                <DrawerHeader className="flex max-w-5xl flex-col items-center justify-center">
                  <section className="m-10 flex flex-col items-center justify-center">
                    <div className="mt-8 text-xl font-medium tracking-tight text-white sm:text-2xl">
                      Contact Information
                    </div>
                    <div className="mt-4 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                      <div className="rounded-xl border-2 border-gray-200 bg-gray-300/10 p-4">
                        <p className="text-base font-medium text-white">
                          {data.proEmail}
                        </p>
                        <p className="text-sm text-white/80">Email</p>
                      </div>
                      <div className="rounded-xl border-2 border-gray-200 bg-gray-300/10 p-4">
                        <p className="text-base font-medium text-white">
                          PHONE
                        </p>
                        <p className="text-sm text-white/80">Phone</p>
                      </div>
                      <div className="rounded-xl border-2 border-gray-200 bg-gray-300/10 p-4">
                        <p className="text-base font-medium text-white">
                          {data.location}
                        </p>
                        <p className="text-sm text-white/80">Location</p>
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
            {/* <div className="flex flex-row my-4 gap-x-4">
                                <div className="w-full p-6 bg-teal-100/50 rounded-xl border-2 border-teal-100">
                                    <div className="text-2xl font-medium leading-6">{data.connections}</div>
                                    <div className="font-light">Connections</div>
                                </div>
                                <div className="w-full p-6 bg-teal-100/50 rounded-xl border-2 border-teal-100">
                                    <div className="text-2xl font-medium leading-6">{data.yearsOfExperience}</div>
                                    <div className="font-light">Years of Experience</div>
                                </div>
                            </div> */}
            <div>
              <div className="mt-8 text-xl font-medium tracking-tight text-white sm:text-2xl">
                About
              </div>
              <div className="mt-2 text-white/80">{data.about}</div>
            </div>
          </div>
          <div>
            <Image
              src="/banner.png"
              alt="profile"
              width={400}
              height={150}
              className="overflow-hidden rounded-2xl"
            />
            <div className="font-base mt-4 flex w-full flex-row items-center justify-center rounded-sm border border-green-300/60 bg-green-300/10 px-3 py-0.5 text-sm text-green-500 duration-200">
              <span className="relative mr-3 flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
              </span>
              {data.avaiableForWork ? "Available for Work" : "Occupied"}
            </div>
            <div className="mt-5 w-full rounded-xl border-2 border-white/80 bg-primary/10 p-6">
              <div className="text-2xl font-medium leading-6">{data.views}</div>
              <div className="font-light">Profile Views</div>
            </div>
            {/* <div className="mt-4 w-full flex flex-row justify-center items-center px-3 py-0.5 text-sm border border-green-300/60 bg-green-300/10 font-base text-green-500 duration-200 rounded-sm">
						<span className="relative flex h-2 w-2 mr-3">
							<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
							<span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
						</span>
						Cuurent Work
					</div>
					<div className="mt-4 w-full flex flex-row justify-center items-center px-3 py-0.5 text-sm border border-green-300/60 bg-green-300/10 font-base text-green-500 duration-200 rounded-sm">
						<span className="relative flex h-2 w-2 mr-3">
							<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
							<span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
						</span>
						Education
					</div> */}
          </div>
        </div>

        {/* Experiences */}
        <section className="m-4 sm:m-0">
          <div className="my-4 text-2xl font-medium tracking-tight text-black sm:text-4xl">
            Experiences
          </div>
          <div className="mx-auto max-w-7xl items-center rounded-2xl border-2 border-black bg-black p-8  px-8 py-4 text-white sm:px-14">
            <ul className="divide-mercury-300 w-full divide-y" role="list">
              {data.experiences.map((data: any) => (
                <li className="my-4 py-4 lg:py-8">
                  <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-3 lg:gap-24">
                    <div className="order-last lg:order-last lg:col-span-2">
                      <p className="text-lg font-medium leading-6 text-white">
                        {data.jobTitle}
                      </p>
                      <ul className="mt-2 space-y-2 text-white/80">
                        {data.jobDescriptions.map((description: String) => (
                          <li> - {description}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="items-center justify-center gap-3">
                      <div className="mb-2 flex flex-row items-center gap-x-4">
                        <img
                          alt=""
                          className="h-10 w-10 rounded-full object-cover lg:h-16 lg:w-16"
                          src={data.companyLogoSrc}
                        />
                        <p className="text-lg font-medium leading-6 text-white">
                          {data.companyName}
                        </p>
                      </div>
                      <div className="mb-4 min-w-0 flex-1">
                        <p className="text-sm text-white/80">
                          <span className="text-base text-white">
                            {data.engangment} · {data.relativeOfWork}
                          </span>{" "}
                          <br />
                          <div className="mt-2 flex flex-row items-center">
                            <Icons.hourglass className="mr-2 h-4 w-4" />
                            {data.time}
                          </div>
                          <div className="flex flex-row items-center">
                            <Icons.pin className="mr-2 h-4 w-4" />
                            {data.location}
                          </div>
                        </p>
                      </div>
                      <Image
                        src={data.companyImgSrc}
                        className="rounded-xl shadow-lg"
                        height={100}
                        width={200}
                        alt="apple-banner"
                      />
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Top 3 Skills */}
        <section className="m-4 sm:m-0">
          <div className="mb-4 mt-4 text-2xl font-medium tracking-tight text-black sm:text-4xl">
            Top Skills
          </div>
          <div className="relative mx-auto w-full max-w-7xl items-center rounded-2xl border-2 border-black bg-black p-8 px-2 py-2 text-white sm:py-10 md:px-12 lg:px-20">
            <div className="mx-auto grid w-full grid-cols-1 lg:grid-cols-3">
              {data.topSkills.map((data: any) => (
                <div className="mx-auto max-w-md p-6">
                  <div className="gap-3 lg:inline-flex lg:items-center">
                    <div
                      className={cn(
                        "hidden h-12 w-12 items-center justify-center rounded-xl text-white sm:flex",
                        `bg-primary/20`,
                      )}
                    >
                      ❖
                    </div>
                    <p className="mt-4 text-lg font-medium leading-6 text-white lg:mt-0">
                      {data.skillName}
                    </p>
                  </div>
                  <p className="mt-3 text-base text-white/80">
                    {data.skillDescription}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Reccomendations */}
        <section className="m-4 sm:m-0">
          <div className="my-4 text-2xl font-medium tracking-tight text-white sm:text-4xl">
            Reccomendations
          </div>
          <div className="mx-auto max-w-7xl items-center rounded-2xl border-2 border-black bg-black p-8  px-8 py-4 text-white sm:px-14">
            <ul className="divide-mercury-300 w-full divide-y" role="list">
              {data.recommendations.map((data: any) => (
                <li className="py-4 lg:py-8">
                  <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-3 lg:gap-24">
                    <div className="lg:order-last lg:col-span-2">
                      <p className="text-base text-white/80">{data.message}</p>
                    </div>
                    <div className="inline-flex items-center gap-3">
                      <div className="flex-shrink-0">
                        <img
                          alt=""
                          className="h-10 w-10 rounded-full object-cover lg:h-16 lg:w-16"
                          src={data.srcImage}
                        />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-lg font-medium leading-6 text-white">
                          {data.name}
                        </p>
                        <p className="text-sm text-white/80">{data.jobTitle}</p>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Projects */}
        <section className="m-4 sm:m-0">
          <div className="my-4 text-2xl font-medium tracking-tight text-white  sm:text-4xl">
            Projects
          </div>
          <div className="rounded-2xl border-2 border-black bg-black px-2 py-9 sm:px-8">
            <div className="relative mx-auto w-full max-w-7xl items-center px-5 py-2 md:px-4 lg:px-8">
              <div className="col-span-2 grid grid-cols-1 gap-8 sm:grid-cols-2">
                {data.projects.map((data: any) => (
                  <Link
                    href={data.link}
                    className="flex flex-col items-center justify-center rounded-2xl border-2 border-black bg-white p-2 transition hover:border-white hover:bg-gray-200"
                  >
                    <div className="my-4 text-xl ">{data.name}</div>
                    <Image
                      className="rounded-2xl"
                      src={data.src}
                      width={400}
                      height={300}
                      alt="project"
                    />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* View Resume */}
        <section className="mx-4 sm:mx-0">
          <div className="my-4 text-2xl font-medium tracking-tight text-white sm:text-4xl">
            Resume
          </div>
          <div className="rounded-2xl border-2 border-black bg-black p-8">
            <div className="mx-auto max-w-7xl px-4 py-6  lg:px-8">
              <div className="flex flex-col items-center rounded-2xl border-2 border-white bg-white/10 px-6 py-6 sm:flex-row sm:px-40">
                <div className="xl:w-0 xl:flex-1">
                  <p className="items-cente mb-4 flex flex-col text-3xl text-white sm:mb-0 sm:flex-row sm:text-5xl ">
                    View Resume
                  </p>
                </div>
                <Link
                  href={data.resumeLink}
                  className="text-md inline-flex w-40 items-center justify-center rounded-2xl border-2 border-white bg-white px-6 py-2.5 text-center text-black duration-200 hover:border-white hover:bg-transparent hover:text-white focus:outline-none focus-visible:outline-black focus-visible:ring-black"
                >
                  View
                  <Icons.export className="ml-4 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
