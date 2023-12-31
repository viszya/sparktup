"use client"

import { useToast } from "@/app/_components/ui/use-toast"
import { useRouter } from "next/navigation";
import { useState } from "react";

import { api } from "@/trpc/react";

interface FormProps {
	onNextClick: () => void; // Define the type of onNextClick prop
  }

export function Form2({ onNextClick }: FormProps) {
	const router = useRouter();
	const [jobTitle, setJobTitle] = useState("");
	const [yearsOfExperience, setYearsOfExperience] = useState("");
	const [availableForWork, setAvailableForWork] = useState(false);
	const [hasAJob, setHasAJob] = useState(false);

	const formUpdate = api.onboarding.updateForm2.useMutation({
		onSuccess: () => {
			onNextClick();
			// router.push("/onboarding/form-2");
		},
	});

	function onSubmit() {
		formUpdate.mutate({
		    jobTitle,
		    yearsOfExperience,
		    availableForWork,
		    hasAJob,
		});
	}

	return (
		<section>
			<div className="flex flex-col justify-center m-auto">
				<div className="flex flex-col justify-center text-center md:flex-row md:text-left">
					<div className="flex flex-col justify-center max-w-2xl p-10 space-y-12">
						<article>
							<span className="inline-flex items-center text-black rounded-xl">
								<span className="font-mono text-sm" aria-hidden="true">
									02
								</span>
							</span>
							<div className="mt-3 text-3xl tracking-tighter text-black">
								Let&apos;s get your profile set up!
							</div>
							<div className="mt-4 text-gray-500">
								Let&apos;s get to know each other. Please fill out the following form to the best of your ability.
								All this information will be used to create your profile. You can always edit your profile later.
							</div>
						</article>

						<form
							className="flex flex-col gap-y-9"
							onSubmit={(e) => { e.preventDefault(); onSubmit(); }}
						>
							<div className="col-span-full">
                                <label className="block mb-3 text-sm font-medium text-gray-600">
                                    Yes, I have a job
                                </label>
                                <input
                                    className="mr-2"
                                    type="checkbox"
                                    checked={hasAJob}
                                    onChange={() => setHasAJob(!hasAJob)}
                                />
                                <span className="text-gray-600">Yes, I am available for work</span>
                            </div>
							<div className="col-span-full">
                                <label className="block mb-3 text-sm font-medium text-gray-600">
                                    What is your profession or job title?
                                </label>
                                <input
                                    className="block w-full px-6 py-3 text-black bg-white border border-gray-200 appearance-none rounded-xl placeholder:text-gray-400 focus:border-red-300 focus:outline-none focus:ring-red-300 sm:text-sm"
                                    placeholder="Richest Person in the World"
                                    type="text"
                                    value={jobTitle}
                                    onChange={(e) => setJobTitle(e.target.value)}
                                />
                            </div>
							<div className="col-span-full">
                                <label className="block mb-3 text-sm font-medium text-gray-600">
                                    How many years of experience do you have?
                                </label>
                                <input
                                    className="block w-full px-6 py-3 text-black bg-white border border-gray-200 appearance-none rounded-xl placeholder:text-gray-400 focus:border-red-300 focus:outline-none focus:ring-red-300 sm:text-sm"
                                    placeholder="10+"
                                    type="text"
                                    value={yearsOfExperience}
                                    onChange={(e) => setYearsOfExperience(e.target.value)}
                                />
                            </div>
							<div className="col-span-full">
                                <label className="block mb-3 text-sm font-medium text-gray-600">
                                    Are you available for work?
                                </label>
                                <input
                                    className="mr-2"
                                    type="checkbox"
                                    checked={availableForWork}
                                    onChange={() => setAvailableForWork(!availableForWork)}
                                />
                                <span className="text-gray-600">Yes, I am available for work</span>
                            </div>
							<div className="col-span-full">
								<button className="items-center justify-center w-full px-6 py-2.5 text-center text-white duration-200 bg-black border-2 border-black rounded-full nline-flex hover:bg-transparent hover:border-black hover:text-black focus:outline-none focus-visible:outline-black text-sm focus-visible:ring-black" type="submit" disabled={formUpdate.isLoading}>
									Submit your request
								</button>
							</div>
							{formUpdate.isLoading ? "Submitting..." : ""}
						</form>
					</div>
				</div>
			</div>


		</section >

	);
}
