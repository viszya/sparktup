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
        <Script src="https://cdn.onesignal.com/sdks/web/v16/OneSignalSDK.page.js" defer></Script>
        <Script>
          window.OneSignalDeferred = window.OneSignalDeferred || [];
          OneSignalDeferred.push(async function(OneSignal) {
            await OneSignal.init({
              appId: "6f7e2c82-5cff-4f6e-8d60-4c6f3459d195",
            });
          });
        </Script>
      </Head>
    </html>
  );
}
