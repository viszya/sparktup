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

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    formUpdate.mutate({
      name,
      jobTitle,
      srcImage,
      message,
    });
  }

  return (
    <section className="container mx-auto max-w-screen-lg p-8">
      <div className="text-2xl md:text-5xl tracking-tighter text-black text-center mb-8">
        Add Recommendation
      </div>
      <form onSubmit={onSubmit} className="max-w-2xl mx-auto space-y-4">
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-600">
            Name
          </label>
          <input
            className="w-full px-4 py-2 text-black bg-white border border-gray-200 rounded-md placeholder-gray-400 focus:border-red-300 focus:outline-none focus:ring-red-300 text-sm"
            placeholder="Name"
            required
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div>
          <label className="block mb-2 text-sm font-medium text-gray-600">
            Job Title
          </label>
          <input
            className="w-full px-4 py-2 text-black bg-white border border-gray-200 rounded-md placeholder-gray-400 focus:border-red-300 focus:outline-none focus:ring-red-300 text-sm"
            placeholder="Job Title"
            type="text"
            required
            value={jobTitle}
            onChange={(e) => setJobTitle(e.target.value)}
          />
        </div>

        <div>
          <label className="block mb-2 text-sm font-medium text-gray-600">
            Image Source
          </label>
          <input
            className="w-full px-4 py-2 text-black bg-white border border-gray-200 rounded-md placeholder-gray-400 focus:border-red-300 focus:outline-none focus:ring-red-300 text-sm"
            placeholder="Image URL"
            type="text"
            required
            value={srcImage}
            onChange={(e) => setSrcImage(e.target.value)}
          />
        </div>

        <div>
          <label className="block mb-2 text-sm font-medium text-gray-600">
            Message
          </label>
          <textarea
            className="w-full px-4 py-2 text-black bg-white border border-gray-200 rounded-md placeholder-gray-400 focus:border-red-300 focus:outline-none focus:ring-red-300 text-sm"
            placeholder="Recommendation Message"
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>

        <div>
          <button
            className="w-full px-4 py-2 text-white bg-black border border-black rounded-full inline-flex hover:bg-transparent hover:border-black hover:text-black focus:outline-none focus-visible:outline-black text-sm focus-visible:ring-black"
            type="submit"
            disabled={formUpdate.isLoading}
          >
            {formUpdate.isLoading ? "Submitting..." : "Add Recommendation"}
          </button>
        </div>
      </form>
    </section>
  );
}
