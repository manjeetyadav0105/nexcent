/** @format */

"use client";

import { Header } from "./ui/header";

import { CardComponent3 } from "./ui/card";
export function Feature() {
  return (
    <div>
      <div className="flex flex-col justify-center text-center mt-16">
        <Header
          title="Caring is the new marketing"
          subtitle="The Nexcent blog is the best place to read about the latest membership insights, trends and more. See who's joining the community, read about how our community are increasing their membership income and lot's more.​"
        />
        <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 flex flex-col md:flex-row p-8 gap-6 mx-2 lg:mx-16">
          <CardComponent3
            image="/card5.jpg"
            title="Creating Streamlined Safeguarding Processes with OneRen"
          />
          <CardComponent3
            image="/card6.jpg"
            title="What are your safeguarding responsibilities and how can you manage them?"
          />
          <CardComponent3
            image="/card7.jpg"
            title="Revamping the Membership Model with Triathlon Australia"
          />
        </div>
      </div>
    </div>
  );
}
