"use client"

import { useToast } from "@/app/_components/ui/use-toast"
import { useRouter } from "next/navigation";
import { useState } from "react";

import { api } from "@/trpc/react";

export function ProfileForm() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [jobTitle, setJobTitle] = useState("");
	const [statement, setStatement] = useState("");
	const router = useRouter();
	const { toast } = useToast()

	const createPost = api.onboarding.form.useMutation({
		onSuccess: () => {
			//router.push("/onboarding/form-2");
		},
	});

	async function onSubmit() {
		toast({
			title: "Form submitted!",
			description: "Friday, February 10, 2023 at 5:57 PM",
		})
		createPost.mutate({ name, email, jobTitle, statement });
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
								Welcome! Let's get started.
							</div>
							<div className="mt-4 text-gray-500">
								Let's get to know each other. Please fill out the following form to the best of your ability.
								All this information will be used to create your profile. You can always edit your profile later.
							</div>
						</article>

						<form  
							className="flex flex-col gap-y-9"
							onSubmit={(e) => { e.preventDefault(); onSubmit(); }}
							>

							<div className="col-span-full">
								<label className="block mb-3 text-sm font-medium text-gray-600" >
									What is your full name (first / last)?
								</label>
								<input
									className="block w-full px-6 py-3 text-black bg-white border border-gray-200 appearance-none rounded-xl placeholder:text-gray-400 focus:border-red-300 focus:outline-none focus:ring-red-300 sm:text-sm"
									placeholder="Jeff Bezos"
									type="text"
									value={name}
									onChange={(e) => setName(e.target.value)}
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
									value={email}
									onChange={(e) => setEmail(e.target.value)}
								/>
							</div>

							<div className="col-span-full">
								<label className="block mb-3 text-sm font-medium text-gray-600" >
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

							<div>
								<div>
									<label className="block mb-3 text-sm font-medium text-gray-600">
										Your Personal Statement / Profile Summary
									</label>
									<div className="mt-1">
										<textarea className="block w-full px-6 py-3 text-black bg-white border border-gray-200 appearance-none rounded-xl placeholder:text-gray-400 focus:border-red-300 focus:outline-none focus:ring-red-300 sm:text-sm"
											placeholder="What are you working on?"
											rows={4}
											value={statement}
											onChange={(e) => setStatement(e.target.value)}
										></textarea>
									</div>
								</div>
							</div>

							<div className="col-span-full">
								<button className="items-center justify-center w-full px-6 py-2.5 text-center text-white duration-200 bg-black border-2 border-black rounded-full nline-flex hover:bg-transparent hover:border-black hover:text-black focus:outline-none focus-visible:outline-black text-sm focus-visible:ring-black" type="submit" disabled={createPost.isLoading}>
									Submit your request
								</button>
							</div>
							{createPost.isLoading ? "Submitting..." : ""}
						</form>
					</div>
				</div>
			</div>


		</section >

	);
}
