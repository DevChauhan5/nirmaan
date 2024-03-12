import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Marquee from "react-fast-marquee";

const sponsors = [
  {
    name: "Sponsor Name",
    logo: "/images/demo.jpeg",
    website: "https://google.com",
  },
  {
    name: "Sponsor Name 2",
    logo: "/images/demo.jpeg",
    website: "https://google.com",
  },
  {
    name: "Sponsor Name 3",
    logo: "/images/demo.jpeg",
    website: "https://google.com",
  },
  {
    name: "Sponsor Name 4",
    logo: "/images/demo.jpeg",
    website: "https://google.com",
  },
  {
    name: "Sponsor Name 5",
    logo: "/images/demo.jpeg",
    website: "https://google.com",
  },
  {
    name: "Sponsor Name 6",
    logo: "/images/demo.jpeg",
    website: "https://google.com",
  },
  {
    name: "Sponsor Name 7",
    logo: "/images/demo.jpeg",
    website: "https://google.com",
  },
  {
    name: "Sponsor Name 8",
    logo: "/images/demo.jpeg",
    website: "https://google.com",
  },
];

const OurSponsors = () => {
  return (
    <section id="sponsors" className="px-4 md:px-8 lg:px-16 py-16">
      <h2 className="text-5xl font-bold text-center mb-8">Our Sponsors</h2>

      <Marquee pauseOnHover  className="rounded-xl  w-full">
        {sponsors.map((sponsor) => (
          <TooltipProvider key={sponsor.name}>
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="group opacity-75 flex flex-col items-center justify-center rounded-md p-2 m-4">
                  <Link href={sponsor.website} target="_blank">
                    <Image
                      src={sponsor.logo}
                      alt={`${sponsor.name} logo`}
                      width={200}
                      height={100}
                      className="mb-4 filter grayscale group-hover:filter group-hover:grayscale-0 transition duration-300"
                    />
                  </Link>
                  <p className="text-center text-gray-600 hover:text-yellow-400">
                    {sponsor.name}
                  </p>
                </div>
              </TooltipTrigger>
              <TooltipContent className="bg-background">
                <p>Open Website</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        ))}
      </Marquee>
    </section>
  );
};

export default OurSponsors;
