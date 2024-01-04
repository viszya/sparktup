import { getServerAuthSession } from "@/server/auth";
import { Icons } from "@/app/_components/icons"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/app/_components/dashboard/tabs"
import { Home } from "@/app/_components/dashboard/home";
import { Messaging } from "@/app/_components/dashboard/messaging";
import { MyProfile } from "@/app/_components/dashboard/myprofile";
import { Settings } from "@/app/_components/dashboard/settings";
import { Experience } from "@/app/_components/dashboard/experience";
import { Project } from "@/app/_components/dashboard/project";
import { Recommendation } from "@/app/_components/dashboard/recommendation";
import Nav from "@/app/_components/main-nav"
// className={cn("", twp().wrapper)}
import { Toaster } from "@/app/_components/ui/toaster"
import { redirect } from "next/navigation"
export default function Dashboard() {
	// const session = await getServerAuthSession()
	// if (!session) {
	//     redirect("/unauthorized")
	// }
	return (
		<div className="flex flex-col px-8">
			<div>
				<h2 className="text-3xl font-bold tracking-tight">Settings</h2>
				<p className="text-muted-foreground">
					Update your personal account settings
				</p>
			</div>
			<div className="flex flex-col justify-center w-full max-w-5xl">
			</div>
		</div>
	);
}