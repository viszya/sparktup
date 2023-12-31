"use client"

import { useState } from "react";
import { api } from "@/trpc/react";

interface FormProps {
	onNextClick: () => void; // Define the type of onNextClick prop
}

export function Form3({ onNextClick }: FormProps) {
	const [resumeLink, setResumeLink] = useState("");
	const [profileTags, setProfileTags] = useState<string[]>([""]);
	const [interestedTags, setInterestedTags] = useState<string[]>([""]);

	const formUpdate = api.onboarding.updateForm3.useMutation({
		onSuccess: () => {
			onNextClick();
		},
	});

	function onSubmit() {
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
									What is your resume link?
								</label>
								<input
									className="block w-full px-6 py-3 text-black bg-white border border-gray-200 appearance-none rounded-xl placeholder:text-gray-400 focus:border-red-300 focus:outline-none focus:ring-red-300 sm:text-sm"
									placeholder="https://example.com/resume.pdf"
									type="text"
									value={resumeLink}
									onChange={(e) => setResumeLink(e.target.value)}
								/>
							</div>
							<div className="col-span-full">
								<label className="block mb-3 text-sm font-medium text-gray-600">
									Your Profile Tags
								</label>
								{profileTags.map((description, index) => (
									<div key={index} className="flex items-center space-x-3">
										<input
											className="block w-full px-4 py-2 text-black bg-white border border-gray-200 appearance-none rounded-xl placeholder:text-gray-400 focus:border-red-300 focus:outline-none focus:ring-red-300 sm:text-sm"
											placeholder={`Tag #${index + 1}`}
											type="text"
											value={description}
											onChange={(e) =>
												updateProfileTags(index, e.target.value)
											}
										/>
										<button
											type="button"
											className="text-red-500 focus:outline-none"
											onClick={() => removeProfileTags(index)}
										>
											Remove
										</button>
									</div>
								))}
								<button
									type="button"
									className="text-blue-500 focus:outline-none"
									onClick={addProfileTags}
								>
									Add Tag
								</button>
							</div>

							<div className="col-span-full">
								<label className="block mb-3 text-sm font-medium text-gray-600">
									Your Interested Tags
								</label>
								{interestedTags.map((description, index) => (
									<div key={index} className="flex items-center space-x-3">
										<input
											className="block w-full px-4 py-2 text-black bg-white border border-gray-200 appearance-none rounded-xl placeholder:text-gray-400 focus:border-red-300 focus:outline-none focus:ring-red-300 sm:text-sm"
											placeholder={`Tag #${index + 1}`}
											type="text"
											value={description}
											onChange={(e) =>
												updateInterestedTags(index, e.target.value)
											}
										/>
										<button
											type="button"
											className="text-red-500 focus:outline-none"
											onClick={() => removeInterestedTags(index)}
										>
											Remove
										</button>
									</div>
								))}
								<button
									type="button"
									className="text-blue-500 focus:outline-none"
									onClick={addInterestedTags}
								>
									Add Tag
								</button>
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
