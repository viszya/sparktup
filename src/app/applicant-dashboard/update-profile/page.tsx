"use client"

import { Icons } from "@/app/_components/icons";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/app/_components/ui/tabs";
import { Form1 } from "@/app/applicant-dashboard/update-profile/(forms)/form-1";
import { Form2 } from "@/app/applicant-dashboard/update-profile/(forms)/form-2";
import { Form3 } from "@/app/applicant-dashboard/update-profile/(forms)/form-3";
import { InputData } from "@/app/_components/inputdata";
import { useState } from "react";
import { api } from "@/trpc/react";
import { useToast } from "@/app/_components/ui/use-toast";
import { formatDate } from "@/server/utils";

export default function UpdateProfilePage() {
    const { toast } = useToast();
	const [about, setAbout] = useState("");
	const [jobTitle, setJobTitle] = useState("");
	const [yearsOfExperience, setYearsOfExperience] = useState("");
	const [availableForWork, setAvailableForWork] = useState(false);
	const [hasAJob, setHasAJob] = useState(false);
	const [resumeLink, setResumeLink] = useState("");
	const [profileTags, setProfileTags] = useState<string[]>([""]);
	const [interestedTags, setInterestedTags] = useState<string[]>([""]);
    const [skillName1, setSkillName1] = useState("");
	const [description1, setDescription1] = useState("");
	const [skillName2, setSkillName2] = useState("");
	const [description2, setDescription2] = useState("");
	const [skillName3, setSkillName3] = useState("");
	const [description3, setDescription3] = useState("");
    const [activeTab, setActiveTab] = useState("form1");
    const tabOrder = ["form1", "form2", "form3"];
    const updateProfile2 = api.settings.updateProfile2.useMutation({
        onSuccess: () => {
            toast({
                title: "Success",
                description: "Profile has been updated at " + formatDate(Date()),
            });
        },
    });

    const settingsForm2 = api.settings.settingsForm2.useMutation();

    function addForm1Vals(form1Vals: any) {
        setAbout(form1Vals.about);
        setJobTitle(form1Vals.jobTitle);
        setYearsOfExperience(form1Vals.yearsOfExperience);
        setAvailableForWork(form1Vals.availableForWork);
        setHasAJob(form1Vals.hasAJob);
    }

    function addForm2Vals(form2Vals: any) {
        setResumeLink(form2Vals.resumeLink);
        setProfileTags(form2Vals.profileTags);
        setInterestedTags(form2Vals.interestedTags);
    }

    function addForm3Vals(form3Vals: any) {
        setSkillName1(form3Vals.skillName1);
        setDescription1(form3Vals.description1);
        setSkillName2(form3Vals.skillName2);
        setDescription2(form3Vals.description2);
        setSkillName3(form3Vals.skillName3);
        setDescription3(form3Vals.description3);
    }


    function handleNextButtonClick() {
        const currentIndex = tabOrder.indexOf(activeTab);

        if (currentIndex < tabOrder.length - 1) {
            const nextTab = tabOrder[currentIndex + 1];
            setActiveTab(nextTab!);
        }
    }

    function handleSubmitClick() {

        settingsForm2.mutate({
            skillName: skillName1,
            skillDescription: description1,
            color: "cyan",
        });
        settingsForm2.mutate({
            skillName: skillName2,
            skillDescription: description2,
            color: "cyan",
        });
        settingsForm2.mutate({
            skillName: skillName3,
            skillDescription: description3,
            color: "cyan",
        });

        updateProfile2.mutate({
            about,
            jobTitle,
            yearsOfExperience,
            availableForWork,
            hasAJob,
            resumeLink,
            profileTags,
            interestedTags,
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
                <h2 className="text-3xl font-bold tracking-tight">Update Applicant Profile</h2>
                <p className="text-muted-foreground">
                    Go through the form processes to update your applicant profile
                </p>
            </div>
            <div className="flex flex-col justify-center w-full ">
                <Tabs value={activeTab} className="mt-5">
                    <TabsList className="hidden sm:flex flex-row gap-x-6 overflow-x-auto">
                        <TabsTrigger value="form1">Applicant Profile</TabsTrigger>
                        <Icons.chevronRight className="text-gray-300 h-5 w-5" />
                        <TabsTrigger value="form2">Resume/Interests</TabsTrigger>
                        <Icons.chevronRight className="text-gray-300 h-5 w-5" />
                        <TabsTrigger value="form3">Skills</TabsTrigger>
                    </TabsList>
                    <div className="w-full">
                        <TabsContent value="form1">
                            <Form1 onNextClick={handleNextButtonClick} addFormVals={addForm1Vals} />
                        </TabsContent>
                        <TabsContent value="form2">
                            <Form2 onNextClick={handleNextButtonClick} addFormVals={addForm2Vals} onBackClick={handleBackButtonClick} />
                        </TabsContent>
                        <TabsContent value="form3">
                            <Form3 onSubmitClick={handleSubmitClick} addFormVals={addForm3Vals} onBackClick={handleBackButtonClick} />
                        </TabsContent>
                    </div>
                </Tabs>
            </div>
        </div>
    );
}
