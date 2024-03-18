import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const Footer = () => {
  return (
    <footer className="py-12  flex flex-col gap-4">
      <div className="container mx-auto px-4 lg:px-8 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 mb-4">
        {/* First Section */}
        <section className="w-full h-fit lg:w-1/3 flex flex-col lg:border-r lg:px-2 items-start justify-between space-y-4">
          <h2 className="text-3xl font-bold cursor-default">
            JoinUs @{" "}
            <Link
              href={"/"}
              className="font-extrabold bg-clip-text text-transparent bg-[linear-gradient(to_right,theme(colors.yellow.400),theme(colors.yellow.300),theme(colors.orange.200),theme(colors.yellow.300),theme(colors.yellow.400))] bg-[length:200%_auto] animate-gradient"
            >
              Nirmaan&apos;24
            </Link>
            🎯
          </h2>
          <p className="text-md text-gray-400">
            Inspire innovation with us as we pave the way for the creators and
            thinkers of tomorrow.
          </p>
          <div className="flex flex-col items-start justify-center">
            <p className="mt-4 flex gap-1 items-center cursor-default justify-center text-xl font-bold">
              <Avatar>
                <AvatarImage src="/images/logo-pu.jpeg" alt="pu" />
                <AvatarFallback>PU</AvatarFallback>
              </Avatar>
              Poornima University
            </p>
            <p className="text-md text-start text-gray-400 mt-2">
              Ramchandrapura, Vidhani Vatika Road Sitapura, Rajasthan
            </p>
          </div>
          <Link
            href={"https://www.poornima.edu.in/"}
            target="_blank"
            className="flex items-center justify-center gap-2 text-md hover:text-yellow-400 transition duration-300"
          >
            Visit Website <MdArrowOutward className="" />
          </Link>
        </section>

        {/* Second Section */}
        <section className="w-full h-fit lg:w-1/3 mt-8 lg:mt-0 space-y-3 flex flex-col items-start lg:items-center justify-between lg:border-r">
          <h2 className="text-3xl font-bold cursor-default">Quick Links 🚀</h2>
          <Link
            href="/"
            className="text-lg text-gray-400 hover:text-yellow-400 transition duration-300"
          >
            About
          </Link>
          <Link
            href="/#hackathon"
            className="text-lg text-gray-400 hover:text-yellow-400 transition duration-300"
          >
            Hackathon
          </Link>
          <Link
            href="/#themes"
            className="text-lg text-gray-400 hover:text-yellow-400 transition duration-300"
          >
            Themes
          </Link>
          <Link
            href="/#esports"
            className="text-lg text-gray-400 hover:text-yellow-400 transition duration-300"
          >
            E-Sports
          </Link>
          <Link
            href="/#faq"
            className="text-lg text-gray-400 hover:text-yellow-400 transition duration-300"
          >
            FAQ
          </Link>
        </section>

        {/* Third Section */}
        <section className="w-full h-fit lg:w-1/3 mt-8 lg:mt-0 flex flex-col items-start lg:items-center  justify-between">
          <h2 className="text-3xl font-bold">Find Us 📍🗺️</h2>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <div className="flex lg:flex-col mt-8">
                  <Link
                    target="_blank"
                    href="https://maps.app.goo.gl/1LgKCwh2ggDLvkWS6"
                  >
                    <Image
                      src="/images/map.webp"
                      alt="Click to view map"
                      className="border border-primary rounded-xl lg:w-[300px]"
                      width={400}
                      height={400}
                    />
                  </Link>
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p>Click to Open Maps</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </section>
      </div>
      <Separator />
      {/* Final Section */}
      <section className="w-full flex flex-col lg:flex-row items-start lg:items-center justify-center gap-4 px-4 lg:px-8 mt-6">
        <p className="text-lg lg:text-xl text-gray-400">
          © Copyright 2024 Poornima University. All rights reserved.
        </p>
      </section>
    </footer>
  );
};

export default Footer;
