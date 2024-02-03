"use client";

import { Badge } from "@/app/_components/ui/badge";
import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  CardFooter,
  Card,
} from "@/app/_components/ui/card";
import Link from "next/link";
import { Button, buttonVariants } from "@/app/_components/ui/button";
import { twp, cn } from "@/server/utils";
import { api } from "@/trpc/react";
import Image from "next/image";
import { Skeleton } from "@/app/_components/ui/skeleton";

export default function Job({ params }: { params: { slug: string } }) {
  console.log(params.slug);
  const res = api.test.getCareer.useQuery({ id: params.slug });
  if (res.isLoading) {
    return (
      <div className=" w-full bg-white">
        <div className={cn(twp().wrapper, " text-white")}>
          <div className="relative z-10 mx-4 my-10 flex flex-col justify-between gap-x-2 rounded-3xl border border-gray-100 bg-black p-4 sm:mx-0 sm:flex-row">
            <div className="">
              <div className="flex flex-col space-y-1.5 p-6">
                <div className="flex items-center space-x-2">
                  <Skeleton className="h-5 w-5 rounded-full" />
                  <Skeleton className="h-[20px] w-[300px]" />
                </div>
                <div className="p-6 pt-0">
                  <Skeleton className="h-[16px] w-[200px]" />
                </div>
              </div>
              <div className="p-6 pt-0">
                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <Skeleton className="h-[16px] w-[100px]" />
                  </div>
                  <div className="flex items-center space-x-2">
                    <Skeleton className="h-[16px] w-[100px]" />
                  </div>
                  <div className="flex items-center space-x-2">
                    <Skeleton className="h-[16px] w-[150px]" />
                  </div>
                  <div className="flex items-center space-x-2">
                    <Skeleton className="h-[16px] w-[150px]" />
                  </div>
                  <div className="flex items-center space-x-2"></div>
                </div>
              </div>
              <div className="flex items-center space-x-4 p-6 pt-0">
                <Skeleton style={{ width: "80px", height: "30px" }} />
              </div>
            </div>
            <div className="flex max-h-80 items-center justify-center overflow-hidden rounded-3xl">
              <Skeleton
                className="rounded-3xl"
                style={{ width: "600px", height: "400px" }}
              />
            </div>
          </div>

          <div className="mx-4 rounded-3xl border-2 border-black bg-black p-4 sm:mx-0 sm:p-8">
              <Skeleton />
            <div className="mt-6">
                <Skeleton className="h-[16px] w-[150px]" />
            </div>
          </div>

          <div className="mx-4 mt-10 sm:mx-0 mb-10 bg-black p-10 rounded-3xl">
            <Skeleton className="h-[800px] w-full" />
          </div>

        </div>
      </div>
    );
  }
  const data = res.data;
  console.log(data);

  return (
    <div className=" w-full bg-white">
      <div className={cn(twp().wrapper, " text-white")}>
        <Card className="mx-4 my-10 flex flex-col gap-x-2 rounded-3xl border-2 border-black bg-black p-4 sm:mx-0 sm:flex-row">
          <div className="">
            <CardHeader>
              <div className="flex items-center space-x-2">
                <Image
                  alt="Company Logo"
                  height="24"
                  src={data.companyLogo}
                  className="rounded-full"
                  width="24"
                />
                <CardTitle className="text-white">{data.position}</CardTitle>
              </div>
              <CardDescription>{data.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <BriefcaseIcon className="h-5 w-5 text-white/60" />
                  <p className="text-sm text-white">
                    {data.pricingDescription}
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  <BuildingIcon className="h-5 w-5 text-white/60" />
                  <p className="text-sm text-white">{data.sizeDescription}</p>
                </div>
                <div className="flex items-center space-x-2">
                  <MusicIcon className="h-5 w-5 text-white/60" />
                  <p className="text-sm text-white">Skills: {data.skills}</p>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircleIcon className="h-5 w-5 text-white/60" />
                  <p className="text-sm text-white">
                    View verifications related to this job post.{" "}
                    <Link className="text-blue-600" href={data.jobLink}>
                      Show all
                    </Link>
                  </p>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex space-x-4">
              <Link
                href={{
                  pathname: "/company/profile/" + data.companyId + "/apply",
                  query: { job: data.position, jobId: data.id },
                }}
                className={cn(
                  " text-white",
                  buttonVariants({ variant: "secondary" }),
                )}
              >
                Apply
              </Link>
            </CardFooter>
          </div>
          <div className="flex max-h-80 items-center justify-center overflow-hidden rounded-3xl">
            <Image
              src={data.thumbnail}
              width="600"
              height="100"
              alt="job-banner"
            />
          </div>
        </Card>

        <div className="mx-4 rounded-3xl border-2 border-black bg-black p-4 sm:mx-0 sm:p-8">
          <div className="mb-2 mt-4 text-lg font-semibold tracking-tight text-white">
            About The Job
          </div>
          <p className="mt-2 text-sm text-white/80">{data.about}</p>
          <div className="mt-6">
            <div className="mb-2 mt-4 text-lg font-semibold tracking-tight text-white">
              Pay found in job post
            </div>
            <p className="mt-2 text-sm font-medium">
              {data.pay} (from job description)
            </p>
          </div>
          {/* <div className="mt-6">
          <div className="mt-4 text-lg font-semibold tracking-tight text-white mb-2">How strong your connection is</div>
          <p className="mt-2 text-sm">3 skills match your profile. Stand out by adding other skills you have.</p>
          <div className="mt-4">
            <h4 className="text-sm font-semibold">Skills associated with the job post</h4>
            <div className="mt-2">
              <Badge variant="secondary">Audio Engineering</Badge>
              <Badge className="ml-2" variant="secondary">
                Audio Recording
              </Badge>
              <Badge className="ml-2" variant="secondary">
                Music
              </Badge>
            </div>
            <p className="mt-4 text-sm">7 skills missing on your profile</p>
            <div className="mt-2">
              <Badge variant="default">Audio Implementation</Badge>
              <Badge className="ml-2" variant="default">
                Communication Design
              </Badge>
              <Badge className="ml-2" variant="default">
                Game Audio
              </Badge>
              <Badge className="ml-2" variant="default">
                Interaction Design
              </Badge>
              <Badge className="ml-2" variant="default">
                Music Technology
              </Badge>
              <Badge className="ml-2" variant="default">
                Post-Production
              </Badge>
              <Badge className="ml-2" variant="default">
                Sound Design
              </Badge>
            </div>
            <Button className="mt-4" variant="outline">
              Add skills
            </Button>
          </div>
        </div> */}
          <div className="mb-2 mt-4 text-lg font-semibold tracking-tight text-white">
            About The Company
          </div>
          <p className="mt-2 text-sm text-white/80">{data.companyAbout}</p>
        </div>

        <div className="mx-4 mt-10 sm:mx-0 ">
          <div className="rounded-3xl border-2 border-black bg-black p-4 sm:p-8">
            <div className="grid grid-cols-3 gap-8">
              <div className="col-span-2">
                <div className="mb-4 border-b border-gray-300 pb-4">
                  <div className="grid grid-cols-3 text-sm text-white/80 sm:flex sm:justify-between">
                    <div>
                      Date posted{" "}
                      <span className="font-semibold">Oct 10, 2023</span>
                    </div>
                    <div>
                      Job number <span className="font-semibold">1633829</span>
                    </div>
                    <div>
                      Travel <span className="font-semibold">0-25 %</span>
                    </div>
                    <div>
                      Role type{" "}
                      <span className="font-semibold">People Manager</span>
                    </div>
                    <div>
                      Discipline{" "}
                      <span className="font-semibold">Audio Design</span>
                    </div>
                    <div>
                      Employment type{" "}
                      <span className="font-semibold">Full-Time</span>
                    </div>
                    <div>
                      Work site{" "}
                      <span className="font-semibold">
                        Up to 50% work from home
                      </span>
                    </div>
                    <div>
                      Profession{" "}
                      <span className="font-semibold">Design & Creative</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="mb-2 text-xl font-semibold">Overview</h2>
              <p className="mb-4 text-white/80">
                343 Industries is the developer of the blockbuster Halo series
                of video games. As part of Xbox Game Studios, the Halo franchise
                encompasses games, television series, novels, comics, licensed
                collectibles, apparel and more. We are looking for new Spartans
                to join our team to build the next generation of games and
                experiences in our award-winning sci-fi universe. Do you have
                experience delivering AAA audio experiences with audio
                post-production, music, sound design, dialogue recording and
                pipelines, and mixing? Do you want to build and develop an audio
                team and stable of partners that can work across stakeholders
                and products to consistently deliver world class audio to
                delight Halo players? If so, the Halo team would love to speak
                with you about becoming our next Audio Director!
              </p>
              <p className="text-white/80">
                Microsoft&apos;s mission is to empower every person and every
                organization on the planet to achieve more. As employees we come
                together with a growth mindset, innovate to empower others, and
                collaborate to realize our shared goals. Each day we build on
                our values of respect, integrity, and accountability to create a
                culture of inclusion where everyone can thrive at work and
                beyond.
              </p>
            </div>
            <div className="mb-8">
              <h2 className="mb-2 text-xl font-semibold">Responsibilities</h2>
              <ul className="list-disc pl-5 text-white/80">
                <li>
                  Collaborate with 343&apos;s creative leaders and stakeholders
                  to define, create, and lead the audio team to deliver on the
                  audio vision for future Halo titles across internal and
                  external teams.
                </li>
                <li>
                  Partner across teams inside the studio to establish tools and
                  workflow for audio team.
                </li>
                <li>
                  Define audio needs, timelines, and milestones clearly to
                  ensure quality and timely delivery.
                </li>
                <li>
                  Create clear audio documentation usable by internal and
                  external teams.
                </li>
                <li>
                  Manage and implement original audio content into the game.
                </li>
                <li>
                  Create adaptive audio and sound effect pipelines and partner
                  with music supervisor on music needs.
                </li>
                <li>
                  Manage dialogue and sound effect pipelines, production, and
                  engineering, and quality assurance needs.
                </li>
                <li>
                  Be a partner with cross-disciplinary design team to iterate
                  over audio and implement music teams to ideate, provide audio
                  and technical assistance, balancing gameplay, and fidelity on
                  music and audio narratives.
                </li>
                <li>
                  Be a consistent source of clarity, positive energy and an
                  exemplar of Microsoft and Xbox values.
                </li>
              </ul>
            </div>
            <div className="mb-8">
              <h2 className="mb-2 text-xl font-semibold text-white">
                Qualifications
              </h2>
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                <div>
                  <h3 className="mb-2 font-semibold">
                    Required/Minimum Qualifications
                  </h3>
                  <ul className="mb-4 list-disc pl-5 text-white/80">
                    <li>
                      Associate&apos;s Degree or certification in Audio Design,
                      Music Technology, or related in audio design AND 5+ years
                      audio or sound design experience
                    </li>
                    <li>
                      OR Bachelor&apos;s Degree in Sound Design, Interactive
                      Design and Development, Communications Design, Human
                      Computer Interaction, Multimedia Design, or related field
                      AND 5+ years audio or sound design experience
                    </li>
                    <li>OR equivalent experience.</li>
                    <li>3+ years people management experience</li>
                    <li>
                      2+ years of experience working on AAA games and managing a
                      team in the capacity of Audio Director, Audio Lead, or
                      equivalent role, leading an audio team through all phases
                      of development.
                    </li>
                  </ul>
                  <h3 className="mb-2 font-semibold">
                    Additional or Preferred Qualifications
                  </h3>
                  <ul className="list-disc pl-5 text-white/80">
                    <li>
                      Associate&apos;s Degree or certification in Audio Design,
                      Music Technology, or related in audio design AND 8+ years
                      audio or sound design experience
                    </li>
                    <li>
                      OR Bachelor&apos;s Degree in Sound Design, Interactive
                      Design and Development, Communications Design, Human
                      Computer Interaction, Multimedia Design, or related field
                      AND 8+ years audio or sound design experience
                    </li>
                    <li>5+ years of equivalent experience.</li>
                    <li>Experience working with Unreal Engine tools.</li>
                  </ul>
                </div>
                <div>
                  <h3 className="mb-2 font-semibold">
                    Audio Design M5 - The typical base pay range for this role
                    across the U.S. is USD $112,000 - $218,400 per year. There
                    is a different range applicable to specific work locations,
                    within the San Francisco Bay Area and New York City
                    metropolitan area, and the base pay range for this role in
                    those locations is USD $145,800 - $238,600 per year.
                  </h3>
                  <p className="text-white/80">
                    Certain roles may be eligible for benefits and other
                    compensation. Find additional benefits and pay information
                    here:{" "}
                    {/* <a className="text-blue-600" href="#">
                      https://careers.microsoft.com/us/en/us-corporate-pay
                    </a> */}
                  </p>
                  {/* <div className="mt-4 flex space-x-2">
                    <Badge variant="default">#gamingjobs</Badge>
                    <Badge variant="default">#343careers</Badge>
                  </div> */}
                </div>
              </div>
            </div>
            <div>
              <h2 className="mb-2 text-xl font-semibold">
                Benefits/perks listed below may vary depending on the nature of
                your employment with Microsoft and the country where you work.
              </h2>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <ul className="list-disc pl-5 text-white/80">
                    <li>Industry leading healthcare</li>
                    <li>Savings and investments</li>
                    <li>Giving programs</li>
                  </ul>
                </div>
                <div>
                  <ul className="list-disc pl-5 text-white/80">
                    <li>Educational resources</li>
                    <li>Maternity and paternity leave</li>
                    <li>Opportunities to network and connect</li>
                    <li>Discounts on products and services</li>
                    <li>Generous time away</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 flex justify-center">
          <Link
            href={{
              pathname: "/company/profile/" + data.companyId + "/apply",
              query: { job: data.position, jobId: data.id },
            }}
            className={cn(" text-cyan-300", buttonVariants())}
          >
            Apply
          </Link>
        </div>
        <div className="mx-4 mb-10 mt-10 grid grid-cols-2 gap-x-8 gap-y-2 text-black sm:mx-0 sm:grid-cols-3 md:grid-cols-4">
          <div className="mb-6 w-full rounded-xl border-black bg-black p-4 text-white shadow-lg">
            <h2 className="mb-2 text-xl font-semibold">Date posted</h2>
            <p>Oct 10, 2023</p>
          </div>
          <div className="mb-6 w-full rounded-xl border-black bg-black p-4 text-white shadow-lg">
            <h2 className="mb-2 text-xl font-semibold">Job number</h2>
            <p>1633829</p>
          </div>
          <div className="mb-6 w-full rounded-xl border-black bg-black p-4 text-white shadow-lg">
            <h2 className="mb-2 text-xl font-semibold">Travel</h2>
            <p>0-25 %</p>
          </div>
          <div className="mb-6 w-full rounded-xl border-black bg-black p-4 text-white shadow-lg">
            <h2 className="mb-2 text-xl font-semibold">Role type</h2>
            <p>People Manager</p>
          </div>
          <div className="mb-6 w-full rounded-xl border-black bg-black p-4 text-white shadow-lg">
            <h2 className="mb-2 text-xl font-semibold">Discipline</h2>
            <p>Audio Design</p>
          </div>
          <div className="mb-6 w-full rounded-xl border-black bg-black p-4 text-white shadow-lg">
            <h2 className="mb-2 text-xl font-semibold">Employment type</h2>
            <p>Full-Time</p>
          </div>
          <div className="mb-6 w-full rounded-xl border-black bg-black p-4 text-white shadow-lg">
            <h2 className="mb-2 text-xl font-semibold">Work site</h2>
            <p>Up to 50% work from home</p>
          </div>
          <div className="mb-6 w-full rounded-xl border-black bg-black p-4 text-white shadow-lg">
            <h2 className="mb-2 text-xl font-semibold">Profession</h2>
            <p>Design & Creative</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function BarChartIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="12" x2="12" y1="20" y2="10" />
      <line x1="18" x2="18" y1="20" y2="4" />
      <line x1="6" x2="6" y1="20" y2="16" />
    </svg>
  );
}

function BriefcaseIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="14" x="2" y="7" rx="2" ry="2" />
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </svg>
  );
}

function BuildingIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="16" height="20" x="4" y="2" rx="2" ry="2" />
      <path d="M9 22v-4h6v4" />
      <path d="M8 6h.01" />
      <path d="M16 6h.01" />
      <path d="M12 6h.01" />
      <path d="M12 10h.01" />
      <path d="M12 14h.01" />
      <path d="M16 10h.01" />
      <path d="M16 14h.01" />
      <path d="M8 10h.01" />
      <path d="M8 14h.01" />
    </svg>
  );
}

function CheckCircleIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  );
}

function MusicIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9 18V5l12-2v13" />
      <circle cx="6" cy="18" r="3" />
      <circle cx="18" cy="16" r="3" />
    </svg>
  );
}
