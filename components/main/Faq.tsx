'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { faq } from "@/constants"
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const Faq = () => {
  const faqRef = useRef<HTMLDivElement | null>(null);
  useGSAP(()=>{
    if (faqRef.current) {
      gsap.from(faqRef.current, {
        opacity: 0,
        y: 50,
        scrollTrigger: {
          trigger: faqRef.current,
          start: 'top center',
          toggleActions: 'play none none reverse',
        },
        duration: 1,
      });
    }
  },[])
  return (
    <section ref={faqRef} id="faq" className="h-fit py-12 px-4 lg:px-8">
      <h1 className="heading gradient-text">FAQ</h1>
      <p className="text-gray-500 pb-4 text-lg md:text-xl mt-6 text-start mb-8">We&apos;ve done our best to summarize the most commonly asked questions, but contact us if you can&apos;t find the answer you&apos;re looking for.</p>
      <Accordion type="single" collapsible className="w-full">
      
      {faq.map((item, index) => (
        <AccordionItem key={index} value={`item-${index}`}>
        <AccordionTrigger className="text-2xl text-start">{item.question}</AccordionTrigger>
        <AccordionContent className="text-lg text-gray-400">
          {item.answer}
        </AccordionContent>
      </AccordionItem>
      ))}
    </Accordion>
    <div className="pb-6"></div>
    </section>
  )
}

export default Faq