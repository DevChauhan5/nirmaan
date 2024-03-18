"use client";

import React, { useRef } from "react";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const Hackathon = () => {
  const router = useRouter();
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    if (sectionRef.current) {
      const section = sectionRef.current;

      gsap.from(section, {
        opacity: 0,
        y: 50,
        scrollTrigger: {
          trigger: section,
          start: "top center",
          toggleActions: "play none none reverse",
        },
        duration: 1,
      });
    }
  }, []);

  return (
    <section
      ref={sectionRef}
      id="hackathon"
      className="h-fit flex flex-col md:flex-row items-center justify-center py-12 px-4 lg:px-8"
    >
      {/* Image */}
      <div className="w-full md:w-1/3">
        <Image
          src={"/images/hackathon.webp"}
          alt="Hackathon"
          className="w-full h-auto border"
          width={500}
          height={500}
        />
      </div>

      {/* Content */}
      <div className="w-full md:w-2/3 pl-0 md:pl-4">
        <h2 className="heading font-bold mb-4 gradient-text mt-6 md:mt-0">
          Hackathon
        </h2>
        <p className="text-lg cursor-default text-gray-500 mb-6">
          The Hackathon at Nirmaan is your chance to showcase your coding
          skills, creativity, and teamwork. Dive into a world of innovation,
          where you&apos;ll collaborate, ideate, and develop solutions to
          real-world challenges. Join us in this exhilarating journey and
          unleash your potential.
        </p>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row gap-4 mt-4">
          <Button className="text-lg" variant={"outline"} asChild>
            <Link href="https://drive.google.com/drive/folders/1TUH-atr7IzrqDC6SEpXt-oexAxw1Ydvu" target="_blank">
              👁 View Details
            </Link>
          </Button>
          <Button onClick={() => router.push("")} className="text-lg" asChild>
            <Link href="https://forms.gle/d4FyyGoQ7oRrAn3z7" target="_blank">
              Register Now! 🚀
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hackathon;
