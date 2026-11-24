import React from 'react';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Image from 'next/image';

export default function HomeCarousel() {
  return (
    <div>
      <Carousel>
        <CarouselContent>
          <CarouselItem>
            <Image
              src="/home-01.jpg"
              width={0}
              height={0}
              sizes="1000vw"
              alt="home 01"
              className="w-full h-auto rounded-xl"
            />
          </CarouselItem>
          <CarouselItem>
            <Image
              src="/home-01.jpg"
              width={0}
              height={0}
              sizes="1000vw"
              alt="home 01"
              className="w-full h-auto rounded-xl"
            />
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
