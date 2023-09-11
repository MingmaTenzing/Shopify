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
function FeaturedProduct({
  rating,
  thumbnail,
  title,
  price,
  discountPercentage,
}: Product) {
  const ref = useRef(null);
  const [favItems, setFavItems] = useState<boolean>(false);
  const isProductHover =  useHover(ref)
  return (
    <div
  
     ref={ref} className=" bg-white  transition-all ease-linear  lg:hover:scale-105   lg:hover:shadow-2xl lg:hover:rounded-lg lg:hover:border-none w-[320px] md:w-[240px]  md:min-w-[240px] lg:min-w-[280px] p-6 space-y-2  border  hover:h-[440px]">
      <div className=" relative ">
        <Image
          src={thumbnail}
          alt="product image"
          width={260}
          height={200}
          className=" w-[240px] h-[200px] object-cover  object-center rounded-lg"
        />
        <p className=" mt-4 font-bold text-lg">{title}</p>
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
      <p className=" text-lg ">
        ${(price - (price * discountPercentage) / 100).toFixed(0)}
      </p>
      <div className=" lg:hidden pt-4 flex items-center  justify-between">
        <button className=" hover:bg-white  hover:text-blue-500 transition-all ease-linear duration-150 border border-blue-500 bg-blue-500 text-white px-6  py-3 rounded-lg text-sm">
          Add to cart
        </button>
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
      {/** HOVER FEATURE */}
      <AnimatePresence>
        {isProductHover && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y:20}}
            transition={{ duration: 0.2 }}
            className="  hidden  pt-4 lg:flex   items-center  justify-between"
          >
            <button className=" hover:bg-white  hover:text-blue-500 transition-all ease-linear duration-150 border border-blue-500 bg-blue-500 text-white px-6  py-3 rounded-lg text-sm">
              Add to cart
            </button>
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
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
export default FeaturedProduct;
