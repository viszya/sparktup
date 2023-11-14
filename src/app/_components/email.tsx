"use client"

import { Icons } from "@/app/_components/icons"
import { Button } from "@/app/_components/ui/button"
import { useToast } from "@/app/_components/ui/use-toast"


export function Email({ className }: React.HTMLAttributes<HTMLElement>) {
    const { toast } = useToast()

    async function sendEmail() {
        const res = await fetch('/api/send')
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(error => console.error('Error:', error));
    }

    return (
        <Button onClick={(sendEmail)}>
            Send Test Email
        </Button>
    )
}

export function EmailTemplate() {
    return (
        <div>
            <h1>Welcome, !</h1>
        </div>
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
