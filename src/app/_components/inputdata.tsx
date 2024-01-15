"use client"

import { useToast } from "@/app/_components/ui/use-toast";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { api } from "@/trpc/react";

const data = [
    {
        fullName: "Alexander Sandberg",
        jobTitle: "Software Developer",
        proEmail: "alexandr@gmail.com",
        username: "alexander",
        phone: "+43 123 456 789",
        location: "Linz, Upper Austria, Austria",
        connections: "500+",
        yearsOfExperience: "8",
        about: "I'm a self-taught, product-minded iOS/macOS Engineer with a background in web development and product design. Due to my curiosity for both design and development, I love working on meaningful products in close collaboration with designers and product people, and being part of the 'why'",
        avaiableForWork: true,
        hasAJob: true,
        profileSrc: "/profile2.png",
        experiences: [
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
    },
    {
      fullName: "Emma Clarke",
      jobTitle: "Frontend Developer",
      proEmail: "emma_clarke@gmail.com",
      profileSrc: "/applicant2.png",
      username: "emmaclarke",
      phone: "+44 752 334 5678",
      location: "Manchester, England, UK",
      connections: "350+",
      yearsOfExperience: "5",
      about: "Passionate Frontend Developer specializing in JavaScript and React. Enjoys crafting visually appealing and user-friendly websites. Excels in team collaboration and stays abreast of the latest web technologies.",
      avaiableForWork: false,
      hasAJob: true,
      experiences: [
        {
          companyLogoSrc: "/applelogo.png",
          companyName: "Google",
          companyImgSrc: "/google.png",
          engagement: "Full-Time",
          relativeOfWork: "On-Site",
          jobTitle: "Web Developer",
          location: "London, UK",
          time: "Jan 2020 - Present",
          jobDescriptions: [
            "Developed and maintained the user interface of Google Ads",
            "Worked with cross-functional teams to design and implement new features",
            "Optimized website performance for a seamless user experience",
          ],
        },
        {
          companyLogoSrc: "/applelogo.png",
          companyName: "Freelance",
          companyImgSrc: "/freelance.png",
          engagement: "Contract",
          relativeOfWork: "Remote",
          jobTitle: "Freelance Web Developer",
          location: "Manchester, England, UK",
          time: "Jun 2018 - Dec 2019",
          jobDescriptions: [
            "Designed and developed custom websites for small businesses",
            "Provided ongoing maintenance and updates for clients' websites",
            "Collaborated with clients to understand their needs and deliver effective solutions",
          ],
        },
      ],
      projects: [
        {
          name: "E-commerce Redesign",
          src: "/dashboard-preview.png",
          link: "https://google.com",
        },
        {
          name: "Portfolio Website",
          src: "/dashboard-preview.png",
          link: "https://google.com",
        },
        {
          name: "Interactive Data Visualization",
          src: "/dashboard-preview.png",
          link: "https://google.com",
        },
        {
          name: "Restaurant Website Revamp",
          src: "/dashboard-preview.png",
          link: "https://google.com",
        },
      ],
      topSkills: [
        {
          skillName: "JavaScript",
          color: "yellow",
          skillDescription: "Advanced proficiency in JavaScript, crafting dynamic and responsive web applications.",
        },
        {
          skillName: "React",
          color: "blue",
          skillDescription: "Expert in React, creating efficient and reusable front-end components.",
        },
        {
          skillName: "CSS",
          color: "green",
          skillDescription: "Strong skills in CSS, focusing on responsive and visually appealing design.",
        },
      ],
      recommendations: [
        {
          name: "John Doe",
          jobTitle: "Senior Developer at TechCorp",
          srcImage: "/profile2.png",
          message: "Emma is a highly skilled developer with a keen eye for detail. Her ability to transform complex designs into functional websites is remarkable.",
        },
        {
          name: "Sarah Lee",
          jobTitle: "Project Manager at WebWorks",
          srcImage: "/profile2.png",
          message: "Working with Emma has always been a pleasure. She brings a combination of technical expertise and creativity to the team.",
        },
        {
          name: "David Smith",
          jobTitle: "CTO at InnovateNow",
          srcImage: "/profile2.png",
          message: "Emma's contributions to our frontend projects have been invaluable. She is not only technically proficient but also great at problem-solving.",
        },
      ],
      profileTags: [
        "javascript",
        "frontend",
        "react",
      ],
      interestedTags: [
        "web development",
        "UI/UX",
        "react",
      ],
      resumeLink: "https://google.com",
    },
    {
      fullName: "Isabella García",
      jobTitle: "UX/UI Designer",
      proEmail: "isabella.garcia@example.com",
      username: "isabellagarcia",
      phone: "+34 678 901 234",
      location: "Madrid, Spain",
      connections: "450+",
      yearsOfExperience: "6",
      about: "Creative and detail-oriented UX/UI Designer with a passion for creating intuitive and user-friendly digital experiences. My focus is on designing for both functionality and aesthetic appeal.",
      avaiableForWork: false,
      profileSrc: "/applicant3.jpeg",
      hasAJob: true,
      experiences: [
        {
          companyLogoSrc: "/applelogo.png",
          companyName: "Creative Studio",
          companyImgSrc: "/creative.png",
          engagement: "Full-Time",
          relativeOfWork: "In-Office",
          jobTitle: "Senior UX/UI Designer",
          location: "Madrid, Spain",
          time: "Feb 2018 - Present",
          jobDescriptions: [
            "Lead designer for several mobile app projects, focusing on user experience and interface design",
            "Conducted user research and testing to inform design decisions",
            "Collaborated with developers to ensure design consistency and usability",
          ],
        },
      ],
      projects: [
        {
          name: "Mobile App Redesign",
          src: "/dashboard-preview.png",
          link: "https://google.com/",
        },
      ],
      topSkills: [
        {
          skillName: "User Experience Design",
          color: "purple",
          skillDescription: "Expert in crafting user-centric designs and improving user experience.",
        },
        {
          skillName: "Interface Design",
          color: "blue",
          skillDescription: "Skilled in creating visually appealing and intuitive user interfaces.",
        },
        {
          skillName: "User Research",
          color: "green",
          skillDescription: "Proficient in conducting user research to inform design strategies.",
        },
      ],
      recommendations: [
        {
          name: "Carlos Rodríguez",
          jobTitle: "CEO at Design Innovate",
          srcImage: "/profile2.png",
          message: "Isabella is an exceptional designer whose work consistently exceeds expectations in both creativity and usability.",
        },
      ],
      profileTags: [
        "ux",
        "ui",
        "design",
      ],
      interestedTags: [
        "user experience",
        "interface design",
        "user research",
      ],
      resumeLink: "https://google.com/",
    },
    {
      fullName: "Marcus Li",
      jobTitle: "Full Stack Developer",
      proEmail: "marcus.li@example.com",
      username: "marcusli",
      phone: "+1 555 789 012",
      location: "Toronto, Canada",
      connections: "200+",
      profileSrc: "/applicant4.jpeg",
      yearsOfExperience: "3",
      about: "Eager Full Stack Developer with a strong foundation in both front-end and back-end technologies, especially in the MERN stack. I love to solve complex problems with efficient and elegant code.",
      avaiableForWork: true,
      hasAJob: false,
      experiences: [
        {
          companyLogoSrc: "/applelogo.png",
          companyName: "Startup Tech Inc",
          companyImgSrc: "/tech.png",
          engagement: "Contract",
          relativeOfWork: "Remote",
          jobTitle: "Full Stack Developer",
          location: "Toronto, Canada",
          time: "May 2022 - Present",
          jobDescriptions: [
            "Developed full-stack web applications for client projects using the MERN stack",
            "Collaborated with designers to create user-friendly interfaces",
            "Implemented RESTful APIs and integrated third-party APIs",
          ],
        },
      ],
      projects: [
        {
          name: "E-Commerce Platform",
          src: "/dashboard-preview.png",
          link: "https://google.com/",
        },
      ],
      topSkills: [
        {
          skillName: "MERN Stack",
          color: "orange",
          skillDescription: "Competent in MongoDB, Express.js, React, and Node.js for full stack development.",
        },
        {
          skillName: "Web Design",
          color: "pink",
          skillDescription: "Skilled in creating responsive and visually appealing web interfaces.",
        },
        {
          skillName: "API Development",
          color: "yellow",
          skillDescription: "Experienced in developing and integrating RESTful APIs for seamless data exchange.",
        },
      ],
      recommendations: [
        {
          name: "Laura Smith",
          jobTitle: "Project Manager at Web Innovations",
          srcImage: "/profile2.png",
          message: "Marcus has an exceptional ability to translate complex requirements into functional web solutions.",
        },
      ],
      profileTags: [
        "fullstack",
        "mern",
        "web development",
      ],
      interestedTags: [
        "software engineering",
        "api development",
        "react",
      ],
      resumeLink: "https://google.com/",
    },
    {
      fullName: "Elena Torres",
      jobTitle: "Backend Engineer",
      profilrSrc: "/applicant5.jpeg",
      proEmail: "elena.torres@example.com",
      username: "elenatorres",
      phone: "+44 234 567 890",
      location: "Berlin, Germany",
      connections: "350+",
      yearsOfExperience: "5",
      about: "A passionate Backend Engineer specializing in Java and cloud services. I enjoy creating scalable and efficient back-end systems, focusing on optimizing performance and security.",
      avaiableForWork: false,
      hasAJob: true,
      experiences: [
        {
          companyLogoSrc: "/applelogo.png",
          companyName: "Google",
          companyImgSrc: "/google.png",
          engagement: "Full-Time",
          relativeOfWork: "In-Office",
          jobTitle: "Lead Backend Developer",
          location: "Berlin, Germany",
          time: "Jan 2020 - Present",
          jobDescriptions: [
            "Developed and maintained scalable back-end architecture for Google's internal analytics tools",
            "Led a team of developers in creating cloud-based solutions for various Google products",
            "Implemented security protocols for sensitive data management in backend systems",
          ],
        },
      ],
      projects: [
        {
          name: "Backend Efficiency",
          src: "/dashboard-preview.png",
          link: "https://google.com/",
        },
      ],
      topSkills: [
        {
          skillName: "Java Development",
          color: "blue",
          skillDescription: "Expert in Java, focusing on backend systems and data processing efficiency.",
        },
        {
          skillName: "Cloud Computing",
          color: "gray",
          skillDescription: "Knowledgeable in cloud services and infrastructure, experienced in AWS and GCP.",
        },
        {
          skillName: "Database Management",
          color: "green",
          skillDescription: "Proficient in SQL and NoSQL database technologies, emphasizing data security and integrity.",
        },
      ],
      recommendations: [
        {
          name: "Sarah Johnson",
          jobTitle: "CTO at Tech Solutions",
          srcImage: "/profile2.png",
          message: "Elena is a phenomenal backend developer with a keen understanding of cloud infrastructure and data security.",
        },
      ],
      profileTags: [
        "backend",
        "java",
        "google",
      ],
      interestedTags: [
        "cloud computing",
        "data security",
        "backend development",
      ],
      resumeLink: "https://google.com/",
    },
    {
    fullName: "Alex Johnson",
    jobTitle: "Software Engineer",
    profileSrc:"/applicant6.jpeg",
    proEmail: "alex.johnson@example.com",
    username: "alexjohnson",
    phone: "+1 123 456 7890",
    location: "San Francisco, USA",
    connections: "150+",
    yearsOfExperience: "4",
    about: "Versatile Software Engineer with experience in both front-end and back-end development. Enjoys tackling challenging problems and is passionate about writing clean and efficient code.",
    avaiableForWork: true,
    hasAJob: false,
    experiences: [
      {
        companyLogoSrc: "/companylogo.png",
        companyName: "Tech Innovations",
        companyImgSrc: "/techinnovations.png",
        engagement: "Full-Time",
        relativeOfWork: "Hybrid",
        jobTitle: "Software Engineer",
        location: "San Francisco, USA",
        time: "Aug 2021 - Present",
        jobDescriptions: [
          "Collaborated with cross-functional teams to develop and deploy new features",
          "Implemented and maintained RESTful APIs for various projects",
          "Contributed to the design and architecture of scalable software solutions",
        ],
      },
      // Add more experiences if needed
    ],
    projects: [
      {
        name: "Collaboration Platform",
        src: "/collaboration-preview.png",
        link: "https://example.com/",
      },
      // Add more projects if needed
    ],
    topSkills: [
      {
        skillName: "JavaScript",
        color: "yellow",
        skillDescription: "Proficient in JavaScript for building dynamic and interactive web applications.",
      },
      {
        skillName: "Node.js",
        color: "green",
        skillDescription: "Experienced in server-side development using Node.js for scalable and efficient applications.",
      },
      {
        skillName: "React",
        color: "blue",
        skillDescription: "Skilled in developing responsive and reusable user interfaces with React.",
      },
    ],
    recommendations: [
      {
        name: "Emily White",
        jobTitle: "Lead Developer at Tech Innovations",
        srcImage: "/profile3.png",
        message: "Alex is a dedicated and talented software engineer. His commitment to delivering high-quality code is truly commendable.",
      },
      // Add more recommendations if needed
    ],
    profileTags: [
      "software engineering",
      "javascript",
      "react",
    ],
    interestedTags: [
      "web development",
      "software architecture",
      "node.js",
    ],
    resumeLink: "https://example.com/resume",
   },
  ];

export function InputData() {
    const router = useRouter();
    const { toast } = useToast();

    //const updateProfile = api.test.createCompanyProfile.useMutation();
    //const updateTestimonial = api.test.createTestimonial.useMutation();
    //const s = api.user.getProfile.useQuery({ id: "clqst7m140000stm7xvs7wi5k" });

    const profile = api.settings.settingsForm11.useMutation();
    const addSkill = api.settings.settingsForm2.useMutation();
    const addRecommendation = api.settings.addRecommendation.useMutation();
    const addProject = api.settings.addProject.useMutation();
    const addExperience = api.settings.addExperience.useMutation();
    function onSubmit() {
        profile.mutate({
            fullName: data[0].fullName,
            proEmail: data[0].proEmail,
            username: data[0].username,
            location: data[0].location,
            about: data[0].about,
            jobTitle: data[0].jobTitle,
            yearsOfExperience: data[0].yearsOfExperience,
            availableForWork: data[0].avaiableForWork,
            hasAJob: data[0].hasAJob,
            resumeLink: data[0].resumeLink,
            profileTags: data[0].profileTags,
            interestedTags: data[0].interestedTags,
            profileSrc: data[0].profileSrc,
        });
        addSkill.mutate({
            skillName: data[0].topSkills[0].skillName,
            skillDescription: data[0].topSkills[0].skillDescription,
            color: data[0].topSkills[0].color,
        });
        addSkill.mutate({
            skillName: data[0].topSkills[1].skillName,
            skillDescription: data[0].topSkills[1].skillDescription,
            color: data[0].topSkills[1].color,
        });
        addSkill.mutate({
            skillName: data[0].topSkills[2].skillName,
            skillDescription: data[0].topSkills[2].skillDescription,
            color: data[0].topSkills[2].color,
        });
        addRecommendation.mutate({
            name: data[0].recommendations[0].name,
            jobTitle: data[0].recommendations[0].jobTitle,
            srcImage: data[0].recommendations[0].srcImage,
            message: data[0].recommendations[0].message,
        });
        // addRecommendation.mutate({
        //     name: data[0].recommendations[1].name,
        //     jobTitle: data[0].recommendations[1].jobTitle,
        //     srcImage: data[0].recommendations[1].srcImage,
        //     message: data[0].recommendations[1].message,
        // });
        // addRecommendation.mutate({
        //     name: data[0].recommendations[2].name,
        //     jobTitle: data[0].recommendations[2].jobTitle,
        //     srcImage: data[0].recommendations[2].srcImage,
        //     message: data[0].recommendations[2].message,
        // });
        addProject.mutate({
            name: data[0].projects[0].name,
            src: data[0].projects[0].src,
            link: data[0].projects[0].link,
        });
        // addProject.mutate({
        //     name: data[0].projects[1].name,
        //     src: data[0].projects[1].src,
        //     link: data[0].projects[1].link,
        // });
        // addProject.mutate({
        //     name: data[0].projects[2].name,
        //     src: data[0].projects[2].src,
        //     link: data[0].projects[2].link,
        // });
        // addProject.mutate({
        //     name: data[0].projects[3].name,
        //     src: data[0].projects[3].src,
        //     link: data[0].projects[3].link,
        // });
        addExperience.mutate({
            companyLogoSrc: data[0].experiences[0].companyLogoSrc,
            companyName: data[0].experiences[0].companyName,
            companyImgSrc: data[0].experiences[0].companyImgSrc,
            engagement: data[0].experiences[0].engagement,
            relativeOfWork: data[0].experiences[0].relativeOfWork,
            jobTitle: data[0].experiences[0].jobTitle,
            location: data[0].experiences[0].location,
            time: data[0].experiences[0].time,
            jobDescriptions: data[0].experiences[0].jobDescriptions,
        });
        // addExperience.mutate({
        //     companyLogoSrc: data[0].experiences[1].companyLogoSrc,
        //     companyName: data[0].experiences[1].companyName,
        //     companyImgSrc: data[0].experiences[1].companyImgSrc,
        //     engagement: data[0].experiences[1].engagement,
        //     relativeOfWork: data[0].experiences[1].relativeOfWork,
        //     jobTitle: data[0].experiences[1].jobTitle,
        //     location: data[0].experiences[1].location,
        //     time: data[0].experiences[1].time,
        //     jobDescriptions: data[0].experiences[1].jobDescriptions,
        // });
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
