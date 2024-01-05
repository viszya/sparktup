"use client"

import { useState } from "react";
import { api } from "@/trpc/react";
import { Icons } from "@/app/_components/icons";
import { buttonVariants } from "@/app/_components/ui/button";
import { cn, formatDate } from "@/server/utils";
import { Input } from "@/app/_components/ui/input";
import { toast } from "sonner"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/app/_components/ui/card"



export default function Edit() {
    return (
        <div className="flex flex-col px-8">
			<div>
				<h2 className="text-3xl font-bold tracking-tight">Settings</h2>
				<p className="text-muted-foreground">
					Edit Your Personal Accounts Settings
				</p>
			</div>
            <div className="mt-4">
				<h2 className="text-xl font-bold tracking-tight">Careers</h2>
			</div>
            <div className="mt-5 border border-dased border-secondary rounded-xl p-2">
                <Card>
                    <CardHeader>
                        <CardTitle>Edit or Delete Careers</CardTitle>
                        <CardDescription>Using the data table sort, filter to edit delete careers</CardDescription>
                    </CardHeader>
                    <CardContent>

                    </CardContent>
                </Card>
            </div>
            <div className="mt-4">
				<h2 className="text-xl font-bold tracking-tight">Events</h2>
			</div>
            <div className="mt-5 border border-dased border-secondary rounded-xl p-2">
                <Card>
                    <CardHeader>
                        <CardTitle>Edit or Delete Events</CardTitle>
                        <CardDescription>Using the data table sort, filter to edit delete events</CardDescription>
                    </CardHeader>
                    <CardContent>

                    </CardContent>
                </Card>
            </div>
        </div>

    )
}

