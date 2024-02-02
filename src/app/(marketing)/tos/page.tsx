import { cn } from "@/server/utils";
import { twp } from "@/server/utils";

export default function TermsOfService() {
	return (
		<div className={cn(twp().wrapper, "mt-8 sm:mt-20")}>
			<div className="mx-4 sm:mx-6 md:mx-8 lg:mx-20">
				<article>
					<div className="mt-0 sm:mt-10 text-5xl tracking-tighter text-white">
						Terms of Service for Sparktup
					</div>
					<div className="mt-4 text-white/80 text-lg">
						<p>
							<span className="text-lg tracking-tighter text-white">1. Acceptance of Terms:</span>
							<br />
							By accessing or using the services provided by Sparktup, you agree
							to comply with and be bound by these Terms of Service. If you do
							not agree with these Terms, please refrain from using our services.
						</p>
					</div>
				</article>
				<article>
					<div className="mt-20 text-3xl tracking-tighter text-white">
						2. User Eligibility
					</div>
					<div className="mt-4 text-white/80 text-lg">
						<p>
							<span className="text-lg tracking-tighter text-white">a. Account Creation:</span>
							<br />
							Users are required to create an account to access certain features
							of Sparktup.
						</p>
						<p>
							<span className="text-lg tracking-tighter text-white">b. Account Information:</span>
							<br />
							You are responsible for providing accurate and updated information
							during account creation.
						</p>
						<p>
							<span className="text-lg tracking-tighter text-white">c. Account Security:</span>
							<br />
							Keep your account credentials secure. Notify us immediately of any
							unauthorized use.
						</p>
					</div>
				</article>
				<article>
					<div className="mt-20 text-3xl tracking-tighter text-white">
						3. Use of Services
					</div>
					<div className="mt-4 text-white/80 text-lg">
						<p>
							<span className="text-lg tracking-tighter text-white">a. Lawful Use:</span>
							<br />
							Users agree to use Sparktup for lawful purposes only, complying
							with all applicable laws and regulations.
						</p>
						<p>
							<span className="text-lg tracking-tighter text-white">b. Prohibited Activities:</span>
							<br />
							Users must not engage in activities that violate these Terms,
							infringe on intellectual property rights, or harm the platform&apos;s
							functionality.
						</p>
					</div>
				</article>

				<article>
					<div className="mt-20 text-3xl tracking-tighter text-white">
						4. Privacy
					</div>
					<div className="mt-4 text-white/80 text-lg">
						<p>
							<span className="text-lg tracking-tighter text-white">Our Privacy Policy governs the collection, use, and disclosure of user information. By using Sparktup, you consent to our privacy practices outlined in the Privacy Policy.</span>
						</p>
					</div>
				</article>

				<article>
					<div className="mt-20 text-3xl tracking-tighter text-white">
						5. Intellectual Property
					</div>
					<div className="mt-4 text-white/80 text-lg">
						<p>
							<span className="text-lg tracking-tighter text-white">a. Ownership:</span>
							<br />
							Sparktup retains ownership of all intellectual property associated with the platform.
						</p>
						<p>
							<span className="text-lg tracking-tighter text-white">b. User Content:</span>
							<br />
							By submitting content to Sparktup, users grant us a non-exclusive, worldwide, royalty-free license to use, reproduce, and distribute the content.
						</p>
					</div>
				</article>

				<article>
					<div className="mt-20 text-3xl tracking-tighter text-white">
						6. Termination
					</div>
					<div className="mt-4 text-white/80 text-lg">
						<p>
							We reserve the right to terminate or suspend user accounts for violations of these Terms or for any reason at our discretion
						</p>
					</div>
				</article>

				<article>
					<div className="mt-20 text-3xl tracking-tighter text-white">
						7. Disclaimer of Warranties
					</div>
					<div className="mt-4 text-white/80 text-lg">
						<p>
							Sparktup is provided &quot;as is&quot; and &quot;as available.&quot; We make no warranties, express or implied, regarding the platform&apos;s reliability, accuracy, or availability.
						</p>
					</div>
				</article>

				<article>
					<div className="mt-20 text-3xl tracking-tighter text-white">
						8. Limitation of Liability
					</div>
					<div className="mt-4 text-white/80 text-lg">
						<p>
							We are not liable for any direct, indirect, incidental, special, or consequential damages resulting from your use of Sparktup.
						</p>
					</div>
				</article>

				<article>
					<div className="mt-20 text-3xl tracking-tighter text-white">
						9. Governing Law
					</div>
					<div className="mt-4 text-white/80 text-lg">
						<p>
							These Terms are governed by the laws of the United States. Any legal action or proceeding related to Sparktup shall be brought exclusively in the courts of Washington.
						</p>
					</div>
				</article>

				<article>
					<div className="mt-20 text-3xl tracking-tighter text-white">
						10. Changes to Terms
					</div>
					<div className="mt-4 text-white/80 text-lg">
						<p>
							We reserve the right to modify or revise these Terms at any time. Users will be notified of material changes, and continued use of Sparktup indicates acceptance of the updated Terms.
						</p>
					</div>
				</article>

				<article>
					<div className="mt-20 text-3xl tracking-tighter text-white">
						11. Contact Information
					</div>
					<div className="mt-4 text-white/80 text-lg">
						<p>
							For any questions or concerns related to these Terms of Service, please contact us at sparktupfbla@gmail.com.
						</p>
					</div>
				</article>

				<article>
					<div className="mt-20 text-3xl tracking-tighter text-white">
						These Terms of Service are effective as of 12/31/2025. Continued use of Sparktup signifies acceptance of these terms.
					</div>
				</article>
			</div>
		</div>
	);
}
