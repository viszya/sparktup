import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/app/_components/ui/accordion"
import { twp } from "@/server/utils"
import { cn } from "@/server/utils"

export default function Page() {
    return (
        <div className={cn("flex flex-col justify-center items-center", twp().wrapper)}>
             <h2 className="mt-20 sm:mt-30 mb-11 text-center text-4xl font-semibold">FAQ</h2>
            <Accordion type="single" collapsible className="text-left w-full max-w-sm md:max-w-lg lg:max-w-2xl h-[55rem] max-h-[55rem] md:h-[55rem] md:max-h-[55rem]">
                <AccordionItem value="item-1">
                    <AccordionTrigger className="text-left">How do I get started with Sparktup?</AccordionTrigger>
                    <AccordionContent>
                        Simply visit our website and click on "Sign Up." Follow the prompts to create your account and unlock a world of tech opportunities.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                    <AccordionTrigger className="text-left">Can I edit my profile information after signing up?</AccordionTrigger>
                    <AccordionContent>
                        Yes, you can easily edit your profile information by accessing your account settings. Keep your details up-to-date to enhance your Sparktup experience.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                    <AccordionTrigger className="text-left">How do businesses post job listings on Sparktup?</AccordionTrigger>
                    <AccordionContent>
                        Businesses can post job openings by logging into their accounts, navigating to the "Post a Job" section, and filling out the required details.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                    <AccordionTrigger className="text-left">Can SparktUp help with product idea generation?</AccordionTrigger>
                    <AccordionContent>
                        Yes, SparktUp provides tools and insights to help you brainstorm, refine, and select the best SAAS product ideas based on market trends and user needs.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                    <AccordionTrigger className="text-left">How quickly can I go from idea to a running SAAS product?</AccordionTrigger>
                    <AccordionContent>
                        With SparktUp's efficient processes and guidance, you can transform your concept into a fully operational SAAS product in just one week.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-6">
                    <AccordionTrigger className="text-left">Is my data safe and secure with SparktUp?</AccordionTrigger>
                    <AccordionContent>
                        SparktUp prioritizes data security and employs industry-standard encryption and security measures to protect your information.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-7">
                    <AccordionTrigger className="text-left">Can I integrate SparktUp with other SAAS tools?</AccordionTrigger>
                    <AccordionContent>
                        Yes, SparktUp supports seamless integration with various SAAS tools and services to enhance your project&apos;s capabilities.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-8">
                    <AccordionTrigger className="text-left">Is SparktUp suitable for startups and established businesses?</AccordionTrigger>
                    <AccordionContent>
                        SparktUp caters to both startups and established businesses looking to develop, manage, and optimize their SAAS products efficiently.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-9">
                    <AccordionTrigger className="text-left">What kind of support does SparktUp offer?</AccordionTrigger>
                    <AccordionContent>
                        SparktUp provides comprehensive customer support, including documentation, tutorials, and 24/7 assistance to help you succeed with your SAAS project.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-10">
                    <AccordionTrigger className="text-left">Is SparktUp customizable to my specific project needs?</AccordionTrigger>
                    <AccordionContent>
                        Yes, SparktUp is designed to be flexible and can be customized to suit the unique requirements of your SAAS project.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-11">
                    <AccordionTrigger className="text-left">Is there a community aspect to Sparktup?</AccordionTrigger>
                    <AccordionContent>
                        Yes, Sparktup is a vibrant tech community. Engage in discussions, network with professionals, and stay updated on industry trends within our collaborative space.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-12">
                    <AccordionTrigger className="text-left">How does Sparktup ensure the privacy and security of user information?</AccordionTrigger>
                    <AccordionContent>
                        We take privacy seriously. Our robust security measures protect your data, and our privacy policy outlines how information is collected, used, and stored.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-13">
                    <AccordionTrigger className="text-left">Can I customize my notification preferences?</AccordionTrigger>
                    <AccordionContent>
                        Absolutely! You can manage your notification settings in your account to receive updates tailored to your preferences.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-14">
                    <AccordionTrigger className="text-left">Can I showcase specific tech skills on my Sparktup profile?</AccordionTrigger>
                    <AccordionContent>
                        Yes, you can highlight your tech skills on your profile, making it easier for businesses to find candidates with the expertise they need.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-15">
                    <AccordionTrigger className="text-left">How can I provide feedback or get support on Sparktup?</AccordionTrigger>
                    <AccordionContent>
                        We value your feedback! Reach out to our support team through the "Contact Us" section on the website, and we'll assist you promptly.
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    )
}
