import { cn } from "@/server/utils"
import { twp } from "@/server/utils"
import { CTA } from "@/app/_components/cta";

export default function About() {
    return (
        <div className={cn(twp().wrapper, "mt-20")}>
            <div className="mx-20">
                <article>
                    <div className="text-center mt-10 text-5xl tracking-tighter text-black">
                        About Sparktup
                    </div>
                    <div className="mt-4 text-gray-500 text-lg">
                        Welcome to Sparktup, where innovation meets opportunity. Founded by Vedant Lad, Vishwa Anand, and Akshay Burra, Sparktup was born out of a shared vision to revolutionize the way individuals and businesses connect in the dynamic world of technology. <br /> <br />
                        At Sparktup, we've created more than just a platform; we've built a dynamic ecosystem where tech enthusiasts, professionals, and businesses converge. Our platform serves as a catalyst, sparking connections that drive innovation and propel careers.
                    </div>
                </article>
                <article>
                    <div className="text-center mt-20 text-3xl tracking-tighter text-black">
                        Mission and Goals
                    </div>
                    <div className="mt-4 text-gray-500 text-lg">
                        <div>
                            <span className="text-xl tracking-tighter text-black">Our Mission:</span> <br />
                            To connect businesses with top-tier tech talent while empowering individuals to ignite and advance their tech careers.
                        </div>
                        <div className="mt-4">
                            <span className="text-xl tracking-tighter text-black">Our Goals:</span><br />
                            <ul className="space-y-2">
                                <li><span className="text-lg tracking-tighter text-black">&nbsp;  -  &nbsp;Empowerment:</span> Empower individuals to take control of their tech journeys by providing access to exciting opportunities and resources.</li>
                                <li><span className="text-lg tracking-tighter text-black">&nbsp;  -  &nbsp;Innovation:</span> Foster a vibrant tech ecosystem that encourages collaboration, innovation, and continuous learning.</li>
                                <li><span className="text-lg tracking-tighter text-black">&nbsp;  -  &nbsp;Simplicity:</span> Streamline the process for businesses to find the right talent and for individuals to discover their ideal tech opportunities with ease.</li>
                                <li><span className="text-lg tracking-tighter text-black">&nbsp;  -  &nbsp;Community:</span> Cultivate a supportive community where success is shared, and knowledge is a driving force.</li>
                            </ul>
                        </div>
                    </div>
                </article>
                <article>
                    <div className="text-center mt-20 text-3xl tracking-tighter text-black">
                        Join Us in Sparking Tech Success
                    </div>
                    <div className="mt-4 text-gray-500 text-lg">
                        Whether you're a business seeking top tech talent or an individual ready to ignite your tech career, Sparktup is your go-to platform. Join us in shaping the future of technology—where connections lead to innovation and opportunities spark growth.
                    </div>
                </article>
            </div>

            <CTA />
        </div >
    )
}