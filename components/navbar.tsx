/** @format */

"use client";

import { Button, Navbar } from "flowbite-react";
import Link from "next/link";
import { DarkThemeToggle, Flowbite } from "flowbite-react";
import Image from "next/image";

export function Menu() {
  return (
    <Navbar
      fluid
      rounded
      className="bg-neutral font-medium md:px-8 rounded-none"
    >
      <Navbar.Brand href="#">
        <Image src="/logo.svg" alt="logo" width={50} height={50} />
        <span className="self-center whitespace-nowrap text-3xl font-semibold dark:text-white">
          Nexcent
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <div className="rounded darK:bg-cyan-600">
          <DarkThemeToggle />
        </div>
        <Button className="bg-neutral text-primary dark:text-white mx-1">
          Login
        </Button>

        <Button className="bg-primary text-white">Sign Up</Button>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="#" active>
          Home
        </Navbar.Link>
        <Navbar.Link href="#">Services</Navbar.Link>

        <Navbar.Link href="#">Feature</Navbar.Link>
        <Navbar.Link href="#">Product</Navbar.Link>
        <Navbar.Link href="#">Testimonial</Navbar.Link>
        <Navbar.Link href="#">FAQ</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
