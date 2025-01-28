import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

export function CarouselSpacing() {
  function Items() {
    return (
      <div>
        <h1 className="flex justify-center items-center text-xl md:text-2xl">⭐⭐⭐⭐⭐</h1>
        <h2 className="flex justify-center items-center text-sm md:text-lg font-semibold">Ali</h2>
        <p className="flex justify-center items-center text-xs md:text-base px-2">
          Excellent service provided by QuickRent Car. Cars were almost new 
          and drivers were professional in driving skills.
        </p>
      </div>
    );
  }

  return (
    <Carousel className="w-screen xl:w-[900px] lg:w-[800px] md:w-[600px] sm:w-screen">
      <CarouselContent className="-ml-1 xl:gap-4 lg:gap-4 md:gap-2 sm:gap-2">
        {Array.from({ length: 9 }).map((_, index) => (
          <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3 sm:basis-full">
            <div className="p-1">
              <Card className="w-full h-auto">
                <CardContent className="flex aspect-auto items-center justify-center p-4">
                  <span className="text-xs font-semibold">
                    <Items />
                  </span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
