"use client";

import { useState } from "react";
import { Email } from "@/app/_components/email";
import { Input } from "@/app/_components/ui/input";
import { Textarea } from "@/app/_components/ui/textarea"
import { usePathname } from 'next/navigation'
import { api } from "@/trpc/react";
import { buttonVariants } from "@/app/_components/ui/button";
import { useToast } from "@/app/_components/ui/use-toast";
import { cn } from "@/server/utils";
import { useSearchParams } from 'next/navigation'
import { Icons } from "@/app/_components/icons";

export default function JobApplicationForm() {
    const { toast } = useToast();
    const [isLoading, setLoading] = useState(false); // Change to false
    const [isNextLoading, setIsNextLoading] = useState(false); // Change to false
    const [technicalSkills, setTechnicalSkills] = useState("");
    const [softSkills, setSoftSkills] = useState("");
    const [certifications, setCertifications] = useState("");
    const [startDate, setStartDate] = useState("");
    const [employmentType, setEmploymentType] = useState("");
    const [desiredWorkSchedule, setDesiredWorkSchedule] = useState("");
    const [convictedOfCrime, setConvictedOfCrime] = useState(""); // Change to boolean if applicable
    const [interestReason, setInterestReason] = useState("");
    const [suitableCandidateReason, setSuitableCandidateReason] = useState("");
    const [challengingSituation, setChallengingSituation] = useState("");
    const [backgroundCheckAuthorization, setBackgroundCheckAuthorization] = useState(false); // Default value
    const [termsAndConditionsAgreement, setTermsAndConditionsAgreement] = useState(false); // Default value
    const searchParams = useSearchParams()
    const position = searchParams.get("job");
    const jobId = searchParams.get("jobID");
    const id = usePathname().slice(17, -6);
    console.log(id);
    const addApplication = api.application.addApplication.useMutation({
        onSuccess: () => {
            toast({
                title: "Success",
                description: "Application Submitted",
            });
            setIsNextLoading(false);
        }
    });
    const res = api.test.getCompanyProfile2.useQuery({ id: id });
    if (res.isLoading) {
        return <div>Loading...</div>;
    }
    const data = res.data;
    console.log(data);



    function onSubmit() {
        setIsNextLoading(true);
        addApplication.mutate({
            technicalSkills,
            softSkills,
            certifications,
            startDate,
            employmentType,
            desiredWorkSchedule,
            convictedOfCrime,
            interestReason,
            suitableCandidateReason,
            challengingSituation,
            backgroundCheckAuthorization,
            termsAndConditionsAgreement,
            job: position,
            companyId: id,
        });
        // setTechnicalSkills("");
        // setSoftSkills("");
        // setCertifications("");
        // setStartDate("");
        // setEmploymentType("");
        // setDesiredWorkSchedule("");
        // setAuthorizedToWork(true);
        // setConvictedOfCrime("");
        // setCoverLetter("");
        // setInterestReason("");
        // setSuitableCandidateReason("");
        // setChallengingSituation("");
        // setBackgroundCheckAuthorization(false);
        // setTermsAndConditionsAgreement(false);
    }





    return (
        <section className="flex flex-col justify-center items-center mt-10 ">
            <h2 className="text-3xl font-bold tracking-tight">Apply To {data.companyName}</h2>
            <div className=" max-w-3xl w-full">
                <div className="flex flex-col mt-5 p-5 border border-secondary rounded-xl border-dashed">
                    <div className="flex flex-col justify-center text-center md:flex-row md:text-left">
                        <div className="flex flex-col justify-center w-full max-w-3xl space-y-12">
                            <form
                                className="flex flex-col gap-y-4 "
                                onSubmit={(e) => {
                                    e.preventDefault();
                                    onSubmit();
                                }}
                            >
                                <div className="col-span-full">
                                    <label className="block mb-3 text-sm font-medium text-primary/90">
                                        Technical Skills
                                    </label>
                                    <Input
                                        placeholder="Programming languages, tools, etc."
                                        className="rounded-xl px-6 py-3 placeholder:text-primary/40 border-primary/20"
                                        type="text"
                                        value={technicalSkills}
                                        onChange={(e) => setTechnicalSkills(e.target.value)}
                                    />
                                </div>
                                <div className="col-span-full">
                                    <label className="block mb-3 text-sm font-medium text-primary/90">
                                        Soft Skills
                                    </label>
                                    <Input
                                        placeholder="Communication, teamwork, etc."
                                        className="rounded-xl px-6 py-3 placeholder:text-primary/40 border-primary/20"
                                        type="text"
                                        value={softSkills}
                                        onChange={(e) => setSoftSkills(e.target.value)}
                                    />
                                </div>
                                <div className="col-span-full">
                                    <label className="block mb-3 text-sm font-medium text-primary/90">
                                        Certifications
                                    </label>
                                    <Input
                                        placeholder="Certifications earned"
                                        className="rounded-xl px-6 py-3 placeholder:text-primary/40 border-primary/20"
                                        type="text"
                                        value={certifications}
                                        onChange={(e) => setCertifications(e.target.value)}
                                    />
                                </div>

                                {/* Availability */}
                                <div className="col-span-full">
                                    <label className="block mb-3 text-sm font-medium text-primary/90">
                                        Start Date
                                    </label>
                                    <Input
                                        placeholder="MM/DD/YYYY"
                                        className="rounded-xl px-6 py-3 placeholder:text-primary/40 border-primary/20"
                                        type="text"
                                        value={startDate}
                                        onChange={(e) => setStartDate(e.target.value)}
                                    />
                                </div>
                                <div className="col-span-full">
                                    <label className="block mb-3 text-sm font-medium text-primary/90">
                                        Full-time or Part-time
                                    </label>
                                    <Input
                                        placeholder="Full-time/Part-time"
                                        className="rounded-xl px-6 py-3 placeholder:text-primary/40 border-primary/20"
                                        type="text"
                                        value={employmentType}
                                        onChange={(e) => setEmploymentType(e.target.value)}
                                    />
                                </div>
                                <div className="col-span-full">
                                    <label className="block mb-3 text-sm font-medium text-primary/90">
                                        Desired Work Schedule
                                    </label>
                                    <Input
                                        placeholder="Weekdays, Weekends, etc."
                                        className="rounded-xl px-6 py-3 placeholder:text-primary/40 border-primary/20"
                                        type="text"
                                        value={desiredWorkSchedule}
                                        onChange={(e) => setDesiredWorkSchedule(e.target.value)}
                                    />
                                </div>


                                <div className="col-span-full">
                                    <label className="block mb-3 text-sm font-medium text-primary/90">
                                        Have you ever been convicted of a crime? (if legally permissible)
                                    </label>
                                    <Input
                                        placeholder="Yes/No"
                                        className="rounded-xl px-6 py-3 placeholder:text-primary/40 border-primary/20"
                                        type="text"
                                        value={convictedOfCrime}
                                        onChange={(e) => setConvictedOfCrime(e.target.value)}
                                    />
                                </div>

                                {/* Additional Questions */}
                                <div className="col-span-full">
                                    <label className="block mb-3 text-sm font-medium text-primary/90">
                                        Why are you interested in this position?
                                    </label>
                                    <Textarea
                                        placeholder="Your answer here..."
                                        className="rounded-xl px-6 py-3 placeholder:text-primary/40 border-primary/20"
                                        rows={4}
                                        value={interestReason}
                                        onChange={(e) => setInterestReason(e.target.value)}
                                    />
                                </div>
                                <div className="col-span-full">
                                    <label className="block mb-3 text-sm font-medium text-primary/90">
                                        What makes you a suitable candidate for this role?
                                    </label>
                                    <Textarea
                                        placeholder="Your answer here..."
                                        className="rounded-xl px-6 py-3 placeholder:text-primary/40 border-primary/20"
                                        rows={4}
                                        value={suitableCandidateReason}
                                        onChange={(e) => setSuitableCandidateReason(e.target.value)}
                                    />
                                </div>
                                <div className="col-span-full">
                                    <label className="block mb-3 text-sm font-medium text-primary/90">
                                        Describe a challenging work situation and how you handled it.
                                    </label>
                                    <Textarea
                                        placeholder="Your answer here..."
                                        className="rounded-xl px-6 py-3 placeholder:text-primary/40 border-primary/20"
                                        rows={4}
                                        value={challengingSituation}
                                        onChange={(e) => setChallengingSituation(e.target.value)}
                                    />
                                </div>

                                {/* Consent and Acknowledgment */}
                                <div className="col-span-full">
                                    <label className="block mb-3 text-sm font-medium text-gray-600">
                                        Authorization for the company to conduct background checks (if applicable).
                                    </label>
                                    <input
                                        className="mr-2"
                                        type="checkbox"
                                        checked={backgroundCheckAuthorization}
                                        onChange={() => setBackgroundCheckAuthorization(!backgroundCheckAuthorization)}
                                    />
                                    <span className="text-gray-600">Yes</span>
                                </div>
                                <div className="col-span-full">
                                    <label className="block mb-3 text-sm font-medium text-gray-600">
                                        Agreement to the terms and conditions of the application process.
                                    </label>
                                    <input
                                        className="mr-2"
                                        type="checkbox"
                                        checked={termsAndConditionsAgreement}
                                        onChange={() => setTermsAndConditionsAgreement(!termsAndConditionsAgreement)}
                                    />
                                    <span className="text-gray-600">Yes</span>
                                </div>

                                <div className="col-span-full justify-center flex">
									<button
										type="submit"
										className={cn(buttonVariants({ variant: "outline" }), "max-w-60 w-60 items-center justify-center px-6 py-2.5 text-center text-secondary duration-200 bg-primary border-2 border-primary rounded-xl inline-flex hover:bg-transparent hover:border-primary hover:text-primary focus:outline-none focus-visible:outline-primary text-sm focus-visible:ring-primary")}
										disabled={isLoading || isNextLoading}
									>
										{isNextLoading ? (
											<Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
										) : (<></>
										)}{" "}
										Submit
									</button>
								</div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}