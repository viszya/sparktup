"use client";

import { useState } from "react";
import { api } from "@/trpc/react";
import { useToast } from "@/app/_components/ui/use-toast";

export function ContactForm() {
  const { toast } = useToast();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const formUpdate = api.settings.settingsContactForm.useMutation({
    onSuccess: () => {
      const today = new Date();
      const date =
        today.toLocaleString("default", { weekday: "long" }) +
        ", " +
        today.toLocaleString("default", { month: "long" }) +
        " " +
        today.getDate() +
        ", " +
        today.getFullYear() +
        " at " +
        today.getHours() +
        ":" +
        today.getMinutes();
      toast({
        title: "Message Sent",
        description: date,
      });
      setFirstName("");
      setLastName("");
      setEmail("");
      setMessage("");
    },
  });

  function onSubmit() {
    formUpdate.mutate({
      firstName,
      lastName,
      email,
      message,
    });
  }

  return (
    <section>
      <div className="flex flex-col justify-center m-auto">
        <div className="flex flex-col justify-center text-center md:flex-row md:text-left">
          <div className="flex flex-col justify-center w-full max-w-5xl p-10 space-y-12">
            <form
              className="flex flex-col gap-y-9"
              onSubmit={(e) => {
                e.preventDefault();
                onSubmit();
              }}
            >
              <div className="col-span-full">
                <label className="block mb-3 text-sm font-medium text-gray-600">
                  First Name
                </label>
                <input
                  className="block w-full px-6 py-3 text-black bg-white border border-gray-200 appearance-none rounded-xl placeholder:text-gray-400 focus:border-red-300 focus:outline-none focus:ring-red-300 sm:text-sm"
                  placeholder="John"
                  type="text"
                  value={firstName}
                  required
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
              <div className="col-span-full">
                <label className="block mb-3 text-sm font-medium text-gray-600">
                  Last Name
                </label>
                <input
                  className="block w-full px-6 py-3 text-black bg-white border border-gray-200 appearance-none rounded-xl placeholder:text-gray-400 focus:border-red-300 focus:outline-none focus:ring-red-300 sm:text-sm"
                  placeholder="Doe"
                  type="text"
                  value={lastName}
                  required
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
              <div className="col-span-full">
                <label className="block mb-3 text-sm font-medium text-gray-600">
                  Email
                </label>
                <input
                  className="block w-full px-6 py-3 text-black bg-white border border-gray-200 appearance-none rounded-xl placeholder:text-gray-400 focus:border-red-300 focus:outline-none focus:ring-red-300 sm:text-sm"
                  placeholder="john.doe@example.com"
                  type="email"
                  value={email}
                  required
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="col-span-full">
                <label className="block mb-3 text-sm font-medium text-gray-600">
                  Message
                </label>
                <textarea
                  className="block w-full px-6 py-3 text-black bg-white border border-gray-200 appearance-none rounded-xl placeholder:text-gray-400 focus:border-red-300 focus:outline-none focus:ring-red-300 sm:text-sm"
                  placeholder="Your message here..."
                  rows={4}
                  value={message}
                  required
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
              </div>
              <div className="col-span-full">
                <button
                  className="items-center justify-center w-full px-6 py-2.5 text-center text-white duration-200 bg-black border-2 border-black rounded-full inline-flex hover:bg-transparent hover:border-black hover:text-black focus:outline-none focus-visible:outline-black text-sm focus-visible:ring-black"
                  type="submit"
                  disabled={formUpdate.isLoading}
                >
                  Send Message
                </button>
              </div>
              {formUpdate.isLoading ? "Submitting..." : ""}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
