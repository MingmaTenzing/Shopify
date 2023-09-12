"use client";

import { useEffect, useState } from "react";
import { fetchLaptops } from "../dummyjson/fetchdata";
import { Product } from "../types/product-type";

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
    <div className=" space-y-4 md:space-y-0 md:flex  lg:justify-between md:flex-row-reverse w-full items-center relative">
      <div className="  space-y-4 md:w-[60%]  m-auto">
        <div className=" relative lg:p-0 p-4">
          <h2 className="uppercase  font-semibold text-5xl text-gray-200">
            {" "}
            top laptops{" "}
          </h2>
          <p className=" uppercase text-lg absolute top-10 lg:top-6">Woodstock Choice</p>
        </div>
        <div className=" ">
          <span className=" lg:hidden flex  justify-center flex-wrap">
          {featuredLaptops?.slice(0, 2).map((device) => (
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

          </span>
          <span className=" hidden lg:flex">
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

          </span>
          
        </div>
        <div className=" flex justify-center ">
          <button className=" cursor-pointer border-blue-500 border text-blue-500 px-3 py-2 rounded-lg">
            View All
          </button>
        </div>
      </div>
      <div className="  md:w-[40%] lg:w-[40%] ">

      <Image src={laptopBanne} alt=" laptops" className="   md:w-[90%] md:h-[500px]  lg:h-[504px] lg:w-[full] object-cover object-center" />
      </div>
    </div>
  );
}
export default TopLaptops;
