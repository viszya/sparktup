import { cn } from "@/server/utils";
import { Icons } from "@/app/_components/icons";
import { twp } from "@/server/utils";
import Link from "next/link";
import { buttonVariants } from "@/app/_components/ui/button";

export default function ApplicantSolutions() {
  return (
    <div className={cn("flex flex-col justify-center items-center", twp().wrapper)}>

      {/* Hero */}
      <section className="text-center py-16">
        <h1 className="text-5xl font-bold text-black mb-4">Ignite Your Tech Career with Sparktup</h1>
        <p className="text-xl text-gray-600">Empowering individuals to advance their tech careers with innovative solutions.</p>
      </section>

      {/* Key Benefits */}
      <section className="text-center py-8 px-10 bg-gray-100/20 border-gray-200 border-2 rounded-xl mb-10">
        <h1 className="text-4xl font-bold text-black mb-8">Key Benefits</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mr-3 ml-3">
          {/* Benefit 1 */}
          <div className="p-6 rounded-xl shadow-md flex flex-col justify-center items-center border-2 border-green-400 bg-green-100/30">
            <Icons.TrendingUp className="h-8 w-8 text-green-400 mb-4" />
            <h2 className="text-xl font-semibold text-black mb-2">Advance Your Career</h2>
            <p className="text-gray-600">Take your tech career to new heights with opportunities tailored to your skills and aspirations.</p>
          </div>

          {/* Benefit 2 */}
          <div className="p-6 rounded-xl shadow-md flex flex-col justify-center items-center bg-blue-100/50 border-blue-400 border-2">
            <Icons.laptop className="h-8 w-8 text-blue-400 mb-4" />
            <h2 className="text-xl font-semibold text-black mb-2">Skill Development</h2>
            <p className="text-gray-600">Access resources and opportunities for continuous learning and skill development in the tech industry.</p>
          </div>

          {/* Benefit 3 */}
          <div className="p-6 bg-purple-100/50 border-2 border-purple-400 rounded-xl shadow-md flex flex-col justify-center items-center bg-purple-100/50 border-purple-400">
            <Icons.Users className="h-8 w-8 text-purple-400 mb-4" />
            <h2 className="text-xl font-semibold text-black mb-2">Join a Vibrant Community</h2>
            <p className="text-gray-600">Connect with like-minded individuals, share success stories, and grow together in a supportive community.</p>
          </div>
        </div>
      </section>

      {/* How Sparktup Works for Applicants */}
      <section className="text-center py-8 px-10 bg-gray-100/20 rounded-xl overflow-hidden border-gray-200 border-2">
        {/* Add rounded-b-xl to round the bottom corners */}
        <h1 className="text-4xl font-bold text-black mb-8">How Sparktup Works for Applicants</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 ml-3 mr-3">
          {/* Step 1 */}
          <div className="p-6 bg-red-100/50 border-2 border-red-400 rounded-xl shadow-md flex flex-col justify-center items-center">
            <Icons.UserPlus className="h-8 w-8 text-red-400 mb-4" />
            <h2 className="text-xl font-semibold text-black mb-2">Create Your Profile</h2>
            <p className="text-gray-600">Start by creating a comprehensive profile showcasing your skills, experience, and career goals.</p>
          </div>

          {/* Step 2 */}
          <div className="p-6 bg-red-100/50 border-2 border-red-400 rounded-xl shadow-md flex flex-col justify-center items-center">
            <Icons.search className="h-8 w-8 text-red-400 mb-4" />
            <h2 className="text-xl font-semibold text-black mb-2">Explore Opportunities</h2>
            <p className="text-gray-600">Browse through a diverse range of tech opportunities tailored to your expertise and career preferences.</p>
          </div>

          {/* Step 3 */}
          <div className="p-6 bg-red-100/50 border-2 border-red-400 rounded-xl shadow-md flex flex-col justify-center items-center">
            <Icons.Mail className="h-8 w-8 text-red-400 mb-4" />
            <h2 className="text-xl font-semibold text-black mb-2">Receive Job Matches</h2>
            <p className="text-gray-600">Receive automated job matches based on your profile, making it easy to discover relevant opportunities.</p>
          </div>

          {/* Step 4 */}
          <div className="p-6 bg-red-100/50 border-2 border-red-400 rounded-xl shadow-md flex flex-col justify-center items-center">
            <Icons.Chat className="h-8 w-8 text-red-400 mb-4" />
            <h2 className="text-xl font-semibold text-black mb-2">Connect with Employers</h2>
            <p className="text-gray-600">Communicate directly with potential employers and schedule interviews seamlessly through Sparktup.</p>
          </div>
        </div>
      </section>

      {/* Key Features for Applicants */}
      <section className="text-center py-16">
        <h1 className="text-4xl font-bold text-black mb-8">Key Features of Sparktup for Applicants</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="p-6 bg-green-100/50 border-2 border-green-400 rounded-xl shadow-md flex flex-col justify-center items-center">
            <Icons.Clock className="h-8 w-8 text-green-400 mb-4" />
            <h2 className="text-xl font-semibold text-black mb-2">Efficient Job Matching</h2>
            <p className="text-gray-600">Save time with Sparktup&apos;s advanced job matching algorithm, connecting you with relevant opportunities based on your profile.</p>
          </div>

          {/* Feature 2 */}
          <div className="p-6 bg-green-100/50 border-2 border-green-400 rounded-xl shadow-md flex flex-col justify-center items-center">
            <Icons.BookOpen className="h-8 w-8 text-green-400 mb-4" />
            <h2 className="text-xl font-semibold text-black mb-2">Learning Resources</h2>
            <p className="text-gray-600">Access a library of learning resources and upskilling opportunities to enhance your tech skills and stay competitive.</p>
          </div>

          {/* Feature 3 */}
          <div className="p-6 bg-green-100/50 border-2 border-green-400 rounded-xl shadow-md flex flex-col justify-center items-center">
            <Icons.Network className="h-8 w-8 text-green-400 mb-4" />
            <h2 className="text-xl font-semibold text-black mb-2">Network and Collaborate</h2>
            <p className="text-gray-600">Connect with professionals, join collaborative projects, and expand your network within the Sparktup community.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
