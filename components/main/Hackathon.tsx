'use client';

import React from "react";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

const Hackathon = () => {
  const router = useRouter();
  return (
    <section
      id="hackathon"
      className="h-fit flex flex-col md:flex-row items-center justify-center py-12 mx-4 lg:px-8"
    >
      {/* Image */}
      <div className="w-full md:w-1/3 p-4">
        <img
          src="https://techcommunity.microsoft.com/t5/image/serverpage/image-id/366577i4F851B60F8347ED4/image-size/original?v=v2&px=-1"
          alt="Hackathon"
          className="w-full h-auto"
        />
      </div>

      {/* Content */}
      <div className="w-full md:w-2/3 p-4">
        <h2 className="heading font-bold mb-4 gradient-text">Hackathon</h2>
        <p className="text-lg text-gray-500 mb-4">
          The Hackathon at Nirmaan is your chance to showcase your coding
          skills, creativity, and teamwork. Dive into a world of innovation,
          where you&apos;ll collaborate, ideate, and develop solutions to real-world
          challenges. Join us in this exhilarating journey and unleash your
          potential.
        </p>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row gap-4">
            <Button  onClick={()=>router.push('/')} className="text-lg" variant={"outline"}>
              👁 View Details
            </Button>
            <Button onClick={()=>router.push('/')} className="text-lg">Register</Button>
        </div>
      </div>
    </section>
  );
};

export default Hackathon;
