import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faq = [
  {
    question: "What is the event about?",
    answer: "NIRMAAN is a vibrant celebration of technology, innovation, and creativity."
  },
  {
    question: "When and where will the event take place?",
    answer: "NIRMAAN will be held from March 4th to 6th at Poornima University."
  },
  {
    question: "Can I participate as an individual or as a team?",
    answer: "Both individual and team participation is encouraged. Events will specify whether they are solo or team-based."
  },
  {
    question: "Is there a registration fee?",
    answer: "Yes, there is a registration fee of Rs. 500 only."
  },
  {
    question: "Can I attend even if I'm not participating in any events?",
    answer: "Absolutely! NIRMAAN welcomes all tech enthusiasts to join as spectators, explore showcases, and enjoy the tech-inspired atmosphere. Registration is a must."
  },
  {
    question: "Can I participate in multiple events?",
    answer: "Yes, participants are encouraged to explore various events throughout the day. Make sure to check the schedule for overlapping timings."
  },
  {
    question: "Can I bring my own equipment for certain events?",
    answer: "For some events, participants may be required to bring their own laptops, devices, or specific tools. Check event descriptions for equipment details."
  },
  {
    question: "Will there be accommodations available for hackathon participants?",
    answer: "Yes, we are committed to providing a welcoming and accessible accommodation. Contact us in advance to discuss specific accommodations or requirements."
  },
  {
    question: "Can I transfer my registration to another person if I can't attend?",
    answer: "No, registration transfers may not be possible. Contact our registration team through the provided email or at the helpdesk through the app for further assistance."
  }
];


const Faq = () => {
  return (
    <section id="faq" className="h-fit py-12 px-4 lg:px-8">
      <h1 className="heading gradient-text">FAQ</h1>
      <p className="text-gray-500 pb-4 text-lg md:text-xl mt-6 text-start mb-8">We&apos;ve done our best to summarize the most commonly asked questions, but contact us if you can&apos;t find the answer you&apos;re looking for.</p>
      <Accordion type="single" collapsible className="w-full">
      
      {faq.map((item, index) => (
        <AccordionItem key={index} value={`item-${index}`}>
        <AccordionTrigger className="text-2xl">{item.question}</AccordionTrigger>
        <AccordionContent className="text-lg text-gray-600">
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