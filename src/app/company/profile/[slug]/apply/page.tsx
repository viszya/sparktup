"use client";

import { Email } from "@/app/_components/email";
import { Input } from "@/app/_components/ui/input";
import { Textarea } from "@/app/_components/ui/textarea";
import { usePathname } from "next/navigation";
import { api } from "@/trpc/react";
import { buttonVariants } from "@/app/_components/ui/button";
import { useToast } from "@/app/_components/ui/use-toast";
import { cn } from "@/server/utils";
import { useSearchParams } from "next/navigation";
import { Icons } from "@/app/_components/icons";
import { Skeleton } from "@/app/_components/ui/skeleton";
import { Button } from "@/app/_components/ui/button";
import Link from "next/link";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/app/_components/ui/alert-dialog";
import { useEffect, useState } from "react";

export default function JobApplicationForm() {
  const { toast } = useToast();
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
  const [backgroundCheckAuthorization, setBackgroundCheckAuthorization] =
    useState(false); // Default value
  const [termsAndConditionsAgreement, setTermsAndConditionsAgreement] =
    useState(false); // Default value
  const searchParams = useSearchParams();
  const position = searchParams.get("job");
  const jobId = searchParams.get("jobId");
  const id = usePathname().slice(17, -6);
  console.log(id);
  const addApplication = api.application.addApplication.useMutation({
    onSuccess: () => {
      toast({
        title: "Success",
        description: "Application Submitted",
      });
      setIsNextLoading(false);
    },
  });




  const addApplicationCount = api.test.addApplicationCount.useMutation({});
  useEffect(() => {
    addApplicationCount.mutate({ id: id });
    console.log("i fire once");
  }, []);
  const res = api.test.getCompanyProfile2.useQuery({ id: id });
  if (res.isLoading) {
    return (
      <div className="gradient-bg-2 bg-white flex flex-col justify-center items-center px-4">
        <section className="mb-10 mt-10 flex flex-col items-center justify-center">
          <h2 className="text-3xl font-bold tracking-tight">Apply to ...</h2>
        </section>
        <div className="mb-10 mt-10 w-full max-w-3xl rounded-2xl border border-black bg-white/80">
          <div className=" flex flex-col rounded-xl border border-dashed border-secondary p-5 px-2 sm:px-8">
            <div className="flex flex-col justify-center text-center md:flex-row md:text-left">
              <div className="flex w-full max-w-3xl flex-col justify-center space-y-12">
                <article>
                  <span className="inline-flex items-center rounded-xl text-black">
                    <Skeleton className="h-6 w-6" />
                  </span>
                  <div className="mt-3 text-3xl tracking-tighter text-black">
                    <Skeleton className="h-10 w-[300px]" />
                  </div>
                  <div className="mt-4 text-gray-500">
                    <Skeleton count={3} />
                  </div>
                </article>

                <form
                  className="flex flex-col gap-y-4 "
                  onSubmit={(e) => {
                    e.preventDefault();
                    onSubmit();
                  }}
                >
                  <div className="col-span-full">
                    <label className="mb-3 block text-lg font-medium text-primary">
                      <Skeleton className="h-6 w-[200px]" />
                    </label>
                    <Skeleton className="h-8 w-[100px]" />
                  </div>
                  <div>
                  <Skeleton className="h-6 w-[200px] mb-2" />
                  <Skeleton className="h-8 w-[400px] sm:w-[600px] mb-6" />
                  <Skeleton className="h-6 w-[200px] mb-2" />
                  <Skeleton className="h-8 w-[400px] sm:w-[600px] mb-6" />
                  <Skeleton className="h-6 w-[200px] mb-2" />
                  <Skeleton className="h-8 w-[400px] sm:w-[600px] mb-6" />
                  <Skeleton className="h-6 w-[200px] mb-2" />
                  <Skeleton className="h-8 w-[400px] sm:w-[600px] mb-6" />
                  <Skeleton className="h-6 w-[200px] mb-2" />
                  <Skeleton className="h-8 w-[400px] sm:w-[600px] mb-6" />

                  </div>
                  {/* ... (Repeat similar structure for other form fields) ... */}

                  {/* Submit Button */}
                  <div className="col-span-full flex justify-center">
                    <Skeleton className="h-10 w-[200px]" />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const data = res.data;
  console.log(data);

  function cancel() {
    setIsNextLoading(false);
  }

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
    const response = fetch("/api/apply", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        job: position,
      }),
    });
  }

  function updateFormValuesWithExampleData() {
    const exampleData = {
      technicalSkills: "JavaScript, React",
      softSkills: "Communication, Teamwork",
      certifications: "Certified Developer",
      startDate: "01/01/2023",
      employmentType: "Full-time",
      desiredWorkSchedule: "Weekdays",
      convictedOfCrime: "No",
      interestReason: "I love the company's mission.",
      suitableCandidateReason: "I have relevant experience.",
      challengingSituation: "Handled tight project deadlines successfully.",
      backgroundCheckAuthorization: true,
      termsAndConditionsAgreement: true,
    };

    setTechnicalSkills(exampleData.technicalSkills);
    setSoftSkills(exampleData.softSkills);
    setCertifications(exampleData.certifications);
    setStartDate(exampleData.startDate);
    setEmploymentType(exampleData.employmentType);
    setDesiredWorkSchedule(exampleData.desiredWorkSchedule);
    setConvictedOfCrime(exampleData.convictedOfCrime);
    setInterestReason(exampleData.interestReason);
    setSuitableCandidateReason(exampleData.suitableCandidateReason);
    setChallengingSituation(exampleData.challengingSituation);
    setBackgroundCheckAuthorization(exampleData.backgroundCheckAuthorization);
    setTermsAndConditionsAgreement(exampleData.termsAndConditionsAgreement);
  };

  return (
    <div className="gradient-bg-2 bg-white">
      <section className="mb-10 mt-10 flex flex-col items-center justify-center">
        <h2 className="text-3xl font-bold tracking-tight">
          Apply To {data.companyName}
        </h2>
        <div className=" mt-10 w-full max-w-3xl rounded-2xl border border-black bg-white/80">
          <div className=" flex flex-col rounded-xl border border-dashed border-secondary p-5 px-8">
            <div className="flex flex-col justify-center text-center md:flex-row md:text-left">
              <div className="flex w-full max-w-3xl flex-col justify-center space-y-12">
                <article>
                  <span className="inline-flex items-center rounded-xl text-black"></span>
                  <div className="mt-3 text-3xl tracking-tighter text-black">
                    Job Application For {data.companyName}
                  </div>
                  <div className="mt-4 text-gray-500">
                    Please fill out the following form to the best of your
                    ability. All this information will be used to create your
                    job application and to link you with {data.companyName}
                    &apos;s hiring team for any further communication.
                  </div>
                </article>

                <form
                  className="flex flex-col gap-y-4 "
                  onSubmit={(e) => {
                    e.preventDefault();
                    onSubmit();
                  }}
                >
                  <div className="col-span-full">
                    <label className="mb-3 block text-lg font-medium text-primary">
                      Job Position: {position}
                    </label>
                    <label className="mb-3 block text-sm font-medium text-primary/90">
                      Your Profile is Linked
                    </label>
                    <Link
                      href={"/company/profile/job/" + jobId}
                      className={buttonVariants({ variant: "outline" })}
                    >
                      Go back to Job
                    </Link>
                  </div>
                  <div className="col-span-full">
                    <label className="mb-3 block text-sm font-medium text-primary/90">
                      Technical Skills
                    </label>
                    <Input
                      placeholder="Programming languages, tools, etc."
                      className="rounded-xl border-primary/20 px-6 py-3 placeholder:text-primary/40"
                      type="text"
                      required
                      value={technicalSkills}
                      onChange={(e) => setTechnicalSkills(e.target.value)}
                    />
                  </div>
                  <div className="col-span-full">
                    <label className="mb-3 block text-sm font-medium text-primary/90">
                      Soft Skills
                    </label>
                    <Input
                      placeholder="Communication, teamwork, etc."
                      className="rounded-xl border-primary/20 px-6 py-3 placeholder:text-primary/40"
                      type="text"
                      required
                      value={softSkills}
                      onChange={(e) => setSoftSkills(e.target.value)}
                    />
                  </div>
                  <div className="col-span-full">
                    <label className="mb-3 block text-sm font-medium text-primary/90">
                      Certifications
                    </label>
                    <Input
                      placeholder="Certifications earned"
                      className="rounded-xl border-primary/20 px-6 py-3 placeholder:text-primary/40"
                      type="text"
                      required
                      value={certifications}
                      onChange={(e) => setCertifications(e.target.value)}
                    />
                  </div>

                  {/* Availability */}
                  <div className="col-span-full">
                    <label className="mb-3 block text-sm font-medium text-primary/90">
                      Start Date
                    </label>
                    <Input
                      placeholder="MM/DD/YYYY"
                      className="rounded-xl border-primary/20 px-6 py-3 placeholder:text-primary/40"
                      type="text"
                      required
                      value={startDate}
                      onChange={(e) => setStartDate(e.target.value)}
                    />
                  </div>
                  <div className="col-span-full">
                    <label className="mb-3 block text-sm font-medium text-primary/90">
                      Full-time or Part-time
                    </label>
                    <Input
                      placeholder="Full-time/Part-time"
                      className="rounded-xl border-primary/20 px-6 py-3 placeholder:text-primary/40"
                      type="text"
                      required
                      value={employmentType}
                      onChange={(e) => setEmploymentType(e.target.value)}
                    />
                  </div>
                  <div className="col-span-full">
                    <label className="mb-3 block text-sm font-medium text-primary/90">
                      Desired Work Schedule
                    </label>
                    <Input
                      placeholder="Weekdays, Weekends, etc."
                      className="rounded-xl border-primary/20 px-6 py-3 placeholder:text-primary/40"
                      type="text"
                      required
                      value={desiredWorkSchedule}
                      onChange={(e) => setDesiredWorkSchedule(e.target.value)}
                    />
                  </div>

                  <div className="col-span-full">
                    <label className="mb-3 block text-sm font-medium text-primary/90">
                      Have you ever been convicted of a crime? (if legally
                      permissible)
                    </label>
                    <Input
                      placeholder="Yes/No"
                      className="rounded-xl border-primary/20 px-6 py-3 placeholder:text-primary/40"
                      type="text"
                      required
                      value={convictedOfCrime}
                      onChange={(e) => setConvictedOfCrime(e.target.value)}
                    />
                  </div>

                  {/* Additional Questions */}
                  <div className="col-span-full">
                    <label className="mb-3 block text-sm font-medium text-primary/90">
                      Why are you interested in this position?
                    </label>
                    <Textarea
                      placeholder="Your answer here..."
                      className="rounded-xl border-primary/20 px-6 py-3 placeholder:text-primary/40"
                      rows={4}
                      required
                      value={interestReason}
                      onChange={(e) => setInterestReason(e.target.value)}
                    />
                  </div>
                  <div className="col-span-full">
                    <label className="mb-3 block text-sm font-medium text-primary/90">
                      What makes you a suitable candidate for this role?
                    </label>
                    <Textarea
                      placeholder="Your answer here..."
                      className="rounded-xl border-primary/20 px-6 py-3 placeholder:text-primary/40"
                      rows={4}
                      required
                      value={suitableCandidateReason}
                      onChange={(e) =>
                        setSuitableCandidateReason(e.target.value)
                      }
                    />
                  </div>
                  <div className="col-span-full">
                    <label className="mb-3 block text-sm font-medium text-primary/90">
                      Describe a challenging work situation and how you handled
                      it.
                    </label>
                    <Textarea
                      placeholder="Your answer here..."
                      className="rounded-xl border-primary/20 px-6 py-3 placeholder:text-primary/40"
                      rows={4}
                      required
                      value={challengingSituation}
                      onChange={(e) => setChallengingSituation(e.target.value)}
                    />
                  </div>

                  {/* Consent and Acknowledgment */}
                  <div className="col-span-full">
                    <label className="mb-3 block text-sm font-medium text-gray-600">
                      Authorization for the company to conduct background checks
                      (if applicable).
                    </label>
                    <input
                      className="mr-2"
                      type="checkbox"
                      checked={backgroundCheckAuthorization}
                      onChange={() =>
                        setBackgroundCheckAuthorization(
                          !backgroundCheckAuthorization,
                        )
                      }
                    />
                    <span className="text-gray-600">Yes</span>
                  </div>
                  <div className="col-span-full">
                    <label className="mb-3 block text-sm font-medium text-gray-600">
                      Agreement to the terms and conditions of the application
                      process.
                      <Link
                        href="/tos"
                        className={cn(
                          "ml-2 p-2 font-semibold text-black underline",
                        )}
                      >
                        TOS
                      </Link>
                    </label>
                    <input
                      className="mr-2"
                      type="checkbox"
                      required
                      checked={termsAndConditionsAgreement}
                      onChange={() =>
                        setTermsAndConditionsAgreement(
                          !termsAndConditionsAgreement,
                        )
                      }
                    />
                    <span className="text-gray-600">Yes</span>
                  </div>
                  <div className="col-span-full flex justify-center">
                    <AlertDialog>
                      <AlertDialogTrigger>
                        <button
                          className={cn(
                            buttonVariants({ variant: "outline" }),
                            "max-w-60 inline-flex w-60 items-center justify-center rounded-xl border-2 border-primary bg-primary px-6 py-2.5 text-center text-sm text-secondary duration-200 hover:border-primary hover:bg-transparent hover:text-primary focus:outline-none focus-visible:outline-primary focus-visible:ring-primary",
                          )}
                          disabled={isNextLoading}
                        >
                          {isNextLoading ? (
                            <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                          ) : (
                            <></>
                          )}{" "}
                          Submit
                        </button>
                      </AlertDialogTrigger>
                      <AlertDialogContent>
                        <AlertDialogHeader>
                          <AlertDialogTitle>
                            Are you absolutely sure to apply?
                          </AlertDialogTitle>
                          <AlertDialogDescription>
                            This form will be submitted to the company and your
                            current profile will be linked.
                          </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                          <AlertDialogCancel>
                            <button onClick={cancel}>Cancel</button>
                          </AlertDialogCancel>
                          <AlertDialogAction>
                            <button type="submit">Continue</button>
                          </AlertDialogAction>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>
                  </div>
                </form>
                <Button className="rounded-2xl w-24" onClick={updateFormValuesWithExampleData}>
                    Input Data
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
