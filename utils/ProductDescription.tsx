import { use, useState } from "react";
import { Product } from "../types/product-type";
import {
  CheckIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  ScaleIcon,
} from "@heroicons/react/24/outline";
import NumberofItems from "./Number-of-Items";
import AddtoCart from "./AddToCart-Button";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { addToCart } from "../redux/slices/CartItems";
import ViewCartButton from "./ViewCartButton";

type Props = {
  productInfo: Product;
};
function ProductDescription({ productInfo }: Props) {
  const itemsinCart = useAppSelector((state) => state.cart.cart)
  const dispatch = useAppDispatch();
  return (
    <div className=" space-y-6 bg-white rounded-lg p-4">
      <div className=" flex space-x-1 items-center">
        <p className=" text-gray-600">Brand</p>
        <span>:</span>
        <p className=" font-[500]">{productInfo?.brand}</p>
      </div>
      <div className=" flex space-x-1 items-center">
        <p className=" text-gray-600">Category</p>
        <span>:</span>
        <p className=" font-[500] uppercase">{productInfo?.category}</p>
      </div>
      <div>
        <p className=" text-gray-600">Description:</p>
        <p>{productInfo?.description}</p>
      </div>
      <div className=" flex items-center space-x-3">
      {/**   <NumberofItems number={productInfo.quantity} /> */}

{
  itemsinCart.find((item) => item.id == productInfo.id) ? ( <div>
<ViewCartButton />

</div>):( <div onClick={() => dispatch(addToCart(productInfo))}>
            <AddtoCart />
        
        </div>)
  
}
       
      </div>

      {/** PICKUP AVAILABLE */}
      <div className=" flex items-center space-x-2">
        <CheckIcon className="w-6 text-green-500" />
        <div className="">
          <p className=" ">Pickup Available in Perth</p>
          <p className=" font-light text-[12px]">Usually ready in 24 hours</p>
        </div>
      </div>
      {/** ADD TO COMPARE */}
      <div className=" border-t cursor-not-allowed flex py-4 space-x-4 text-gray-500 font-light">
        <ScaleIcon className=" w-6" />
        <p>Add to compare</p>
      </div>
    </div>
  );
}
export default ProductDescription;
