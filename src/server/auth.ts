import { PrismaAdapter } from "@next-auth/prisma-adapter";
import {
  getServerSession,
  type DefaultSession,
  type NextAuthOptions,
} from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import EmailProvider from "next-auth/providers/email"
import { env } from "@/env.mjs";
import { db } from "@/server/db";
// import nodemailer from 'nodemailer'
import { Resend } from "resend";
import MagicLinkEmail from "@/app/_components/magiclinkemail.tsx"

/**
 * Module augmentation for `next-auth` types. Allows us to add custom properties to the `session`
 * object and keep type safety.
 *
 * @see https://next-auth.js.org/getting-started/typescript#module-augmentation
 */
declare module "next-auth" {
  interface Session extends DefaultSession {
    user: {
      id: string;
      // ...other properties
      // role: UserRole;
      accountStatus: boolean;
      accountType: string;
    } & DefaultSession["user"];
  }

  // interface User {
  //   // ...other properties
  //   // role: UserRole;
  // }
}
const resend = new Resend(env.RESEND_API_KEY);
async function sendVerificationRequest(params) {
  const { identifier, url, provider, theme } = params;
  const host = new URL(url);
  try {
    const data = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: [identifier],
      subject: `Log into Sparktup`,
      text: `Sign in to ${host}\n${url}\n\n`,
      react: MagicLinkEmail({ url, host }),
    });
    return { success: true, data }
  } catch (error) {
    console.log({ error });
  }
};


/**
 * Options for NextAuth.js used to configure adapters, providers, callbacks, etc.
 *
 * @see https://next-auth.js.org/configuration/options
 */
export const authOptions: NextAuthOptions = {
  callbacks: {
    session: ({ session, user }) => ({
      ...session,
      user: {
        ...session.user,
        id: user.id,
        accountStatus: user.accountStatus,
        accountType: user.accountType,
      },
    }),
  },
  adapter: PrismaAdapter(db),
  providers: [
    GoogleProvider({
      clientId: env.GOOGLE_CLIENT_ID,
      clientSecret: env.GOOGLE_CLIENT_SECRET,
    }),
    EmailProvider({
     //name: 'email',
      from: 'onboarding@resend.dev',
      sendVerificationRequest,
      server: {
        host: process.env.EMAIL_SERVER_HOST,
        port: process.env.EMAIL_SERVER_PORT,
        auth: {
          user: process.env.EMAIL_SERVER_USER,
          pass: process.env.EMAIL_SERVER_PASSWORD,
        },
      },
    }),
    {
      id: 'resend',
      type: 'email',
      sendVerificationRequest,
    },
    /**
     * ...add more providers here.
     *
     * Most other providers require a bit more work than the Discord provider. For example, the
     * GitHub provider requires you to add the `refresh_token_expires_in` field to the Account
     * model. Refer to the NextAuth.js docs for the provider you want to use. Example:
     *
     * @see https://next-auth.js.org/providers/github
     */
  ],
};

/**
 * Wrapper for `getServerSession` so that you don't need to import the `authOptions` in every file.
 *
 * @see https://next-auth.js.org/configuration/nextjs
 */
export const getServerAuthSession = () => getServerSession(authOptions);
