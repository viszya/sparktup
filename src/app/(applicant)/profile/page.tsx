import { twp, cn } from "@/server/utils"
import { Icons } from "@/app/_components/icons";
import Image from "next/image";
import { Button } from "@/app/_components/ui/button";

export default function Onboarding() {
	return (
		<div className={cn("", twp().wrapper)}>

			{/* Profile Headline */}
			<div className="grid grid-flow-col grid-cols-2 md:grid-cols-1 gap-x-6 p-4 m-10">
				<div className=" max-w-[30rem]">
					<Image src="/profile.jpg" alt="profile" width={50} height={50} className="rounded-full overflow-hidden" />
					<div className="mt-4 text-2xl font-medium tracking-tight text-black sm:text-4xl">Dhanush Eashwar</div>
					<div className="mt-2 mb-4 flex flex-row items-center">
						<div className=" text-lg font-medium leading-6 text-black">Haircut Master</div>
						<Icons.dot className="h-4 w-4 mx-1 text-gray-500" />
						<div className="text-gray-500">@haircutmaster</div>
					</div>
					<div className="flex flex-row gap-x-4">
						<div className="w-full flex flex-row justify-center items-center px-3 py-0.5 text-sm border font-medium text-gray-500 duration-200 rounded-sm ">
							<Icons.pin className="h-4 w-4 mr-2" /> North Creek High School
						</div>
						<div className="w-full flex flex-row justify-center items-center px-3 py-0.5 text-sm border font-medium text-gray-500 duration-200 rounded-sm hover:text-red-300 hover:border-red-400 hover:scale-95 hover:cursor-pointer">
							<Icons.contact className="h-4 w-4 mr-2" /> Contact Info
						</div>
					</div>
					<Button className="text-md mt-6 items-center justify-center w-full px-6 py-2.5 text-center text-white duration-200 bg-black border-2 border-black rounded-lg inline-flex hover:bg-transparent hover:border-black hover:text-black focus:outline-none focus-visible:outline-black focus-visible:ring-black">
						<Icons.user className="h-4 w-4 mr-2" />
						CONNECT
					</Button>
					<div className="flex flex-row my-4 gap-x-4">
						<div className="w-full p-6 bg-red-100/50 rounded-xl border-2 border-red-100">
							<div className="text-2xl font-medium leading-6">300</div>
							<div className="font-light">Connections</div>
						</div>
						<div className="w-full p-6 bg-teal-100/50 rounded-xl border-2 border-teal-100">
							<div className="text-2xl font-medium leading-6">100</div>
							<div className="font-light">Years of Experience</div>
						</div>
					</div>
					<div>
						<div className="mt-8 text-xl font-medium tracking-tight text-black sm:text-2xl">About</div>
						<div className="mt-2 text-gray-500">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
						</div>
					</div>
				</div>
				<div>
					<Image src="/profile.jpg" alt="profile" width={400} height={150} className="rounded-2xl overflow-hidden" />
				</div>
			</div>
		</div>
	)
}
