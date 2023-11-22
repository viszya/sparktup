import Link from "next/link"

import { cn } from "@/server/utils"
import { buttonVariants } from "@/app/_components/ui/button"
import { Icons } from "@/app/_components/icons"
import { UserAuthForm } from "@/app/_components/auth-form"

export const metadata = {
    title: "Create an account",
    description: "Create an account to get started.",
}

export default function RegisterPage() {
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

// import { Metadata } from "next"
// import Link from "next/link"

// import { cn } from "@/server/utils"
// import { buttonVariants } from "@/app/_components/ui/button"
// import { Icons } from "@/app/_components/icons"
// import { UserAuthForm } from "@/app/_components/auth-form"

// export const metadata: Metadata = {
//     title: "Login",
//     description: "Login to your account",
// }

// export default function LoginPage() {
//     return (
//         <div className="container flex h-screen w-screen flex-col items-center justify-center">
//             <Link
//                 href="/"
//                 className={cn(
//                     buttonVariants({ variant: "ghost" }),
//                     "absolute left-4 top-4 md:left-8 md:top-8 rounded-2xl"
//                 )}
//             >
//                 <>
//                     <Icons.chevronLeft className="mr-2 h-4 w-4" />
//                     Back
//                 </>
//             </Link>
//             <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
//                 <div className="flex flex-col space-y-2 text-center">
//                     <Icons.logo className="mx-auto h-6 w-6" />
//                     <h1 className="text-2xl font-semibold tracking-tight">
//                         Welcome back
//                     </h1>
//                     <p className="text-sm text-muted-foreground">
//                         Enter your email to sign in to your account
//                     </p>
//                 </div>
//                 <UserAuthForm />
//                 <p className="px-8 text-center text-sm text-muted-foreground">
//                     <Link
//                         href="/signup"
//                         className="hover:text-brand underline underline-offset-4"
//                     >
//                         Don&apos;t have an account? Sign Up
//                     </Link>
//                 </p>
//             </div>
//         </div>
//     )
// }