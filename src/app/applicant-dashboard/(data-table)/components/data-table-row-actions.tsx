"use client"

import { DotsHorizontalIcon } from "@radix-ui/react-icons"
import { Row } from "@tanstack/react-table"

import { Button } from "@/app/_components/ui/button"
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
} from "@/app/_components/ui/dropdown-menu"

import { labels } from "../data/data"
import { taskSchema } from "../data/schema"
import { api } from "@/trpc/react"
import { useToast } from "@/app/_components/ui/use-toast"

interface DataTableRowActionsProps<TData> {
  row: Row<TData>
}

export function DataTableRowActions<TData>({
  row,
}: DataTableRowActionsProps<TData>) {
  const { toast } = useToast();
  const task = taskSchema.parse(row.original)
  const addAcceptedApplication = api.application.addAcceptedApplication.useMutation()
  const updateStatus = api.application.setApplicationStatus.useMutation({
    onSuccess: () => {
      toast({
        title: "Success",
        description: "Application status updated",
      });
    },
  })

  function acceptStatus() {
    addAcceptedApplication.mutate({
      id: task.id,
    })
    updateStatus.mutate({
      id: task.id,
      status: "Accepted",
    })
  }

  function rejectStatus() {
    updateStatus.mutate({
      id: task.id,
      status: "Rejected",
    })
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
      <DropdownMenuContent align="end" className="w-[160px]">
        <DropdownMenuItem onClick={acceptStatus}>
          Accept
        </DropdownMenuItem>
        <DropdownMenuItem onClick={rejectStatus}>Reject</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
