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
      profileSrc: "/wp4.jpeg",
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
      profileSrc: "/wp2.jpeg",
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
      profileSrc: "/wp1.jpeg",
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
      fullName: "Elan Torras",
      jobTitle: "Backend Engineer",
      profilrSrc: "/wp3.jpeg",
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
    profileSrc:"/wp5.jpeg",
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
   {
    fullName: "Michael Johnson",
    jobTitle: "Backend Developer",
    proEmail: "michael_johnson@gmail.com",
    profileSrc: "/wp5.jpg",
    username: "mikejohnson",
    phone: "+1 415 555 0123",
    location: "San Francisco, CA, USA",
    connections: "500+",
    yearsOfExperience: "7",
    about: "Dedicated Backend Developer skilled in Node.js and Python. Focuses on building robust APIs and microservices. Known for excellent debugging skills and a strong grasp of database management.",
    avaiableForWork: false,
    hasAJob: true,
    experiences: [
      {
        companyLogoSrc: "/fblogo.png",
        companyName: "Facebook",
        companyImgSrc: "/facebook.png",
        engagement: "Full-Time",
        relativeOfWork: "On-Site",
        jobTitle: "Senior Backend Developer",
        location: "Menlo Park, CA, USA",
        time: "Feb 2015 - Present",
        jobDescriptions: [
          "Lead developer for the main user database systems",
          "Implemented several API solutions for third-party integrations",
          "Enhanced the overall security and efficiency of backend services"
        ]
      },
      {
        companyLogoSrc: "/freelancelogo.png",
        companyName: "Freelance",
        companyImgSrc: "/freelance.png",
        engagement: "Contract",
        relativeOfWork: "Remote",
        jobTitle: "Freelance Developer",
        location: "Worldwide",
        time: "Jan 2013 - Jan 2015",
        jobDescriptions: [
          "Designed and implemented backend solutions for e-commerce sites",
          "Worked on various database management tasks for startup clients",
          "Provided consultancy on system architecture and cloud services"
        ]
      }
    ],
    projects: [
      {
        name: "Banking Backend Revamp",
        src: "/dashboard-preview.png",
        link: "https://facebook.com"
      },
      {
        name: "IoT System Integration",
        src: "/dashboard-preview.png",
        link: "https://facebook.com"
      },
      {
        name: "Healthcare Data Management",
        src: "/dashboard-preview.png",
        link: "https://facebook.com"
      }
    ],
    topSkills: [
      {
        skillName: "Node.js",
        color: "green",
        skillDescription: "Proficient in Node.js, building scalable and performant backend services."
      },
      {
        skillName: "Python",
        color: "blue",
        skillDescription: "Highly skilled in Python, especially in data manipulation and backend logic."
      },
      {
        skillName: "Database Management",
        color: "orange",
        skillDescription: "Expert in managing complex databases with MySQL and MongoDB."
      }
    ],
    recommendations: [
      {
        name: "Anna Bell",
        jobTitle: "Software Engineer at TechGiant",
        srcImage: "/profile1.png",
        message: "Michael's technical ability is top-notch. He's transformed our backend systems at Facebook with his innovative approach."
      },
      {
        name: "Richard Roe",
        jobTitle: "DevOps Manager at CloudNet",
        srcImage: "/profile3.png",
        message: "Working with Michael on cloud integration projects has been a highlight of my career. His solutions are always spot-on."
      },
      {
        name: "Emily Howard",
        jobTitle: "Database Administrator at DataTech",
        srcImage: "/profile4.png",
        message: "Michael is a wizard with databases. His work on our SQL servers has significantly boosted our data handling capabilities."
      }
    ],
    profileTags: [
      "node.js",
      "backend",
      "python"
    ],
    interestedTags: [
      "api development",
      "cloud services",
      "data security"
    ],
    resumeLink: "https://facebook.com"
  },
  {
    fullName: "Sarah Peterson",
    jobTitle: "UX Designer",
    proEmail: "sarah_peterson@gmail.com",
    profileSrc: "/wp7.jpg",
    username: "sarahdesigns",
    phone: "+49 152 234 5678",
    location: "Berlin, Germany",
    connections: "200+",
    yearsOfExperience: "4",
    about: "Creative UX Designer with a flair for creating intuitive and engaging user interfaces. Specializes in mobile and web applications design.",
    avaiableForWork: false,
    hasAJob: true,
    experiences: [
      {
        companyLogoSrc: "/amazonlogo.png",
        companyName: "Amazon",
        companyImgSrc: "/amazon.png",
        engagement: "Full-Time",
        relativeOfWork: "On-Site",
        jobTitle: "Lead UX Designer",
        location: "Berlin, Germany",
        time: "Mar 2018 - Present",
        jobDescriptions: [
          "Oversaw the redesign of the Amazon shopping app",
          "Conducted user testing and feedback sessions to improve designs",
          "Collaborated with developers to ensure accurate design implementation"
        ]
      },
      {
        companyLogoSrc: "/freelancelogo.png",
        companyName: "Freelance",
        companyImgSrc: "/freelance.png",
        engagement: "Contract",
        relativeOfWork: "Remote",
        jobTitle: "Freelance UX Consultant",
        location: "Various",
        time: "Jan 2016 - Feb 2018",
        jobDescriptions: [
          "Provided UX consulting services for startups and mid-sized companies",
          "Designed wireframes and prototypes for various software products",
          "Helped clients enhance user satisfaction with their digital products"
        ]
      }
    ],
    projects: [
      {
        name: "Mobile Banking App Interface",
        src: "/dashboard-preview.png",
        link: "https://amazon.com"
      },
      {
        name: "E-commerce Website Redesign",
        src: "/dashboard-preview.png",
        link: "https://amazon.com"
      },
      {
        name: "Interactive Media Platform",
        src: "/dashboard-preview.png",
        link: "https://amazon.com"
      }
    ],
    topSkills: [
      {
        skillName: "User Testing",
        color: "purple",
        skillDescription: "Skilled in conducting extensive user testing to gather actionable insights."
      },
      {
        skillName: "Wireframing",
        color: "red",
        skillDescription: "Expert in creating detailed wireframes that serve as a blueprint for development."
      },
      {
        skillName: "Adobe XD",
        color: "light blue",
        skillDescription: "Proficient in Adobe XD for designing high-fidelity prototypes."
      }
    ],
    recommendations: [
      {
        name: "James Lee",
        jobTitle: "Product Manager at OnlineRetail",
        srcImage: "/profile5.png",
        message: "Sarah's designs have dramatically improved our user interface. Her attention to detail and user-centered approach is exemplary."
      },
      {
        name: "Olivia Taylor",
        jobTitle: "Senior Designer at CreativesNow",
        srcImage: "/profile6.png",
        message: "It's always inspiring to see Sarah's work. Her designs are not only beautiful but also intuitively easy to use."
      },
      {
        name: "Lucas Graham",
        jobTitle: "CTO at NextGen Apps",
        srcImage: "/profile7.png",
        message: "Sarah has been crucial in our product development. Her design strategies have brought our user experience to a new level."
      }
    ],
    profileTags: [
      "ux design",
      "user testing",
      "wireframing"
    ],
    interestedTags: [
      "user experience",
      "mobile apps",
      "web design"
    ],
    resumeLink: "https://amazon.com"
  },
  {
    "fullName": "James Miller",
    "jobTitle": "Data Scientist",
    "proEmail": "james_miller@gmail.com",
    "profileSrc": "/wp8.jpeg",
    "username": "datamiller",
    "phone": "+1 303 555 0198",
    "location": "Denver, CO, USA",
    "connections": "450+",
    "yearsOfExperience": "6",
    "about": "Data Scientist with a strong mathematical background and expertise in machine learning and predictive modeling. Passionate about turning data into actionable insights.",
    "avaiableForWork": false,
    "hasAJob": true,
    "experiences": [
      {
        "companyLogoSrc": "/ibmlogo.png",
        "companyName": "IBM",
        "companyImgSrc": "/ibm.png",
        "engagement": "Full-Time",
        "relativeOfWork": "On-Site",
        "jobTitle": "Senior Data Scientist",
        "location": "Denver, CO, USA",
        "time": "Apr 2018 - Present",
        "jobDescriptions": [
          "Led the development of a predictive maintenance model for manufacturing clients",
          "Conducted big data analytics to improve client business strategies",
          "Managed a team of junior data scientists and analysts"
        ]
      },
      {
        "companyLogoSrc": "/freelancelogo.png",
        "companyName": "Freelance",
        "companyImgSrc": "/freelance.png",
        "engagement": "Contract",
        "relativeOfWork": "Remote",
        "jobTitle": "Data Analyst Consultant",
        "location": "Remote",
        "time": "Jan 2016 - Mar 2018",
        "jobDescriptions": [
          "Provided data consultancy for startups in health and tech sectors",
          "Designed and analyzed A/B testing for product enhancements",
          "Created visualizations and reports for stakeholder presentations"
        ]
      }
    ],
    "projects": [
      {
        "name": "Supply Chain Optimization",
        "src": "/dashboard-preview.png",
        "link": "https://ibm.com"
      },
      {
        "name": "Market Trend Analysis Tool",
        "src": "/dashboard-preview.png",
        "link": "https://ibm.com"
      },
      {
        "name": "Customer Segmentation AI",
        "src": "/dashboard-preview.png",
        "link": "https://ibm.com"
      }
    ],
    "topSkills": [
      {
        "skillName": "Machine Learning",
        "color": "blue",
        "skillDescription": "Expertise in machine learning techniques and algorithms to solve complex problems."
      },
      {
        "skillName": "Python",
        "color": "green",
        "skillDescription": "Advanced skills in Python, particularly with data libraries like pandas and NumPy."
      },
      {
        "skillName": "Statistical Analysis",
        "color": "red",
        "skillDescription": "Strong background in statistical analysis, enabling detailed data interpretation."
      }
    ],
    "recommendations": [
      {
        "name": "Sophia Hart",
        "jobTitle": "Analytics Manager at DataTech",
        "srcImage": "/profile8.png",
        "message": "James has a profound ability to analyze and leverage data in ways that are truly transformative for our business."
      },
      {
        "name": "Ethan Long",
        "jobTitle": "Senior Data Engineer at InfoWorks",
        "srcImage": "/profile9.png",
        "message": "James's technical expertise and strategic vision have greatly enhanced our data processing capabilities."
      },
      {
        "name": "Mia Foster",
        "jobTitle": "Product Manager at HealthPlus",
        "srcImage": "/profile10.png",
        "message": "His insights from data have enabled us to make better decisions faster than ever."
      }
    ],
    "profileTags": [
      "data science",
      "machine learning",
      "python"
    ],
    "interestedTags": [
      "big data",
      "AI",
      "predictive modeling"
    ],
    "resumeLink": "https://ibm.com"
  },
  {
    "fullName": "Olivia Brown",
    "jobTitle": "Graphic Designer",
    "proEmail": "olivia_brown@gmail.com",
    "profileSrc": "/wp9.jpg",
    "username": "creativeolivia",
    "phone": "+44 203 555 0789",
    "location": "London, UK",
    "connections": "300+",
    "yearsOfExperience": "5",
    "about": "Innovative Graphic Designer with a passion for branding and print design. Excels in creating visually compelling and brand-aligned graphics.",
    "avaiableForWork": false,
    "hasAJob": true,
    "experiences": [
      {
        "companyLogoSrc": "/adobelogo.png",
        "companyName": "Adobe",
        "companyImgSrc": "/adobe.png",
        "engagement": "Full-Time",
        "relativeOfWork": "On-Site",
        "jobTitle": "Creative Lead",
        "location": "London, UK",
        "time": "May 2018 - Present",
        "jobDescriptions": [
          "Directed multiple brand campaigns for major international clients",
          "Led the redesign of the corporate identity for several tech startups",
          "Collaborated with marketing teams to create promotional materials"
        ]
      },
      {
        "companyLogoSrc": "/freelancelogo.png",
        "companyName": "Freelance",
        "companyImgSrc": "/freelance.png",
        "engagement": "Contract",
        "relativeOfWork": "Remote",
        "jobTitle": "Freelance Graphic Designer",
        "location": "Various",
        "time": "Jan 2015 - Apr 2018",
        "jobDescriptions": [
          "Designed logos and branding materials for over 30 clients",
          "Created digital illustrations and print materials for events and campaigns",
          "Worked closely with clients to meet their design needs"
        ]
      }
    ],
    "projects": [
      {
        "name": "Tech Startup Branding",
        "src": "/dashboard-preview.png",
        "link": "https://adobe.com"
      },
      {
        "name": "Annual Report Design",
        "src": "/dashboard-preview.png",
        "link": "https://adobe.com"
      },
      {
        "name": "Interactive Digital Ad Campaign",
        "src": "/dashboard-preview.png",
        "link": "https://adobe.com"
      }
    ],
    "topSkills": [
      {
        "skillName": "Adobe Creative Suite",
        "color": "orange",
        "skillDescription": "Masterful use of Adobe Creative Suite to produce stunning graphic designs."
      },
      {
        "skillName": "Branding",
        "color": "yellow",
        "skillDescription": "Deep understanding of branding principles to create cohesive and effective visuals."
      },
      {
        "skillName": "Illustration",
        "color": "purple",
        "skillDescription": "Capable of crafting detailed illustrations that capture and communicate clear messages."
      }
    ],
    "recommendations": [
      {
        "name": "Noah Wilson",
        "jobTitle": "Marketing Director at FastCorp",
        "srcImage": "/profile11.png",
        "message": "Olivia's designs have elevated our brand to a new level. Her creativity is unmatched."
      },
      {
        "name": "Emma Harris",
        "jobTitle": "Creative Director at AdVantage",
        "srcImage": "/profile12.png",
        "message": "Her ability to translate concepts into visual stories is phenomenal. Always a pleasure to collaborate with Olivia."
      },
      {
        "name": "Liam Roberts",
        "jobTitle": "CEO at InnovateDesign",
        "srcImage": "/profile13.png",
        "message": "Olivia consistently delivers high-quality designs that perfectly align with our goals and enhance our brand's visibility."
      }
    ],
    "profileTags": [
      "graphic design",
      "branding",
      "adobe creative suite"
    ],
    "interestedTags": [
      "visual arts",
      "corporate identity",
      "print design"
    ],
    "resumeLink": "https://adobe.com"
  },
  {
    "fullName": "Ethan Walker",
    "jobTitle": "Marketing Specialist",
    "proEmail": "ethan_walker@gmail.com",
    "profileSrc": "/wp10.jpg",
    "username": "ethanmarketing",
    "phone": "+1 212 555 0234",
    "location": "New York, NY, USA",
    "connections": "400+",
    "yearsOfExperience": "8",
    "about": "Strategic Marketing Specialist with a knack for digital campaigns and social media. Known for driving brand growth and engaging key demographics.",
    "avaiableForWork": false,
    "hasAJob": true,
    "experiences": [
      {
        "companyLogoSrc": "/twitterlogo.png",
        "companyName": "Twitter",
        "companyImgSrc": "/twitter.png",
        "engagement": "Full-Time",
        "relativeOfWork": "On-Site",
        "jobTitle": "Lead Marketing Strategist",
        "location": "New York, NY, USA",
        "time": "Jun 2019 - Present",
        "jobDescriptions": [
          "Developed and executed marketing campaigns that increased user engagement by 50%",
          "Led a team to innovate new approaches to user acquisition and retention",
          "Managed multi-million dollar advertising budgets and collaborated with international teams"
        ]
      },
      {
        "companyLogoSrc": "/freelancelogo.png",
        "companyName": "Freelance",
        "companyImgSrc": "/freelance.png",
        "engagement": "Contract",
        "relativeOfWork": "Remote",
        "jobTitle": "Digital Marketing Consultant",
        "location": "Remote",
        "time": "Jan 2014 - May 2019",
        "jobDescriptions": [
          "Provided marketing strategies to over 50 small businesses",
          "Enhanced online presence through targeted social media advertising",
          "Developed content and SEO tactics to increase organic search traffic"
        ]
      }
    ],
    "projects": [
      {
        "name": "Global Product Launch",
        "src": "/dashboard-preview.png",
        "link": "https://twitter.com"
      },
      {
        "name": "Social Media Optimization Tool",
        "src": "/dashboard-preview.png",
        "link": "https://twitter.com"
      }
    ],
    "topSkills": [
      {
        "skillName": "Digital Marketing",
        "color": "blue",
        "skillDescription": "Advanced expertise in digital marketing, focusing on analytics and conversion optimization."
      },
      {
        "skillName": "Social Media Strategy",
        "color": "green",
        "skillDescription": "Proven track record in crafting effective social media strategies that enhance engagement and brand loyalty."
      },
      {
        "skillName": "SEO",
        "color": "orange",
        "skillDescription": "Strong command of SEO best practices and content development to improve search engine rankings."
      }
    ],
    "recommendations": [
      {
        "name": "Isabella Johnson",
        "jobTitle": "Director of Marketing at RetailX",
        "srcImage": "/profile14.png",
        "message": "Ethan's innovative marketing strategies have significantly increased our market share and customer base."
      },
      {
        "name": "Jacob Evans",
        "jobTitle": "SEO Specialist at MarkTech",
        "srcImage": "/profile15.png",
        "message": "Working with Ethan has greatly enhanced our visibility in search engines. His SEO expertise is exceptional."
      }
    ],
    "profileTags": [
      "marketing",
      "digital marketing",
      "SEO"
    ],
    "interestedTags": [
      "digital transformation",
      "brand strategy",
      "content marketing"
    ],
    "resumeLink": "https://twitter.com"
  },
  {
    "fullName": "Ava Taylor",
    "jobTitle": "Project Manager",
    "proEmail": "ava_taylor@gmail.com",
    "profileSrc": "/wp11.jpg",
    "username": "projectava",
    "phone": "+61 400 555 019",
    "location": "Sydney, Australia",
    "connections": "300+",
    "yearsOfExperience": "10",
    "about": "Accomplished Project Manager with extensive experience in managing large, complex projects in the IT and construction sectors. Expert in methodologies like Agile and Scrum.",
    "avaiableForWork": false,
    "hasAJob": true,
    "experiences": [
      {
        "companyLogoSrc": "/oraclelogo.png",
        "companyName": "Oracle",
        "companyImgSrc": "/oracle.png",
        "engagement": "Full-Time",
        "relativeOfWork": "On-Site",
        "jobTitle": "Senior Project Manager",
        "location": "Sydney, Australia",
        "time": "May 2015 - Present",
        "jobDescriptions": [
          "Oversaw the rollout of large-scale software deployments across Asia Pacific",
          "Managed cross-functional teams of over 100 personnel",
          "Implemented Agile methodologies to reduce project delivery times by 30%"
        ]
      },
      {
        "companyLogoSrc": "/freelancelogo.png",
        "companyName": "Freelance",
        "companyImgSrc": "/freelance.png",
        "engagement": "Contract",
        "relativeOfWork": "Remote",
        "jobTitle": "Project Consultant",
        "location": "Various",
        "time": "Jan 2010 - Apr 2015",
        "jobDescriptions": [
          "Advised on project management strategies for tech startups",
          "Developed project timelines and budgets for clients in Europe and Asia",
          "Coordinated remote teams for efficient project execution"
        ]
      }
    ],
    "projects": [
      {
        "name": "Enterprise Resource Planning Upgrade",
        "src": "/dashboard-preview.png",
        "link": "https://oracle.com"
      },
      {
        "name": "Agile Transformation Project",
        "src": "/dashboard-preview.png",
        "link": "https://oracle.com"
      }
    ],
    "topSkills": [
      {
        "skillName": "Agile Project Management",
        "color": "red",
        "skillDescription": "Deep understanding of Agile practices, enhancing project flexibility and team productivity."
      },
      {
        "skillName": "Risk Management",
        "color": "yellow",
        "skillDescription": "Expert in identifying and mitigating risks early in the project lifecycle."
      },
      {
        "skillName": "Team Leadership",
        "color": "green",
        "skillDescription": "Strong leader with a proven ability to inspire and manage multidisciplinary teams."
      }
    ],
    "recommendations": [
      {
        "name": "Sophie Lee",
        "jobTitle": "CEO at TechSolutions",
        "srcImage": "/profile16.png",
        "message": "Ava's leadership in our key projects has driven substantial growth for our company. Her project management skills are truly top-notch."
      },
      {
        "name": "Ryan Clark",
        "jobTitle": "Operations Manager at BuildRight",
        "srcImage": "/profile17.png",
        "message": "Her strategic foresight and meticulous attention to detail have been crucial in the successful completion of complex projects."
      }
    ],
    "profileTags": [
      "project management",
      "Agile",
      "team leadership"
    ],
    "interestedTags": [
      "innovation management",
      "strategic planning",
      "process improvement"
    ],
    "resumeLink": "https://oracle.com"
  },
  {
    "fullName": "Sophia Lee",
    "jobTitle": "Software Engineer",
    "proEmail": "sophia_lee@gmail.com",
    "profileSrc": "/wp12.jpeg",
    "username": "codesophia",
    "phone": "+1 310 555 0222",
    "location": "Los Angeles, CA, USA",
    "connections": "500+",
    "yearsOfExperience": "8",
    "about": "Versatile Software Engineer experienced in both front-end and back-end development. Proficient in a range of programming languages and frameworks, with a special interest in cloud computing.",
    "avaiableForWork": false,
    "hasAJob": true,
    "experiences": [
      {
        "companyLogoSrc": "/googlelogo.png",
        "companyName": "Google",
        "companyImgSrc": "/google.png",
        "engagement": "Full-Time",
        "relativeOfWork": "On-Site",
        "jobTitle": "Lead Software Developer",
        "location": "Los Angeles, CA, USA",
        "time": "Aug 2016 - Present",
        "jobDescriptions": [
          "Developed new features for Google Cloud services",
          "Optimized existing codebase for better scalability and performance",
          "Mentored junior developers and led code reviews"
        ]
      },
      {
        "companyLogoSrc": "/freelancelogo.png",
        "companyName": "Freelance",
        "companyImgSrc": "/freelance.png",
        "engagement": "Contract",
        "relativeOfWork": "Remote",
        "jobTitle": "Software Development Consultant",
        "location": "Remote",
        "time": "Jan 2014 - Jul 2016",
        "jobDescriptions": [
          "Provided custom software solutions for small to medium-sized businesses",
          "Focused on web applications and e-commerce platforms",
          "Implemented cloud-based solutions to enhance client operations"
        ]
      }
    ],
    "projects": [
      {
        "name": "Cloud Data Management System",
        "src": "/dashboard-preview.png",
        "link": "https://google.com"
      },
      {
        "name": "Real-Time Communication App",
        "src": "/dashboard-preview.png",
        "link": "https://google.com"
      }
    ],
    "topSkills": [
      {
        "skillName": "Java",
        "color": "blue",
        "skillDescription": "Expertise in Java for backend development, ensuring robust server-side applications."
      },
      {
        "skillName": "React",
        "color": "purple",
        "skillDescription": "Advanced proficiency in React for building interactive and dynamic user interfaces."
      },
      {
        "skillName": "Cloud Computing",
        "color": "gray",
        "skillDescription": "Skilled in deploying and managing applications in cloud environments like AWS and Google Cloud."
      }
    ],
    "recommendations": [
      {
        "name": "Oliver Thompson",
        "jobTitle": "Director at CloudTech",
        "srcImage": "/profile18.png",
        "message": "Sophia's contributions to our cloud infrastructure have been vital. Her technical expertise and problem-solving skills are exceptional."
      },
      {
        "name": "Emily Carter",
        "jobTitle": "Senior Developer at AppVine",
        "srcImage": "/profile19.png",
        "message": "Her innovative approaches to software development have set a new standard in our projects. Sophia is a real asset to any development team."
      }
    ],
    "profileTags": [
      "software engineering",
      "Java",
      "React"
    ],
    "interestedTags": [
      "cloud solutions",
      "tech innovation",
      "software architecture"
    ],
    "resumeLink": "https://google.com"
  },
  {
    "fullName": "William Roberts",
    "jobTitle": "IT Consultant",
    "proEmail": "william_roberts@gmail.com",
    "profileSrc": "/wp13.jpeg",
    "username": "willrobIT",
    "phone": "+1 312 555 0189",
    "location": "Chicago, IL, USA",
    "connections": "420+",
    "yearsOfExperience": "9",
    "about": "Experienced IT Consultant with a focus on cybersecurity and network solutions. Passionate about developing secure, scalable network infrastructures for large enterprises.",
    "avaiableForWork": false,
    "hasAJob": true,
    "experiences": [
      {
        "companyLogoSrc": "/ciscologo.png",
        "companyName": "Cisco",
        "companyImgSrc": "/cisco.png",
        "engagement": "Full-Time",
        "relativeOfWork": "On-Site",
        "jobTitle": "Network Security Lead",
        "location": "Chicago, IL, USA",
        "time": "Oct 2017 - Present",
        "jobDescriptions": [
          "Oversaw major network security upgrades for multinational corporations",
          "Developed and implemented comprehensive cybersecurity policies",
          "Led training sessions on network security best practices"
        ]
      },
      {
        "companyLogoSrc": "/freelancelogo.png",
        "companyName": "Freelance",
        "companyImgSrc": "/freelance.png",
        "engagement": "Contract",
        "relativeOfWork": "Remote",
        "jobTitle": "IT Security Consultant",
        "location": "Remote",
        "time": "Jan 2013 - Sep 2017",
        "jobDescriptions": [
          "Provided cybersecurity solutions and consultations to various SMBs",
          "Performed vulnerability assessments and penetration testing",
          "Advised on disaster recovery planning and data protection strategies"
        ]
      }
    ],
    "projects": [
      {
        "name": "Enterprise Network Upgrade",
        "src": "/dashboard-preview.png",
        "link": "https://cisco.com"
      },
      {
        "name": "Cybersecurity Training Module",
        "src": "/dashboard-preview.png",
        "link": "https://cisco.com"
      }
    ],
    "topSkills": [
      {
        "skillName": "Cybersecurity",
        "color": "red",
        "skillDescription": "Expert in designing and implementing security measures to protect network infrastructures."
      },
      {
        "skillName": "Network Engineering",
        "color": "blue",
        "skillDescription": "Strong background in building and maintaining scalable and secure networks."
      },
      {
        "skillName": "Data Protection",
        "color": "green",
        "skillDescription": "Proficient in strategies and technologies for ensuring data integrity and confidentiality."
      }
    ],
    "recommendations": [
      {
        "name": "Emily White",
        "jobTitle": "CIO at TechGlobal",
        "srcImage": "/profile20.png",
        "message": "William's expertise in network security has been crucial in fortifying our IT infrastructure."
      },
      {
        "name": "David Brown",
        "jobTitle": "Senior Network Engineer at NetSolutions",
        "srcImage": "/profile21.png",
        "message": "His innovative solutions and attention to detail have greatly enhanced our network performance and security."
      }
    ],
    "profileTags": [
      "IT consulting",
      "cybersecurity",
      "network engineering"
    ],
    "interestedTags": [
      "security solutions",
      "enterprise networking",
      "technology consulting"
    ],
    "resumeLink": "https://cisco.com"
  },
  {
    "fullName": "Charlotte Johnson",
    "jobTitle": "Human Resources Manager",
    "proEmail": "charlotte_johnson@gmail.com",
    "profileSrc": "/wp14.jpg",
    "username": "HRCharlotte",
    "phone": "+44 161 555 0223",
    "location": "Manchester, UK",
    "connections": "350+",
    "yearsOfExperience": "11",
    "about": "Accomplished HR Manager specializing in talent acquisition and employee engagement strategies. Committed to fostering a positive workplace culture and enhancing organizational performance.",
    "avaiableForWork": false,
    "hasAJob": true,
    "experiences": [
      {
        "companyLogoSrc": "/unileverlogo.png",
        "companyName": "Unilever",
        "companyImgSrc": "/unilever.png",
        "engagement": "Full-Time",
        "relativeOfWork": "On-Site",
        "jobTitle": "Head of Human Resources",
        "location": "Manchester, UK",
        "time": "Feb 2016 - Present",
        "jobDescriptions": [
          "Led recruitment campaigns that reduced time-to-hire by 30%",
          "Implemented employee wellness programs that improved staff retention rates",
          "Coordinated with global teams to align HR strategies"
        ]
      },
      {
        "companyLogoSrc": "/freelancelogo.png",
        "companyName": "Freelance",
        "companyImgSrc": "/freelance.png",
        "engagement": "Contract",
        "relativeOfWork": "Remote",
        "jobTitle": "HR Consultant",
        "location": "Remote",
        "time": "Jan 2010 - Jan 2016",
        "jobDescriptions": [
          "Advised SMEs on developing effective HR policies and procedures",
          "Managed outsourcing projects for various clients",
          "Conducted training and development workshops"
        ]
      }
    ],
    "projects": [
      {
        "name": "Organizational Culture Revamp",
        "src": "/dashboard-preview.png",
        "link": "https://unilever.com"
      },
      {
        "name": "Leadership Development Program",
        "src": "/dashboard-preview.png",
        "link": "https://unilever.com"
      }
    ],
    "topSkills": [
      {
        "skillName": "Talent Acquisition",
        "color": "purple",
        "skillDescription": "Expert in sourcing and attracting top talent through modern recruitment strategies."
      },
      {
        "skillName": "Employee Engagement",
        "color": "orange",
        "skillDescription": "Skilled in developing programs that enhance employee satisfaction and productivity."
      },
      {
        "skillName": "Strategic HR Management",
        "color": "green",
        "skillDescription": "Adept at aligning HR strategies with business objectives to drive organizational success."
      }
    ],
    "recommendations": [
      {
        "name": "Sophia Davis",
        "jobTitle": "CEO at GlobalTech",
        "srcImage": "/profile22.png",
        "message": "Charlotte's vision for HR has transformed our company culture, making us a top choice for professionals in our industry."
      },
      {
        "name": "Liam Smith",
        "jobTitle": "Operations Director at HealthCare Inc.",
        "srcImage": "/profile23.png",
        "message": "Her strategies in talent management have significantly improved our staff retention and satisfaction levels."
      }
    ],
    "profileTags": [
      "human resources",
      "talent acquisition",
      "employee engagement"
    ],
    "interestedTags": [
      "workplace culture",
      "organizational development",
      "HR strategy"
    ],
    "resumeLink": "https://unilever.com"
  },
  {
    "fullName": "Noah Wilson",
    "jobTitle": "Financial Analyst",
    "proEmail": "noah_wilson@gmail.com",
    "profileSrc": "/wp15.jpg",
    "username": "noahfinances",
    "phone": "+1 416 555 0345",
    "location": "Toronto, Canada",
    "connections": "500+",
    "yearsOfExperience": "7",
    "about": "Detail-oriented Financial Analyst with extensive experience in budget forecasting and financial modeling. Adept at data analysis and providing actionable financial insights.",
    "avaiableForWork": false,
    "hasAJob": true,
    "experiences": [
      {
        "companyLogoSrc": "/bloomberglogo.png",
        "companyName": "Bloomberg",
        "companyImgSrc": "/bloomberg.png",
        "engagement": "Full-Time",
        "relativeOfWork": "On-Site",
        "jobTitle": "Senior Financial Analyst",
        "location": "Toronto, Canada",
        "time": "Mar 2018 - Present",
        "jobDescriptions": [
          "Analyzed financial data to predict future trends and advise company strategy",
          "Developed complex financial models to support investment decisions",
          "Managed quarterly budget reviews and financial reporting"
        ]
      },
      {
        "companyLogoSrc": "/freelancelogo.png",
        "companyName": "Freelance",
        "companyImgSrc": "/freelance.png",
        "engagement": "Contract",
        "relativeOfWork": "Remote",
        "jobTitle": "Financial Consultant",
        "location": "Remote",
        "time": "Jan 2015 - Feb 2018",
        "jobDescriptions": [
          "Provided financial analysis and planning services for startups",
          "Assisted with the financial structuring and fundraising efforts",
          "Offered regular financial advice and periodic reports to clients"
        ]
      }
    ],
    "projects": [
      {
        "name": "Investment Portfolio Optimization",
        "src": "/dashboard-preview.png",
        "link": "https://bloomberg.com"
      },
      {
        "name": "Market Expansion Feasibility Study",
        "src": "/dashboard-preview.png",
        "link": "https://bloomberg.com"
      }
    ],
    "topSkills": [
      {
        "skillName": "Financial Modeling",
        "color": "blue",
        "skillDescription": "Advanced proficiency in constructing detailed financial models to aid in decision making."
      },
      {
        "skillName": "Data Analysis",
        "color": "red",
        "skillDescription": "Expertise in analyzing complex data sets to derive clear, actionable insights."
      },
      {
        "skillName": "Budget Forecasting",
        "color": "green",
        "skillDescription": "Skilled in forecasting financial outcomes to help businesses plan and allocate resources effectively."
      }
    ],
    "recommendations": [
      {
        "name": "Mason Thompson",
        "jobTitle": "Director of Finance at CorpInvest",
        "srcImage": "/profile24.png",
        "message": "Noah's financial models have been pivotal in our strategic planning. His analytical skills are exceptional."
      },
      {
        "name": "Isabella Martinez",
        "jobTitle": "CFO at FastFunds",
        "srcImage": "/profile25.png",
        "message": "His insights have consistently helped us make informed investment decisions and maximize returns."
      }
    ],
    "profileTags": [
      "financial analysis",
      "data analysis",
      "budget forecasting"
    ],
    "interestedTags": [
      "financial strategy",
      "investment analysis",
      "economic forecasting"
    ],
    "resumeLink": "https://bloomberg.com"
  },
  {
    "fullName": "Mia Hernandez",
    "jobTitle": "Content Strategist",
    "proEmail": "mia_hernandez@gmail.com",
    "profileSrc": "/wp16.jpeg",
    "username": "contentmia",
    "phone": "+34 912 555 0421",
    "location": "Madrid, Spain",
    "connections": "280+",
    "yearsOfExperience": "6",
    "about": "Creative Content Strategist with expertise in digital marketing and SEO. Known for enhancing brand presence through targeted content creation and strategic distribution.",
    "avaiableForWork": false,
    "hasAJob": true,
    "experiences": [
      {
        "companyLogoSrc": "/hubspotlogo.png",
        "companyName": "HubSpot",
        "companyImgSrc": "/hubspot.png",
        "engagement": "Full-Time",
        "relativeOfWork": "On-Site",
        "jobTitle": "Head of Content Marketing",
        "location": "Madrid, Spain",
        "time": "Apr 2017 - Present",
        "jobDescriptions": [
          "Developed and executed a content strategy that increased web traffic by 40%",
          "Managed a team of writers, designers, and SEO specialists",
          "Oversaw the production of content across multiple channels"
        ]
      },
      {
        "companyLogoSrc": "/freelancelogo.png",
        "companyName": "Freelance",
        "companyImgSrc": "/freelance.png",
        "engagement": "Contract",
        "relativeOfWork": "Remote",
        "jobTitle": "SEO and Content Consultant",
        "location": "Remote",
        "time": "Jan 2015 - Mar 2017",
        "jobDescriptions": [
          "Advised businesses on improving SEO through content optimization",
          "Developed content calendars and strategies for various clients",
          "Conducted workshops on content marketing best practices"
        ]
      }
    ],
    "projects": [
      {
        "name": "Brand Awareness Campaign",
        "src": "/dashboard-preview.png",
        "link": "https://hubspot.com"
      },
      {
        "name": "SEO Optimization Project",
        "src": "/dashboard-preview.png",
        "link": "https://hubspot.com"
      }
    ],
    "topSkills": [
      {
        "skillName": "Content Marketing",
        "color": "blue",
        "skillDescription": "Expert in crafting and executing effective content marketing strategies to boost brand awareness and engagement."
      },
      {
        "skillName": "SEO",
        "color": "green",
        "skillDescription": "Proven ability to optimize content for search engines, improving organic search rankings significantly."
      },
      {
        "skillName": "Strategic Planning",
        "color": "orange",
        "skillDescription": "Skilled in developing long-term content strategies aligned with business goals."
      }
    ],
    "recommendations": [
      {
        "name": "Lucas Gonzalez",
        "jobTitle": "Marketing Director at BrandPlus",
        "srcImage": "/profile26.png",
        "message": "Mia's strategic approach to content has dramatically increased our market reach and customer engagement."
      },
      {
        "name": "Ella Sanchez",
        "jobTitle": "Senior SEO Specialist at ClicksSmart",
        "srcImage": "/profile27.png",
        "message": "Her expertise in SEO and content creation has been instrumental in our success. Mia truly understands how to engage an audience."
      }
    ],
    "profileTags": [
      "content strategy",
      "SEO",
      "digital marketing"
    ],
    "interestedTags": [
      "content development",
      "brand storytelling",
      "online marketing"
    ],
    "resumeLink": "https://hubspot.com"
  },
  {
    "fullName": "Amelia Martin",
    "jobTitle": "Environmental Scientist",
    "proEmail": "amelia_martin@gmail.com",
    "profileSrc": "/wp17.jpg",
    "username": "ecoamelia",
    "phone": "+61 3 9555 0155",
    "location": "Melbourne, Australia",
    "connections": "310+",
    "yearsOfExperience": "8",
    "about": "Dedicated Environmental Scientist committed to sustainable development and conservation practices. Expert in ecological assessment and environmental impact analysis.",
    "avaiableForWork": false,
    "hasAJob": true,
    "experiences": [
      {
        "companyLogoSrc": "/wwflogo.png",
        "companyName": "World Wildlife Fund",
        "companyImgSrc": "/wwf.png",
        "engagement": "Full-Time",
        "relativeOfWork": "On-Site",
        "jobTitle": "Lead Environmental Planner",
        "location": "Melbourne, Australia",
        "time": "Jan 2018 - Present",
        "jobDescriptions": [
          "Directed major conservation projects aimed at habitat restoration",
          "Conducted detailed environmental impact assessments for new projects",
          "Collaborated with government agencies to ensure compliance with environmental laws"
        ]
      },
      {
        "companyLogoSrc": "/freelancelogo.png",
        "companyName": "Freelance",
        "companyImgSrc": "/freelance.png",
        "engagement": "Contract",
        "relativeOfWork": "Remote",
        "jobTitle": "Environmental Consultant",
        "location": "Various",
        "time": "Dec 2013 - Dec 2017",
        "jobDescriptions": [
          "Provided expert advice on environmental sustainability to businesses",
          "Helped develop strategies for waste reduction and energy efficiency",
          "Assisted in the preparation of environmental documentation for regulatory approval"
        ]
      }
    ],
    "projects": [
      {
        "name": "Coastal Erosion Prevention Initiative",
        "src": "/dashboard-preview.png",
        "link": "https://wwf.org"
      },
      {
        "name": "Urban Greening Project",
        "src": "/dashboard-preview.png",
        "link": "https://wwf.org"
      }
    ],
    "topSkills": [
      {
        "skillName": "Ecological Assessment",
        "color": "green",
        "skillDescription": "Highly skilled in conducting ecological assessments to determine environmental impacts and mitigation strategies."
      },
      {
        "skillName": "Conservation Strategies",
        "color": "blue",
        "skillDescription": "Expert in developing and implementing effective conservation strategies to protect natural resources."
      },
      {
        "skillName": "Regulatory Compliance",
        "color": "red",
        "skillDescription": "Proficient in navigating complex regulatory environments to ensure project compliance with environmental laws."
      }
    ],
    "recommendations": [
      {
        "name": "Henry Turner",
        "jobTitle": "Director at EcoSolutions",
        "srcImage": "/profile28.png",
        "message": "Amelia's work on our environmental impact analysis was thorough and invaluable for our project's approval."
      },
      {
        "name": "Grace Wilson",
        "jobTitle": "Project Manager at GreenFuture",
        "srcImage": "/profile29.png",
        "message": "Her dedication to sustainable practices and deep knowledge of environmental science have greatly benefited our initiatives."
      }
    ],
    "profileTags": [
      "environmental science",
      "ecological assessment",
      "conservation"
    ],
    "interestedTags": [
      "sustainable development",
      "environmental impact",
      "natural resource management"
    ],
    "resumeLink": "https://wwf.org"
  },
  {
    "fullName": "Lucas Scott",
    "jobTitle": "AI Researcher",
    "proEmail": "lucas_scott@gmail.com",
    "profileSrc": "/wp18.jpeg",
    "username": "ailucas",
    "phone": "+49 30 1234 5678",
    "location": "Berlin, Germany",
    "connections": "480+",
    "yearsOfExperience": "10",
    "about": "Innovative AI Researcher focused on machine learning and neural networks. Passionate about developing algorithms that can learn and adapt to new information autonomously.",
    "avaiableForWork": false,
    "hasAJob": true,
    "experiences": [
      {
        "companyLogoSrc": "/deepmindlogo.png",
        "companyName": "DeepMind",
        "companyImgSrc": "/deepmind.png",
        "engagement": "Full-Time",
        "relativeOfWork": "On-Site",
        "jobTitle": "Lead AI Engineer",
        "location": "Berlin, Germany",
        "time": "Sep 2019 - Present",
        "jobDescriptions": [
          "Developed state-of-the-art machine learning models for natural language processing",
          "Led a project team in the development of a self-learning robotic system",
          "Published several papers on advanced neural network architectures"
        ]
      },
      {
        "companyLogoSrc": "/freelancelogo.png",
        "companyName": "Freelance",
        "companyImgSrc": "/freelance.png",
        "engagement": "Contract",
        "relativeOfWork": "Remote",
        "jobTitle": "AI Consultant",
        "location": "Remote",
        "time": "Jan 2015 - Aug 2019",
        "jobDescriptions": [
          "Advised tech startups on integrating AI into their products",
          "Conducted training sessions on machine learning techniques",
          "Developed custom AI solutions for data analysis and automation"
        ]
      }
    ],
    "projects": [
      {
        "name": "Autonomous Vehicle Navigation",
        "src": "/dashboard-preview.png",
        "link": "https://deepmind.com"
      },
      {
        "name": "AI-driven Healthcare Diagnosis System",
        "src": "/dashboard-preview.png",
        "link": "https://deepmind.com"
      }
    ],
    "topSkills": [
      {
        "skillName": "Machine Learning",
        "color": "blue",
        "skillDescription": "Expert in machine learning, especially in developing and tuning algorithms that improve automatically through experience."
      },
      {
        "skillName": "Neural Networks",
        "color": "green",
        "skillDescription": "Deep understanding of neural networks, including CNNs and RNNs, for complex problem solving."
      },
      {
        "skillName": "Algorithm Design",
        "color": "orange",
        "skillDescription": "Skilled in designing algorithms that efficiently solve problems by utilizing AI."
      }
    ],
    "recommendations": [
      {
        "name": "Emily Stewart",
        "jobTitle": "CTO at AI Innovations",
        "srcImage": "/profile30.png",
        "message": "Lucas is a pioneer in AI research. His work has significantly advanced our understanding and application of machine learning technologies."
      },
      {
        "name": "Oliver Harris",
        "jobTitle": "Research Director at TechAdvance",
        "srcImage": "/profile31.png",
        "message": "His innovative approaches and deep technical expertise have set new standards in AI research."
      }
    ],
    "profileTags": [
      "AI research",
      "machine learning",
      "neural networks"
    ],
    "interestedTags": [
      "artificial intelligence",
      "automation technology",
      "smart systems"
    ],
    "resumeLink": "https://deepmind.com"
  },
  {
    "fullName": "Sophie Davis",
    "jobTitle": "Civil Engineer",
    "proEmail": "sophie_davis@gmail.com",
    "profileSrc": "/wp19.jpg",
    "username": "engineersophie",
    "phone": "+1 305 555 0987",
    "location": "Miami, FL, USA",
    "connections": "350+",
    "yearsOfExperience": "12",
    "about": "Experienced Civil Engineer specializing in urban infrastructure projects. Expertise in structural analysis, project management, and sustainable design.",
    "avaiableForWork": false,
    "hasAJob": true,
    "experiences": [
      {
        "companyLogoSrc": "/bechtellogo.png",
        "companyName": "Bechtel",
        "companyImgSrc": "/bechtel.png",
        "engagement": "Full-Time",
        "relativeOfWork": "On-Site",
        "jobTitle": "Senior Civil Engineer",
        "location": "Miami, FL, USA",
        "time": "Jun 2016 - Present",
        "jobDescriptions": [
          "Managed large-scale infrastructure projects including highways and bridges",
          "Conducted structural assessments and provided engineering solutions",
          "Implemented innovative construction techniques to reduce costs and environmental impact"
        ]
      },
      {
        "companyLogoSrc": "/freelancelogo.png",
        "companyName": "Freelance",
        "companyImgSrc": "/freelance.png",
        "engagement": "Contract",
        "relativeOfWork": "Remote",
        "jobTitle": "Structural Consultant",
        "location": "Remote",
        "time": "Jan 2010 - May 2016",
        "jobDescriptions": [
          "Provided expert structural engineering advice for various construction projects",
          "Assisted in the design and analysis of building structures",
          "Performed site inspections and prepared compliance reports"
        ]
      }
    ],
    "projects": [
      {
        "name": "Sustainable Urban Housing Development",
        "src": "/dashboard-preview.png",
        "link": "https://bechtel.com"
      },
      {
        "name": "Bridge Retrofitting Project",
        "src": "/dashboard-preview.png",
        "link": "https://bechtel.com"
      }
    ],
    "topSkills": [
      {
        "skillName": "Structural Engineering",
        "color": "red",
        "skillDescription": "Advanced expertise in structural engineering, focusing on safety, sustainability, and efficiency in design."
      },
      {
        "skillName": "Project Management",
        "color": "blue",
        "skillDescription": "Proven ability to manage complex engineering projects from conception through to completion."
      },
      {
        "skillName": "Sustainable Design",
        "color": "green",
        "skillDescription": "Committed to integrating sustainable practices into all phases of construction and design."
      }
    ],
    "recommendations": [
      {
        "name": "Michael Robinson",
        "jobTitle": "Project Manager at ConstructRight",
        "srcImage": "/profile32.png",
        "message": "Sophie's leadership on the urban housing project was instrumental in its success. Her attention to detail and commitment to sustainability set her apart."
      },
      {
        "name": "Isabella Clark",
        "jobTitle": "Engineer at CityInfrastructure",
        "srcImage": "/profile33.png",
        "message": "Her expertise in structural analysis has been vital to the safety and success of our bridge projects."
      }
    ],
    "profileTags": [
      "civil engineering",
      "structural analysis",
      "project management"
    ],
    "interestedTags": [
      "urban development",
      "infrastructure",
      "environmental sustainability"
    ],
    "resumeLink": "https://bechtel.com"
  },
  {
    "fullName": "Isaac Thompson",
    "jobTitle": "Sales Director",
    "proEmail": "isaac_thompson@gmail.com",
    "profileSrc": "/wp20.jpeg",
    "username": "salesisaac",
    "phone": "+44 207 555 0321",
    "location": "London, UK",
    "connections": "500+",
    "yearsOfExperience": "15",
    "about": "Dynamic Sales Director with a proven track record in driving revenue growth and expanding market share in the technology sector. Expert in strategic sales planning and team leadership.",
    "avaiableForWork": false,
    "hasAJob": true,
    "experiences": [
      {
        "companyLogoSrc": "/saplogo.png",
        "companyName": "SAP",
        "companyImgSrc": "/sap.png",
        "engagement": "Full-Time",
        "relativeOfWork": "On-Site",
        "jobTitle": "Global Sales Director",
        "location": "London, UK",
        "time": "Jul 2018 - Present",
        "jobDescriptions": [
          "Led global sales initiatives that resulted in a 25% increase in annual revenue",
          "Developed and implemented new sales strategies that expanded the customer base in Asia and Europe",
          "Managed a sales team of over 200 members, fostering a culture of success and continuous improvement"
        ]
      },
      {
        "companyLogoSrc": "/freelancelogo.png",
        "companyName": "Freelance",
        "companyImgSrc": "/freelance.png",
        "engagement": "Contract",
        "relativeOfWork": "Remote",
        "jobTitle": "Sales Strategy Consultant",
        "location": "Remote",
        "time": "Jan 2010 - Jun 2018",
        "jobDescriptions": [
          "Advised multinational corporations on refining their sales approaches",
          "Designed training programs to enhance sales team effectiveness",
          "Helped startups establish their sales departments and scale quickly"
        ]
      }
    ],
    "projects": [
      {
        "name": "European Market Expansion Plan",
        "src": "/dashboard-preview.png",
        "link": "https://sap.com"
      },
      {
        "name": "Technology Sales Bootcamp",
        "src": "/dashboard-preview.png",
        "link": "https://sap.com"
      }
    ],
    "topSkills": [
      {
        "skillName": "Strategic Sales Planning",
        "color": "blue",
        "skillDescription": "Expertise in crafting and executing strategic sales plans that effectively capture market opportunities and drive growth."
      },
      {
        "skillName": "Team Leadership",
        "color": "green",
        "skillDescription": "Strong leader with a track record of building, training, and leading high-performing sales teams."
      },
      {
        "skillName": "Market Expansion",
        "color": "red",
        "skillDescription": "Skilled in identifying and developing new market opportunities for business expansion."
      }
    ],
    "recommendations": [
      {
        "name": "Olivia Williams",
        "jobTitle": "CEO at TechSolutions",
        "srcImage": "/profile34.png",
        "message": "Isaac's leadership in our sales department has been transformative. His strategic insights and innovative approaches have significantly boosted our global presence."
      },
      {
        "name": "Ethan Jones",
        "jobTitle": "Sales Manager at GlobalTech",
        "srcImage": "/profile35.png",
        "message": "Working under Isaac has been an incredible learning experience. His guidance has helped me develop my skills and drive results."
      }
    ],
    "profileTags": [
      "sales management",
      "strategic planning",
      "team leadership"
    ],
    "interestedTags": [
      "market development",
      "sales training",
      "business growth"
    ],
    "resumeLink": "https://sap.com"
  },
  {
    "fullName": "Evelyn Thompson",
    "jobTitle": "Product Manager",
    "proEmail": "evelyn_thompson@gmail.com",
    "profileSrc": "/wp21.png",
    "username": "prodmanager_eve",
    "phone": "+1 408 555 0192",
    "location": "San Jose, CA, USA",
    "connections": "400+",
    "yearsOfExperience": "7",
    "about": "Innovative Product Manager with extensive experience in software product development and market strategy. Excels at leading cross-functional teams to deliver exceptional products that meet market demands.",
    "avaiableForWork": false,
    "hasAJob": true,
    "experiences": [
      {
        "companyLogoSrc": "/linkedinlogo.png",
        "companyName": "LinkedIn",
        "companyImgSrc": "/linkedin.png",
        "engagement": "Full-Time",
        "relativeOfWork": "On-Site",
        "jobTitle": "Senior Product Manager",
        "location": "San Jose, CA, USA",
        "time": "Aug 2019 - Present",
        "jobDescriptions": [
          "Led the development and launch of a new mobile application that increased user engagement by 40%",
          "Coordinated with engineering, marketing, and design teams to align product features with customer needs",
          "Conducted market research and competitive analysis to guide product strategy"
        ]
      },
      {
        "companyLogoSrc": "/freelancelogo.png",
        "companyName": "Freelance",
        "companyImgSrc": "/freelance.png",
        "engagement": "Contract",
        "relativeOfWork": "Remote",
        "jobTitle": "Product Strategy Consultant",
        "location": "Remote",
        "time": "Jan 2016 - Jul 2019",
        "jobDescriptions": [
          "Advised startups on product development strategies, focusing on market fit and scalability",
          "Helped clients integrate user feedback into product iterations",
          "Developed go-to-market strategies for new software products"
        ]
      }
    ],
    "projects": [
      {
        "name": "Enterprise Software Overhaul",
        "src": "/dashboard-preview.png",
        "link": "https://linkedin.com"
      },
      {
        "name": "Consumer Analytics Platform",
        "src": "/dashboard-preview.png",
        "link": "https://linkedin.com"
      }
    ],
    "topSkills": [
      {
        "skillName": "Product Development",
        "color": "blue",
        "skillDescription": "Deep expertise in driving the development lifecycle of software products from concept to launch."
      },
      {
        "skillName": "Market Strategy",
        "color": "green",
        "skillDescription": "Proven ability to develop and implement effective market strategies that enhance product visibility and user acquisition."
      },
      {
        "skillName": "Cross-functional Leadership",
        "color": "red",
        "skillDescription": "Strong leadership skills in managing cross-functional teams to achieve product goals and milestones."
      }
    ],
    "recommendations": [
      {
        "name": "Jacob Martinez",
        "jobTitle": "CTO at TechInnovate",
        "srcImage": "/profile36.png",
        "message": "Evelyn's leadership in product development has been transformative for our business. Her strategic insights have led to successful product launches that exceeded our targets."
      },
      {
        "name": "Sophia Li",
        "jobTitle": "Marketing Director at MarketMasters",
        "srcImage": "/profile37.png",
        "message": "Her ability to align product management with marketing strategies has been crucial in driving our product's success in the market."
      }
    ],
    "profileTags": [
      "product management",
      "market strategy",
      "leadership"
    ],
    "interestedTags": [
      "technology trends",
      "user experience design",
      "strategic innovation"
    ],
    "resumeLink": "https://linkedin.com"
  }
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
