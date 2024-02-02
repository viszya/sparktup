"use client";

import { useState } from "react";
import { Email } from "@/app/_components/email";
import { Input } from "@/app/_components/ui/input";
import { Textarea } from "@/app/_components/ui/textarea";

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
    <section className="landing-bg flex flex-col items-center justify-center bg-white pt-10">
      <h1 className="movein mb-2 mt-12 text-center text-5xl font-bold text-black ">
          Support Ticket
        </h1>
      <div className="mb-8 inline-flex max-w-4xl items-center justify-center">
        Submit a support ticket and we will get back to you as soon as possible.
      </div>
      <div className=" mb-40 w-full max-w-3xl ">
        <div className="mx-2 mt-5 flex flex-col rounded-xl border border-dashed border-secondary bg-white p-10">
          <div className="flex flex-col justify-center text-center md:flex-row md:text-left">
            <div className="flex w-full max-w-3xl flex-col justify-center space-y-12">
              <form
                className="flex flex-col gap-y-4 "
                onSubmit={(e) => {
                  e.preventDefault();
                  onSubmit();
                }}
              >
                <div className="col-span-full">
                  <label className="mb-3 block text-sm font-medium text-primary/90">
                    First Name
                  </label>
                  <Input
                    placeholder="John"
                    className="rounded-xl border-primary/20 px-6 py-3 placeholder:text-primary/40"
                    type="text"
                    value={firstName}
                    required
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </div>
                <div className="col-span-full">
                  <label className="mb-3 block text-sm font-medium text-primary/90">
                    Last Name
                  </label>
                  <Input
                    placeholder="Carter"
                    className="rounded-xl border-primary/20 px-6 py-3 placeholder:text-primary/40"
                    type="text"
                    value={lastName}
                    required
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </div>
                <div className="col-span-full">
                  <label className="mb-3 block text-sm font-medium text-primary/90">
                    Email
                  </label>
                  <Input
                    placeholder="john.carter@rushhour.com"
                    className="rounded-xl border-primary/20 px-6 py-3 placeholder:text-primary/40"
                    type="text"
                    value={email}
                    required
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="col-span-full">
                  <label className="mb-3 block text-sm font-medium text-primary/90">
                    Subject
                  </label>
                  <Input
                    placeholder="Help Request: ..."
                    className="rounded-xl border-primary/20 px-6 py-3 placeholder:text-primary/40"
                    type="text"
                    value={subject}
                    required
                    onChange={(e) => setSubject(e.target.value)}
                  />
                </div>
                <div className="col-span-full">
                  <label className="mb-3 block text-sm font-medium text-primary/90">
                    Message
                  </label>
                  <Textarea
                    placeholder="Your message here..."
                    className="rounded-xl border-primary/20 px-6 py-3 placeholder:text-primary/40"
                    rows={4}
                    value={message}
                    required
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </div>
                <div className="flex items-center justify-center">
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
