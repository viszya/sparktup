"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/app/_components/ui/tabs";
import { Icons } from "@/app/_components/icons";
import { Form1 } from "@/app/_components/onboarding/form-1";
import { Form2 } from "@/app/_components/onboarding/form-2";
import { Form3 } from "@/app/_components/onboarding/form-3";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Onboarding() {
  const [activeTab, setActiveTab] = useState("profile"); // Initial active tab
  const router = useRouter();

  function handleNextButtonClick() {
    const tabOrder = ["profile", "work", "tags"];
    const currentIndex = tabOrder.indexOf(activeTab);

    if (currentIndex < tabOrder.length - 1) {
      const nextTab = tabOrder[currentIndex + 1];
      setActiveTab(nextTab!);
    }

    if (activeTab === "tags") {
      router.push("/dashboard");
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
    <div className="flex flex-col justify-center items-center">
      <Tabs value={activeTab} className="flex flex-col justify-center items-center">
        <TabsList className="gap-x-6 px-4">
          <TabsTrigger value="profile">Profile</TabsTrigger>
          <Icons.chevronRight className="text-gray-300 h-5 w-5" />
          <TabsTrigger value="work">Work</TabsTrigger>
          <Icons.chevronRight className="text-gray-300 h-5 w-5" />
          <TabsTrigger value="tags">Tag Setup</TabsTrigger>
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
        <button onClick={handleBackButtonClick} className="mt-4 underline cursor-pointer text-blue-500">
          Back
        </button>
      )}
    </div>
  );
}
