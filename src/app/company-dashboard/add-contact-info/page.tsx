"use client"

import { useToast } from "@/app/_components/ui/use-toast";
import { useState } from "react";
import { api } from "@/trpc/react";
import { buttonVariants } from "@/app/_components/ui/button";
import { cn } from "@/server/utils";

export default function Experience() {
  const [companyLogoSrc, setCompanyLogoSrc] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [companyImgSrc, setCompanyImgSrc] = useState("");
  const [engagement, setEngagement] = useState("");
  const [relativeOfWork, setRelativeOfWork] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [location, setLocation] = useState("");
  const [time, setTime] = useState("");
  const [jobDescriptions, setJobDescriptions] = useState<string[]>([""]);

  const { toast } = useToast();

  //   const createPost = api.experience.createExperience.useMutation({
  //     onSuccess: () => {
  //       // router.push("/some-other-page");
  //     },
  //   });
  const formUpdate = api.settings.addExperience.useMutation({
    onSuccess: () => {
      // router.push("/onboarding/form-2");
      // get teh current date and time in this format: Friday, February 10, 2023 at 5:57 PM
      const today = new Date();
      const date =
        today.toLocaleString("default", { weekday: "long" }) +
        ", " +
        today.toLocaleString("default", { month: "long" }) +
        " " +
        today.getDate() +
        ", " +
        today.getFullYear() +
        " at " +
        today.getHours() +
        ":" +
        today.getMinutes();
      toast({
        title: "Experience Added",
        description: date,
      });
      setCompanyLogoSrc("");
      setCompanyName("");
      setCompanyImgSrc("");
      setEngagement("");
      setRelativeOfWork("");
      setJobTitle("");
      setLocation("");
      setTime("");
      setJobDescriptions([""]);
    },
  });

  function onSubmit() {
    formUpdate.mutate({
      companyLogoSrc,
      companyName,
      companyImgSrc,
      engagement,
      relativeOfWork,
      jobTitle,
      location,
      time,
      jobDescriptions,
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

      <div className="flex flex-col justify-center m-auto">
        <div className="flex flex-col justify-center text-center md:flex-row md:text-left">
          <div className="flex flex-col justify-left w-full max-w-5xl p-10 space-y-12">
            <div className="mt-3 text-3xl tracking-tighter text-black">
              Add Expereince
            </div>
            <form
              className="flex flex-col gap-y-9"
              onSubmit={(e) => {
                e.preventDefault();
                onSubmit();
              }}
            >

              <div className="col-span-full">
                <label className="block mb-3 text-sm font-medium text-gray-600">
                  Company Name
                </label>
                <input
                  className="block w-full px-6 py-3 text-black bg-white border border-gray-200 appearance-none rounded-xl placeholder:text-gray-400 focus:border-red-300 focus:outline-none focus:ring-red-300 sm:text-sm"
                  placeholder="Example Inc."
                  required
                  type="text"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                />
              </div>

              <div className="col-span-full">
                <label className="block mb-3 text-sm font-medium text-gray-600">
                  Company Logo Image
                </label>
                <input
                  className="block w-full px-6 py-3 text-black bg-white border border-gray-200 appearance-none rounded-xl placeholder:text-gray-400 focus:border-red-300 focus:outline-none focus:ring-red-300 sm:text-sm"
                  placeholder="URL"
                  required
                  type="text"
                  value={companyLogoSrc}
                  onChange={(e) => setCompanyLogoSrc(e.target.value)}
                />
              </div>

              <div className="col-span-full">
                <label className="block mb-3 text-sm font-medium text-gray-600">
                  Company Banner Image
                </label>
                <input
                  className="block w-full px-6 py-3 text-black bg-white border border-gray-200 appearance-none rounded-xl placeholder:text-gray-400 focus:border-red-300 focus:outline-none focus:ring-red-300 sm:text-sm"
                  placeholder="URL"
                  type="text"
                  required
                  value={companyImgSrc}
                  onChange={(e) => setCompanyImgSrc(e.target.value)}
                />
              </div>

              <div className="col-span-full">
                <label className="block mb-3 text-sm font-medium text-gray-600">
                  Engagement
                </label>
                <input
                  className="block w-full px-6 py-3 text-black bg-white border border-gray-200 appearance-none rounded-xl placeholder:text-gray-400 focus:border-red-300 focus:outline-none focus:ring-red-300 sm:text-sm"
                  placeholder="Full-time, Part-time, Intern, etc."
                  type="text"
                  value={engagement}
                  required
                  onChange={(e) => setEngagement(e.target.value)}
                />
              </div>

              <div className="col-span-full">
                <label className="block mb-3 text-sm font-medium text-gray-600">
                  Relative of Work
                </label>
                <input
                  className="block w-full px-6 py-3 text-black bg-white border border-gray-200 appearance-none rounded-xl placeholder:text-gray-400 focus:border-red-300 focus:outline-none focus:ring-red-300 sm:text-sm"
                  placeholder="Remote or In-person"
                  type="text"
                  required
                  value={relativeOfWork}
                  onChange={(e) => setRelativeOfWork(e.target.value)}
                />
              </div>

              <div className="col-span-full">
                <label className="block mb-3 text-sm font-medium text-gray-600">
                  Job Title
                </label>
                <input
                  className="block w-full px-6 py-3 text-black bg-white border border-gray-200 appearance-none rounded-xl placeholder:text-gray-400 focus:border-red-300 focus:outline-none focus:ring-red-300 sm:text-sm"
                  placeholder="Frontend Developer"
                  type="text"
                  value={jobTitle}
                  onChange={(e) => setJobTitle(e.target.value)}
                />
              </div>

              <div className="col-span-full">
                <label className="block mb-3 text-sm font-medium text-gray-600">
                  Location
                </label>
                <input
                  className="block w-full px-6 py-3 text-black bg-white border border-gray-200 appearance-none rounded-xl placeholder:text-gray-400 focus:border-red-300 focus:outline-none focus:ring-red-300 sm:text-sm"
                  placeholder="San Francisco, CA"
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
              </div>

              <div className="col-span-full">
                <label className="block mb-3 text-sm font-medium text-gray-600">
                  Time
                </label>
                <input
                  className="block w-full px-6 py-3 text-black bg-white border border-gray-200 appearance-none rounded-xl placeholder:text-gray-400 focus:border-red-300 focus:outline-none focus:ring-red-300 sm:text-sm"
                  placeholder="Jan 2020 - Present"
                  type="text"
                  required
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                />
              </div>

              <div className="col-span-full">
                <label className="block mb-3 text-sm font-medium text-gray-600">
                  Job Descriptions <span className="text-red-400">*at least 1 required</span>
                </label>
                {jobDescriptions.map((description, index) => (
                  <div key={index} className="flex items-center space-x-3 mb-2">
                    <input
                      className="block w-full px-4 py-2 text-black bg-white border border-gray-200 appearance-none rounded-xl placeholder:text-gray-400 focus:border-red-300 focus:outline-none focus:ring-red-300 sm:text-sm"
                      placeholder={`Job Description #${index + 1}`}
                      type="text"
                      required
                      value={description}
                      onChange={(e) =>
                        updateJobDescription(index, e.target.value)
                      }
                    />
                    <button
                      type="button"
                      className={cn(buttonVariants({ variant: "secondary" }), "text-red-500 focus:outline-none rounded-2xl")}
                      onClick={() => removeJobDescription(index)}
                    >
                      Remove
                    </button>
                  </div>
                ))}
                <button
                  type="button"
                  className={cn(buttonVariants({ variant: "secondary" }), "text-blue-500 focus:outline-none rounded-2xl")}
                  onClick={addJobDescription}
                >
                  Add Job Description
                </button>
              </div>

              <div className="col-span-full">
                <button
                  className="items-center justify-center w-full px-6 py-2.5 text-center text-white duration-200 bg-black border-2 border-black rounded-full inline-flex hover:bg-transparent hover:border-black hover:text-black focus:outline-none focus-visible:outline-black text-sm focus-visible:ring-black"
                  type="submit"
                  disabled={formUpdate.isLoading}
                >
                  Add Experience
                </button>
              </div>
              {formUpdate.isLoading ? "Submitting..." : ""}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
