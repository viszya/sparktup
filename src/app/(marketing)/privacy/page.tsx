import { cn } from "@/server/utils"
import { twp } from "@/server/utils"

export default function PrivacyPolicy() {
    return (
        <div className={cn(twp().wrapper, "mt-20")}>
            <div className="mx-2 sm:mx-6 md:mx-8 lg:mx-20">
                <article>
                    <div className="mt-10 text-5xl tracking-tighter text-white">
                        Privacy Policy for Sparktup
                    </div>
                    <div className="mt-4 text-white/80 text-lg">
                        This Privacy Policy outlines the ways in which Sparktup collects, uses, and safeguards personal information of users on our platform. By accessing or using Sparktup, you consent to the practices described in this Policy.
                    </div>
                </article>
                <article>
                    <div className=" mt-20 text-3xl tracking-tighter text-white">
                        1. Information Collected
                    </div>
                    <div className="mt-4 text-white/80 text-lg">
                        <div>
                            <span className="text-lg tracking-tighter text-white">a. Personal Information:</span><br />
                            We collect personal information during the account creation process, which may include names, email addresses, contact details, and other information necessary for account setup.
                        </div>
                        <div className="mt-2">
                            <span className="text-lg tracking-tighter text-white">b. Usage Information:</span><br />
                            We automatically collect data on user interactions with the platform, such as pages visited, job applications submitted, and other activities.
                        </div>
                    </div>
                </article>
                <article>
                    <div className=" mt-20 text-3xl tracking-tighter text-white">
                        2. How We Use Your Information
                    </div>
                    <div className="mt-4 text-white/80 text-lg">
                        <div>
                            <span className="text-lg tracking-tighter text-white">a. Personalization:</span><br />
                            Collected data is utilized to personalize user experiences, providing tailored content, job recommendations, and notifications.
                        </div>
                        <div className="mt-2">
                            <span className="text-lg tracking-tighter text-white">b. Communication:</span><br />
                            We may use the provided contact information to communicate with users regarding account-related updates, notifications, and promotional materials.
                        </div>
                        <div className="mt-2">
                            <span className="text-lg tracking-tighter text-white">c. Improvements:</span><br />
                            Data analysis enables us to enhance our services continually, ensuring a seamless and user-friendly experience.
                        </div>
                    </div>
                </article>
                <article>
                    <div className=" mt-20 text-3xl tracking-tighter text-white">
                        3. Information Sharing
                    </div>
                    <div className="mt-4 text-white/80 text-lg">
                        <div>
                            <span className="text-lg tracking-tighter text-white">a. Businesses and Individuals:</span><br />
                            User profiles and job applications are shared as necessary to fulfill the primary purpose of Sparktup: connecting businesses with potential candidates.
                        </div>
                        <div className="mt-2">
                            <span className="text-lg tracking-tighter text-white">b. Third Parties:</span><br />
                            We do not sell, trade, or share personal information with third parties for their promotional purposes.
                        </div>
                    </div>
                </article>
                <article>
                    <div className=" mt-20 text-3xl tracking-tighter text-white">
                        4. Data Security
                    </div>
                    <div className="mt-4 text-white/80 text-lg">
                        <div>
                            <span className="text-lg tracking-tighter text-white">a. Protection Measures:</span><br />
                            We implement industry-standard security measures to protect user data from unauthorized access, disclosure, alteration, and destruction.
                        </div>
                        <div className="mt-2">
                            <span className="text-lg tracking-tighter text-white">b. Data Retention:</span><br />
                            User data is retained for as long as necessary to fulfill the purposes outlined in this Policy, unless a longer retention period is required by law.
                        </div>
                    </div>
                </article>
                <article>
                    <div className=" mt-20 text-3xl tracking-tighter text-white">
                        5. Cookies and Tracking
                    </div>
                    <div className="mt-4 text-white/80 text-lg">
                        <div>
                            <span className="text-lg tracking-tighter text-white">a. Cookies:</span><br />
                            We use cookies to enhance user experiences, track preferences, and collect general usage information.
                        </div>
                        <div className="mt-2">
                            <span className="text-lg tracking-tighter text-white">b. Opt-Out:</span><br />
                            Users can manage cookie preferences through their browser settings.
                        </div>
                    </div>
                </article>
                <article>
                    <div className=" mt-20 text-3xl tracking-tighter text-white">
                        6. User Rights
                    </div>
                    <div className="mt-4 text-white/80 text-lg">
                        <div>
                            <span className="text-lg tracking-tighter text-white">a. Access and Correction:</span><br />
                            Users can access and edit their personal information through their account settings.
                        </div>
                        <div className="mt-2">
                            <span className="text-lg tracking-tighter text-white">b. Deletion:</span><br />
                            Users have the right to request the deletion of their accounts and associated data.
                        </div>
                    </div>
                </article>
                <article>
                    <div className=" mt-20 text-3xl tracking-tighter text-white">
                        7. Changes to Privacy Policy
                    </div>
                    <div className="mt-4 text-white/80 text-lg">
                        <div>
                            <span className="text-lg tracking-tighter text-white">a. Notification:</span><br />
                            Users will be notified of any material changes to the Privacy Policy through the platform or via email.
                        </div>
                    </div>
                </article>
                <article>
                    <div className=" mt-20 text-3xl tracking-tighter text-white">
                        8. Contact Information
                    </div>
                    <div className="mt-4 text-white/80 text-lg">
                        For any questions, concerns, or requests related to this Privacy Policy, please contact us at sparktupfbla@gmail.com.
                    </div>
                </article>
                <article>
                    <div className=" mt-20 text-3xl tracking-tighter text-white">
                        This Privacy Policy is effective as of 12/31/2025. Continued use of Sparktup signifies acceptance of this policy.
                    </div>
                </article>
            </div>
        </div>
    )
}
