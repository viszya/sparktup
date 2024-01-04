"use client"

import { useState } from "react";
import { api } from "@/trpc/react";
import { Icons } from "@/app/_components/icons";
import { buttonVariants } from "@/app/_components/ui/button";
import { cn, formatDate } from "@/server/utils";
import { Input } from "@/app/_components/ui/input";
import { toast } from "@/app/_components/ui/sonner";

interface FormProps {
    onNextClick: () => void;
}

export function Form1({ onNextClick }: FormProps) {
    const [submitted, setSubmitted] = useState(false);
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [industry, setIndustry] = useState("");
    const [description, setDescription] = useState("");
    const [partner, setPartner] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const createCompany = api.company.createProfile.useMutation({
        onSuccess: () => {
            setIsLoading(false);
            toast({
                title: "Success (Click the next button to continue)",
                description: "Company profile created at " + formatDate(Date()),
            });
        },
    });

    function onSubmit() {
        setIsLoading(true);
        setSubmitted(true);
        createCompany.mutate({
            name,
            image,
            industry,
            description,
            partner,
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
                                Welcome! Let&apos;s get started.
                            </div>
                            <div className="mt-4 text-primary/80">
                                Let&apos;s get started! Please fill out the following
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
                            <div className="col-span-full">
                                <label className="block mb-3 text-sm font-medium text-primary/90">
                                    Company Name
                                </label>
                                <Input
                                    placeholder="My Company"
                                    className="rounded-xl px-6 py-3 placeholder:text-primary/40 border-primary/20"
                                    type="text"
                                    value={name}
                                    required
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>
                            <div className="col-span-full">
                                <label className="block mb-3 text-sm font-medium text-primary/90">
                                    Company Logo (Image URL)
                                </label>
                                <Input
                                    placeholder="https://example.com/logo.png"
                                    className="rounded-xl px-6 py-3 placeholder:text-primary/40 border-primary/20"
                                    type="text"
                                    value={image}
                                    onChange={(e) => setImage(e.target.value)}
                                />
                            </div>
                            <div className="col-span-full">
                                <label className="block mb-3 text-sm font-medium text-primary/90">
                                    Industry
                                </label>
                                <Input
                                    placeholder="Technology"
                                    className="rounded-xl px-6 py-3 placeholder:text-primary/40 border-primary/20"
                                    type="text"
                                    value={industry}
                                    onChange={(e) => setIndustry(e.target.value)}
                                />
                            </div>
                            <div className="col-span-full">
                                <label className="block mb-3 text-sm font-medium text-primary/90">
                                    Description
                                </label>
                                <Input
                                    placeholder="A brief description of the company"
                                    className="rounded-xl px-6 py-3 placeholder:text-primary/40 border-primary/20"
                                    type="text"
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                />
                            </div>
                            <div className="col-span-full">
                                <label className="block mb-3 text-sm font-medium text-primary/90">
                                    Is this company a business partner your organization engages with?  <br />
                                    <em className="text-primary/80">Leave Un-Checked if they are not a partner </em>
                                </label>
                                <input
                                    className="rounded-xl placeholder:text-primary/40 border-primary/20 mr-2"
                                    type="checkbox"
                                    checked={partner}
                                    onChange={() => setPartner(!partner)}
                                />
                                <span className="text-primary/80 text-sm">Yes, this company is a partner</span>
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
                                    Create Company
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
