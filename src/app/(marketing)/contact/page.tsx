"use client";

import { useState } from "react";
import { Email } from "@/app/_components/email";

export default function ContactForm() {
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
    <section className="mb-8 md:mb-20">
      <div className="text-center mt-10 md:mt-32 text-3xl md:text-5xl tracking-tighter text-black">
        Contact Us
      </div>
      <div className="flex flex-col justify-center mx-4 md:flex-row md:text-left">
        <div className="flex flex-col justify-center w-full max-w-3xl p-4 md:p-10 space-y-6">
          <form
            className="flex flex-col gap-y-4"
            onSubmit={(e) => {
              e.preventDefault();
              onSubmit();
            }}
          >
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-600">
                First Name
              </label>
              <input
                className="block w-full px-4 py-2 text-black bg-white border border-gray-200 appearance-none rounded-md placeholder:text-gray-400 focus:border-red-300 focus:outline-none focus:ring-red-300"
                placeholder="John"
                type="text"
                value={firstName}
                required
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-600">
                Last Name
              </label>
              <input
                className="block w-full px-4 py-2 text-black bg-white border border-gray-200 appearance-none rounded-md placeholder:text-gray-400 focus:border-red-300 focus:outline-none focus:ring-red-300"
                placeholder="Doe"
                type="text"
                value={lastName}
                required
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-600">
                Email
              </label>
              <input
                className="block w-full px-4 py-2 text-black bg-white border border-gray-200 appearance-none rounded-md placeholder:text-gray-400 focus:border-red-300 focus:outline-none focus:ring-red-300"
                placeholder="john.doe@example.com"
                type="email"
                value={email}
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-600">
                Subject
              </label>
              <input
                className="block w-full px-4 py-2 text-black bg-white border border-gray-200 appearance-none rounded-md placeholder:text-gray-400 focus:border-red-300 focus:outline-none focus:ring-red-300"
                placeholder="Subject"
                type="text"
                value={subject}
                required
                onChange={(e) => setSubject(e.target.value)}
              />
            </div>
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-600">
                Message
              </label>
              <textarea
                className="block w-full px-4 py-2 text-black bg-white border border-gray-200 appearance-none rounded-md placeholder:text-gray-400 focus:border-red-300 focus:outline-none focus:ring-red-300"
                placeholder="Your message here..."
                rows={4}
                value={message}
                required
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>
            <div>
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
    </section>
  );
}
