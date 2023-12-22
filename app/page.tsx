"use client";

import { useEffect, useState } from "react";
import {
  CarCard,
  CustomFilter,
  Hero,
  LoginForm,
  SearchBar,
  ShowMore,
} from "@/components";
import { fuely, yearsofProduction } from "@/constants";
import { fetchCars } from "@/utils";
import Image from "next/image";

export default function Home() {
  // const allCars = await fetchCars({
  //   manufacturer: searchParams.manufacturer || "",
  //   year: searchParams.year || 2022,
  //   fuel: searchParams.fuel || "",
  //   limit: searchParams.limit || 10,
  //   model: searchParams.model || "",
  // });

  const [allCars, setAllCars] = useState([]);
  const [loading, setLoading] = useState(false);

  // search states
  const [manufacturer, setManufacturer] = useState("");
  const [model, setModel] = useState("");

  //filter states
  const [fuel, setFuel] = useState("");
  const [year, setYear] = useState(2022);
  // pagination state
  const [limit, setLimit] = useState(10);

  const getCars = async () => {
    setLoading(true);

    try {
      const result = await fetchCars({
        manufacturer: manufacturer || "",
        year: year || 2022,
        fuel: fuel || "",
        limit: limit || 10,
        model: model || "",
      });
      setAllCars(result);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    console.log(fuel, year, "---");
    getCars();
  }, [fuel, limit, year, manufacturer, model]);

  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;

  return (
    <main className="overflow-hidden font-customFont bg-milkcolor mx-auto w-[1920px]">
      <Hero />

      <div className="max-w-[1400px] mx-auto mb-12 " id="discover">
        <div>
          <h1 className="text-5xl mb-4">Car Catlogue</h1>
          <p className="text-4xl">Road trip with our cars</p>
        </div>

        <div className="flex justify-between mt-12 mb-12">
          <SearchBar setManufacturer={setManufacturer} setModal={setModel} />

          <div className="flex">
            <CustomFilter title="fuel" options={fuely} setFilter={setFuel} />
            <CustomFilter
              title="year"
              options={yearsofProduction}
              setFilter={setYear}
            />
          </div>
        </div>

        {allCars.length > 0 ? (
          <section>
            <div className="flex flex-wrap justify-center gap-8">
              {allCars?.map((car) => (
                <CarCard car={car} key={car} />
              ))}
            </div>

            {loading && (
              <div className="mt-16 w-full flex-center">
                <Image
                  src="/icons/loader_icon.svg"
                  alt="loader"
                  width={50}
                  height={50}
                  object-fit="cover"
                />
              </div>
            )}

            <ShowMore
              pageNumber={limit || 10 / 10}
              isNext={limit > allCars.length}
              setLimit={setLimit}
            />
          </section>
        ) : (
          <div>
            <h2 className="text-black font-bold">Oops,no results</h2>
          </div>
        )}
      </div>
    </main>
  );
}
