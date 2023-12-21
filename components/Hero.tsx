"use client";
import React from "react";
import { CustomButton } from ".";
import Image from "next/image";

const Hero = () => {
  const handlescroll = () => {};

  return (
    <div className="max-w-[1400px] mx-auto items-center flex justify-between my-32		">
      <div className="w-[650px] ">
        <h1 className="text-[42px]	font-bold leading-normal	">
          A unique car for a unique personality
        </h1>
        <p className="leading-normal mb-10 text-[26px]">
          Tuotown knives are the main tool of chefs and the secret of culinary
          mastery
        </p>

        <CustomButton
          title="Explore Product"
          containerStyles="font-semibold"
          handleClick={handlescroll}
        />
      </div>

      <div className="flex justify-center w-[600px]	">
        <Image
          src="/images/bg_car.png"
          alt="Product"
          width={600}
          height={400}
          // objectFit='cover'
        />
      </div>
    </div>
  );
};

export default Hero;
