import { twp, cn } from "@/server/utils"
import { Icons } from "@/app/_components/icons";
import Image from "next/image";
import { Button } from "@/app/_components/ui/button";
import { api } from "@/trpc/react";


const data = {
	fullName: "Alexander Sandberg",
	jobTitle: "Software Developer",
	username: "alexander",
	location: "Linz, Upper Austria, Austria",
	connections: "500+",
	yearsOfExperience: "8",
	about: "I'm a self-taught, product-minded iOS/macOS Engineer with a background in web development and product design. Due to my curiosity for both design and development, I love working on meaningful products in close collaboration with designers and product people, and being part of the 'why'",
	avaiableForWork: true,
	exeriences: [
		{
			companyLogoSrc: "/applelogo.png",
			companyName: "Apple",
			companyImgSrc: "/apple.png",
			engangment: "Full-Time",
			relativeOfWork: "Remote",
			jobTitle: "Senior iOS Developer",
			location: "Linz, Upper Austria, Austria",
			time: "Nov 2021 - Sep 2023 · 1 yr 11 mos",
			jobDescriptions: [
				"Designed, developed, and owned the administrative tool for Apple's internal systems; Apple Admin Hub",
				"Led the development and successful launch of iPadOS support for the Apple News app",
				"Spearheaded the development, release, and ongoing management of the Apple News app for iOS devices",
				"Collaborated closely with the iOS development team to ensure the implementation of clean and concise code",
			],
		},
		{
			companyLogoSrc: "/applelogo.png",
			companyName: "Apple",
			companyImgSrc: "/apple.png",
			engangment: "Full-Time",
			relativeOfWork: "Remote",
			jobTitle: "Senior iOS Developer",
			location: "Linz, Upper Austria, Austria",
			time: "Nov 2021 - Sep 2023 · 1 yr 11 mos",
			jobDescriptions: [
				"Designed, developed, and owned the administrative tool for Apple's internal systems; Apple Admin Hub",
				"Led the development and successful launch of iPadOS support for the Apple News app",
				"Spearheaded the development, release, and ongoing management of the Apple News app for iOS devices",
				"Collaborated closely with the iOS development team to ensure the implementation of clean and concise code",
			],
		},
	],
	projects: [
		{
			name: "UI Masterclass",
			src: "/dashboard-preview.png",
			link: "https://google.com",
		},
		{
			name: "UI Masterclass",
			src: "/dashboard-preview.png",
			link: "https://google.com",
		},
		{
			name: "UI Masterclass",
			src: "/dashboard-preview.png",
			link: "https://google.com",
		},
		{
			name: "UI Masterclass",
			src: "/dashboard-preview.png",
			link: "https://google.com",
		},
	],
	topSkills: [
		{
			name: "iOS Development",
			color: "red",
			description: "Proficient in iOS development with a focus on creating seamless and engaging mobile experiences for users.",
		},
		{
			name: "Next.js Development",
			color: "purple",
			description: "Skilled in building robust and scalable web applications using Next.js for efficient server-side rendering.",
		},
		{
			name: "React Development",
			color: "teal",
			description: "Experienced in building dynamic and interactive user interfaces using React for modern web applications.",
		},
	],
	recommendations: [
		{
			name: "Volkan Kaya",
			jobTitle: "Founder of Versoly.com",
			srcImage: "/profile2.png",
			message: "Snowflake is a cloud data platform that enables data storage, processing, and analytics solutions for businesses. With the Data Cloud platform, Snowflake manages the complexities of data storage infrastructure, enabling organizations to focus on building data-driven solutions",
		
		},
		{
			name: "Amrit Nagi",
			jobTitle: "Founder of Tailwind Toolbox",
			srcImage: "/profile2.png",
			message: "Upswing securities passively index inverse bondholders capitalization financial health Moody's debt managed. Receive bondholders called capitalization investment grade bonds bills management district stocks. Potential funds consulting expenses.",
		
		},
		{
			name: "Mike Jones",
			jobTitle: "Blogger at Raspada",
			srcImage: "/profile2.png",
			message: "Debt bills lucrative capitalization municipal bonds government 401k bear bull credit corporate bonds called NYSE finance. Managed prices bondholders federal risk NASDAQ hedge fund expenses municipal bonds management.",
		},
	],
	tags: [
		"ios",
		"developer",
		"apple"
	],
	resumeLink: "https://google.com",
}


