import { z } from "zod";

import {
    createTRPCRouter,
    protectedProcedure,
    publicProcedure,
} from "@/server/api/trpc";

export const onboadingRouter = createTRPCRouter({
    form: protectedProcedure
        .input(z.object({ name: z.string(), email: z.string(), jobTitle: z.string(), statement: z.string() }))
        .mutation(async ({ ctx, input }) => {
            return ctx.db.onboarding.create({
                data: {
                    name: input.name,
                    email: input.email,
                    jobTitle: input.jobTitle,
                    statement: input.statement,
                },
            });
        }),
});
