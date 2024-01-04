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
                                    <label className="block mb-3 text-sm font-medium text-primary/90">
                                        Date
                                    </label>
                                    <Input
                                        placeholder="Date"
                                        className="rounded-xl px-6 py-3 placeholder:text-primary/40 border-primary/20"
                                        type="text"
                                        required
                                        value={date}
                                        onChange={(e) => setDate(e.target.value)}
                                    />
                                </div>
                                <div className="col-span-full">
                                    <label className="block mb-3 text-sm font-medium text-primary/90">
                                        Title
                                    </label>
                                    <Input
                                        placeholder="Title"
                                        className="rounded-xl px-6 py-3 placeholder:text-primary/40 border-primary/20"
                                        type="text"
                                        required
                                        value={title}
                                        onChange={(e) => setTitle(e.target.value)}
                                    />
                                </div>
                                <div className="col-span-full">
                                    <label className="block mb-3 text-sm font-medium text-primary/90">
                                        Location
                                    </label>
                                    <Input
                                        placeholder="Location"
                                        className="rounded-xl px-6 py-3 placeholder:text-primary/40 border-primary/20"
                                        type="text"
                                        required
                                        value={location}
                                        onChange={(e) => setLocation(e.target.value)}
                                    />
                                </div>
                                <div className="col-span-full">
                                    <label className="block mb-3 text-sm font-medium text-primary/90">
                                        Image Source
                                    </label>
                                    <Input
                                        placeholder="Image Source"
                                        className="rounded-xl px-6 py-3 placeholder:text-primary/40 border-primary/20"
                                        type="text"
                                        required
                                        value={imgsrc}
                                        onChange={(e) => setImgsrc(e.target.value)}
                                    />
                                </div>
                                <div className="col-span-full">
                                    <label className="block mb-3 text-sm font-medium text-primary/90">
                                        Attendees
                                    </label>
                                    <Input
                                        placeholder="Attendees"
                                        className="rounded-xl px-6 py-3 placeholder:text-primary/40 border-primary/20"
                                        type="text"
                                        required
                                        value={attendees}
                                        onChange={(e) => setAttendees(e.target.value)}
                                    />
                                </div>
                                <div className="col-span-full">
                                    <label className="block mb-3 text-sm font-medium text-primary/90">
                                        View Link
                                    </label>
                                    <Input
                                        placeholder="View Link"
                                        className="rounded-xl px-6 py-3 placeholder:text-primary/40 border-primary/20"
                                        type="text"
                                        required
                                        value={viewLink}
                                        onChange={(e) => setViewLink(e.target.value)}
                                    />
                                </div>
                                <div className="col-span-full">
                                    <label className="block mb-3 text-sm font-medium text-primary/90">
                                        Event Type
                                    </label>
                                    <Input
                                        placeholder="Event Type"
                                        className="rounded-xl px-6 py-3 placeholder:text-primary/40 border-primary/20"
                                        type="text"
                                        required
                                        value={eventType}
                                        onChange={(e) => setEventType(e.target.value)}
                                    />
                                </div>
                                <div className="col-span-full">
                                    <label className="block mb-3 text-sm font-medium text-primary/90">
                                        Event By
                                    </label>
                                    <Input
                                        placeholder="Event By"
                                        className="rounded-xl px-6 py-3 placeholder:text-primary/40 border-primary/20"
                                        type="text"
                                        required
                                        value={eventBy}
                                        onChange={(e) => setEventBy(e.target.value)}
                                    />
                                </div>
                                <div className="col-span-full">
                                    <label className="block mb-3 text-sm font-medium text-primary/90">
                                        About
                                    </label>
                                    <Input
                                        placeholder="About"
                                        className="rounded-xl px-6 py-3 placeholder:text-primary/40 border-primary/20"
                                        type="text"
                                        required
                                        value={about}
                                        onChange={(e) => setAbout(e.target.value)}
                                    />
                                </div>
                                <div className="col-span-full">
                                    <label className="block mb-3 text-sm font-medium text-primary/90">
                                        See Source
                                    </label>
                                    <Input
                                        placeholder="See Source"
                                        className="rounded-xl px-6 py-3 placeholder:text-primary/40 border-primary/20"
                                        type="text"
                                        required
                                        value={seeSrc}
                                        onChange={(e) => setSeeSrc(e.target.value)}
                                    />
                                </div>
                                <div className="col-span-full">
                                    <label className="block mb-3 text-sm font-medium text-primary/90">
                                        Attend Source
                                    </label>
                                    <Input
                                        placeholder="Attend Source"
                                        className="rounded-xl px-6 py-3 placeholder:text-primary/40 border-primary/20"
                                        type="text"
                                        required
                                        value={attendSrc}
                                        onChange={(e) => setAttendSrc(e.target.value)}
                                    />
                                </div>
                                <div className="col-span-full">
                                    <label className="block mb-3 text-sm font-medium text-primary/90">
                                        Photo Source
                                    </label>
                                    <Input
                                        placeholder="Photo Source"
                                        className="rounded-xl px-6 py-3 placeholder:text-primary/40 border-primary/20"
                                        type="text"
                                        required
                                        value={photoSrc}
                                        onChange={(e) => setPhotoSrc(e.target.value)}
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
