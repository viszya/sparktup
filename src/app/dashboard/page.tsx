import Link from "next/link";
import { cn } from "@/server/utils";
import { twp } from "@/server/utils";
import { buttonVariants } from "@/app/_components/ui/button";
import { Pricing } from "@/app/_components/pricing";
import Image from "next/image"
import { Email } from "@/app/_components/email";
import { getServerAuthSession } from "@/server/auth";
import { redirect } from "next/navigation";
import { Button } from "@react-email/components";
import { Icons } from "@/app/_components/icons"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/app/_components/dashboard/tabs"
import { Home } from "@/app/_components/dashboard/home";
import { Messaging } from "@/app/_components/dashboard/messaging";
import { MyProfile } from "@/app/_components/dashboard/myprofile";
import { Settings } from "@/app/_components/dashboard/settings";
import { Signout } from "@/app/_components/dashboard/signout";
import { Experience } from "@/app/_components/dashboard/experience";
import { Project } from "@/app/_components/dashboard/project";
import { Footer } from "@/app/_components/footer";
import Nav from "@/app/_components/dashboard/nav"
// className={cn("", twp().wrapper)}
export default function Dashboard() {
	return (
		<main >
			<Nav />
			<div className="justify-center items-center mt-10 mr-8">
				<Tabs defaultValue="home" className="flex flex-row ">
					<TabsList className="flex flex-col gap-4 mx-10 justify-center items-center">
						<TabsTrigger value="home">Home</TabsTrigger>
						<TabsTrigger value="messaging">Messaging</TabsTrigger>
						<TabsTrigger value="project">Add Projects</TabsTrigger>
						<TabsTrigger value="experience">Add Experiences</TabsTrigger>
						<TabsTrigger value="myprofile">My Profile</TabsTrigger>
						<TabsTrigger value="settings">Settings</TabsTrigger>
						<TabsTrigger value="signout">Sign Out</TabsTrigger>
					</TabsList>
					<div className="justify-center items-center w-full">
						<TabsContent value="home"><Home /></TabsContent>
						<TabsContent value="messaging"><Messaging /></TabsContent>
						<TabsContent value="myprofile"><MyProfile /></TabsContent>
						<TabsContent value="settings"><Settings /></TabsContent>
						<TabsContent value="signout"><Signout /></TabsContent>
						<TabsContent value="experience"><Experience /></TabsContent>
						<TabsContent value="project"><Project /></TabsContent>
					</div>
				</Tabs>
			</div>
			<Footer />
		</main>
	);
}