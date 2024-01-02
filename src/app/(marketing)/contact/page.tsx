"use client";

import { useState } from "react";
import { Email } from "@/app/_components/email";

export default function ContactForm() {
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");

	function onSubmit() {
		setFirstName("");
		setLastName("");
		setEmail("");
		setMessage("");
	}

	return (
		<section className="mb-20">
			<div className="text-center mt-32 text-5xl tracking-tighter text-black">
				Contact Us
			</div>
			<div className="flex flex-col justify-center m-auto">
				<div className="flex flex-col justify-center text-center md:flex-row md:text-left">
					<div className="flex flex-col justify-center w-full max-w-3xl p-10 space-y-12">
						<form
							className="flex flex-col gap-y-9"
							onSubmit={(e) => {
								e.preventDefault();
								onSubmit();
							}}
						>
							<div className="col-span-full">
								<label className="block mb-3 text-sm font-medium text-gray-600">
									First Name
								</label>
								<input
									className="block w-full px-6 py-3 text-black bg-white border border-gray-200 appearance-none rounded-xl placeholder:text-gray-400 focus:border-red-300 focus:outline-none focus:ring-red-300 sm:text-sm"
									placeholder="John"
									type="text"
									value={firstName}
									required
									onChange={(e) => setFirstName(e.target.value)}
								/>
							</div>
							<div className="col-span-full">
								<label className="block mb-3 text-sm font-medium text-gray-600">
									Last Name
								</label>
								<input
									className="block w-full px-6 py-3 text-black bg-white border border-gray-200 appearance-none rounded-xl placeholder:text-gray-400 focus:border-red-300 focus:outline-none focus:ring-red-300 sm:text-sm"
									placeholder="Doe"
									type="text"
									value={lastName}
									required
									onChange={(e) => setLastName(e.target.value)}
								/>
							</div>
							<div className="col-span-full">
								<label className="block mb-3 text-sm font-medium text-gray-600">
									Email
								</label>
								<input
									className="block w-full px-6 py-3 text-black bg-white border border-gray-200 appearance-none rounded-xl placeholder:text-gray-400 focus:border-red-300 focus:outline-none focus:ring-red-300 sm:text-sm"
									placeholder="john.doe@example.com"
									type="email"
									value={email}
									required
									onChange={(e) => setEmail(e.target.value)}
								/>
							</div>
							<div className="col-span-full">
								<label className="block mb-3 text-sm font-medium text-gray-600">
									Message
								</label>
								<textarea
									className="block w-full px-6 py-3 text-black bg-white border border-gray-200 appearance-none rounded-xl placeholder:text-gray-400 focus:border-red-300 focus:outline-none focus:ring-red-300 sm:text-sm"
									placeholder="Your message here..."
									rows={4}
									value={message}
									required
									onChange={(e) => setMessage(e.target.value)}
								></textarea>
							</div>
							<div className="col-span-full">
								<Email
									firstName={firstName}
									lastName={lastName}
									email={email}
									message={message}
								/>
							</div>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
}
