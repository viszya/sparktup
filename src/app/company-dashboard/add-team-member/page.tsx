"use client"

import { useState } from "react";
import { api } from "@/trpc/react";
import { Icons } from "@/app/_components/icons";
import { buttonVariants } from "@/app/_components/ui/button";
import { cn, formatDate } from "@/server/utils";
import { Input } from "@/app/_components/ui/input";
import { toast } from "sonner"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/app/_components/ui/card"

export default function AddContactInfo() {
    const [name, setName] = useState("");
    const [role, setRole] = useState("");
    const [photoSrc, setPhotoSrc] = useState("");
    const [isLoading] = useState<boolean>(false)
    const [isNextLoading, setIsNextLoading] = useState<boolean>(false)

    const company = api.test.getCompanyProfilePrivate.useQuery();

    const createTeamMember = api.test.createTeamMember.useMutation({
        onSuccess: () => {
            setIsNextLoading(false);
            toast("Success", {
                description: "Team Member has been created at " + formatDate(Date()),
            });
        },
    });

    function onSubmit() {
        setIsNextLoading(true)
        createTeamMember.mutate({
            id: company.data?.company[0]?.id ?? "",
            name: name,
            role: role,
            photoSrc: photoSrc,
        });
    }

    return (
        <div className="flex flex-col px-8">
            <div>
                <h2 className="text-3xl font-bold tracking-tight">Add Team Members</h2>
                <p className="text-muted-foreground">
                    Add Team Members to your company profile by filling out the form below.
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
                                        Team Member Name
                                    </label>
                                    <Input
                                        placeholder="John Carter"
                                        className="rounded-xl px-6 py-3 placeholder:text-primary/40 border-primary/20"
                                        type="text"
                                        required
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </div>
                                <div className="col-span-full">
                                    <label className="block mb-3 text-sm font-medium text-primary/90">
                                        Team Member Role
                                    </label>
                                    <Input
                                        placeholder="CEO"
                                        className="rounded-xl px-6 py-3 placeholder:text-primary/40 border-primary/20"
                                        type="text"
                                        required
                                        value={role}
                                        onChange={(e) => setRole(e.target.value)}
                                    />
                                </div>
                                <div className="col-span-full">
                                    <label className="block mb-3 text-sm font-medium text-primary/90">
                                        Team Member Photo
                                    </label>
                                    <Input
                                        placeholder="https://example.com/photo.jpg"
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
                                        Add Team Member
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
