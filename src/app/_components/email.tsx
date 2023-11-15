"use client"

// import { Icons } from "@/app/_components/icons"
import { Button } from "@/app/_components/ui/button"
// import { useToast } from "@/app/_components/ui/use-toast"
import { cn } from "@/server/utils"


export function Email({ className }: React.HTMLAttributes<HTMLElement>) {

    async function sendEmail() {
        await fetch('/api/send')
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(error => console.error('Error:', error));
    }

    return (
        <Button className={cn(className, "")} onClick={(sendEmail)}>
            Send Test Email
        </Button>
    )
}