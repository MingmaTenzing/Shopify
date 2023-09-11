"use client";
import axios from "axios";
import FeaturedProduct from "../utils/FeaturedProduct";
import { AnimatePresence, motion } from "framer-motion";
import { Product } from "../types/product-type";
import { fetchSmartphones } from "../dummyjson/fetchdata";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import image from "../assests/test.jpg";
import star from "../assests/rating/star.png";
import halfstar from "../assests/rating/halfstar.png";
import { BookmarkIcon, ScaleIcon } from "@heroicons/react/24/solid";
import { useHover } from "usehooks-ts";
type Props = {};
function Featured({}: Props) {
  const [smartphones, setSmartphones] = useState<Product[]>();
  const [favItems, setFavItems] = useState<boolean>(false);
  const ref = useRef(null);
  const isProductHover = useHover(ref);
  useEffect(() => {
    async function getData() {
      const data = await fetchSmartphones();
      setSmartphones(data);
    }
    getData();
  }, []);
  console.log(smartphones);
  const rating = 4.3;

  return (
    <div className=" z-20 md:w-[90%]  md:m-auto  p-4 py-20">
      <div className=" flex items-center space-x-4">
      <h2 className=" font-semibold text-2xl md:text-3xl lg:text-4xl ">Featured Products</h2>
      <span className="   flex-grow h-1 bg-gray-200"></span>
      </div>
      <div className="mt-4 lg:mt-8 flex flex-col md:flex-row md:overflow-x-scroll scrollbar-hide  ">
        {smartphones?.map((device) => (
          <FeaturedProduct
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
    </div>
  );
}
export default Featured;
