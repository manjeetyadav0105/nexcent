/** @format */

"use client";

import { Button, Footer } from "flowbite-react";
import {
  BsDribbble,
  BsFacebook,
  BsYoutube,
  BsInstagram,
  BsTwitter,
} from "react-icons/bs";
import { Label, TextInput } from "flowbite-react";
import { BsSend } from "react-icons/bs";
import Header from "./ui/header";

export function FooterComponent() {
  return (
    <div className="mt-16 bg-neutral dark:bg-gray-800">
      <div className="flex flex-col justify-center items-center text-center py-8">
        <Header title="Helping a local business reinvent itself" />
        <Button className="p-0 bg-primary max-w-[178px] text-base text-white py-2 px-4 mt-4 font-medium">
          Get a Demo
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
          </svg>
        </Button>
      </div>

      <Footer
        container
        className="bg-black dark:bg-gray-700 flex md:justify-center items-center rounded-none"
      >
        <div className="w-full max-w-6xl">
          <div className="grid w-full sm:grid-cols-1 md:grid-cols-[1fr_2fr] text-white gap-x-12 gap-y-8 p-4">
            <div className="flex flex-col">
              <Footer.Brand href="#" src="/footerLogo.svg" alt="Nexcent Logo" />
              <div className="flex items-center mt-2">
                <span className="mr-2">Copyright</span>
                <Footer.Copyright href="#" by="Nexcent ltd." year={2020} />
              </div>
              <span className="mt-2">All rights reserved.</span>
              <div className="mt-4 flex space-x-6">
                <Footer.Icon href="#" icon={BsInstagram} />
                <Footer.Icon href="#" icon={BsDribbble} />
                <Footer.Icon href="#" icon={BsTwitter} />
                <Footer.Icon href="#" icon={BsYoutube} />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 sm:gap-6 order-1 md:order-2">
              <div>
                <Footer.Title title="Company" />
                <Footer.LinkGroup col>
                  <Footer.Link href="#">About Us</Footer.Link>
                  <Footer.Link href="#">Blog</Footer.Link>
                  <Footer.Link href="#">Contact Us</Footer.Link>
                  <Footer.Link href="#">Pricing</Footer.Link>
                  <Footer.Link href="#">Testimonial</Footer.Link>
                </Footer.LinkGroup>
              </div>

              <div>
                <Footer.Title title="Support" />
                <Footer.LinkGroup col>
                  <Footer.Link href="#">Help Center</Footer.Link>
                  <Footer.Link href="#">Term of Service</Footer.Link>
                  <Footer.Link href="#">Legal</Footer.Link>
                  <Footer.Link href="#">Privacy Policy</Footer.Link>
                  <Footer.Link href="#">Status</Footer.Link>
                </Footer.LinkGroup>
              </div>

              <div className="col-span-2 sm:col-span-1">
                <Footer.Title title="Stay Up to Date" />
                <TextInput
                  id="email"
                  type="email"
                  placeholder="your email address"
                  rightIcon={BsSend}
                  className="text-gray dark:text-black bg-black mt-2"
                  required
                />
              </div>
            </div>
          </div>
        </div>
      </Footer>
    </div>
  );
}
