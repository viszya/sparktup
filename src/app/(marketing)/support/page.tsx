"use client";

import { useState } from "react";
import { Email } from "@/app/_components/email";
import { Input } from "@/app/_components/ui/input";
import { Textarea } from "@/app/_components/ui/textarea"

export default function SupportForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [subject, setSubject] = useState("");

  function onSubmit() {
    setFirstName("");
    setLastName("");
    setEmail("");
    setMessage("");
    setSubject("");
  }

  return (
    <section className="flex flex-col justify-center items-center mt-10 ">
      <h2 className="text-3xl font-bold tracking-tight">Support Ticket</h2>
      <div className=" max-w-3xl w-full">
        <div className="flex flex-col mt-5 p-5 border border-secondary rounded-xl border-dashed">
          <div className="flex flex-col justify-center text-center md:flex-row md:text-left">
            <div className="flex flex-col justify-center w-full max-w-3xl space-y-12">
              <form
                className="flex flex-col gap-y-4 "
                onSubmit={(e) => {
                  e.preventDefault();
                  onSubmit();
                }}
              >
                <div className="col-span-full">
                  <label className="block mb-3 text-sm font-medium text-primary/90">
                    First Name
                  </label>
                  <Input
                    placeholder="John"
                    className="rounded-xl px-6 py-3 placeholder:text-primary/40 border-primary/20"
                    type="text"
                    value={firstName}
                    required
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </div>
                <div className="col-span-full">
                  <label className="block mb-3 text-sm font-medium text-primary/90">
                    Last Name
                  </label>
                  <Input
                    placeholder="Carter"
                    className="rounded-xl px-6 py-3 placeholder:text-primary/40 border-primary/20"
                    type="text"
                    value={lastName}
                    required
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </div>
                <div className="col-span-full">
                  <label className="block mb-3 text-sm font-medium text-primary/90">
                    Email
                  </label>
                  <Input
                    placeholder="john.carter@rushhour.com"
                    className="rounded-xl px-6 py-3 placeholder:text-primary/40 border-primary/20"
                    type="text"
                    value={email}
                    required
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="col-span-full">
                  <label className="block mb-3 text-sm font-medium text-primary/90">
                    Subject
                  </label>
                  <Input
                    placeholder="Help Request: ..."
                    className="rounded-xl px-6 py-3 placeholder:text-primary/40 border-primary/20"
                    type="text"
                    value={subject}
                    required
                    onChange={(e) => setSubject(e.target.value)}
                  />
                </div>
                <div className="col-span-full">
                  <label className="block mb-3 text-sm font-medium text-primary/90">
                    Message
                  </label>
                  <Textarea
                    placeholder="Your message here..."
                    className="rounded-xl px-6 py-3 placeholder:text-primary/40 border-primary/20"
                    rows={4}
                    value={message}
                    required
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </div>
                <div className="flex justify-center items-center">
                  <Email
                    firstName={firstName}
                    lastName={lastName}
                    email={email}
                    message={message}
                    subject={subject}
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
