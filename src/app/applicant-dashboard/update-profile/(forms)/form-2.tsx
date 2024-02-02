"use client"

import { useState } from "react";
import { api } from "@/trpc/react";
import { Icons } from "@/app/_components/icons";
import { buttonVariants } from "@/app/_components/ui/button";
import { cn, formatDate } from "@/server/utils";
import { Input } from "@/app/_components/ui/input";
import { useToast } from "@/app/_components/ui/use-toast";


export function Form2({ onNextClick, addFormVals, onBackClick }: any) {
    const { toast } = useToast();
    const [resumeLink, setResumeLink] = useState("");
    const [profileTags, setProfileTags] = useState<string[]>([""]);
    const [interestedTags, setInterestedTags] = useState<string[]>([""]);
    const [isLoading, setIsLoading] = useState(false);
    const [isNextLoading, setIsNextLoading] = useState<boolean>(false)
    const [submitted, setSubmitted] = useState(false);

    const addProfileTags = () => {
        setProfileTags([...profileTags, ""]);
    }

    const removeProfileTags = (index: number) => {
        const updatedProfileTags = [...profileTags];
        updatedProfileTags.splice(index, 1);
        setProfileTags(updatedProfileTags);
    }

    const updateProfileTags = (index: number, value: string) => {
        const updatedProfileTags = [...profileTags];
        updatedProfileTags[index] = value;
        setProfileTags(updatedProfileTags);
    }

    const addInterestedTags = () => {
        setInterestedTags([...interestedTags, ""]);
    }

    const removeInterestedTags = (index: number) => {
        const updatedInterestedTags = [...interestedTags];
        updatedInterestedTags.splice(index, 1);
        setInterestedTags(updatedInterestedTags);
    }

    const updateInterestedTags = (index: number, value: string) => {
        const updatedInterestedTags = [...interestedTags];
        updatedInterestedTags[index] = value;
        setInterestedTags(updatedInterestedTags);
    }


    function onSubmit() {
        setIsLoading(true);
        setSubmitted(true);
        addFormVals({
            resumeLink,
            profileTags,
            interestedTags,
        });
        setIsNextLoading(false);
        setIsLoading(false);
        toast({
            title: "Success",
            description: "Profile: Form 2 Submitted",
        });
    }

    return (
        <section>
            <div className="flex flex-col mt-5 p-5 border border-secondary rounded-xl bg-white/70 ">
                <div className="flex flex-col justify-center text-center md:flex-row md:text-left">
                    <div className="flex flex-col justify-center max-w-5xl w-full  space-y-12">
                        <article>
                            <span className="inline-flex items-center text-primary rounded-xl">
                                <span className="font-mono text-sm" aria-hidden="true">
                                    02
                                </span>
                            </span>
                            <div className="mt-3 text-3xl tracking-tighter text-primary">
                                Edit your Resume and Intrests
                            </div>
                            <div className="mt-4 text-primary/80">
                                Edit your Resume link and change your current intrests.
                                All this information will be
                                used to create update your Resume and Interests. You can always edit your Resume/Interests
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
                                    What is your Resume&apos;s Link?
                                </label>
                                <Input
                                    placeholder="https://google.com"
                                    className="rounded-xl px-6 py-3 placeholder:text-primary/40 border-primary/20"
                                    type="text"
                                    required
                                    value={resumeLink}
                                    onChange={(e) => setResumeLink(e.target.value)}
                                />
                            </div>

                            <div className="col-span-full">
                                <label className="block mb-3 text-sm font-medium text-primary/90">
                                    What tags do you want to add to your profile?
                                </label>
                                <div className="flex flex-col gap-y-3">
                                    {profileTags.map((profileTag, index) => (
                                        <div className="flex flex-row gap-x-2">
                                            <Input
                                                key={index}
                                                type="text"
                                                placeholder="ReactJS, HTML..."
                                                value={profileTag}
                                                className="rounded-xl px-6 py-3 placeholder:text-primary/40 border-primary/20"
                                                onChange={(e) => {
                                                    updateProfileTags(index, e.target.value);
                                                }}
                                                required
                                            />
                                            <button
                                                type="button"
                                                className={cn(buttonVariants({ variant: "destructive" }), "w-20 rounded-xl ")}
                                                onClick={() => removeProfileTags(index)}
                                            >
                                                Remove
                                            </button>
                                        </div>
                                    ))}
                                    <button
                                        type="button"
                                        className={cn(buttonVariants({ variant: "outline" }), " w-60 items-center justify-center px-6 py-2.5 text-center text-secondary duration-200 bg-primary border-2 border-primary rounded-xl inline-flex hover:bg-transparent hover:border-primary hover:text-primary focus:outline-none focus-visible:outline-primary text-sm focus-visible:ring-primary")}
                                        onClick={addProfileTags}
                                    >
                                        Add Profile Tag
                                    </button>
                                </div>
                            </div>

                            <div className="col-span-full">
                                <label className="block mb-3 text-sm font-medium text-primary/90">
                                    What Interested Tags do you want to add to your profile?
                                </label>
                                <div className="flex flex-col gap-y-3">
                                    {interestedTags.map((interestedTag, index) => (
                                        <div className="flex flex-row gap-x-2">
                                            <Input
                                                key={index}
                                                type="text"
                                                placeholder="Drawing..."
                                                value={interestedTag}
                                                className="rounded-xl px-6 py-3 placeholder:text-primary/40 border-primary/20"
                                                onChange={(e) => {
                                                    updateInterestedTags(index, e.target.value);
                                                }}
                                                required
                                            />
                                            <button
                                                type="button"
                                                className={cn(buttonVariants({ variant: "destructive" }), "w-20 rounded-xl ")}
                                                onClick={() => removeInterestedTags(index)}
                                            >
                                                Remove
                                            </button>
                                        </div>
                                    ))}
                                    <button
                                        type="button"
                                        className={cn(buttonVariants({ variant: "outline" }), " w-60 items-center justify-center px-6 py-2.5 text-center text-secondary duration-200 bg-primary border-2 border-primary rounded-xl inline-flex hover:bg-transparent hover:border-primary hover:text-primary focus:outline-none focus-visible:outline-primary text-sm focus-visible:ring-primary")}
                                        onClick={addInterestedTags}
                                    >
                                        Add Interested Tag
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
                        <button onClick={onNextClick} className={cn(buttonVariants({ variant: "default" }), " rounded-xl w-26")}>
                            Next
                            <Icons.chevronRight className="h-5 w-5 ml-2" />

                        </button>
                    ) : (<></>)}
                </div>
            </div>
        </section>
    );
}
