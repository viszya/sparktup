"use client";

import { useToast } from "@/app/_components/ui/use-toast";
import { useState } from "react";
import { api } from "@/trpc/react";

export function Project() {
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

  function onSubmit() {
    formUpdate.mutate({
      name,
      src,
      link,
    });
  }

  return (
    <section>
      <div className="flex flex-col justify-center m-auto">
        <div className="flex flex-col justify-center text-center md:flex-row md:text-left">
          <div className="flex flex-col justify-left w-full max-w-5xl p-10 space-y-12">
            <div className="mt-3 text-3xl tracking-tighter text-black">
              Add Project
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
                  Project Name
                </label>
                <input
                  className="block w-full px-6 py-3 text-black bg-white border border-gray-200 appearance-none rounded-xl placeholder:text-gray-400 focus:border-red-300 focus:outline-none focus:ring-red-300 sm:text-sm"
                  placeholder="Project Name"
                  required
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
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
                  value={src}
                  onChange={(e) => setSrc(e.target.value)}
                />
              </div>

              <div className="col-span-full">
                <label className="block mb-3 text-sm font-medium text-gray-600">
                  Project Link
                </label>
                <input
                  className="block w-full px-6 py-3 text-black bg-white border border-gray-200 appearance-none rounded-xl placeholder:text-gray-400 focus:border-red-300 focus:outline-none focus:ring-red-300 sm:text-sm"
                  placeholder="Project Link"
                  type="text"
                  required
                  value={link}
                  onChange={(e) => setLink(e.target.value)}
                />
              </div>

              <div className="col-span-full">
                <button
                  className="items-center justify-center w-full px-6 py-2.5 text-center text-white duration-200 bg-black border-2 border-black rounded-full inline-flex hover:bg-transparent hover:border-black hover:text-black focus:outline-none focus-visible:outline-black text-sm focus-visible:ring-black"
                  type="submit"
                  disabled={formUpdate.isLoading}
                >
                  Add Project
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