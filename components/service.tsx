/** @format */

"use client";

import { CardComponent2 } from "./ui/card";
import { Header } from "./ui/header";
import { Button, Card } from "flowbite-react";
import { IconComponent } from "./ui/iconComponent";
import Image from "next/image";

export function Service() {
  return (
    <div>
      <div className="flex justify-center items-center mt-16">
        <CardComponent2
          image="./card4.svg"
          title="The unseen of spending three years at Pixelgrade"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio."
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 p-8 mt-16 bg-neutral dark:bg-gray-800">
        <div className="col-span-1 md:col-span-1 flex justify-center items-center">
          <div className="text-start">
            {" "}
            <Header
              title="Helping a local business reinvent itself"
              subtitle="We reached here with our hard work and dedication"
            />
          </div>
        </div>
        <div className="col-span-1 md:col-span-1 flex items-center p-2">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8">
            <IconComponent
              title={224}
              subtitle="Members"
              image="/members.svg"
            />
            <IconComponent title={46} subtitle="Clubs" image="/clubs.png" />
            <IconComponent
              title={82}
              subtitle="Event Bookings"
              image="/events.svg"
            />
            <IconComponent
              title={192}
              subtitle="Payments"
              image="/payments.svg"
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center mt-16">
        <CardComponent2
          image="./feature2.svg"
          title="How to design your site footer like we did"
          description="Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida."
        />
      </div>
      <div className="bg-neutral flex justify-center items-center mt-16">
        <Card
          className="md:max-w-7xl border-0 shadow-none bg-neutral dark:bg-gray-700"
          horizontal
        >
          <div className="flex flex-col md:flex-row gap-6">
            <Image
              src="/feature3.svg"
              alt="feature3"
              width={50}
              height={50}
              className="w-full h-full object-cover"
            />

            <div className="p-6 max-w-3xl">
              <p className="font-medium text-sm text-gray dark:text-gray-800 leading-5 mb-4">
                Maecenas dignissim justo eget nulla rutrum molestie. Maecenas
                lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin
                eu enim metus. Vivamus sed libero ornare, tristique quam in,
                gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi
                laoreet elit at ligula molestie, nec molestie mi blandit.
                Suspendisse cursus tellus sed augue ultrices, quis tristique
                nulla sodales. Suspendisse eget lorem eu turpis vestibulum
                pretium. Suspendisse potenti. Quisque malesuada enim sapien,
                vitae placerat ante feugiat eget. Quisque vulputate odio neque,
                eget efficitur libero condimentum id. Curabitur id nibh id sem
                dignissim finibus ac sit amet magna.{" "}
              </p>
              <div className="flex flex-col">
                <span className="text-primary font-semibold leading-7 text-xl">
                  Tim Smith
                </span>
                <p className="text-gray dark:text-gray-800 leading-6 text-base">
                  British Dragon Boat Racing Association
                </p>
              </div>
              <div className="flex flex-wrap justify-start gap-6 py-4">
                <Image
                  src="/client1.svg"
                  alt="client1"
                  width={50}
                  height={50}
                />
                <Image
                  src="/client2.svg"
                  alt="client2"
                  width={50}
                  height={50}
                />
                <Image
                  src="/client3.svg"
                  alt="client3"
                  width={50}
                  height={50}
                />
                <Image
                  src="/client4.svg"
                  alt="client4"
                  width={50}
                  height={50}
                />
                <Image
                  src="/client5.svg"
                  alt="client5"
                  width={50}
                  height={50}
                />
                <Image
                  src="/client6.svg"
                  alt="client6"
                  width={50}
                  height={50}
                />
                <Button className="bg-neutral text-xl text-center text-primary dark:text-white font-semibold leading-7">
                  Meet All Cutomers
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
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
