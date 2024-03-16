'use client';

import React from "react";
import Image from "next/image";
import { FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { teamMembers } from "@/constants";
import Autoplay from "embla-carousel-autoplay"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const OurTeam = () => {
  return (
    <section
      id="our-team"
      className="px-4 md:px-8 py-16"
    >
      <h1 className="heading gradient-text mb-8">Meet Our Team</h1>
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full mt-6"
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
      >
        <CarouselContent>
            {teamMembers.map((member, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
          <div
            key={member.name}
            className="group border flex flex-col items-center justify-center rounded-md p-2 m-4"
          >
            <div className="relative overflow-hidden h-64">
              <Image
                src={member.photo}
                alt={`${member.name} - ${member.role}`}
                width={350}
                height={350}
                className="filter grayscale group-hover:filter group-hover:grayscale-0  rounded-full transition duration-300"
              />
            </div>
            <div className="mt-4 text-center flex flex-col items-center justify-center">
              <h3 className="text-2xl font-bold text-gray-400 hover:text-primary">
                {member.name}
              </h3>
              {member.role === "Lead Organizer" ? (
                <Badge>{member.role}</Badge>
              ) : (
                <Badge variant={"secondary"}>{member.role}</Badge>
              )}

              <Link
                href={member.linkedin}
                target="_blank"
                className="inline-flex gap-2 text-md items-center my-2 text-gray-700 hover:text-blue-600"
              >
                <FaLinkedin className="" />
                LinkedIn
              </Link>
            </div>
          </div>
          </CarouselItem>
        ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
};

export default OurTeam;
