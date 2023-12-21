"use client";

import React, { MouseEventHandler } from "react";
import Image from "next/image";
import { CustomButtonProps } from "@/types";

const CustomButton = ({
  title,
  containerStyles,
  handleClick,
  btnType,
  textStyle,
  rightIcon,
  onClick,
}: CustomButtonProps) => {
  return (
    <button
      disabled={false}
      type={btnType || "button"}
      className={`bg-btnColor text-black rounded-3xl py-3 px-7 flex justify-between ${containerStyles}`}
      onClick={handleClick}
    >
      <span className={`${textStyle}`}>{title}</span>

      {rightIcon && (
        <div className="relative w-6 h-6">
          <Image src={rightIcon} alt="Icon" fill objectFit="contain" />
        </div>
      )}
    </button>
  );
};

export default CustomButton;
