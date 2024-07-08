import Image from "next/image";
import { Menu } from "@/components/navbar";
import { HomePage } from "@/components/home";
import { Service } from "@/components/service";
import { Feature } from "@/components/feature";
import { FooterComponent } from "@/components/footer";

export default function Home() {
  return (
      <main className="flex min-h-screen flex-col dark:bg-gray-800 dark:text-white">
        <Menu />
        <HomePage />
        <Service />
        <Feature />
        <FooterComponent />

      </main>
  );
}
