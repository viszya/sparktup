"use client"

import { useState } from "react";
import { api } from "@/trpc/react";
import { Icons } from "@/app/_components/icons";
import { buttonVariants } from "@/app/_components/ui/button";
import { cn, formatDate } from "@/server/utils";
import { Input } from "@/app/_components/ui/input";
import { useToast } from "@/app/_components/ui/use-toast";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/app/_components/ui/card"



export default function AddContactInfo() {
    const { toast } = useToast();

    const [clientName, setClientName] = useState("");
    const [feedback, setFeedback] = useState("");
    const [isLoading] = useState<boolean>(false)
    const [isNextLoading, setIsNextLoading] = useState<boolean>(false)

    const company = api.test.getCompanyProfilePrivate.useQuery();

    const createTestimonial = api.test.createTestimonial.useMutation({
        onSuccess: () => {
            setIsNextLoading(false);
            toast({
                title: "Success",
                description: "Testimonial added at" + formatDate(new Date()),
              });
        },
    });

    function onSubmit() {
        setIsNextLoading(true)
        createTestimonial.mutate({
            id: company.data?.company[0]?.id ?? "",
            clientName: clientName,
            feedback: feedback,
        });
    }

    return (
        <div className="flex flex-col px-8">
            <div>
                <h2 className="text-3xl font-bold tracking-tight">Add Testimonials</h2>
                <p className="text-muted-foreground">
                    Add testimonals to your company profile by filling out the form below.
                </p>
            </div>
            <div className="flex flex-col justify-center w-full max-w-5xl">
                <div className="flex flex-col mt-5 p-5 border border-secondary rounded-xl">
                    <div className="flex flex-col justify-center text-center md:flex-row md:text-left">
                        <div className="flex flex-col justify-center max-w-5xl w-full  space-y-12">
                            <form
                                className="flex flex-col gap-y-9"
                                onSubmit={(e) => {
                                    e.preventDefault();
                                    onSubmit();
                                }}
                            >
                                <div className="col-span-full">
                                    <label className="block mb-3 text-sm font-medium text-primary/90">
                                        Client Name
                                    </label>
                                    <Input
                                        type="text"
                                        placeholder="Jhon Doe"
                                        value={clientName}
                                        className="rounded-xl px-6 py-3 placeholder:text-primary/40 border-primary/20"
                                        onChange={(e) => setClientName(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="col-span-full">
                                    <label className="block mb-3 text-sm font-medium text-primary/90">
                                        Feedback
                                    </label>
                                    <Input
                                        type="text"
                                        placeholder="Feedback"
                                        value={feedback}
                                        className="rounded-xl px-6 py-3 placeholder:text-primary/40 border-primary/20"
                                        onChange={(e) => setFeedback(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="col-span-full">
                                    <button
                                        type="submit"
                                        className={cn(buttonVariants({ variant: "outline" }), "max-w-60 w-60 items-center justify-center px-6 py-2.5 text-center text-secondary duration-200 bg-primary border-2 border-primary rounded-xl inline-flex hover:bg-transparent hover:border-primary hover:text-primary focus:outline-none focus-visible:outline-primary text-sm focus-visible:ring-primary")}
                                        disabled={isLoading || isNextLoading}
                                    >
                                        {isNextLoading ? (
                                            <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                                        ) : (<></>
                                        )}{" "}
                                        Add Testimonial
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-5 border border-dased border-secondary rounded-xl p-2">
                <Card>
                    <CardHeader>
                        <CardTitle>Edit or Delete Testimonials</CardTitle>
                        <CardDescription>Using the data table sort, filter to eedit delete testimonials</CardDescription>
                    </CardHeader>
                    <CardContent>
                            
                    </CardContent>
                </Card>
            </div>
        </div>

    );
}
