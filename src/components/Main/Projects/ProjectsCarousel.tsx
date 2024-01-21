import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const ProjectsCarousel = () => {
  return (
    <Carousel className="z-10 w-full overflow-hidden">
      <CarouselContent>
        {Array.from({ length: 3 }).map((_, index) => (
          <CarouselItem key={index}>
            <Card className="border-none bg-transparent shadow-none">
              <CardContent className="relative flex h-screen max-h-[87vh] items-center justify-center bg-transparent">
                <div
                  style={{
                    backgroundImage: `url('/iphone_frame.png')`,
                    backgroundSize: "contain",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                  }}
                  className="w-full h-full flex justify-center items-center bg-transparent relative overflow-hidden"
                ></div>
                <div className="absolute -z-10 top-2 bottom-8 right-16 left-16 rounded-3xl flex justify-center items-center bg-transparent backdrop-blur-md">
                  Hey
                </div>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="relative -top-[44.5vh] -right-[65px]">
        <CarouselPrevious />
      </div>
      <div className="relative -top-[44.5vh] -left-[65px] ">
        <CarouselNext />
      </div>
    </Carousel>
  );
};

export default ProjectsCarousel;
