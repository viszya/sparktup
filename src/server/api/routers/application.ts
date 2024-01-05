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

            return ctx.db.application.findMany({
                where: {
                    company: {
                        id: basicProfile.company[0].id,
                    },
                },
            });


        }),


});

