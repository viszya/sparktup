import { twp } from "@/server/utils"
import { cn } from "@/server/utils"
// import { CreatePost } from "@/app/_components/create-post";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/app/_components/ui/tabs"
import { Icons } from "@/app/_components/icons";


import { ProfileForm } from "@/app/_components/onboarding/form-1";
import { ProfileForm2 } from "@/app/_components/onboarding/form-2";

export default function Onboarding() {
	return (
		<div className="flex flex-col justify-center items-center mt-20 mb-10">
			<Tabs defaultValue="account">
				<TabsList className="gap-x-6 px-4">
					<TabsTrigger value="account">Account</TabsTrigger>
					<Icons.chevronRight className="text-gray-300 h-5 w-5" />
					<TabsTrigger value="profile">Profile</TabsTrigger>
					<Icons.chevronRight className="text-gray-300 h-5 w-5" />
					<TabsTrigger value="interests">Interests</TabsTrigger>
					<Icons.chevronRight className="text-gray-300 h-5 w-5" />
					<TabsTrigger value="apply">Apply</TabsTrigger>
					<Icons.chevronRight className="text-gray-300 h-5 w-5" />
					<TabsTrigger value="ready">Ready!</TabsTrigger>
				</TabsList>
				<TabsContent value="account"><ProfileForm /></TabsContent>
				<TabsContent value="profile"><ProfileForm2 /></TabsContent>
				<TabsContent value="interests"><ProfileForm2 /></TabsContent>
				<TabsContent value="apply"><ProfileForm2 /></TabsContent>
				<TabsContent value="ready"><ProfileForm2 /></TabsContent>
			</Tabs>
		</div>
	)
}
