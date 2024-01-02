"use client"

import { useState } from "react";
import { api } from "@/trpc/react";
import { Icons } from "@/app/_components/icons";
import { buttonVariants } from "@/app/_components/ui/button";
import { cn } from "@/server/utils";

interface FormProps {
	onNextClick: () => void; // Define the type of onNextClick prop
}

export function Form2({ onNextClick }: FormProps) {
	const [jobTitle, setJobTitle] = useState("");
	const [yearsOfExperience, setYearsOfExperience] = useState("");
	const [availableForWork, setAvailableForWork] = useState(false);
	const [hasAJob, setHasAJob] = useState(false);
	const [isLoading] = useState<boolean>(false)
	const [isGitHubLoading, setIsGitHubLoading] = useState<boolean>(false)

	const formUpdate = api.onboarding.updateForm2.useMutation({
		onSuccess: () => {
			onNextClick();
		},
	});

	function onSubmit() {
		setIsGitHubLoading(true)
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
							Employment Details!
							</div>
							<div className="mt-4 text-gray-500">
							Help us understand your current professional status and aspirations. Share information about your current job, job title, relevant experience, and whether you&apos;re actively seeking new opportunities. Your responses will contribute to shaping a comprehensive profile that reflects your career journey. Remember, you can always update this information later to keep your profile accurate and up-to-date.
							</div>
						</article>

						<form
							className="flex flex-col gap-y-9"
							onSubmit={(e) => { e.preventDefault(); onSubmit(); }}
						>
							<div className="col-span-full">
								<label className="block mb-3 text-sm font-medium text-gray-600">
									Do you have a job? <em className="text-gray-400">Leave Un-Checked if don&apos;t have a job</em>
								</label>
								<input
									className="mr-2"
									type="checkbox"
									checked={hasAJob}
									onChange={() => setHasAJob(!hasAJob)}
								/>
								<span className="text-gray-600">Yes, I have a job</span>
							</div>
							<div className="col-span-full">
								<label className="block mb-3 text-sm font-medium text-gray-600">
									What is your main profession or job title? <span className="text-red-400">*optional</span>
								</label>
								<input
									className="block w-full px-6 py-3 text-black bg-white border border-gray-200 appearance-none rounded-xl placeholder:text-gray-400 focus:border-red-300 focus:outline-none focus:ring-red-300 sm:text-sm"
									placeholder="Full Stack Developer, etc."
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
									required
									type="text"
									value={yearsOfExperience}
									onChange={(e) => setYearsOfExperience(e.target.value)}
								/>
							</div>
							<div className="col-span-full">
								<label className="block mb-3 text-sm font-medium text-gray-600">
									Are you looking for a job? <em className="text-gray-400">Leave Un-Checked if you are not looking for a job</em>
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
								<button
									type="submit"
									className={cn(buttonVariants({ variant: "outline" }), "items-center justify-center w-full px-6 py-2.5 text-center text-white duration-200 bg-black border-2 border-black rounded-full inline-flex hover:bg-transparent hover:border-black hover:text-black focus:outline-none focus-visible:outline-black text-sm focus-visible:ring-black")}
									disabled={isLoading || isGitHubLoading}
								>
									{isGitHubLoading ? (
										<Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
									) : (<></>
									)}{" "}
									Next
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</section >
	);
}
