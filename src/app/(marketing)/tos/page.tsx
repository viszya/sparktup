import { cn } from "@/server/utils";
import { twp } from "@/server/utils";

export default function AboutUs() {
  return (
    <div className={cn(twp().wrapper, "mt-20 mx-20")}>
      <article>
        <div className="text-left mt-10 text-3xl tracking-tighter text-black">
          About Sparktup
        </div>
        <div className="mt-4 text-gray-500 text-lg">
          <p>
            Welcome to Sparktup, where innovation meets opportunity. Founded by
            Vedant Lad, Vishwa Anand, and Akshay Burra, Sparktup was born out of
            a shared vision to revolutionize the way individuals and businesses
            connect in the dynamic world of technology.
          </p>
        </div>
      </article>
      <article>
        <div className="text-left mt-20 text-3xl tracking-tighter text-black">
          Company Description:
        </div>
        <div className="mt-4 text-gray-500 text-lg">
          <p>
            At Sparktup, we've created more than just a platform; we've built a
            dynamic ecosystem where tech enthusiasts, professionals, and
            businesses converge. Our platform serves as a catalyst, sparking
            connections that drive innovation and propel careers.
          </p>
        </div>
      </article>
      <article>
        <div className="text-left mt-20 text-3xl tracking-tighter text-black">
          Mission and Goals:
        </div>
        <div className="mt-4 text-gray-500 text-lg">
          <p>
            <strong>Our Mission:</strong>
            <br />
            To connect businesses with top-tier tech talent while empowering
            individuals to ignite and advance their tech careers.
          </p>
          <p>
            <strong>Our Goals:</strong>
            <br />
            <ol>
              <li>
                <strong>Empowerment:</strong> Empower individuals to take
                control of their tech journeys by providing access to exciting
                opportunities and resources.
              </li>
              <li>
                <strong>Innovation:</strong> Foster a vibrant tech ecosystem
                that encourages collaboration, innovation, and continuous
                learning.
              </li>
              <li>
                <strong>Simplicity:</strong> Streamline the process for
                businesses to find the right talent and for individuals to
                discover their ideal tech opportunities with ease.
              </li>
              <li>
                <strong>Community:</strong> Cultivate a supportive community
                where success is shared, and knowledge is a driving force.
              </li>
            </ol>
          </p>
        </div>
      </article>
      <article>
        <div className="text-left mt-20 text-3xl tracking-tighter text-black">
          Join Us in Sparking Tech Success:
        </div>
        <div className="mt-4 text-gray-500 text-lg">
          <p>
            Whether you're a business seeking top tech talent or an individual
            ready to ignite your tech career, Sparktup is your go-to platform.
            Join us in shaping the future of technology—where connections lead
            to innovation and opportunities spark growth.
          </p>
          <p>
            <em>Sparktup - Where Tech Dreams Take Flight.</em>
          </p>
        </div>
      </article>
    </div>
  );
}
