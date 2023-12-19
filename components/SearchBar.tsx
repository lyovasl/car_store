"use client";
import React, { useCallback } from "react";
import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import SearchManufacturer from "./SearchManufacturer";

const SerchButton = ({ otherClasses }: { otherClasses: string }) => (
  <button type="submit" className={`-ml-3 z-10 ${otherClasses}`}>
    <Image
      src="/icons/search_icon.svg"
      alt="magnifying glass"
      width={40}
      height={40}
    />
  </button>
);

const SearchBar = ({ setManufacturer, setModal }: any) => {
  const [searchManufacturer, setSearchManufacturer] = useState("");
  const [searchModal, setSearchModal] = useState("");

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchManufacturer === "" && searchModal === "") {
      return alert("Please fill in the search bar");
    }

    setModal(searchModal);
    setManufacturer(searchManufacturer);
  };

  return (
    <form onSubmit={handleSearch} className="flex gap-4 ">
      <div className="flex items-center gap-2 rounded-[16px]">
        <div className=" relative flex">
          <SearchManufacturer
            selected={searchManufacturer}
            setSelected={setSearchManufacturer}
          />

          <SerchButton otherClasses="sm:hidden" />
        </div>

        <div className="relative ">
          {/* <Image
            src="/icons/searchModal_icon.svg"
            alt="Car searchModal"
            className="absolute w-[20px] top-[10px] h-[20 px]  ml-4 "
            width={25}
            height={25}
          /> */}

          <input
            type="text"
            onChange={(e) => setSearchModal(e.target.value)}
            placeholder="Camry"
            name="searchModal"
            value={searchModal}
            className=" pl-[40px] py-[8px] rounded-[16px] outline-none	"
          />
          <SerchButton otherClasses="sm:hidden" />
        </div>
      </div>

      <SerchButton otherClasses="max-sm:hidden" />
    </form>
  );
};

export default SearchBar;
