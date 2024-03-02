import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const HackathonThemes = () => {
  return (
    <section id="themes" className="h-fit py-12 flex flex-col items-center gap-4 justify-center px-4 lg:px-8">
        <h1 className="text-center text-5xl font-bold my-4">Themes for Hackathon</h1>
      <Carousel className="w-full max-w-xl">
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index}>
              <div className="">
                <Card className="bg-background">
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <CardHeader>
                    <img className="rounded-md" src="https://source.unsplash.com/400x400/?nature" alt="nature" />
                      <CardTitle className="pt-4 text-3xl">Theme Name {index+1}</CardTitle>
                      <CardDescription>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</CardDescription>
                    </CardHeader>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
};

export default HackathonThemes;
