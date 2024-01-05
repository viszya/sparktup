// import { postRouter } from "@/server/api/routers/post";
import { onboadingRouter } from "@/server/api/routers/onboarding";
import { userRouter } from "@/server/api/routers/profile";
import { settingsRouter } from "@/server/api/routers/settings";
import { testRouter } from "@/server/api/routers/test";
import { applicationRouter } from "@/server/api/routers/application";
import { createTRPCRouter } from "@/server/api/trpc";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  // post: postRouter,
  onboarding: onboadingRouter,
  user: userRouter,
  settings: settingsRouter,
  test: testRouter,
  application: applicationRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
