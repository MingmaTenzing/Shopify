import {
  CheckIcon,
  ScaleIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/outline";
import { StarIcon } from "@heroicons/react/24/solid";

type Props = {};
function ProductLoadingSkeleton({}: Props) {
  return (
    <div className=" bg-[#fafafa]">
      <main className=" animate-pulse md:flex md:space-x-6 lg:space-x-10  md:justify-center lg:w-[1200px] m-auto pt-10 p-4 space-y-4 md:space-y-0">
        <section className="  rounded-lg w-full md:w-[400px] h-[400px] md:h-[400px] bg-gray-400"></section>
        <section className=" space-y-5">
          <div className=" w-[200px] h-3 bg-gray-500"></div>
          <div className=" w-[300px] h-4 bg-gray-500"></div>
          <div className=" flex items-center space-x-3">
            <div className=" flex">
              <StarIcon className=" text-gray-500  w-5" />
              <StarIcon className=" text-gray-500  w-5" />
              <StarIcon className=" text-gray-500  w-5" />
              <StarIcon className=" text-gray-500  w-5" />
              <StarIcon className=" text-gray-500  w-5" />
            </div>
            <div className=" w-[70px] h-4 bg-gray-400"></div>
          </div>
          <div className=" w-[100px] h-4 bg-gray-500"></div>

          <div
            id="PRODUCT DESCRIPTION SECTION"
            className=" rounded-lg bg-white  lg:w-[600px] p-4 space-y-6"
          >
            <div className=" w-[200px] h-3 bg-gray-400"></div>
            <div className=" w-[150px] h-3 bg-gray-400"></div>
            <div className=" w-[100px] h-3 bg-gray-400"></div>
            <div className=" w-full h-2 bg-gray-400"></div>
            <div className=" w-[200px] h-2 bg-gray-400"></div>
            <div className=" flex space-x-3">
              <div className=" h-10 w-10 bg-gray-400 rounded-lg"></div>
              <div className=" h-10 w-24 bg-gray-400 rounded-lg"></div>
            </div>
            <div className=" flex items-center space-x-3">
              <CheckIcon className=" text-gray-400 w-6" />
              <div className=" space-y-2">
                <div className=" w-[100px] h-1 bg-gray-400" />{" "}
                <div className=" w-[100px] h-1 bg-gray-400" />{" "}
              </div>
            </div>
            <div className=" border-t flex space-x-2 py-4 items-center ">
              <ScaleIcon className=" w-6 text-gray-400" />
              <div className=" w-[100px] h-1 bg-gray-400" />
            </div>
          </div>

          <div
            id="STOCK AVAILABILTIY"
            className=" bg-white rounded-lg p-4 space-y-6"
          >
            <div className=" w-[240px] h-1 bg-gray-400" />
            <div className=" w-[240px] h-1 bg-gray-400" />
            <div className=" w-[240px] h-1 bg-gray-400" />
          </div>
        </section>
      </main>
    </div>
  );
}
export default ProductLoadingSkeleton;
