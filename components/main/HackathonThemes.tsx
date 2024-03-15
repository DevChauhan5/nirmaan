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
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay"



const themes = [
  {
    title: "AI & Machine Learning",
    description: "Innovative solutions utilizing AI & ML techniques for predictive analytics, NLP, computer vision, and more."
  },
  {
    title: "Cloud Computing",
    description: "Applications leveraging cloud storage, serverless computing, containerization, and cloud-based machine learning models."
  },
  {
    title: "Cybersecurity",
    description: "Develop tools for threat detection, encryption, secure communication, and vulnerability assessment !"
  },
  {
    title: "Web3 & Blockchain",
    description: "Exploring decentralized web (Web3) and blockchain technologies for DApps, smart contracts, cryptocurrencies, and DeFi platforms."
  },
  {
    title: "Internet of Things (IoT)",
    description: "Innovative solutions for smart home devices, industrial applications, environmental monitoring, and wearable health trackers."
  },
  {
    title: "AR & VR",
    description: "Creating immersive experiences for gaming, education, virtual meetings, and industry training using AR and VR technologies."
  },
  {
    title: "Data Science & Analytics",
    description: "Projects focusing on data analysis, visualization, big data processing, and predictive modeling for data-driven decision-making."
  },
  {
    title: "FinTech & Payments",
    description: "Innovations in financial technology including mobile payments, peer-to-peer lending, blockchain remittances, and digital wallets."
  },
  {
    title: "HealthTech",
    description: "Developing tech solutions to enhance healthcare delivery, patient monitoring, diagnostics, and wellness management."
  },
  {
    title: "Open Innovations",
    description: "Encouraging interdisciplinary collaboration and creativity with freedom to explore any innovative idea or problem-solving approach."
  }
];


const HackathonThemes = () => {
  return (
    <section id="themes" className="h-fit py-12  px-4 lg:px-8">
      <h1 className="heading font-bold my-4 gradient-text">
        Themes for Hackathon
      </h1>
      <Carousel
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
          {themes.map((theme, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <Card className="max-h-[500px]">
                  <CardContent className="flex flex-col aspect-square items-start justify-center p-4">
                    <img
                      className="rounded-md "
                      src="https://source.unsplash.com/400x400/?nature"
                      alt="nature"
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
      </Carousel>
    </section>
  );
};

export default HackathonThemes;
