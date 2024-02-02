"use client"

import { useState } from "react";
import { Icons } from "@/app/_components/icons";
import { buttonVariants } from "@/app/_components/ui/button";
import { cn, formatDate } from "@/server/utils";
import { Input } from "@/app/_components/ui/input";
import { useToast } from "@/app/_components/ui/use-toast";


export function Form3({ onSubmitClick, addFormVals, onBackClick }: any) {
    const { toast } = useToast();
    const [seeSrc, setSeeSrc] = useState("");
    const [attendSrc, setAttendSrc] = useState("");
    const [photoSrc, setPhotoSrc] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [isNextLoading, setIsNextLoading] = useState<boolean>(false)
    const [submitted, setSubmitted] = useState(true);

    function onSubmit() {
        setIsLoading(true);
        setSubmitted(true);
        addFormVals({
            seeSrc,
            attendSrc,
            photoSrc,
        });
        setIsLoading(false);
        toast({
            title: "Success",
            description: "Event Form 3 Completed",
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
                                    03
                                </span>
                            </span>
                            <div className="mt-3 text-3xl tracking-tighter text-primary">
                                Add Optional Information/Sources
                            </div>
                            <div className="mt-4 text-primary/80">
                                Let&apos;s get started! Please fill out the following
                                form to the best of your ability. All this information will be
                                used to create your Company Event. You can always edit your event
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
                                    Are There Any More Website or Companies to left to Mention?
                                </label>
                                <Input
                                    placeholder="Microsoft"
                                    className="rounded-xl px-6 py-3 placeholder:text-primary/40 border-primary/20"
                                    type="text"
                                    required
                                    value={seeSrc}
                                    onChange={(e) => setSeeSrc(e.target.value)}
                                />
                            </div>
                            <div className="col-span-full">
                                <label className="block mb-3 text-sm font-medium text-primary/90">
                                    Live Stream Link
                                </label>
                                <Input
                                    placeholder="youtube.com/live-stream"
                                    className="rounded-xl px-6 py-3 placeholder:text-primary/40 border-primary/20"
                                    type="text"
                                    required
                                    value={attendSrc}
                                    onChange={(e) => setAttendSrc(e.target.value)}
                                />
                            </div>
                            <div className="col-span-full">
                                <label className="block mb-3 text-sm font-medium text-primary/90">
                                    Any Additional Photos?
                                </label>
                                <Input
                                    placeholder=".png .jpeg"
                                    className="rounded-xl px-6 py-3 placeholder:text-primary/40 border-primary/20"
                                    type="text"
                                    required
                                    value={photoSrc}
                                    onChange={(e) => setPhotoSrc(e.target.value)}
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
                            Update Profile
                            <Icons.chevronRight className="h-5 w-5 ml-2" />
                        </button>
                    ) : (<></>)}
                </div>
            </div>
        </section>
    );
}
