"use client"

import { useState } from "react";
import { api } from "@/trpc/react";
import { Icons } from "@/app/_components/icons";
import { buttonVariants } from "@/app/_components/ui/button";
import { cn, formatDate } from "@/server/utils";
import { Input } from "@/app/_components/ui/input";
import { toast } from "sonner"


export default function AddContactInfo() {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [isLoading] = useState<boolean>(false)
  const [isNextLoading, setIsNextLoading] = useState<boolean>(false)

  const company = api.test.getCompanyProfilePrivate.useQuery();

  const createContactInformation = api.test.createContactInformation.useMutation({
    onSuccess: () => {
      setIsNextLoading(false);
      toast("Success",{
        description: "Your profile has been updated at " + formatDate(Date()),
      });
    },
  });

  function onSubmit() {
    setIsNextLoading(true)
    createContactInformation.mutate({
      id: company.data?.company[0]?.id ?? "",
      email: email,
      phone: phone,
      address: address,
    });
  }

  return (
    <div className="flex flex-col px-8">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Add Contact Info</h2>
        <p className="text-muted-foreground">
          Add Contact Info to your company profile by filling out the form below.
        </p>
      </div>
      <div className="flex flex-col justify-center w-full max-w-5xl">
        <div className="flex flex-col mt-5 p-5 border border-secondary rounded-xl">
          <div className="flex flex-col justify-center text-center md:flex-row md:text-left">
            <div className="flex flex-col justify-center max-w-5xl w-full  space-y-12">
              <form
                className="flex flex-col gap-y-9"
                onSubmit={(e) => {
                  e.preventDefault();
                  onSubmit();
                }}
              >
                <div className="col-span-full">
                  <label className="block mb-3 text-sm font-medium text-primary/90">
                    What is the main company email address?
                  </label>
                  <Input 
                    placeholder="company@example.com"
                    className="rounded-xl px-6 py-3 placeholder:text-primary/40 border-primary/20"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="col-span-full">
                  <label className="block mb-3 text-sm font-medium text-primary/90" >
                    What is the main company phone number?
                  </label>
                  <Input
                    placeholder="123-456-7890"
                    className="rounded-xl px-6 py-3 placeholder:text-primary/40 border-primary/20"
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
                <div className="col-span-full">
                  <label className="block mb-3 text-sm font-medium text-primary/90">
                    What is the main company address?
                  </label>
                  <Input
                    placeholder="123 Main St, City, State, Zip"
                    className="rounded-xl px-6 py-3 placeholder:text-primary/40 border-primary/20"
                    type="text"
                    required
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </div>
                <div className="col-span-full">
                  <button
                    type="submit"
                    className={cn(buttonVariants({ variant: "outline" }), "max-w-60 w-60 items-center justify-center px-6 py-2.5 text-center text-secondary duration-200 bg-primary border-2 border-primary rounded-xl inline-flex hover:bg-transparent hover:border-primary hover:text-primary focus:outline-none focus-visible:outline-primary text-sm focus-visible:ring-primary")}
                    disabled={isLoading || isNextLoading}
                  >
                    {isNextLoading ? (
                      <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                    ) : (<></>
                    )}{" "}
                    Add/Update Contact Info
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}
