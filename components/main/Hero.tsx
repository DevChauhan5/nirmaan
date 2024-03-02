"use client"

import React, { Suspense } from "react";
import Marquee from "react-fast-marquee";
import { FiArrowUpRight } from "react-icons/fi";
import Link from "next/link";
import { TypeAnimation } from 'react-type-animation';
import gsap from "gsap";
import { Button } from "../ui/button";


const Hero = () => {
  return (
      <section className="min-h-screen mt-2 mx-4 flex flex-col justify-center items-center border-b py-12 -translate-y-4 rounded-lg relative object-contain">
        <video loop autoPlay muted className="z-[-2] absolute top-0 left-0 w-full h-full object-cover opacity-20">
          <source src="/hero-vid.webm" type="video/webm" />
        </video>

        <h1 className="text-6xl mt-32 mb-4 uppercase md:text-9xl lg:text-[10rem] font-extrabold bg-clip-text text-transparent bg-[linear-gradient(to_right,theme(colors.yellow.400),theme(colors.yellow.300),theme(colors.orange.200),theme(colors.yellow.300),theme(colors.yellow.400))] bg-[length:200%_auto] animate-gradient">NIRMAAN&#39;24</h1>
        <Suspense fallback={<div>Loading...</div>}>
        <p className="text-xl mb-10 uppercase md:text-4xl lg:text-5xl font-extrabold bg-clip-text text-transparent bg-[linear-gradient(to_right,theme(colors.yellow.400),theme(colors.yellow.300),theme(colors.orange.200),theme(colors.yellow.300),theme(colors.yellow.400))] bg-[length:200%_auto] animate-gradient">
        <TypeAnimation
              sequence={[
                'It\'s not just a hackathon',
                1000,
                'It\'s a journey of innovation',
                1000,
                'Where ideas come to life',
                1000,
                'And dreams become reality',
                1000,
                'Join us in shaping the future',
                1000
            ]}
              speed={40}
              repeat={Infinity}
            />
        </p>
        </Suspense>
        <div className="flex flex-col md:flex-row gap-4">
          <Button size={'lg'} className="text-xl" asChild>
            <Link href={'/register'}>Register Now</Link>
          </Button>
          <Button size={'lg'} variant={'secondary'} className="text-xl">
            Learn More
          </Button>
        </div>
    </section>
  );
};

export default Hero;
