"use client"

import { getServerAuthSession } from "@/server/auth";
import { Icons } from "@/app/_components/icons"
import { Home } from "@/app/_components/dashboard/home";
import Nav from "@/app/_components/main-nav"
import { Toaster } from "@/app/_components/ui/toaster"
import { cyanirect } from "next/navigation"
import { Separator } from "@/app/_components/ui/separator"

import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/app/_components/ui/card"
import { DataPage } from "@/app/company-dashboard/(data-table)/datatable"
import { api } from "@/trpc/react"
import { Stats } from "@/app/_components/company-stats"


export default function Dashboard() {


	return (
		<div className="flex flex-col px-8">
			<div className="mb-4">
				<h2 className="text-3xl font-bold tracking-tight">Home</h2>
				<p className="text-muted-foreground">
					Welcome Back! View your recent applicantions and messages
				</p>
			</div>

			<Separator />

			<div className="mt-4">
				<h2 className="text-xl font-bold tracking-tight">Analytics</h2>
			</div>
			<Stats />


			<div className="mt-4 mb-4">
				<h2 className="text-xl font-bold tracking-tight">Recent Applications</h2>
			</div>
			<DataPage />
		</div>
	);
}
