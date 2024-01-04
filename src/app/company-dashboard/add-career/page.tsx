"use client"

import { useState } from "react";
import { api } from "@/trpc/react";
import { Icons } from "@/app/_components/icons";
import { buttonVariants } from "@/app/_components/ui/button";
import { cn, formatDate } from "@/server/utils";
import { Input } from "@/app/_components/ui/input";
import { toast } from "sonner"


export default function AddCareer() {
    const [position, setPosition] = useState("");
    const [location, setLocation] = useState("");
    const [applyLink, setApplyLink] = useState("");
    const [companyLogo, setCompanyLogo] = useState("");
    const [description, setDescription] = useState("");
    const [pricingDescription, setPricingDescription] = useState("");
    const [sizeDescription, setSizeDescription] = useState("");
    const [skills, setSkills] = useState("");
    const [jobLink, setJobLink] = useState("");
    const [seeSrc, setSeeSrc] = useState("");
    const [thumbnail, setThumbnail] = useState("");
    const [about, setAbout] = useState("");
    const [pay, setPay] = useState("");
    const [companyAbout, setCompanyAbout] = useState("");
    const [isLoading] = useState<boolean>(false)
    const [isNextLoading, setIsNextLoading] = useState<boolean>(false)

    const company = api.test.getCompanyProfilePrivate.useQuery();

    const createCareerOpportunity = api.test.createCareerOpportunity.useMutation({
        onSuccess: () => {
            setIsNextLoading(false);
            toast("Success", {
                description: "Career has been created at " + formatDate(Date()),
            });
        },
    });

    function onSubmit() {
        setIsNextLoading(true)
        createCareerOpportunity.mutate({
            id: company.data?.company[0]?.id ?? "",
            position: position,
            location: location,
            applyLink: applyLink,
            companyLogo: companyLogo,
            description: description,
            pricingDescription: pricingDescription,
            sizeDescription: sizeDescription,
            skills: skills,
            jobLink: jobLink,
            seeSrc: seeSrc,
            thumbnail: thumbnail,
            about: about,
            pay: pay,
            companyAbout: companyAbout,
        });
    }

    return (
        <div className="flex flex-col px-8">
            <div>
                <h2 className="text-3xl font-bold tracking-tight">Add Career</h2>
                <p className="text-muted-foreground">
                    Add Career to your company profile by filling out the form below.
                </p>
            </div>
            <div className="flex flex-col justify-center w-full max-w-5xl">
                <div className="flex flex-col mt-5 p-5 border border-secondary rounded-xl">
                    <div className="flex flex-col justify-center text-center md:flex-row md:text-left">
                        <div className="flex flex-col justify-center max-w-5xl w-full  space-y-12">
                            <form
                                className="flex flex-col gap-y-9"
                                onSubmit={(e) => {
                                    e.preventDefault();
                                    onSubmit();
                                }}
                            >
                                <div className="col-span-full">
                                    <label className="block mb-3 text-sm font-medium text-primary/90">
                                        What is positiong of the job?
                                    </label>
                                    <Input
                                        placeholder="iOS Developer"
                                        className="rounded-xl px-6 py-3 placeholder:text-primary/40 border-primary/20"
                                        type="text"
                                        required
                                        value={position}
                                        onChange={(e) => setPosition(e.target.value)}
                                    />
                                </div>
                                <div className="col-span-full">
                                    <label className="block mb-3 text-sm font-medium text-primary/90">
                                        What is the location of the job?
                                    </label>
                                    <Input
                                        placeholder="San Francisco, CA"
                                        className="rounded-xl px-6 py-3 placeholder:text-primary/40 border-primary/20"
                                        type="text"
                                        required
                                        value={location}
                                        onChange={(e) => setLocation(e.target.value)}
                                    />
                                </div>
                                <div className="col-span-full">
                                    <label className="block mb-3 text-sm font-medium text-primary/90">
                                        What is the apply link of the job?
                                    </label>
                                    <Input
                                        placeholder="https://example.com/apply"
                                        className="rounded-xl px-6 py-3 placeholder:text-primary/40 border-primary/20"
                                        type="text"
                                        required
                                        value={applyLink}
                                        onChange={(e) => setApplyLink(e.target.value)}
                                    />
                                </div>
                                <div className="col-span-full">
                                    <label className="block mb-3 text-sm font-medium text-primary/90">
                                        What is the company logo of the job?
                                    </label>
                                    <Input
                                        placeholder="https://example.com/logo.png"
                                        className="rounded-xl px-6 py-3 placeholder:text-primary/40 border-primary/20"
                                        type="text"
                                        required
                                        value={companyLogo}
                                        onChange={(e) => setCompanyLogo(e.target.value)}
                                    />
                                </div>
                                <div className="col-span-full">
                                    <label className="block mb-3 text-sm font-medium text-primary/90">
                                        What is the description of the job?
                                    </label>
                                    <Input
                                        placeholder="Job description"
                                        className="rounded-xl px-6 py-3 placeholder:text-primary/40 border-primary/20"
                                        type="text"
                                        required
                                        value={description}
                                        onChange={(e) => setDescription(e.target.value)}
                                    />
                                </div>
                                <div className="col-span-full">
                                    <label className="block mb-3 text-sm font-medium text-primary/90" >
                                        What is the pricing description of the job?
                                    </label>
                                    <Input
                                        placeholder="Pricing description"
                                        className="rounded-xl px-6 py-3 placeholder:text-primary/40 border-primary/20"
                                        type="text"
                                        required
                                        value={pricingDescription}
                                        onChange={(e) => setPricingDescription(e.target.value)}
                                    />
                                </div>
                                <div className="col-span-full">
                                    <label className="block mb-3 text-sm font-medium text-primary/90">
                                        What is the size description of the job?
                                    </label>
                                    <Input
                                        placeholder="Size description"
                                        className="rounded-xl px-6 py-3 placeholder:text-primary/40 border-primary/20"
                                        type="text"
                                        required
                                        value={sizeDescription}
                                        onChange={(e) => setSizeDescription(e.target.value)}
                                    />
                                </div>
                                <div className="col-span-full">
                                    <label className="block mb-3 text-sm font-medium text-primary/90" >
                                        What is the skills of the job?
                                    </label>
                                    <Input
                                        placeholder="Skills"
                                        className="rounded-xl px-6 py-3 placeholder:text-primary/40 border-primary/20"
                                        type="text"
                                        required
                                        value={skills}
                                        onChange={(e) => setSkills(e.target.value)}
                                    />
                                </div>
                                <div className="col-span-full">
                                    <label className="block mb-3 text-sm font-medium text-primary/90">
                                        What is the job link of the job?
                                    </label>
                                    <Input
                                        placeholder="https://example.com/job"
                                        className="rounded-xl px-6 py-3 placeholder:text-primary/40 border-primary/20"
                                        type="text"
                                        required
                                        value={jobLink}
                                        onChange={(e) => setJobLink(e.target.value)}
                                    />
                                </div>
                                <div className="col-span-full">
                                    <label className="block mb-3 text-sm font-medium text-primary/90" >
                                        What is the see source of the job?
                                    </label>
                                    <Input
                                        placeholder="https://example.com/see"
                                        className="rounded-xl px-6 py-3 placeholder:text-primary/40 border-primary/20"
                                        type="text"
                                        required
                                        value={seeSrc}
                                        onChange={(e) => setSeeSrc(e.target.value)}
                                    />
                                </div>
                                <div className="col-span-full">
                                    <label className="block mb-3 text-sm font-medium text-primary/90" >
                                        What is the thumbnail of the job?
                                    </label>
                                    <Input
                                        placeholder="https://example.com/thumbnail"
                                        className="rounded-xl px-6 py-3 placeholder:text-primary/40 border-primary/20"
                                        type="text"
                                        required
                                        value={thumbnail}
                                        onChange={(e) => setThumbnail(e.target.value)}
                                    />
                                </div>
                                <div className="col-span-full">
                                    <label className="block mb-3 text-sm font-medium text-primary/90" >
                                        What is the about of the job?
                                    </label>
                                    <Input
                                        placeholder="About"
                                        className="rounded-xl px-6 py-3 placeholder:text-primary/40 border-primary/20"
                                        type="text"
                                        required
                                        value={about}
                                        onChange={(e) => setAbout(e.target.value)}
                                    />
                                </div>
                                <div className="col-span-full">
                                    <label className="block mb-3 text-sm font-medium text-primary/90" >
                                        What is the pay of the job?
                                    </label>
                                    <Input
                                        placeholder="Pay"
                                        className="rounded-xl px-6 py-3 placeholder:text-primary/40 border-primary/20"
                                        type="text"
                                        required
                                        value={pay}
                                        onChange={(e) => setPay(e.target.value)}
                                    />
                                </div>
                                <div className="col-span-full">
                                    <label className="block mb-3 text-sm font-medium text-primary/90" >
                                        What is the company about of the job?
                                    </label>
                                    <Input
                                        placeholder="Company about"
                                        className="rounded-xl px-6 py-3 placeholder:text-primary/40 border-primary/20"
                                        type="text"
                                        required
                                        value={companyAbout}
                                        onChange={(e) => setCompanyAbout(e.target.value)}
                                    />
                                </div>
                                
                                <div className="col-span-full">
                                    <button
                                        type="submit"
                                        className={cn(buttonVariants({ variant: "outline" }), "max-w-60 w-60 items-center justify-center px-6 py-2.5 text-center text-secondary duration-200 bg-primary border-2 border-primary rounded-xl inline-flex hover:bg-transparent hover:border-primary hover:text-primary focus:outline-none focus-visible:outline-primary text-sm focus-visible:ring-primary")}
                                        disabled={isLoading || isNextLoading}
                                    >
                                        {isNextLoading ? (
                                            <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                                        ) : (<></>
                                        )}{" "}
                                        Add Career
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}
