import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "@/server/api/trpc";

export const profileRouter = createTRPCRouter({
  getData: protectedProcedure.query(({ ctx }) => {
    //return ctx.db.profile.findMany();
  }),
});
