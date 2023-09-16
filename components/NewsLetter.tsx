import Image from "next/image";
import bg from "../assests/footer-bg.jpg";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";

type Props = {};
function NewsLetter({}: Props) {
  return (
    <div className=" mt-10 overflow-hidden">
      <div className=" text-center  relative w-full  h-[300px]">
        <Image src={bg} alt="bg" className=" brightness-50 w-full h-full object-cover" />
        <div className=" absolute top-1/2 left-1/2 -translate-x-1/2  w-full m-auto flex flex-col items-center -translate-y-1/2 z-10 space-y-4">
          <p className=" text-white md:text-4xl text-3xl font-bold">
            Subscirbe to our emails
          </p>
          <p className=" text-gray-300">
            Be the first to know about new collections and exclusive offers.
          </p>
          <div className=" flex bg-white  lg:w-[40%] w-[80%] rounded-lg h-20  p-4">
            <input placeholder=" Email"  className="  flex-grow outline-none"></input>
            <div className=" bg-blue-500 flex justify-center px-3 rounded-lg   ">
            <ArrowRightIcon  className="  rounded-lg w-8  text-white" />

            </div>
          </div>
        </div>
        <span className=" absolute h-full w-full  bg-blue-700 top-0  opacity-60 mix-blend-multiply">
          {" "}
        </span>
      </div>
    </div>
  );
}
export default NewsLetter;
