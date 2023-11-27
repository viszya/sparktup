import { cn } from "@/server/utils";
import { Icons } from "@/app/_components/icons";
import { twp } from "@/server/utils";
import Link from "next/link";
import { buttonVariants } from "@/app/_components/ui/button";

export default function companySolutions() {
    return (
        <div className={cn("flex flex-col justify-center items-center", twp().wrapper)}>

            {/* Hero */}
            <section>
                <h1>Hero Section</h1>
            </section>

            {/* Key Benefits */}
            <section className="flex flex-col justify-start">
                <h1>Key Benefits</h1>
            </section>

            {/* Explanation */}
            <section>
                <h1>Explain Product</h1>
                <img src="/public/applicants.png" placeholder="product img"/>
            </section>


            {/* CTA */}
            <section className="max-w-4xl text-5xl mb-2 mt-10 font-semibold md:text-6xl text-black lg:text:7xl">
                <div className="max-w-4xl text-5xl mb-2 mt-10 justify-center font-semibold md:text-6xl text-black lg:text:7xl">
                    <div className="max-w-xl mx-auto text-center lg:p-10">
                        <div>
                            <p className="text-2xl font-medium tracking-tight text-black sm:text-4xl">
                                Ready to Ignite Your Tech Journey? Join Sparktup Today!
                            </p>
                        </div>
                        <div className="flex flex-col items-center justify-center mt-10">
                            <Link
                                className={buttonVariants({
                                    variant: "heroButton2",
                                    size: "lg",
                                    className:
                                        'mx-auto mb-4 flex max-w-fit items-center justify-center space-x-2 overflow-hidden flex flex-colum text-black rounded-2xl border border-red-400 bg-white ease-in-out px-7 py-2 shadow-md backdrop-blur transition-all hover:border-red-400 hover:bg-gradient-to-r hover:from-red-400 hover:to-red-300 hover:shadow-xl  hover:text-white'
                                })}
                                href="amazon.com"
                            >
                                SignUp Now!
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features */}
            <section>
                <h1>Features</h1>
                <img src="/public/applicants.png" placeholder="product img"></img>
            </section>

        </div>
    )
}