"use client";
import { useRef, useState } from "react";
import { Product } from "../types/product-type";
import { useHover } from "usehooks-ts";
import Image from "next/image";
import image from "../assests/banner iphone.jpg";
import star from "../assests/rating/star.png";
import halfstar from "../assests/rating/halfstar.png";
import { BookmarkIcon } from "@heroicons/react/24/solid";
import { AnimatePresence, motion } from "framer-motion";
import { ShoppingBagIcon } from "@heroicons/react/24/outline";
function ProductContainer({
  rating,
  thumbnail,
  title,
  price,
  discountPercentage,
}: Product) {
  const [favItems, setFavItems] = useState<boolean>(false);
  return (
    <div className=" bg-white group z-0 hover:z-50 relative transition-all ease-linear  lg:hover:scale-105  lg:hover:shadow-lg lg:hover:rounded-lg lg:hover:border-none w-[190px] md:w-[220px] space-y-2   p-6  border h-[450px]  ">
      <div className=" relative ">
        <Image
          src={thumbnail}
          alt="product image"
          width={260}
          height={200}
          className=" w-[240px] h-[200px] object-cover  object-center rounded-lg"
        />
        <p className=" mt-4 font-bold text-md ">{title}</p>
      </div>
      <div className=" flex">
        {new Array(Math.floor(rating)).fill(0).map((_, index) => (
          <Image key={index} src={star} alt="star" className=" w-3 h-3" />
        ))}
        {rating % 2 !== 0 && (
          <Image src={halfstar} alt="half star" className="  w-3 h-3" />
        )}
      </div>
      <div className=" text-sm flex space-x-3">
        <p className=" text-gray-400 line-through ">${price}</p>
        <div className=" bg-gray-200 px-2 ">
          <p className=" text-[10px]">{discountPercentage}%</p>
        </div>
      </div>
      <div>
        <p className=" text-lg ">
          ${(price - (price * discountPercentage) / 100).toFixed(0)}
        </p>
      </div>

      <div className="      pt-4 flex items-center  justify-between">
        <div className=" w-[50px] h-[40px] flex justify-center group/cart hover:bg-white bg-blue-500 border transition-all ease-linear duration-200 border-blue-500 rounded-lg  ">

        <ShoppingBagIcon className=" w-6  text-white  group-hover/cart:text-blue-500 transition-all ease-linear duration-200" />
        </div> 
        {favItems ? (
          <BookmarkIcon
            className=" w-8  text-yellow-400  cursor-pointer"
            onClick={() => setFavItems(!favItems)}
          />
        ) : (
          <BookmarkIcon
            className=" w-8 text-gray-200  cursor-pointer"
            onClick={() => setFavItems(!favItems)}
          />
        )}
      </div>
    </div>
  );
}
export default ProductContainer;
