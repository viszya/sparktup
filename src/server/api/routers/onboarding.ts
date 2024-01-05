import { z } from "zod";

import {
    createTRPCRouter,
    protectedProcedure,
    publicProcedure,
} from "@/server/api/trpc";

export const onboadingRouter = createTRPCRouter({
    updateForm1: protectedProcedure
        .input(z.object({
            fullName: z.string(),
            username: z.string(),
            proEmail: z.string(),
            location: z.string(),
            about: z.string(),
        }))
        .mutation(async ({ ctx, input }) => {
            return ctx.db.user.update({
                where: {
                    id: ctx.session.user.id,
                },
                data: {
                    fullName: input.fullName,
                    username: input.username,
                    proEmail: input.proEmail,
                    location: input.location,
                    about: input.about,
                },
            });
        }),

    updateForm2: protectedProcedure
        .input(z.object({
            jobTitle: z.string(),
            yearsOfExperience: z.string(),
            availableForWork: z.boolean(),
            hasAJob: z.boolean(),
        }))
        .mutation(async ({ ctx, input }) => {
            return ctx.db.user.update({
                where: {
                    id: ctx.session.user.id,
                },
                data: {
                    jobTitle: input.jobTitle,
                    yearsOfExperience: input.yearsOfExperience,
                    availableForWork: input.availableForWork,
                    hasAJob: input.hasAJob,
                },
            });
        }),

    updateForm3: protectedProcedure
        .input(z.object({
            profileTags: z.array(z.string()),
            interestedTags: z.array(z.string()),
            resumeLink: z.string(),

        }))
        .mutation(async ({ ctx, input }) => {
            return ctx.db.user.update({
                where: {
                    id: ctx.session.user.id,
                },
                data: {
                    profileTags: input.profileTags,
                    interestedTags: input.interestedTags,
                    resumeLink: input.resumeLink,
                },
            });
        }),

    addAccountType: protectedProcedure
        .input(z.object({
            type: z.string(),
        }))
        .mutation(async ({ ctx, input }) => {
            return ctx.db.user.update({
                where: {
                    id: ctx.session.user.id,
                },
                data: {
                    accountType: input.type,
                },
            });
        }),
    addAccountStatus: protectedProcedure
        .input(z.object({
            status: z.boolean(),
        }))
        .mutation(async ({ ctx, input }) => {
            return ctx.db.user.update({
                where: {
                    id: ctx.session.user.id,
                },
                data: {
                    accountStatus: input.status,
                },
            });
        }),

    getAccountStatus: protectedProcedure
        .query(async ({ ctx }) => {
            return ctx.db.user.findUnique({
                where: {
                    id: ctx.session.user.id,
                },
                select: {
                    accountStatus: true,
                },
            });
        }),

    getAccountType: protectedProcedure
        .query(async ({ ctx }) => {
            return ctx.db.user.findUnique({
                where: {
                    id: ctx.session.user.id,
                },
                select: {
                    accountType: true,
                },
            });
        }),
});

