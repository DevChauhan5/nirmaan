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

const ESports1 = () => {
  const esports1 = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    if (esports1.current) {
      const section = esports1.current;

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
      ref={esports1}
      id="esports"
      className="h-fit flex flex-col md:flex-row-reverse items-center justify-center py-12 px-4 lg:px-8"
    >
      {/* Image */}
      <div className="w-full md:w-1/3">
        <Image
          src={"/images/bgmi.webp"}
          alt="Hackathon"
          className="w-full h-auto border"
          width={500}
          height={500}
        />
      </div>

      {/* Content */}
      <div className="w-full md:w-2/3 pl-0 md:pl-4">
        <h2 className="heading font-bold mb-4 gradient-text mt-6 md:mt-0">
          BGMI
        </h2>
        <p className="text-lg text-gray-500 mb-6">
        Experience the adrenaline-fueled action of BattleGrounds Mobile India (BGMI)! Engage in intense battles, strategic maneuvers, and squad-based warfare as you fight for victory in this mobile gaming sensation.
        </p>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row gap-4 mt-4">
          <Button className="text-lg" asChild>
            <Link href="https://forms.gle/Zt2qVM4rvezhFK9b8" target="_blank">
              Register Now! 🚀
            </Link>
          </Button>
          <Button
            className="text-lg"
            variant={"outline"}
            asChild
          >
            <Link href="https://drive.google.com/drive/folders/1j6E-2nne-rLCFzZuLdTaxchfjpuKkS6C" target="_blank">
            👁 View Details
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ESports1;
