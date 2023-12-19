import React from "react";
import Link from "next/link";
import Image from "next/image";
import { footerLinks } from "@/constants";

const Footer = () => {
  return (
    <footer className=" max-w-[1920px] mx-auto text-black-100 mt-5 border-t border-black-300 flex flex-col  ">
      <div className="flex w-[1440px]  mx-auto flex-wrap justify-between gap-5 sm:px-16 px-6 py-10">
        <div className="flex flex-col justify-start items-start gap-6">
          <Image src="/images/logo.png" alt="Logo" width={115} height={35} />
          <p className=" text-gray 700">All rights reserved &copy;</p>
        </div>

        <div className="flex flex-1  justify-around gap-20">
          {footerLinks.map((link) => (
            <div key={link.title} className=" flex flex-col items-center gap-4">
              <h3 className="font-semibold ">{link.title}</h3>
              {link.links.map((item) => (
                <Link
                  key={item.title}
                  href={item.url}
                  className="text-gray-500"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="flex text-gray-500 justify-around iftems-center flex-wrap mt-10 ">
        <p>@2023 KinfeShop. All Rights Reserved</p>
        <div className=" flex gap-8">
          <Link href="/">Privacy Police</Link>
          <Link href="/">Terms of Use</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
