import { Icons } from "@/app/_components/icons";
import Image from "next/image";
import { Button } from "@/app/_components/ui/button";
import { twp, cn } from "@/server/utils";
import Link from "next/link";

export default function Solutions() {
  return (
    <div className={cn("", twp().wrapper)}>
      <div className="grid grid-cols-2 gap-8 mt-11">
        {/* Company Solutions Box */}
        <div key="company" className="bg-gray-300/10 p-8 rounded-2xl border-2 border-red-400">
          <div className="text-2xl font-medium tracking-tight text-black sm:text-4xl mb-4">
            Company Solutions
          </div>
          <div className="flex items-center gap-x-8 mb-4">
            {/* You can replace the image source with your own */}
            {/* <Image src="/public/microsoft_logo.png" alt="company" width={100} height={50} className="rounded-full overflow-hidden" /> */}
            <div>
              <p className="text-lg font-medium leading-6 text-black">Tailored Solutions for Companies</p>
              <p className="text-gray-500">Explore our solutions designed for businesses and organizations.</p>
            </div>
          </div>
          <Link href="../solutions/company">
            <Button className="text-md items-center justify-center w-full px-6 py-2.5 text-center text-white duration-200 bg-red-400 border-2 border-red-400 rounded-lg inline-flex hover:bg-transparent hover:border-red-400 hover:text-red-400 focus:outline-none focus-visible:outline-red-400 focus-visible:ring-red-400">
              Read More <Icons.arrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>

        {/* Applicant Solutions Box */}
        <div key="applicant" className="bg-gray-300/10 p-8 rounded-2xl border-2 border-green-500">
          <div className="text-2xl font-medium tracking-tight text-black sm:text-4xl mb-4">
            Applicant Solutions
          </div>
          <div className="flex items-center gap-x-8 mb-4">
            {/* You can replace the image source with your own */}
            {/* <Image src="/applicant_icon.png" alt="applicant" width={100} height={50} className="rounded-full overflow-hidden" /> */}
            <div>
              <p className="text-lg font-medium leading-6 text-black">Empowering Individuals in their Careers</p>
              <p className="text-gray-500">Discover solutions crafted to enhance individual career growth and development.</p>
            </div>
          </div>
          <Link href="../solutions/applicant">
            <Button className="text-md items-center justify-center w-full px-6 py-2.5 text-center text-white duration-200 bg-green-500 border-2 border-green-500 rounded-lg inline-flex hover:bg-transparent hover:border-green-500 hover:text-green-500 focus:outline-none focus-visible:outline-green-500 focus-visible:ring-green-500">
              Read More <Icons.arrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
