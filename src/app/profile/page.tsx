import { tw_presets } from "@/server/utils"
import { cn } from "@/server/utils"
// import { CreatePost } from "@/app/_components/create-post";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/app/_components/ui/tabs"
import { Icons } from "@/app/_components/icons";


import { ProfileForm } from "@/app/_components/onboarding/form-1";
import { ProfileForm2 } from "@/app/_components/onboarding/form-2";

export default function Onboarding() {
	return (
		<>
		<div className="w-full mx-auto bg-white border-b 2xl:max-w-7xl">
			<div x-data="{ open: false }" className="relative flex flex-col w-full p-5 mx-auto bg-white md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
				<div className="flex flex-row items-center justify-between lg:justify-start">
					<a className="text-lg tracking-tight text-black uppercase focus:outline-none focus:ring lg:text-2xl" href="/">
						<span className="lg:text-lg uppecase focus:ring-0">
							windstatic
						</span>
					</a>
					<button className="inline-flex items-center justify-center p-2 text-gray-400 hover:text-black focus:outline-none focus:text-black md:hidden">
					</button>
          </div>
          <nav className="flex-col items-center flex-grow hidden md:pb-0 md:flex md:justify-end md:flex-row">
            <a className="px-2 py-2 text-sm text-gray-500 lg:px-6 md:px-3 hover:text-blue-600" href="#">
              About
            </a>
            <a className="px-2 py-2 text-sm text-gray-500 lg:px-6 md:px-3 hover:text-blue-600" href="#">
              Contact
            </a>
            <div className="hidden mx-10 md:block lg:ml-auto">
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <svg className="w-5 h-5 text-gray-400" viewBox="0 0 24 24" fill="none">
                    <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                  </svg>
                </span>
                <input type="text" className="w-full py-2 pl-10 pr-4 text-black bg-white border border-gray-200 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-500 sm:text-sm rounded-xl placeholder:text-gray-400 focus:border-blue-500" placeholder="Search"/>
              </div>
            </div>
      
            <div className="inline-flex items-center gap-2 list-none">
              <button className="block px-4 py-2 mt-2 text-sm text-gray-500 md:mt-0 hover:text-blue-600 focus:outline-none focus:shadow-outline">
                Sign in
              </button>
              <button className="inline-flex items-center justify-center px-4 py-2 text-sm font-semibold text-white bg-black rounded-full group focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 hover:bg-gray-700 active:bg-gray-800 active:text-white focus-visible:outline-black">
                Sign up
              </button>
            </div>
						<div className="inline-flex items-center gap-2 list-none lg:ml-auto">
							<div className="relative flex-shrink-0 ml-5">
								<div>
									<button type="button" className="flex bg-white rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
										<span className="sr-only">
											Open user menu
										</span>
										<img className="object-cover w-8 h-8 rounded-full" src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" alt=""/>
									</button>
								</div>
			
								<div className="absolute right-0 z-10 w-48 py-1 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button">
									<a href="#" className="block px-4 py-2 text-sm text-gray-500" role="menuitem" id="user-menu-item-0">
										Your Profile
									</a>
			
									<a href="#" className="block px-4 py-2 text-sm text-gray-500" role="menuitem" id="user-menu-item-1">
										Settings
									</a>
			
									<a href="#" className="block px-4 py-2 text-sm text-gray-500" role="menuitem" id="user-menu-item-2">
										Sign out
									</a>
								</div>

							</div>
						</div>
				</nav>
        </div>
      </div>  
			<div className={cn("", tw_presets().wrapper)}>
				<div>
					
				</div>
			</div>
			</>          
	)
}
