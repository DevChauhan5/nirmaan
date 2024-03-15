import {
  About,
  Faq,
  Footer,
  Hackathon,
  HackathonThemes,
  Hero,
  Navbar,
  OurSponsors,
  OurTeam,
  Timeline,
} from "@/components/main";
import Credit from "@/components/other/Credit";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <main className="overflow-hidden relative">
      <Navbar />
      <Separator />
      <Hero />
      <About />
      <Separator />
      <Hackathon />
      <Separator />
      <HackathonThemes />
      <Separator />
      <Timeline />
      <Separator />
      <OurTeam />
      <Separator />
      <Faq />
      {/* <Separator />
      <OurSponsors /> */}
      <Separator />
      <Footer />
      <Separator />
      <Credit />
    </main>
  );
}
