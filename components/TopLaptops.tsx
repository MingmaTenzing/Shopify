"use client";

import { useEffect, useState } from "react";
import { fetchLaptops } from "../dummyjson/fetchdata";
import { Product } from "../types/product-type";
import Featured from "./Featured";
import FeaturedProduct from "../utils/FeaturedProduct";
import Image from "next/image";
import laptopBanne from "../assests/featured laptops.webp";
import ProductContainer from "../utils/ProductContainer";

type Props = {};
function TopLaptops({}: Props) {
  const [featuredLaptops, setFeaturedLaptops] = useState<Product[]>();

  useEffect(() => {
    async function getLaptops() {
      const data = await fetchLaptops();
      setFeaturedLaptops(data);
    }
    getLaptops();
  }, []);
  console.log(featuredLaptops);

  return (
    <div className=" lg:flex  lg:flex-row-reverse relative">
      <div className="  space-y-4 md:w-[90%] lg:w-auto m-auto">
        <div className=" relative lg:p-0 p-4">
          <h2 className="uppercase  font-semibold text-5xl text-gray-200">
            {" "}
            top laptops{" "}
          </h2>
          <p className=" uppercase text-lg absolute top-10 lg:top-6">Woodstock Choice</p>
        </div>
        <div className=" flex flex-col items-center md:flex-row md:items-start md:justify-center">
          {featuredLaptops?.slice(0, 3).map((device) => (
            <ProductContainer 
              id={device.id}
              description={device.description}
              stock={device.stock}
              brand={device.brand}
              category={device.category}
              images={device.images}
              key={device.id}
              rating={device.rating}
              thumbnail={device.thumbnail}
              title={device.title}
              price={device.price}
              discountPercentage={device.discountPercentage}
            />
          ))}
        </div>
        <div className=" flex justify-center ">
          <button className=" cursor-pointer border-blue-500 border text-blue-500 px-3 py-2 rounded-lg">
            View All
          </button>
        </div>
      </div>
      <div className=" h-[100%]">

      <Image src={laptopBanne} alt=" laptops" className=" md:h-[320px] lg:w-[400px]  lg:h-[504px] object-cover object-center" />
      </div>
    </div>
  );
}
export default TopLaptops;
