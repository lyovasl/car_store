"use client";
import React from "react";
import { ShowMoreProps } from "@/types";
import { CustomButton } from ".";

const ShowMore = ({ pageNumber, isNext, setLimit }: ShowMoreProps) => {
  const handeleNavigation = () => {
    const newLimit = (pageNumber + 1) * 10;
    setLimit(newLimit);
  };

  return (
    <div className="flex w-full justify-center mt-[40px]">
      {!isNext && (
        <CustomButton
          btnType="button"
          handleClick={handeleNavigation}
          title="Show More"
        />
      )}
    </div>
  );
};

export default ShowMore;
