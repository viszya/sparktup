import { tw_presets } from "@/server/utils"
import { cn } from "@/server/utils"
// import { CreatePost } from "@/app/_components/create-post";

import {ProfileForm} from "@/app/_components/onboarding/form-1";

export default function Onboarding() {
	return (
		<div>
			<ProfileForm />

			<section>
				<div className="items-center px-8 py-12 mx-auto max-w-7xl lg:px-16 md:px-12 lg:py-24">
					<div className="justify-center w-full mx-auto">

						<nav className="flex justify-center mx-auto " aria-label="Breadcrumb">
							<ol role="list" className="flex items-center space-x-4">

								<li>
									<div className="flex items-center">

										<a href="#" className="px-3 py-0.5 text-sm border font-medium text-gray-500 duration-200 rounded-full bg-gray-50 hover:text-gray-700 hover:scale-95">Parent</a>
									</div>
								</li><li>
									<div className="flex items-center">
										<a href="#" className="ml-4 text-sm font-medium text-gray-500 hover:scale-95 hover:bg-gray-50 rounded-full px-3 py-0.5 hover:text-gray-700">Parent</a>
									</div>
								</li><li>
									<div className="flex items-center">

										<a href="#" className="ml-4 text-sm font-medium text-gray-500 hover:scale-95 hover:bg-gray-50 rounded-full px-3 py-0.5 hover:text-gray-700">Parent</a>
									</div>
								</li>
								<li>
									<div className="flex items-center">
										<a href="#" className="ml-4 text-sm font-medium text-blue-500 rounded-full px-3 py-0.5 hover:bg-gray-50 hover:scale-95 hover:text-gray-700" aria-current="page">Current</a>
									</div>
								</li>
							</ol>
						</nav>
					</div>

				</div></section>


		</div>
	)
}