export default function Profile() {

	// const data = api.profile.getData.query();

	return (
		<div className={cn("", twp().wrapper)} >

			{/* Profile Headline */}
			<div className="grid grid-flow-col grid-cols-2 md:grid-cols-1 gap-x-6 m-10 bg-gray-300/10 p-8 rounded-2xl border-2 border-gray-200">
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
						<div className="w-full flex flex-row justify-center items-center px-3 py-0.5 text-sm border font-medium text-gray-500 duration-200 rounded-sm hover:text-red-300 hover:border-red-400 hover:scale-95 hover:cursor-pointer">
							<Icons.contact className="h-4 w-4 mr-2" /> View Resume
						</div>


					</div>
					<Button className="text-md mt-6 items-center justify-center w-full px-6 py-2.5 text-center text-white duration-200 bg-black border-2 border-black rounded-lg inline-flex hover:bg-transparent hover:border-black hover:text-black focus:outline-none focus-visible:outline-black focus-visible:ring-black">
						<Icons.user className="h-4 w-4 mr-2" />
						CONNECT
					</Button>
					<div className="flex flex-row my-4 gap-x-4">
						<div className="w-full p-6 bg-red-100/50 rounded-xl border-2 border-red-100">
							<div className="text-2xl font-medium leading-6">{data.connections}</div>
							<div className="font-light">Connections</div>
						</div>
						<div className="w-full p-6 bg-teal-100/50 rounded-xl border-2 border-teal-100">
							<div className="text-2xl font-medium leading-6">{data.yearsOfExperience}</div>
							<div className="font-light">Years of Experience</div>
						</div>
					</div>
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
			<section className="m-10">
				<div className="my-4 text-2xl font-medium tracking-tight text-black sm:text-4xl">Experiences</div>
				<div className="items-center py-4 mx-auto px-14 max-w-7xl bg-gray-300/10 p-8 rounded-2xl border-2 border-gray-200">
					<ul className="w-full divide-y divide-mercury-300" role="list">
						{data.exeriences.map((data: any) => (
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
			<section className="m-10">
				<div className="mt-4 mb-4 text-2xl font-medium tracking-tight text-black sm:text-4xl">Top Skills</div>
				<div className="relative items-center w-full px-2 py-10 mx-auto md:px-12 lg:px-20 max-w-7xl bg-gray-300/10 p-8 rounded-2xl border-2 border-gray-200">
					<div className="grid w-full grid-cols-1 mx-auto lg:grid-cols-3">
						{data.topSkills.map((data:any) =>  (
							<div className="max-w-md p-6 mx-auto">
							<div className="gap-3 lg:inline-flex lg:items-center">
								<div className={cn("flex items-center justify-center w-12 h-12 text-black rounded-xl", `bg-${data.color}-100/70`)}>
									❖
								</div>
								<p className="mt-4 text-lg font-medium leading-6 text-black lg:mt-0">
									{data.name}
								</p>
							</div>
							<p className="mt-3 text-base text-gray-500">
								{data.description}
							</p>
						</div>
						))}
					</div>
				</div>
			</section>

			{/* Reccomendations */}
			<section className="m-10">
				<div className="my-4 text-2xl font-medium tracking-tight text-black sm:text-4xl">Reccomendations</div>
				<div className="items-center py-4 mx-auto px-14 max-w-7xl bg-gray-300/10 p-8 rounded-2xl border-2 border-gray-200">
					<ul className="w-full divide-y divide-mercury-300" role="list">
						{data.recommendations.map((data:any) => (
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
			<section className="m-10">
				<div className="my-4 text-2xl font-medium tracking-tight text-black sm:text-4xl">Projects</div>
				<div className="bg-gray-300/10 p-8 rounded-2xl border-2 border-gray-200">
					<div className="relative items-center w-full px-5 py-2 mx-auto md:px-4 lg:px-8 max-w-7xl">
						<div className="grid grid-cols-2 col-span-2 gap-8">
							{data.projects.map((data:any) => (
								<div className="p-2 bg-gray-300/10 rounded-2xl border-2 border-gray-200 flex flex-col justify-center items-center">
								<div className="my-4 text-xl ">{data.name}</div>
								<Image className="rounded-2xl" src={data.src} width={400} height={300} alt="project" />
							</div>
							))}
						</div>
					</div>
				</div>
			</section>


			{/* View Resume */}
			<section className="m-10">
				<div className="my-4 text-2xl font-medium tracking-tight text-black sm:text-4xl">Resume</div>
				<div className="bg-gray-300/10 p-8 rounded-2xl border-2 border-gray-200">
					<div className="px-4 py-6 mx-auto max-w-7xl  lg:px-8">
						<div className="px-6 sm:px-40 py-6 bg-red-100/50 border-2 border-red-100 rounded-3xl flex flex-row items-center">
							<div className="xl:w-0 xl:flex-1">
								<p className="flex flex-row items-center text-5xl text-black ">
									View Resume
								</p>
							</div>
							<Button className="text-md items-center justify-center w-40 px-6 py-2.5 text-center text-white duration-200 bg-black border-2 border-black rounded-lg inline-flex hover:bg-transparent hover:border-black hover:text-black focus:outline-none focus-visible:outline-black focus-visible:ring-black">
								View
								<Icons.export className="ml-4 h-4 w-4" />
							</Button>
						</div>
					</div>
				</div>
			</section>

		</div>
	)
}
