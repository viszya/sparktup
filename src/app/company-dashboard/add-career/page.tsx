"use client"

import { Icons } from "@/app/_components/icons";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/app/_components/ui/tabs";
import { Form1 } from "@/app/company-dashboard/add-career/(forms)/form-1";
import { Form2 } from "@/app/company-dashboard/add-career/(forms)/form-2";
import { Form3 } from "@/app/company-dashboard/add-career/(forms)/form-3";
import { InputData } from "@/app/_components/inputdata";
import { useState } from "react";
import { api } from "@/trpc/react";
import { useToast } from "@/app/_components/ui/use-toast";

export default function AddCareer() {
    const { toast } = useToast();
    const [position, setPosition] = useState("");
    const [location, setLocation] = useState("");
    const [applyLink, setApplyLink] = useState("");
    const [companyLogo, setCompanyLogo] = useState("");
    const [description, setDescription] = useState("");
    const [pricingDescription, setPricingDescription] = useState("");
    const [sizeDescription, setSizeDescription] = useState("");
    const [skills, setSkills] = useState("");
    const [jobLink, setJobLink] = useState("");
    const [seeSrc, setSeeSrc] = useState("");
    const [thumbnail, setThumbnail] = useState("");
    const [about, setAbout] = useState("");
    const [pay, setPay] = useState("");
    const [companyAbout, setCompanyAbout] = useState("");
    const [activeTab, setActiveTab] = useState("profile");
    const tabOrder = ["profile", "contact", "socialmedia"];
    const company = api.test.getCompanyProfilePrivate.useQuery();
    const companyData = company.data;
    const createCareerOpportunity = api.test.createCareerOpportunity.useMutation({
        onSuccess: () => {
            // setIsNextLoading(false);
            toast({
                title: "Success",
                description: "Company Profile: Form 5 Completed",
            });
        },
    });



    function addForm1Vals(form1Vals: any) {
        setPosition(form1Vals.position);
        setLocation(form1Vals.location);
        setApplyLink(form1Vals.applyLink);
        setCompanyLogo(form1Vals.companyLogo);
        setDescription(form1Vals.description);
    }

    function addForm2Vals(form2Vals: any) {
        setPricingDescription(form2Vals.pricingDescription);
        setSizeDescription(form2Vals.sizeDescription);
        setSkills(form2Vals.skills);
        setJobLink(form2Vals.jobLink);
        setSeeSrc(form2Vals.seeSrc);
    }

    function addForm3Vals(form3Vals: any) {
        setThumbnail(form3Vals.thumbnail);
        setAbout(form3Vals.about);
        setPay(form3Vals.pay);
        setCompanyAbout(form3Vals.companyAbout);
    }

    function handleNextButtonClick() {
        const currentIndex = tabOrder.indexOf(activeTab);

        if (currentIndex < tabOrder.length - 1) {
            const nextTab = tabOrder[currentIndex + 1];
            setActiveTab(nextTab!);
        }
    }

    function handleSubmitClick() {
        createCareerOpportunity.mutate({
            id: companyData.company[0].id,
            position,
            location,
            applyLink,
            companyLogo,
            description,
            pricingDescription,
            sizeDescription,
            skills,
            jobLink,
            seeSrc,
            thumbnail,
            about,
            pay,
            companyAbout,
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
                <h2 className="text-3xl font-bold tracking-tight">Add Careers To Your Company</h2>
                <p className="text-muted-foreground">
                    Go through the form processes to create new careers for your Company
                </p>
            </div>
            <div className="flex flex-col justify-center w-full ">
                <Tabs value={activeTab} className="mt-5">
                    <TabsList className="flex flex-row gap-x-6 overflow-x-auto">
                        <TabsTrigger value="profile">Career Information</TabsTrigger>
                        <Icons.chevronRight className="text-gray-300 h-5 w-5" />
                        <TabsTrigger value="contact">Description/Pricing</TabsTrigger>
                        <Icons.chevronRight className="text-gray-300 h-5 w-5" />
                        <TabsTrigger value="socialmedia">About Job</TabsTrigger>
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
