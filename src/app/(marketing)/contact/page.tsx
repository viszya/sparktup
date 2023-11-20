"use client"
import { useToast } from "@/app/_components/ui/use-toast";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { api } from "@/trpc/react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [statement, setStatement] = useState("");
  const router = useRouter();
  const { toast } = useToast();

  const createPost = api.onboarding.form.useMutation({
    onSuccess: () => {
    
      router.push("/thank-you");
      toast({
        title: "Form submitted successfully!",
        description: "Thank you for contacting us.",
      });
    },
    // Handle error cases
    onError: (error) => {
      toast({
        title: "Error submitting form",
        description: error.message || "An error occurred",
        status: "error",
      });
    },
  });

  function onSubmit(e) {
    e.preventDefault();

    if (!name || !email || !jobTitle || !statement) {
      toast({
        title: "Form validation error",
        description: "Please fill out all fields.",
        status: "error",
      });
      return;
    }

    createPost.mutate({ name, email, jobTitle, statement });
  }

  return (
    <section>
      <div className="flex items-center justify-center h-screen">
        <div className="max-w-md w-full">
          <div className="bg-white p-8 mt-11 rounded-lg shadow-xl hover:shadow-2xl">
            <div className="text-3xl font-semibold text-center mb-4">
              Contact Us
            </div>
            <form className="space-y-4" onSubmit={(e) => onSubmit(e)}>
              <div>
                <label className="block text-sm font-medium text-gray-600">
                  Full Name
                </label>
                <input
                  type="text"
                  className="mt-1 p-2 w-full border rounded-md"
                  placeholder="Jeff Bezos"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-600">
                  Professional Email
                </label>
                <input
                  type="text"
                  className="mt-1 p-2 w-full border rounded-md"
                  placeholder="jeffbezos@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-600">
                  Job Title
                </label>
                <input
                  type="text"
                  className="mt-1 p-2 w-full border rounded-md"
                  placeholder="Richest Person in the World"
                  value={jobTitle}
                  onChange={(e) => setJobTitle(e.target.value)}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-600">
                  Personal Statement
                </label>
                <textarea
                  className="mt-1 p-2 w-full border rounded-md"
                  rows={4}
                  placeholder="What are you working on?"
                  value={statement}
                  onChange={(e) => setStatement(e.target.value)}
                ></textarea>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full py-2 px-4 bg-black text-white rounded-md hover:bg-gray-800 focus:outline-none focus:ring focus:border-blue-300"
                  disabled={createPost.isLoading}
                >
                  {createPost.isLoading ? "Submitting..." : "Submit Request"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
