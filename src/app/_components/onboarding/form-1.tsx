"use client"

import { useState } from "react";
import { api } from "@/trpc/react";

interface FormProps {
  onNextClick: () => void; // Define the type of onNextClick prop
}

export function Form1({ onNextClick }: FormProps) {
	const [fullName, setFullName] = useState("");
	const [username, setUsername] = useState("");
	const [location, setLocation] = useState("");
	const [proEmail, setProEmail] = useState("");
	const [about, setAbout] = useState("");


	const formUpdate = api.onboarding.updateForm1.useMutation({
		onSuccess: () => {
			onNextClick();
		},
	});

	function onSubmit() {
		formUpdate.mutate({
		    fullName,
		    proEmail,
		    username,
		    location,
		    about,
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
									01
								</span>
							</span>
							<div className="mt-3 text-3xl tracking-tighter text-black">
								Welcome! Let&apos;s get started.
							</div>
							<div className="mt-4 text-gray-500">
								Let&apos;s get to know each other. Please fill out the following
								form to the best of your ability. All this information will be
								used to create your profile. You can always edit your profile
								later.
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
								<button
									className="items-center justify-center w-full px-6 py-2.5 text-center text-white duration-200 bg-black border-2 border-black rounded-full inline-flex hover:bg-transparent hover:border-black hover:text-black focus:outline-none focus-visible:outline-black text-sm focus-visible:ring-black"
									type="submit"
									disabled={formUpdate.isLoading}
								>
									Next
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
