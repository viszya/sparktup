"use client"

import { twp, cn } from "@/server/utils";
import { Icons } from "@/app/_components/icons";
import Image from "next/image";
import { Button } from "@/app/_components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/app/_components/ui/carousel";
import { api } from "@/trpc/react";
import Link from "next/link";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/app/_components/ui/drawer"



const data = {
  companyName: "Microsoft Corparation",
  linkedInMembers: "224,866 associated members",
  logoSrc: "/microsoft_logo.png",
  location: "San Francisco, CA, USA",
  website: "https://news.microsoft.com/",
  industry: "Technology",
  companySize: "10,001+ employees",
  size: "10,001+ employees",
  companyBannerImgSrc: "/microsoft-industry-fair-microsoftData.jpeg",
  foundingYear: "Founded in 1975",
  missionValues: `Every company has a mission. What's ours? To empower every person and every organization to achieve more. We believe technology can and should be a force for good and that meaningful innovation contributes to a brighter world in the future and today. Our culture doesn’t just encourage curiosity; it embraces it. Each day we make progress together by showing up as our authentic selves. We show up with a learn-it-all mentality. We show up cheering on others, knowing their success doesn't diminish our own. We show up every day open to learning our own biases, changing our behavior, and inviting in differences. Because impact matters.`,
  missionAndValues: "Empowering innovation through cutting-edge technology solutions",
  about: "Tech Solutions Inc. is a leading technology company that specializes in providing innovative solutions to businesses of all sizes. With a team of dedicated professionals, we strive to empower our clients to achieve their goals through the use of cutting-edge technology.",
  solutionsOverview: "Our solutions cover a wide range of services, including software development, cloud computing, data analytics, and more. We tailor our offerings to meet the unique needs of each client, ensuring seamless integration and maximum impact.",
  keyBenefits: " - Scalable and flexible solutions\n - Robust security measures\n - Dedicated customer support\n - Continuous innovation and updates",
  keyFeatures: " - Customized software development\n - Cloud infrastructure management\n - Data-driven insights and analytics\n - Strategic consulting and planning",
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
  teamMembers: [
    {
      name: "John Smith",
      role: "CEO",
      photoSrc: "/jhon-doe-microsoftData.jpeg"
    },
    {
      name: "Jane Doe",
      role: "CTO",
      photoSrc: "/jane-doe-microsoftData.jpeg"
    },
    // Add more team members as needed
  ],
  companyCulture: "At Tech Solutions Inc., we foster a culture of collaboration, continuous learning, and diversity. Our team members are our greatest asset, and we prioritize their well-being, growth, and work-life balance. Join us in shaping the future of technology!",
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
  mediaGallery: [
    "/office1-microsoftData.jpeg",
    "/office2-microsoftData.jpeg",
    "/office3-microsoftData.jpeg"
  ],
  termsAndConditionsLink: "https://techsolutions.com/terms",
  privacyPolicyLink: "https://techsolutions.com/privacy",
  eventData: [
    {
      date: "Thu, Mar 16, 2023, 8:00 AM",
      title: "The Future of Work: Reinventing Productivity with AI",
      location: "Live Video",
      imgsrc: "/future_of_work-microsoftData.jpeg",
      attendees: "31,740 attendees",
      viewLink: "https://example.com/event1",
    },
    {
      date: "Tue, Nov 29, 2022, 5:00 PM",
      title: "Microsoft Industry Fair 2022",
      location: "Live Video",
      imgsrc: "/microsoft-industry-fair-microsoftData.jpeg",
      attendees: "102 attendees",
      viewLink: "https://example.com/event2",
    },
    {
      date: "Mon, Nov 14, 2022, 5:00 PM",
      title: "Microsoft Hong Kong Cybersecurity Summit 2022",
      location: "Live Video",
      imgsrc: "/event3-microsoftData.jpeg",
      attendees: "78 attendees",
      viewLink: "https://example.com/event3",
    },
  ],

};

