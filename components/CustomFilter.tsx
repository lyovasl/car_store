"use client";

import Image from "next/image";
import React from "react";
import { Fragment, useState } from "react";
import { useRouter } from "next/navigation";
import { Listbox, Transition } from "@headlessui/react";
import { CustomerFilterProps } from "@/types";
import { updateSearchParams } from "@/utils";

const CustomFilter = ({ options, setFilter }: CustomerFilterProps) => {
  const [selected, setSelected] = useState(options[0]);
  const router = useRouter();

  return (
    <div className="">
      <Listbox
        value={selected}
        onChange={(e) => {
          setSelected(e);
          setFilter(e.value);
        }}
      >
        <div className=" relative z-10 flex  justify-between ">
          <Listbox.Button className=" flex p-[8px] w-[120px] text-[20px] bg-white justify-between rounded-[6px] gap-  ">
            <span>{selected.title}</span>
            <Image
              src="/icons/arrows_filter.svg"
              alt="Arrows"
              width={20}
              height={20}
            />
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="trnsition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="bg-white gap-2 flex flex-col absolute top-[50px] w-full">
              {options.map((option) => (
                <Listbox.Option
                  key={option.title}
                  value={option}
                  className={({ active }) =>
                    `px-2 py-2 cursor-default select-none flex flex-col ${
                      active ? "bg-pagecolor text-black" : "text-grey-100"
                    }`
                  }
                >
                  {({ selected }) => (
                    <span
                      className={`block truncet ${
                        selected ? "font-bold" : "font-normal"
                      }`}
                    >
                      {option.title}
                    </span>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
};

export default CustomFilter;
