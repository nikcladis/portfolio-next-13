import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Iphone14Pro from "@/components/Devices/iphone-14-pro";

const ProjectsCarousel = () => {
  return (
    <Carousel className="z-10 w-full overflow-hidden">
      <CarouselContent>
        <CarouselItem>
          <Card className="border-none bg-transparent shadow-none">
            <CardContent className="relative flex h-[100dvh] items-center justify-center">
              <Iphone14Pro color="device-silver">
                <div></div>
              </Iphone14Pro>
            </CardContent>
          </Card>
        </CarouselItem>
        <CarouselItem>
          <Card className="border-none bg-transparent shadow-none">
            <CardContent className="relative flex h-[100dvh] items-center justify-center">
              <Iphone14Pro color="device-gold">
                <div></div>
              </Iphone14Pro>
            </CardContent>
          </Card>
        </CarouselItem>
        <CarouselItem>
          <Card className="border-none bg-transparent shadow-none">
            <CardContent className="relative flex h-[100dvh] items-center justify-center">
              <Iphone14Pro color="device-purple">
                <div></div>
              </Iphone14Pro>
            </CardContent>
          </Card>
        </CarouselItem>
      </CarouselContent>
      <div className="relative -top-[50vh] -right-[65px]">
        <CarouselPrevious />
      </div>
      <div className="relative -top-[50vh] -left-[65px] ">
        <CarouselNext />
      </div>
    </Carousel>
  );
};

export default ProjectsCarousel;
