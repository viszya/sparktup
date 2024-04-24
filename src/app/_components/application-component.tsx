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
import { useEffect, useState } from "react";
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
import { Email } from "@/app/_components/email";
import { Input } from "@/app/_components/ui/input";
import { Textarea } from "@/app/_components/ui/textarea";
import { usePathname } from "next/navigation";
import { useToast } from "@/app/_components/ui/use-toast";
import { useSearchParams } from "next/navigation";

export function Application(props) {

  const res = api.application.getApplication.useQuery({ id: props.id });

  if (res.isLoading) {
    return <div>Loading...</div>;
  }

  const data = res.data;
  console.log(data);

  return (
    <div className="bg-white w-full">
      <div className={cn("", twp().wrapper)}>
        <section className="mt-4 flex flex-col items-center justify-center ">
          <h2 className="text-3xl font-bold tracking-tight">Application</h2>
          <div className=" w-full max-w-3xl">
            <div className="mt-5 flex flex-col rounded-xl border border-dashed border-secondary p-5">
              <div className="flex flex-col justify-center text-center md:flex-row md:text-left">
                <div className="flex w-full max-w-3xl flex-col justify-center space-y-12">
                  <form
                    className="flex flex-col gap-y-4 "
                    onSubmit={(e) => {
                      e.preventDefault();
                      onSubmit();
                    }}
                  >
                    <div className="col-span-full">
                      <label className="mb-3 block text-lg font-medium text-primary">
                        Job Position: {data.job}
                      </label>
                      <label className="mb-3 block text-sm font-medium text-primary/90">
                        Your Profile is Linked
                      </label>
                    </div>
                    <div className="col-span-full">
                      <label className="mb-3 block text-sm font-medium text-primary/90">
                        Technical Skills
                      </label>
                      <Input
                        placeholder="Programming languages, tools, etc."
                        className="rounded-xl border-primary/20 px-6 py-3 placeholder:text-primary/40"
                        type="text"
                        disabled
                        value={data.technicalSkills}
                      />
                    </div>
                    <div className="col-span-full">
                      <label className="mb-3 block text-sm font-medium text-primary/90">
                        Soft Skills
                      </label>
                      <Input
                        placeholder="Communication, teamwork, etc."
                        className="rounded-xl border-primary/20 px-6 py-3 placeholder:text-primary/40"
                        type="text"
                        disabled
                        value={data.softSkills}
                      />
                    </div>
                    <div className="col-span-full">
                      <label className="mb-3 block text-sm font-medium text-primary/90">
                        Certifications
                      </label>
                      <Input
                        placeholder="Certifications earned"
                        className="rounded-xl border-primary/20 px-6 py-3 placeholder:text-primary/40"
                        type="text"
                        disabled
                        value={data.certifications}
                      />
                    </div>

                    {/* Availability */}
                    <div className="col-span-full">
                      <label className="mb-3 block text-sm font-medium text-primary/90">
                        Start Date
                      </label>
                      <Input
                        placeholder="MM/DD/YYYY"
                        className="rounded-xl border-primary/20 px-6 py-3 placeholder:text-primary/40"
                        type="text"
                        disabled
                        value={data.startDate}
                      />
                    </div>
                    <div className="col-span-full">
                      <label className="mb-3 block text-sm font-medium text-primary/90">
                        Full-time or Part-time
                      </label>
                      <Input
                        placeholder="Full-time/Part-time"
                        className="rounded-xl border-primary/20 px-6 py-3 placeholder:text-primary/40"
                        type="text"
                        disabled
                        value={data.employmentType}
                      />
                    </div>
                    <div className="col-span-full">
                      <label className="mb-3 block text-sm font-medium text-primary/90">
                        Desired Work Schedule
                      </label>
                      <Input
                        placeholder="Weekdays, Weekends, etc."
                        className="rounded-xl border-primary/20 px-6 py-3 placeholder:text-primary/40"
                        type="text"
                        disabled
                        value={data.desiredWorkSchedule}
                      />
                    </div>

                    <div className="col-span-full">
                      <label className="mb-3 block text-sm font-medium text-primary/90">
                        Have you ever been convicted of a crime? (if legally
                        permissible)
                      </label>
                      <Input
                        placeholder="Yes/No"
                        className="rounded-xl border-primary/20 px-6 py-3 placeholder:text-primary/40"
                        type="text"
                        disabled
                        value={data.convictedOfCrime}
                      />
                    </div>

                    {/* Additional Questions */}
                    <div className="col-span-full">
                      <label className="mb-3 block text-sm font-medium text-primary/90">
                        Why are you interested in this position?
                      </label>
                      <Textarea
                        placeholder="Your answer here..."
                        className="rounded-xl border-primary/20 px-6 py-3 placeholder:text-primary/40"
                        rows={4}
                        disabled
                        value={data.interestReason}
                      />
                    </div>
                    <div className="col-span-full">
                      <label className="mb-3 block text-sm font-medium text-primary/90">
                        What makes you a suitable candidate for this role?
                      </label>
                      <Textarea
                        placeholder="Your answer here..."
                        className="rounded-xl border-primary/20 px-6 py-3 placeholder:text-primary/40"
                        rows={4}
                        disabled
                        value={data.suitableCandidateReason}
                      />
                    </div>
                    <div className="col-span-full">
                      <label className="mb-3 block text-sm font-medium text-primary/90">
                        Describe a challenging work situation and how you
                        handled it.
                      </label>
                      <Textarea
                        placeholder="Your answer here..."
                        className="rounded-xl border-primary/20 px-6 py-3 placeholder:text-primary/40"
                        rows={4}
                        disabled
                        value={data.challengingSituation}
                      />
                    </div>

                    {/* Consent and Acknowledgment */}
                    <div className="col-span-full">
                      <label className="mb-3 block text-sm font-medium text-gray-600">
                        Authorization for the company to conduct background
                        checks (if applicable).
                      </label>
                      <input
                        className="mr-2"
                        type="checkbox"
                        disabled
                        checked={data.backgroundCheckAuthorization}
                      />
                      <span className="text-gray-600">Yes</span>
                    </div>
                    <div className="col-span-full">
                      <label className="mb-3 block text-sm font-medium text-gray-600">
                        Agreement to the terms and conditions of the application
                        process.
                        <Link
                          href="/tos"
                          className={cn(
                            "ml-2 p-2 font-semibold text-black underline",
                          )}
                        >
                          TOS
                        </Link>
                      </label>
                      <input
                        className="mr-2"
                        type="checkbox"
                        disabled
                        checked={data.termsAndConditionsAgreement}
                      />
                      <span className="text-gray-600">Yes</span>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
