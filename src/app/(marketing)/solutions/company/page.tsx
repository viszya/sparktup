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
              Transform Your Business with Sparktup Solutions
            </h1>
          </section>

          {/* Key Benefits */}
          <section className="px-10 py-8 text-center  ">
            <h1 className="mb-8 text-5xl font-black text-black">
              Key Benefits
            </h1>
            <div className="mb-8 inline-flex max-w-4xl items-center justify-center text-lg">
              Revolutionary solutions tailored for your company&apos;s success.
            </div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {/* Benefit 1 */}
              <div className="items-left flex flex-col rounded-2xl border border-orange-300 bg-white/50 p-6 text-left backdrop-blur-2xl">
                <Icons.CheckCircle className="mb-4 h-8 w-8 text-black " />
                <h2 className="mb-2 text-xl font-black text-black">
                  Boost Productivity
                </h2>
                <p className="w-full text-black/60">
                  Streamline your workflow and enhance productivity with our
                  cutting-edge applicant filtering systems.
                </p>
              </div>

              {/* Benefit 2 */}
              <div className="items-left flex flex-col rounded-2xl border border-orange-300 bg-white/50 p-6 text-left backdrop-blur-2xl">
                <Icons.TrendingUp className="mb-4 h-8 w-8 text-black" />
                <h2 className="mb-2 text-xl font-black text-black">
                  Drive Growth
                </h2>
                <p className="w-full text-black/60">
                  Accelerate your business growth with new and experienced talent.
                </p>
              </div>

              {/* Benefit 3 */}
              <div className="items-left flex flex-col rounded-2xl border border-orange-300 bg-white/50 p-6 text-left backdrop-blur-2xl">
                <Icons.ShieldCheck className="mb-4 h-8 w-8 text-black" />
                <h2 className="mb-2 text-xl font-black text-black">
                  Ease of Use
                </h2>
                <p className="w-full text-black/60">
                  A streamlined and user-friendly platform that simplifies the recruitment process, saving you time and effort.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
      {/* How Sparktup Works for Companies */}
      <section className="gradient-bg-2 mt-10 items-center justify-center overflow-hidden rounded-2xl bg-white px-10 py-8 pb-[10rem] text-center">
        {/* Add rounded-b-xl to round the bottom corners */}
        <div className={cn(twp().wrapper, "text-center")}>
          <h1 className="mb-8 text-5xl font-black text-black">
            How Sparktup Works for Companies
          </h1>
          <div className="mb-8 inline-flex max-w-4xl items-center justify-center text-lg">
          Unlocking Efficiency: Navigating the Operational Dynamics of Sparktup for Companies
          </div>
          <div className="grid grid-cols-1 gap-8 text-left lg:grid-cols-2">
            {/* Step 1 */}
            <div className="items-left flex flex-col rounded-2xl border border-orange-300 bg-white/50 p-6  text-left backdrop-blur-2xl">
              <Icons.Link className="mb-4 h-8 w-8 text-black" />
              <h2 className="mb-2 text-xl font-black text-black">
                Create Company Profile
              </h2>
              <p className="w-full text-black/60">
                Get started by creating a detailed profile for your company,
                outlining your mission, values, and specific job requirements.
              </p>
            </div>

            {/* Step 2 */}
            <div className="items-left flex flex-col rounded-2xl border border-orange-300 bg-white/50 p-6  text-left backdrop-blur-2xl">
              <Icons.List className="mb-4 h-8 w-8 text-black" />
              <h2 className="mb-2 text-xl font-black text-black">
                Set Filters and Requirements
              </h2>
              <p className="w-full text-black/60">
                Define filters and requirements such as skills, experience, and
                qualifications to tailor the list of potential candidates to
                your specific needs.
              </p>
            </div>

            {/* Step 3 */}
            <div className="items-left flex flex-col rounded-2xl border border-orange-300 bg-white/50 p-6  text-left backdrop-blur-2xl">
              <Icons.Send className="mb-4 h-8 w-8 text-black" />
              <h2 className="mb-2 text-xl font-black text-black">
                Receive Automated Lists
              </h2>
              <p className="w-full text-black/60">
                Sparktup&apos;s automated system will send you curated lists of
                individuals who match your criteria, making it easy to find
                potential employees.
              </p>
            </div>

            {/* Step 4 */}
            <div className="items-left flex flex-col rounded-2xl border border-orange-300 bg-white/50 p-6  text-left backdrop-blur-2xl">
              <Icons.Check className="mb-4 h-8 w-8 text-black" />
              <h2 className="mb-2 text-xl font-black text-black">
                Schedule Interviews
              </h2>
              <p className="w-full text-black/60">
                Effortlessly schedule interviews with applicants directly
                through our platform, streamlining the hiring process.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features for Companies */}
      <section className="gradient-bg-3 py-16 pb-[10rem] text-center">
        <div className={cn(twp().wrapper)}>
          <h1 className="mb-8 text-5xl font-black text-black">
            Key Features of Sparktup for Companies
          </h1>
          <div className="mb-8 inline-flex max-w-4xl items-center justify-center text-lg">
          Empower Your Company: Unveiling the Essential Features of Sparktup for Companies
          </div>
          <div className="mx-6 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Feature 1 */}
            <div className="items-left flex flex-col rounded-2xl border border-orange-300 bg-white/50 p-6 text-left backdrop-blur-2xl">
              <Icons.Database className="mb-4 h-8 w-8 text-black" />
              <h2 className="mb-2 text-xl font-black text-black">
                Extensive Candidate Database
              </h2>
              <p className="w-full text-black/60">
                Access a vast database of tech enthusiasts and professionals
                actively seeking employment opportunities.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="items-left flex flex-col rounded-2xl border border-orange-300 bg-white/50 p-6 text-left backdrop-blur-2xl">
              <Icons.Clock className="mb-4 h-8 w-8 text-black" />
              <h2 className="mb-2 text-xl font-black text-black">
                Time-Efficient Hiring
              </h2>
              <p className="w-full text-black/60">
                Save time in the hiring process with automated candidate
                matching, allowing you to focus on interviewing qualified
                applicants.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="items-left flex flex-col rounded-2xl border border-orange-300 bg-white/50 p-6 text-left backdrop-blur-2xl">
              <Icons.Mail className="mb-4 h-8 w-8 text-black" />
              <h2 className="mb-2 text-xl font-black text-black">
                Integrated Communication
              </h2>
              <p className="w-full text-black/60">
                Communicate seamlessly with potential hires within the Sparktup
                platform, streamlining your interactions and feedback.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
