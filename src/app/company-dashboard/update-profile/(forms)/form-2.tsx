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
    const [industry, setIndustry] = useState("");
    const [companySize, setCompanySize] = useState("");
    const [size, setSize] = useState("");
    const [companyBannerImgSrc, setCompanyBannerImgSrc] = useState("");
    const [foundingYear, setFoundingYear] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [isNextLoading, setIsNextLoading] = useState<boolean>(false)
    const [submitted, setSubmitted] = useState(false);

    function onSubmit() {
        setIsLoading(true);
        setSubmitted(true);
        addFormVals({
            industry,
            companySize,
            size,
            companyBannerImgSrc,
            foundingYear,
        });
        setIsNextLoading(false);
        setIsLoading(false);
        toast({
            title: "Success",
            description: "Company Profile: Form 2 Completed",
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
                                    02
                                </span>
                            </span>
                            <div className="mt-3 text-3xl tracking-tighter text-primary">
                                Update Company Industry
                            </div>
                            <div className="mt-4 text-primary/80">
                                Please fill out the following to update you company&apos;s industry information
                                Your industry information will be displayed to applicants.
                                You can always edit your industry
                                information.
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
                                        What is the Company&apos;s Industry
                                    </label>
                                    <Input
                                        placeholder="Appliances, Information Technology, etc."
                                        className="rounded-xl px-6 py-3 placeholder:text-primary/40 border-primary/20"
                                        type="text"
                                        required
                                        value={industry}
                                        onChange={(e) => setIndustry(e.target.value)}
                                    />
                                </div>

                                <div className="col-span-full">
                                    <label className="block mb-3 text-sm font-medium text-primary/90">
                                        What is the Company&apos;s Size in Member&apos;s/Employees
                                    </label>
                                    <Input
                                        placeholder="10000+"
                                        className="rounded-xl px-6 py-3 placeholder:text-primary/40 border-primary/20"
                                        type="text"
                                        required
                                        value={companySize}
                                        onChange={(e) => setCompanySize(e.target.value)}
                                    />
                                </div>

                                <div className="col-span-full">
                                    <label className="block mb-3 text-sm font-medium text-primary/90">
                                        Size
                                    </label>
                                    <Input
                                        placeholder="Size"
                                        className="rounded-xl px-6 py-3 placeholder:text-primary/40 border-primary/20"
                                        type="text"
                                        required
                                        value={size}
                                        onChange={(e) => setSize(e.target.value)}
                                    />

                                </div>

                                <div className="col-span-full">
                                    <label className="block mb-3 text-sm font-medium text-primary/90">
                                        Company Banner <i>Insert 16:9 image</i>
                                    </label>
                                    <Input
                                        placeholder=".png, .jpg"
                                        className="rounded-xl px-6 py-3 placeholder:text-primary/40 border-primary/20"
                                        type="text"
                                        required
                                        value={companyBannerImgSrc}
                                        onChange={(e) => setCompanyBannerImgSrc(e.target.value)}
                                    />
                                </div>

                                <div className="col-span-full">
                                    <label className="block mb-3 text-sm font-medium text-primary/90">
                                        What is the Founding Year?
                                    </label>
                                    <Input
                                        placeholder="2012, 2018, etc."
                                        className="rounded-xl px-6 py-3 placeholder:text-primary/40 border-primary/20"
                                        type="text"
                                        required
                                        value={foundingYear}
                                        onChange={(e) => setFoundingYear(e.target.value)}
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
