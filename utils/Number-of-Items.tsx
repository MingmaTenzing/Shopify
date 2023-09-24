'use client'
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline"
import { useState } from "react";

type Props = {}
function NumberofItems({}: Props) {
    const [numberofItems, setNumberofItems] = useState<number>(1);

  return (
  <div className=" bg-[#fafafa] rounded-lg  flex  justify-between border overflow-hidden  h-14  items-center  w-20">
  <div className=" pl-4  ">{numberofItems}</div>


  <div className=" flex flex-col">
    <button className="  bg-white  cursor-pointer w-8  p-2 border-b border-l">
      <ChevronUpIcon
        onClick={() => setNumberofItems(numberofItems + 1)}
        className=" "
      />
    </button>
    <button className=" bg-white  cursor-pointer w-8 p-2  border-b border-l ">
      <ChevronDownIcon
        onClick={() => setNumberofItems(numberofItems - 1)}
        className="  "
      />
    </button>
  </div>
  </div>
  )
}
export default NumberofItems