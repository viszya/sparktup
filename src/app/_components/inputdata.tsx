"use client"

import { useToast } from "@/app/_components/ui/use-toast";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { api } from "@/trpc/react";

const data = {
    fullName: "Alexander Sandberg",
    jobTitle: "Software Developer",
    proEmail: "alexandr@gmail.com",
    username: "alexander",
    location: "Linz, Upper Austria, Austria",
    connections: "500+",
    yearsOfExperience: "8",
    about: "I'm a self-taught, product-minded iOS/macOS Engineer with a background in web development and product design. Due to my curiosity for both design and development, I love working on meaningful products in close collaboration with designers and product people, and being part of the 'why'",
    avaiableForWork: true,
    hasAJob: true,
    exeriences: [
        {
            companyLogoSrc: "/applelogo.png",
            companyName: "Apple",
            companyImgSrc: "/apple.png",
            engagement: "Full-Time",
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
            engagement: "Full-Time",
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
			skillName: "iOS Development",
			color: "red",
			skillDescription: "Proficient in iOS development with a focus on creating seamless and engaging mobile experiences for users.",
		},
		{
			skillName: "Next.js Development",
			color: "purple",
			skillDescription: "Skilled in building robust and scalable web applications using Next.js for efficient server-side rendering.",
		},
		{
			skillName: "React Development",
			color: "teal",
			skillDescription: "Experienced in building dynamic and interactive user interfaces using React for modern web applications.",
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
    profileTags: [
        "ios",
        "developer",
        "apple"
    ],
    interestedTags: [
        "DSFDFS",
        "developer",
        "apple"
    ],
    resumeLink: "https://google.com",
}

export function InputData() {
    const router = useRouter();
    const { toast } = useToast();

    //const updateProfile = api.test.createCompanyProfile.useMutation();
    //const updateTestimonial = api.test.createTestimonial.useMutation();
    //const s = api.user.getProfile.useQuery({ id: "clqst7m140000stm7xvs7wi5k" });

    const profile = api.settings.settingsForm1.useMutation();
    const addSkill = api.settings.settingsForm2.useMutation();
    const addRecommendation = api.settings.addRecommendation.useMutation();
    const addProject = api.settings.addProject.useMutation();
    const addExperience = api.settings.addExperience.useMutation();
    function onSubmit() {
        profile.mutate({
            fullName: data.fullName,
            proEmail: data.proEmail,
            username: data.username,
            location: data.location,
            about: data.about,
            jobTitle: data.jobTitle,
            yearsOfExperience: data.yearsOfExperience,
            availableForWork: data.avaiableForWork,
            hasAJob: data.hasAJob,
            resumeLink: data.resumeLink,
            profileTags: data.profileTags,
            interestedTags: data.interestedTags,
        });
        addSkill.mutate({
            skillName: data.topSkills[0].skillName,
            skillDescription: data.topSkills[0].skillDescription,
            color: data.topSkills[0].color,
        });
        addSkill.mutate({
            skillName: data.topSkills[1].skillName,
            skillDescription: data.topSkills[1].skillDescription,
            color: data.topSkills[1].color,
        });
        addSkill.mutate({
            skillName: data.topSkills[2].skillName,
            skillDescription: data.topSkills[2].skillDescription,
            color: data.topSkills[2].color,
        });
        addRecommendation.mutate({
            name: data.recommendations[0].name,
            jobTitle: data.recommendations[0].jobTitle,
            srcImage: data.recommendations[0].srcImage,
            message: data.recommendations[0].message,
        });
        addRecommendation.mutate({
            name: data.recommendations[1].name,
            jobTitle: data.recommendations[1].jobTitle,
            srcImage: data.recommendations[1].srcImage,
            message: data.recommendations[1].message,
        });
        addRecommendation.mutate({
            name: data.recommendations[2].name,
            jobTitle: data.recommendations[2].jobTitle,
            srcImage: data.recommendations[2].srcImage,
            message: data.recommendations[2].message,
        });
        addProject.mutate({
            name: data.projects[0].name,
            src: data.projects[0].src,
            link: data.projects[0].link,
        });
        addProject.mutate({
            name: data.projects[1].name,
            src: data.projects[1].src,
            link: data.projects[1].link,
        });
        addProject.mutate({
            name: data.projects[2].name,
            src: data.projects[2].src,
            link: data.projects[2].link,
        });
        addProject.mutate({
            name: data.projects[3].name,
            src: data.projects[3].src,
            link: data.projects[3].link,
        });
        addExperience.mutate({
            companyLogoSrc: data.exeriences[0].companyLogoSrc,
            companyName: data.exeriences[0].companyName,
            companyImgSrc: data.exeriences[0].companyImgSrc,
            engagement: data.exeriences[0].engagement,
            relativeOfWork: data.exeriences[0].relativeOfWork,
            jobTitle: data.exeriences[0].jobTitle,
            location: data.exeriences[0].location,
            time: data.exeriences[0].time,
            jobDescriptions: data.exeriences[0].jobDescriptions,
        });
        addExperience.mutate({
            companyLogoSrc: data.exeriences[1].companyLogoSrc,
            companyName: data.exeriences[1].companyName,
            companyImgSrc: data.exeriences[1].companyImgSrc,
            engagement: data.exeriences[1].engagement,
            relativeOfWork: data.exeriences[1].relativeOfWork,
            jobTitle: data.exeriences[1].jobTitle,
            location: data.exeriences[1].location,
            time: data.exeriences[1].time,
            jobDescriptions: data.exeriences[1].jobDescriptions,
        });
        toast({
            title: "Data Inputted!",
        });
    }

    return (
        <div>
            <section>
                <div className="flex flex-col justify-center m-auto">
                    <div className="flex flex-col justify-center text-center md:flex-row md:text-left">
                        <div className="flex flex-col justify-center max-w-2xl p-10 space-y-12">
                            <div className="mt-3 text-3xl tracking-tighter text-black">
                                TEST DATA INPUT
                            </div>
                            <form
                                className="flex flex-col gap-y-9"
                                onSubmit={(e) => {
                                    e.preventDefault();
                                    onSubmit();
                                }}
                            >
                                <div className="col-span-full">
                                    <button
                                        className="items-center justify-center w-full px-6 py-2.5 text-center text-white duration-200 bg-black border-2 border-black rounded-full inline-flex hover:bg-transparent hover:border-black hover:text-black focus:outline-none focus-visible:outline-black text-sm focus-visible:ring-black"
                                        type="submit"
                                    >Apply
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}