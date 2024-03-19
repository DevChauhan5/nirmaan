"use client";

import React, { Suspense } from "react";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";
import { Button } from "../ui/button";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";

const Hero = () => {
  useGSAP(() => {
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
      {/* <Image
        src={"/svgs/hero1.svg"}
        alt='nirmaan'
        className='hidden md:flex absolute top-0 left-0 -translate-x-36 translate-y-52'
        height={600}
        width={600}
        />
        <Image
        src={"/svgs/hero2.svg"}
        alt='nirmaan'
        className='my-4 absolute top-0 right-0 translate-y-20 center translate-x-1/2 md:-translate-x-12 md:translate-y-32 w-64 h-64 md:w-[300px] md:h-[300px]'
        height={300}
        width={300}
        /> */}
      <h1
        id="hero-text"
        className="opacity-0 text-8xl mt-28 mb-4 uppercase md:text-9xl lg:text-[13rem] font-extrabold bg-clip-text text-transparent bg-[linear-gradient(to_right,theme(colors.yellow.400),theme(colors.yellow.300),theme(colors.orange.200),theme(colors.yellow.300),theme(colors.yellow.400))] bg-[length:200%_auto] animate-gradient"
      >
        NIRMAAN
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
            href="https://drive.google.com/file/d/1wdT-TDGi_CiK_UDUMVrKEs2WVyhGJ5c4/view"
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
