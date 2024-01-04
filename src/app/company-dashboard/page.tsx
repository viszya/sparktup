import { getServerAuthSession } from "@/server/auth";
import { Icons } from "@/app/_components/icons"
import { Home } from "@/app/_components/dashboard/home";
import Nav from "@/app/_components/main-nav"
import { Toaster } from "@/app/_components/ui/toaster"
import { redirect } from "next/navigation"
import {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/app/_components/ui/table"
import { Separator } from "@/app/_components/ui/separator"
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/app/_components/ui/card"


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
				<h2 className="text-xl font-bold tracking-tight">Anaylytics</h2>
			</div>
			<div className="grid grid-cols-3 gap-x-2 w-full max-w-5xl p-2 border border-secondary rounded-xl mt-2">
				<Card className="border-red-300">
					<CardHeader>
						<CardTitle>2,435</CardTitle>
						<CardDescription>Profile Views</CardDescription>
					</CardHeader>
				</Card>
				<Card>
					<CardHeader>
						<CardTitle>239</CardTitle>
						<CardDescription>Applications Submitted</CardDescription>
					</CardHeader>
				</Card>
				<Card>
					<CardHeader>
						<CardTitle>23</CardTitle>
						<CardDescription>Applications Accepted</CardDescription>
					</CardHeader>
				</Card>

			</div>

			<div className="mt-4">
				<h2 className="text-xl font-bold tracking-tight">Recent Applications</h2>
			</div>
			<div className="flex flex-col justify-center w-full max-w-5xl p-2 border border-secondary rounded-xl mt-2">
				<Table>
					<TableCaption>View Applicant Profiles to either Accept or Deny</TableCaption>
					<TableHeader>
						<TableRow>
							<TableHead className="w-[100px]">Application</TableHead>
							<TableHead>Priority</TableHead>
							<TableHead>Status</TableHead>
							<TableHead>Job Position</TableHead>
							<TableHead className="text-right">Applicant</TableHead>
							<TableHead className="text-right">Profile</TableHead>
							<TableHead className="text-right">Application Form</TableHead>

						</TableRow>
					</TableHeader>
					<TableBody>
						<TableRow>
							<TableCell className="font-medium">AP001</TableCell>
							<TableCell><Icons.arrowRight className="w-4 h-4 text-primary"/></TableCell>
							<TableCell>Not Viewed</TableCell>
							<TableCell>iOS Developper</TableCell>
							<TableCell className="text-right">Alexandr Sangsberg</TableCell>
							<TableCell className="text-right">View</TableCell>
							<TableCell className="text-right">View</TableCell>
						</TableRow>
					</TableBody>
				</Table>

			</div>
		</div>
	);
}