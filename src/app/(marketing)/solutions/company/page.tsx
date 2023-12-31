import { cn } from "@/server/utils";
import { Icons } from "@/app/_components/icons";
import { twp } from "@/server/utils";
import Link from "next/link";
import { buttonVariants } from "@/app/_components/ui/button";

export default function CompanySolutions() {
  return (
    <div className={cn("flex flex-col justify-center items-center", twp().wrapper)}>

            {/* Hero */}
            <section className="text-center py-16">
        <h1 className="text-5xl font-bold text-black mb-4">Transform Your Business with Sparktup Solutions</h1>
        <p className="text-xl text-gray-600">Revolutionary solutions tailored for your company&apos;s success.</p>
      </section>

      {/* Key Benefits */}
      <section className="text-center py-16 bg-gray-100 rounded-t-xl">
        <h1 className="text-4xl font-bold text-black mb-8">Key Benefits</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mr-3 ml-3">
          {/* Benefit 1 */}
          <div className="p-6 bg-white rounded-xl shadow-md">
            <Icons.CheckCircle className="h-8 w-8 text-green-500 mb-4" />
            <h2 className="text-xl font-semibold text-black mb-2">Boost Productivity</h2>
            <p className="text-gray-600">Streamline your workflow and enhance productivity with our cutting-edge solutions.</p>
          </div>

          {/* Benefit 2 */}
          <div className="p-6 bg-white rounded-xl shadow-md">
            <Icons.TrendingUp className="h-8 w-8 text-blue-500 mb-4" />
            <h2 className="text-xl font-semibold text-black mb-2">Drive Growth</h2>
            <p className="text-gray-600">Accelerate your business growth with scalable and efficient technologies.</p>
          </div>

          {/* Benefit 3 */}
          <div className="p-6 bg-white rounded-xl shadow-md">
            <Icons.ShieldCheck className="h-8 w-8 text-purple-500 mb-4" />
            <h2 className="text-xl font-semibold text-black mb-2">Ensure Security</h2>
            <p className="text-gray-600">Protect your data and ensure the highest level of security for your business.</p>
          </div>
        </div>
      </section>

      {/* How Sparktup Works for Companies */}
      <section className="text-center py-16 bg-gray-100 rounded-b-xl overflow-hidden">
        {/* Add rounded-b-xl to round the bottom corners */}
        <h1 className="text-4xl font-bold text-black mb-8">How Sparktup Works for Companies</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mr-3">
          {/* Step 1 */}
          <div className="p-6 bg-white rounded-xl shadow-md">
            <Icons.Link className="h-8 w-8 text-red-400 mb-4" />
            <h2 className="text-xl font-semibold text-black mb-2">Create Company Profile</h2>
            <p className="text-gray-600">Get started by creating a detailed profile for your company, outlining your mission, values, and specific job requirements.</p>
          </div>

          {/* Step 2 */}
          <div className="p-6 bg-white rounded-xl shadow-md">
            <Icons.List className="h-8 w-8 text-red-400 mb-4" />
            <h2 className="text-xl font-semibold text-black mb-2">Set Filters and Requirements</h2>
            <p className="text-gray-600">Define filters and requirements such as skills, experience, and qualifications to tailor the list of potential candidates to your specific needs.</p>
          </div>

          {/* Step 3 */}
          <div className="p-6 bg-white rounded-xl shadow-md">
            <Icons.Send className="h-8 w-8 text-red-400 mb-4" />
            <h2 className="text-xl font-semibold text-black mb-2">Receive Automated Lists</h2>
            <p className="text-gray-600">Sparktup&apos;s automated system will send you curated lists of individuals who match your criteria, making it easy to find potential employees.</p>
          </div>

          {/* Step 4 */}
          <div className="p-6 bg-white rounded-xl shadow-md">
            <Icons.Check className="h-8 w-8 text-red-400 mb-4" />
            <h2 className="text-xl font-semibold text-black mb-2">Schedule Interviews</h2>
            <p className="text-gray-600">Effortlessly schedule interviews with applicants directly through our platform, streamlining the hiring process.</p>
          </div>
        </div>
      </section>

      {/* Key Features for Companies */}
      <section className="text-center py-16">
        <h1 className="text-4xl font-bold text-black mb-8">Key Features of Sparktup for Companies</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="p-6 bg-white rounded-xl shadow-md">
            <Icons.Database className="h-8 w-8 text-red-400 mb-4" />
            <h2 className="text-xl font-semibold text-black mb-2">Extensive Candidate Database</h2>
            <p className="text-gray-600">Access a vast database of tech enthusiasts and professionals actively seeking employment opportunities.</p>
          </div>

          {/* Feature 2 */}
          <div className="p-6 bg-white rounded-xl shadow-md">
            <Icons.Clock className="h-8 w-8 text-red-400 mb-4" />
            <h2 className="text-xl font-semibold text-black mb-2">Time-Efficient Hiring</h2>
            <p className="text-gray-600">Save time in the hiring process with automated candidate matching, allowing you to focus on interviewing qualified applicants.</p>
          </div>

          {/* Feature 3 */}
          <div className="p-6 bg-white rounded-xl shadow-md">
            <Icons.Mail className="h-8 w-8 text-red-400 mb-4" />
            <h2 className="text-xl font-semibold text-black mb-2">Integrated Communication</h2>
            <p className="text-gray-600">Communicate seamlessly with potential hires within the Sparktup platform, streamlining your interactions and feedback.</p>
          </div>
        </div>
      </section>


    </div>
  );
}
