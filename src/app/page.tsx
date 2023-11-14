import Link from "next/link";
import { cn } from "@/server/utils";
import { tw_presets } from "@/server/utils";
import { Icons } from "@/app/_components/icons";
import { buttonVariants } from "@/app/_components/ui/button";
import { Pricing } from "@/app/_components/pricing";
import Image from "next/image"
import { Email } from "@/app/_components/email";

export default function Home() {
  return (
    <main className={cn("mb-12 mt-28 sm:mt-40 flex flex-col items-center justify-center text-center", tw_presets().wrapper)}>
      <div className='mx-auto mb-4 flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full border border-red-200 bg-white px-7 py-2 shadow-md backdrop-blur transition-all hover:border-red-300 hover:bg-red/50'>
        <p className="text-sm font-semibold text-gray-700 flex flex-row ">
          <Icons.party className="h-5 w-5 mr-2" /> ClearSight is now public!
        </p>
        
      </div>


      {/* Hero Section */}
      <h1 className="max-w-4xl text-5xl font-bold md:text-6xl lg:text:7xl">
        Build Your Dream SAAS with ClearSight&apos;s AI-Powered Tools
      </h1>
      <p className="mt-5 max-w-prose text-zinc-700 sm:text-lg">
        ClearSight empowers SAS developers to bring their ideas to life in just one week. From product idea generation to project management, we&apos;ve got you covered.
      </p>
      <Link href="/dashboard" className={buttonVariants({ size: "lg", className: "mt-4 bg-gradient-to-r from-red-400 to-red-300 ease-in-out duration-200 hover:text-black hover:shadow-xl" })}>
        Get Started <Icons.arrowRight className="ml-2 h-5 w-5" />
      </Link>
      <Email />

      {/* Example Section */}
      <div className="mx-auto w-full max-w-screen-xl px-2.5 ">
        <div className='relative isolate'>
          <div
            aria-hidden='true'
            className='pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu orveflow-hidden blur-3xl sm:-top-80'>
            <div
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
              className='relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-red-300 to-red-400 opacity-40 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]'
            />
          </div>

          <div>
            <div className='mx-auto max-w-6xl px-6 lg:px-8'>
              <div className='mt-16 flow-root sm:mt-24'>
                <div className='-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4'>
                  <Image
                    priority={true}
                    src='/dashboard-preview.png'
                    alt='product preview'
                    width={1364}
                    height={866}
                    quality={100}
                    className='rounded-md bg-white shadow-2xl ring-1 ring-gray-900/10'
                  />
                </div>
              </div>
            </div>
          </div>

          <div
            aria-hidden='true'
            className='pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80'>
            <div
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
              className='relative left-[calc(50%-13rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-red-500 to-yellow-300 opacity-30 sm:left-[calc(50%-36rem)] sm:w-[72.1875rem]'
            />
          </div>
        </div>
      </div>

      <section className="text-left">
        <div className="relative items-center w-full px-5 pt-24 mx-auto md:px-12 lg:px-16 max-w-7xl lg:py-24 ">
          <div className="max-w-xl py-12 mx-auto lg:max-w-7xl ">
            <div>
              <div className="grid grid-cols-2 gap-12 lg:grid-cols-4 lg:space-y-0 lg:text-center">
                <div>
                  <div>
                    <div className="flex items-center justify-center w-12 h-12 text-black bg-red-100 rounded-xl lg:mx-auto">
                      <Icons.brain className="h-5 w-5" />
                    </div>
                    <p className="mt-4 text-lg font-medium leading-6 text-black">
                      AI Business Plan Generation
                    </p>
                  </div>
                  <div className="mt-4 text-base text-gray-700">
                    Create, analyze, and optimize business plans effortlessly.
                  </div>
                </div>
                <div>
                  <div>
                    <div className="flex items-center justify-center w-12 h-12 text-black bg-yellow-100 rounded-xl lg:mx-auto">
                      <Icons.album className="h-5 w-5" />
                    </div>
                    <p className="mt-4 text-lg font-medium leading-6 text-black">
                      Product Building Instructions
                    </p>
                  </div>
                  <div className="mt-4 text-base text-gray-700">
                    Step-by-step guidance for building your SAAS product.
                  </div>
                </div>
                <div>
                  <div>
                    <div className="flex items-center justify-center w-12 h-12 text-black bg-teal-100 rounded-xl lg:mx-auto">
                      <Icons.blocks className="h-5 w-5" />
                    </div>
                    <p className="mt-4 text-lg font-medium leading-6 text-black">
                      Project Management Tools
                    </p>
                  </div>
                  <div className="mt-4 text-base text-gray-700">
                    Stay organized with marketing events, website analytics, and finances tracking.
                  </div>
                </div>
                <div>
                  <div>
                    <div className="flex items-center justify-center w-12 h-12 text-black bg-purple-100 rounded-xl lg:mx-auto">
                      <Icons.zap className="h-5 w-5" />
                    </div>
                    <p className="mt-4 text-lg font-medium leading-6 text-black">
                      Quick Launch Your SAAS
                    </p>
                  </div>
                  <div className="mt-4 text-base text-gray-700">
                    Launch your SAAS product in just one week with ClearSight.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="overflow-hidden text-left">
        <div className="items-center w-full px-5 py-24 mx-auto md:px-12 lg:px-16 max-w-7xl">
          <div className="grid items-start grid-cols-1 lg:grid-cols-2">
            <div className="lg:pr-24 md:pr-12">
              <h2 className="mt-6 text-3xl font-medium text-black">
                AI-Powered SAAS Development
              </h2>
              <p className="mt-5 text-base text-gray-700">
                ClearSight uses advanced AI algorithms to streamline the SAAS development process, making it faster and more efficient.
              </p>
              <ul className="grid grid-cols-2 gap-4 mt-12 list-none lg:gap-6" role="list">
                <li>
                  <div>
                    <div className="flex items-center justify-center w-12 h-12 text-black bg-red-100 rounded-xl">
                      <Icons.link className="h-5 w-5" />
                    </div>
                    <p className="mt-5 text-lg font-medium leading-6 text-black">
                      Prebuilt Integrations
                    </p>
                  </div>
                  <div className="mt-2 text-base text-gray-700">
                    Easily integrate with popular tools and services for seamless functionality.
                  </div>
                </li>
                <li>
                  <div>
                    <div className="flex items-center justify-center w-12 h-12 text-black bg-purple-100 rounded-xl">
                      <Icons.boxes className="h-5 w-5" />
                    </div>
                    <p className="mt-5 text-lg font-medium leading-6 text-black">
                      Flexible for All Stacks
                    </p>
                  </div>
                  <div className="mt-2 text-base text-gray-700">
                    ClearSight is compatible with various technology stacks, so you can use your preferred tools and languages.
                  </div>
                </li>
              </ul>
            </div>
            <div className="h-full mt-12 lg:mt-0 border-mercury-400 lg:border-l lg:pl-12">
              <div>
                <div className='mt-16 flow-root sm:mt-24'>
                  <div className='-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4'>
                    <Image
                      src='/dashboard-preview-2.png'
                      alt='product preview'
                      width={1364}
                      height={866}
                      quality={100}
                      className='rounded-md bg-white shadow-2xl ring-1 ring-gray-900/10'
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div id="pricing">
        <div className='relative isolate'>
          <div
            aria-hidden='true'
            className='pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu orveflow-hidden blur-3xl sm:-top-80'>
            <div
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
              className='relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-red-300 to-red-400 opacity-40 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]'
            />
          </div>

          <div>
            <div className='mx-auto max-w-6xl px-6 lg:px-8'>
              <div className='mt-16 flow-root sm:mt-24'>
                <div className='-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4'>
                  <Pricing />
                </div>
              </div>
            </div>
          </div>

          <div
            aria-hidden='true'
            className='pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80'>
            <div
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
              className='relative left-[calc(50%-13rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-36rem)] sm:w-[72.1875rem]'
            />
          </div>
        </div>
      </div>
    </main >
  );
}