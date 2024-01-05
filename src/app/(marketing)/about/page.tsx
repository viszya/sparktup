import { cn } from "@/server/utils";
import { twp } from "@/server/utils";

export default function About() {
	return (
		<div className={cn(twp().wrapper, "mt-4")}>
			<div className="mx-4 md:mx-20">
				<article>
					<h2 className="text-center text-3xl font-bold tracking-tight mt-10 mb-5">About Sparktup</h2>
					<div className="mt-4 md:mt-6 text-primary text-base md:text-lg border-2 border-secondary p-4 rounded-xl ">
						Welcome to Sparktup, where innovation meets opportunity. Founded by Vedant Lad, Vishwa Anand, and Akshay Burra, Sparktup was born out of a shared vision to revolutionize the way individuals and businesses connect in the dynamic world of technology. <br /> <br />
						At Sparktup, we&apos;ve created more than just a platform; we&apos;ve built a dynamic ecosystem where tech enthusiasts, professionals, and businesses converge. Our platform serves as a catalyst, sparking connections that drive innovation and propel careers.
					</div>
				</article>
				<article>
					<h2 className="text-center text-3xl font-bold tracking-tight mt-10 mb-5">Mission and Goals</h2>
					<div className="mt-4 md:mt-6 text-primary/80 text-base md:text-lg border-2 border-secondary p-4 rounded-xl">
						<div>
							<span className="text-lg md:text-xl tracking-tighter text-primary">Our Mission:</span> <br />
							To connect businesses with top-tier tech talent while empowering individuals to ignite and advance their tech careers.
						</div>
						<div className="mt-4">
							<span className="text-lg md:text-xl tracking-tighter text-primary">Our Goals:</span><br />
							<ul className="space-y-2">
								<li><span className="text-base md:text-lg tracking-tighter text-primary">&nbsp;  -  &nbsp;Empowerment:</span> Empower individuals to take control of their tech journeys by providing access to exciting opportunities and resources.</li>
								<li><span className="text-base md:text-lg tracking-tighter text-primary">&nbsp;  -  &nbsp;Innovation:</span> Foster a vibrant tech ecosystem that encourages collaboration, innovation, and continuous learning.</li>
								<li><span className="text-base md:text-lg tracking-tighter text-primary">&nbsp;  -  &nbsp;Simplicity:</span> Streamline the process for businesses to find the right talent and for individuals to discover their ideal tech opportunities with ease.</li>
								<li><span className="text-base md:text-lg tracking-tighter text-primary">&nbsp;  -  &nbsp;Community:</span> Cultivate a supportive community where success is shared, and knowledge is a driving force.</li>
							</ul>
						</div>
					</div>
				</article>
				<article>
					<h2 className="text-center text-3xl font-bold tracking-tight mt-10 mb-5">Join Us in Sparking Tech Success</h2>
					<div className="mt-4 md:mt-6 text-primary/80 text-base md:text-lg border-2 border-secondary p-4 rounded-xl">
						Whether you&apos;re a business seeking top tech talent or an individual ready to ignite your tech career, Sparktup is your go-to platform. Join us in shaping the future of technology—where connections lead to innovation and opportunities spark growth.
					</div>
				</article>
			</div>
		</div>
	);
}
