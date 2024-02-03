"use client";

import { DotsHorizontalIcon } from "@radix-ui/react-icons";
import { Row } from "@tanstack/react-table";
import { useState } from "react";
import { Button } from "@/app/_components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/app/_components/ui/dropdown-menu";
import { Textarea } from "@/app/_components/ui/textarea";
import { labels } from "../data/data";
import { taskSchema } from "../data/schema";
import { api } from "@/trpc/react";
import { useToast } from "@/app/_components/ui/use-toast";
import { Icons } from "@/app/_components/icons";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/app/_components/ui/dialog";
import { Input } from "@/app/_components/ui/input";
import { Label } from "@/app/_components/ui/label";
import { Email } from "@/app/_components/email2";

interface DataTableRowActionsProps<TData> {
  row: Row<TData>;
}

export function DataTableRowActions<TData>({
  row,
}: DataTableRowActionsProps<TData>) {
  const { toast } = useToast();
  const task = taskSchema.parse(row.original);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const addAcceptedApplication =
    api.application.addAcceptedApplication.useMutation();
  const updateStatus = api.application.setApplicationStatus.useMutation({
    onSuccess: () => {
      toast({
        title: "Success",
        description: "Application status updated",
      });
    },
  });

  async function sendEmail() {
    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message,
        }),
      });
      if (response.ok) {
        toast({
          title: "Message Sent",
          description: "Your message has been sent successfully.",
        });
      } else {
        toast({
          title: "Error",
          description: "Failed to send the message. Please try again later.",
          //status: 'error',
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "An unexpected error occurred. Please try again later.",
        //status: 'error',
      });
    } finally {
    }
  }

  async function sendEmail2() {
    try {
      const response = await fetch("/api/sendEmail2", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message,
        }),
      });
      if (response.ok) {
        toast({
          title: "Message Sent",
          description: "Your message has been sent successfully.",
        });
      } else {
        toast({
          title: "Error",
          description: "Failed to send the message. Please try again later.",
          //status: 'error',
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "An unexpected error occurred. Please try again later.",
        //status: 'error',
      });
    } finally {
    }
  }

  function acceptStatus() {
    setLoading(true);
    addAcceptedApplication.mutate({
      id: task.id,
    });
    updateStatus.mutate({
      id: task.id,
      status: "Accepted",
    });
    sendEmail();
    setLoading(false);
  }

  function rejectStatus() {
    setLoading(true);
    updateStatus.mutate({
      id: task.id,
      status: "Rejected",
    });
    sendEmail2();
    setLoading(false);
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="flex h-8 w-8 p-0 data-[state=open]:bg-muted"
        >
          <DotsHorizontalIcon className="h-4 w-4" />
          <span className="sr-only">Open menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="flex w-[160px] flex-col items-center justify-center"
      >
        {/* onClick={acceptStatus} */}
        <Dialog>
          <DialogTrigger asChild>
            <Button className="w-full">Accept</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Accept Application</DialogTitle>
              <DialogDescription>
                Send the next steps to the Applicant
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <form
                className="flex flex-col gap-y-9"
                onSubmit={(e) => {
                  e.preventDefault();
                  acceptStatus();
                }}
              >
                <div className="col-span-full">
                  <Textarea
                    rows={3}
                    id="message"
                    placeholder="Message"
                    value={message}
                    required
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </div>
                <div className="col-span-full">
                  <button
                    className="inline-flex w-full items-center justify-center rounded-full border-2 border-black bg-black px-6 py-2.5 text-center text-sm text-white duration-200 hover:border-black hover:bg-transparent hover:text-black focus:outline-none focus-visible:outline-black focus-visible:ring-black"
                    type="submit"
                  >
                    {loading ? (
                      <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                    ) : (
                      <></>
                    )}{" "}
                    {loading ? "Sending..." : "Send Message"}
                  </button>
                </div>
              </form>
            </div>
          </DialogContent>
        </Dialog>
        <Dialog >
          <DialogTrigger asChild>
            <Button className="w-full mt-2">Reject</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Reject Application</DialogTitle>
              <DialogDescription>
                Send feedback to the Applicant
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <form
                className="flex flex-col gap-y-9"
                onSubmit={(e) => {
                  e.preventDefault();
                  rejectStatus();
                }}
              >
                <div className="col-span-full">
                  <Textarea
                    rows={3}
                    id="message"
                    placeholder="Message"
                    value={message}
                    required
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </div>
                <div className="col-span-full">
                  <button
                    className="inline-flex w-full items-center justify-center rounded-full border-2 border-black bg-black px-6 py-2.5 text-center text-sm text-white duration-200 hover:border-black hover:bg-transparent hover:text-black focus:outline-none focus-visible:outline-black focus-visible:ring-black"
                    type="submit"
                  >
                    {loading ? (
                      <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                    ) : (
                      <></>
                    )}{" "}
                    {loading ? "Sending..." : "Send Message"}
                  </button>
                </div>
              </form>
            </div>
          </DialogContent>
        </Dialog>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
