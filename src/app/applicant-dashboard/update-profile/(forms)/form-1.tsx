"use client"

import { use, useState } from "react";
import { api } from "@/trpc/react";
import { Icons } from "@/app/_components/icons";
import { buttonVariants } from "@/app/_components/ui/button";
import { cn, formatDate } from "@/server/utils";
import { Input } from "@/app/_components/ui/input";
import { useToast } from "@/app/_components/ui/use-toast";

export function Form1({ onNextClick, addFormVals }: any) {
    const { toast } = useToast();
    const [about, setAbout] = useState("");
	const [jobTitle, setJobTitle] = useState("");
	const [yearsOfExperience, setYearsOfExperience] = useState("");
	const [availableForWork, setAvailableForWork] = useState(false);
	const [hasAJob, setHasAJob] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isNextLoading, setIsNextLoading] = useState<boolean>(false)
    const [submitted, setSubmitted] = useState(false);

    function onSubmit() {
        setIsLoading(true);
        setSubmitted(true);
        addFormVals({
            about,
            jobTitle,
            yearsOfExperience,
            availableForWork,
            hasAJob,
        });
        setIsLoading(false);
        toast({
            title: "Success",
            description: "Company Profile: Form 1 Completed",
        });

    }

    return (
        <section>
            <div className="flex flex-col mt-5 p-5 border border-secondary rounded-xl">
                <div className="flex flex-col justify-center text-center md:flex-row md:text-left">
                    <div className="flex flex-col justify-center max-w-5xl w-full  space-y-12">
                        <article>
                            <span className="inline-flex items-center text-primary rounded-xl">
                                <span className="font-mono text-sm" aria-hidden="true">
                                    01
                                </span>
                            </span>
                            <div className="mt-3 text-3xl tracking-tighter text-primary">
                                Update Company Profile
                            </div>
                            <div className="mt-4 text-primary/80">
                                Let&apos;s get started! Please fill out the following
                                form to update your profile information. All this information will be
                                used to update your current profile. You can always edit your profile
                                again.
                            </div>
                        </article>
                        <form
                            className="flex flex-col gap-y-9"
                            onSubmit={(e) => {
                                e.preventDefault();
                                onSubmit();
                            }}
                        >
                            <div className="col-span-full">
                                <label className="block mb-3 text-sm font-medium text-primary/90">
                                   Profile About
                                </label>
                                <Input
                                    placeholder="Google, Microsoft, etc."
                                    className="rounded-xl px-6 py-3 placeholder:text-primary/40 border-primary/20"
                                    type="text"
                                    required
                                    value={about}
                                    onChange={(e) => setAbout(e.target.value)}
                                />
                            </div>
                            <div className="col-span-full">
                                <label className="block mb-3 text-sm font-medium text-primary/90">
                                    Job Title
                                </label>
                                <Input
                                    placeholder="Google, Microsoft, etc."
                                    className="rounded-xl px-6 py-3 placeholder:text-primary/40 border-primary/20"
                                    type="text"
                                    required
                                    value={jobTitle}
                                    onChange={(e) => setJobTitle(e.target.value)}
                                />
                            </div>
                            <div className="col-span-full">
                                <label className="block mb-3 text-sm font-medium text-primary/90">
                                    Years of Experience
                                </label>
                                <Input
                                    placeholder="Google, Microsoft, etc."
                                    className="rounded-xl px-6 py-3 placeholder:text-primary/40 border-primary/20"
                                    type="text"
                                    required
                                    value={yearsOfExperience}
                                    onChange={(e) => setYearsOfExperience(e.target.value)}
                                />
                            </div>
                            
                            <div className="col-span-full">
								<label className="block mb-3 text-sm font-medium text-gray-600">
									Are you available for work?
								</label>
								<input
									className="mr-2"
									type="checkbox"
									checked={availableForWork}
									onChange={() => setAvailableForWork(!availableForWork)}
								/>
								<span className="text-gray-600">Yes, I am available for work</span>
							</div>

                            <div className="col-span-full">
								<label className="block mb-3 text-sm font-medium text-gray-600">
									Do you have a job?
								</label>
								<input
									className="mr-2"
									type="checkbox"
									checked={hasAJob}
									onChange={() => setHasAJob(!hasAJob)}
								/>
								<span className="text-gray-600">Yes, I am available for work</span>
							</div>
                            
                            <div className="col-span-full">
                                <button
                                    type="submit"
                                    className={cn(buttonVariants({ variant: "outline" }), "items-center justify-center w-full px-6 py-2.5 text-center text-secondary duration-200 bg-primary border-2 border-primary rounded-xl inline-flex hover:bg-transparent hover:border-primary hover:text-primary focus:outline-none focus-visible:outline-primary text-sm focus-visible:ring-primary")}
                                    disabled={isLoading}
                                >
                                    {isLoading ? (
                                        <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                                    ) : (
                                        <></>
                                    )}{" "}
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            {submitted ? (
                <div className="flex justify-center items-center">
                    <div className="border border-dashed border-primary/60 p-2 flex justify-center items-center rounded-xl mt-2">
                        {/* Next Button */}

                        <button onClick={onNextClick} className={cn(buttonVariants({ variant: "default" }), " rounded-xl w-26")}>
                            Next
                            <Icons.chevronRight className="h-5 w-5 ml-2" />
                        </button>
                    </div>
                </div>
            ) : (<></>)}
        </section>
    );
}
