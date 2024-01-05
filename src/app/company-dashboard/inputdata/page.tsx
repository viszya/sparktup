"use client"

import { useState } from "react";
import { api } from "@/trpc/react";
import { Icons } from "@/app/_components/icons";
import { buttonVariants } from "@/app/_components/ui/button";
import { cn, formatDate } from "@/server/utils";
import { Input } from "@/app/_components/ui/input";
import { useToast } from "@/app/_components/ui/use-toast";
import { InputData } from "@/app/_components/inputdata2";
import { InputData2 } from "@/app/_components/inputdata3";



export default function AddContactInfo() {

    return (
        <div>
            <div className="border border-primary mt-5 p-2 rounded-xl bg-secondary">
                <InputData />
            </div>
           
        </div>

    );
}
