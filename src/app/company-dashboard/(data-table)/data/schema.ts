import { z } from "zod"

// We're keeping a simple non-relational schema here.
// IRL, you will have a schema for your data models.
export const taskSchema = z.object({
  application: z.string(),
  priority: z.string(),
  status: z.string(),
  jobposition: z.string(),
  applicant: z.string(),
  profile: z.string(),
  applicationform: z.string(),
})

export type Task = z.infer<typeof taskSchema>
