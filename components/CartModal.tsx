'use client'
import {
    LockClosedIcon,
  PencilSquareIcon,
  TrashIcon,
  TruckIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

import CartModalItem from "./small components/Cart-Modal-Item";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { changeCartModalState } from "../redux/slices/CartModal";
import { useEffect, useState } from "react";
import { CartIem } from "../types/cartItem-type";

type Props = {
};
function CartModal({}: Props) {
  const dispatch = useAppDispatch();

  
    const data = useAppSelector((state) => state.cart.cart)

  
  return (
    <div className=" h-[100vh]   w-[340px] drop-shadow-2xl">

    <div className="  z-100 bg-[white] p-4 overflow-y-scroll scrollbar-hide ">
      <div className=" bg-white flex  justify-between  border-b-2 pb-2">
        <p className=" text-xl font-semibold">Your Cart</p>
        <XMarkIcon onClick={() => dispatch(changeCartModalState())} className=" w-6" />
      </div>
      <div className=" bg-white max-h-[60vh] w-full overflow-y-scroll scrollbar-hide">
      {
        data?.map((carItem) => <CartModalItem cartItem={carItem} key={carItem.id} />)
      }
      </div>
      </div>

      <div className=" space-y-4 border-t bg-[#f8f8f8] p-4">
        <div className=" flex justify-center">
          <div className=" rounded-lg flex space-x-2 justify-center w-[150px] bg-white px-3 py-2 border">
            <PencilSquareIcon className=" w-5" />
            <p className=" text-sm">Note</p>
          </div>
          <div className=" flex rounded-lg space-x-2 justify-center w-[150px] bg-white px-3 py-2 border">
            <TruckIcon className=" w-5" />
            <p className=" text-sm">Shipping</p>
          </div>
          
        </div>
        <div className=" ">
            <div className=" flex justify-between">
            <p className=" uppercase font-bold text-xl">Subtotal</p>
            <p className=" uppercase  text-xl">$5,243</p>

            </div>
            <p className=" text-sm text-gray-400">Taxes and shipping calculate at checkout</p>
        </div>
        <div className=" flex justify-center space-x-4">
            <button className="  px-4 py-3 font-semibold border border-blue-500 text-blue-500 rounded-lg">View cart</button>
        <button className=" px-4 py-3 font-semibold bg-blue-500 text-white flex space-x-2 rounded-lg">
            <LockClosedIcon className=" w-5" />
        <span>Check out</span>
        </button>
        </div>
        
      </div>
  
    </div>
  );
}
export default CartModal;
