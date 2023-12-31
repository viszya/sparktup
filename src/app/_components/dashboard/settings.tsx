import { Icons } from "@/app/_components/icons"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/app/_components/ui/tabs"
import { Form1 } from "@/app/_components/applicant-settings/form-1";
import { Form2 } from "@/app/_components/applicant-settings/form-2";

export function Settings() {
    return (
        <div className="flex flex-col justify-center items-center">
            <div className="mt-3 text-3xl tracking-tighter text-black">
                Settings
            </div>
            <Tabs defaultValue="account">
                <TabsList className="gap-x-6 px-4">
                    <TabsTrigger value="account">Account</TabsTrigger>
                    <Icons.chevronRight className="text-gray-300 h-5 w-5" />
                    <TabsTrigger value="skills">Skills</TabsTrigger>
                </TabsList>
                <TabsContent value="account"><Form1 /></TabsContent>
                <TabsContent value="skills"><Form2 /></TabsContent>
            </Tabs>
        </div>
    )
}