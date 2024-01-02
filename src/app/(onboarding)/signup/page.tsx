import Link from "next/link"
import type { Metadata } from "next"
import { cn } from "@/server/utils"
import { buttonVariants } from "@/app/_components/ui/button"
import { Icons } from "@/app/_components/icons"
import { UserAuthForm } from "@/app/_components/auth-form"
import { getServerAuthSession } from "@/server/auth"
import { redirect } from "next/navigation"

export const metadata : Metadata = {
    title: "Create an account",
    description: "Create an account to get started.",
}

export default async function RegisterPage() {
    const session = await getServerAuthSession();
    if (session) return redirect("/dashboard")

    return (
        <div className="container grid h-screen w-screen flex-col items-center justify-center">
            <Link
                href="/signin"
                className={cn(
                    buttonVariants({ variant: "ghost" }),
                    "absolute right-4 top-4 md:right-8 md:top-8 rounded-2xl"
                )}
            >
                Sign In
            </Link>
            <div className="lg:p-8">
                <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
                    <div className="flex flex-col space-y-2 text-center">
                        <Icons.logo className="mx-auto h-6 w-6" />
                        <h1 className="text-2xl font-semibold tracking-tight">
                            Create an account
                        </h1>
                        <p className="text-sm text-muted-foreground">
                            Enter your email below to create your account
                        </p>
                    </div>
                    <UserAuthForm />
                    <p className="px-8 text-center text-sm text-muted-foreground">
                        By clicking continue, you agree to our{" "}
                        <Link
                            href="/tos"
                            className="hover:text-brand underline underline-offset-4"
                        >
                            Terms of Service
                        </Link>{" "}
                        and{" "}
                        <Link
                            href="/privacy"
                            className="hover:text-brand underline underline-offset-4"
                        >
                            Privacy Policy
                        </Link>
                        .
                    </p>
                </div>
            </div>
        </div>
    )
}