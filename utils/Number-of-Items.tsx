'use client'
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline"
import { useState } from "react";
import { CartItem } from "../types/cartItem-type";
import { useAppDispatch } from "../redux/hooks";
import { decreaseQuantity, increaseQuantity } from "../redux/slices/CartItems";

type Props = {
  product:CartItem;
}
function NumberofItems({product}: Props) {
  const dispatch = useAppDispatch()

  return (
  <div className=" bg-[#fafafa] rounded-lg  flex  justify-between border overflow-hidden  h-14  items-center  w-20">
  <div className=" pl-4  ">{product.quantity}</div>


  <div className=" flex flex-col">
    <button    onClick={() => dispatch(increaseQuantity(product))} className="  bg-white  cursor-pointer w-8  p-2 border-b border-l">
      <ChevronUpIcon
   
        className=" "
      />
    </button>
    <button onClick={() => dispatch(decreaseQuantity(product))} className=" bg-white  cursor-pointer w-8 p-2  border-b border-l ">
      <ChevronDownIcon
        className="  "
      />
    </button>
  </div>
  </div>
  )
}
export default NumberofItems