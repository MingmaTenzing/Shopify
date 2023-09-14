import TitleSection from "../utils/TitleSection";
import news1 from "../assests/newssection/news1.jpg";
import news2 from "../assests/newssection/news2.jpg";
import news3 from "../assests/newssection/news3.jpg";
import Image from "next/image";
import { CalendarIcon, UserIcon } from "@heroicons/react/24/outline";

type Props = {};
function WoodstockNews({}: Props) {
  return (
    <div className=" p-4 lg:w-[1200px] m-auto">
      <TitleSection title="Woodstock News" />
      <div className=" mt-4 flex lg:justify-center  overflow-x-scroll  space-x-4 scrollbar-hide  ">
        <div className=" w-[310px] lg:w-[400px] lg:h-[220px] overflow-hidden group min-w-[300px] h-[200px] rounded-lg relative">
          <Image
            src={news1}
            alt="News image"
            className="  w-full h-full object-cover lg:group-hover:scale-110 transition-all ease-linear duration-200 rounded-lg"
          />
          <div className=" text-white text-sm  absolute bottom-4 left-4 space-y-2 ">
            <p className=" font-semibold">
              Best Macbooks deals this Black Friday
            </p>
            <div className=" flex space-x-4 ">
              <div className=" flex items-center space-x-2">
                <CalendarIcon className=" w-4" />
                <p className=" text-[12px]">April 1, 2023</p>
              </div>
              <div className=" flex items-center space-x-2">
                <UserIcon className=" w-4" />
                <p className=" text-[12px]">Mingma Tenzing</p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-[310px] overflow-hidden lg:w-[400px] lg:h-[220px] group min-w-[300px] h-[200px] rounded-lg relative">
          <Image
            src={news2}
            alt="News image"
            className=" h-full w-full object-cover lg:group-hover:scale-110 transition-all ease-linear duration-200 rounded-lg"
          />
          <div className=" text-white text-sm  absolute bottom-4 left-4 space-y-2 ">
            <p className=" font-semibold">
              Best Macbooks deals this Black Friday
            </p>
            <div className=" flex space-x-4 ">
              <div className=" flex items-center space-x-2">
                <CalendarIcon className=" w-4" />
                <p className=" text-[12px]">April 1, 2023</p>
              </div>
              <div className=" flex items-center space-x-2">
                <UserIcon className=" w-4" />
                <p className=" text-[12px]">Mingma Tenzing</p>
              </div>
            </div>
          </div>
        </div>

        <div className=" w-[310px] lg:w-[400px] lg:h-[220px] overflow-hidden group min-w-[300px] h-[200px] rounded-lg relative">
          <Image
            src={news3}
            alt="News image"
            className=" h-full w-full object-cover lg:group-hover:scale-110 transition-all ease-linear duration-200 rounded-lg"
          />
          <div className=" text-white text-sm  absolute bottom-4 left-4 space-y-2 ">
            <p className=" font-semibold">
              Best Macbooks deals this Black Friday
            </p>
            <div className=" flex space-x-4 ">
              <div className=" flex items-center space-x-2">
                <CalendarIcon className=" w-4" />
                <p className=" text-[12px]">April 1, 2023</p>
              </div>
              <div className=" flex items-center space-x-2">
                <UserIcon className=" w-4" />
                <p className=" text-[12px]">Mingma Tenzing</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default WoodstockNews;
