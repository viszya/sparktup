"use client"

import { useToast } from "@/app/_components/ui/use-toast";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { api } from "@/trpc/react";


const data = {
    companyName: "Tech Solutions Inc.",
    linkedInMembers: "224,866 associated members",
    logoSrc: "/company-logo.png",
    location: "San Francisco, CA, USA",
    website: "https://news.microsoft.com/",
    industry: "Technology",
    companySize: "10,001+ employees",
    size: "10,001+ employees",
    foundingYear: "Founded in 1975",
    missionValues: `Every company has a mission. What's ours? To empower every person and every organization to achieve more. We believe technology can and should be a force for good and that meaningful innovation contributes to a brighter world in the future and today. Our culture doesn’t just encourage curiosity; it embraces it. Each day we make progress together by showing up as our authentic selves. We show up with a learn-it-all mentality. We show up cheering on others, knowing their success doesn't diminish our own. We show up every day open to learning our own biases, changing our behavior, and inviting in differences. Because impact matters.`,
    missionAndValues: "Empowering innovation through cutting-edge technology solutions",
    about: "Tech Solutions Inc. is a leading technology company that specializes in providing innovative solutions to businesses of all sizes. With a team of dedicated professionals, we strive to empower our clients to achieve their goals through the use of cutting-edge technology.",
    solutionsOverview: "Our solutions cover a wide range of services, including software development, cloud computing, data analytics, and more. We tailor our offerings to meet the unique needs of each client, ensuring seamless integration and maximum impact.",
    keyBenefits: " - Scalable and flexible solutions\n - Robust security measures\n - Dedicated customer support\n - Continuous innovation and updates",
    keyFeatures: " - Customized software development\n - Cloud infrastructure management\n - Data-driven insights and analytics\n - Strategic consulting and planning",
    companyCulture: "At Tech Solutions Inc., we foster a culture of collaboration, continuous learning, and diversity. Our team members are our greatest asset, and we prioritize their well-being, growth, and work-life balance. Join us in shaping the future of technology!",
    specialties: [
        "Business Software",
        "Developer Tools",
        "Home & Educational Software",
        "Tablets",
        "Search",
        "Advertising",
        "Servers",
        "Windows Operating System",
        "Windows Applications & Platforms",
        "Smartphones",
        "Cloud Computing",
        "Quantum Computing",
        "Future of Work",
        "Productivity",
        "AI",
        "Artificial Intelligence",
        "Machine Learning",
        "Laptops",
        "Mixed Reality",
        "Virtual Reality",
        "Gaming",
        "Developers",
        "IT Professional",
    ],
    mediaGallery: [
        "/company-office-photo1.png",
        "/company-events-photo2.png",
        "/company-team-photo3.png"
        // Add more images as needed
    ],
    termsAndConditionsLink: "https://techsolutions.com/terms",
    privacyPolicyLink: "https://techsolutions.com/privacy",
    
    
};

const data2 = {
    testimonials: [
        {
            clientName: "ABC Corporation",
            feedback: "Tech Solutions Inc. has been an invaluable partner in our digital transformation journey. Their expertise and commitment to excellence have significantly contributed to our success."
        },
        {
            clientName: "XYZ Enterprises",
            feedback: "We chose Tech Solutions Inc. for their innovative solutions and they exceeded our expectations. Their team is responsive, knowledgeable, and always ready to tackle new challenges."
        }
    ],

    teamMembers: [
        {
            name: "John Smith",
            role: "CEO",
            photoSrc: "/john-smith-photo.png"
        },
        {
            name: "Jane Doe",
            role: "CTO",
            photoSrc: "/jane-doe-photo.png"
        },
        // Add more team members as needed
    ],
    contactInformation: {
        email: "info@techsolutions.com",
        phone: "+1 (555) 123-4567",
        address: "123 Tech Street, San Francisco, CA"
    },
    careerOpportunities: [
        {
            position: "Software Engineer",
            location: "San Francisco, CA",
            applyLink: "https://techsolutions.com/careers/software-engineer"
        },
        {
            position: "Data Scientist",
            location: "Remote",
            applyLink: "https://techsolutions.com/careers/data-scientist"
        }
        // Add more job openings as needed
    ],

    eventData: [
        {
            date: "Thu, Mar 16, 2023, 8:00 AM",
            title: "The Future of Work: Reinventing Productivity with AI",
            location: "Live Video",
            imgsrc: "/image.jpeg",
            attendees: "31,740 attendees",
            viewLink: "https://example.com/event1",
        },
        {
            date: "Tue, Nov 29, 2022, 5:00 PM",
            title: "Microsoft Industry Fair 2022",
            location: "Live Video",
            imgsrc: "/event2.png",
            attendees: "102 attendees",
            viewLink: "https://example.com/event2",
        },
        {
            date: "Mon, Nov 14, 2022, 5:00 PM",
            title: "Microsoft Hong Kong Cybersecurity Summit 2022",
            location: "Live Video",
            imgsrc: "/event3.png",
            attendees: "78 attendees",
            viewLink: "https://example.com/event3",
        },
    ],
}

export function InputData() {
    const router = useRouter();
    const { toast } = useToast();

    const updateProfile = api.test.createCompanyProfile.useMutation();
    const updateTestimonial = api.test.createTestimonial.useMutation();
    //const s = api.user.getProfile.useQuery({ id: "clqst7m140000stm7xvs7wi5k" });


    function onSubmit() {
        toast({
            title: "Form submitted!",
            description: "Friday, February 10, 2023 at 5:57 PM",
        });
        //updateProfile.mutate(data);
        updateTestimonial.mutate(data2.testimonials[0]);
        //console.log(s);
    }

    return (
        <div>
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
                                    TEST DATA INPUT
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
        </div>
    )
}