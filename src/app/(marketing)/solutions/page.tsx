import { Icons } from "@/app/_components/icons";
import { Button } from "@/app/_components/ui/button";
import { twp, cn } from "@/server/utils";
import Link from "next/link";

export default function Solutions() {
  return (
    <div className={cn("", twp().wrapper)}>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-20 mb-20">
        {/* Company Solutions Box */}
        <div key="company" className="p-8 rounded-2xl border-2 border-red-400 bg-red-100/10">
          <div className="text-xl sm:text-2xl font-medium tracking-tight text-black mb-4">
            Company Solutions
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-x-8 mb-10">
            {/* You can replace the image source with your own */}
            {/* <Image src="/public/microsoft_logo.png" alt="company" width={100} height={50} className="rounded-full overflow-hidden" /> */}
            <div>
              <p className="text-md font-medium leading-6 text-black mb-2">Tailored Solutions for Companies</p>
              <p className="text-gray-500 mb-2">Explore our solutions designed for businesses and organizations.</p>
            </div>
          </div>
          <Link href="../solutions/company">
            <Button className="text-sm sm:text-md items-center justify-center w-full px-6 py-2.5 text-center text-white duration-200 bg-red-400 border-2 border-red-400 rounded-lg inline-flex hover:bg-transparent hover:border-red-400 hover:text-red-400 focus:outline-none focus-visible:outline-gray-400 focus-visible:ring-gray-400">
              Read More <Icons.arrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>

        {/* Applicant Solutions Box */}
        <div key="applicant" className="p-8 rounded-2xl border-2 border-teal-300 bg-teal-100/10">
          <div className="text-xl sm:text-2xl font-medium tracking-tight text-black mb-4">
            Applicant Solutions
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-x-8 mb-4">
            {/* You can replace the image source with your own */}
            {/* <Image src="/applicant_icon.png" alt="applicant" width={100} height={50} className="rounded-full overflow-hidden" /> */}
            <div>
              <p className="text-md font-medium leading-6 text-black mb-2">Empowering Individuals in their Careers</p>
              <p className="text-gray-500 mb-2">Discover solutions crafted to enhance individual career growth and development.</p>
            </div>
          </div>
          <Link href="../solutions/applicant">
            <Button className="text-sm sm:text-md items-center justify-center w-full px-6 py-2.5 text-center text-white duration-200 bg-teal-300 border-2 border-teal-300 rounded-lg inline-flex hover:bg-transparent hover:border-teal-300 hover:text-teal-300 focus:outline-none focus-visible:outline-teal-300 focus-visible:ring-teal-300">
              Read More <Icons.arrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
