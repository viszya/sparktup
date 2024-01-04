"use client"

import { useState } from "react";
import { api } from "@/trpc/react";
import { Icons } from "@/app/_components/icons";
import { buttonVariants } from "@/app/_components/ui/button";
import { cn, formatDate } from "@/server/utils";
import { Input } from "@/app/_components/ui/input";
import { toast } from "sonner"


export default function AddContactInfo() {
    const [companyName, setCompanyName] = useState("");
    const [linkedInMembers, setLinkedInMembers] = useState("");
    const [logoSrc, setLogoSrc] = useState("");
    const [location, setLocation] = useState("");
    const [website, setWebsite] = useState("");
    const [industry, setIndustry] = useState("");
    const [companySize, setCompanySize] = useState("");
    const [size, setSize] = useState("");
    const [companyBannerImgSrc, setCompanyBannerImgSrc] = useState("");
    const [foundingYear, setFoundingYear] = useState("");
    const [missionValues, setMissionValues] = useState("");
    const [missionAndValues, setMissionAndValues] = useState("");
    const [about, setAbout] = useState("");
    const [solutionsOverview, setSolutionsOverview] = useState("");
    const [keyBenefits, setKeyBenefits] = useState("");
    const [keyFeatures, setKeyFeatures] = useState("");
    const [companyCulture, setCompanyCulture] = useState("");
    const [termsAndConditionsLink, setTermsAndConditionsLink] = useState("");
    const [privacyPolicyLink, setPrivacyPolicyLink] = useState("");
    const [specialties, setSpecialties] = useState([""]);
    const [mediaGallery, setMediaGallery] = useState([""]);
    const [isLoading] = useState<boolean>(false)
    const [isNextLoading, setIsNextLoading] = useState<boolean>(false)

    const company = api.test.getCompanyProfilePrivate.useQuery();

    const createCompanyProfile = api.test.createCompanyProfile.useMutation({
        onSuccess: () => {
            setIsNextLoading(false);
            toast("Success", {
                description: "Company Profile has been created at " + formatDate(Date()),
            });
        },
    });

    function onSubmit() {
        setIsNextLoading(true)
        createCompanyProfile.mutate({
            companyName: companyName,
            linkedInMembers: linkedInMembers,
            logoSrc: logoSrc,
            location: location,
            website: website,
            industry: industry,
            companySize: companySize,
            size: size,
            companyBannerImgSrc: companyBannerImgSrc,
            foundingYear: foundingYear,
            missionValues: missionValues,
            missionAndValues: missionAndValues,
            about: about,
            solutionsOverview: solutionsOverview,
            keyBenefits: keyBenefits,
            keyFeatures: keyFeatures,
            companyCulture: companyCulture,
            termsAndConditionsLink: termsAndConditionsLink,
            privacyPolicyLink: privacyPolicyLink,
            specialties: specialties,
            mediaGallery: mediaGallery,
        });
    }

    return (
        <div className="flex flex-col px-8">
            <div>
                <h2 className="text-3xl font-bold tracking-tight">Settings</h2>
                <p className="text-muted-foreground">
                    Create and edit your company profile
                </p>
            </div>
            <div className="flex flex-col justify-center w-full max-w-5xl">
                <div className="flex flex-col mt-5 p-5 border border-secondary rounded-xl">
                    <div className="flex flex-col justify-center text-center md:flex-row md:text-left">
                        <div className="flex flex-col justify-center max-w-5xl w-full  space-y-12">
                            <form
                                className="flex flex-col gap-y-9"
                                onSubmit={(e) => {
                                    e.preventDefault();
                                    onSubmit();
                                }}
                            >
                                <div className="col-span-full">
                                    <label className="block mb-3 text-sm font-medium text-primary/90">
                                        What is the Company Name?
                                    </label>
                                    <Input
                                        placeholder="Company Name"
                                        className="rounded-xl px-6 py-3 placeholder:text-primary/40 border-primary/20"
                                        type="text"
                                        required
                                        value={companyName}
                                        onChange={(e) => setCompanyName(e.target.value)}
                                    />
                                </div>
                                <div className="col-span-full">
                                    <label className="block mb-3 text-sm font-medium text-primary/90">
                                        How many LinkedIn Members?
                                    </label>
                                    <Input
                                        placeholder="LinkedIn Members"
                                        className="rounded-xl px-6 py-3 placeholder:text-primary/40 border-primary/20"
                                        type="text"
                                        required
                                        value={linkedInMembers}
                                        onChange={(e) => setLinkedInMembers(e.target.value)}
                                    />
                                </div>
                                <div className="col-span-full">
                                    <label className="block mb-3 text-sm font-medium text-primary/90">
                                        Company Logo
                                    </label>
                                    <Input
                                        placeholder="Company Logo"
                                        className="rounded-xl px-6 py-3 placeholder:text-primary/40 border-primary/20"
                                        type="text"
                                        required
                                        value={logoSrc}
                                        onChange={(e) => setLogoSrc(e.target.value)}
                                    />
                                </div>
                                <div className="col-span-full">
                                    <label className="block mb-3 text-sm font-medium text-primary/90">
                                        Location
                                    </label>
                                    <Input
                                        placeholder="Location"
                                        className="rounded-xl px-6 py-3 placeholder:text-primary/40 border-primary/20"
                                        type="text"
                                        required
                                        value={location}
                                        onChange={(e) => setLocation(e.target.value)}
                                    />
                                </div>
                                <div className="col-span-full">
                                    <label className="block mb-3 text-sm font-medium text-primary/90">
                                        Website
                                    </label>
                                    <Input
                                        placeholder="Website"
                                        className="rounded-xl px-6 py-3 placeholder:text-primary/40 border-primary/20"
                                        type="text"
                                        required
                                        value={website}
                                        onChange={(e) => setWebsite(e.target.value)}
                                    />
                                </div>

                                <div className="col-span-full">
                                    <label className="block mb-3 text-sm font-medium text-primary/90">
                                        Industry
                                    </label>
                                    <Input
                                        placeholder="Industry"
                                        className="rounded-xl px-6 py-3 placeholder:text-primary/40 border-primary/20"
                                        type="text"
                                        required
                                        value={industry}
                                        onChange={(e) => setIndustry(e.target.value)}
                                    />
                                </div>

                                <div className="col-span-full">
                                    <label className="block mb-3 text-sm font-medium text-primary/90">
                                        Company Size
                                    </label>
                                    <Input
                                        placeholder="Company Size"
                                        className="rounded-xl px-6 py-3 placeholder:text-primary/40 border-primary/20"
                                        type="text"
                                        required
                                        value={companySize}
                                        onChange={(e) => setCompanySize(e.target.value)}
                                    />
                                </div>

                                <div className="col-span-full">
                                    <label className="block mb-3 text-sm font-medium text-primary/90">
                                        Size
                                    </label>
                                    <Input
                                        placeholder="Size"
                                        className="rounded-xl px-6 py-3 placeholder:text-primary/40 border-primary/20"
                                        type="text"
                                        required
                                        value={size}
                                        onChange={(e) => setSize(e.target.value)}
                                    />

                                </div>

                                <div className="col-span-full">
                                    <label className="block mb-3 text-sm font-medium text-primary/90">
                                        Company Banner Image
                                    </label>
                                    <Input
                                        placeholder="Company Banner Image"
                                        className="rounded-xl px-6 py-3 placeholder:text-primary/40 border-primary/20"
                                        type="text"
                                        required
                                        value={companyBannerImgSrc}
                                        onChange={(e) => setCompanyBannerImgSrc(e.target.value)}
                                    />
                                </div>

                                <div className="col-span-full">
                                    <label className="block mb-3 text-sm font-medium text-primary/90">
                                        Founding Year
                                    </label>
                                    <Input
                                        placeholder="Founding Year"
                                        className="rounded-xl px-6 py-3 placeholder:text-primary/40 border-primary/20"
                                        type="text"
                                        required
                                        value={foundingYear}
                                        onChange={(e) => setFoundingYear(e.target.value)}
                                    />

                                </div>

                                <div className="col-span-full">
                                    <label className="block mb-3 text-sm font-medium text-primary/90">
                                        Mission Values
                                    </label>
                                    <Input
                                        placeholder="Mission Values"
                                        className="rounded-xl px-6 py-3 placeholder:text-primary/40 border-primary/20"
                                        type="text"
                                        required
                                        value={missionValues}
                                        onChange={(e) => setMissionValues(e.target.value)}
                                    />
                                </div>

                                <div className="col-span-full">
                                    <label className="block mb-3 text-sm font-medium text-primary/90">
                                        Mission and Values
                                    </label>
                                    <Input
                                        placeholder="Mission and Values"
                                        className="rounded-xl px-6 py-3 placeholder:text-primary/40 border-primary/20"
                                        type="text"
                                        required
                                        value={missionAndValues}
                                        onChange={(e) => setMissionAndValues(e.target.value)}
                                    />
                                </div>

                                <div className="col-span-full">
                                    <label className="block mb-3 text-sm font-medium text-primary/90">
                                        About
                                    </label>
                                    <Input
                                        placeholder="About"
                                        className="rounded-xl px-6 py-3 placeholder:text-primary/40 border-primary/20"
                                        type="text"
                                        required
                                        value={about}
                                        onChange={(e) => setAbout(e.target.value)}
                                    />
                                </div>

                                <div className="col-span-full">
                                    <label className="block mb-3 text-sm font-medium text-primary/90">
                                        Solutions Overview
                                    </label>
                                    <Input
                                        placeholder="Solutions Overview"
                                        className="rounded-xl px-6 py-3 placeholder:text-primary/40 border-primary/20"
                                        type="text"
                                        required
                                        value={solutionsOverview}
                                        onChange={(e) => setSolutionsOverview(e.target.value)}
                                    />
                                </div>

                                <div className="col-span-full">
                                    <label className="block mb-3 text-sm font-medium text-primary/90">Key Benefits</label>
                                    <Input
                                        placeholder="Key Benefits"
                                        className="rounded-xl px-6 py-3 placeholder:text-primary/40 border-primary/20"
                                        type="text"
                                        required
                                        value={keyBenefits}
                                        onChange={(e) => setKeyBenefits(e.target.value)}
                                    />
                                </div>

                                <div className="col-span-full">
                                    <label className="block mb-3 text-sm font-medium text-primary/90">Key Features</label>
                                    <Input
                                        placeholder="Key Features"
                                        className="rounded-xl px-6 py-3 placeholder:text-primary/40 border-primary/20"
                                        type="text"
                                        required
                                        value={keyFeatures}
                                        onChange={(e) => setKeyFeatures(e.target.value)}
                                    />
                                </div>

                                <div className="col-span-full">
                                    <label className="block mb-3 text-sm font-medium text-primary/90">Company Culture</label>
                                    <Input
                                        placeholder="Company Culture"
                                        className="rounded-xl px-6 py-3 placeholder:text-primary/40 border-primary/20"
                                        type="text"
                                        required
                                        value={companyCulture}
                                        onChange={(e) => setCompanyCulture(e.target.value)}
                                    />
                                </div>

                                <div className="col-span-full">
                                    <label className="block mb-3 text-sm font-medium text-primary/90">Terms and Conditions Link</label>
                                    <Input
                                        placeholder="Terms and Conditions Link"
                                        className="rounded-xl px-6 py-3 placeholder:text-primary/40 border-primary/20"
                                        type="text"
                                        required
                                        value={termsAndConditionsLink}
                                        onChange={(e) => setTermsAndConditionsLink(e.target.value)}
                                    />
                                </div>

                                <div className="col-span-full">
                                    <label className="block mb-3 text-sm font-medium text-primary/90">Privacy Policy Link</label>
                                    <Input
                                        placeholder="Privacy Policy Link"
                                        className="rounded-xl px-6 py-3 placeholder:text-primary/40 border-primary/20"
                                        type="text"
                                        required
                                        value={privacyPolicyLink}
                                        onChange={(e) => setPrivacyPolicyLink(e.target.value)}
                                    />
                                </div>

                                <div className="col-span-full">
                                    <label className="block mb-3 text-sm font-medium text-primary/90">Specialties</label>
                                    <Input
                                        placeholder="Specialties"
                                        className="rounded-xl px-6 py-3 placeholder:text-primary/40 border-primary/20"
                                        type="text"
                                        required
                                        value={specialties}
                                        onChange={(e) => setSpecialties(e.target.value)}
                                    />
                                </div>

                                <div className="col-span-full">
                                    <label className="block mb-3 text-sm font-medium text-primary/90">Media Gallery</label>
                                    <Input
                                        placeholder="Media Gallery"
                                        className="rounded-xl px-6 py-3 placeholder:text-primary/40 border-primary/20"
                                        type="text"
                                        required
                                        value={mediaGallery}
                                        onChange={(e) => setMediaGallery(e.target.value)}
                                    />
                                </div>


                                <div className="col-span-full">
                                    <button
                                        type="submit"
                                        className={cn(buttonVariants({ variant: "outline" }), "max-w-60 w-60 items-center justify-center px-6 py-2.5 text-center text-secondary duration-200 bg-primary border-2 border-primary rounded-xl inline-flex hover:bg-transparent hover:border-primary hover:text-primary focus:outline-none focus-visible:outline-primary text-sm focus-visible:ring-primary")}
                                        disabled={isLoading || isNextLoading}
                                    >
                                        {isNextLoading ? (
                                            <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                                        ) : (<></>
                                        )}{" "}
                                        Update Account
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}
