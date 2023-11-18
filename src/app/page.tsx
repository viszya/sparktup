import Link from "next/link";
import { cn } from "@/server/utils";
import { twp } from "@/server/utils";
import { Icons } from "@/app/_components/icons";
import { buttonVariants } from "@/app/_components/ui/button";
import { Pricing } from "@/app/_components/pricing";
import Image from "next/image"
import { Email } from "@/app/_components/email";
import { getServerAuthSession } from "@/server/auth";
import { redirect } from "next/navigation";
import { Button } from "@react-email/components";

export default async function Home() {
  const session = getServerAuthSession();

  return (
    <>
      {await session ? redirect("/onboarding") : (
        <main className={cn("mb-12 mt-28 sm:mt-20 flex flex-col items-center justify-center text-center", twp().wrapper)}>

          {/* Hero Section */}
          <h1 className="max-w-4xl text-5xl mb-2 mt-10 font-semibold md:text-6xl text-black lg:text:7xl">
            Ignite Your Tech Career!
          </h1>
          <p className="mt-5 max-w-prose mb-2 text-zinc-700 sm:text-lg">
            Spark your tech career with ease and growth. Join Sparktup!
          </p>
          <div className="flex flex-row mt-4">
            <Link href="/dashboard" className={buttonVariants({ size: "lg", className: "mr-5 bg-black ease-in-out duration-200 hover:text-white hover:bg-black hover:shadow-xl" })}>
              Get Started <Icons.arrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link href="/dashboard" className={buttonVariants({ variant: "heroButton2", size: "lg", className: 'ml-5 mx-auto mb-4 flex max-w-fit items-center justify-center space-x-2 overflow-hidden text-black rounded-full border border-black bg-white ease-in-out px-7 py-2 shadow-md backdrop-blur transition-all hover:bg-white hover:shadow-xl hover:border-red-400 hover:text-red-300' })}>
              About Us <Icons.arrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>

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

          {/* Features */}

          <section>
            
            <div className="relative items-center w-full px-5 py-24 mx-auto md:px-12 lg:px-16 max-w-7xl border-1 mt-11 rounded-2xl ">
              <div className="w-full mx-auto text-left">
                <div className="relative flex-col items-center m-auto align-middle">
                  <div className="items-center gap-12 text-left lg:gap-24 lg:inline-flex">
                    <div className="order-first block w-full mt-12 aspect-square lg:mt-0">
                      <img className="object-cover object-center w-full mx-auto bg-white border-2 border-red-300 border lg:ml-auto" alt="features_img" src="/network3.png" />
                    </div>
                    <div className="flex flex-col mt-6 lg:mt-0">
                      <div className="max-w-xl">
                        <div>
                          <p className="text-2xl font-medium tracking-tight text-black sm:text-4xl">
                            Features
                          </p>
                        </div>
                      </div>
                      <div className="mx-auto mt-6 lg:max-w-7xl">
                        <ul role="list" className="grid grid-cols-2 gap-4 list-none lg:grid-cols-1 lg:gap-3">
                          <li>
                            <div>
                              <p className="mt-5 text-lg font-medium leading-6 text-black">
                                Smart Connections
                              </p>
                              
                            </div>
                            <div className="mt-2 text-base text-gray-500">
                              Instantly connect with top tech talent or exciting job opportunities, driven by our intelligent matchmaking system.
                            </div>
                          </li>
                          <li>
                            <div>
                              <p className="mt-5 text-lg font-medium leading-6 text-black">
                                Personalized Matches
                              </p>
                            </div>
                            <div className="mt-2 text-base text-gray-500">
                              Tailored algorithms ensure businesses find ideal candidates, and individuals discover opportunities aligned with their skills and aspirations.
                            </div>
                          </li>
                          <li>
                            <div>
                              <p className="mt-5 text-lg font-medium leading-6 text-black">
                                Effortless Experience
                              </p>
                            </div>
                            <div className="mt-2 text-base text-gray-500">
                              Streamlined platform navigation for businesses to post jobs seamlessly and individuals to apply with just a few clicks.
                            </div>
                          </li>
                          <li>
                            <div>
                              <p className="mt-5 text-lg font-medium leading-6 text-black">
                                Vibrant Tech Ecosystem
                              </p>
                            </div>

                            <div className="mt-2 text-base text-gray-500">
                              Join a collaborative community fostering innovation and growth, connecting businesses and individuals in the dynamic world of tech.
                            </div>

                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  {/* <div>
                    <div>
                      <div className="py-12 mx-auto lg:py-16">
                        <div className="mt-6 grid grid-cols-2 gap-0.5 md:grid-cols-6 lg:mt-8">
                          <div className="flex justify-center col-span-1 px-8">
                            <img className="max-h-12" src="../images/logos/1.svg" alt="logo">
                          </div>
                          <div className="flex justify-center col-span-1 px-8">
                            <img className="max-h-12" src="../images/logos/2.svg" alt="logo">
                          </div>
                          <div className="flex justify-center col-span-1 px-8">
                            <img className="max-h-12" src="../images/logos/3.svg" alt="logo">
                          </div>
                          <div className="flex justify-center col-span-1 px-8">
                            <img className="max-h-12" src="../images/logos/4.svg" alt="logo">
                          </div>
                          <div className="flex justify-center col-span-1 px-8">
                            <img className="max-h-12" src="../images/logos/5.svg" alt="logo">
                          </div>
                          <div className="flex justify-center col-span-1 px-8">
                            <img className="max-h-12" src="../images/logos/6.svg" alt="logo">
                          </div>
                        </div>
                      </div>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </section>


          {/* About Us */}
          <div className="sm:flex items-center max-w-screen-xl">
            <div className="sm:w-1/2 p-10">
              <div className="image object-center text-center">
                <img src="dashboard-preview.png"></img>
              </div>
            </div>
            <div className="sm:w-1/2 p-5">
              <div className="text">
                <span className="text-gray-500 border-b-2 border-red-400 uppercase">About us</span>
                <h2 className="my-4 font-bold text-3xl  sm:text-4xl ">Igniting Tech Futures at <span className="text-red-400">Sparktup</span>
                </h2>
                <p className="text-gray-700">
                  At Sparktup, we are passionate about catalyzing growth and innovation in the dynamic world of technology. Born from a collective vision of connecting businesses with top-tier tech talent and empowering individuals to spark their careers, Sparktup is more than a platform—it's a vibrant community.
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}

          <section className="max-w-4xl text-5xl mb-2 mt-10 font-semibold md:text-6xl text-black lg:text:7xl">
            <div className="max-w-4xl text-5xl mb-2 mt-10 justify-center font-semibold md:text-6xl text-black lg:text:7xl">
              <div className="max-w-xl mx-auto text-center lg:p-10">
                <div>
                  <p className="text-2xl font-medium tracking-tight text-black sm:text-4xl">
                    Ready to Ignite Your Tech Journey? Join Sparktup Today!
                  </p>
                </div>
                <div className="flex flex-col items-center justify-center mt-10">
                  <Link
                    className={buttonVariants({
                      variant: "heroButton2",
                      size: "lg",
                      className:
                        'mx-auto mb-4 flex max-w-fit items-center justify-center space-x-2 overflow-hidden flex flex-colum text-black rounded-full border border-red-400 bg-white ease-in-out px-7 py-2 shadow-md backdrop-blur transition-all hover:border-red-400 hover:bg-gradient-to-r hover:from-red-400 hover:to-red-300 hover:shadow-xl  hover:text-white'
                    })}
                    href="amazon.com"
                  >
                    SignUp Now!
                  </Link>
                </div>
              </div>
            </div>
          </section>


          {/* Example Section
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
              <Email />

              {/* Example Section */}
          {/* <div className="mx-auto w-full max-w-screen-xl px-2.5 ">
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
                        Launch your SAAS product in just one week with SparktUp.
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
                    SparktUp uses advanced AI algorithms to streamline the SAAS development process, making it faster and more efficient.
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
                        SparktUp is compatible with various technology stacks, so you can use your preferred tools and languages.
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
          </div> */}
        </main>
      )}
    </>
  );
}