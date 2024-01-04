"use client"

import { Icons } from "@/app/_components/icons";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/app/_components/ui/tabs";
import { Form1 } from "@/app/company-dashboard/add-career/(forms)/form-1";
import { Form2 } from "@/app/company-dashboard/add-career/(forms)/form-2";
import { Form3 } from "@/app/company-dashboard/add-career/(forms)/form-3";
import { InputData } from "@/app/_components/inputdata";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { buttonVariants } from "@/app/_components/ui/button";
import { cn } from "@/server/utils";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/app/_components/ui/card"


export default function AddCompany() {
    const [activeTab, setActiveTab] = useState("profile"); // Initial active tab
    const router = useRouter();
    const tabOrder = ["profile", "contact", "socialmedia", "teammembers", "data"];

    function handleNextButtonClick() {
        const currentIndex = tabOrder.indexOf(activeTab);

        if (currentIndex < tabOrder.length - 1) {
            const nextTab = tabOrder[currentIndex + 1];
            setActiveTab(nextTab!);
        }

        if (activeTab === "data") {
            router.push("/dashboard");
        }
    }

    function handleBackButtonClick() {
        const currentIndex = tabOrder.indexOf(activeTab);

        if (currentIndex > 0) {
            const prevTab = tabOrder[currentIndex - 1];
            setActiveTab(prevTab!);
        }
    }
    return (
        <div className="flex flex-col px-8">
            <div>
                <h2 className="text-3xl font-bold tracking-tight">Company Profile Creation</h2>
                <p className="text-muted-foreground">
                    Go through the form processes to create a company profile
                </p>
            </div>
            <div className="flex flex-col justify-center w-full max-w-5xl">
                <Tabs value={activeTab} className="mt-5">
                    <TabsList className="flex flex-row gap-x-6 overflow-x-auto">
                        <TabsTrigger value="profile">Company Profile</TabsTrigger>
                        <Icons.chevronRight className="text-gray-300 h-5 w-5" />
                        <TabsTrigger value="contact">Contact Info</TabsTrigger>
                        <Icons.chevronRight className="text-gray-300 h-5 w-5" />
                        <TabsTrigger value="socialmedia">Social Media</TabsTrigger>
                    </TabsList>
                    <div className="w-full">
                        <TabsContent value="profile">
                            <Form1 onNextClick={handleNextButtonClick} />
                        </TabsContent>
                        <TabsContent value="contact">
                            <Form2 onNextClick={handleNextButtonClick} onBackClick={handleBackButtonClick} />
                        </TabsContent>
                        <TabsContent value="socialmedia">
                            <Form3 onNextClick={handleNextButtonClick} onBackClick={handleBackButtonClick} />
                        </TabsContent>
                        <TabsContent value="data">
                            <InputData />
                        </TabsContent>
                    </div>
                </Tabs>
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