export default function CompanyProfile() {
  return (
    <div className={cn("", twp().wrapper)}>

      {/* Company Headline */}
      <div className="grid grid-flow-col grid-cols-2 md:grid-cols-1 gap-x-6 m-10 bg-gray-300/10 p-8 rounded-2xl border-2 border-gray-200">
        <div className=" max-w-[30rem]">
          <div className="flex flex-row gap-x-8 mb-4">
            <Image src={data.logoSrc} alt="company-logo" width={100} height={50} className="rounded-full overflow-hidden" />
            <div>
              <div className="mt-4 text-2xl font-medium tracking-tight text-black sm:text-4xl">{data.companyName}</div>
              <div className="mt-2 flex flex-row items-center">
                <Icons.pin className="h-4 w-4 mr-2" />
                <div className="text-gray-500">{data.location}</div>
              </div>
            </div>
          </div>
          <div className="flex flex-row gap-x-4">
            <div className="w-full flex flex-row justify-center items-center px-3 py-0.5 text-sm border font-medium text-gray-500 duration-200 rounded-sm">
              <Icons.user className="h-4 w-4 mr-2" />
              {data.size}
            </div>
            <Drawer>
              <DrawerTrigger className="w-full flex flex-row justify-center items-center px-3 py-0.5 text-sm border font-medium text-gray-500 duration-200 rounded-sm hover:text-red-300 hover:border-red-400 hover:scale-95 hover:cursor-pointer">
                <Icons.contact className="h-4 w-4 mr-2" />
                Contact Us
              </DrawerTrigger>
              <DrawerContent className="flex justify-center items-center">
                <DrawerHeader className="max-w-5xl flex justify-center items-center">
                  <section className="m-10 flex justify-center items-center">
                    <div className="mt-8 text-xl font-medium tracking-tight text-black sm:text-2xl">Contact Information</div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-4">
                      <div className="p-4 bg-gray-300/10 rounded-xl border-2 border-gray-200">
                        <p className="text-base text-black font-medium">{data.contactInformation.email}</p>
                        <p className="text-sm text-gray-500">Email</p>
                      </div>
                      <div className="p-4 bg-gray-300/10 rounded-xl border-2 border-gray-200">
                        <p className="text-base text-black font-medium">{data.contactInformation.phone}</p>
                        <p className="text-sm text-gray-500">Phone</p>
                      </div>
                      <div className="p-4 bg-gray-300/10 rounded-xl border-2 border-gray-200">
                        <p className="text-base text-black font-medium">{data.contactInformation.address}</p>
                        <p className="text-sm text-gray-500">Address</p>
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
          </div>
          <Button className="text-md mt-6 items-center justify-center w-full px-6 py-12 text-center text-white duration-200 bg-black border-2 border-black rounded-lg inline-flex hover:bg-transparent hover:border-black hover:text-black focus:outline-none focus-visible:outline-black">
            <Icons.users className="h-4 w-4 mr-2" />
            CONNECT TO JOBS
          </Button>
        </div>
        <div>
          <Image src={data.companyBannerImgSrc} alt="company-banner" width={400} height={150} className="rounded-2xl overflow-hidden" />
        </div>
      </div>

      {/* About the Company */}
      <section className="m-10">
        <div className="mt-8 text-xl font-medium tracking-tight text-black sm:text-2xl">About the Company</div>
        <div className="mt-2 text-gray-500">{data.about}</div>
      </section>

      {/* Company Solutions */}
      <section className="m-10">
        <div className="mt-8 text-xl font-medium tracking-tight text-black sm:text-2xl">Company Solutions</div>
        <p className="mt-2 text-gray-500">{data.solutionsOverview}</p>
        <div className="mt-2 flex flex-row justify-center items-center bg-gray-300/10 p-8 rounded-2xl border-2 border-gray-200">
          <section className="m-2 w-full">
            <div className=" text-xl font-medium tracking-tight text-black sm:text-2xl">Key Features for Companies</div>
            <div className="mt-4 bg-gray-300/10 p-8 rounded-2xl border-2 border-gray-200">
              <ul className="list-disc list-inside text-gray-500">
                {data.keyFeatures.split("\n").map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          </section>
          <section className="m-2 w-full">
            <div className="text-xl font-medium tracking-tight text-black sm:text-2xl">Key Benefits </div>
            <div className="mt-4 bg-gray-300/10 p-8 rounded-2xl border-2 border-gray-200">
              <ul className="list-disc list-inside text-gray-500">
                {data.keyBenefits.split("\n").map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          </section>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="m-10">
        <div className="mt-8 text-xl font-medium tracking-tight text-black sm:text-2xl">Client Testimonials</div>
        <div className="mt-4 bg-gray-300/10 p-8 rounded-2xl border-2 border-gray-200">
          {data.testimonials.map((testimonial, index) => (
            <div key={index} className="mb-4">
              <p className="text-gray-500">{testimonial.feedback}</p>
              <p className="text-black font-medium">{`- ${testimonial.clientName}`}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Past Events */}
      <section className="mx-6">
        <div className="mt-8 mx-4 text-xl font-medium tracking-tight text-black sm:text-2xl">Company Events</div>
        <Carousel className="w-full  mx-auto mt-4">
          <CarouselContent>
            {data.eventData.map((event, index) => (
              <CarouselItem key={index} className="p-4 md:px-4 lg:px-8 basis-1/2 h-full"> {/* Set a fixed height */}
                <div className="bg-gray-300/10 rounded-xl border-2 border-gray-200 flex flex-col">
                  {/* Event Date */}
                  <div className="flex items-center justify-between p-4">
                    <p className="text-base text-gray-500">{event.date}</p>
                    <div className="flex-shrink-0">
                      <Icons.calendar className="h-4 w-4 text-gray-500" />
                    </div>
                  </div>
                  {/* Event Title */}
                  <div className="text-base font-medium text-black p-4">{event.title}</div>
                  {/* Event Location (if available) */}
                  {event.location && <p className="text-sm text-gray-500 p-4">{event.location}</p>}
                  {/* Event Image */}
                  <div className="overflow-hidden w-full">
                    <Image src={event.imgsrc} alt={`event-${index}`} width={500} height={200} className="object-cover" />
                  </div>
                  {/* Number of Attendees */}
                  <div className="mt-1 text-base text-gray-500 p-4 flex flex-row justify-center items-center">
                    <Icons.users className="h-4 w-4 mr-2" />
                    {event.attendees}
                  </div>
                  {/* View Button */}
                  <Link
                    href={event.viewLink}
                    className="mt-4 text-sm items-center justify-center w-full px-4 py-2.5 text-center text-white duration-200 bg-black border-2 border-black rounded-lg inline-flex hover:bg-transparent hover:border-black hover:text-black focus:outline-none focus-visible:outline-black"
                  >
                    View
                  </Link>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </section>

      {/* Team Members */}
      <section className="m-10">
        <div className="mt-8 text-xl font-medium tracking-tight text-black sm:text-2xl">Team Members</div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-4">
          {data.teamMembers.map((teamMember, index) => (
            <div key={index} className="p-4 bg-gray-300/10 rounded-xl border-2 border-gray-200">
              <Image src={teamMember.photoSrc} alt={teamMember.name} width={100} height={100} className="rounded-full" />
              <p className="text-base text-black font-medium mt-2">{teamMember.name}</p>
              <p className="text-sm text-gray-500">{teamMember.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Information */}
      <section className="m-10">
        <div className="mt-8 text-xl font-medium tracking-tight text-black sm:text-2xl">Contact Information</div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-4">
          <div className="p-4 bg-gray-300/10 rounded-xl border-2 border-gray-200">
            <p className="text-base text-black font-medium">{data.contactInformation.email}</p>
            <p className="text-sm text-gray-500">Email</p>
          </div>
          <div className="p-4 bg-gray-300/10 rounded-xl border-2 border-gray-200">
            <p className="text-base text-black font-medium">{data.contactInformation.phone}</p>
            <p className="text-sm text-gray-500">Phone</p>
          </div>
          <div className="p-4 bg-gray-300/10 rounded-xl border-2 border-gray-200">
            <p className="text-base text-black font-medium">{data.contactInformation.address}</p>
            <p className="text-sm text-gray-500">Address</p>
          </div>
        </div>
      </section>

      {/* Career Opportunities */}
      <section className="m-10">
        <div className="mt-8 text-xl font-medium tracking-tight text-black sm:text-2xl">Career Opportunities</div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-4 bg-gray-300/10 rounded-xl border-2 border-gray-200 p-4">
          {data.careerOpportunities.map((job, index) => (
            <div key={index} className="p-4 bg-gray-300/10 rounded-xl border-2 border-gray-200">
              <p className="text-base text-black font-medium">{job.position}</p>
              <p className="text-sm text-gray-500">{job.location}</p>
              <a href={job.applyLink} className="text-sm text-blue-500 hover:underline">Apply Now</a>
            </div>
          ))}
          <Button className="flex flex-row p-4 h-full rounded-xl">
            See More <Icons.arrowRight className="h-4 w-4 ml-2" />
          </Button>
        </div>
      </section>

      {/* Company Culture */}
      <section className="m-10">
        <div className="mt-8 text-xl font-medium tracking-tight text-black sm:text-2xl">Company Culture</div>
        <div className="mt-2 text-gray-500">{data.companyCulture}</div>
      </section>

      {/* Media Gallery */}
      <section className="m-10">
        <div className="mt-8 text-xl font-medium tracking-tight text-black sm:text-2xl">Media Gallery</div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-4">
          {data.mediaGallery.map((imageSrc, index) => (
            <div key={index} className="overflow-hidden rounded-xl border-2 border-gray-200">
              <Image src={imageSrc} alt={`company-media-${index}`} width={400} height={300} className="object-cover" />
            </div>
          ))}
        </div>
      </section>

      {/* Terms and Conditions / Privacy Policy */}
      <section className="m-10">
        <div className="mt-8 text-xl font-medium tracking-tight text-black sm:text-2xl">Legal Information</div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
          <div className="p-4 bg-gray-300/10 rounded-xl border-2 border-gray-200">
            <p className="text-base text-black font-medium">Terms and Conditions</p>
            <a href={data.termsAndConditionsLink} className="text-sm text-blue-500 hover:underline">Read More</a>
          </div>
          <div className="p-4 bg-gray-300/10 rounded-xl border-2 border-gray-200">
            <p className="text-base text-black font-medium">Privacy Policy</p>
            <a href={data.privacyPolicyLink} className="text-sm text-blue-500 hover:underline">Read More</a>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="m-10">
        <div className="mt-8 text-xl font-medium tracking-tight text-black sm:text-2xl">Overview</div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
          {/* Company Mission and Values */}
          <div className="p-4 bg-gray-300/10 rounded-xl border-2 border-gray-200">
            <div className="mt-2 text-base font-medium text-black">
              Mission and Values
            </div>
            <div className="mt-2 text-gray-500">
              {data.missionValues}
            </div>
          </div>

          {/* Company Information */}
          <div className="p-4 bg-gray-300/10 rounded-xl border-2 border-gray-200">
            <div className="mt-2 text-base font-medium text-black">
              Company Information
            </div>
            <div className="mt-2 text-gray-500">
              <div>
                <span className="font-medium">Website:</span>{" "}
                <a href={data.website} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                  {data.website}
                </a>
              </div>
              <div>
                <span className="font-medium">Industry:</span> {data.industry}
              </div>
              <div>
                <span className="font-medium">Company Size:</span> {data.size}
              </div>
              <div>
                <span className="font-medium">Headquarters:</span> {data.location}
              </div>
              <div>
                <span className="font-medium">Founded:</span> {data.foundingYear}
              </div>
              <div>
                <span className="font-medium">LinkedIn Members:</span> {data.linkedInMembers}
              </div>
              <div className="mt-2">
                <span className="font-medium">Specialties:</span>{" "}
                {data.specialties.map((specialty, index) => (
                  <span key={index} className="mr-2">
                    {specialty}
                    {index < data.specialties.length - 1 && ","}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="m-10">
        <div className="mt-8 text-xl font-medium tracking-tight text-black sm:text-2xl">Commitments</div>
        <div className="mt-4 p-4 bg-gray-300/10 rounded-xl border-2 border-gray-200">
          <div className="grid grid-cols-3 gap-8">
            <div className="col-span-1 p-4 bg-gray-300/10 rounded-xl border-2 border-gray-200">
              <div className="flex items-center space-x-2 mb-4 ">
                <Icons.heart className="h-4 w-4 text-red-500" />
                <span className="text-lg font-semibold">Featured</span>
              </div>
              <ul className="space-y-2">
                <li className="text-sm font-medium text-gray-700">Environmental sustainability</li>
                <li className="text-sm text-gray-500">Social impact</li>
                <li className="text-sm text-gray-500">Diversity, equity, and inclusion</li>
                <li className="text-sm text-gray-500">Career growth and learning</li>
                <li className="text-sm text-gray-500">Work-life balance</li>
              </ul>
            </div>
            <div className="col-span-2 p-4 bg-gray-300/10 rounded-xl border-2 border-gray-200">
              <div className="flex items-center space-x-2 mb-4 ">
                <Icons.tree className="h-4 w-4 text-green-500" />
                <span className="text-lg font-semibold">Environmental sustainability</span>
              </div>
              <p className="text-sm text-gray-700 mb-4">
                Microsoft has public, time-bound commitments to become carbon negative, water positive, and zero waste in
                our operations by 2030. Microsoft is accelerating progress toward a more sustainable future by measuring and
                reducing our environmental footprint, accelerating research, helping our customers build sustainable
                solutions, and advocating for policies that combat climate change and promote environmental justice.
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>


  );
}
