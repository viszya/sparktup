"use client"

import { Button } from "@/app/_components/ui/button"
import { cn } from "@/server/utils"
import { useState } from "react";
import { useToast } from "@/app/_components/ui/use-toast";
import { Icons } from "@/app/_components/icons";

interface EmailProps {
	className?: string;
	firstName: string;
	lastName: string;
	email: string;
	message: string;
	subject: string;
}

export function Email({ className, message }: EmailProps) {
	const { toast } = useToast();
	const [loading, setLoading] = useState(false);

	async function sendEmail() {
		setLoading(true);
		try {
			const response = await fetch('/api/sendEmail', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					message,
				}),
			});
			if (response.ok) {
				toast({
					title: 'Message Sent',
					description: 'Your message has been sent successfully.',
				});
			} else {
				toast({
					title: 'Error',
					description: 'Failed to send the message. Please try again later.',
					//status: 'error',
				});
			}
		} catch (error) {
			toast({
				title: 'Error',
				description: 'An unexpected error occurred. Please try again later.',
				//status: 'error',
			});
		} finally {
			setLoading(false);
		}
	}

	return (
		<Button
			className={cn(className, 'max-w-10 items-center justify-center w-full px-6 py-2.5 text-center text-white duration-200 bg-black border-2 border-black rounded-2xl inline-flex hover:bg-transparent hover:border-black hover:text-black focus:outline-none focus-visible:outline-black text-sm focus-visible:ring-black')}
			onClick={sendEmail}
			disabled={loading}
		>
			{loading ? (
				<Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
			) : (<></>
			)}{" "}
			{loading ? 'Sending...' : 'Send Message'}
		</Button>
	);
}
