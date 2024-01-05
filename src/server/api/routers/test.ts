import { z } from "zod";

import {
    createTRPCRouter,
    protectedProcedure,
    publicProcedure,
} from "@/server/api/trpc";
import { create } from "domain";


export const testRouter = createTRPCRouter({
    updateAccount: protectedProcedure
        .input(z.object({
            name: z.string(),
        }))
        .mutation(async ({ ctx, input }) => {
            return ctx.db.user.update({
                where: {
                    id: ctx.session.user.id,
                },
                data: {
                    name: input.name,
                },
            });
        }),

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
            companyBannerImgSrc: z.string(),
            foundingYear: z.string(),
            missionValues: z.string(),
            missionAndValues: z.string(),
            about: z.string(),
            solutionsOverview: z.string(),
            keyBenefits: z.string(),
            keyFeatures: z.string(),
            companyCulture: z.string(),
            termsAndConditionsLink: z.string(),
            privacyPolicyLink: z.string(),
            specialties: z.array(z.string()),
            mediaGallery: z.array(z.string()),
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
                            companyBannerImgSrc: input.companyBannerImgSrc,
                            foundingYear: input.foundingYear,
                            missionValues: input.missionValues,
                            missionAndValues: input.missionAndValues,
                            about: input.about,
                            solutionsOverview: input.solutionsOverview,
                            keyBenefits: input.keyBenefits,
                            keyFeatures: input.keyFeatures,
                            companyCulture: input.companyCulture,
                            termsAndConditionsLink: input.termsAndConditionsLink,
                            privacyPolicyLink: input.privacyPolicyLink,
                            specialties: input.specialties,
                            mediaGallery: input.mediaGallery,
                        }
                    }

                },
            });
        }),

    // createSpeaker: protectedProcedure
    //     .input(z.object({
    //         id: z.string(),
    //         name: z.string(),
    //         role: z.string(),
    //         photoSrc: z.string(),
    //     }))
    //     .mutation(async ({ ctx, input }) => {
    //         return ctx.db.speaker.create({
    //             data: {
    //                 name: input.name,
    //                 role: input.role,
    //                 photoSrc: input.photoSrc,
    //                 company: {
    //                     connect: {
    //                         id: input.id,
    //                     },
    //                 }
    //             },
    //         });
    //     }),


    createTestimonial: protectedProcedure
        .input(z.object({
            id: z.string(),
            clientName: z.string(),
            feedback: z.string(),
        }))
        .mutation(async ({ ctx, input }) => {
            return ctx.db.testimonial.create({
                data: {
                    clientName: input.clientName,
                    feedback: input.feedback,
                    company: {
                        connect: {
                            id: input.id,
                        },
                    }
                },
            });
        }),

    createTeamMember: protectedProcedure
        .input(z.object({
            id: z.string(),
            name: z.string(),
            role: z.string(),
            photoSrc: z.string(),
        }))
        .mutation(async ({ ctx, input }) => {
            return ctx.db.teamMember.create({
                data: {
                    name: input.name,
                    role: input.role,
                    photoSrc: input.photoSrc,
                    company: {
                        connect: {
                            id: input.id,
                        },
                    }
                },
            });
        }),


    createCareerOpportunity: protectedProcedure
        .input(z.object({
            id: z.string(),
            position: z.string(),
            location: z.string(),
            applyLink: z.string(),
            companyLogo: z.string(),
            description: z.string(),
            pricingDescription: z.string(),
            sizeDescription: z.string(),
            skills: z.string(),
            jobLink: z.string(),
            seeSrc: z.string(),
            thumbnail: z.string(),
            about: z.string(),
            pay: z.string(),
            companyAbout: z.string(),

        }))
        .mutation(async ({ ctx, input }) => {
            return ctx.db.careerOpportunity.create({
                data: {
                    position: input.position,
                    location: input.location,
                    applyLink: input.applyLink,
                    companyLogo: input.companyLogo,
                    description: input.description,
                    pricingDescription: input.pricingDescription,
                    sizeDescription: input.sizeDescription,
                    skills: input.skills,
                    jobLink: input.jobLink,
                    seeSrc: input.seeSrc,
                    thumbnail: input.thumbnail,
                    about: input.about,
                    pay: input.pay,
                    companyAbout: input.companyAbout,
                    company: {
                        connect: {
                            id: input.id,
                        },
                    }
                },
            });
        }),

    createEvent: protectedProcedure
        .input(z.object({
            id: z.string(),
            date: z.string(),
            title: z.string(),
            location: z.string(),
            imgsrc: z.string(),
            attendees: z.string(),
            viewLink: z.string(),
            seeSrc: z.string(),
            eventType: z.string(),
            eventBy: z.string(),
            about: z.string(),
            attendSrc: z.string(),
            photoSrc: z.string(),
        }))
        .mutation(async ({ ctx, input }) => {
            return ctx.db.eventData.create({
                data: {
                    date: input.date,
                    title: input.title,
                    location: input.location,
                    seeSrc: input.seeSrc,
                    imgsrc: input.imgsrc,
                    eventBy: input.eventBy,
                    attendees: input.attendees,
                    viewLink: input.viewLink,
                    eventType: input.eventType,
                    about: input.about,
                    attendSrc: input.attendSrc,
                    company: {
                        connect: {
                            id: input.id,
                        },
                    }
                },
            });
        }),

    createContactInformation: protectedProcedure
        .input(z.object({
            email: z.string(),
            phone: z.string(),
            address: z.string(),
            id: z.string(),
        }))
        .mutation(async ({ ctx, input }) => {
            return ctx.db.contactInformation.create({
                data: {
                    email: input.email,
                    phone: input.phone,
                    address: input.address,
                    company: {
                        connect: {
                            id: input.id,
                        },
                    }
                },
            });
        }),

    combinedGetCompanyProfile: protectedProcedure
        .query(async ({ ctx }) => {
            const basicProfile = await ctx.db.user.findUnique({
                where: {
                    id: ctx.session.user.id,
                },
                include: {
                    company: true,
                },
            });

            // Then, get the complete company profile with additional details
            const completeProfile = await ctx.db.company.findUnique({
                where: {
                    id: basicProfile.company[0].id,
                },
                include: {
                    contactInformation: true,
                    teamMembers: true,
                    careerOpportunities: true,
                    eventData: true,
                    testimonials: true,
                },
            });

            return completeProfile;
        }),


    getCompanyProfilePrivate: protectedProcedure
        .query(async ({ ctx }) => {
            return ctx.db.user.findUnique({
                where: {
                    id: ctx.session.user.id,
                },
                include: {
                    company: true,
                },
            });
        }),
    getCompanyCompleteProfile: protectedProcedure
        .input(z.object({
            id: z.string(),
        }))
        .query(async ({ ctx, input }) => {
            return ctx.db.user.findUnique({
                where: {
                    id: input.id,
                },
                include: {
                    company: {

                        include: {
                            contactInformation: true,
                            teamMembers: true,
                            careerOpportunities: true,
                            eventData: true,
                            testimonials: true,
                        }
                    },
                },
            });
        }),

    getCompanyProfile: publicProcedure
        .input(z.object({
            id: z.string(),
        }))
        .query(async ({ ctx, input }) => {
            return ctx.db.user.findUnique({
                where: {
                    id: input.id,
                },
                include: {
                    company: true,
                },
            });
        }),

    getCompanyProfile2: publicProcedure
        .input(z.object({
            id: z.string(),
        }))
        .query(async ({ ctx, input }) => {
            return ctx.db.company.findUnique({
                where: {
                    id: input.id,
                },
                include: {
                    contactInformation: true,
                    teamMembers: true,
                    careerOpportunities: true,
                    eventData: true,
                    testimonials: true,
                },
            });
        }),
       

    getCompanyProfiles: publicProcedure
        .query(async ({ ctx }) => {
            return ctx.db.company.findMany({
                include: {
                    contactInformation: true,
                    teamMembers: true,
                    careerOpportunities: true,
                    eventData: true,
                    testimonials: true,
                }
            });
        }),
    
    getCompanyCareers: publicProcedure
        .input(z.object({
            id: z.string(),
        }))
        .query(async ({ ctx, input }) => {
            return ctx.db.careerOpportunity.findMany({
                where: {
                    companyId: input.id,
                },
            });
        }),

    getCareer: publicProcedure
        .input(z.object({
            id: z.string(),
        }))
        .query(async ({ ctx, input }) => {
            return ctx.db.careerOpportunity.findUnique({
                where: {
                    id: input.id,
                },
            });
        }),

});

