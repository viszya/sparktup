"use client"

import { useState } from "react";
import { Icons } from "@/app/_components/icons";
import { buttonVariants } from "@/app/_components/ui/button";
import { cn, formatDate } from "@/server/utils";
import { Input } from "@/app/_components/ui/input";
import { useToast } from "@/app/_components/ui/use-toast";


export function Form2({ onSubmitClick, addFormVals, onBackClick }: any) {
    const { toast } = useToast();
    const [jobTitle, setJobTitle] = useState("");
    const [location, setLocation] = useState("");
    const [time, setTime] = useState("");
    const [jobDescriptions, setJobDescriptions] = useState<string[]>([""]);
    const [isLoading, setIsLoading] = useState(false);
    const [isNextLoading, setIsNextLoading] = useState<boolean>(false)
    const [submitted, setSubmitted] = useState(true);

    function onSubmit() {
        setIsLoading(true);
        setSubmitted(true);
        addFormVals({
            jobTitle,
            location,
            time,
            jobDescriptions,
        });
        setIsNextLoading(false);
        setIsLoading(false);
        toast({
            title: "Success",
            description: "Company Profile: Form 5 Completed",
        });
    }

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
                                    Job Title
                                </label>
                                <Input
                                    placeholder="Date"
                                    className="rounded-xl px-6 py-3 placeholder:text-primary/40 border-primary/20"
                                    type="text"
                                    required
                                    value={jobTitle}
                                    onChange={(e) => setJobTitle(e.target.value)}
                                />
                            </div>
                            <div className="col-span-full">
                                <label className="block mb-3 text-sm font-medium text-primary/90">
                                    Location
                                </label>
                                <Input
                                    placeholder="Date"
                                    className="rounded-xl px-6 py-3 placeholder:text-primary/40 border-primary/20"
                                    type="text"
                                    required
                                    value={location}
                                    onChange={(e) => setLocation(e.target.value)}
                                />
                            </div>
                            <div className="col-span-full">
                                <label className="block mb-3 text-sm font-medium text-primary/90">
                                    Time
                                </label>
                                <Input
                                    placeholder="Date"
                                    className="rounded-xl px-6 py-3 placeholder:text-primary/40 border-primary/20"
                                    type="text"
                                    required
                                    value={time}
                                    onChange={(e) => setTime(e.target.value)}
                                />
                            </div>
                            <div className="col-span-full">
                                <label className="block mb-3 text-sm font-medium text-primary/90">
                                    Job Description
                                </label>
                                <div className="flex flex-col gap-y-3">
                                    {jobDescriptions.map((jobDescription, index) => (
                                        <div className="flex flex-row gap-x-2">
                                            <Input
                                                key={index}
                                                type="text"
                                                placeholder="I worked on..."
                                                value={jobDescription}
                                                className="rounded-xl px-6 py-3 placeholder:text-primary/40 border-primary/20"
                                                onChange={(e) => {
                                                    updateJobDescription(index, e.target.value);
                                                }}
                                                required
                                            />
                                            <button
                                                type="button"
                                                className={cn(buttonVariants({ variant: "destructive" }), "w-20 rounded-xl ")}
                                                onClick={() => removeJobDescription(index)}
                                            >
                                                Remove
                                            </button>
                                        </div>
                                    ))}
                                    <button
                                        type="button"
                                        className={cn(buttonVariants({ variant: "outline" }), " w-60 items-center justify-center px-6 py-2.5 text-center text-secondary duration-200 bg-primary border-2 border-primary rounded-xl inline-flex hover:bg-transparent hover:border-primary hover:text-primary focus:outline-none focus-visible:outline-primary text-sm focus-visible:ring-primary")}
                                        onClick={addJobDescription}
                                    >
                                        Add Job Description
                                    </button>
                                </div>
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

            <div className="flex justify-center items-center gap-x-4 ">
                <div className="border border-dashed border-primary/60 p-2 flex justify-center items-center gap-x-4 rounded-xl mt-2">
                    <button onClick={onBackClick} className={cn(buttonVariants({ variant: "outline" }), " rounded-xl w-26")}>
                        <Icons.chevronLeft className="h-5 w-5 mr-2" />
                        Back
                    </button>
                    {submitted ? (
                        <button onClick={onSubmitClick} className={cn(buttonVariants({ variant: "default" }), " rounded-xl w-26")}>
                        Add to Profile
                        <Icons.chevronRight className="h-5 w-5 ml-2" />
                    </button>
                    ) : (<></>)}

                </div>
            </div>
        </section>
    );
}
