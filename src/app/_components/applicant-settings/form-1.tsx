"use client"

import { useState } from "react";
import { api } from "@/trpc/react";
import { useToast } from "@/app/_components/ui/use-toast";


export function Form1() {
	const { toast } = useToast();
	const [fullName, setFullName] = useState("");
	const [username, setUsername] = useState("");
	const [location, setLocation] = useState("");
	const [proEmail, setProEmail] = useState("");
	const [about, setAbout] = useState("");
	const [jobTitle, setJobTitle] = useState("");
	const [yearsOfExperience, setYearsOfExperience] = useState("");
	const [availableForWork, setAvailableForWork] = useState(false);
	const [hasAJob, setHasAJob] = useState(false);
	const [resumeLink, setResumeLink] = useState("");
	const [profileTags, setProfileTags] = useState<string[]>([""]);
	const [interestedTags, setInterestedTags] = useState<string[]>([""]);

	const formUpdate = api.settings.settingsForm1.useMutation({
		onSuccess: () => {
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
			setFullName("");
			setUsername("");
			setLocation("");
			setProEmail("");
			setAbout("");
			setJobTitle("");
			setYearsOfExperience("");
			setAvailableForWork(false);
			setHasAJob(false);
			setResumeLink("");
			setProfileTags([""]);
			setInterestedTags([""]);
		},
	});

	function onSubmit() {
		formUpdate.mutate({
			fullName,
			proEmail,
			username,
			location,
			about,
			jobTitle,
			yearsOfExperience,
			availableForWork,
			hasAJob,
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
					<div className="flex flex-col justify-center w-full max-w-5xl p-10 space-y-12">

						<form
							className="flex flex-col gap-y-9"
							onSubmit={(e) => {
								e.preventDefault();
								onSubmit();
							}}
						>
							<div className="col-span-full">
								<label className="block mb-3 text-sm font-medium text-gray-600">
									What is your full name (first / last)?
								</label>
								<input
									className="block w-full px-6 py-3 text-black bg-white border border-gray-200 appearance-none rounded-xl placeholder:text-gray-400 focus:border-red-300 focus:outline-none focus:ring-red-300 sm:text-sm"
									placeholder="Jeff Bezos"
									type="text"
									value={fullName}
									required
									onChange={(e) => setFullName(e.target.value)}
								/>
							</div>
							<div className="col-span-full">
								<label className="block mb-3 text-sm font-medium text-gray-600" >
									What is your professional email address?
								</label>
								<input
									className="block w-full px-6 py-3 text-black bg-white border border-gray-200 appearance-none rounded-xl placeholder:text-gray-400 focus:border-red-300 focus:outline-none focus:ring-red-300 sm:text-sm"
									placeholder="jeffbezos@example.com"
									type="text"
									value={proEmail}
									required
									onChange={(e) => setProEmail(e.target.value)}
								/>
							</div>
							<div className="col-span-full">
								<label className="block mb-3 text-sm font-medium text-gray-600">
									Choose a username
								</label>
								<input
									className="block w-full px-6 py-3 text-black bg-white border border-gray-200 appearance-none rounded-xl placeholder:text-gray-400 focus:border-red-300 focus:outline-none focus:ring-red-300 sm:text-sm"
									placeholder="jeffbezos"
									type="text"
									value={username}
									required
									onChange={(e) => setUsername(e.target.value)}
								/>
							</div>
							<div className="col-span-full">
								<label className="block mb-3 text-sm font-medium text-gray-600">
									Where are you located?
								</label>
								<input
									className="block w-full px-6 py-3 text-black bg-white border border-gray-200 appearance-none rounded-xl placeholder:text-gray-400 focus:border-red-300 focus:outline-none focus:ring-red-300 sm:text-sm"
									placeholder="Seattle, WA"
									type="text"
									value={location}
									required
									onChange={(e) => setLocation(e.target.value)}
								/>
							</div>
							<div>
								<div>
									<label className="block mb-3 text-sm font-medium text-gray-600">
										Your Personal Statement / Profile Summary
									</label>
									<div className="mt-1">
										<textarea
											className="block w-full px-6 py-3 text-black bg-white border border-gray-200 appearance-none rounded-xl placeholder:text-gray-400 focus:border-red-300 focus:outline-none focus:ring-red-300 sm:text-sm"
											placeholder="What are you working on?"
											rows={4}
											value={about}
											required
											onChange={(e) => setAbout(e.target.value)}
										></textarea>
									</div>
								</div>
							</div>
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
								<button
									className="items-center justify-center w-full px-6 py-2.5 text-center text-white duration-200 bg-black border-2 border-black rounded-full inline-flex hover:bg-transparent hover:border-black hover:text-black focus:outline-none focus-visible:outline-black text-sm focus-visible:ring-black"
									type="submit"
									disabled={formUpdate.isLoading}
								>
									Save Changes
								</button>
							</div>
							{formUpdate.isLoading ?
								"Submitting..." :
								""}
						</form>
					</div>
				</div>
			</div>
		</section>
	);
}
