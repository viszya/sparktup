"use client"

import { useState } from "react";
import { api } from "@/trpc/react";
import { Icons } from "@/app/_components/icons";
import { buttonVariants } from "@/app/_components/ui/button";
import { cn, formatDate } from "@/server/utils";
import { Input } from "@/app/_components/ui/input";
import { useToast } from "@/app/_components/ui/use-toast";
import { Textarea } from "@/app/_components/ui/textarea";


export default function AddContactInfo() {
    const { toast } = useToast();
    const [name, setName] = useState("");
    const [jobTitle, setJobTitle] = useState("");
    const [srcImage, setSrcImage] = useState("");
    const [message, setMessage] = useState("");
    const [isLoading] = useState<boolean>(false)
    const [isNextLoading, setIsNextLoading] = useState<boolean>(false)

    const addProject = api.settings.addRecommendation.useMutation({
        onSuccess: () => {
            setIsNextLoading(false);
            toast({
                title: "Success",
                description: "Recommendation added at " + formatDate(Date()),
            });
        },
    });

    function onSubmit() {
        setIsNextLoading(true)
        addProject.mutate({
            name: name,
            jobTitle: jobTitle,
            srcImage: srcImage,
            message: message,
        });
    }

    return (
        <div className="flex flex-col px-8">
            <div>
                <h2 className="text-3xl font-bold tracking-tight">Add Recommendation</h2>
                <p className="text-muted-foreground">
                    Edit Your Recommendations
                </p>
            </div>
            <div className="flex flex-col justify-center w-full max-w-5xl">
                <div className="flex flex-col mt-5 p-5 border border-secondary rounded-xl bg-white/70 ">
                    <div className="flex flex-col justify-center text-center md:flex-row md:text-left ">
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
                                        What is the individual&apos;s name who recommended you?
                                    </label>
                                    <Input
                                        type="text"
                                        placeholder="Jhon Doe"
                                        value={name}
                                        className="rounded-xl px-6 py-3 placeholder:text-primary/40 border-primary/20"
                                        onChange={(e) => setName(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="col-span-full">
                                    <label className="block mb-3 text-sm font-medium text-primary/90">
                                        What is their job title?
                                    </label>
                                    <Input
                                        type="text"
                                        placeholder="Manager"
                                        value={jobTitle}
                                        className="rounded-xl px-6 py-3 placeholder:text-primary/40 border-primary/20"
                                        onChange={(e) => setJobTitle(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="col-span-full">
                                    <label className="block mb-3 text-sm font-medium text-primary/90">
                                        Who is their current employer?
                                    </label>
                                    <Input
                                        type="text"
                                        placeholder="Google"
                                        value={srcImage}
                                        className="rounded-xl px-6 py-3 placeholder:text-primary/40 border-primary/20"
                                        onChange={(e) => setSrcImage(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="col-span-full">
                                    <label className="block mb-3 text-sm font-medium text-primary/90">
                                        Recommendation Letter
                                    </label>
                                    <Textarea
                                     placeholder=".pdf"
                                     value={message}
                                     className="rounded-2xl px-6 py-3 placeholder:text-primary/40 border-primary/20"
                                     onChange={(e) => setMessage(e.target.value)}
                                     required
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
