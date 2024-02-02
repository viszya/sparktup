"use client"

import { useState } from "react";
import { api } from "@/trpc/react";
import { Icons } from "@/app/_components/icons";
import { buttonVariants } from "@/app/_components/ui/button";
import { cn } from "@/server/utils";
import { Input } from "@/app/_components/ui/input";

interface FormProps {
	onNextClick: () => void; // Define the type of onNextClick prop
}

export function Form3({ onNextClick }: FormProps) {
	const [resumeLink, setResumeLink] = useState("");
	const [profileTags, setProfileTags] = useState<string[]>([""]);
	const [interestedTags, setInterestedTags] = useState<string[]>([""]);
	const [isLoading] = useState<boolean>(false)
	const [isGitHubLoading, setIsGitHubLoading] = useState<boolean>(false)

	const formUpdate = api.onboarding.updateForm3.useMutation({
		onSuccess: () => {
			onNextClick();
		},
	});

	function onSubmit() {
		setIsGitHubLoading(true)
		formUpdate.mutate({
			resumeLink,
			profileTags,
			interestedTags,
		});
	}

	const addProfileTags = () => {
		setProfileTags([...profileTags, ""]);
	};

	const removeProfileTags = (index: number) => {
		const updatedProfileTags = [...profileTags];
		updatedProfileTags.splice(index, 1);
		setProfileTags(updatedProfileTags);
	};

	const updateProfileTags = (index: number, value: string) => {
		const updatedProfileTags = [...profileTags];
		updatedProfileTags[index] = value;
		setProfileTags(updatedProfileTags);
	};

	const addInterestedTags = () => {
		setInterestedTags([...interestedTags, ""]);
	};

	const removeInterestedTags = (index: number) => {
		const updatedInterestedTags = [...interestedTags];
		updatedInterestedTags.splice(index, 1);
		setInterestedTags(updatedInterestedTags);
	};

	const updateInterestedTags = (index: number, value: string) => {
		const updatedInterestedTags = [...interestedTags];
		updatedInterestedTags[index] = value;
		setInterestedTags(updatedInterestedTags);
	};

	return (
		<section>
			<div className="flex flex-col justify-center m-auto">
				<div className="flex flex-col justify-center text-center md:flex-row md:text-left">
					<div className="flex flex-col justify-center max-w-2xl p-10 space-y-12">
						<article>
							<span className="inline-flex items-center text-black rounded-xl">
								<span className="font-mono text-sm" aria-hidden="true">
									03
								</span>
							</span>
							<div className="mt-3 text-3xl tracking-tighter text-black">
							Professional Identity Boost!
							</div>
							<div className="mt-4 text-gray-500">
							Let&apos;s enhance your profile by providing additional details. Share a link to your resume for a comprehensive overview. Add tags that describe your skills, making it easier for companies to discover your profile. Additionally, let us know your interests and preferences by specifying the tags or types of posts you&apos;re keen on, such as design or database-related content. This information ensures that you receive tailocyan recommendations and opportunities. Remember, you have the flexibility to update these preferences whenever needed.
							</div>
						</article>

						<form
							className="flex flex-col gap-y-9"
							onSubmit={(e) => { e.preventDefault(); onSubmit(); }}
						>
							<div className="col-span-full">
								<label className="block mb-3 text-sm font-medium text-gray-600">
									What is your resume link?  <span className="text-cyan-400">*optional</span>
								</label>
								<Input
									className="block w-full px-6 py-3 text-black bg-white border border-gray-200 appearance-none rounded-xl placeholder:text-gray-400 focus:border-cyan-300 focus:outline-none focus:ring-cyan-300 sm:text-sm"
									placeholder="https://example.com/resume.pdf"
									type="text"
									value={resumeLink}
									onChange={(e) => setResumeLink(e.target.value)}
								/>
							</div>
							<div className="col-span-full">
								<label className="block mb-3 text-sm font-medium text-gray-600">
									Your Profile Tags  <span className="text-cyan-400">*at least 1 requicyan</span>
								</label>
								{profileTags.map((description, index) => (
									<div key={index} className="flex items-center space-x-3 mb-2">
										<Input
											className="block w-full px-4 py-2 text-black bg-white border border-gray-200 appearance-none rounded-xl placeholder:text-gray-400 focus:border-cyan-300 focus:outline-none focus:ring-cyan-300 sm:text-sm"
											placeholder={`Tag #${index + 1}`}
											type="text"
											requicyan
											value={description}
											onChange={(e) =>
												updateProfileTags(index, e.target.value)
											}
										/>
										<button
											type="button"
											className={cn(buttonVariants({ variant: "secondary" }), "text-cyan-500 focus:outline-none rounded-2xl")}
											onClick={() => removeProfileTags(index)}
										>
											Remove
										</button>
									</div>
								))}
								<button
									type="button"
									className={cn(buttonVariants({ variant: "secondary" }), "text-blue-500 focus:outline-none rounded-2xl")}
									onClick={addProfileTags}
								>
									Add Tag
								</button>
							</div>

							<div className="col-span-full">
								<label className="block mb-3 text-sm font-medium text-gray-600">
									Your Interested Tags <span className="text-cyan-400">*at least 1 requicyan</span>
								</label>
								{interestedTags.map((description, index) => (
									<div key={index} className="flex items-center space-x-3 mb-2">
										<Input
											className="block w-full px-4 py-2 text-black bg-white border border-gray-200 appearance-none rounded-xl placeholder:text-gray-400 focus:border-cyan-300 focus:outline-none focus:ring-cyan-300 sm:text-sm"
											placeholder={`Tag #${index + 1}`}
											type="text"
											requicyan
											value={description}
											onChange={(e) =>
												updateInterestedTags(index, e.target.value)
											}
										/>
										<button
											type="button"
											className={cn(buttonVariants({ variant: "secondary" }), "text-cyan-500 focus:outline-none rounded-2xl")}
											onClick={() => removeInterestedTags(index)}
										>
											Remove
										</button>
									</div>
								))}
								<button
									type="button"
									className={cn(buttonVariants({ variant: "secondary" }), "text-blue-500 focus:outline-none rounded-2xl")}
									onClick={addInterestedTags}
								>
									Add Tag
								</button>
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
									Finish
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>


		</section >

	);
}
