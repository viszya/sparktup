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
  const router = useRouter();
router.push("/company-dashboard");

  return (
   <div>

   </div>
  );
}
