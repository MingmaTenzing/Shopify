import Image from "next/image";
import NumberofItems from "../../utils/Number-of-Items";
import { TrashIcon } from "@heroicons/react/24/outline";
import test from "../../assests/test1.webp"

type Props = {};
function CartModalItem({}: Props) {
  return (
    <div className=" flex space-x-2 justify-between mt-4 border-b py-3">
      <Image
        src={test}
        alt="product"
        width={60}
        height={60}
        className=" bg-gray-300  w-30 h-[60px] object-cover"
      />
      <div className=" flex flex-col space-y-1">
        <span className=" text-[10px] text-gray-400">
          Wooodstock electronics
        </span>
        <h4 className="  text-sm font-semibold">
          Watch Version 17 sdfds fsd fds a
        </h4>
        <span className=" text-[12px]   text-gray-400">Stock: 14</span>
        <span className="">$790.00</span>
      </div>
      <div className=" flex flex-col items-end space-y-3">
        <NumberofItems />
        <TrashIcon className=" w-5" />
      </div>
    </div>
  );
}
export default CartModalItem;
