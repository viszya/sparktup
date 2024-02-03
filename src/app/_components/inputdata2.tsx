"use client";
import { useToast } from "@/app/_components/ui/use-toast";
import { api } from "@/trpc/react";
import { data2 } from "@/app/company/data2";

// export const data = {
//     companyName: "Tech Solutions Inc.",
//     linkedInMembers: "224,866 associated members",
//     logoSrc: "/microsoft_logo.png",
//     location: "San Francisco, CA, USA",
//     website: "https://news.microsoft.com/",
//     industry: "Technology",
//     companySize: "10,001+ employees",
//     size: "10,001+ employees",
//     companyBannerImgSrc: "/microsoft-industry-fair-microsoftData.jpeg",
//     foundingYear: "Founded in 1975",
//     missionValues: `Every company has a mission. What's ours? To empower every person and every organization to achieve more. We believe technology can and should be a force for good and that meaningful innovation contributes to a brighter world in the future and today. Our culture doesn’t just encourage curiosity; it embraces it. Each day we make progress together by showing up as our authentic selves. We show up with a learn-it-all mentality. We show up cheering on others, knowing their success doesn't diminish our own. We show up every day open to learning our own biases, changing our behavior, and inviting in differences. Because impact matters.`,
//     missionAndValues: "Empowering innovation through cutting-edge technology solutions",
//     about: "Tech Solutions Inc. is a leading technology company that specializes in providing innovative solutions to businesses of all sizes. With a team of dedicated professionals, we strive to empower our clients to achieve their goals through the use of cutting-edge technology.",
//     solutionsOverview: "Our solutions cover a wide range of services, including software development, cloud computing, data analytics, and more. We tailor our offerings to meet the unique needs of each client, ensuring seamless integration and maximum impact.",
//     keyBenefits: " - Scalable and flexible solutions\n - Robust security measures\n - Dedicated customer support\n - Continuous innovation and updates",
//     keyFeatures: " - Customized software development\n - Cloud infrastructure management\n - Data-driven insights and analytics\n - Strategic consulting and planning",
//     testimonials: [
//         {
//             clientName: "ABC Corporation",
//             feedback: "Tech Solutions Inc. has been an invaluable partner in our digital transformation journey. Their expertise and commitment to excellence have significantly contributed to our success."
//         },
//         {
//             clientName: "XYZ Enterprises",
//             feedback: "We chose Tech Solutions Inc. for their innovative solutions and they exceeded our expectations. Their team is responsive, knowledgeable, and always ready to tackle new challenges."
//         }
//     ],
//     specialties: [
//         "Business Software",
//         "Developer Tools",
//         "Home & Educational Software",
//         "Tablets",
//         "Search",
//         "Advertising",
//         "Servers",
//         "Windows Operating System",
//         "Windows Applications & Platforms",
//         "Smartphones",
//         "Cloud Computing",
//         "Quantum Computing",
//         "Future of Work",
//         "Productivity",
//         "AI",
//         "Artificial Intelligence",
//         "Machine Learning",
//         "Laptops",
//         "Mixed Reality",
//         "Virtual Reality",
//         "Gaming",
//         "Developers",
//         "IT Professional",
//     ],
//     teamMembers: [
//         {
//             name: "John Smith",
//             role: "CEO",
//             photoSrc: "/jhon-doe-microsoftData.jpeg"
//         },
//         {
//             name: "Jane Doe",
//             role: "CTO",
//             photoSrc: "/jane-doe-microsoftData.jpeg"
//         },
//         // Add more team members as needed
//     ],
//     companyCulture: "At Tech Solutions Inc., we foster a culture of collaboration, continuous learning, and diversity. Our team members are our greatest asset, and we prioritize their well-being, growth, and work-life balance. Join us in shaping the future of technology!",
//     contactInformation: {
//         email: "info@techsolutions.com",
//         phone: "+1 (555) 123-4567",
//         address: "123 Tech Street, San Francisco, CA"
//     },
//     careerOpportunities: [
//         {
//             position: "Software Engineer",
//             location: "San Francisco, CA",
//             applyLink: "https://techsolutions.com/careers/software-engineer",
//             companyLogo: "/applelogo.png",
//             description: "Microsoft · Redmond, WA · Reposted 1 week ago · Over 100 applicants",
//             pricingDescription: "$112,000/yr - $238,600/yr · Hybrid · Full-time",
//             sizeDescription: "10,001+ employees · Software Development",
//             skills: "Music, Audio Recording, +8 more",
//             jobLink: "/",
//             seeSrc: "/",
//             thumbnail: "/microsoft-event.png",
//             about: "343 Industries is the developer of the blockbuster Halo series of video games. As part of Xbox Game Studios, the Halo franchise encompasses games, television series, novels, comics, licensed collectibles, apparel and more. We are looking for new Spartans to join our team to build the next generation of games and experiences in our award-winning sci-fi universe. Do you have experience delivering AAA audio experiences with audio post-production, music, sound design, dialogue recording and pipelines, and mixing? Do you want to build and develop an audio team and stable of partners that can work across stakeholders and products to consistently deliver world class audio to delight our fans?",
//             pay: "$112,000/yr - $238,600/yr",
//             companyAbout: "343 Industries is the developer of the blockbuster Halo series of video games. As part of Xbox Game Studios, the Halo franchise encompasses games, television series, novels, comics, licensed collectibles, apparel and more. We are looking for new Spartans to join our team to build the next generation of games and experiences in our award-winning sci-fi universe. Do you have experience delivering AAA audio experiences with audio post-production, music, sound design, dialogue recording and pipelines, and mixing? Do you want to build and develop an audio team and stable of partners that can work across stakeholders and products to consistently deliver world class audio to delight our fans?",
//         },
//         {
//             position: "Software Engineer",
//             location: "San Francisco, CA",
//             applyLink: "https://techsolutions.com/careers/software-engineer",
//             companyLogo: "/applelogo.png",
//             description: "Microsoft · Redmond, WA · Reposted 1 week ago · Over 100 applicants",
//             pricingDescription: "$112,000/yr - $238,600/yr · Hybrid · Full-time",
//             sizeDescription: "10,001+ employees · Software Development",
//             skills: "Music, Audio Recording, +8 more",
//             jobLink: "/",
//             seeSrc: "/",
//             thumbnail: "/microsoft-event.png",
//             about: "343 Industries is the developer of the blockbuster Halo series of video games. As part of Xbox Game Studios, the Halo franchise encompasses games, television series, novels, comics, licensed collectibles, apparel and more. We are looking for new Spartans to join our team to build the next generation of games and experiences in our award-winning sci-fi universe. Do you have experience delivering AAA audio experiences with audio post-production, music, sound design, dialogue recording and pipelines, and mixing? Do you want to build and develop an audio team and stable of partners that can work across stakeholders and products to consistently deliver world class audio to delight our fans?",
//             pay: "$112,000/yr - $238,600/yr",
//             companyAbout: "343 Industries is the developer of the blockbuster Halo series of video games. As part of Xbox Game Studios, the Halo franchise encompasses games, television series, novels, comics, licensed collectibles, apparel and more. We are looking for new Spartans to join our team to build the next generation of games and experiences in our award-winning sci-fi universe. Do you have experience delivering AAA audio experiences with audio post-production, music, sound design, dialogue recording and pipelines, and mixing? Do you want to build and develop an audio team and stable of partners that can work across stakeholders and products to consistently deliver world class audio to delight our fans?",
//         }
//     ],
//     mediaGallery: [
//         "/office1-microsoftData.jpeg",
//         "/office2-microsoftData.jpeg",
//         "/office3-microsoftData.jpeg"
//     ],
//     termsAndConditionsLink: "https://techsolutions.com/terms",
//     privacyPolicyLink: "https://techsolutions.com/privacy",
//     eventData: [
//         {
//             date: "Thu, Mar 16, 2023, 8:00 AM",
//             eventType: "Live", // or Held,
//             seeSrc: "/",
//             title: "The Future of Work: Reinventing Productivity with AI",
//             location: "Live Video",
//             eventBy: "Event by Microsoft",
//             imgsrc: "/future_of_work-microsoftData.jpeg",
//             about: "Join us for a special event with Satya Nadella and Jared Spataro to learn how AI will power a whole new way of working for every person and organization. The live stream starts at 8 AM Pacific Time on March 16.",
//             attendees: "31,740 attendees",
//             viewLink: "https://example.com/event1",
//             attendSrc: "/",
//             speakers: [
//                 {
//                     name: "Satya Nadella",
//                     fallback: "CN",
//                     imgsrc: "https://github.com/shadcn.png",
//                     position: "3rd+ Chairman and CEO at Microsoft",
//                 },
//                 {
//                     name: "Satya Nadella",
//                     fallback: "CN",
//                     imgsrc: "https://github.com/shadcn.png",
//                     position: "3rd+ Chairman and CEO at Microsoft",
//                 }
//             ]
//         },
//         {
//             date: "Thu, Mar 16, 2023, 8:00 AM",
//             eventType: "Live", // or Held,
//             seeSrc: "/",
//             title: "The Future of Work: Reinventing Productivity with AI",
//             location: "Live Video",
//             eventBy: "Event by Microsoft",
//             imgsrc: "/future_of_work-microsoftData.jpeg",
//             about: "Join us for a special event with Satya Nadella and Jared Spataro to learn how AI will power a whole new way of working for every person and organization. The live stream starts at 8 AM Pacific Time on March 16.",
//             attendees: "31,740 attendees",
//             viewLink: "https://example.com/event1",
//             attendSrc: "/",
//             speakers: [
//                 {
//                     name: "Satya Nadella",
//                     fallback: "CN",
//                     imgsrc: "https://github.com/shadcn.png",
//                     position: "3rd+ Chairman and CEO at Microsoft",
//                 },
//                 {
//                     name: "Satya Nadella",
//                     fallback: "CN",
//                     imgsrc: "https://github.com/shadcn.png",
//                     position: "3rd+ Chairman and CEO at Microsoft",
//                 }
//             ]
//         },
//         {
//             date: "Thu, Mar 16, 2023, 8:00 AM",
//             seeSrc: "/",
//             eventType: "Live", // or Held,
//             title: "The Future of Work: Reinventing Productivity with AI",
//             location: "Live Video",
//             eventBy: "Event by Microsoft",
//             imgsrc: "/future_of_work-microsoftData.jpeg",
//             about: "Join us for a special event with Satya Nadella and Jared Spataro to learn how AI will power a whole new way of working for every person and organization. The live stream starts at 8 AM Pacific Time on March 16.",
//             attendees: "31,740 attendees",
//             viewLink: "https://example.com/event1",
//             attendSrc: "/",
//             speakers: [
//                 {
//                     name: "Satya Nadella",
//                     fallback: "CN",
//                     imgsrc: "https://github.com/shadcn.png",
//                     position: "3rd+ Chairman and CEO at Microsoft",
//                 },
//                 {
//                     name: "Satya Nadella",
//                     fallback: "CN",
//                     imgsrc: "https://github.com/shadcn.png",
//                     position: "3rd+ Chairman and CEO at Microsoft",
//                 }
//             ]
//         },
//     ],
// };
const data = data2[0];

