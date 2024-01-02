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
import { Nav } from "@/app/_components/dashboard/nav"
// className={cn("", twp().wrapper)}
import { Toaster } from "@/app/_components/ui/toaster"
import { redirect } from "next/navigation"
export default async function Dashboard() {
	const session = await getServerAuthSession()
    if (!session) {
        redirect("/unauthorized")
    }
	return (
		<main >
			<Nav />
			<div className="justify-center items-center my-10 mr-8">
				<Tabs defaultValue="home" className="flex flex-row max-h-[40rem]">
					<TabsList className="flex flex-col gap-4 mx-10 justify-center items-center ">
						<TabsTrigger value="home">Home</TabsTrigger>
						<TabsTrigger value="myprofile">My Profile</TabsTrigger>
						<TabsTrigger value="messaging">Messaging</TabsTrigger>
						<TabsTrigger value="project">Add Projects</TabsTrigger>
						<TabsTrigger value="recommendation">Add Recommendations</TabsTrigger>
						<TabsTrigger value="experience">Add Experiences</TabsTrigger>
						<TabsTrigger value="settings">Settings</TabsTrigger>
					</TabsList>
					<div className="justify-center items-center w-full">
						<TabsContent value="home"><Home /></TabsContent>
						<TabsContent value="myprofile"><MyProfile /></TabsContent>
						<TabsContent value="messaging"><Messaging /></TabsContent>
						<TabsContent value="settings"><Settings /></TabsContent>
						<TabsContent value="recommendation"><Recommendation /></TabsContent>
						<TabsContent value="experience"><Experience /></TabsContent>
						<TabsContent value="project"><Project /></TabsContent>
					</div>
				</Tabs>
			</div>
			<Toaster />
		</main>
	);
}