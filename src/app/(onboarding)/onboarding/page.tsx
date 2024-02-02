"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/app/_components/ui/card";
import { buttonVariants } from "@/app/_components/ui/button";
import { Icons } from "@/app/_components/icons";
import { cn } from "@/server/utils";
import Link from "next/link";
import { useState } from "react";
import { getServerAuthSession } from "@/server/auth";
import { redirect } from "next/navigation";
import { useRouter } from "next/navigation";
import { api } from "@/trpc/react";

export default function Onboarding() {
  // const session = await getServerAuthSession()
  // if (!session) {
  //     redirect("/unauthorized")
  // }
  const router = useRouter();
  const [isLoading] = useState<boolean>(false);
  const [isLoading2] = useState<boolean>(false);
  const [isApplicant, setApplicantLoading] = useState<boolean>(false);
  const [isCompany, setCompanyLoading] = useState<boolean>(false);
  const [url, setUrl] = useState("/onboarding/applicant");
  const addAccountType = api.onboarding.addAccountType.useMutation({
    onSuccess: () => {
      redirect(url);
    },
  });
  const addAccountStatus = api.onboarding.addAccountStatus.useMutation();

  function onClick1() {
    addAccountStatus.mutate({
      status: true,
    });
    setApplicantLoading(true),
      addAccountType.mutate({
        type: "applicant",
      });
  }

  function onClick2() {
    addAccountStatus.mutate({
      status: true,
    });
    setCompanyLoading(true),
      addAccountType.mutate({
        type: "company",
      });
    router.push("/company-dashboard");
  }

  return (
      <div className="flex w-full flex-col items-center justify-center gap-x-10 gap-y-14 md:flex-row md:gap-y-0 px-4">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="flex flex-row">
              <Icons.user className="mr-2 h-6 w-6" />
              Applicant Account
            </CardTitle>
            <CardDescription>
              Create an account as an applicant to apply for jobs
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Link href="/onboarding/applicant">
              <button
                type="button"
                className={cn(buttonVariants(), "rounded-full")}
                onClick={() => {
                  onClick1();
                }}
                disabled={isLoading || isApplicant}
              >
                {isApplicant ? (
                  <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                ) : (
                  <></>
                )}{" "}
                Create Account
              </button>
            </Link>
          </CardContent>
        </Card>
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="flex flex-row">
              <Icons.users className="mr-2 h-6 w-6" />
              Company Account
            </CardTitle>
            <CardDescription>
              Create an account as an company to post jobs
            </CardDescription>
          </CardHeader>
          <CardContent>
            <button
              type="button"
              className={cn(buttonVariants(), "rounded-full")}
              onClick={() => {
                onClick2();
              }}
              disabled={isLoading2 || isCompany}
            >
              {isCompany ? (
                <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                <></>
              )}{" "}
              Create Account
            </button>
          </CardContent>
        </Card>
      </div>
  );
}
