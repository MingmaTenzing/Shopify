import { ShoppingBagIcon } from "@heroicons/react/24/outline";
import { BookmarkIcon,StarIcon } from "@heroicons/react/24/solid";

type Props = {};

function LoadingSkeleton({}: Props) {
  return (
    <div className="  animate-pulse">
      <div className="  space-y-4 p-6 h-[450px] w-[178px] md:w-[220px]  border ">
        <div className="  w-[full] h-[200px] bg-gray-400"></div>
        <div className=" w-full h-2 bg-gray-400"></div>
        <div className=" flex">
          <StarIcon className=" w-4 h-4 text-gray-400" />
          <StarIcon className=" w-4 h-4 text-gray-400" />
          <StarIcon className=" w-4 h-4 text-gray-400" />
          <StarIcon className=" w-4 h-4 text-gray-400" />
          <StarIcon className=" w-4 h-4 text-gray-400" />
        </div>
        <div className=" w-[50%] h-2 bg-gray-400"></div>
        <div className=" w-[40%] h-2 bg-gray-400"></div>
        <div className=" flex justify-between  items-center pt-6">
        <div className=" w-[50px] h-[40px] flex justify-center group/cart  bg-gray-400 border transition-all ease-linear duration-200 rounded-lg  ">
          <ShoppingBagIcon className=" w-6  text-white  " />
        </div>
        <BookmarkIcon className=" w-8  text-gray-400  cursor-pointer" />
      </div>

        </div>
    </div>
  );
}
export default LoadingSkeleton;
