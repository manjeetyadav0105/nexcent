/** @format */

"use client";

import { Button, Carousel } from "flowbite-react";
import Image from "next/image";

interface CarouselContentProps {
  image: string;
  title1?: string;
  title2?: string;

  description?: string;
  buttonText?: string;
}
export function CarouselContent({
  image,
  title1,
  title2,
  description,
  buttonText,
}: CarouselContentProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 dark:bg-gray-700">
      <div className="col-span-1 md:col-span-1 flex flex-col text-start justify-center">
        <h1 className="text-3xl md:text-4xl lg:text-7xl text-d_gray font-semibold mb-4 leading-10 px-2 xl:leading-76">
          {title1} <span className="text-primary">{title2}</span>
        </h1>
        <p className="text-gray dark:text-gray-800 px-2">{description}</p>
        <Button className="bg-primary text-xl font-semibold leading-7 max-w-[128px] mt-4 rounded px-2 ml-2">
          {buttonText}
        </Button>
      </div>
      <div className="col-span-1 md:col-span-1">
        <div className="aspect-w-16 aspect-h-9 flex justify-center items-center mt-4">
          <Image
            src={image}
            alt="image"
            width={500}
            height={500}
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
}
