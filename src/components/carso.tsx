"use client";
import Image from "next/image";

import a4 from "../app/images/a4.png";
import a5 from "../app/images/a5.png";
import alto from "../app/images/alto.png";
import civic from "../app/images/civic.png";
import cla200 from "../app/images/cla200.png";
import corolla from "../app/images/corolla.png";
import cruiser from "../app/images/cruiser.png";
import cultus from "../app/images/cultus.png";
import fortuner from "../app/images/fortuner.png";
import mira from "../app/images/mira.png";
import revo from "../app/images/revo.png";
import yaris from "../app/images/yaris.png";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

export function CarouselPlugin() {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false })
  );

  const images = [
    alto,
    cultus,
    mira,
    yaris,
    civic,
    corolla,
    a4,
    a5,
    cla200,
    revo,
    fortuner,
    cruiser,
  ];

  return (
    <div className="bg-gray-100 w-screen">
      <Carousel
        plugins={[plugin.current]}
        className="w-screen max-w-screen mx-auto"
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent className="flex h-[300px] sm:h-[400px] md:h-[470px] w-screen">
          {images.map((image, index) => (
            <CarouselItem
              key={index}
              className="w-screen flex-shrink-0 flex items-center justify-center"
            >
              <div className="p-2 w-screen h-full">
                <Card className="w-full h-full">
                  <CardContent className="flex items-center justify-center w-full h-full">
                    <Image
                      src={image}
                      alt={`Car ${index + 1}`}
                      className="object-contain w-full h-full rounded-lg"
                    />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
