"use client";

import React from "react";
import Image from "next/image";
import { FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { advisors, coreteam, scteam } from "@/constants";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Separator } from "../ui/separator";

const OurTeam = () => {
  return (
    <section id="our-team" className="px-4 md:px-8 py-16">
      <h1 className="heading gradient-text mb-8">Meet Our Team</h1>
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full mt-6 px-5"
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
      >
        <CarouselContent>
          {scteam.map((member, index) => (
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
                    className="filter grayscale group-hover:filter group-hover:grayscale-0 w-auto h-auto rounded-full transition duration-300"
                  />
                </div>
                <div className="mt-4 text-center flex flex-col items-center justify-center">
                  <h3 className="text-2xl cursor-default font-bold tracking-wide bg-clip-text hover:text-transparent bg-[linear-gradient(to_right,theme(colors.yellow.400),theme(colors.yellow.300),theme(colors.orange.200),theme(colors.yellow.300),theme(colors.yellow.400))] bg-[length:200%_auto] hover:animate-gradient">
                    {member.name}
                  </h3>
                  {member.role === "Chair - Students' Council" ? (
                    <Badge className="tracking-wide cursor-default">{member.role}</Badge>
                  ) : (
                    <Badge variant={"secondary"} className="tracking-wide cursor-default">{member.role}</Badge>
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
        <CarouselPrevious className="flex md:hidden mx-9"/>
      <CarouselNext  className="flex md:hidden mx-9"/>
      </Carousel>
      {/* <Separator className="my-4 bg-primary" /> */}
      {/*  <Carousel
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
          {advisors.map((member, index) => (
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

                  {/* <Link
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
      </Carousel>*/}
      <Separator className="my-4 bg-primary" />
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full mt-6 px-5"
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
      >
        <CarouselContent>
          {coreteam.map((member, index) => (
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
                    className="filter grayscale group-hover:filter group-hover:grayscale-0 w-auto h-auto rounded-full transition duration-300"
                  />
                </div>
                <div className="mt-4 text-center flex flex-col items-center justify-center">
                  <h3 className="text-2xl cursor-default font-bold tracking-wide bg-clip-text hover:text-transparent bg-[linear-gradient(to_right,theme(colors.yellow.400),theme(colors.yellow.300),theme(colors.orange.200),theme(colors.yellow.300),theme(colors.yellow.400))] bg-[length:200%_auto] hover:animate-gradient">
                    {member.name}
                  </h3>
                  {member.role === "Lead Organizer" ? (
                    <Badge className="cursor-default">{member.role}</Badge>
                  ) : (
                    <Badge variant={"secondary"} className="cursor-default">{member.role}</Badge>
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
        <CarouselPrevious className="mx-9"/>
      <CarouselNext  className="mx-9"/>
      </Carousel>
    </section>
  );
};

export default OurTeam;
