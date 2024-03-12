import React from "react";
import Image from "next/image";
import { FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import Marquee from "react-fast-marquee";

const teamMembers = [
  {
    name: "Dharampal Singh",
    photo: "/images/demo.jpeg",
    role: "Lead Organizer",
    linkedin: "https://www.linkedin.com/",
  },
  {
    name: "Divyanshu Upadhyay",
    photo: "/images/demo.jpeg",
    role: "Lead Organizer",
    linkedin: "https://www.linkedin.com/",
  },
  {
    name: "Aman Krishna",
    photo: "/images/demo.jpeg",
    role: "Lead Member",
    linkedin: "https://www.linkedin.com/",
  },
  {
    name: "Manu Sharma",
    photo: "/images/demo.jpeg",
    role: "Lead Member",
    linkedin: "https://www.linkedin.com/",
  },
  {
    name: "Nisha",
    photo: "/images/demo.jpeg",
    role: "Lead Member",
    linkedin: "https://www.linkedin.com/in/",
  },
  {
    name: "Shreyansh Jain",
    photo: "/images/demo.jpeg",
    role: "Lead Member",
    linkedin: "https://www.linkedin.com/",
  },
];

const OurTeam = () => {
  return (
    <section
      id="our-team"
      className="px-4 md:px-8 py-16"
    >
      <h1 className="text-5xl font-bold text-center mb-8">Meet Our Team</h1>

      <Marquee pauseOnHover className="rounded-xl  w-full">
        {teamMembers.map((member) => (
          <div
            key={member.name}
            className="group border flex flex-col items-center justify-center rounded-md p-2 m-4"
          >
            <div className="relative overflow-hidden h-64 ">
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
        ))}
      </Marquee>
    </section>
  );
};

export default OurTeam;
