"use client"

import { useToast } from "@/app/_components/ui/use-toast";
import { useState } from "react";
import { api } from "@/trpc/react";

export default function Project() {
  const [name, setName] = useState("");
  const [src, setSrc] = useState("");
  const [link, setLink] = useState("");

  const { toast } = useToast();

  const formUpdate = api.settings.addProject.useMutation({
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
        title: "Project Added",
        description: date,
      });
      setName("");
      setSrc("");
      setLink("");
    },
  });

  function onSubmit(e) {
    e.preventDefault();
    formUpdate.mutate({
      name,
      src,
      link,
    });
  }

  return (
    <section>
      <div className="mx-4 md:mx-20">
        <div className="mt-8 text-2xl md:text-5xl tracking-tighter text-black text-center">
          Add Project
        </div>
        <form
          className="max-w-2xl mx-auto mt-8 space-y-4"
          onSubmit={onSubmit}
        >
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-600">
              Project Name
            </label>
            <input
              className="w-full px-4 py-2 text-black bg-white border border-gray-200 rounded-md placeholder-gray-400 focus:border-red-300 focus:outline-none focus:ring-red-300 text-sm"
              placeholder="Project Name"
              required
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
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
              value={src}
              onChange={(e) => setSrc(e.target.value)}
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium text-gray-600">
              Project Link
            </label>
            <input
              className="w-full px-4 py-2 text-black bg-white border border-gray-200 rounded-md placeholder-gray-400 focus:border-red-300 focus:outline-none focus:ring-red-300 text-sm"
              placeholder="Project Link"
              type="text"
              required
              value={link}
              onChange={(e) => setLink(e.target.value)}
            />
          </div>

          <div>
            <button
              className="w-full px-4 py-2 text-white bg-black border border-black rounded-full inline-flex hover:bg-transparent hover:border-black hover:text-black focus:outline-none focus-visible:outline-black text-sm focus-visible:ring-black"
              type="submit"
              disabled={formUpdate.isLoading}
            >
              {formUpdate.isLoading ? "Submitting..." : "Add Project"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
