"use client"

import { useState } from "react";
import { api } from "@/trpc/react";
import { Icons } from "@/app/_components/icons";
import { buttonVariants } from "@/app/_components/ui/button";
import { cn, formatDate } from "@/server/utils";
import { Input } from "@/app/_components/ui/input";
import { toast } from "sonner"


export default function AddContactInfo() {
    const [companyLogoSrc, setCompanyLogoSrc] = useState("");
    const [companyName, setCompanyName] = useState("");
    const [companyImgSrc, setCompanyImgSrc] = useState("");
    const [engagement, setEngagement] = useState("");
    const [relativeOfWork, setRelativeOfWork] = useState("");
    const [jobTitle, setJobTitle] = useState("");
    const [location, setLocation] = useState("");
    const [time, setTime] = useState("");
    const [jobDescriptions, setJobDescriptions] = useState<string[]>([""]);
    const [isLoading] = useState<boolean>(false)
    const [isNextLoading, setIsNextLoading] = useState<boolean>(false)

    const addProject = api.settings.addExperience.useMutation({
        onSuccess: () => {
            setIsNextLoading(false);
            toast("Success", {
                description: "Testimonial has been created at " + formatDate(Date()),
            });
        },
    });

    x
    const addJobDescription = () => {
        setJobDescriptions([...jobDescriptions, ""]);
    };

    const removeJobDescription = (index: number) => {
        const updatedJobDescriptions = [...jobDescriptions];
        updatedJobDescriptions.splice(index, 1);
        setJobDescriptions(updatedJobDescriptions);
    };

    const updateJobDescription = (index: number, value: string) => {
        const updatedJobDescriptions = [...jobDescriptions];
        updatedJobDescriptions[index] = value;
        setJobDescriptions(updatedJobDescriptions);
    };

    function onSubmit() {
        setIsNextLoading(true)
        addProject.mutate({
            companyLogoSrc,
            companyName,
            companyImgSrc,
            engagement,
            relativeOfWork,
            jobTitle,
            location,
            time,
            jobDescriptions,
        });
    }

    return (
        <div className="flex flex-col px-8">
            <div>
                <h2 className="text-3xl font-bold tracking-tight">Add Project</h2>
                <p className="text-muted-foreground">
                    Edit Your Personal Accounts Settings
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
                                        Company Name
                                    </label>
                                    <Input
                                        type="text"
                                        placeholder="northcreek"
                                        value={companyName}
                                        className="rounded-xl px-6 py-3 placeholder:text-primary/40 border-primary/20"
                                        onChange={(e) => setCompanyName(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="col-span-full">
                                    <label className="block mb-3 text-sm font-medium text-primary/90">
                                        Company Logo
                                    </label>
                                    <Input
                                        type="text"
                                        placeholder="https://northcreek.ca"
                                        value={companyLogoSrc}
                                        className="rounded-xl px-6 py-3 placeholder:text-primary/40 border-primary/20"
                                        onChange={(e) => setCompanyLogoSrc(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="col-span-full">
                                    <label className="block mb-3 text-sm font-medium text-primary/90">
                                        Company Image
                                    </label>
                                    <Input
                                        type="text"
                                        placeholder="https://northcreek.ca"
                                        value={companyImgSrc}
                                        className="rounded-xl px-6 py-3 placeholder:text-primary/40 border-primary/20"
                                        onChange={(e) => setCompanyImgSrc(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="col-span-full">
                                    <label className="block mb-3 text-sm font-medium text-primary/90">
                                        Engagement
                                    </label>
                                    <Input
                                        type="text"
                                        placeholder="Contract"
                                        value={engagement}
                                        className="rounded-xl px-6 py-3 placeholder:text-primary/40 border-primary/20"
                                        onChange={(e) => setEngagement(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="col-span-full">
                                    <label className="block mb-3 text-sm font-medium text-primary/90">
                                        Relative of Work
                                    </label>
                                    <Input
                                        type="text"
                                        placeholder="Software Development"
                                        value={relativeOfWork}
                                        className="rounded-xl px-6 py-3 placeholder:text-primary/40 border-primary/20"
                                        onChange={(e) => setRelativeOfWork(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="col-span-full">
                                    <label className="block mb-3 text-sm font-medium text-primary/90">
                                        Job Title
                                    </label>
                                    <Input
                                        type="text"
                                        placeholder="Software Developer"
                                        value={jobTitle}
                                        className="rounded-xl px-6 py-3 placeholder:text-primary/40 border-primary/20"
                                        onChange={(e) => setJobTitle(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="col-span-full">
                                    <label className="block mb-3 text-sm font-medium text-primary/90">
                                        Location
                                    </label>
                                    <Input
                                        type="text"
                                        placeholder="Toronto, Canada"
                                        value={location}
                                        className="rounded-xl px-6 py-3 placeholder:text-primary/40 border-primary/20"
                                        onChange={(e) => setLocation(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="col-span-full">
                                    <label className="block mb-3 text-sm font-medium text-primary/90">
                                        Time
                                    </label>
                                    <Input
                                        type="text"
                                        placeholder="September 2021 - Present"
                                        value={time}
                                        className="rounded-xl px-6 py-3 placeholder:text-primary/40 border-primary/20"
                                        onChange={(e) => setTime(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="col-span-full">
                                    <label className="block mb-3 text-sm font-medium text-primary/90">
                                        Job Descriptions
                                    </label>
                                    <div className="flex flex-col gap-y-3">
                                        {jobDescriptions.map((jobDescription, index) => (
                                            <Input
                                                key={index}
                                                type="text"
                                                placeholder="I worked on..."
                                                value={jobDescription}
                                                className="rounded-xl px-6 py-3 placeholder:text-primary/40 border-primary/20"
                                                onChange={(e) => {
                                                    const newJobDescriptions = [...jobDescriptions];
                                                    newJobDescriptions[index] = e.target.value;
                                                    setJobDescriptions(newJobDescriptions);
                                                }}
                                                required
                                            />
                                        ))}
                                        <button
                                            type="button"
                                            className={cn(buttonVariants({ variant: "outline" }), "max-w-60 w-60 items-center justify-center px-6 py-2.5 text-center text-secondary duration-200 bg-primary border-2 border-primary rounded-xl inline-flex hover:bg-transparent hover:border-primary hover:text-primary focus:outline-none focus-visible:outline-primary text-sm focus-visible:ring-primary")}
                                            onClick={() => {
                                                setJobDescriptions([...jobDescriptions, ""]);
                                            }}
                                        >
                                            Add Job Description
                                        </button>
                                    </div>
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
                                        Update Account
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
