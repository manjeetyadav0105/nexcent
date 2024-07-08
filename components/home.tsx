/** @format */

"use client";

import { Button, Carousel } from "flowbite-react";
import { CarouselContent } from "./ui/carouselContent";
import Image from "next/image";

import { CardComponent } from "./ui/card";
import { Header } from "./ui/header";
export function HomePage() {
  return (
    <div>
      <div className="h-screen md:h-[599px] bg-neutral dark:bg-gray-700">
        <Carousel slide={false}>
          <div className="flex mx-2 lg:mx-16 xxxs:-mt-20 xxs:-mt-16 xs:-mt-0 xss:mt-4 md:-mt-8 bg-neutral items-center dark:bg-gray-700">
            <CarouselContent
              image="./home.svg"
              title1=" Lessons and insights"
              title2="from 8 years"
              description="Where to grow your business as a photographer: site or social media?"
              buttonText="register"
            />
          </div>

          <div className="flex mx-2 lg:mx-16 -mt-16 md:-mt-8 bg-neutral items-center dark:bg-gray-700">
            <CarouselContent
              image="./feature2.svg"
              title1=" Optimizing Workflow"
              title2="from Team"
              description="Developing Techniques and Streamlined Delivery Processes
                "
              buttonText="register"
            />{" "}
          </div>
          <div className="flex mx-2 lg:mx-16 -mt-16 md:-mt-8 bg-neutral items-center dark:bg-gray-700">
            <CarouselContent
              image="./card4.svg"
              title1="Building Strong"
              title2="Client Relationships"
              description="Strategies for Long-Term Satisfaction and Referrals"
              buttonText="register"
            />{" "}
          </div>
        </Carousel>
      </div>
      <div className="flex items-center justify-center text-center mt-16">
        <Header
          title="Our Clients"
          subtitle="We have been working with some Fortune 50+ clients"
        />
      </div>

      <div className="flex flex-wrap justify-center gap-4 md:gap-16 xl:gap-32 p-4">
        <Image
          src="/client1.svg"
          width={50}
          height={50}
          alt="client1"
          className="dark:brightness-200 dark:invert"
        />
        <Image
          src="/client2.svg"
          width={50}
          height={50}
          alt="client2"
          className="dark:brightness-200 dark:invert"
        />
        <Image
          src="/client3.svg"
          width={50}
          height={50}
          alt="client3"
          className="dark:brightness-200 dark:invert"
        />
        <Image
          src="/client4.svg"
          width={50}
          height={50}
          alt="client4"
          className="dark:brightness-200 dark:invert"
        />
        <Image
          src="/client5.svg"
          width={50}
          height={50}
          alt="client5"
          className="dark:brightness-200 dark:invert"
        />
        <Image
          src="/client6.svg"
          width={50}
          height={50}
          alt="client6"
          className="dark:brightness-200 dark:invert"
        />
        <Image
          src="/client7.svg"
          width={50}
          height={50}
          alt="client"
          className="dark:brightness-200 dark:invert"
        />
      </div>
      <div className="flex items-center justify-center text-center mt-16">
        <Header
          title="Manage your entire community in a single system"
          subtitle="Who is Nextcent suitable for?"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 flex p-8 gap-6 flex-col md:flex-row mx-2 lg:mx-16">
        <CardComponent
          image="./card1.svg"
          title="Membership Organisations"
          description="Our membership management software provides full automation of membership renewals and payments"
        />
        <CardComponent
          image="./card2.svg"
          title="National Associations"
          description="Our membership management software provides full automation of membership renewals and payments"
        />
        <CardComponent
          image="./card3.svg"
          title="Clubs And Groups"
          description="Our membership management software provides full automation of membership renewals and payments"
        />
      </div>
    </div>
  );
}
