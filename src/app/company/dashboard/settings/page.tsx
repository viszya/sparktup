import { Icons } from "@/app/_components/icons";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/app/_components/ui/tabs";
import { Form1 } from "@/app/_components/dashboard/applicant-settings/form-1";
import { Form2 } from "@/app/_components/dashboard/applicant-settings/form-2";
import { InputData } from "@/app/_components/inputdata";

export default function Settings() {
  return (
    <div className="flex flex-col justify-center items-center p-4">
      <div className="mt-3 text-3xl tracking-tighter text-black">
        Settings
      </div>
      <div className="flex flex-col justify-center w-full max-w-5xl">
        <Tabs defaultValue="account" className="flex flex-col justify-center mt-5">
          <TabsList className="flex flex-row gap-x-6 px-4 overflow-x-auto">
            <TabsTrigger value="account">Account</TabsTrigger>
            <Icons.chevronRight className="text-gray-300 h-5 w-5" />
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <Icons.chevronRight className="text-gray-300 h-5 w-5" />
            <TabsTrigger value="data">Data</TabsTrigger>
          </TabsList>
          <div className="w-full">
            <TabsContent value="account">
              <Form1 />
            </TabsContent>
            <TabsContent value="skills">
              <Form2 />
            </TabsContent>
            <TabsContent value="data">
              <InputData />
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </div>
  );
}
