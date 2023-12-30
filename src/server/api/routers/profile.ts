import { z } from "zod";
import {
    createTRPCRouter,
    protectedProcedure,
    publicProcedure,
} from "@/server/api/trpc";

export const profileRouter = createTRPCRouter({
    createProfile: protectedProcedure
        .input(z.object({
            fullName: z.string(),
            jobTitle: z.string(),
            username: z.string(),
            location: z.string(),
            connections: z.string(),
            yearsOfExperience: z.string(),
            about: z.string(),
            availableForWork: z.boolean(),
            experiences: z.array(z.object({
                companyLogoSrc: z.string(),
                companyName: z.string(),
                companyImgSrc: z.string(),
                engangment: z.string(),
                relativeOfWork: z.string(),
                jobTitle: z.string(),
                location: z.string(),
                time: z.string(),
                jobDescriptions: z.array(z.string()),
            })),
            projects: z.array(z.object({
                name: z.string(),
                src: z.string(),
                link: z.string(),
            })),
            topSkills: z.array(z.object({
                name: z.string(),
                color: z.string(),
                description: z.string(),
            })),
            recommendations: z.array(z.object({
                name: z.string(),
                jobTitle: z.string(),
                srcImage: z.string(),
                message: z.string(),
            })),
            tags: z.array(z.string()),
            resumeLink: z.string(),
        }))
        .mutation(async ({ ctx, input }) => {
            return ctx.db.profile.create({
                data: {
                    fullName: input.fullName,
                    jobTitle: input.jobTitle,
                    username: input.username,
                    location: input.location,
                    connections: input.connections,
                    yearsOfExperience: input.yearsOfExperience,
                    about: input.about,
                    availableForWork: input.availableForWork,
                    experiences: {
                        create: input.experiences,
                    },
                    projects: {
                        create: input.projects,
                    },
                    topSkills: {
                        create: input.topSkills,
                    },
                    recommendations: {
                        create: input.recommendations,
                    },
                    tags: input.tags,
                    resumeLink: input.resumeLink,
                },
            });
        }),
});