"use client"

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/app/_components/ui/card"
import { buttonVariants } from "@/app/_components/ui/button"
import { Icons } from "@/app/_components/icons"
import { cn } from "@/server/utils"
import Link from "next/link"
import { useState } from "react"
import { getServerAuthSession } from "@/server/auth"
import { redirect } from "next/navigation"
import { api } from "@/trpc/react"

export default function Onboarding() {
    // const session = await getServerAuthSession()
    // if (!session) {
    //     redirect("/unauthorized")
    // }
    const [isLoading] = useState<boolean>(false)
    const [isLoading2] = useState<boolean>(false)
    const [isApplicant, setApplicantLoading] = useState<boolean>(false)
    const [isCompany, setCompanyLoading] = useState<boolean>(false)
    const [url, setUrl] = useState("/onboarding/applicant")
    const addAccountType = api.onboarding.addAccountType.useMutation({
        onSuccess: () => {
            redirect(url)
        },
    })

    function onClick1() {
        addAccountType.mutate({
            type: "applicant",
        })
    }

    function onClick2() {
        setUrl("/company-dashboard");
        addAccountType.mutate({
            type: "company",
        })
    }

    return (
        <div className="flex flex-row gap-x-10 justify-center items-center">
            <Card>
                <CardHeader>
                    <CardTitle className="flex flex-row">
                        <Icons.user className="w-6 h-6 mr-2" />
                        Applicant Account
                    </CardTitle>
                    <CardDescription>Create an account as an applicant to apply for jobs</CardDescription>
                </CardHeader>
                <CardContent>
                    <Link href="/onboarding/applicant">
                        <button
                            type="button"
                            className={cn(buttonVariants(), "rounded-full")}
                            onClick={() => {
                                setApplicantLoading(true), onClick1(),
                            }}
                            disabled={isLoading || isApplicant}
                        >
                            {isApplicant ? (
                                <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                            ) : (<></>
                            )}{" "}
                            Create Account
                        </button>
                    </Link>

                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle className="flex flex-row">
                        <Icons.users className="w-6 h-6 mr-2" />
                        Company Account
                    </CardTitle>
                    <CardDescription>Create an account as an company to post  jobs</CardDescription>
                </CardHeader>
                <CardContent>
                    <button
                        type="button"
                        className={cn(buttonVariants(), "rounded-full")}
                        onClick={() => {
                            setCompanyLoading(true), onClick2()
                        }}
                        disabled={isLoading2 || isCompany}
                    >
                        {isCompany ? (
                            <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                        ) : (<></>
                        )}{" "}
                        Create Account
                    </button>
                </CardContent>
            </Card>
        </div>
    )
}