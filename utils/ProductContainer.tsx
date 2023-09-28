"use client";
import { useRef, useState } from "react";
import { Product } from "../types/product-type";
import { useHover } from "usehooks-ts";
import Image from "next/image";
import image from "../assests/banner iphone.jpg";
import star from "../assests/rating/star.png";
import halfstar from "../assests/rating/halfstar.png";
import { BookmarkIcon } from "@heroicons/react/24/solid";
import { ShoppingBagIcon } from "@heroicons/react/24/outline";
import ts from "typescript";
import { useRouter } from "next/navigation";
import { useAppDispatch } from "../redux/hooks";
import { addToCart } from "../redux/slices/CartItems";


interface Props {
  product: Product;
}

function ProductContainer({ product }: Props) {
  const dispatch = useAppDispatch();
  const [favItems, setFavItems] = useState<boolean>(false);
  const router = useRouter();
  return (
    <div  className="  cursor-pointer bg-white group z-0 hover:z-50 relative transition-all ease-linear  lg:hover:scale-105  lg:hover:shadow-lg lg:hover:rounded-lg lg:hover:border-none w-[178px] md:w-[220px] space-y-2   p-6  border h-[450px]  ">
      <div onClick={() => router.push(`/product/${product.id}`)} className=" relative ">
        <Image 
          src={product.thumbnail}
          alt="product image"
          width={260}
          height={200}
          className=" w-[240px] h-[200px] object-cover  object-center rounded-lg"
        />
        <p className=" mt-4 font-bold text-md line-clamp-2 ">{product.title}</p>
      </div>
      <div className=" flex">
        {new Array(Math.floor(product.rating)).fill(0).map((_, index) => (
          <Image key={index} src={star} alt="star" className=" w-3 h-3" />
        ))}
        {product.rating % 2 !== 0 && (
          <Image src={halfstar} alt="half star" className="  w-3 h-3" />
        )}
      </div>
      <div className=" text-sm flex space-x-3">
        <p className=" text-gray-400 line-through ">${product.price}</p>
        <div className=" bg-gray-200 px-2 ">
          <p className=" text-[10px]">{product.discountPercentage}%</p>
        </div>
      </div>
      <div>
        <p className=" text-lg ">
          ${(product.price - (product.price * product.discountPercentage) / 100).toFixed(0)}
        </p>
      </div>

      <div className="      pt-4 flex items-center  justify-between">
        <div className=" w-[50px] h-[40px] flex justify-center group/cart hover:bg-white bg-blue-500 border transition-all ease-linear duration-200 border-blue-500 rounded-lg  ">
          <ShoppingBagIcon onClick={()=> dispatch(addToCart(product))} className=" w-6  text-white  group-hover/cart:text-blue-500 transition-all ease-linear duration-200" />
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
