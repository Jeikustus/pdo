import { Separator } from "@/components/ui/separator";
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="w-full p-5 ">
      <div className="grid grid-cols-3 p-5">
        <div className="flex justify-center items-center">
          <h1 className="font-bold">JEIKUSTUS</h1>
        </div>
        <div>
          <div className="flex justify-center items-center space-x-10 font-medium text-sm">
            <Link href="/audio">Features</Link>
            <Link href="/">How to Apply</Link>
            <Link href="/image">Resources</Link>
            <Link href="/video">Pricing</Link>
            <Link href="/pdf">About Us</Link>
          </div>
        </div>
        <div className="flex justify-center items-center space-x-3 text-[#3399cc]">
          <Twitter />
          <Facebook />
          <Instagram />
          <Linkedin />
          <Youtube />
        </div>
      </div>
      <Separator />
      <div className="p-5">
        <div className="flex justify-center items-center space-x-3">
          <p className="text-sm text-[#0c0c2e]">
            &copy; 2024 All Rights Reserved.
          </p>
          <Link
            href={"/privacy-policy"}
            className="text-sm font-medium text-[#0c0c2e] hover:underline hover:text-[#3399cc]"
          >
            Privacy Policy
          </Link>
          <Link
            href={"/terms-of-services"}
            className="text-sm font-medium text-[#0c0c2e] hover:underline hover:text-[#3399cc]"
          >
            Terms of Service
          </Link>
          <Link
            href={"/contact-us"}
            className="text-sm font-medium  text-[#0c0c2e] hover:underline hover:text-[#3399cc]"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </footer>
  );
};
