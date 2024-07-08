/** @format */

"use client";

import { Button, Card } from "flowbite-react";
import Image from "next/image";

interface CardComponentProps {
  image: string;
  title?: string;
  description?: string;
}
export function CardComponent({
  image,
  title,
  description,
}: CardComponentProps) {
  return (
    <div className="col-span-1 md:col-span-1">
      <Card className="max-w-sm text-center border-0 h-full dark:bg-neutral">
        <div className="flex justify-center">
          <Image width={80} height={80} src={image} alt="Card image" />
        </div>
        <h5 className="text-2xl max-w-xs font-bold tracking-tight text-d_gray">
          {title}
        </h5>
        <p className="font-normal text-gray dark:text-gray-800">
          {description}
        </p>
      </Card>
    </div>
  );
}

export function CardComponent2({
  image,
  title,
  description,
}: CardComponentProps) {
  return (
    <Card
      className="md:max-w-7xl border-0 shadow-none dark:bg-neutral"
      horizontal
    >
      <div className="flex flex-col md:flex-row">
        <Image
          src={image}
          alt="image"
          width={500}
          height={500}
          className="w-full md:w-1/2 object-cover"
        />
        <div className="p-6 max-w-2xl">
          <h5 className="text-4xl font-bold leading-10 text-d_gray mb-4">
            {title}
          </h5>
          <p className="font-normal text-sm text-gray dark:text-gray-800 leading-5 mb-4">
            {description}
          </p>
          <Button className="max-w-xs bg-primary px-4">Learn more</Button>
        </div>
      </div>
    </Card>
  );
}
export function CardComponent3({ image, title }: CardComponentProps) {
  return (
    <div className="col-span-1 md:col-span-1 relative max-w-sm mx-auto">
      <Card className="max-w-sm text-center border-0 shadow-none h-full dark:bg-neutral">
        <div className="flex justify-center pt-4">
          <Image
            src={image}
            width={500}
            height={500}
            className="rounded-lg"
            alt="Card_mage"
          />
        </div>
        <div className="relative z-10 bg-silver dark:bg-gray-800 px-0 md:px-4 py-2 rounded-lg shadow-lg -mt-[25%] mx-4 text-base md:text-xl font-semibold leading-7 flex flex-col justify-center">
          <h5 className="text-d_gray dark:text-white">{title}</h5>
          <Button className="bg-silver text-primary dark:text-white mt-4">
            Learn More{" "}
            <svg
              className="-mr-1 ml-2 h-4 w-4"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>{" "}
          </Button>
        </div>
      </Card>
    </div>
  );
}
