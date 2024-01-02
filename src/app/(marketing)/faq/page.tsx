import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/app/_components/ui/accordion";
import { twp } from "@/server/utils";
import { cn } from "@/server/utils";

export default function Page() {
    return (
        <div className={cn("flex flex-col justify-center items-center", twp().wrapper)}>
            <h2 className="mt-10 sm:mt-20 text-center text-3xl md:text-4xl font-semibold">FAQ</h2>
            <Accordion type="single" collapsible className="text-left w-full max-w-md md:max-w-lg lg:max-w-2xl mt-6">
                {/* Question 1 */}
                <AccordionItem value="item-1">
                    <AccordionTrigger className="text-left">How can my company partner with Sparktup for hiring?</AccordionTrigger>
                    <AccordionContent>
                        To explore partnership opportunities with Sparktup for hiring, please reach out to our partnership team through the &quot;Contact Us&quot; section on the website. We&apos;ll guide you through the process and discuss how we can tailor our services to meet your company&apos;s hiring needs.
                    </AccordionContent>
                </AccordionItem>

                {/* Question 2 */}
                <AccordionItem value="item-2">
                    <AccordionTrigger className="text-left">Can Sparktup help my company find employees based on specific filters or requirements?</AccordionTrigger>
                    <AccordionContent>
                        Yes, Sparktup specializes in connecting tech companies with skilled professionals based on specific filters and requirements. Our advanced matching algorithms and extensive network of individuals allow us to tailor our search to match your company&apos;s unique needs.
                    </AccordionContent>
                </AccordionItem>

                {/* Question 3 */}
                <AccordionItem value="item-3">
                    <AccordionTrigger className="text-left">How do individuals benefit from Sparktup?</AccordionTrigger>
                    <AccordionContent>
                        Individuals on Sparktup can explore job opportunities from tech companies, apply to positions, and showcase their skills on their profiles. It&apos;s a platform where professionals can connect with companies, making the job search and application process more efficient.
                    </AccordionContent>
                </AccordionItem>

                {/* Question 4 */}
                <AccordionItem value="item-4">
                    <AccordionTrigger className="text-left">How does Sparktup ensure the quality of candidates for my company?</AccordionTrigger>
                    <AccordionContent>
                        Sparktup employs a rigorous screening process to ensure the quality of candidates. We assess skills, experience, and compatibility with your company&apos;s requirements, providing you with candidates that match your expectations.
                    </AccordionContent>
                </AccordionItem>

                {/* Question 5 */}
                <AccordionItem value="item-5">
                    <AccordionTrigger className="text-left">Can my company post job listings on Sparktup?</AccordionTrigger>
                    <AccordionContent>
                        Absolutely! Your company can post job openings on Sparktup by logging into your account, navigating to the &quot;Post a Job&quot; section, and filling out the necessary details. Reach a wider pool of candidates through our platform.
                    </AccordionContent>
                </AccordionItem>

                {/* Question 6 */}
                <AccordionItem value="item-6">
                    <AccordionTrigger className="text-left">What makes Sparktup different from other hiring platforms?</AccordionTrigger>
                    <AccordionContent>
                        Sparktup stands out with its personalized approach to connecting companies with top-tier tech talent. Our advanced algorithms, coupled with a vast professional network, ensure efficient and effective matches tailored to your company&apos;s needs.
                    </AccordionContent>
                </AccordionItem>

                {/* Question 7 */}
                <AccordionItem value="item-7">
                    <AccordionTrigger className="text-left">Is there a fee for companies to use Sparktup for hiring?</AccordionTrigger>
                    <AccordionContent>
                        We offer flexible pricing plans for companies based on their hiring needs. Please contact our sales team through the &quot;Contact Us&quot; section for detailed information on pricing and available plans.
                    </AccordionContent>
                </AccordionItem>

                {/* Question 8 */}
                <AccordionItem value="item-8">
                    <AccordionTrigger className="text-left">How can individuals showcase their skills on Sparktup profiles?</AccordionTrigger>
                    <AccordionContent>
                        Individuals can highlight their skills by updating their profiles with relevant information, including work experience, projects, and technical expertise. This information helps them stand out to potential employers browsing the platform.
                    </AccordionContent>
                </AccordionItem>

                {/* Question 9 */}
                <AccordionItem value="item-9">
                    <AccordionTrigger className="text-left">Can my company integrate Sparktup with our existing recruitment processes?</AccordionTrigger>
                    <AccordionContent>
                        Yes, Sparktup supports seamless integration with various recruitment processes. Our technical team can work with your company to ensure a smooth integration that aligns with your existing systems and workflows.
                    </AccordionContent>
                </AccordionItem>

                {/* Question 10 */}
                <AccordionItem value="item-10">
                    <AccordionTrigger className="text-left">What industries does Sparktup specialize in?</AccordionTrigger>
                    <AccordionContent>
                        Sparktup caters to a broad range of tech industries, including but not limited to software development, cybersecurity, data science, and IT infrastructure. Our diverse network allows us to address the hiring needs of companies across various tech sectors.
                    </AccordionContent>
                </AccordionItem>

                {/* Question 11 */}
                <AccordionItem value="item-11">
                    <AccordionTrigger className="text-left">Can individuals receive notifications for relevant job opportunities?</AccordionTrigger>
                    <AccordionContent>
                        Yes, individuals can customize their notification preferences in their accounts to receive updates on job opportunities that match their skills, experience, and preferences.
                    </AccordionContent>
                </AccordionItem>

                {/* Question 12 */}
                <AccordionItem value="item-12">
                    <AccordionTrigger className="text-left">How does Sparktup handle privacy and data security for both companies and individuals?</AccordionTrigger>
                    <AccordionContent>
                        Sparktup prioritizes the privacy and security of user data. Our platform employs industry-standard encryption and security measures to protect sensitive information. Our detailed privacy policy outlines how data is collected, used, and stored securely.
                    </AccordionContent>
                </AccordionItem>

                {/* Question 13 */}
                <AccordionItem value="item-13">
                    <AccordionTrigger className="text-left">What level of support does Sparktup provide to companies during the hiring process?</AccordionTrigger>
                    <AccordionContent>
                        Sparktup offers comprehensive support to companies, including documentation, tutorials, and dedicated customer assistance. Our support team is available to guide you through the hiring process and address any questions or concerns.
                    </AccordionContent>
                </AccordionItem>

                {/* Question 14 */}
                <AccordionItem value="item-14">
                    <AccordionTrigger className="text-left">Can companies set specific criteria for candidate matching on Sparktup?</AccordionTrigger>
                    <AccordionContent>
                        Yes, companies can define specific criteria, including skills, experience, and cultural fit, to tailor candidate matching on Sparktup. Our platform is designed to provide personalized and targeted matches based on your unique requirements.
                    </AccordionContent>
                </AccordionItem>

                {/* Question 15 */}
                <AccordionItem value="item-15">
                    <AccordionTrigger className="text-left">Is Sparktup accessible to both small startups and large enterprises?</AccordionTrigger>
                    <AccordionContent>
                        Absolutely! Sparktup caters to the hiring needs of both small startups and large enterprises. Our flexible solutions and scalable platform ensure that companies of all sizes can benefit from our services.
                    </AccordionContent>
                </AccordionItem>

                {/* Question 16 */}
                <AccordionItem value="item-16">
                    <AccordionTrigger className="text-left">Can companies review and assess candidate profiles before initiating the hiring process?</AccordionTrigger>
                    <AccordionContent>
                        Yes, companies have the ability to review and assess candidate profiles on Sparktup before initiating the hiring process. This allows for informed decision-making and ensures compatibility with your company&apos;s requirements.
                    </AccordionContent>
                </AccordionItem>

                {/* Question 17 */}
                <AccordionItem value="item-17">
                    <AccordionTrigger className="text-left">How does Sparktup foster a collaborative community between companies and individuals?</AccordionTrigger>
                    <AccordionContent>
                        Sparktup provides a vibrant tech community where companies and individuals can engage in discussions, networking, and collaboration. Explore opportunities for partnerships, exchange ideas, and stay updated on industry trends within our collaborative space.
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    );
}
