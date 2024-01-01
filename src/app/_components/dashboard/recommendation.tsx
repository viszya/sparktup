"use client";

import { useToast } from "@/app/_components/ui/use-toast";
import { useState } from "react";
import { api } from "@/trpc/react";

export function Recommendation() {
  const [name, setName] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [srcImage, setSrcImage] = useState("");
  const [message, setMessage] = useState("");

  const { toast } = useToast();

  const formUpdate = api.settings.addRecommendation.useMutation({
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
        title: "Recommendation Added",
        description: date,
      });
      setName("");
      setJobTitle("");
      setSrcImage("");
      setMessage("");
    },
  });

  function onSubmit() {
    formUpdate.mutate({
      name,
      jobTitle,
      srcImage,
      message,
    });
  }

  return (
    <section>
      <div className="flex flex-col justify-center m-auto">
        <div className="flex flex-col justify-center text-center md:flex-row md:text-left">
          <div className="flex flex-col justify-left w-full max-w-5xl p-10 space-y-12">
            <div className="mt-3 text-3xl tracking-tighter text-black">
              Add Recommendation
            </div>
            <form
              className="flex flex-col gap-y-9"
              onSubmit={(e) => {
                e.preventDefault();
                onSubmit();
              }}
            >
              <div className="col-span-full">
                <label className="block mb-3 text-sm font-medium text-gray-600">
                  Name
                </label>
                <input
                  className="block w-full px-6 py-3 text-black bg-white border border-gray-200 appearance-none rounded-xl placeholder:text-gray-400 focus:border-red-300 focus:outline-none focus:ring-red-300 sm:text-sm"
                  placeholder="Name"
                  required
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div className="col-span-full">
                <label className="block mb-3 text-sm font-medium text-gray-600">
                  Job Title
                </label>
                <input
                  className="block w-full px-6 py-3 text-black bg-white border border-gray-200 appearance-none rounded-xl placeholder:text-gray-400 focus:border-red-300 focus:outline-none focus:ring-red-300 sm:text-sm"
                  placeholder="Job Title"
                  type="text"
                  required
                  value={jobTitle}
                  onChange={(e) => setJobTitle(e.target.value)}
                />
              </div>

              <div className="col-span-full">
                <label className="block mb-3 text-sm font-medium text-gray-600">
                  Image Source
                </label>
                <input
                  className="block w-full px-6 py-3 text-black bg-white border border-gray-200 appearance-none rounded-xl placeholder:text-gray-400 focus:border-red-300 focus:outline-none focus:ring-red-300 sm:text-sm"
                  placeholder="Image URL"
                  type="text"
                  required
                  value={srcImage}
                  onChange={(e) => setSrcImage(e.target.value)}
                />
              </div>

              <div className="col-span-full">
                <label className="block mb-3 text-sm font-medium text-gray-600">
                  Message
                </label>
                <textarea
                  className="block w-full px-6 py-3 text-black bg-white border border-gray-200 appearance-none rounded-xl placeholder:text-gray-400 focus:border-red-300 focus:outline-none focus:ring-red-300 sm:text-sm"
                  placeholder="Recommendation Message"
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>

              <div className="col-span-full">
                <button
                  className="items-center justify-center w-full px-6 py-2.5 text-center text-white duration-200 bg-black border-2 border-black rounded-full inline-flex hover:bg-transparent hover:border-black hover:text-black focus:outline-none focus-visible:outline-black text-sm focus-visible:ring-black"
                  type="submit"
                  disabled={formUpdate.isLoading}
                >
                  Add Recommendation
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
