/** @format */

import React from "react";
import Image from "next/image";
import { useState, useEffect } from "react";

interface HeaderProps {
  title: number;
  subtitle?: string;
  image: string;
}

export function IconComponent({ title, subtitle, image }: HeaderProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (count < title) {
        setCount((prevCount) => prevCount + 1);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [count, title]);
  return (
    <div className="col-span-1 md:col-span-1 flex">
      <Image
        src={image}
        alt="image"
        width={500}
        height={500}
        className="w-12 h-12"
      />
      <div className="flex flex-col ml-4">
          <span className="text-xl lg:text-3xl text-d_gray dark:text-white font-bold leading-9 flex mb-2">
           {count}{" "} K+
          </span>
        <p className="text-gray text-base leading-6">{subtitle}</p>
      </div>
    </div>
  );
}

export default IconComponent;
