"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Image from "next/image";
import React, { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const textRef = useRef<HTMLParagraphElement | null>(null);
  const aboutsec = useRef<HTMLDivElement | null>(null);
  useGSAP(() => {
    gsap.to("#about-img", {
      opacity: 1,
      delay: 0.5,
      ease: "power2.inOut",
      duration: 1,
    });
    gsap.to("#about", {
      scrollTrigger: {
        trigger: "#about",
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
      opacity: 1,
      y: 0,
      ease: "power2.inOut",
      duration: 1,
      delay: 1.5,
    });
    if (textRef.current) {
      const words = textRef.current.innerText.split(" ");
      textRef.current.innerText = "";
      words.forEach((word) => {
        const span = document.createElement("span");
        span.innerText = `${word} `;
        span.style.opacity = "0";
        textRef.current?.appendChild(span);
      });

      gsap.to(Array.from(textRef.current.children), {
        opacity: 1,
        y: 0,
        stagger: 0.1,
        ease: "power2.inOut",
        delay: 2.5,
        scrollTrigger: {
          trigger: textRef.current,
          start: "top bottom",
          end: "bottom 50%",
        },
      });
    }
    gsap.from("#about-head", {
      opacity: 0,
      y: 50,
      scrollTrigger: {
        trigger: aboutsec.current,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
      duration: 1,
    });
  }, []);
  return (
    <section
      ref={aboutsec}
      id={"about"}
      className="opacity-0 h-fit flex flex-wrap justify-center items-center py-12 px-4 lg:px-8"
    >
      {/* Image */}
      <div className="w-full md:w-1/3">
        <Image
          id="about-img"
          width={500}
          height={500}
          src="/images/logo.png"
          alt="About Us"
        />
      </div>

      {/*Text content */}
      <div className="w-full md:w-2/3 pl-0 md:pl-4">
        <div className="max-w-fit mx-auto">
          <h2 id="about-head" className="heading mb-4 gradient-text mt-6">
            About Us
          </h2>
          <p
            ref={textRef}
            className="text-xl md:text-2xl text-start text-gray-500"
          >
            NIRMAAN is a premier technical fest scheduled to take place from
            April 4th, 2024 to April 6th, 2024 at Poornima University, Jaipur.
            Our event will feature a diverse range of activities, including
            eSports tournaments,36 Hours hackathon, and technology showcases,
            attracting a broad audience of tech enthusiasts, innovators, and
            industry professionals from across the region. Our goal is to
            provide a platform for students to showcase their skills, connect
            with industry leaders, and gain valuable insights into the latest
            trends in technology. We are committed to fostering a spirit of
            innovation and collaboration, and we look forward to welcoming you
            to our event.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
