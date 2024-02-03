"use client";

import { twp, cn } from "@/server/utils";
import { Icons } from "@/app/_components/icons";
import Image from "next/image";
import { Button, buttonVariants } from "@/app/_components/ui/button";
import { api } from "@/trpc/react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/app/_components/ui/carousel";
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
} from "@/app/_components/ui/drawer";
import { Skeleton } from "@/app/_components/ui/skeleton";

export default function MyProfile() {
  const res = api.test.combinedGetCompanyProfile.useQuery();
  if (res.isLoading) {
    return (
      <div className={cn(twp().wrapper)}>
        {/* Company Headline */}
        <div className="m-2 mt-4 flex flex-col justify-between gap-x-6 rounded-2xl border-2 border-black bg-black p-8 sm:mt-10 sm:flex-row">
          <div className="mb-4 w-full max-w-[30rem] sm:mb-0">
            <div className="mb-4 flex flex-col gap-x-8 sm:flex-row">
              <Skeleton className="h-[50px] w-[100px] overflow-hidden rounded-full" />
              <div>
                <div className="mt-4 text-2xl font-medium tracking-tight text-white sm:text-4xl">
                  <Skeleton className="h-[30px] w-[200px]" />
                </div>
                <div className="mt-2 flex flex-row items-center">
                  <div className="text-white/80">
                    <Skeleton className="h-[15px] w-[100px]" />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-x-4 sm:flex-row">
              <div className="mb-2 flex w-full flex-row items-center justify-center rounded-sm border px-3 py-0.5 text-sm font-medium text-white/80 duration-200 sm:mb-0">
                <Skeleton className="h-[15px] w-[50px]" />
              </div>
              <div className="mb-2 flex w-full flex-row items-center justify-center rounded-sm border px-3 py-0.5 text-sm font-medium text-white/80 duration-200 sm:mb-0">
                <Skeleton className="h-[15px] w-[50px]" />
              </div>
            </div>
            <Skeleton className="mt-10 h-[100px] w-[480px]" />
          </div>
          <div>
            <Skeleton className="h-[150px] w-[400px] overflow-hidden rounded-2xl" />
          </div>
        </div>
      </div>
    );
  }
  const data = res.data;
  console.log(data);

  return (
    <div className={cn(twp().wrapper)}>
      {/* Company Headline */}
      <div className="m-2 mt-4 flex flex-col justify-between gap-x-6 rounded-2xl border-2 border-black bg-black p-8 sm:mt-10 sm:flex-row">
        <div className="mb-4 w-full max-w-[30rem] sm:mb-0">
          <div className="mb-4 flex flex-col gap-x-8 sm:flex-row">
            <Image
              src={data.logoSrc}
              alt="company-logo"
              width={100}
              height={50}
              className="overflow-hidden rounded-full"
            />
            <div>
              <div className="mt-4 text-2xl font-medium tracking-tight text-white sm:text-4xl">
                {data.companyName}
              </div>
              <div className="mt-2 flex flex-row items-center">
                <Icons.pin className="mr-2 h-4 w-4 text-white" />
                <div className="text-white/80">{data.location}</div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-x-4 sm:flex-row">
            <div className="mb-2 flex w-full flex-row items-center justify-center rounded-sm border px-3 py-0.5 text-sm font-medium text-white/80 duration-200 sm:mb-0">
              <Icons.user className="mr-2 h-4 w-4" />
              {data.size}
            </div>
            <Drawer>
              <DrawerTrigger className="flex w-full flex-row items-center justify-center rounded-sm border px-3 py-0.5 text-sm font-medium text-white/80 duration-200 hover:scale-95 hover:cursor-pointer hover:border-cyan-400 hover:text-cyan-300">
                <Icons.contact className="mr-2 h-4 w-4" />
                Contact Us
              </DrawerTrigger>
              <DrawerContent className="flex items-center justify-center bg-black">
                <DrawerHeader className="flex max-w-5xl items-center justify-center">
                  <section className="m-2 flex items-center justify-center">
                    <div className="mt-4 text-xl font-medium tracking-tight text-white sm:text-2xl">
                      Contact Information
                    </div>
                    <div className="mt-4 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                      <div className="rounded-xl border-2 border-white bg-black p-4">
                        <p className="text-base font-medium text-white">
                          {data.contactInformation[0].email}
                        </p>
                        <p className="text-sm text-white/80">Email</p>
                      </div>
                      <div className="rounded-xl border-2 border-white bg-black p-4">
                        <p className="text-base font-medium text-white">
                          {data.contactInformation[0].phone}
                        </p>
                        <p className="text-sm text-white/80">Phone</p>
                      </div>
                      <div className="rounded-xl border-2 border-white bg-black p-4">
                        <p className="text-base font-medium text-white">
                          {data.contactInformation[0].address}
                        </p>
                        <p className="text-sm text-white/80">Address</p>
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
          <Link
            href={"/company/profile/" + data.id + "/jobs"}
            className="text-md mt-6 inline-flex max-h-20 w-full items-center justify-center rounded-lg  border-2 border-black bg-white px-6 py-12 text-center text-black duration-200 hover:border-white hover:bg-transparent hover:text-white focus:outline-none focus-visible:outline-black"
          >
            <Icons.users className="mr-2 h-4 w-4" />
            CONNECT TO JOBS
          </Link>
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

      {/* About the Company */}
      <section className="m-10">
        <div className="mt-4 text-xl font-medium tracking-tight text-black sm:text-2xl">
          About the Company
        </div>
        <div className="mt-2 text-black/80">{data.about}</div>
      </section>

      {/* Company Solutions */}
      <section className="m-2">
        <div className="mx-8 mb-10">
          <div className="mt-4 text-xl font-medium tracking-tight text-black sm:text-2xl">
            Company Solutions
          </div>
          <p className="mt-2 text-black/80">{data.solutionsOverview}</p>
        </div>

        <div className="mt-2 flex flex-col items-center justify-center rounded-2xl border-2 border-black bg-black p-8 sm:flex-row">
          <section className="m-0 w-full sm:m-2">
            <div className=" text-xl font-medium tracking-tight text-white sm:text-2xl">
              Key Features for Companies
            </div>
            <div className=" rounded-2xl border-2 border-black bg-black p-2 sm:p-8">
              <ul className="list-inside list-disc text-white/80">
                {data.keyFeatures.split("\n").map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          </section>
          <section className="m-0 w-full sm:m-2">
            <div className="text-xl font-medium tracking-tight text-white sm:text-2xl">
              Key Benefits{" "}
            </div>
            <div className=" rounded-2xl border-2 border-black bg-black p-2 sm:p-8">
              <ul className="list-inside list-disc text-white/80">
                {data.keyBenefits.split("\n").map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          </section>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="m-2">
        <div className="mt-4 text-xl font-medium tracking-tight text-black sm:text-2xl">
          Client Testimonials
        </div>
        <div className="mt-4 rounded-2xl border-2 border-black bg-black p-8">
          {data.testimonials.map((testimonial, index) => (
            <div key={index} className="mb-4">
              <p className="text-white/80">{testimonial.feedback}</p>
              <p className="font-medium text-white">{`- ${testimonial.clientName}`}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Past Events */}
      <section className="m-2">
        <div className="mt-4 text-xl font-medium tracking-tight text-black sm:text-2xl">
          Company Events
        </div>
        <Carousel className="mx-auto mt-4 w-full">
          <CarouselContent>
            {data.eventData.map((event, index) => (
              <CarouselItem
                key={index}
                className="  h-full p-4 sm:basis-1/2  md:px-4 lg:px-8"
              >
                {" "}
                {/* Set a fixed height */}
                <div className="flex flex-col rounded-xl border-2 border-black bg-black">
                  {/* Event Date */}
                  <div className="flex items-center justify-between p-4">
                    <p className="text-base text-white/80">{event.date}</p>
                    <div className="flex-shrink-0">
                      <Icons.calendar className="h-4 w-4 text-white/80" />
                    </div>
                  </div>
                  {/* Event Title */}
                  <div className="p-4 text-base font-medium text-white">
                    {event.title}
                  </div>
                  {/* Event Location (if available) */}
                  {event.location && (
                    <p className="p-4 text-sm text-white/80">
                      {event.location}
                    </p>
                  )}
                  {/* Event Image */}
                  <div className="w-full overflow-hidden">
                    <Image
                      src={event.imgsrc}
                      alt={`event-${index}`}
                      width={500}
                      height={200}
                      className="object-cover"
                    />
                  </div>
                  {/* Number of Attendees */}
                  <div className="mt-1 flex flex-row items-center justify-center p-4 text-base text-white/80">
                    <Icons.users className="mr-2 h-4 w-4" />
                    {event.attendees}
                  </div>
                  {/* View Button */}
                  <Link
                    href={event.viewLink}
                    className="mt-4 inline-flex w-full items-center justify-center rounded-lg border-2 border-black bg-white px-4 py-2.5 text-center text-sm text-black duration-200 hover:border-black hover:bg-transparent hover:text-white focus:outline-none focus-visible:outline-black"
                  >
                    View
                  </Link>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:block" />
          <CarouselNext className="hidden sm:block" />
        </Carousel>
      </section>

      {/* Team Members */}
      <section className="m-2">
        <div className="mt-4 text-xl font-medium tracking-tight text-black sm:text-2xl">
          Team Members
        </div>
        <div className="mt-4 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {data.teamMembers.map((teamMember, index) => (
            <div
              key={index}
              className="rounded-xl border-2 border-black bg-black p-4"
            >
              <Image
                src={teamMember.photoSrc}
                alt={teamMember.name}
                width={100}
                height={100}
                className="rounded-full"
              />
              <p className="mt-2 text-base font-medium text-white">
                {teamMember.name}
              </p>
              <p className="text-sm text-white/80">{teamMember.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Information */}
      <section className="m-2">
        <div className="mt-4 text-xl font-medium tracking-tight text-black sm:text-2xl">
          Contact Information
        </div>
        <div className="mt-4 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-xl border-2 border-black bg-black p-4">
            <p className="text-base font-medium text-white">
              {data.contactInformation[0].email}
            </p>
            <p className="text-sm text-white/80">Email</p>
          </div>
          <div className="rounded-xl border-2 border-black bg-black p-4">
            <p className="text-base font-medium text-white">
              {data.contactInformation[0].phone}
            </p>
            <p className="text-sm text-white/80">Phone</p>
          </div>
          <div className="rounded-xl border-2 border-black bg-black p-4">
            <p className="text-base font-medium text-white">
              {data.contactInformation[0].address}
            </p>
            <p className="text-sm text-white/80">Address</p>
          </div>
        </div>
      </section>

      {/* Career Opportunities */}
      <section className="m-2">
        <div className="mt-4 text-xl font-medium tracking-tight text-black sm:text-2xl">
          Career Opportunities
        </div>
        <div className="mt-4 grid grid-cols-1 gap-8 rounded-xl border-2 border-black bg-black p-4 md:grid-cols-2 lg:grid-cols-3">
          {data.careerOpportunities.map((job, index) => (
            <div
              key={index}
              className="rounded-xl border-2 border-black bg-white/10 p-4"
            >
              <p className="text-base font-medium text-white">{job.position}</p>
              <p className="text-sm text-white/80">{job.location}</p>
              <a
                href={"/company/profile/job/" + job.id}
                className="text-sm text-blue-500 hover:underline"
              >
                Apply Now
              </a>
            </div>
          ))}
          <Link
            href={"/company/profile/" + data.id + "/jobs"}
            className={cn(
              buttonVariants(),
              "flex h-full flex-row rounded-xl p-4",
            )}
          >
            See More <Icons.arrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* Company Culture */}
      {/* <section className="m-2">
                    <div className="mt-4 text-xl font-medium tracking-tight text-black sm:text-2xl">Company Culture</div>
                    <div className="mt-2 text-white/80">{data.companyCulture}</div>
                </section> */}

      {/* Media Gallery */}
      <section className="m-2">
        <div className="mt-4 text-xl font-medium tracking-tight text-black sm:text-2xl">
          Media Gallery
        </div>
        <div className="mt-4 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {data.mediaGallery.map((imageSrc, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-xl border-2 border-black"
            >
              <Image
                src={imageSrc}
                alt={`company-media-${index}`}
                width={400}
                height={300}
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Terms and Conditions / Privacy Policy */}
      <section className="m-2">
        <div className="mt-4 text-xl font-medium tracking-tight text-black sm:text-2xl">
          Legal Information
        </div>
        <div className="mt-4 grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="rounded-xl border-2 border-black bg-black p-4">
            <p className="text-base font-medium text-white">
              Terms and Conditions
            </p>
            <a
              href={data.termsAndConditionsLink}
              className="text-sm text-blue-500 hover:underline"
            >
              Read More
            </a>
          </div>
          <div className="rounded-xl border-2 border-black bg-black p-4">
            <p className="text-base font-medium text-white">Privacy Policy</p>
            <a
              href={data.privacyPolicyLink}
              className="text-sm text-blue-500 hover:underline"
            >
              Read More
            </a>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="m-2">
        <div className="mt-4 text-xl font-medium tracking-tight text-black sm:text-2xl">
          Overview
        </div>
        <div className="mt-4 grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* Company Mission and Values */}
          <div className="rounded-xl border-2 border-black bg-black p-4">
            <div className="mt-2 text-base font-medium text-white">
              Mission and Values
            </div>
            <div className="mt-2 text-white/80">{data.missionValues}</div>
          </div>

          {/* Company Information */}
          <div className="rounded-xl border-2 border-black bg-black p-4">
            <div className="mt-2 text-base font-medium text-white">
              Company Information
            </div>
            <div className="mt-2 text-white/80">
              <div>
                <span className="font-medium">Website:</span>{" "}
                <a
                  href={data.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  {data.website}
                </a>
              </div>
              <div>
                <span className="font-medium">Industry:</span> {data.industry}
              </div>
              <div>
                <span className="font-medium">Company Size:</span> {data.size}
              </div>
              <div>
                <span className="font-medium">Headquarters:</span>{" "}
                {data.location}
              </div>
              <div>
                <span className="font-medium">Founded:</span>{" "}
                {data.foundingYear}
              </div>
              <div>
                <span className="font-medium">LinkedIn Members:</span>{" "}
                {data.linkedInMembers}
              </div>
              <div className="mt-2">
                <span className="font-medium">Specialties:</span>{" "}
                {data.specialties.map((specialty, index) => (
                  <span key={index} className="mr-2">
                    {specialty}
                    {index < data.specialties.length - 1 && ","}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 m-2">
        <div className="mt-4 text-xl font-medium tracking-tight text-black sm:text-2xl">
          Commitments
        </div>
        <div className="mt-4 rounded-xl border-2 border-black bg-black p-4">
          <div className="flex flex-col sm:flex-row ">
            <div className="col-span-1 w-full rounded-xl border-2 border-black bg-black p-4">
              <div className="mb-4 flex items-center space-x-2 ">
                <Icons.heart className="h-4 w-4 text-cyan-500" />
                <span className="text-lg font-semibold text-white">
                  Features
                </span>
              </div>
              <ul className="space-y-2">
                <li className="text-sm font-medium text-white">
                  Environmental sustainability
                </li>
                <li className="text-sm text-white/80">Social impact</li>
                <li className="text-sm text-white/80">
                  Diversity, equity, and inclusion
                </li>
                <li className="text-sm text-white/80">
                  Career growth and learning
                </li>
                <li className="text-sm text-white/80">Work-life balance</li>
              </ul>
            </div>
            <div className="col-span-2 rounded-xl border-2 border-black bg-black p-4">
              <div className="mb-4 flex items-center space-x-2 ">
                <Icons.tree className="h-4 w-4 text-green-500" />
                <span className="text-lg font-semibold text-white">
                  Environmental sustainability
                </span>
              </div>
              <p className="mb-4 text-sm text-white/80">
                Microsoft has public, time-bound commitments to become carbon
                negative, water positive, and zero waste in our operations by
                2030. Microsoft is accelerating progress toward a more
                sustainable future by measuring and features our environmental
                footprint, accelerating research, helping our customers build
                sustainable solutions, and advocating for policies that combat
                climate change and promote environmental justice.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
