"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/app/_components/ui/tabs";
import { Icons } from "@/app/_components/icons";
import { Form1 } from "@/app/_components/onboarding/form-1";
import { Form2 } from "@/app/_components/onboarding/form-2";
import { Form3 } from "@/app/_components/onboarding/form-3";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { buttonVariants } from "@/app/_components/ui/button";
import { cn } from "@/server/utils";
import { getServerAuthSession } from "@/server/auth"
import { redirect } from "next/navigation"
import { api } from "@/trpc/react";

export default function Onboarding() {
  // const session = await getServerAuthSession()
  //   if (!session) {
  //       redirect("/unauthorized")
  //   }
  const [activeTab, setActiveTab] = useState("profile"); // Initial active tab
  const router = useRouter();
  const addAccountStatus = api.onboarding.addAccountStatus.useMutation({
    onSuccess: () => {
      router.push("/applicant-dashboard");
    },
  })

  function handleNextButtonClick() {
    const tabOrder = ["profile", "work", "tags"];
    const currentIndex = tabOrder.indexOf(activeTab);

    if (currentIndex < tabOrder.length - 1) {
      const nextTab = tabOrder[currentIndex + 1];
      setActiveTab(nextTab!);
    }

    if (activeTab === "tags") {
      addAccountStatus.mutate({
        status: true,
      })
    }
  }

  function handleBackButtonClick() {
    const tabOrder = ["profile", "work", "tags"];
    const currentIndex = tabOrder.indexOf(activeTab);

    if (currentIndex > 0) {
      const prevTab = tabOrder[currentIndex - 1];
      setActiveTab(prevTab!);
    }
  }

  return (
    <div className="flex flex-col justify-center items-center mb-0 mt-8 sm:mb-8">
      <Tabs value={activeTab} className=" flex flex-col justify-center items-center">
        <TabsList className="gap-x-6 px-4 hidden md:flex flex-row ">
          <TabsTrigger value="profile">Profile</TabsTrigger>
          <Icons.chevronRight className="text-gray-300 h-5 w-5" />
          <TabsTrigger value="work">Work</TabsTrigger>
          <Icons.chevronRight className="text-gray-300 h-5 w-5" />
          <TabsTrigger value="tags">Setup</TabsTrigger>
        </TabsList>
        <TabsContent value="profile">
          <Form1 onNextClick={handleNextButtonClick} />
        </TabsContent>
        <TabsContent value="work">
          <Form2 onNextClick={handleNextButtonClick} />
        </TabsContent>
        <TabsContent value="tags">
          <Form3 onNextClick={handleNextButtonClick} />
        </TabsContent>
      </Tabs>

      {/* Back Button */}
      {activeTab !== "profile" && (
        <button onClick={handleBackButtonClick} className={cn(buttonVariants({ variant: "outline" }), " my-4 rounded-full")}>
          Back
        </button>
      )}
    </div>
  );
}
