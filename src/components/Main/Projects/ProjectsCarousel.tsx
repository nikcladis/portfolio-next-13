import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

const ProjectsCarousel = () => {
  return (
    <Carousel className="z-10 w-full overflow-hidden">
      <CarouselContent>
        {Array.from({ length: 3 }).map((_, index) => (
          <CarouselItem key={index}>
            <div className="p-2">
              <Card className="border-none bg-transparent">
                <CardContent className="flex h-screen max-h-[87vh] items-center justify-center p-4">
                  <div
                    style={{
                      backgroundImage: `url('/iphone_frame.png')`,
                      backgroundSize: "contain",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                    }}
                    className="w-full h-full flex justify-center items-center bg-transparent backdrop-blur-md"
                  >
                    Hey
                  </div>
                </CardContent>
              </Card>
            </div>
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
