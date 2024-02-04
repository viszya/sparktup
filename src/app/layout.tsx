// Imports
import "@/styles/globals.css";
import { GeistSans } from "geist/font/sans";
import { cookies } from "next/headers";
import { siteConfig } from "@/app/_config/site";
import { TRPCReactProvider } from "@/trpc/react";
import { cn } from "@/server/utils";
import { Analytics } from "@vercel/analytics/react";
import { ThemeProvider } from "@/app/_components/theme-provider";
import { Toaster } from "@/app/_components/ui/toaster";
import Head from "next/head";
import Script from "next/script";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/app/_components/ui/dropdown-menu";
import Image from "next/image";

// Metadata
export const metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  authors: [
    {
      name: "SparktUp",
      url: "https://sparktup.vercel.app",
    },
  ],
  creator: "viszya",
  // themeColor: [
  //   { media: "(prefers-color-scheme: light)", color: "white" },
  //   { media: "(prefers-color-scheme: dark)", color: "black" },
  // ],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: `${siteConfig.url}/site.webmanifest`,
};

// App Root Layout
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className="light"
      suppressHydrationWarning
      style={{ scrollBehavior: "smooth" }}
    >
      <body
        className={cn(
          "min-h-screen  bg-background bg-black font-sans antialiased",
          GeistSans.className,
        )}
      >
        <TRPCReactProvider cookies={cookies().toString()}>
          <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
            {children}
            <Analytics />
            <Toaster />
          </ThemeProvider>
        </TRPCReactProvider>
        <DropdownMenu>
          <DropdownMenuTrigger className=" sticky bottom-0 right-0 ml-4 mr-4 pb-12">
            <Image
              alt="Bot Image"
              src="/bot.png"
              width={65}
              height={100}
              className="rounded-full border-4 border-black"
            />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="mb-4 ml-4 w-[30rem]">
            <div className="relative">
              <iframe
                src="https://www.chatbase.co/chatbot-iframe/dDmgRnfL5zdFPyWQT0-q9"
                width="100%"
                style={{ height: "100%", minHeight: "700px" }}
                frameBorder="0"
                title="My Chatbot Iframe"
              ></iframe>
              <div className="absolute bottom-0 right-40 h-10 w-48 bg-white"></div>
            </div>
          </DropdownMenuContent>
        </DropdownMenu>
      </body>

      <Head>
        {/* Add your external scripts using NextScript */}
        <Script
          src="https://www.chatbase.co/embed.min.js"
          strategy="beforeInteractive"
          chatbotId="dDmgRnfL5zdFPyWQT0-q9"
          domain="www.chatbase.co"
        ></Script>
        <Script strategy="beforeInteractive">
          {`window.embeddedChatbotConfig = {chatbotId: "dDmgRnfL5zdFPyWQT0-q9",domain: "www.chatbase.co"};`}
        </Script>
        <Script
          src="/index.js"
          strategy="beforeInteractive"
          type="text/javascript"
        ></Script>
      </Head>
    </html>
  );
}
