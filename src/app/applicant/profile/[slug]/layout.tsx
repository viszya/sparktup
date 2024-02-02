import { Footer } from "@/app/_components/footer";
import { twp } from "@/server/utils";
import Nav from "@/app/_components/main-nav";
import { CTA } from "@/app/_components/cta";
import Loading  from "@/app/applicant/profile/[slug]/loading"
import { Suspense } from "react";

interface MarketingLayoutProps {
  children: React.ReactNode
}

export default async function MarketingLayout({
  children,
}: MarketingLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col bg-black">
        <Suspense fallback={<Loading />}>{children}</Suspense>
    </div>
  )
}
