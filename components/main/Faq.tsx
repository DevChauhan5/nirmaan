import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { faq } from "@/constants"


const Faq = () => {
  return (
    <section id="faq" className="h-fit py-12 px-4 lg:px-8">
      <h1 className="heading gradient-text">FAQ</h1>
      <p className="text-gray-500 pb-4 text-lg md:text-xl mt-6 text-start mb-8">We&apos;ve done our best to summarize the most commonly asked questions, but contact us if you can&apos;t find the answer you&apos;re looking for.</p>
      <Accordion type="single" collapsible className="w-full">
      
      {faq.map((item, index) => (
        <AccordionItem key={index} value={`item-${index}`}>
        <AccordionTrigger className="text-2xl text-start">{item.question}</AccordionTrigger>
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