export  function InputData() {
    const { toast } = useToast();

    //const updateProfile = api.test.createCompanyProfile.useMutation();
    //const updateTestimonial = api.test.createTestimonial.useMutation();
    //const s = api.user.getProfile.useQuery({ id: "clqst7m140000stm7xvs7wi5k" });

    // const profile = api.settings.settingsForm1.useMutation();
    // const addSkill = api.settings.settingsForm2.useMutation();
    // const addRecommendation = api.settings.addRecommendation.useMutation();
    // const addProject = api.settings.addProject.useMutation();
    // const addExperience = api.settings.addExperience.useMutation();

    const createCompanyProfile = api.test.createCompanyProfile.useMutation();
    // const createContactInformation = api.test.createContactInformation.useMutation();
    // const createCareerOpportunity = api.test.createCareerOpportunity.useMutation();
    // const createTestimonial = api.test.createTestimonial.useMutation();
    // const createTeamMember = api.test.createTeamMember.useMutation();
    // const createEvent = api.test.createEvent.useMutation();
    // const company = api.test.getCompanyProfilePrivate.useQuery();
    // const companyData = company.data;
    // console.log(companyData);

    function onSubmit() {
        createCompanyProfile.mutate({
            companyName: data.companyName,
            linkedInMembers: data.linkedInMembers,
            logoSrc: data.logoSrc,
            location: data.location,
            website: data.website,
            size: data.size,
            industry: data.industry,
            companySize: data.companySize,
            companyBannerImgSrc: data.companyBannerImgSrc,
            foundingYear: data.foundingYear,
            missionValues: data.missionValues,
            missionAndValues: data.missionAndValues,
            about: data.about,
            solutionsOverview: data.solutionsOverview,
            keyBenefits: data.keyBenefits,
            keyFeatures: data.keyFeatures,
            specialties: data.specialties,
            mediaGallery: data.mediaGallery,
            termsAndConditionsLink: data.termsAndConditionsLink,
            privacyPolicyLink: data.privacyPolicyLink,
            companyCulture: data.companyCulture,
        });

        // createContactInformation.mutate({
        //     id: companyData.company[0].id,
        //     email: data.contactInformation.email,
        //     phone: data.contactInformation.phone,
        //     address: data.contactInformation.address,
        // });

        // createCareerOpportunity.mutate({
        //     id: companyData.company[0].id,
        //     position: data.careerOpportunities[0].position,
        //     location: data.careerOpportunities[0].location,
        //     applyLink: data.careerOpportunities[0].applyLink,
        //     companyLogo: data.careerOpportunities[0].companyLogo,
        //     description: data.careerOpportunities[0].description,
        //     pricingDescription: data.careerOpportunities[0].pricingDescription,
        //     sizeDescription: data.careerOpportunities[0].sizeDescription,
        //     skills: data.careerOpportunities[0].skills,
        //     jobLink: data.careerOpportunities[0].jobLink,
        //     seeSrc: data.careerOpportunities[0].seeSrc,
        //     thumbnail: data.careerOpportunities[0].thumbnail,
        //     about: data.careerOpportunities[0].about,
        //     pay: data.careerOpportunities[0].pay,
        //     companyAbout: data.careerOpportunities[0].companyAbout,
        // });

        // createTestimonial.mutate({
        //     id: companyData.company[0].id,
        //     clientName: data.testimonials[0].clientName,
        //     feedback: data.testimonials[0].feedback,
        // });

        // createTeamMember.mutate({
        //     id: companyData.company[0].id,
        //     name: data.teamMembers[0].name,
        //     role: data.teamMembers[0].role,
        //     photoSrc: data.teamMembers[0].photoSrc,
        // });

        // createEvent.mutate({
        //     id: companyData.company[0].id,
        //     date: data.eventData[0].date,
        //     eventType: data.eventData[0].eventType,
        //     seeSrc: data.eventData[0].seeSrc,
        //     title: data.eventData[0].title,
        //     location: data.eventData[0].location,
        //     eventBy: data.eventData[0].eventBy,
        //     imgsrc: data.eventData[0].imgsrc,
        //     about: data.eventData[0].about,
        //     attendees: data.eventData[0].attendees,
        //     viewLink: data.eventData[0].viewLink,
        //     attendSrc: data.eventData[0].attendSrc,
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
                                TEST DATA INPUT (PROFILE)
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
