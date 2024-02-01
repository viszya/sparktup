import Link from "next/link";
import { cn } from "@/server/utils";
import { twp } from "@/server/utils";
import { Icons } from "@/app/_components/icons";
import { buttonVariants } from "@/app/_components/ui/button";
import Image from "next/image";

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
        <h1 className="lg:text:8xl mb-2 mt-32 text-6xl font-semibold text-black md:text-7xl">
          Simplify and accelerate code review
        </h1>
        <p className="mb-2 mt-5 max-w-prose text-2xl text-primary">
          Finally: the stacked PRs workflow - securely and seamlessly integrated
          with GitHub. <br />
          Graphite parallelizes review and development, giving you more time to
          build.
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
            <div className="mx-auto max-w-6xl px-6 lg:px-8">
              <div className="mt-16 flow-root sm:mt-24">
                <div className="-m-2 rounded-xl bg-white/50 p-2 ring-1 ring-inset ring-white lg:-m-4 lg:rounded-2xl lg:p-4">
                  <Image
                    priority={true}
                    src="/applicants.png"
                    alt="product preview"
                    width={1364}
                    height={866}
                    quality={100}
                    className="rounded-md bg-white shadow-2xl ring-1 ring-gray-900/10"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative h-96">
        <Image
          src="/logo-bg.svg"
          alt="bg-svg"
          width={800}
          height={600}
          className=" opacity-30 absolute"
        />
        <h1 className="mb-2 mt-10 text-xl uppercase text-primary/75">
          Trusted By 500+ of the Best Companies
        </h1>
      </section>

      {/* Features */}

      <section className="hero-image-2 flex flex-col items-center justify-center text-center">
        <h1 className="lg:text:7xl mb-2 mt-10  text-4xl font-semibold text-black md:text-6xl">
          Features
        </h1>
        <div className="border-1 relative mx-auto mt-11 w-full max-w-7xl items-center rounded-2xl px-5 py-24 md:px-12 lg:px-16 ">
          <div className="mx-auto w-full text-left">
            <div className="relative m-auto flex-col items-center align-middle">
              <div className="items-center gap-12 text-left lg:inline-flex lg:gap-24">
                <div className="order-first mt-12 block aspect-square w-full lg:mt-0">
                  <div className="mx-auto max-w-6xl px-6 lg:px-8">
                    <div className="mt-16 flow-root sm:mt-24">
                      <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
                        <Image
                          priority={true}
                          src="/l2.png"
                          alt="product preview"
                          width={1364}
                          height={866}
                          quality={100}
                          className="rounded-md bg-white shadow-2xl ring-1 ring-gray-900/10"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-black w-full py-32">
      <h1 className="text-3xl text-white ">
          Get started with a free <br /> Sparktup account today
        </h1>
      </section>

      <Image alt="bg-design" className="w-full bg-black" src="/bg-2.webp" width={1920} height={200} />

      {/* About Us */}
      <section className="mb-20 flex flex-col items-center justify-center bg-white">
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
        </div>
      </section>
    </main>
  );
}
