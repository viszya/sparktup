"use client"

import { useToast } from "@/app/_components/ui/use-toast";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { api } from "@/trpc/react";
const data = {
	fullName: "Alexander Sandberg",
	jobTitle: "Software Developer",
	username: "alexander",
	location: "Linz, Upper Austria, Austria",
	connections: "500+",
	yearsOfExperience: "8",
	about: "I'm a self-taught, product-minded iOS/macOS Engineer with a background in web development and product design. Due to my curiosity for both design and development, I love working on meaningful products in close collaboration with designers and product people, and being part of the 'why'",
	availableForWork: true,
	// experiences: [
	// 	{
	// 		companyLogoSrc: "/applelogo.png",
	// 		companyName: "Apple",
	// 		companyImgSrc: "/apple.png",
	// 		engangment: "Full-Time",
	// 		relativeOfWork: "Remote",
	// 		jobTitle: "Senior iOS Developer",
	// 		location: "Linz, Upper Austria, Austria",
	// 		time: "Nov 2021 - Sep 2023 · 1 yr 11 mos",
	// 		jobDescriptions: [
	// 			"Designed, developed, and owned the administrative tool for Apple's internal systems; Apple Admin Hub",
	// 			"Led the development and successful launch of iPadOS support for the Apple News app",
	// 			"Spearheaded the development, release, and ongoing management of the Apple News app for iOS devices",
	// 			"Collaborated closely with the iOS development team to ensure the implementation of clean and concise code",
	// 		],
	// 	},
	// 	{
	// 		companyLogoSrc: "/applelogo.png",
	// 		companyName: "Apple",
	// 		companyImgSrc: "/apple.png",
	// 		engangment: "Full-Time",
	// 		relativeOfWork: "Remote",
	// 		jobTitle: "Senior iOS Developer",
	// 		location: "Linz, Upper Austria, Austria",
	// 		time: "Nov 2021 - Sep 2023 · 1 yr 11 mos",
	// 		jobDescriptions: [
	// 			"Designed, developed, and owned the administrative tool for Apple's internal systems; Apple Admin Hub",
	// 			"Led the development and successful launch of iPadOS support for the Apple News app",
	// 			"Spearheaded the development, release, and ongoing management of the Apple News app for iOS devices",
	// 			"Collaborated closely with the iOS development team to ensure the implementation of clean and concise code",
	// 		],
	// 	},
	// ],
	// projects: [
	// 	{
	// 		name: "UI Masterclass",
	// 		src: "/dashboard-preview.png",
	// 		link: "https://google.com",
	// 	},
	// 	{
	// 		name: "UI Masterclass",
	// 		src: "/dashboard-preview.png",
	// 		link: "https://google.com",
	// 	},
	// 	{
	// 		name: "UI Masterclass",
	// 		src: "/dashboard-preview.png",
	// 		link: "https://google.com",
	// 	},
	// 	{
	// 		name: "UI Masterclass",
	// 		src: "/dashboard-preview.png",
	// 		link: "https://google.com",
	// 	},
	// ],
	// topSkills: [
	// 	{
	// 		name: "iOS Development",
	// 		color: "red",
	// 		description: "Proficient in iOS development with a focus on creating seamless and engaging mobile experiences for users.",
	// 	},
	// 	{
	// 		name: "Next.js Development",
	// 		color: "purple",
	// 		description: "Skilled in building robust and scalable web applications using Next.js for efficient server-side rendering.",
	// 	},
	// 	{
	// 		name: "React Development",
	// 		color: "teal",
	// 		description: "Experienced in building dynamic and interactive user interfaces using React for modern web applications.",
	// 	},
	// ],
	// recommendations: [
	// 	{
	// 		name: "Volkan Kaya",
	// 		jobTitle: "Founder of Versoly.com",
	// 		srcImage: "/profile2.png",
	// 		message: "Snowflake is a cloud data platform that enables data storage, processing, and analytics solutions for businesses. With the Data Cloud platform, Snowflake manages the complexities of data storage infrastructure, enabling organizations to focus on building data-driven solutions",

	// 	},
	// 	{
	// 		name: "Amrit Nagi",
	// 		jobTitle: "Founder of Tailwind Toolbox",
	// 		srcImage: "/profile2.png",
	// 		message: "Upswing securities passively index inverse bondholders capitalization financial health Moody's debt managed. Receive bondholders called capitalization investment grade bonds bills management district stocks. Potential funds consulting expenses.",

	// 	},
	// 	{
	// 		name: "Mike Jones",
	// 		jobTitle: "Blogger at Raspada",
	// 		srcImage: "/profile2.png",
	// 		message: "Debt bills lucrative capitalization municipal bonds government 401k bear bull credit corporate bonds called NYSE finance. Managed prices bondholders federal risk NASDAQ hedge fund expenses municipal bonds management.",
	// 	},
	// ],
	tags: [
		"ios",
		"developer",
		"apple"
	],
	resumeLink: "https://google.com",
}


export function TestForm() {
	const router = useRouter();
	const { toast } = useToast();

	const updateProfile = api.user.updateProfile.useMutation({
		// onSuccess: () => {
		//   router.push("/onboarding/form-2");
		// },
	});
	const s = api.user.getProfile.useQuery({ id: "clqst7m140000stm7xvs7wi5k" });


	function onSubmit() {
		toast({
			title: "Form submitted!",
			description: "Friday, February 10, 2023 at 5:57 PM",
		});
		updateProfile.mutate(data);
		console.log(s);
	}

	return (
		<section>
			<div className="flex flex-col justify-center m-auto">
				<div className="flex flex-col justify-center text-center md:flex-row md:text-left">
					<div className="flex flex-col justify-center max-w-2xl p-10 space-y-12">
						<article>
							<span className="inline-flex items-center text-black rounded-xl">
								<span className="font-mono text-sm" aria-hidden="true">
									01
								</span>
							</span>
							<div className="mt-3 text-3xl tracking-tighter text-black">
								Welcome! Let&apos;s get started.
							</div>
							<div className="mt-4 text-gray-500">
								Let&apos;s get to know each other. Please fill out the following
								form to the best of your ability. All this information will be
								used to create your profile. You can always edit your profile
								later.
							</div>
						</article>

						<form
							className="flex flex-col gap-y-9"
							onSubmit={(e) => {
								e.preventDefault();
								onSubmit();
							}}
						>
							{/* ... Existing form fields ... */}

							<div className="col-span-full">
								<button
									className="items-center justify-center w-full px-6 py-2.5 text-center text-white duration-200 bg-black border-2 border-black rounded-full inline-flex hover:bg-transparent hover:border-black hover:text-black focus:outline-none focus-visible:outline-black text-sm focus-visible:ring-black"
									type="submit"
									disabled={updateProfile.isLoading}
								>
									{updateProfile.isLoading ? "Submitting..." : "Submit your request"}
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
}
