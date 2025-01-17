import { cn } from "@/server/utils";
import { twp } from "@/server/utils";

export default function About() {
  return (
    <div className={cn("landing-bg pt-4 bg-white")}>
      <div className={twp().wrapper}>
        <div className="mx-4 my-8 mb-20 text-black md:mx-20">
          <article>
            <h2 className="mb-5 mt-10 text-center text-3xl font-bold tracking-tight">
              About Sparktup
            </h2>
            <div className="mt-4 rounded-xl border-2 border-black bg-black p-4 text-base text-white md:mt-6 md:text-lg ">
              Welcome to Sparktup, where innovation meets opportunity. Founded
              by Vedant Lad, Vishwa Anand, Sparktup was bornj
              out of a shared vision to revolutionize the way individuals and
              businesses connect in the dynamic world of technology. <br />{" "}
              <br />
              At Sparktup, we&apos;ve created more than just a platform;
              we&apos;ve built a dynamic ecosystem where tech enthusiasts,
              professionals, and businesses converge. Our platform serves as a
              catalyst, sparking connections that drive innovation and propel
              careers.
            </div>
          </article>
          <article>
            <h2 className="mb-5 mt-10 text-center text-3xl font-bold tracking-tight">
              Mission and Goals
            </h2>
            <div className="mt-4 rounded-xl border-2 border-black bg-black p-4 text-base text-white/80 md:mt-6 md:text-lg">
              <div>
                <span className="text-lg tracking-tighter text-white md:text-xl">
                  Our Mission:
                </span>{" "}
                <br />
                To connect businesses with top-tier tech talent while empowering
                individuals to ignite and advance their tech careers.
              </div>
              <div className="mt-4">
                <span className="text-lg tracking-tighter text-white md:text-xl">
                  Our Goals:
                </span>
                <br />
                <ul className="space-y-2">
                  <li>
                    <span className="text-base tracking-tighter text-white md:text-lg">
                      &nbsp; - &nbsp;Empowerment:
                    </span>{" "}
                    Empower individuals to take control of their tech journeys
                    by providing access to exciting opportunities and resources.
                  </li>
                  <li>
                    <span className="text-base tracking-tighter text-white md:text-lg">
                      &nbsp; - &nbsp;Innovation:
                    </span>{" "}
                    Foster a vibrant tech ecosystem that encourages
                    collaboration, innovation, and continuous learning.
                  </li>
                  <li>
                    <span className="text-base tracking-tighter text-white md:text-lg">
                      &nbsp; - &nbsp;Simplicity:
                    </span>{" "}
                    Streamline the process for businesses to find the right
                    talent and for individuals to discover their ideal tech
                    opportunities with ease.
                  </li>
                  <li>
                    <span className="text-base tracking-tighter text-white md:text-lg">
                      &nbsp; - &nbsp;Community:
                    </span>{" "}
                    Cultivate a supportive community where success is shared,
                    and knowledge is a driving force.
                  </li>
                </ul>
              </div>
            </div>
          </article>
          <article>
            <h2 className="mb-5 mt-10 text-center text-3xl font-bold tracking-tight">
              Join Us in Sparking Tech Success
            </h2>
            <div className="mt-4 rounded-xl border-2 border-black bg-black p-4 text-base text-white md:mt-6 md:text-lg">
              Whether you&apos;re a business seeking top tech talent or an
              individual ready to ignite your tech career, Sparktup is your
              go-to platform. Join us in shaping the future of technology—where
              connections lead to innovation and opportunities spark growth.
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}
