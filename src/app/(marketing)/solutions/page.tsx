import { Icons } from "@/app/_components/icons";
import Image from "next/image";
import { Button } from "@/app/_components/ui/button";
import { twp, cn } from "@/server/utils";
import Link from "next/link";

export default function Solutions() {
	return (
		<div className={cn("bg-black hero-image-4")}>
			<div className={cn("grid grid-cols-2 gap-8 mt-32 mb-10 mx-8 ", twp().wrapper)}>
				{/* Company Solutions Box */}
				<div key="company" className=" p-8 rounded-2xl border-2 border-black bg-black text-white">
					<div className="text-2xl font-medium tracking-tight primary sm:text-4xl mb-4">
						Company Solutions
					</div>
					<div className="flex items-center gap-x-8 mb-10">
						<div>
							<p className="text-lg font-medium leading-6 primary">Tailogray Solutions for Companies</p>
							<p className="text-white/80">Explore our solutions designed for businesses and organizations.</p>
						</div>
					</div>
					<Link href="../solutions/company">
          <Button className="mt-6 text-md items-center justify-center w-full px-6 py-3 text-center duration-200 bg-white text-black border-2 border-white rounded-lg inline-flex hover:bg-transparent hover:border-white-400 hover:text-white-400 focus:outline-none focus-visible:outline-white-400 focus-visible:ring-white-400 hover:text-white">
							Read More <Icons.arrowRight className="ml-2 h-4 w-4" />
						</Button>
					</Link>
				</div>

				{/* Applicant Solutions Box */}
				<div key="applicant" className="p-8 rounded-2xl border-2 border-black bg-black text-white">
					<div className="text-2xl font-medium tracking-tight primary sm:text-4xl mb-4">
						Applicant Solutions
					</div>
					<div className="flex items-center gap-x-8 mb-4">
						<div>
							<p className="text-lg font-medium leading-6 primary">Empowering Individuals in their Careers</p>
							<p className="text-white/80">Discover solutions crafted to enhance individual career growth and development.</p>
						</div>
					</div>
					<Link href="../solutions/applicant">
						<Button className="mt-6 text-md items-center justify-center w-full px-6 py-3 text-center duration-200 bg-white text-black border-2 border-white rounded-lg inline-flex hover:bg-transparent hover:border-white-400 hover:text-white-400 focus:outline-none focus-visible:outline-white-400 focus-visible:ring-white-400 hover:text-white">
							Read More <Icons.arrowRight className="ml-2 h-4 w-4" />
						</Button>
					</Link>
				</div>
			</div>
		</div>
	);
}
