"use client"

import { useState } from "react";
import { api } from "@/trpc/react";
import { Icons } from "@/app/_components/icons";
import { buttonVariants } from "@/app/_components/ui/button";
import { cn, formatDate } from "@/server/utils";
import { Input } from "@/app/_components/ui/input";
import { toast } from "sonner"


export default function AddContactInfo() {
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
    const [isLoading] = useState<boolean>(false)
    const [isNextLoading, setIsNextLoading] = useState<boolean>(false)

    const company = api.test.getCompanyProfilePrivate.useQuery();

    const createEvent = api.test.createEvent.useMutation({
        onSuccess: () => {
            setIsNextLoading(false);
            toast("Success", {
                description: "Event has been created at " + formatDate(Date()),
            });
        },
    });

    function onSubmit() {
        setIsNextLoading(true)
        createEvent.mutate({
            id: company.data?.company[0]?.id ?? "",
            date: date,
            title: title,
            location: location,
            imgsrc: imgsrc,
            attendees: attendees,
            viewLink: viewLink,
            eventType: eventType,
            eventBy: eventBy,
            about: about,
            seeSrc: seeSrc,
            attendSrc: attendSrc,
            photoSrc: photoSrc,
        });
    }

    return (
        <div className="flex flex-col px-8">
            <div>
                <h2 className="text-3xl font-bold tracking-tight">Add Event</h2>
                <p className="text-muted-foreground">
                    Add Events to your company profile by filling out the form below.
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
                                    <button
                                        type="submit"
                                        className={cn(buttonVariants({ variant: "outline" }), "max-w-60 w-60 items-center justify-center px-6 py-2.5 text-center text-secondary duration-200 bg-primary border-2 border-primary rounded-xl inline-flex hover:bg-transparent hover:border-primary hover:text-primary focus:outline-none focus-visible:outline-primary text-sm focus-visible:ring-primary")}
                                        disabled={isLoading || isNextLoading}
                                    >
                                        {isNextLoading ? (
                                            <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                                        ) : (<></>
                                        )}{" "}
                                        Add Event
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}
