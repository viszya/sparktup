import { z } from "zod";

import {
    createTRPCRouter,
    protectedProcedure,
    publicProcedure,
} from "@/server/api/trpc";


export const settingsRouter = createTRPCRouter({
    addExperience: protectedProcedure
        .input(z.object({
            companyLogoSrc: z.string(),
            companyName: z.string(),
            companyImgSrc: z.string(),
            engagement: z.string(),
            relativeOfWork: z.string(),
            jobTitle: z.string(),
            location: z.string(),
            time: z.string(),
            jobDescriptions: z.array(z.string()),
        }))
        .mutation(async ({ ctx, input }) => {
            return ctx.db.user.update({
                where: {
                    id: ctx.session.user.id,
                },
                data: {
                    experiences: {
                        create: {
                            companyLogoSrc: input.companyLogoSrc,
                            companyName: input.companyName,
                            companyImgSrc: input.companyImgSrc,
                            engagement: input.engagement,
                            relativeOfWork: input.relativeOfWork,
                            jobTitle: input.jobTitle,
                            location: input.location,
                            time: input.time,
                            jobDescriptions: input.jobDescriptions,
                        },
                    },
                },
            });
        }),

    addProject: protectedProcedure
        .input(z.object({
            name: z.string(),
            src: z.string(),
            link: z.string(),
        }))
        .mutation(async ({ ctx, input }) => {
            return ctx.db.user.update({
                where: {
                    id: ctx.session.user.id,
                },
                data: {
                    projects: {
                        create: {
                            name: input.name,
                            src: input.src,
                            link: input.link,
                        },
                    },
                },
            });
        }),

    settingsForm1: protectedProcedure
        .input(z.object({
            fullName: z.string(),
            proEmail: z.string(),
            username: z.string(),
            location: z.string(),
            about: z.string(),
            jobTitle: z.string(),
            yearsOfExperience: z.string(),
            availableForWork: z.boolean(),
            hasAJob: z.boolean(),
            resumeLink: z.string(),
            profileTags: z.array(z.string()),
            interestedTags: z.array(z.string()),
        }))
        .mutation(async ({ ctx, input }) => {
            return ctx.db.user.update({
                where: {
                    id: ctx.session.user.id,
                },
                data: {
                    fullName: input.fullName,
                    proEmail: input.proEmail,
                    username: input.username,
                    location: input.location,
                    about: input.about,
                    jobTitle: input.jobTitle,
                    yearsOfExperience: input.yearsOfExperience,
                    availableForWork: input.availableForWork,
                    hasAJob: input.hasAJob,
                    resumeLink: input.resumeLink,
                    profileTags: input.profileTags,
                    interestedTags: input.interestedTags,
                },
            });
        }),

    updateProfile2: protectedProcedure
        .input(z.object({
            about: z.string(),
            jobTitle: z.string(),
            yearsOfExperience: z.string(),
            availableForWork: z.boolean(),
            hasAJob: z.boolean(),
            resumeLink: z.string(),
            profileTags: z.array(z.string()),
        }))
        .mutation(async ({ ctx, input }) => {
            return ctx.db.user.update({
                where: {
                    id: ctx.session.user.id,
                },
                data: {
                    about: input.about,
                    jobTitle: input.jobTitle,
                    yearsOfExperience: input.yearsOfExperience,
                    availableForWork: input.availableForWork,
                    hasAJob: input.hasAJob,
                    resumeLink: input.resumeLink,
                    profileTags: input.profileTags,
                },
            });
        }),
    settingsForm2: protectedProcedure
        .input(z.object({
            skillName: z.string(),
            skillDescription: z.string(),
            color: z.string(),
        }))
        .mutation(async ({ ctx, input }) => {
            return ctx.db.user.update({
                where: {
                    id: ctx.session.user.id,
                },
                data: {
                    topSkills: {
                        create: {
                            skillName: input.skillName,
                            skillDescription: input.skillDescription,
                            color: input.color,
                        },
                    },
                },
            });
        }),

    actualSettings: protectedProcedure
        .input(z.object({
            fullName: z.string(),
            proEmail: z.string(),
            username: z.string(),
            location: z.string(),
        }))
        .mutation(async ({ ctx, input }) => {
            return ctx.db.user.update({
                where: {
                    id: ctx.session.user.id,
                },
                data: {
                    fullName: input.fullName,
                    proEmail: input.proEmail,
                    username: input.username,
                    location: input.location,
                },
            });
        }),

    addRecommendation: protectedProcedure
        .input(z.object({
            name: z.string(),
            jobTitle: z.string(),
            srcImage: z.string(),
            message: z.string(),
        }))
        .mutation(async ({ ctx, input }) => {
            return ctx.db.user.update({
                where: {
                    id: ctx.session.user.id,
                },
                data: {
                    recommendations: {
                        create: {
                            name: input.name,
                            jobTitle: input.jobTitle,
                            srcImage: input.srcImage,
                            message: input.message,
                        },
                    },
                },
            });
        }),



});

