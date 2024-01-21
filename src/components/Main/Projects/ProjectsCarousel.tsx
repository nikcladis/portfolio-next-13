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
            <div className="p-2">
              <Card className="bg-transparent backdrop-blur-md">
                <CardContent className="flex h-[560px] items-center justify-center p-6">
                  <span className="text-4xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="relative -top-[285px] -right-[65px]">
        <CarouselPrevious />
      </div>
      <div className="relative -top-[285px] -left-[65px] ">
        <CarouselNext />
      </div>
    </Carousel>
  );
};

export default ProjectsCarousel;
