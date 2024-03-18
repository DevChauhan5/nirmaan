"use client";

import React, { Suspense } from "react";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";
import { Button } from "../ui/button";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Hero = () => {
  useGSAP(() => {
    gsap.to(".hero-text", {
      opacity: 1,
      delay: 0.5,
      ease: "power2.inOut",
    });
    gsap.fromTo(
      "#hero-text, #hero-desc",
      {
        opacity: 0,
      },
      {
        opacity: 1,
        delay: 1.5,
        stagger: 0.5,
        ease: "power2.inOut",
      }
    );
    gsap.fromTo(
      "#hero-btn1, #hero-btn2",
      {
        opacity: 0,
        y: 300,
      },
      {
        opacity: 1,
        y: 0,
        delay: 2.5,
        stagger: 0.5,
        ease: "power2.inOut",
      }
    );
  }, []);
  return (
    <section className="min-h-screen overflow-hidden mt-2 mx-4 flex flex-col justify-center items-center border-b py-12 -translate-y-4 rounded-lg relative object-contain">
      <video
        loop
        autoPlay
        muted
        className="z-[-2] absolute top-0 left-0 w-full h-full object-cover opacity-20"
      >
        <source src="/hero-vid.webm" type="video/webm" />
      </video>
      <h1
        id="hero-text"
        className="opacity-0 text-6xl mt-32 mb-4 uppercase md:text-9xl lg:text-[10rem] font-extrabold bg-clip-text text-transparent bg-[linear-gradient(to_right,theme(colors.yellow.400),theme(colors.yellow.300),theme(colors.orange.200),theme(colors.yellow.300),theme(colors.yellow.400))] bg-[length:200%_auto] animate-gradient"
      >
        NIRMAAN&#39;24
      </h1>

      <p
        id="hero-desc"
        className="opacity-0 text-xl mb-10 uppercase md:text-4xl lg:text-5xl font-extrabold bg-clip-text text-transparent bg-[linear-gradient(to_right,theme(colors.yellow.400),theme(colors.yellow.300),theme(colors.orange.200),theme(colors.yellow.300),theme(colors.yellow.400))] bg-[length:200%_auto] animate-gradient"
      >
        <TypeAnimation
          sequence={[
            "It's not just a hackathon",
            1000,
            "It's a journey of innovation",
            1000,
            "Where ideas come to life",
            1000,
            "And dreams become reality",
            1000,
            "Join us in shaping the future",
            1000,
          ]}
          speed={40}
          repeat={Infinity}
        />
      </p>
      <div className="flex flex-col md:flex-row gap-4">
        <Button
          id="hero-btn1"
          size={"lg"}
          className="text-xl opacity-0"
          asChild
        >
          <Link href={"https://forms.gle/d4FyyGoQ7oRrAn3z7"} target="_blank">
            Register Now
          </Link>
        </Button>
        <Button
          id="hero-btn2"
          size={"lg"}
          variant={"secondary"}
          className="text-xl opacity-0"
          asChild
        >
          <Link
            href="https://drive.google.com/drive/folders/1h4pbHqvO1qIeR1jl0mrpJ6FEIyGUT3Mt"
            target="_blank"
          >
            View Schedule
          </Link>
        </Button>
      </div>
    </section>
  );
};

export default Hero;
