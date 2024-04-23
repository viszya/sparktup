import { Footer } from "@/app/_components/footer";
import Nav from "@/app/_components/main-nav";
import { Toaster } from "@/app/_components/ui/sonner";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/app/_components/ui/dropdown-menu";
import Image from "next/image";

interface MarketingLayoutProps {
  children: React.ReactNode;
}

export default function MarketingLayout({ children }: MarketingLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col ">
      <Nav />
      {children}
      <Footer />
      <Toaster />
      {/* <DropdownMenu>
        <DropdownMenuTrigger className="sticky bottom-4 ml-auto mr-1 sm:mr-4 ">
          <Image
            alt="Bot Image"
            src="/bot-white.png"
            width={50}
            height={100}
            className="rounded-full bg-black p-2 shadow-2xl shadow-black w-[40px] sm:w-[50px] mb-2 sm:mb-0"
          />
        </DropdownMenuTrigger>

        <DropdownMenuContent className="mr-4 mb-2 mx-2 sm:mx-0 sm:w-[30rem] border-black bg-black">
          <div className="relative">
            <iframe
              src="https://www.chatbase.co/chatbot-iframe/dDmgRnfL5zdFPyWQT0-q9"
              width="100%"
              style={{ height: "100%", minHeight: "700px" }}
              frameBorder="0"
              title="My Chatbot Iframe"
            ></iframe>
            <div className="absolute bottom-0 right-40 h-10 w-48 bg-black"></div>
          </div>
        </DropdownMenuContent>
      </DropdownMenu> */}
    </div>
  );
}
