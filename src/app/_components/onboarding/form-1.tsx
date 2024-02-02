"use client"

import { useState } from "react";
import { api } from "@/trpc/react";
import { Icons } from "@/app/_components/icons";
import { buttonVariants } from "@/app/_components/ui/button";
import { cn } from "@/server/utils";
import { Input } from "@/app/_components/ui/input";
import { Textarea } from "@/app/_components/ui/textarea";

interface FormProps {
	onNextClick: () => void; // Define the type of onNextClick prop
}

export function Form1({ onNextClick }: FormProps) {
	const [fullName, setFullName] = useState("");
	const [username, setUsername] = useState("");
	const [location, setLocation] = useState("");
	const [proEmail, setProEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [about, setAbout] = useState("");
	const [isLoading] = useState<boolean>(false)
	const [isGitHubLoading, setIsGitHubLoading] = useState<boolean>(false)


	const formUpdate = api.onboarding.updateForm1.useMutation({
		onSuccess: () => {
			onNextClick();
		},
	});

	function onSubmit() {
		setIsGitHubLoading(true)
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
					<div className="flex flex-col justify-center max-w-2xl p-4 pb-10 sm:pb-0 sm:p-10 space-y-12 bg-white/70 rounded-2xl">
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
								<Input
									className="block w-full px-6 py-3 text-black bg-white border border-gray-200 appearance-none rounded-xl placeholder:text-gray-400 focus:border-black focus:outline-none focus:ring-black sm:text-sm"
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
								<Input
									className="block w-full px-6 py-3 text-black bg-white border border-gray-200 appearance-none rounded-xl placeholder:text-gray-400 focus:border-black focus:outline-none focus:ring-black sm:text-sm"
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
								<Input
									className="block w-full px-6 py-3 text-black bg-white border border-gray-200 appearance-none rounded-xl placeholder:text-gray-400 focus:border-black focus:outline-none focus:ring-black sm:text-sm"
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
								<Input
									className="block w-full px-6 py-3 text-black bg-white border border-gray-200 appearance-none rounded-xl placeholder:text-gray-400 focus:border-black focus:outline-none focus:ring-black sm:text-sm"
									placeholder="Seattle, WA"
									type="text"
									value={location}
									required
									onChange={(e) => setLocation(e.target.value)}
								/>
							</div>
							<div className="col-span-full">
								<label className="block mb-3 text-sm font-medium text-gray-600">
									What is your phone number?
								</label>
								<Input
									className="block w-full px-6 py-3 text-black bg-white border border-gray-200 appearance-none rounded-xl placeholder:text-gray-400 focus:border-black focus:outline-none focus:ring-black sm:text-sm"
									placeholder="123-456-7890"
									type="text"
									value={phone}
									required
									onChange={(e) => setPhone(e.target.value)}
								/>
							</div>
							<div>
								<div>
									<label className="block mb-3 text-sm font-medium text-gray-600">
										Your Personal Statement / Profile Summary
									</label>
									<div className="mt-1">
										<Textarea
											className="block w-full px-6 py-3 text-black bg-white border border-gray-200 appearance-none rounded-xl placeholder:text-gray-400 focus:border-black focus:outline-none focus:ring-black sm:text-sm"
											placeholder="What are you working on?"
											rows={4}
											value={about}
											required
											onChange={(e) => setAbout(e.target.value)}
										/>
									</div>
								</div>
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
		</section>
	);
}
