import { cn } from "@/server/utils";
import { Icons } from "@/app/_components/icons";
import { twp } from "@/server/utils";

export default function CompanySolutions() {
  return (
    <div
      className={cn(
        "flex w-full flex-col items-center justify-center bg-white",
      )}
    >
      <div className="gradient-bg">
        <div className={cn(twp().wrapper)}>
          {/* Hero */}
          <section className="py-16 text-center">
            <h1 className="lg:text:8xl movein mx-4 mb-2 mt-4 text-4xl font-bold text-black sm:mx-0 sm:mt-32 sm:font-semibold md:text-7xl">
              Ignite Your Tech Career with Sparktup
            </h1>
            <h2 className="text-xl">
            Empowering individuals to advance their tech careers with innovative solutions.
            </h2>
          </section>

          {/* Key Benefits */}
          <section className="px-10 py-8 text-center  ">
            <h1 className="mb-8 text-5xl font-black text-black">
              Key Benefits
            </h1>
            <div className="mb-8 inline-flex max-w-4xl items-center justify-center text-lg">
              Revolutionary solutions tailored for your success.
            </div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {/* Benefit 1 */}
              <div className="items-left flex flex-col rounded-2xl border border-orange-300 bg-white/50 p-6 text-left backdrop-blur-2xl">
                <Icons.TrendingUp className="mb-4 h-8 w-8 text-black " />
                <h2 className="mb-2 text-xl font-black text-black">
                  Advance Your Career
                </h2>
                <p className="w-full text-black/60">
                Take your tech career to new heights with opportunities tailored to your skills and aspirations.
                </p>
              </div>

              {/* Benefit 2 */}
              <div className="items-left flex flex-col rounded-2xl border border-orange-300 bg-white/50 p-6 text-left backdrop-blur-2xl">
                <Icons.laptop className="mb-4 h-8 w-8 text-black" />
                <h2 className="mb-2 text-xl font-black text-black">
                Skill Development
                </h2>
                <p className="w-full text-black/60">
                Access resources and opportunities for continuous learning and skill development in the tech industry.
                </p>
              </div>

              {/* Benefit 3 */}
              <div className="items-left flex flex-col rounded-2xl border border-orange-300 bg-white/50 p-6 text-left backdrop-blur-2xl">
                <Icons.Users className="mb-4 h-8 w-8 text-black" />
                <h2 className="mb-2 text-xl font-black text-black">
                Join a Vibrant Community
                </h2>
                <p className="w-full text-black/60">
                Connect with like-minded individuals, share success stories, and grow together in a supportive community.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
      {/* How Sparktup Works for Applicants */}
      <section className="gradient-bg-2 mt-10 items-center justify-center overflow-hidden rounded-2xl bg-white px-10 py-8 pb-[10rem] text-center">
        {/* Add rounded-b-xl to round the bottom corners */}
        <div className={cn(twp().wrapper, "text-center")}>
          <h1 className="mb-8 text-5xl font-black text-black">
            How Sparktup Works for Applicants
          </h1>
          <div className="mb-8 inline-flex max-w-4xl items-center justify-center text-lg">
          Unlocking Efficiency: Navigating the Operational Dynamics of Sparktup for Applicants
          </div>
          <div className="grid grid-cols-1 gap-8 text-left lg:grid-cols-2">
            {/* Step 1 */}
            <div className="items-left flex flex-col rounded-2xl border border-orange-300 bg-white/50 p-6  text-left backdrop-blur-2xl">
              <Icons.UserPlus className="mb-4 h-8 w-8 text-black" />
              <h2 className="mb-2 text-xl font-black text-black">
              Create Your Profile
              </h2>
              <p className="w-full text-black/60">
              Start by creating a comprehensive profile showcasing your skills, experience, and career goals.
              </p>
            </div>

            {/* Step 2 */}
            <div className="items-left flex flex-col rounded-2xl border border-orange-300 bg-white/50 p-6  text-left backdrop-blur-2xl">
              <Icons.search className="mb-4 h-8 w-8 text-black" />
              <h2 className="mb-2 text-xl font-black text-black">
              Explore Opportunities
              </h2>
              <p className="w-full text-black/60">
              Browse through a diverse range of tech opportunities tailored to your expertise and career preferences.
              </p>
            </div>

            {/* Step 3 */}
            <div className="items-left flex flex-col rounded-2xl border border-orange-300 bg-white/50 p-6  text-left backdrop-blur-2xl">
              <Icons.Mail className="mb-4 h-8 w-8 text-black" />
              <h2 className="mb-2 text-xl font-black text-black">
                Receive Job Matches
              </h2>
              <p className="w-full text-black/60">
              Receive automated job matches based on your profile, making it easy to discover relevant opportunities.
              </p>
            </div>

            {/* Step 4 */}
            <div className="items-left flex flex-col rounded-2xl border border-orange-300 bg-white/50 p-6  text-left backdrop-blur-2xl">
              <Icons.Chat className="mb-4 h-8 w-8 text-black" />
              <h2 className="mb-2 text-xl font-black text-black">
                Connect with Employers
              </h2>
              <p className="w-full text-black/60">
              Communicate directly with potential employers and schedule interviews seamlessly through Sparktup.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features for Companies */}
      <section className="gradient-bg-3 py-16 pb-[10rem] text-center">
        <div className={cn(twp().wrapper)}>
          <h1 className="mb-8 text-5xl font-black text-black">
            Key Features of Sparktup for Applicants
          </h1>
          <div className="mb-8 inline-flex max-w-4xl items-center justify-center text-lg">
          Empower Your Future: Unveiling the Essential Features of Sparktup for Applicants
          </div>
          <div className="mx-6 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Feature 1 */}
            <div className="items-left flex flex-col rounded-2xl border border-orange-300 bg-white/50 p-6 text-left backdrop-blur-2xl">
              <Icons.Clock className="mb-4 h-8 w-8 text-black" />
              <h2 className="mb-2 text-xl font-black text-black">
                Efficient Job Matching
              </h2>
              <p className="w-full text-black/60">
              Save time with Sparktup&apos;s advanced job matching algorithm, connecting you with relevant opportunities based on your profile.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="items-left flex flex-col rounded-2xl border border-orange-300 bg-white/50 p-6 text-left backdrop-blur-2xl">
              <Icons.BookOpen className="mb-4 h-8 w-8 text-black" />
              <h2 className="mb-2 text-xl font-black text-black">
                Learning Resources
              </h2>
              <p className="w-full text-black/60">
              Access a library of learning resources and upskilling opportunities to enhance your tech skills and stay competitive.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="items-left flex flex-col rounded-2xl border border-orange-300 bg-white/50 p-6 text-left backdrop-blur-2xl">
              <Icons.Network className="mb-4 h-8 w-8 text-black" />
              <h2 className="mb-2 text-xl font-black text-black">
              Network and Collaborate
              </h2>
              <p className="w-full text-black/60">
              Connect with professionals, join collaborative projects, and expand your network within the Sparktup community.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
