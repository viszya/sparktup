"use client"

import { useState } from "react";
import { Icons } from "@/app/_components/icons";
import { buttonVariants } from "@/app/_components/ui/button";
import { cn, formatDate } from "@/server/utils";
import { Input } from "@/app/_components/ui/input";
import { useToast } from "@/app/_components/ui/use-toast";


export function Form5({ onSubmitClick, addFormVals, onBackClick }: any) {
    const { toast } = useToast();
    const [specialties, setSpecialties] = useState<string[]>([""]);
    const [mediaGallery, setMediaGallery] = useState<string[]>([""]);
    const [isLoading, setIsLoading] = useState(false);
    const [isNextLoading, setIsNextLoading] = useState<boolean>(false)
    const [submitted, setSubmitted] = useState(false);

    const removeSpecial = (index: number) => {
        const updatedSpecialties = [...specialties];
        updatedSpecialties.splice(index, 1);
        setSpecialties(updatedSpecialties);
    };

    const removeMedia = (index: number) => {
        const updateMedia = [...mediaGallery];
        updateMedia.splice(index, 1);
        setMediaGallery(updateMedia);
    }


    function onSubmit() {
        setIsLoading(true);
        setSubmitted(true);
        addFormVals({
            specialties,
            mediaGallery,
        });
        setIsNextLoading(false);
        setIsLoading(false);
        toast({
            title: "Success",
            description: "Company Profile: Form 5 Completed",
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
                                    05
                                </span>
                            </span>
                            <div className="mt-3 text-3xl tracking-tighter text-primary">
                                Company Specialities and Media Gallery
                            </div>
                            <div className="mt-4 text-primary/80">
                                All this information will be
                                used to update your Company Speacialities and Company Media. You can always edit your Speacialities and Media
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
                                    What are your Company&apos;s Specialtiles?
                                </label>
                                <div className="flex flex-col gap-y-3">
                                    {specialties.map((specialty, index) => (
                                        <div className="flex flex-row gap-x-2">
                                            <Input
                                                key={index}
                                                type="text"
                                                placeholder="I worked on..."
                                                value={specialty}
                                                className="rounded-xl px-6 py-3 placeholder:text-primary/40 border-primary/20"
                                                onChange={(e) => {
                                                    const newSpecialty = [...specialties];
                                                    newSpecialty[index] = e.target.value;
                                                    setSpecialties(newSpecialty);
                                                }}
                                                required
                                            />
                                            <button
                                                type="button"
                                                className={cn(buttonVariants({ variant: "dangerous" }), "w-20 items-center justify-center px-6 py-2.5 text-center text-secondary duration-200 bg-primary border-2 border-primary rounded-xl inline-flex hover:bg-transparent hover:border-primary hover:text-primary focus:outline-none focus-visible:outline-primary text-sm focus-visible:ring-primary")}
                                                onClick={() => removeSpecial(index)}
                                            >
                                                Remove
                                            </button>
                                        </div>
                                    ))}
                                    <button
                                        type="button"
                                        className={cn(buttonVariants({ variant: "outline" }), " w-32 items-center justify-center px-6 py-2.5 text-center text-secondary duration-200 bg-primary border-2 border-primary rounded-xl inline-flex hover:bg-transparent hover:border-primary hover:text-primary focus:outline-none focus-visible:outline-primary text-sm focus-visible:ring-primary")}
                                        onClick={() => {
                                            setSpecialties([...specialties, ""]);
                                        }}
                                    >
                                        Add Specialty
                                    </button>
                                </div>
                            </div>

                            <div className="col-span-full">
                                <label className="block mb-3 text-sm font-medium text-primary/90">
                                    Media Gallery <i>(Only .png and .jpg files accepted)</i>
                                </label>
                                <div className="flex flex-col gap-y-3">
                                    {mediaGallery.map((media, index) => (
                                        <div className="flex flex-row gap-x-2">
                                            <Input
                                                key={index}
                                                type="text"
                                                placeholder="I worked on..."
                                                value={media}
                                                className="rounded-xl px-6 py-3 placeholder:text-primary/40 border-primary/20"
                                                onChange={(e) => {
                                                    const newMedia = [...mediaGallery];
                                                    newMedia[index] = e.target.value;
                                                    setMediaGallery(newMedia);
                                                }}
                                                required
                                            />
                                            <button
                                                type="button"
                                                className={cn(buttonVariants({ variant: "dangerous" }), "w-20 items-center justify-center px-6 py-2.5 text-center text-secondary duration-200 bg-primary border-2 border-primary rounded-xl inline-flex hover:bg-transparent hover:border-primary hover:text-primary focus:outline-none focus-visible:outline-primary text-sm focus-visible:ring-primary")}
                                                onClick={() => removeMedia(index)}
                                            >
                                                Remove
                                            </button>
                                        </div>
                                    ))}
                                    <button
                                        type="button"
                                        className={cn(buttonVariants({ variant: "outline" }), " w-32 items-center justify-center px-6 py-2.5 text-center text-secondary duration-200 bg-primary border-2 border-primary rounded-xl inline-flex hover:bg-transparent hover:border-primary hover:text-primary focus:outline-none focus-visible:outline-primary text-sm focus-visible:ring-primary")}
                                        onClick={() => {
                                            setMediaGallery([...mediaGallery, ""]);
                                        }}
                                    >
                                        Add Media
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
                            Update Profile
                            <Icons.chevronRight className="h-5 w-5 ml-2" />
                        </button>
                    ) : (<></>)}
                </div>
            </div>
        </section>
    );
}
