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
            <h2 className="mt-20 sm:mt-30 mb-2 text-center text-4xl font-bold">FAQ</h2>
            <Accordion type="single" collapsible className="text-left w-full max-w-sm md:max-w-lg lg:max-w-2xl h-[45rem] max-h-[45rem] md:h-[40rem] md:max-h-[40rem]">
                <AccordionItem value="item-1">
                    <AccordionTrigger className="text-left">Is it accessible?</AccordionTrigger>
                    <AccordionContent>
                        Yes. It adheres to the WAI-ARIA design pattern.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                    <AccordionTrigger className="text-left">How does SparktUp use AI for business plans?</AccordionTrigger>
                    <AccordionContent>
                        SparktUp leverages artificial intelligence to analyze your project goals and data to generate comprehensive business plans tailored to your SAAS idea.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                    <AccordionTrigger className="text-left">What tools are provided for project management?</AccordionTrigger>
                    <AccordionContent>
                        SparktUp offers a suite of project management tools, including task tracking, marketing event tracking, financial analysis, and more to help streamline your SAAS project.
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
                        With SparktUp&apos;s efficient processes and guidance, you can transform your concept into a fully operational SAAS product in just one week.
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
            </Accordion>
        </div>
    )
}
