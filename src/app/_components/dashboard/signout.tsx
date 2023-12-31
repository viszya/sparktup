"use client"

import { useState } from "react"
import { signOut } from "next-auth/react"
import { cn } from "@/server/utils"
import { buttonVariants } from "@/app/_components/ui/button"
import { Icons } from "@/app/_components/icons"


export function Signout() {
    
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [isGitHubLoading, setIsGitHubLoading] = useState<boolean>(false)

    return (
        <button
            type="button"
            className={cn(buttonVariants({ variant: "outline" }), "rounded-2xl")}
            onClick={() => {
                setIsGitHubLoading(true)
                signOut({ callbackUrl: "/" })
            }}
            disabled={isLoading || isGitHubLoading}
        >
            {isGitHubLoading ? (
                <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            ) : (<></>
            )}{" "}
            Signou
        </button>
    )
}