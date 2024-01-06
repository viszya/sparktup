"use client"

import { Icons } from "@/app/_components/icons";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/app/_components/ui/tabs";
import { Form1 } from "@/app/company-dashboard/add-event/(forms)/form-1";
import { Form2 } from "@/app/company-dashboard/add-event/(forms)/form-2";
import { Form3 } from "@/app/company-dashboard/add-event/(forms)/form-3";
import { useState } from "react";
import { api } from "@/trpc/react";
import { formatDate } from "@/server/utils";
import { useToast } from "@/app/_components/ui/use-toast";

export default function AddCareer() {
    const { toast } = useToast();
    const [date, setDate] = useState("");
    const [title, setTitle] = useState("");
    const [location, setLocation] = useState("");
    const [imgsrc, setImgsrc] = useState("");
    const [attendees, setAttendees] = useState("");
    const [viewLink, setViewLink] = useState("");
    const [eventType, setEventType] = useState("");
    const [eventBy, setEventBy] = useState("");
    const [about, setAbout] = useState("");
    const [seeSrc, setSeeSrc] = useState("");
    const [attendSrc, setAttendSrc] = useState("");
    const [photoSrc, setPhotoSrc] = useState("");
    const [activeTab, setActiveTab] = useState("form1");
    const tabOrder = ["form1", "form2", "form3"];
    const company = api.test.getCompanyProfilePrivate.useQuery();
    const createEvent = api.test.createEvent.useMutation({
        onSuccess: () => {
            // setIsNextLoading(false);
            toast({
                title: "Success",
                description: "Event added at" + formatDate(new Date()),
              });
        },
    });


    function addForm1Vals(form1Vals: any) {
        setDate(form1Vals.date);
        setTitle(form1Vals.title);
        setLocation(form1Vals.location);
        setImgsrc(form1Vals.imgsrc);
        setAttendees(form1Vals.attendees);
    }

    function addForm2Vals(form2Vals: any) {
        setViewLink(form2Vals.viewLink);
        setEventType(form2Vals.eventType);
        setEventBy(form2Vals.eventBy);
        setAbout(form2Vals.about);
    }

    function addForm3Vals(form3Vals: any) {
        setSeeSrc(form3Vals.seeSrc);
        setAttendSrc(form3Vals.attendSrc);
        setPhotoSrc(form3Vals.photoSrc);
    }

    function handleNextButtonClick() {
        const currentIndex = tabOrder.indexOf(activeTab);

        if (currentIndex < tabOrder.length - 1) {
            const nextTab = tabOrder[currentIndex + 1];
            setActiveTab(nextTab!);
        }
    }

    function handleSubmitClick() {
        console.log("HIHI");
        console.log({
            id: company.data?.company[0]?.id ?? "",
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
        console.log("HIHHIHIHII");
        createEvent.mutate({
            id: company.data?.company[0]?.id ?? "",
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
                <h2 className="text-3xl font-bold tracking-tight">Add Company Events</h2>
                <p className="text-muted-foreground">
                    Add New And Upcoming Company Events Open To The Public
                </p>
            </div>
            <div className="flex flex-col justify-center w-full ">
                <Tabs value={activeTab} className="mt-5">
                    <TabsList className="flex flex-row gap-x-6 overflow-x-auto">
                        <TabsTrigger value="form1">General Info</TabsTrigger>
                        <Icons.chevronRight className="text-gray-300 h-5 w-5" />
                        <TabsTrigger value="form2">Event</TabsTrigger>
                        <Icons.chevronRight className="text-gray-300 h-5 w-5" />
                        <TabsTrigger value="form3">Additional Sources</TabsTrigger>
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
