import { z } from "zod";
import {
    createTRPCRouter,
    protectedProcedure,
    publicProcedure,
} from "@/server/api/trpc";

export const userRouter = createTRPCRouter({
    updateProfile: protectedProcedure
        .input(z.object({
            fullName: z.string(),
            jobTitle: z.string(),
            username: z.string(),
            location: z.string(),
            connections: z.string(),
            yearsOfExperience: z.string(),
            about: z.string(),
            availableForWork: z.boolean(),
            // experiences: z.array(z.object({
            //     companyLogoSrc: z.string(),
            //     companyName: z.string(),
            //     companyImgSrc: z.string(),
            //     engagement: z.string(),
            //     relativeOfWork: z.string(),
            //     jobTitle: z.string(),
            //     location: z.string(),
            //     time: z.string(),
            //     jobDescriptions: z.array(z.string()),
            // })),
            // projects: z.array(z.object({
            //     name: z.string(),
            //     src: z.string(),
            //     link: z.string(),
            // })),
            // topSkills: z.array(z.object({
            //     name: z.string(),
            //     color: z.string(),
            //     description: z.string(),
            // })),
            // recommendations: z.array(z.object({
            //     name: z.string(),
            //     jobTitle: z.string(),
            //     srcImage: z.string(),
            //     message: z.string(),
            // })),
            tags: z.array(z.string()),
            resumeLink: z.string(),
        }))
        .mutation(async ({ ctx, input }) => {
            return ctx.db.user.update({
                where: {
                    id: ctx.session.user.id,
                },
                data: {
                    fullName: input.fullName,
                    jobTitle: input.jobTitle,
                    username: input.username,
                    location: input.location,
                    yearsOfExperience: input.yearsOfExperience,
                    about: input.about,
                    availableForWork: input.availableForWork,
                    // experiences: {
                    //     update: input.experiences.map((experience) => ({
                    //         where: { id: ctx.session.user.id },
                    //         data: {
                    //             jobTitle: experience.jobTitle,
                    //             location: experience.location,
                    //             companyLogoSrc: experience.companyLogoSrc,
                    //             companyName: experience.companyName,
                    //             companyImgSrc: experience.companyImgSrc,
                    //             engagement: experience.engagement,
                    //             relativeOfWork: experience.relativeOfWork,
                    //             time: experience.time,
                    //             jobDescriptions: experience.jobDescriptions,
                    //         },
                    //     })),
                    // },
                    // projects: {
                    //     update: input.projects.map((project) => ({
                    //         where: { id: ctx.session.user.id }, // Assuming you have an 'id' field in Project model
                    //         data: {
                    //             name: project.name,
                    //             src: project.src,
                    //             link: project.link,
                    //         },
                    //     })),
                    // },
                    // topSkills: {
                    //     update: input.topSkills.map((topSkill) => ({
                    //         where: { id: ctx.session.user.id }, // Assuming you have an 'id' field in TopSkill model
                    //         data: {
                    //             name: topSkill.name,
                    //             color: topSkill.color,
                    //             description: topSkill.description,
                    //         },
                    //     })),
                    // },
                    // recommendations: {
                    //     update: input.recommendations.map((recommendation) => ({
                    //         where: { id: ctx.session.user.id }, // Assuming you have an 'id' field in Recommendation model
                    //         data: {
                    //             name: recommendation.name,
                    //             jobTitle: recommendation.jobTitle,
                    //             srcImage: recommendation.srcImage,
                    //             message: recommendation.message,
                    //         },
                    //     })),
                    // },
                    //tags: input.tags,
                    resumeLink: input.resumeLink,
                },
            });
        }),


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
                engagement: z.string(),
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
            return ctx.db.user.update({
                where: {
                    id: ctx.session.user.id,
                },
                data: {
                    fullName: input.fullName,
                    jobTitle: input.jobTitle,
                    username: input.username,
                    location: input.location,
                    //connections: input.connections,
                    yearsOfExperience: input.yearsOfExperience,
                    about: input.about,
                    availableForWork: input.availableForWork,
                    experiences: {
                        create: input.experiences.map((experience) => ({
                            data: {
                                jobTitle: experience.jobTitle,
                                location: experience.location,
                                companyLogoSrc: experience.companyLogoSrc,
                                companyName: experience.companyName,
                                companyImgSrc: experience.companyImgSrc,
                                engagement: experience.engagement,
                                relativeOfWork: experience.relativeOfWork,
                                time: experience.time,
                                jobDescriptions: experience.jobDescriptions,
                            },
                        })),
                    },
                    projects: {
                        create: input.projects.map((project) => ({
                            data: {
                                name: project.name,
                                src: project.src,
                                link: project.link,
                            },
                        })),
                    },
                    topSkills: {
                        create: input.topSkills.map((topSkill) => ({
                            data: {
                                name: topSkill.name,
                                color: topSkill.color,
                                description: topSkill.description,
                            },
                        })),
                    },
                    recommendations: {
                        create: input.recommendations.map((recommendation) => ({
                            data: {
                                name: recommendation.name,
                                jobTitle: recommendation.jobTitle,
                                srcImage: recommendation.srcImage,
                                message: recommendation.message,
                            },
                        })),
                    },
                    //tags: input.tags,
                    resumeLink: input.resumeLink,
                },
            });
        }),


    getProfile: publicProcedure
        .input(z.object({ id: z.string() }))
        .query(async ({ ctx, input }) => {
            const user = await ctx.db.user.findUnique({
                where: {
                    id: input.id,
                },
                include: {
                    experiences: true,
                    projects: true,
                    topSkills: true,
                    recommendations: true,
                },
            });

            if (!user) {
                throw new Error(`Profile with username ${input.id} not found`);
            }

            return user;
        }),


});