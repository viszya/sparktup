"use client"

import { promises as fs } from "fs"
import path from "path"
import { z } from "zod"

import { columns } from "./components/columns"
import { DataTable } from "./components/data-table"
import { api } from "@/trpc/react"
import { Toaster } from "@/app/_components/ui/toaster"
import { Skeleton } from "@/app/_components/ui/skeleton"

// Simulate a database read for tasks.
function getTasks() {
  // application: z.string(),
  // priority: z.string(),
  // status: z.string(),
  // jobposition: z.string(),
  // applicant: z.string(),
  // profile: z.string(),
  // applicationform: z.string(),
  // const data = await fs.readFile(
  //   path.join(process.cwd(), "src/app/company-dashboard/(data-table)/data/tasks.json")
  // )

  // const tasks = JSON.parse(data.toString())

  // return z.array(taskSchema).parse(tasks)


}

export  function DataPage() {
  const applications = api.application.getApplicationsFromUser.useQuery()
  let data = applications.data




  if (applications.isLoading == true) {
    return (
      <Skeleton className="w-full h-96 rounded-2xl"/>
    )
  }

  if (data.length = 0) {
    data = {}
  }


  for (let i = 0; i < data?.Application.length; i++) {
    data.Application[i].companyName = data.Application[i].company?.companyName || 'Unknown'
  }




  // data.forEach(application => {
  //   application.companyName = application.company?.companyName || 'Unknown';
  // });
  console.log(data.Application);

  return (
    <>
        <DataTable data={data.Application} columns={columns} />
        <Toaster />
    </>
  )
}
