"use client"

import { Icons } from "@/app/_components/icons";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/app/_components/ui/tabs";
import { Form1 } from "@/app/company-dashboard/add-career/(forms)/form-1";
import { Form2 } from "@/app/company-dashboard/add-career/(forms)/form-2";
import { Form3 } from "@/app/company-dashboard/add-career/(forms)/form-3";
import { Form4 } from "@/app/company-dashboard/add-career/(forms)/form-4";
import { Form5 } from "@/app/company-dashboard/add-career/(forms)/form-5";
import { InputData } from "@/app/_components/inputdata";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { buttonVariants } from "@/app/_components/ui/button";
import { api } from "@/trpc/react";
import { toast } from "@/app/_components/ui/sonner";
import { formatDate } from "@/server/utils";

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/app/_components/ui/card"

export default function AddCareer() {
    const [companyName, setCompanyName] = useState("");
    const [linkedInMembers, setLinkedInMembers] = useState("");
    const [logoSrc, setLogoSrc] = useState("");
    const [location, setLocation] = useState("");
    const [website, setWebsite] = useState("");
    const [industry, setIndustry] = useState("");
    const [companySize, setCompanySize] = useState("");
    const [size, setSize] = useState("");
    const [companyBannerImgSrc, setCompanyBannerImgSrc] = useState("");
    const [foundingYear, setFoundingYear] = useState("");
    const [missionValues, setMissionValues] = useState("");
    const [missionAndValues, setMissionAndValues] = useState("");
    const [about, setAbout] = useState("");
    const [solutionsOverview, setSolutionsOverview] = useState("");
    const [keyBenefits, setKeyBenefits] = useState("");
    const [keyFeatures, setKeyFeatures] = useState("");
    const [companyCulture, setCompanyCulture] = useState("");
    const [termsAndConditionsLink, setTermsAndConditionsLink] = useState("");
    const [privacyPolicyLink, setPrivacyPolicyLink] = useState("");
    const [specialties, setSpecialties] = useState([""]);
    const [mediaGallery, setMediaGallery] = useState([""]);
    const [activeTab, setActiveTab] = useState("profile");
    const tabOrder = ["profile", "contact", "socialmedia"];
    const createEvent = api.test.createEvent.useMutation({
        onSuccess: () => {
            // setIsNextLoading(false);
            toast("Success", {
                description: "Event has been created at " + formatDate(Date()),
            });
        },
    });


    function addForm1Vals(form1Vals: any) {
       
    }

    function addForm2Vals(form2Vals: any) {
        
    }

    function addForm3Vals(form3Vals: any) {
       
    }

    function handleNextButtonClick() {
        const currentIndex = tabOrder.indexOf(activeTab);

        if (currentIndex < tabOrder.length - 1) {
            const nextTab = tabOrder[currentIndex + 1];
            setActiveTab(nextTab!);
        }
    }

    function handleSubmitClick() {
        createEvent.mutate({
            date,
            title,
            location,
            imgsrc,
            attendees,
            viewLink,
            eventType,
            eventBy,
            about,
            seeSrc,
            attendSrc,
            photoSrc,
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
                        <Icons.chevronRight className="text-gray-300 h-5 w-5" />
                        <TabsTrigger value="socialmedia">Social Media</TabsTrigger>
                    </TabsList>
                    <div className="w-full">
                        <TabsContent value="profile">
                            <Form1 onNextClick={handleNextButtonClick} addFormVals={addForm1Vals} />
                        </TabsContent>
                        <TabsContent value="contact">
                            <Form2 onNextClick={handleNextButtonClick} addFormVals={addForm2Vals} onBackClick={handleBackButtonClick} />
                        </TabsContent>
                        <TabsContent value="socialmedia">
                            <Form3 onSubmitClick={handleSubmitClick} addFormVals={addForm3Vals} onBackClick={handleBackButtonClick} />
                        </TabsContent>
                        <TabsContent value="data">
                            <InputData />
                        </TabsContent>
                    </div>
                </Tabs>
            </div>
        </div>
    );
}
