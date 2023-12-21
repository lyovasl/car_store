"use client";
import React from "react";
import { CarProps } from "@/types";
import Image from "next/image";
import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { generateIamgeUrl } from "@/utils";

interface DetailsProps {
  isOpen: boolean;
  closeModal: () => void;
  car: CarProps;
}
const CardDetalis = ({ isOpen, closeModal, car }: DetailsProps) => {
  // console.log(car, "====");
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-800 bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200 "
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="bg-gray-300 p-6 relative w-full max-w-lg max-h-[90vh] overflow-y-auto transform rounded-2xl">
                  <button
                    className="absolute top-2 right-2 z-10 w-fit p-2 rounded-full"
                    type="button"
                    onClick={closeModal}
                  >
                    <Image
                      src="/icons/close_modal.svg"
                      alt=""
                      width={20}
                      height={20}
                      objectFit="contain"
                    />
                  </button>

                  <div className="flex-1 flex flex-col gap-3">
                    <div className="relative w-full h-40 bg-blue-600 bg-cover bg-center rounded-lg">
                      <Image
                        src={generateIamgeUrl(car, "angle")}
                        alt="Product"
                        fill
                        objectFit="contain"
                      />
                    </div>

                    <div className="flex gap-3">
                      {/*  */}
                      <div className="flex-1 relative w-full h-24 rounded-lg">
                        <Image
                          src={generateIamgeUrl(car, "29")}
                          alt="Product"
                          fill
                          objectFit="contain"
                        />
                      </div>
                      {/*  */}
                      {/*  */}
                      <div className="flex-1 relative w-full h-24 rounded-lg">
                        <Image
                          src={generateIamgeUrl(car, "13")}
                          alt="Product"
                          fill
                          objectFit="contain"
                        />
                      </div>
                      {/*  */}
                      {/*  */}
                      <div className="flex-1 relative w-full h-24 rounded-lg">
                        <Image
                          src={generateIamgeUrl(car, "33")}
                          alt="Product"
                          fill
                          objectFit="contain"
                        />
                      </div>
                      {/*  */}
                    </div>
                  </div>

                  <div className="flex-1 flex flex-col gap-2">
                    <h2 className="font-semibold text-[20px] my-4">
                      {car.make} {car.model}
                    </h2>

                    <div className="flex mt-3 flex flex-wrap gap-4">
                      {Object.entries(car).map(([key, value]) => (
                        <div
                          className="flex justify-between gap-5 w-full  text-right"
                          key={key}
                        >
                          <h4 className="text-gray-600 capitalize">
                            {key.split("_").join(" ")}
                          </h4>
                          <p className="font-semibold text-black-400">
                            {value}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default CardDetalis;
