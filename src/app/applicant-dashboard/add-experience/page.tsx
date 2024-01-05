"use client"

import { Icons } from "@/app/_components/icons";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/app/_components/ui/tabs";
import { Form1 } from "@/app/applicant-dashboard/add-experience/(forms)/form-1";
import { Form2 } from "@/app/applicant-dashboard/add-experience/(forms)/form-2";
import { InputData } from "@/app/_components/inputdata";
import { useState } from "react";
import { api } from "@/trpc/react";
import { formatDate } from "@/server/utils";
import { useToast } from "@/app/_components/ui/use-toast";

export default function AddCareer() {
    const { toast } = useToast();
    const [companyLogoSrc, setCompanyLogoSrc] = useState("");
    const [companyName, setCompanyName] = useState("");
    const [companyImgSrc, setCompanyImgSrc] = useState("");
    const [engagement, setEngagement] = useState("");
    const [relativeOfWork, setRelativeOfWork] = useState("");
    const [jobTitle, setJobTitle] = useState("");
    const [location, setLocation] = useState("");
    const [time, setTime] = useState("");
    const [jobDescriptions, setJobDescriptions] = useState<string[]>([""]);
    const [activeTab, setActiveTab] = useState("profile");
    const tabOrder = ["profile", "contact"];

    const addExperience = api.settings.addExperience.useMutation({
        onSuccess: () => {
            // setIsNextLoading(false);
            toast({
                title: "Success",
                description: "Company Profile: Form 5 Completed",
            });
        },
    });

    function addForm1Vals(form1Vals: any) {
        setCompanyLogoSrc(form1Vals.companyLogoSrc);
        setCompanyName(form1Vals.companyName);
        setCompanyImgSrc(form1Vals.companyImgSrc);
        setEngagement(form1Vals.engagement);
        setRelativeOfWork(form1Vals.relativeOfWork);
    }

    function addForm2Vals(form2Vals: any) {
        setJobTitle(form2Vals.jobTitle);
        setLocation(form2Vals.location);
        setTime(form2Vals.time);
        setJobDescriptions(form2Vals.jobDescriptions);
    }

    function handleNextButtonClick() {
        const currentIndex = tabOrder.indexOf(activeTab);

        if (currentIndex < tabOrder.length - 1) {
            const nextTab = tabOrder[currentIndex + 1];
            setActiveTab(nextTab!);
        }
    }

    function handleSubmitClick() {
        addExperience.mutate({
            companyLogoSrc,
            companyName,
            companyImgSrc,
            engagement,
            relativeOfWork,
            jobTitle,
            location,
            time,
            jobDescriptions,
        });
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
            <div className="flex flex-col justify-center w-full ">
                <Tabs value={activeTab} className="mt-5">
                    <TabsList className="flex flex-row gap-x-6 overflow-x-auto">
                        <TabsTrigger value="profile">Company Profile</TabsTrigger>
                        <Icons.chevronRight className="text-gray-300 h-5 w-5" />
                        <TabsTrigger value="contact">Contact Info</TabsTrigger>
                    </TabsList>
                    <div className="w-full">
                        <TabsContent value="profile">
                            <Form1 onNextClick={handleNextButtonClick} addFormVals={addForm1Vals} />
                        </TabsContent>
                        <TabsContent value="contact">
                            <Form2 onNextClick={handleSubmitClick} addFormVals={addForm2Vals} onBackClick={handleBackButtonClick} />
                        </TabsContent>
                    </div>
                </Tabs>
            </div>
        </div>
    );
}
