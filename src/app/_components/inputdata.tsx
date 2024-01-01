"use client"

import { useToast } from "@/app/_components/ui/use-toast";
import { useRouter } from "next/navigation";
import { useState } from "react";

export function InputData() {
    const router = useRouter();
    const { toast } = useToast();

    const updateProfile = api.user.createProfile.useMutation({
        toast({
            title: "Form submitted!",
            description: "Friday, February 10, 2023 at 5:57 PM",
        });
    });
    //const s = api.user.getProfile.useQuery({ id: "clqst7m140000stm7xvs7wi5k" });


    function onSubmit() {

        updateProfile.mutate(data);
        //console.log(s);
    }

    return (
        <div>
            <section>
                <div className="flex flex-col justify-center m-auto">
                    <div className="flex flex-col justify-center text-center md:flex-row md:text-left">
                        <div className="flex flex-col justify-center max-w-2xl p-10 space-y-12">
                            <article>
                                <span className="inline-flex items-center text-black rounded-xl">
                                    <span className="font-mono text-sm" aria-hidden="true">
                                        01
                                    </span>
                                </span>
                                <div className="mt-3 text-3xl tracking-tighter text-black">
                                    Welcome! Let&apos;s get started.
                                </div>
                                <div className="mt-4 text-gray-500">
                                    Let&apos;s get to know each other. Please fill out the following
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
                                {/* ... Existing form fields ... */}

                                <div className="col-span-full">
                                    <button
                                        className="items-center justify-center w-full px-6 py-2.5 text-center text-white duration-200 bg-black border-2 border-black rounded-full inline-flex hover:bg-transparent hover:border-black hover:text-black focus:outline-none focus-visible:outline-black text-sm focus-visible:ring-black"
                                        type="submit"
                                        disabled={updateProfile.isLoading}
                                    >
                                        {updateProfile.isLoading ? "Submitting..." : "Submit your request"}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}