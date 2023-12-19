"use client";
import React from "react";
import { useState } from "react";
import Image from "next/image";
import { CarProps } from "@/types";
import { CardDetalis, CustomButton } from ".";
import { calculateCarRent, generateIamgeUrl } from "@/utils";

interface CarCardProps {
  car: CarProps;
}
const CarCard = ({ car }: CarCardProps) => {
  const { city_mpg, year, make, model, transmission, drive } = car;
  const carRent = calculateCarRent(city_mpg, year);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="rounded-[40px] text-center p-8 w-[450px]   bg-cardColor">
      <div>
        <h2 className="text-[20px] font-semibold">
          {make} {model}
        </h2>
      </div>

      <p className="flex mt-6 text-[30px] font-bold">
        <span className="self-start text-[14px] font-seminold">$</span>
        {carRent}
        <span className="self-end text-[14px] font-medium">/day</span>
      </p>

      <div className="relative w-full h-40 my-3">
        <Image
          src={generateIamgeUrl(car)}
          alt="Car"
          fill
          objectFit="contain"
        />
      </div>

      <div className=" relative flex w-full mt-2">
        <div className=" flex group-hover:invisible w-full justify-between text-gray">
          {/*  */}
          <div className="flex gao-2 flex-col justify-center items-center">
            <Image
              src="/icons/award_icon.svg"
              alt="award"
              width={20}
              height={20}
            />
            <p className="text-[18px] mt-2">
              {transmission === "a" ? "Premium Quality" : "Standart Quality"}
            </p>
          </div>
          {/*  */}
          <div className="flex gao-2 flex-col justify-center items-center">
            <Image
              src="/icons/rating_icon.svg"
              alt="award"
              width={20}
              height={20}
            />
            <p className="text-[18px] mt-2">
              {/* {transmission === "a" ? "10/10" : "7/10"} */}
              {drive.toUpperCase()}
            </p>
          </div>
          {/*  */}
          <div className="flex gao-2 flex-col justify-center items-center">
            <Image
              src="/icons/strength_icon.svg"
              alt="award"
              width={20}
              height={20}
            />
            <p className="text-[18px] mt-2">
              {/* {transmission === "a" ? "Premium Quality" : "Standart Quality"} */}
              {city_mpg} points
            </p>
          </div>
          {/*  */}
        </div>
      </div>
      <div className="relative">
        <CustomButton
          title="View More"
          containerStyles="w-full py-[16px] bg-blue-500 mt-6 "
          textStyle=" text-[18px] font-bold leading-[18px]"
          rightIcon="/icons/right_icon.svg"
          handleClick={() => setIsOpen(true)}
        />
      </div>

      <CardDetalis
        isOpen={isOpen}
        closeModal={() => setIsOpen(false)}
        car={car}
      />
    </div>
  );
};

export default CarCard;
