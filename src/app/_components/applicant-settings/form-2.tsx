"use client"

import { useToast } from "@/app/_components/ui/use-toast";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { api } from "@/trpc/react";

export function Form2() {
  const [companyLogoSrc, setCompanyLogoSrc] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [companyImgSrc, setCompanyImgSrc] = useState("");
  const [engagement, setEngagement] = useState("");
  const [relativeOfWork, setRelativeOfWork] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [location, setLocation] = useState("");
  const [time, setTime] = useState("");
  const [jobDescriptions, setJobDescriptions] = useState<string[]>([""]);

  const router = useRouter();
  const { toast } = useToast();

  //   const createPost = api.experience.createExperience.useMutation({
  //     onSuccess: () => {
  //       // router.push("/some-other-page");
  //     },
  //   });
  const createPost = api.user.updateProfile.useMutation({
    onSuccess: () => {
      // router.push("/onboarding/form-2");
    },
  });

  function onSubmit() {
    toast({
      title: "Form submitted!",
      description: "Friday, February 10, 2023 at 5:57 PM",
    });
    // createPost.mutate({
    //   companyLogoSrc,
    //   companyName,
    //   companyImgSrc,
    //   engagement,
    //   relativeOfWork,
    //   jobTitle,
    //   location,
    //   time,
    //   jobDescriptions,
    // });
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
          <div className="flex flex-col justify-center max-w-2xl p-10 space-y-12">

            <form
              className="flex flex-col gap-y-9"
              onSubmit={(e) => {
                e.preventDefault();
                onSubmit();
              }}
            >
              <div className="col-span-full">
                <label className="block mb-3 text-sm font-medium text-gray-600">
                  Company Logo Source
                </label>
                <input
                  className="block w-full px-6 py-3 text-black bg-white border border-gray-200 appearance-none rounded-xl placeholder:text-gray-400 focus:border-red-300 focus:outline-none focus:ring-red-300 sm:text-sm"
                  placeholder="URL"
                  type="text"
                  value={companyLogoSrc}
                  onChange={(e) => setCompanyLogoSrc(e.target.value)}
                />
              </div>

              <div className="col-span-full">
                <label className="block mb-3 text-sm font-medium text-gray-600">
                  Company Name
                </label>
                <input
                  className="block w-full px-6 py-3 text-black bg-white border border-gray-200 appearance-none rounded-xl placeholder:text-gray-400 focus:border-red-300 focus:outline-none focus:ring-red-300 sm:text-sm"
                  placeholder="Example Inc."
                  type="text"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                />
              </div>

              <div className="col-span-full">
                <label className="block mb-3 text-sm font-medium text-gray-600">
                  Company Image Source
                </label>
                <input
                  className="block w-full px-6 py-3 text-black bg-white border border-gray-200 appearance-none rounded-xl placeholder:text-gray-400 focus:border-red-300 focus:outline-none focus:ring-red-300 sm:text-sm"
                  placeholder="URL"
                  type="text"
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
                  placeholder="Full-time, Part-time"
                  type="text"
                  value={engagement}
                  onChange={(e) => setEngagement(e.target.value)}
                />
              </div>

              <div className="col-span-full">
                <label className="block mb-3 text-sm font-medium text-gray-600">
                  Relative of Work
                </label>
                <input
                  className="block w-full px-6 py-3 text-black bg-white border border-gray-200 appearance-none rounded-xl placeholder:text-gray-400 focus:border-red-300 focus:outline-none focus:ring-red-300 sm:text-sm"
                  placeholder="Software Engineer"
                  type="text"
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
                  placeholder="Full-time, Part-time"
                  type="text"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                />
              </div>

              <div className="col-span-full">
                <label className="block mb-3 text-sm font-medium text-gray-600">
                  Job Descriptions
                </label>
                {jobDescriptions.map((description, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <input
                      className="block w-full px-4 py-2 text-black bg-white border border-gray-200 appearance-none rounded-xl placeholder:text-gray-400 focus:border-red-300 focus:outline-none focus:ring-red-300 sm:text-sm"
                      placeholder={`Job Description #${index + 1}`}
                      type="text"
                      value={description}
                      onChange={(e) =>
                        updateJobDescription(index, e.target.value)
                      }
                    />
                    <button
                      type="button"
                      className="text-red-500 focus:outline-none"
                      onClick={() => removeJobDescription(index)}
                    >
                      Remove
                    </button>
                  </div>
                ))}
                <button
                  type="button"
                  className="text-blue-500 focus:outline-none"
                  onClick={addJobDescription}
                >
                  Add Job Description
                </button>
              </div>

              <div className="col-span-full">
                <button
                  className="items-center justify-center w-full px-6 py-2.5 text-center text-white duration-200 bg-black border-2 border-black rounded-full inline-flex hover:bg-transparent hover:border-black hover:text-black focus:outline-none focus-visible:outline-black text-sm focus-visible:ring-black"
                  type="submit"
                  disabled={createPost.isLoading}
                >
                  Save Changes
                </button>
              </div>
              {createPost.isLoading ? "Submitting..." : ""}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
