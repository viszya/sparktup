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
    const [companyName, setCompanyName] = useState("");
    const [linkedInMembers, setLinkedInMembers] = useState("");
    const [logoSrc, setLogoSrc] = useState("");
    const [location, setLocation] = useState("");
    const [website, setWebsite] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [isNextLoading, setIsNextLoading] = useState<boolean>(false)
    const [submitted, setSubmitted] = useState(false);

    function onSubmit() {
        setIsLoading(true);
        setSubmitted(true);
        addFormVals({
            companyName,
            linkedInMembers,
            logoSrc,
            location,
            website,
        });
        setIsLoading(false);
        toast({
            title: "Success",
            description: "Company Profile: Form 1 Completed",
        });

    }

    return (
        <section>
            <div className="flex flex-col mt-5 p-5 border border-secondary rounded-xl bg-white/70">
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
                                    Company Name?
                                </label>
                                <Input
                                    placeholder="Google, Microsoft, etc."
                                    className="rounded-xl px-6 py-3 placeholder:text-primary/40 border-primary/20"
                                    type="text"
                                    required
                                    value={companyName}
                                    onChange={(e) => setCompanyName(e.target.value)}
                                />
                            </div>
                            <div className="col-span-full">
                                <label className="block mb-3 text-sm font-medium text-primary/90">
                                    How many Members/Employees?
                                </label>
                                <Input
                                    placeholder="10000+"
                                    className="rounded-xl px-6 py-3 placeholder:text-primary/40 border-primary/20"
                                    type="text"
                                    required
                                    value={linkedInMembers}
                                    onChange={(e) => setLinkedInMembers(e.target.value)}
                                />
                            </div>
                            <div className="col-span-full">
                                <label className="block mb-3 text-sm font-medium text-primary/90">
                                    Company Logo?
                                </label>
                                <Input
                                    placeholder="Current Logo"
                                    className="rounded-xl px-6 py-3 placeholder:text-primary/40 border-primary/20"
                                    type="text"
                                    required
                                    value={logoSrc}
                                    onChange={(e) => setLogoSrc(e.target.value)}
                                />
                            </div>
                            <div className="col-span-full">
                                <label className="block mb-3 text-sm font-medium text-primary/90">
                                    Company Location <i>City, State</i>
                                </label>
                                <Input
                                    placeholder="Seatte, WA"
                                    className="rounded-xl px-6 py-3 placeholder:text-primary/40 border-primary/20"
                                    type="text"
                                    required
                                    value={location}
                                    onChange={(e) => setLocation(e.target.value)}
                                />
                            </div>
                            <div className="col-span-full">
                                <label className="block mb-3 text-sm font-medium text-primary/90">
                                    Website URL?
                                </label>
                                <Input
                                    placeholder="google.com"
                                    className="rounded-xl px-6 py-3 placeholder:text-primary/40 border-primary/20"
                                    type="url"
                                    required
                                    value={website}
                                    onChange={(e) => setWebsite(e.target.value)}
                                />
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
                                    Update Profile
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
