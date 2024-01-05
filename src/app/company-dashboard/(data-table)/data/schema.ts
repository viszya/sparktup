import { z } from "zod"

// We're keeping a simple non-relational schema here.
// IRL, you will have a schema for your data models.
export const taskSchema = z.object({
  nID: z.number(),
  priority: z.string(),
  status: z.string(),
  job: z.string(),
  fullName: z.string(),
  applicantId: z.string(),
  technicalSkills: z.string(),
  softSkills: z.string(),
  certifications: z.string(),
  startDate: z.string(),
  employmentType: z.string(),
  desiredWorkSchedule: z.string(),
  convictedOfCrime: z.string(),
  interestReason: z.string(),
  suitableCandidateReason: z.string(),
  challengingSituation: z.string(),
  backgroundCheckAuthorization: z.boolean(),
  termsAndConditionsAgreement: z.boolean(),
})

export type Task = z.infer<typeof taskSchema>
