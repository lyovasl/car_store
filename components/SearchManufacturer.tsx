"use client";
import { Fragment, useState } from "react";
import { SearchManufacturerProps } from "@/types";
import { Combobox, Transition } from "@headlessui/react";
import { manufactures } from "@/constants";
import Image from "next/image";
import React from "react";

type Props = {};

const SearchManufacturer = ({
  selected,
  setSelected,
}: SearchManufacturerProps) => {
  const [query, setQuery] = useState("");

  const filteredManufacturer =
    query === ""
      ? manufactures
      : manufactures.filter((item) =>
          item
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""))
        );

  return (
    <div className="w-[350px]">
      <Combobox value={selected} onChange={setSelected}>
        <div className="relative flex flex-col gap-12 rounded-[15px]">
          <Combobox.Button className="absolute top-[11px] left-[15px] ">
            {/* <Image
              src="/icons/knife_icon.svg"
              alt="knife"
              width={20}
              height={20}
              objectFit="contain"
            /> */}
          </Combobox.Button>

          <Combobox.Input
            className="h-[40px] px-[35px] py=[5px] rounded-[16px] outline-none"
            placeholder="Toyota"
            displayValue={(manufacturer: string) => manufacturer}
            onChange={(e) => setQuery(e.target.value)}
          />

          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery("")}
          >
            <Combobox.Options className="flex-col absolute top-[40px] rounded-[10px]  w-full z-10 bg-white">
              {filteredManufacturer.length === 0 && query !== "" ? (
                <Combobox.Option value={query} className="bg-red-800">
                  Create
                </Combobox.Option>
              ) : (
                filteredManufacturer.map((item) => (
                  <Combobox.Option
                    key={item}
                    className={({ active }) =>
                      `relative bg-red p-1 ${
                        active ? "bg-pagecolor text-green" : "text-gray-900"
                      }`
                    }
                    value={item}
                  >
                    {({ selected, active }) => (
                      <>
                        <span
                          className={`block truncate ${
                            selected ? "font-medium" : "font-normal"
                          }`}
                        >
                          {item}
                        </span>
                        {selected ? (
                          <span
                            className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                              active ? "text-white" : "text-teal-600"
                            }`}
                          ></span>
                        ) : null}
                      </>
                    )}
                  </Combobox.Option>
                ))
              )}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </div>
  );
};

export default SearchManufacturer;
