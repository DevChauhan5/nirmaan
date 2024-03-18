'use client'

import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { themes } from "@/constants";
import { useGSAP } from "@gsap/react";
import Autoplay from "embla-carousel-autoplay"
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Image from "next/image";
import { useRef } from "react";


gsap.registerPlugin(ScrollTrigger);

const HackathonThemes = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    if (sectionRef.current) {
      const cards = sectionRef.current.querySelectorAll('.card');

      cards.forEach((card, index) => {
        gsap.from(card, {
          opacity: 0,
          y: 50,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
          duration: 1,
          delay: index * 0.2,
        });
      });
    }
    gsap.from('#themes-head', {
      opacity: 0,
      y: 50,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 80%',
        toggleActions: 'play none none reverse',
      },
      duration: 1,
    })
  }, []);
  return (
    <section id="themes" className="h-fit py-12  px-4 lg:px-8">
      <h1 id="themes-head" className="heading font-bold my-4 gradient-text">
        Themes for Hackathon
      </h1>
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full mt-6 px-6"
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
      >
        <CarouselContent ref={sectionRef}>
          {themes.map((theme, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <Card className="card max-h-[500px]">
                  <CardContent className="flex flex-col aspect-square items-start justify-center p-4">
                    <Image
                      className="rounded-md bg-white shadow-md"
                      src={theme.src}
                      alt="nature"
                      height={400}
                      width={400}
                    />
                    <CardTitle className="mt-4 tracking-wide">{theme.title}</CardTitle>
                    <CardDescription className="my-2">
                      {theme.description}
                    </CardDescription>
                  </CardContent>
                </Card>
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

export default HackathonThemes;
