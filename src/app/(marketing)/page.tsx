// @ts-nocheck
"use client";

import Link from "next/link";
import { cn } from "@/server/utils";
import { twp } from "@/server/utils";
import { Icons } from "@/app/_components/icons";
import { buttonVariants } from "@/app/_components/ui/button";
// import App from '@sendbird/uikit-react/App';
import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/app/_components/ui/dropdown-menu";


export default function Home() {
  return (
    <main
      className={cn(
        "mb-12 flex flex-col items-center justify-center text-center",
        // twp().wrapper,
      )}
    >
      {/* Hero Section */}
      <section className="hero-image flex flex-col items-center justify-center text-center ">
        <h1 className="lg:text:8xl movein mb-2 mt-32 text-6xl font-semibold text-black md:text-7xl">
          Simplify and accelerate your job network
        </h1>
        <p className="movein mb-2 mt-5 max-w-prose text-2xl text-primary">
          Streamline and expedite your professional connections with Sparktup's
          simplified job networking platform.
        </p>
        <div className="mt-4 flex flex-row">
          <Link
            href="/solutions/company"
            className={buttonVariants({
              variant: "heroButton2",
              size: "lg",
              className:
                "duration-250 mx-auto mb-4 mr-5  flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-xl border-2 border-black bg-transparent px-7 py-2 text-black shadow-md backdrop-blur transition-colors ease-in-out hover:bg-black hover:text-white hover:shadow-xl",
            })}
          >
            For Companies <Icons.arrowRight className="ml-2 h-5 w-5" />
          </Link>

          <Link
            href="/signup"
            className={buttonVariants({
              size: "lg",
              className:
                " ml-5 rounded-xl border-2 border-black bg-black duration-200 ease-in-out hover:border-black  hover:bg-white hover:text-black hover:shadow-xl ",
            })}
          >
            Get Started <Icons.arrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>

        {/* Example Section */}
        <div className="mx-auto w-full max-w-screen-xl px-2.5 ">
          <div className="relative isolate">
            <div className="mx-auto  px-6 lg:px-8">
              <div className="mt-16 flow-root sm:mt-24">
                <div className="flex items-center justify-center rounded-xl bg-white/70 p-2 ring-1 ring-inset ring-white lg:-m-4 lg:rounded-2xl lg:p-4">
                  <Image
                    priority={true}
                    src="/landing-pre.png"
                    alt="product preview"
                    width={1120}
                    height={220}
                    quality={100}
                    className="rounded-md bg-white shadow-2xl ring-1 ring-gray-900/10"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative flex h-full w-full flex-col items-center justify-center bg-white px-2">
        {/* <Image
          src="/logo-bg.svg"
          alt="bg-svg"
          width={800}
          height={600}
          className="left-1/4 absolute opacity-30"
        /> */}
        {/* <h1 className="mb-2 mt-10 text-xl uppercase text-primary/75">
          Trusted By 500+ of the Best Companies
        </h1> */}
        <Image
          src="/logo-p1.png"
          alt="bg-svg"
          width={1000}
          height={600}
          className="l mt-8"
        />
        <Link
          href="/solutions/company"
          className="gradient-bt mb-28 w-full max-w-5xl rounded-2xl px-[3px] py-[3px]  transition-all hover:shadow-lg"
        >
          <div className="flex flex-row items-center justify-center rounded-2xl bg-white px-8 py-2">
            <div className="mr-4 rounded-2xl border-orange-400 bg-orange-300 px-2 py-1 text-sm">
              NEW
            </div>
            How Sparktup helped startups launch their job network to millions of
            applicants <Icons.arrowRight className="ml-2 h-5 w-5" />
          </div>
        </Link>
      </section>

      {/* Features */}

      <section className="hero-image-2 flex flex-col items-center justify-center text-center">
        <h1 className="lg:text:7xl mt-28 text-4xl font-semibold text-black md:text-6xl">
          Features
        </h1>
        <div className="border-1 mx-auto items-center rounded-2xl px-5 py-24 md:px-12 lg:px-16 ">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
            <div className=" rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:rounded-2xl">
              <Image
                priority={true}
                src="/s32.png"
                alt="product preview"
                width={400}
                height={200}
                className="rounded-md bg-white shadow-2xl ring-1 ring-gray-900/10"
              />
              <div className="mt-2 rounded-lg bg-white/70 text-xl font-bold text-black backdrop-blur-xl">
                Bi-Connect Network
              </div>
            </div>
            <div className=" rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10  lg:rounded-2xl">
              <Image
                priority={true}
                src="/lp2.png"
                alt="product preview"
                width={400}
                height={200}
                quality={100}
                className="rounded-md bg-white shadow-2xl ring-1 ring-gray-900/10"
              />
              <div className="mt-2 rounded-lg bg-white/70 text-xl font-bold text-black backdrop-blur-xl">
                Real Time Dashboard
              </div>
            </div>
            <div className=" rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:rounded-2xl ">
              <Image
                priority={true}
                src="/4.png"
                alt="product preview"
                width={400}
                height={200}
                quality={100}
                className="rounded-md bg-white shadow-2xl ring-1 ring-gray-900/10"
              />
              <div className="mt-2 rounded-lg bg-white/70 text-xl font-bold text-black backdrop-blur-xl">
                View Job Positions Real Time
              </div>
            </div>
            <div className=" rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10  lg:rounded-2xl ">
              <Image
                priority={true}
                src="/9.png"
                alt="product preview"
                width={400}
                height={200}
                quality={100}
                className="rounded-md bg-white shadow-2xl ring-1 ring-gray-900/10"
              />
              <div className="mt-2 rounded-lg bg-white/70 text-xl font-bold text-black backdrop-blur-xl">
                Apply Through Website
              </div>
            </div>
            <div className=" rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:rounded-2xl ">
              <Image
                priority={true}
                src="/6.png"
                alt="product preview"
                width={400}
                height={200}
                quality={100}
                className="rounded-md bg-white shadow-2xl ring-1 ring-gray-900/10"
              />
              <div className="mt-2 rounded-lg bg-white/70 text-xl font-bold text-black backdrop-blur-xl">
                Connect With Other Professionals
              </div>
            </div>
            <div className=" rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10  lg:rounded-2xl">
              <Image
                priority={true}
                src="/lp3.png"
                alt="product preview"
                width={400}
                height={200}
                quality={100}
                className="rounded-md bg-white shadow-2xl ring-1 ring-gray-900/10"
              />
              <div className="mt-2 rounded-lg bg-white/70 text-xl font-bold text-black backdrop-blur-xl">
                Collect Applications Efficiently
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-black py-32">
        <h1 className="text-3xl text-white ">
          <span className="text-7xl font-semibold">Are you a company?</span>{" "}
          <br />
        </h1>
        <h2 className="my-4 text-3xl text-white">
          Check out our powerful solutions for companies
        </h2>
        <Link
          href="/solutions/company"
          className={buttonVariants({
            variant: "heroButton2",
            size: "lg",
            className:
              " duration-250 mx-auto mb-4 mr-5  flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-xl border-2 border-white bg-transparent px-7 py-2 text-white shadow-md backdrop-blur transition-colors ease-in-out hover:bg-white hover:text-black hover:shadow-xl",
          })}
        >
          Learn More on Company Benefits{" "}
          <Icons.arrowRight className="ml-2 h-5 w-5" />
        </Link>
      </section>

      <Image
        alt="bg-design"
        className="w-full bg-black"
        src="/bg-2.webp"
        width={1920}
        height={200}
      />

      {/* About Us */}
      <section className="flex w-full flex-col items-center justify-center bg-white pb-40">
        <h1 className="lg:text:7xl mb-2  text-5xl font-semibold text-black md:text-6xl">
          Get started with a free <br /> Sparktup account today
        </h1>
        <div className="mt-4 flex flex-row">
          <Link
            href="/solutions/company"
            className={buttonVariants({
              variant: "heroButton2",
              size: "lg",
              className:
                " duration-250 mx-auto mb-4 mr-5  flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-xl border-2 border-black bg-transparent px-7 py-2 text-black shadow-md backdrop-blur transition-colors ease-in-out hover:bg-black hover:text-white hover:shadow-xl",
            })}
          >
            For Companies <Icons.arrowRight className="ml-2 h-5 w-5" />
          </Link>
          <Link
            href="/signup"
            className={buttonVariants({
              size: "lg",
              className:
                " ml-5 rounded-xl border-2 border-black bg-black duration-200 ease-in-out hover:border-black  hover:bg-white hover:text-black hover:shadow-xl ",
            })}
          >
            Get Started <Icons.arrowRight className="ml-2 h-5 w-5" />
          </Link>
          {/* <App
                // Add the two lines below.
                appId={"C2039636-7F79-4664-968D-456DDEC8499C"}   // You can find your Sendbird application ID
                                      // on the Sendbird dashboard.
                userId={"USER_ID"}      // Specify your user ID.
            /> */}

        </div>
      </section>
      {/* <DropdownMenu>
          <DropdownMenuTrigger className=" ml-auto sticky bottom-0 mr-4 pb-4">
            <Image
            alt="Bot Image"
            src="/bot.png"
            width={65}
            height={100}
            className="rounded-full border-4 border-black"
            />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="mr-4 w-[30rem] mb-4">
            <div className="relative">
            <iframe
              src="https://www.chatbase.co/chatbot-iframe/dDmgRnfL5zdFPyWQT0-q9"
              width="100%"
              style={{ height: "100%", minHeight: "700px" }}
              frameBorder="0"
              title="My Chatbot Iframe"
            ></iframe>
            <div className="bg-white w-48 h-10 absolute bottom-0 right-40">

            </div>
            </div>

          </DropdownMenuContent>
        </DropdownMenu> */}
    </main>
  );
}
