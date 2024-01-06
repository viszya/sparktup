import { z } from "zod";

import {
    createTRPCRouter,
    protectedProcedure,
    publicProcedure,
} from "@/server/api/trpc";
import { create } from "domain";


export const applicationRouter = createTRPCRouter({

    addApplication: protectedProcedure
        .input(z.object({
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
            job: z.string(),
            companyId: z.string(),
        }))
        .mutation(async ({ ctx, input }) => {
            const profile = await ctx.db.user.findUnique({
                where: {
                    id: ctx.session.user.id,
                },
                include: {
                    company: true,
                },
            });
            return ctx.db.application.create({
                data: {
                    technicalSkills: input.technicalSkills,
                    softSkills: input.softSkills,
                    certifications: input.certifications,
                    startDate: input.startDate,
                    employmentType: input.employmentType,
                    desiredWorkSchedule: input.desiredWorkSchedule,
                    convictedOfCrime: input.convictedOfCrime,
                    interestReason: input.interestReason,
                    suitableCandidateReason: input.suitableCandidateReason,
                    challengingSituation: input.challengingSituation,
                    backgroundCheckAuthorization: input.backgroundCheckAuthorization,
                    termsAndConditionsAgreement: input.termsAndConditionsAgreement,
                    job: input.job,
                    company: {
                        connect: { id: input.companyId },
                    },
                    applicant: {
                        connect: { id: ctx.session.user.id },
                    },
                    fullName: profile?.fullName,
                },
            });
        }),


    getApplicationsFromCompany: protectedProcedure
        .query(async ({ ctx }) => {
            const basicProfile = await ctx.db.user.findUnique({
                where: {
                    id: ctx.session.user.id,
                },
                include: {
                    company: true,
                },
            });

            if (basicProfile.applications.length === 0) return ([]);

            return ctx.db.application.findMany({
                where: {
                    company: {
                        id: basicProfile.company[0].id,
                    },
                },
            });


        }),

    getApplicationsFromUser: protectedProcedure
        .query(async ({ ctx }) => {
            return ctx.db.application.findMany({
                where: {
                    applicantId: ctx.session.user.id,
                },
            });
        }),

    setApplicationStatus: protectedProcedure
        .input(z.object({
            id: z.string(),
            status: z.string(),
        }))
        .mutation(async ({ ctx, input }) => {
            return ctx.db.application.update({
                where: {
                    id: input.id,
                },
                data: {
                    status: input.status,
                },
            });
        }),

    getApplication: protectedProcedure
        .input(z.object({
            id: z.string(),
        }))
        .query(async ({ ctx, input }) => {
            return ctx.db.application.findUnique({
                where: {
                    id: input.id,
                },
            });
        }),

    addAcceptedApplication: protectedProcedure
        .input(z.object({
            id: z.string(),
        }))
        .mutation(async ({ ctx, input }) => {
            // increment acceptedApplication to the application tied to the id
            const application = await ctx.db.application.findUnique({
                where: {
                    id: input.id,
                },
            });
            const company = await ctx.db.company.update({
                where: {
                    id: application.companyId,
                },
                data: {
                    acceptedApplications: {
                        increment: 1,
                    },
                },
            });
        }),

    // get the number of applications from a user
    getNumberOfApplications: protectedProcedure
        .query(async ({ ctx }) => {
            const applicationCount = await ctx.db.application.count({
                where: {
                    applicantId: ctx.session.user.id,
                },
            });

            const views = await ctx.db.user.findUnique({
                where: {
                    id: ctx.session.user.id,
                },
                select: {
                    views: true,
                },
            });

            const acceptedApplications = await ctx.db.application.count({
                where: {
                    applicantId: ctx.session.user.id,
                    status: 'accepted',
                },
            });

            return {
                applicationCount: applicationCount ?? 0,
                views: views.views,
                acceptedApplications: acceptedApplications ?? 0,
            };
        }),



});

