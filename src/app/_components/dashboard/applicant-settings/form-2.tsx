"use client"

import { useToast } from "@/app/_components/ui/use-toast";
import { useState } from "react";
import { api } from "@/trpc/react";
import { Card, CardTitle, CardContent, CardHeader } from "@/app/_components/ui/card";

export function Form2() {
	const [skillName1, setSkillName1] = useState("");
	const [description1, setDescription1] = useState("");
	const [skillName2, setSkillName2] = useState("");
	const [description2, setDescription2] = useState("");
	const [skillName3, setSkillName3] = useState("");
	const [description3, setDescription3] = useState("");
	const { toast } = useToast();
	const addSkill = api.settings.settingsForm2.useMutation();

	function onSubmit() {
		addSkill.mutate({
			skillName: skillName1,
			skillDescription: description1,
		});
		addSkill.mutate({
			skillName: skillName2,
			skillDescription: description2,
		});
		addSkill.mutate({
			skillName: skillName3,
			skillDescription: description3,
		});
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
			title: "Skills Updated",
			description: date,
		});
	}


	return (
		<section>
			<div className="flex flex-col justify-center m-auto">
				<div className="flex flex-col justify-center text-center md:flex-row md:text-left">
					<div className="flex flex-col justify-center max-w-4xl w-full p-10 space-y-12">

						<form
							className="flex flex-col gap-y-9"
							onSubmit={(e) => {
								e.preventDefault();
								onSubmit();
							}}
						>

							<Card>
								<CardHeader>
									<CardTitle className="text-center">Skill 1</CardTitle>
								</CardHeader>
								<CardContent>
									<div className="col-span-full mb-6">
										<label className="block mb-3 text-sm font-medium text-gray-600">
											Skill Name
										</label>
										<input
											className="block w-full px-6 py-3 text-black bg-white border border-gray-200 appearance-none rounded-xl placeholder:text-gray-400 focus:border-red-300 focus:outline-none focus:ring-red-300 sm:text-sm"
											placeholder="iOS Development"
											type="text"
											value={skillName1}
											onChange={(e) => setSkillName1(e.target.value)}
										/>
									</div>

									<div className="col-span-full">
										<label className="block mb-3 text-sm font-medium text-gray-600">
											Skill Description
										</label>
										<textarea
											className="block w-full px-6 py-3 text-black bg-white border border-gray-200 appearance-none rounded-xl placeholder:text-gray-400 focus:border-red-300 focus:outline-none focus:ring-red-300 sm:text-sm"
											placeholder="Proficient in iOS development with a focus on creating seamless and engaging mobile experiences for users."
											value={description1}
											onChange={(e) => setDescription1(e.target.value)}
										/>
									</div>
								</CardContent>
							</Card>
							<Card>
								<CardHeader>
									<CardTitle className="text-center">Skill 2</CardTitle>
								</CardHeader>
								<CardContent>
									<div className="col-span-full mb-6">
										<label className="block mb-3 text-sm font-medium text-gray-600">
											Skill Name
										</label>
										<input
											className="block w-full px-6 py-3 text-black bg-white border border-gray-200 appearance-none rounded-xl placeholder:text-gray-400 focus:border-red-300 focus:outline-none focus:ring-red-300 sm:text-sm"
											placeholder="iOS Development"
											type="text"
											value={skillName2}
											onChange={(e) => setSkillName2(e.target.value)}
										/>
									</div>

									<div className="col-span-full">
										<label className="block mb-3 text-sm font-medium text-gray-600">
											Skill Description
										</label>
										<textarea
											className="block w-full px-6 py-3 text-black bg-white border border-gray-200 appearance-none rounded-xl placeholder:text-gray-400 focus:border-red-300 focus:outline-none focus:ring-red-300 sm:text-sm"
											placeholder="Proficient in iOS development with a focus on creating seamless and engaging mobile experiences for users."
											value={description2}
											onChange={(e) => setDescription2(e.target.value)}
										/>
									</div>
								</CardContent>
							</Card>
							<Card>
								<CardHeader>
									<CardTitle className="text-center">Skill 3</CardTitle>
								</CardHeader>
								<CardContent>
									<div className="col-span-full mb-6">
										<label className="block mb-3 text-sm font-medium text-gray-600">
											Skill Name
										</label>
										<input
											className="block w-full px-6 py-3 text-black bg-white border border-gray-200 appearance-none rounded-xl placeholder:text-gray-400 focus:border-red-300 focus:outline-none focus:ring-red-300 sm:text-sm"
											placeholder="iOS Development"
											type="text"
											value={skillName3}
											onChange={(e) => setSkillName3(e.target.value)}
										/>
									</div>

									<div className="col-span-full">
										<label className="block mb-3 text-sm font-medium text-gray-600">
											Skill Description
										</label>
										<textarea
											className="block w-full px-6 py-3 text-black bg-white border border-gray-200 appearance-none rounded-xl placeholder:text-gray-400 focus:border-red-300 focus:outline-none focus:ring-red-300 sm:text-sm"
											placeholder="Proficient in iOS development with a focus on creating seamless and engaging mobile experiences for users."
											value={description3}
											onChange={(e) => setDescription3(e.target.value)}
										/>
									</div>
								</CardContent>
							</Card>


							<div className="col-span-full">
								<button
									className="items-center justify-center w-full px-6 py-2.5 text-center text-white duration-200 bg-black border-2 border-black rounded-full inline-flex hover:bg-transparent hover:border-black hover:text-black focus:outline-none focus-visible:outline-black text-sm focus-visible:ring-black"
									type="submit"
									disabled={addSkill.isLoading}
								>
									Save Changes
								</button>
							</div>
							{addSkill.isLoading ? "Submitting..." : ""}
						</form>
					</div>
				</div>
			</div>
		</section>
	);
}
