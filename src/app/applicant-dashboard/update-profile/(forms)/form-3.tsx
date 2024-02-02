"use client"

import { useState } from "react";
import { Icons } from "@/app/_components/icons";
import { buttonVariants } from "@/app/_components/ui/button";
import { cn, formatDate } from "@/server/utils";
import { Input } from "@/app/_components/ui/input";
import { Textarea } from "@/app/_components/ui/textarea";
import { useToast } from "@/app/_components/ui/use-toast";
import { Card, CardTitle, CardContent, CardHeader } from "@/app/_components/ui/card";


export function Form3({ onSubmitClick, addFormVals, onBackClick }: any) {
    const { toast } = useToast();
    const [skillName1, setSkillName1] = useState("");
    const [description1, setDescription1] = useState("");
    const [skillName2, setSkillName2] = useState("");
    const [description2, setDescription2] = useState("");
    const [skillName3, setSkillName3] = useState("");
    const [description3, setDescription3] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [isNextLoading, setIsNextLoading] = useState<boolean>(false)
    const [submitted, setSubmitted] = useState(false);

    function onSubmit() {
        setIsLoading(true);
        setSubmitted(true);
        addFormVals({
            skillName1,
            description1,
            skillName2,
            description2,
            skillName3,
            description3,
        });
        setIsNextLoading(false);
        setIsLoading(false);
        toast({
            title: "Success",
            description: "Profile: Form 3 Submitted",
        });
    }

    return (
        <section>
            <div className="flex flex-col mt-5 p-5 border border-secondary rounded-xl bg-white/70 ">
                <div className="flex flex-col justify-center text-center md:flex-row md:text-left">
                    <div className="flex flex-col justify-center max-w-5xl w-full  space-y-12">
                        <article>
                            <span className="inline-flex items-center text-primary rounded-xl">
                                <span className="font-mono text-sm" aria-hidden="true">
                                    03
                                </span>
                            </span>
                            <div className="mt-3 text-3xl tracking-tighter text-primary">
                                Add your Skills
                            </div>
                            <div className="mt-4 text-primary/80">
                                Let&apos;s get started! Please fill out the following
                                form to the best of your ability. All this information will be
                                used to create your profile. You can always edit your profile
                                later.
                            </div>
                        </article>
                        <form
                            className="flex flex-col gap-y-9"
                            onSubmit={(e) => {
                                e.preventDefault();
                                onSubmit();
                            }}
                        >
                            <Card>
                                <CardHeader>
                                    <CardTitle className="text-center">Skill 1</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="col-span-full mb-6">
                                    <label className="block mb-3 text-sm font-medium text-primary/90">
                                            Skill Name
                                        </label>
                                        <Input
                                            placeholder="iOS Development"
                                            type="text"
                                            className="rounded-xl px-6 py-3 placeholder:text-primary/40 border-primary/20"
                                            value={skillName1}
                                            onChange={(e) => setSkillName1(e.target.value)}
                                        />
                                    </div>

                                    <div className="col-span-full">
                                    <label className="block mb-3 text-sm font-medium text-primary/90">
                                            Skill Description
                                        </label>
                                        <Textarea
                                            placeholder="Proficient in iOS development with a focus on creating seamless and engaging mobile experiences for users."
                                            className="rounded-xl px-6 py-3 placeholder:text-primary/40 border-primary/20"
                                            value={description1}
                                            onChange={(e) => setDescription1(e.target.value)}
                                        />
                                    </div>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader>
                                    <CardTitle className="text-center">Skill 2</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="col-span-full mb-6">
                                    <label className="block mb-3 text-sm font-medium text-primary/90">
                                            Skill Name
                                        </label>
                                        <Input
                                            placeholder="iOS Development"
                                            type="text"
                                            className="rounded-xl px-6 py-3 placeholder:text-primary/40 border-primary/20"
                                            value={skillName2}
                                            onChange={(e) => setSkillName2(e.target.value)}
                                        />
                                    </div>

                                    <div className="col-span-full">
                                    <label className="block mb-3 text-sm font-medium text-primary/90">
                                            Skill Description
                                        </label>
                                        <Textarea
                                            placeholder="Proficient in iOS development with a focus on creating seamless and engaging mobile experiences for users."
                                            value={description2}
                                            className="rounded-xl px-6 py-3 placeholder:text-primary/40 border-primary/20"
                                            onChange={(e) => setDescription2(e.target.value)}
                                        />
                                    </div>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader>
                                    <CardTitle className="text-center">Skill 3</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="col-span-full mb-6">
                                        <label className="block mb-3 text-sm font-medium text-primary/90">
                                            Skill Name
                                        </label>
                                        <Input
                                            placeholder="iOS Development"
                                            type="text"
                                            className="rounded-xl px-6 py-3 placeholder:text-primary/40 border-primary/20"
                                            value={skillName3}
                                            onChange={(e) => setSkillName3(e.target.value)}
                                        />
                                    </div>

                                    <div className="col-span-full">
                                    <label className="block mb-3 text-sm font-medium text-primary/90">
                                            Skill Description
                                        </label>
                                        <Textarea
                                            placeholder="Proficient in iOS development with a focus on creating seamless and engaging mobile experiences for users."
                                            value={description3}
                                            className="rounded-xl px-6 py-3 placeholder:text-primary/40 border-primary/20"
                                            onChange={(e) => setDescription3(e.target.value)}
                                        />
                                    </div>
                                </CardContent>
                            </Card>
                            <div className="col-span-full">
                                <button
                                    type="submit"
                                    className={cn(buttonVariants({ variant: "outline" }), "items-center justify-center w-full px-6 py-2.5 text-center text-secondary duration-200 bg-primary border-2 border-primary rounded-xl inline-flex hover:bg-transparent hover:border-primary hover:text-primary focus:outline-none focus-visible:outline-primary text-sm focus-visible:ring-primary")}
                                    disabled={isLoading}
                                >
                                    {isLoading ? (
                                        <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                                    ) : (
                                        <></>
                                    )}{" "}
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <div className="flex justify-center items-center gap-x-4 ">
                <div className="border border-dashed border-primary/60 p-2 flex justify-center items-center gap-x-4 rounded-xl mt-2">
                    <button onClick={onBackClick} className={cn(buttonVariants({ variant: "outline" }), " rounded-xl w-26")}>
                        <Icons.chevronLeft className="h-5 w-5 mr-2" />
                        Back
                    </button>
                    {submitted ? (
                        <button onClick={onSubmitClick} className={cn(buttonVariants({ variant: "default" }), " rounded-xl w-26")}>
                            Update Profile
                            <Icons.chevronRight className="h-5 w-5 ml-2" />
                        </button>
                    ) : (<></>)}
                </div>
            </div>
        </section>
    );
}
