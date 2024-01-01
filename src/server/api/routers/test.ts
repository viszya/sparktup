import { z } from "zod";

import {
    createTRPCRouter,
    protectedProcedure,
    publicProcedure,
} from "@/server/api/trpc";
import { create } from "domain";


export const testRouter = createTRPCRouter({
    createCompanyProfile: protectedProcedure
        .input(z.object({
            companyName: z.string(),
            linkedInMembers: z.string(),
            logoSrc: z.string(),
            location: z.string(),
            website: z.string(),
            industry: z.string(),
            companySize: z.string(),
            size: z.string(),
            foundingYear: z.string(),
            missionValues: z.string(),
            missionAndValues: z.string(),
            about: z.string(),
            solutionsOverview: z.string(),
            keyBenefits: z.string(),
            keyFeatures: z.string(),
            companyCulture: z.string(),
            specialties: z.array(z.string()),
            mediaGallery: z.array(z.string()),
            termsAndConditionsLink: z.string(),
            privacyPolicyLink: z.string(),
        }))
        .mutation(async ({ ctx, input }) => {
            return ctx.db.user.update({
                where: {
                    id: ctx.session.user.id,
                },
                data: {
                    company: {
                        create: {
                            companyName: input.companyName,
                            linkedInMembers: input.linkedInMembers,
                            logoSrc: input.logoSrc,
                            location: input.location,
                            website: input.website,
                            industry: input.industry,
                            companySize: input.companySize,
                            size: input.size,
                            foundingYear: input.foundingYear,
                            missionValues: input.missionValues,
                            missionAndValues: input.missionAndValues,
                            about: input.about,
                            solutionsOverview: input.solutionsOverview,
                            keyBenefits: input.keyBenefits,
                            keyFeatures: input.keyFeatures,
                            companyCulture: input.companyCulture,
                            specialties: input.specialties,
                            mediaGallery: input.mediaGallery,
                            termsAndConditionsLink: input.termsAndConditionsLink,
                            privacyPolicyLink: input.privacyPolicyLink,
                        }
                    }

                },
            });
        }),


    createTestimonial: protectedProcedure
        .input(z.object({
            clientName: z.string(),
            feedback: z.string(),
        }))
        .mutation(async ({ ctx, input }) => {
            return ctx.db.user.update({
                where: {
                    id: ctx.session.user.id,
                },
                data: {
                    company: {
                        update: {
                            where: {
                                id: ctx.session.user.id,
                            },
                            data: {
                                testimonials: {
                                    create: {
                                        clientName: input.clientName,
                                        feedback: input.feedback,
                                    }
                                }
                            },
                        }
                    },
                },
            });
        }),

    createTeamMember: protectedProcedure
        .input(z.object({
            name: z.string(),
            role: z.string(),
            photoSrc: z.string(),
        }))
        .mutation(async ({ ctx, input }) => {
            return ctx.db.user.update({
                where: {
                    id: ctx.session.user.id,
                },
                data: {
                    teamMembers: {
                        create: {
                            name: input.name,
                            role: input.role,
                            photoSrc: input.photoSrc,
                        },
                    },
                },
            });
        }),

    createCareerOpportunity: protectedProcedure
        .input(z.object({
            position: z.string(),
            location: z.string(),
            applyLink: z.string(),
        }))
        .mutation(async ({ ctx, input }) => {
            return ctx.db.user.update({
                where: {
                    id: ctx.session.user.id,
                },
                data: {
                    careerOpportunities: {
                        create: {
                            position: input.position,
                            location: input.location,
                            applyLink: input.applyLink,
                        },
                    },
                },
            });
        }),

    createEvent: protectedProcedure
        .input(z.object({
            date: z.string(),
            title: z.string(),
            location: z.string(),
            imgsrc: z.string(),
            attendees: z.string(),
            viewLink: z.string(),
        }))
        .mutation(async ({ ctx, input }) => {
            return ctx.db.user.update({
                where: {
                    id: ctx.session.user.id,
                },
                data: {
                    events: {
                        create: {
                            date: input.date,
                            title: input.title,
                            location: input.location,
                            imgsrc: input.imgsrc,
                            attendees: input.attendees,
                            viewLink: input.viewLink,
                        },
                    },
                },
            });
        }),

    createContactInformation: protectedProcedure
        .input(z.object({
            email: z.string(),
            phone: z.string(),
            address: z.string(),
        }))
        .mutation(async ({ ctx, input }) => {
            return ctx.db.user.update({
                where: {
                    id: ctx.session.user.id,
                },
                data: {
                    contactInformation: {
                        create: {
                            email: input.email,
                            phone: input.phone,
                            address: input.address,
                        },
                    },
                },
            });
        }),
});

