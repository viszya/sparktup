"use client"

import { Icons } from "@/app/_components/icons";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/app/_components/ui/tabs";
import { Form1 } from "@/app/company-dashboard/update-profile/(forms)/form-1";
import { Form2 } from "@/app/company-dashboard/update-profile/(forms)/form-2";
import { Form3 } from "@/app/company-dashboard/update-profile/(forms)/form-3";
import { Form4 } from "@/app/company-dashboard/update-profile/(forms)/form-4";
import { Form5 } from "@/app/company-dashboard/update-profile/(forms)/form-5";
import { InputData } from "@/app/_components/inputdata";
import { useState } from "react";
import { api } from "@/trpc/react";
import { useToast } from "@/app/_components/ui/use-toast";
import { formatDate } from "@/server/utils";

export default function AddCareer() {
    const { toast } = useToast();
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
    const [activeTab, setActiveTab] = useState("form1");
    const tabOrder = ["form1", "form2", "form3", "form4", "form5"];
    const createCompanyProfile = api.test.createCompanyProfile.useMutation({
        onSuccess: () => {
            // setIsNextLoading(false);
            toast({
                title: "Success", 
                description: "Event has been created at " + formatDate(Date()),
            });
        },
    });


    function addForm1Vals(form1Vals: any) {
        setCompanyName(form1Vals.companyName);
        setLinkedInMembers(form1Vals.linkedInMembers);
        setLogoSrc(form1Vals.logoSrc);
        setLocation(form1Vals.location);
        setWebsite(form1Vals.website);
    }

    function addForm2Vals(form2Vals: any) {
        setIndustry(form2Vals.industry);
        setCompanySize(form2Vals.companySize);
        setSize(form2Vals.size);
        setCompanyBannerImgSrc(form2Vals.companyBannerImgSrc);
        setFoundingYear(form2Vals.foundingYear);
    }

    function addForm3Vals(form3Vals: any) {
        setMissionValues(form3Vals.missionValues);
        setMissionAndValues(form3Vals.missionAndValues);
        setAbout(form3Vals.about);
        setSolutionsOverview(form3Vals.solutionsOverview);
    }

    function addForm4Vals(form4Vals: any) {
        setKeyBenefits(form4Vals.keyBenefits);
        setKeyFeatures(form4Vals.keyFeatures);
        setCompanyCulture(form4Vals.companyCulture);
        setTermsAndConditionsLink(form4Vals.termsAndConditionsLink);
        setPrivacyPolicyLink(form4Vals.privacyPolicyLink);
    }

    function addForm5Vals(form5Vals: any) {
        setSpecialties(form5Vals.specialties);
        setMediaGallery(form5Vals.mediaGallery);
    }

    function handleNextButtonClick() {
        const currentIndex = tabOrder.indexOf(activeTab);

        if (currentIndex < tabOrder.length - 1) {
            const nextTab = tabOrder[currentIndex + 1];
            setActiveTab(nextTab!);
        }
    }

    function handleSubmitClick() {
        createCompanyProfile.mutate({
            companyName,
            linkedInMembers,
            logoSrc,
            location,
            website,
            industry,
            companySize,
            size,
            companyBannerImgSrc,
            foundingYear,
            missionValues,
            missionAndValues,
            about,
            solutionsOverview,
            keyBenefits,
            keyFeatures,
            companyCulture,
            termsAndConditionsLink,
            privacyPolicyLink,
            specialties,
            mediaGallery,
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
                        <TabsTrigger value="form1">Company Profile</TabsTrigger>
                        <Icons.chevronRight className="text-gray-300 h-5 w-5" />
                        <TabsTrigger value="form2">Company Industry</TabsTrigger>
                        <Icons.chevronRight className="text-gray-300 h-5 w-5" />
                        <TabsTrigger value="form3">Company Mission</TabsTrigger>
                        <Icons.chevronRight className="text-gray-300 h-5 w-5" />
                        <TabsTrigger value="form4">Company &quot;BFC&quot;</TabsTrigger>
                        <Icons.chevronRight className="text-gray-300 h-5 w-5" />
                        <TabsTrigger value="form5">Company Speciality</TabsTrigger>
                    </TabsList>
                    <div className="w-full">
                        <TabsContent value="form1">
                            <Form1 onNextClick={handleNextButtonClick} addFormVals={addForm1Vals} />
                        </TabsContent>
                        <TabsContent value="form2">
                            <Form2 onNextClick={handleNextButtonClick} addFormVals={addForm2Vals} onBackClick={handleBackButtonClick} />
                        </TabsContent>
                        <TabsContent value="form3">
                            <Form3 onNextClick={handleNextButtonClick} addFormVals={addForm3Vals} onBackClick={handleBackButtonClick} />
                        </TabsContent>
                        <TabsContent value="form4">
                            <Form4 onNextClick={handleNextButtonClick} addFormVals={addForm4Vals} onBackClick={handleBackButtonClick} />
                        </TabsContent>
                        <TabsContent value="form5">
                            <Form5 onSubmitClick={handleSubmitClick} addFormVals={addForm5Vals} onBackClick={handleBackButtonClick} />
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
