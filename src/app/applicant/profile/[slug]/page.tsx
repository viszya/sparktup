"use client"

import { twp, cn } from "@/server/utils"
import { Icons } from "@/app/_components/icons";
import Image from "next/image";
import { Button } from "@/app/_components/ui/button";
import { api } from "@/trpc/react";
import Link from "next/link";
import { Drawer, DrawerClose, DrawerContent, DrawerFooter, DrawerHeader, DrawerTrigger } from "@/app/_components/ui/drawer";



export default function ProfilePage({ params }: { params: { slug: string } }) {

	const res = api.user.getProfile.useQuery({ id: params.slug });
	if (res.isLoading) {
		return <div>Loading...</div>;
	}
	const data = res.data;

	return (
		<div className={cn("", twp().wrapper)}>

			{/* Profile Headline */}
			<div className="mt-10 grid grid-flow-col grid-cols-2 md:grid-cols-1 gap-x-6 bg-gray-300/10 p-8 rounded-2xl border-2 border-gray-200">
				<div className=" max-w-[30rem]">
					<div className="flex flex-row gap-x-8 mb-4">
						<Image src="/profile2.png" alt="profile" width={100} height={50} className="rounded-full overflow-hidden" />
						<div>
							<div className="mt-4 text-2xl font-medium tracking-tight text-black sm:text-4xl">{data.fullName}</div>
							<div className="mt-2 mb-4 flex flex-row items-center">
								<div className=" text-lg font-medium leading-6 text-black">{data.jobTitle}</div>
								<Icons.dot className="h-4 w-4 mx-1 text-gray-500" />
								<div className="text-gray-500">@{data.username}</div>
							</div>
						</div>
					</div>
					<div className="flex flex-row gap-x-4">
						<div className="w-full flex flex-row justify-center items-center px-3 py-0.5 text-sm border font-medium text-gray-500 duration-200 rounded-sm ">
							<Icons.pin className="h-4 w-4 mr-2" /> {data.location}
						</div>
						<Link href={data.resumeLink} className="w-full flex flex-row justify-center items-center px-3 py-0.5 text-sm border font-medium text-gray-500 duration-200 rounded-sm hover:text-red-300 hover:border-red-400 hover:scale-95 hover:cursor-pointer">
							<Icons.contact className="h-4 w-4 mr-2" /> View Resume
						</Link>

					</div>
					<Drawer>
						<DrawerTrigger className="text-md mt-6 items-center justify-center w-full px-6 py-2.5 text-center text-white duration-200 bg-black border-2 border-black rounded-lg inline-flex hover:bg-transparent hover:border-black hover:text-black focus:outline-none focus-visible:outline-black focus-visible:ring-black">
							<Icons.user className="h-4 w-4 mr-2" />
							CONNECT
						</DrawerTrigger>
						<DrawerContent className="flex justify-center items-center flex-col">
							<DrawerHeader className="max-w-5xl flex justify-center items-center flex-col">
								<section className="m-10 flex justify-center items-center flex-col">
									<div className="mt-8 text-xl font-medium tracking-tight text-black sm:text-2xl">Contact Information</div>
									<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-4">
										<div className="p-4 bg-gray-300/10 rounded-xl border-2 border-gray-200">
											<p className="text-base text-black font-medium">{data.proEmail}</p>
											<p className="text-sm text-gray-500">Email</p>
										</div>
										<div className="p-4 bg-gray-300/10 rounded-xl border-2 border-gray-200">
											<p className="text-base text-black font-medium">PHONE</p>
											<p className="text-sm text-gray-500">Phone</p>
										</div>
										<div className="p-4 bg-gray-300/10 rounded-xl border-2 border-gray-200">
											<p className="text-base text-black font-medium">{data.location}</p>
											<p className="text-sm text-gray-500">Location</p>
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
                                <div className="w-full p-6 bg-red-100/50 rounded-xl border-2 border-red-100">
                                    <div className="text-2xl font-medium leading-6">{data.connections}</div>
                                    <div className="font-light">Connections</div>
                                </div>
                                <div className="w-full p-6 bg-teal-100/50 rounded-xl border-2 border-teal-100">
                                    <div className="text-2xl font-medium leading-6">{data.yearsOfExperience}</div>
                                    <div className="font-light">Years of Experience</div>
                                </div>
                            </div> */}
					<div>
						<div className="mt-8 text-xl font-medium tracking-tight text-black sm:text-2xl">About</div>
						<div className="mt-2 text-gray-500">{data.about}</div>
					</div>
				</div>
				<div>
					<Image src="/banner.png" alt="profile" width={400} height={150} className="rounded-2xl overflow-hidden" />
					<div className="mt-4 w-full flex flex-row justify-center items-center px-3 py-0.5 text-sm border border-green-300/60 bg-green-300/10 font-base text-green-500 duration-200 rounded-sm">
						<span className="relative flex h-2 w-2 mr-3">
							<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
							<span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
						</span>
						{data.avaiableForWork ? "Available for Work" : "Occupied"}
					</div>
					<div className="mt-5 w-full p-6 bg-primary/10 rounded-xl border-2 border-primary">
						<div className="text-2xl font-medium leading-6">{data.yearsOfExperience}</div>
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
			<section className="">
				<div className="my-4 text-2xl font-medium tracking-tight text-black sm:text-4xl">Experiences</div>
				<div className="items-center py-4 mx-auto px-14 max-w-7xl bg-gray-300/10 p-8 rounded-2xl border-2 border-gray-200">
					<ul className="w-full divide-y divide-mercury-300" role="list">
						{data.experiences.map((data: any) => (
							<li className="py-4 lg:py-8">
								<div className="grid items-start grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-24">
									<div className="lg:col-span-2 lg:order-last">
										<p className="text-lg font-medium leading-6 text-black">
											{data.jobTitle}
										</p>
										<ul className="mt-2 text-gray-500 space-y-2">
											{data.jobDescriptions.map((description: String) => (
												<li> - {description}</li>
											))}
										</ul>
									</div>
									<div className="justify-center items-center gap-3">
										<div className="flex flex-row gap-x-4 items-center mb-2">
											<img alt="" className="object-cover w-10 h-10 rounded-full lg:h-16 lg:w-16" src={data.companyLogoSrc} />
											<p className="text-lg font-medium leading-6 text-black">
												{data.companyName}
											</p>
										</div>
										<div className="flex-1 min-w-0 mb-4">
											<p className="text-sm text-gray-500">
												<span className="text-base text-black">{data.engangment} · {data.relativeOfWork}</span> <br />
												<div className="mt-2 flex flex-row items-center">
													<Icons.hourglass className="h-4 w-4 mr-2" />
													{data.time}
												</div>
												<div className="flex flex-row items-center">
													<Icons.pin className="h-4 w-4 mr-2" />
													{data.location}
												</div>
											</p>
										</div>
										<Image src={data.companyImgSrc} className="rounded-xl shadow-lg" height={100} width={200} alt="apple-banner" />
									</div>
								</div>
							</li>
						))}
					</ul>
				</div>
			</section>

			{/* Top 3 Skills */}
			<section className="">
				<div className="mt-4 mb-4 text-2xl font-medium tracking-tight text-black sm:text-4xl">Top Skills</div>
				<div className="relative items-center w-full px-2 py-10 mx-auto md:px-12 lg:px-20 max-w-7xl bg-gray-300/10 p-8 rounded-2xl border-2 border-gray-200">
					<div className="grid w-full grid-cols-1 mx-auto lg:grid-cols-3">
						{data.topSkills.map((data: any) => (
							<div className="max-w-md p-6 mx-auto">
								<div className="gap-3 lg:inline-flex lg:items-center">
									<div className={cn("flex items-center justify-center w-12 h-12 text-black rounded-xl", `bg-primary/20`)}>
										❖
									</div>
									<p className="mt-4 text-lg font-medium leading-6 text-black lg:mt-0">
										{data.skillName}
									</p>
								</div>
								<p className="mt-3 text-base text-gray-500">
									{data.skillDescription}
								</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Reccomendations */}
			<section className="">
				<div className="my-4 text-2xl font-medium tracking-tight text-black sm:text-4xl">Reccomendations</div>
				<div className="items-center py-4 mx-auto px-14 max-w-7xl bg-gray-300/10 p-8 rounded-2xl border-2 border-gray-200">
					<ul className="w-full divide-y divide-mercury-300" role="list">
						{data.recommendations.map((data: any) => (
							<li className="py-4 lg:py-8">
								<div className="grid items-start grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-24">
									<div className="lg:col-span-2 lg:order-last">
										<p className="text-base text-gray-500">
											{data.message}
										</p>
									</div>
									<div className="inline-flex items-center gap-3">
										<div className="flex-shrink-0">
											<img alt="" className="object-cover w-10 h-10 rounded-full lg:h-16 lg:w-16" src={data.srcImage} />
										</div>
										<div className="flex-1 min-w-0">
											<p className="text-lg font-medium leading-6 text-black">
												{data.name}
											</p>
											<p className="text-sm text-gray-500">
												{data.jobTitle}
											</p>
										</div>
									</div>
								</div>
							</li>
						))}
					</ul>
				</div>
			</section>


			{/* Projects */}
			<section className="">
				<div className="my-4 text-2xl font-medium tracking-tight text-black sm:text-4xl">Projects</div>
				<div className="bg-gray-300/10 p-8 rounded-2xl border-2 border-gray-200">
					<div className="relative items-center w-full px-5 py-2 mx-auto md:px-4 lg:px-8 max-w-7xl">
						<div className="grid grid-cols-2 col-span-2 gap-8">
							{data.projects.map((data: any) => (
								<Link href={data.link} className="p-2 bg-gray-300/10 rounded-2xl border-2 border-gray-200 flex flex-col justify-center items-center hover:bg-gray-300/20">
									<div className="my-4 text-xl ">{data.name}</div>
									<Image className="rounded-2xl" src={data.src} width={400} height={300} alt="project" />
								</Link>
							))}
						</div>
					</div>
				</div>
			</section>


			{/* View Resume */}
			<section className="">
				<div className="my-4 text-2xl font-medium tracking-tight text-black sm:text-4xl">Resume</div>
				<div className="bg-gray-300/10 p-8 rounded-2xl border-2 border-gray-200">
					<div className="px-4 py-6 mx-auto max-w-7xl  lg:px-8">
						<div className="px-6 sm:px-40 py-6 bg-red-100/50 border-2 border-red-100 rounded-3xl flex flex-row items-center">
							<div className="xl:w-0 xl:flex-1">
								<p className="flex flex-row items-center text-5xl text-black ">
									View Resume
								</p>
							</div>
							<Link href={data.resumeLink} className="text-md items-center justify-center w-40 px-6 py-2.5 text-center text-white duration-200 bg-black border-2 border-black rounded-lg inline-flex hover:bg-transparent hover:border-black hover:text-black focus:outline-none focus-visible:outline-black focus-visible:ring-black">
								View
								<Icons.export className="ml-4 h-4 w-4" />
							</Link>
						</div>
					</div>
				</div>
			</section>
		</div >
	)
}
