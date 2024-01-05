"use client"

import { useState } from "react";
import { api } from "@/trpc/react";
import { Icons } from "@/app/_components/icons";
import { buttonVariants } from "@/app/_components/ui/button";
import { cn, formatDate } from "@/server/utils";
import { Input } from "@/app/_components/ui/input";
import { useToast } from "@/app/_components/ui/use-toast";


export function Form4({ onNextClick, addFormVals, onBackClick }: any) {
    const { toast } = useToast();
    const [keyBenefits, setKeyBenefits] = useState("");
    const [keyFeatures, setKeyFeatures] = useState("");
    const [companyCulture, setCompanyCulture] = useState("");
    const [termsAndConditionsLink, setTermsAndConditionsLink] = useState("");
    const [privacyPolicyLink, setPrivacyPolicyLink] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [isNextLoading, setIsNextLoading] = useState<boolean>(false)
    const [submitted, setSubmitted] = useState(false);

    function onSubmit() {
        setIsLoading(true);
        setSubmitted(true);
        addFormVals({
            keyBenefits,
            keyFeatures,
            companyCulture,
            termsAndConditionsLink,
            privacyPolicyLink,
        });
        setIsLoading(false);
        toast({
            title: "Success",
            description: "Company Profile: Form 4 Completed",
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
                                    04
                                </span>
                            </span>
                            <div className="mt-3 text-3xl tracking-tighter text-primary">
                                Unveiling Your Key Benefits, Features, and Culture
                            </div>
                            <div className="mt-4 text-primary/80">
                                What are your company&apos;s key Benefits, and Features? & What is your Company&apos;s Culture? 
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
                                <label className="block mb-3 text-sm font-medium text-primary/90">What are your Company&apos;s Key Benefits?</label>
                                <Input
                                    placeholder="Benefits"
                                    className="rounded-xl px-6 py-3 placeholder:text-primary/40 border-primary/20"
                                    type="text"
                                    required
                                    value={keyBenefits}
                                    onChange={(e) => setKeyBenefits(e.target.value)}
                                />
                            </div>
                            <div className="col-span-full">
                                <label className="block mb-3 text-sm font-medium text-primary/90">What are your Company&apos;s Key Features?</label>
                                <Input
                                    placeholder="Features"
                                    className="rounded-xl px-6 py-3 placeholder:text-primary/40 border-primary/20"
                                    type="text"
                                    required
                                    value={keyFeatures}
                                    onChange={(e) => setKeyFeatures(e.target.value)}
                                />
                            </div>

                            <div className="col-span-full">
                                <label className="block mb-3 text-sm font-medium text-primary/90">What is your Company&apos;s Culture?</label>
                                <Input
                                    placeholder="Company Culture"
                                    className="rounded-xl px-6 py-3 placeholder:text-primary/40 border-primary/20"
                                    type="text"
                                    required
                                    value={companyCulture}
                                    onChange={(e) => setCompanyCulture(e.target.value)}
                                />
                            </div>

                            <div className="col-span-full">
                                <label className="block mb-3 text-sm font-medium text-primary/90">Terms and Conditions Link</label>
                                <Input
                                    placeholder="Terms and Conditions Link"
                                    className="rounded-xl px-6 py-3 placeholder:text-primary/40 border-primary/20"
                                    type="text"
                                    required
                                    value={termsAndConditionsLink}
                                    onChange={(e) => setTermsAndConditionsLink(e.target.value)}
                                />
                            </div>

                            <div className="col-span-full">
                                <label className="block mb-3 text-sm font-medium text-primary/90">Privacy Policy Link</label>
                                <Input
                                    placeholder="Privacy Policy Link"
                                    className="rounded-xl px-6 py-3 placeholder:text-primary/40 border-primary/20"
                                    type="text"
                                    required
                                    value={privacyPolicyLink}
                                    onChange={(e) => setPrivacyPolicyLink(e.target.value)}
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
