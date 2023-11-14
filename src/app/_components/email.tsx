"use client"

import { cn } from "@/server/utils"
import { Icons } from "@/app/_components/icons"
import { Button } from "@/app/_components/ui/button"
import { POST } from '@/app/api/send/route';
import { useToast } from "@/app/_components/ui/use-toast"


export function Email({ className }: React.HTMLAttributes<HTMLElement>) {
    const { toast } = useToast()

    async function sendEmail() {
        const response = await POST();
        console.log(response);
    }
    
    return (
        <Button onClick={(sendEmail)}>
            Send Test Email
        </Button>
    )
}

// import * as React from 'react';

// interface EmailTemplateProps {
//   firstName: string;
// }

// export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
//   firstName,
// }) => (
//   <div>
//     <h1>Welcome, {firstName}!</h1>
//   </div>
// );
